import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import TextField from '../../../components/FormField';



export default function CadastroVideo(){
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">
        Cadastro Categoria
      </Link>
      <TextField type="text" placeholder="Nome"/>

    </PageDefault>
  )
}
