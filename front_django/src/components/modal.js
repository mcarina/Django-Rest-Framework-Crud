import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = ({ 
    show, handleClose, handleSubmit, formFields, setFormFields  
}) => {

    return (
    <div className="model_box">
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Record</Modal.Title>

      </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit}>
          <div class="form-group">
              <select 
                  class="form-control" 
                  id="cursoSelect"
                  name="curso"
                  value={formFields.curso}
                  onChange={(e) => setFormFields({ ...formFields, curso: e.target.value })}
              >
                  <option>Selecione</option>
                  <option value="1">Opção 1</option>
                  <option value="2">Opção 2</option>
                  <option value="3">Opção 3</option>
              </select>
          </div>

              <div class="form-group mt-3">
                  <input type="text" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter Nome"
                        name="name"
                        value={formFields.name}
                        onChange={(e) => setFormFields({ ...formFields, name: e.target.value })}             
                  />
              </div>

              <div class="form-group mt-3">
                  <input type="email" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="email@email.com"
                        name="email"
                        value={formFields.email}
                        onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
                  />
              </div>

              <div class="form-group mt-3">
                  <input type="text" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter Comentário"
                        name="comentario"
                        value={formFields.comentario}
                        onChange={(e) => setFormFields({ ...formFields, comentario: e.target.value })}
                        
                  />
              </div>
              
              <div class="form-group mt-3">
                  <input type="float" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="0.00 a 9.99"
                        name="avaliacao" 
                        value={formFields.avaliacao}
                        onChange={(e) => setFormFields({ ...formFields, avaliacao: e.target.value })}
                        
                  />
              </div>

              <div class="form-group mt-3">
                  <input 
                      type="checkbox" 
                      class="form-check-input" 
                      id="exampleCheck1" 
                      name="ativo" 
                      checked={formFields.ativo}
                      onChange={(e) => setFormFields({ ...formFields, ativo: e.target.checked })}
                  />
                  <label class="form-check-label" for="exampleCheck1">Ativo</label>
              </div>
                <button type="submit" class="btn btn-success mt-4">Add Record</button>
              </form>
          </Modal.Body>

    </Modal>

     {/* Model Box Finsihs */}
     </div>  

  );
};

export default CustomModal;
