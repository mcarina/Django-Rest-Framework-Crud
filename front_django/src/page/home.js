import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from 'react-bootstrap';
import { BsEyeFill, BsPencilFill, BsTrashFill } from 'react-icons/bs'
import { Api } from '../contexts/api'
import CustomModal from "../components/modal";

function Home() {
  const [show, setShow] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [dadosTabelaAV, setDadosTabela] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formFields, setFormFields] = useState({
    curso: "",
    name: "",
    email: "",
    comentario: "",
    avaliacao: "",
    ativo: false
  });

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const response = await Api.get('v2/avaliacoes/');
          setDadosTabela(response.data.results);
          
      } catch (error) {
          console.error("Erro ao obter dados da API:", error);
      }
  };

  const fetchData2 = async () => {
    try {
        await Api.post('v2/avaliacoes/', formFields);
        handleClose();
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    fetchData2();
};

// Função para abrir o modal de edição
const handleEdit = (item) => {
    setFormFields({
        curso: item.curso,
        name: item.name,
        email: item.email,
        comentario: item.comentario,
        avaliacao: item.avaliacao,
        ativo: item.ativo
    });
    setShow(true); // Abre o modal de edição
    setEditingItem(item);
};

const handleCloseEditModal = () => {
    setShow(false);
};

const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await Api.put(`v2/avaliacoes/${editingItem.id}`, formFields);
      fetchData();
      handleCloseEditModal();
    } catch (error) {
      console.error("Erro ao atualizar registro:", error);
    }
  };

const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Deseja mesmo apagar?");

    if (confirmDelete) {
        try {
            await Api.delete(`v2/avaliacoes/${id}/`);
            fetchData();
        } catch (error) {
            console.error("Erro ao excluir registro:", error);
        }
    }
};

  return (

       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
          
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search Student" 
                        aria-label="Search"/>
                </form>
              </div>    
              </div>  

              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" 
                  style={{color:"green"}}>
                    <h2><b>Com django Rest</b></h2>
              </div>

              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                METODO POST
              </Button>

              <CustomModal
                    show={show}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                    formFields={formFields} />

             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            {Object.keys(dadosTabelaAV[0] || {}).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosTabelaAV.map((item, index) => (
                            <tr key={index}>
                                {Object.entries(item).map(([key, value]) => (
                                    <td key={key}>
                                    {key === "ativo" ? (value ? "Sim" : "Não") : value}
                                    </td>
                                ))}
                                <td>

                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"
                                        onClick={() => handleEdit(item)}
                                    >
                                        <i className="material-icons"><BsPencilFill/></i>
                                    </a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}
                                        onClick={() => handleDelete(item.id)} 
                                    >
                                        <i className="material-icons"><BsTrashFill/></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>   
        </div>  

      </div>    
      </div>  
  );
}

export default Home;