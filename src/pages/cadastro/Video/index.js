/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

export default function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { handleChange, values } = useForm({
    title: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=QzDjdlF1BQI',
    category: 'Front-End',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);
  console.log(categories);
  function handleSubmit(e) {
    e.preventDefault();

    // eslint-disable-next-line arrow-body-style
    const categorySelected = categories.find((category) => {
      return category.title === values.category;
    });
    // eslint-disable-next-line no-console
    console.log('categorySelected', categorySelected);

    videosRepository.create({
      title: values.title,
      categoryId: 1,
      url: values.url,
    }).then(() => {
      // eslint-disable-next-line no-console
      console.log('Cadastrado com sucesso!');
      history.push('/');
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Titulo do Video"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/register/category">
        Cadastro Categoria
      </Link>

    </PageDefault>
  );
}
