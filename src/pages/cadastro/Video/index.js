import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  MuiThemeProvider, Dialog, DialogActions, Box, Typography, Collapse, Button,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import PageDefaultCategory from '../../../components/PageDefaultCategory';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import ButtonComponent from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';
import config from '../../../config';
import styles from './styles';

function CadastroVideo() {
  const classes = styles.useStyles();
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });
  const [categories, setCategories] = useState([]);
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
  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    handleAlertSuccess();
    // eslint-disable-next-line arrow-body-style
    const categorySelected = categories.find((category) => {
      return category.title === values.category;
    });
    if (keySecurity === config.KEY_SECURITY) {
      videosRepository.create({
        title: values.title,
        url: values.url,
        categoryId: categorySelected.id,
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
    <PageDefaultCategory>
      {AlertSuccess()}
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
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
          suggestions={categories.map((category) => (
            category.title
          ))}
        />

        <FormField
          label="Codigo de segurança"
          type="text"
          name="codigo"
          value={keySecurity}
          onChange={(e) => setKeySecurity(e.target.value)}
        />
        {AlertError()}
        <ButtonComponent type="submit">
          Cadastrar
        </ButtonComponent>
      </form>

      <br />
      <br />
    </PageDefaultCategory>
  );
}

export default CadastroVideo;
