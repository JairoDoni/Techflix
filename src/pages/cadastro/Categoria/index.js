/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MuiThemeProvider, Dialog, DialogActions, Box, Button, Typography, Collapse,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import config from '../../../config';
import styles from './styles';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonComponent from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriesRepository from '../../../repositories/categories';
import TableCategories from '../../../components/TableCategories';

export default function CadastroCategoria() {
  const classes = styles.useStyles();

  const { handleChange, values } = useForm({
    title: '',
    description: '',
    cor: '',
  });

  const [categories, setCategories] = useState(['']);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [keySecurity, setKeySecurity] = useState('');

  function handleAlertSuccess() {
    setOpen(!open);
  }
  function handleAlertErrorTrue() {
    setOpenError(true);
  }
  function handleAlertErrorFalse() {
    setOpenError(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    if (keySecurity === config.KEY_SECURITY) {
      categoriesRepository.create({
        title: values.title,
        description: values.description,
        cor: values.cor,
      })
        .then(() => {
          handleAlertSuccess();
          handleAlertErrorFalse();
        }).catch(() => {
          handleAlertErrorTrue();
        });
    } else {
      handleAlertErrorTrue();
    }
  }

  const AlertSuccess = () => (
    <MuiThemeProvider theme={styles.theme}>
      <Dialog
        fullScreen
        open={open}
        onClose={handleAlertSuccess}
      >
        <div className={classes.close} align="right">
          <CloseIcon onClick={handleAlertSuccess} />
        </div>
        <Box className={classes.dialog} align="center" flexDirection="column">
          <Typography variant="h6" gutterBottom>
            Cadastro efetuado com sucesso!!!
          </Typography>
          <Link to="/">
            <CheckCircleIcon className={classes.icons} />
          </Link>
          <DialogActions className={classes.buttons}>
            <Link to="/" className={classes.buttons}>
              <Button color="secondary" className={classes.button}>
                OK
              </Button>
            </Link>
          </DialogActions>
        </Box>
      </Dialog>
    </MuiThemeProvider>
  );

  const AlertError = () => (
    <MuiThemeProvider theme={styles.theme}>
      <Collapse in={openError} className={classes.alertError}>

        <Alert severity="error" onClose={handleAlertErrorFalse}>
          Erro - Não foi possivel efetuar o cadastro
        </Alert>

      </Collapse>
    </MuiThemeProvider>
  );
  return (
    <PageDefault>
      {AlertSuccess()}
      <MuiThemeProvider theme={styles.theme}>
        <h1>
          Cadastro de Categoria:
          {' '}
          {values.title}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="category">
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
              value={values.cor}
              onChange={handleChange}
            />
            <FormField
              label="Codigo de segurança"
              type="text"
              name="codigo"
              value={keySecurity}
              onChange={(e) => setKeySecurity(e.target.value)}
            />
            {AlertError()}
          </div>
          <ButtonComponent>Cadastrar</ButtonComponent>
        </form>
        {/* {categories.length === 0 && (
          <div >

          </div>
        )} */}

        {categories.length === 0
          ? (
            <div className="loading">
              <div className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          )
          : (
            TableCategories()
          )}

      </MuiThemeProvider>
    </PageDefault>
  );
}
