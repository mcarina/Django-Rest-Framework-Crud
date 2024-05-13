# Projeto CRUD Django + React.js

Este é um projeto que demonstra a funcionalidade de um CRUD (Create, Read, Update, Delete) implementado em Django versão 5.

## Funcionalidades

- **Create**: Adiciona novos itens ao banco de dados.
- **Read**: Recupera e exibe informações do banco de dados.
- **Update**: Permite a edição de itens existentes no banco de dados.
- **Delete**: Remove itens do banco de dados.
- Dinâmico e interativo

## Instalação

Certifique-se de ter o Node, Python e Django instalados em sua máquina.

1. Clone este repositório:

```bash
git clone https://github.com/mcarina/Django-Rest-Api.git
```

2.Instale as dependências do frontend:
```bash
cd front_django
npm install
```
3.Instale as dependências do backend:
```bash
cd escola
pip install -r requirements.txt
```

## Configuração
4. banco de dados com postgresql,
   - configure o arquivo .env;
   - certifique-se de configurar o settings.py
   
```bash
    'NAME': 'django_banco',
    'USER' : 'postgres',
    'PASSWORD': ' ',
    'HOST': 'localhost',
    'PORT': '5432',

```

5.

```bash
python manage.py migrate
python manage.py runserver
```
