import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import TextArea from '../../../components/TextArea';

export default function CadastroCategoria(){
  const [categorias, setCategorias] = useState(['']);

  const initialValors = {
    name: '',
    description: '',
    color:''
  }

  const [values, setValues] = useState(initialValors);

  function setValue(indice, valor){
    setValues({
      ...values,
      [indice]: valor
    });
  }

  
  function handleChange(e){
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    );
  }
  
  function handleSubmit(e){ 
    e.preventDefault();
    setCategorias([
      ...categorias,
      values
    ]); 
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <FormField 
        label="Nome"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <TextArea 
          label="Descrição"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
      
      
        {/* <div>
          <label>
            Descrição:
            <textarea  type="text" name="description" value={values.descricption} onChange={handleChange} />
          </label>
        </div> */}
        <div>
          <label>
            Color:
            <input  type="color" name="color" value={values.color} onChange={handleChange} />
          </label>
        </div>
        <TextArea 
          label="Codigo de segurança"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        </div>
        <button>Cadastrar</button>
      </form>

      {/* <ul>
        {categorias.map((categoria, indice) => {
          return (
          <li key={`${categoria}${indice}`}>
            {categoria.name}
            </li>
            )
        })}
      </ul> */}
    </PageDefault>
  );
}
