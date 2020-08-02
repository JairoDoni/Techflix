import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
  const initialValors = {
    title: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState(['']);
  const { handleChange, values, clearForm } = useForm(initialValors);

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);
    clearForm(initialValors);
  }

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080'
      : 'https://techflixseries.herokuapp.com/categories';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategories([
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
        {values.title}
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="title"
            value={values.title}
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
            name="cor"
            value={values.description}
            onChange={handleChange}
          />
          {/* <FormField
            label="Codigo de segurança"
            type="text"
            name="code"
            value={values.description}
            onChange={handleChange}
          /> */}
        </div>
        <Button>Cadastrar</Button>
      </form>

      {categories.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categories.map((category) => (
          <li key={`${category}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
