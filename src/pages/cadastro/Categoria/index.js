import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const initialValors = {
    name: '',
    description: '',
    color: '',
  };
  const [categorias, setCategorias] = useState(['']);
  const [values, setValues] = useState(initialValors);
  function setValue(indice, valor) {
    setValues({
      ...values,
      [indice]: valor,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
  }

  useEffect(() => {
    // const URL_TOP = window.location.hostname.includes('localhost')
    // ? 'http://localhost:8080/categorias'
    // : 'http://localhost:8080/heroku/categorias';
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,

    //     {
    //       name: 'Front End',
    //       description: 'Uma categora ai.',
    //       color: '#cbd1ff',
    //     },
    //     {
    //       name: 'Backend',
    //       description: 'Uma categora ai.',
    //       color: '#727111',
    //     },

    //   ]);
    // }, 4 * 1000);
  }, []);
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.name}
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={values.description}
            onChange={handleChange}
          />
          <FormField
            label="Codigo de segurança"
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
