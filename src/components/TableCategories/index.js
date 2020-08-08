import React, { useState, useEffect } from 'react';
import {
  makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, createMuiTheme, MuiThemeProvider, Typography,
} from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditIcon from '@material-ui/icons/Edit';
import categoriesRepository from '../../repositories/categories';

export default function TableCategories() {
  const classes = useStyles();
  const [initialDatas, setInitialDatas] = useState([]);
  function deleteCategoryById(category) {
    // categoriesRepository.deleteCategory(category.id);
    alert('Não a função delete não funciona ainda...');
  }
  function editCategoryById(category) {
    // categoriesRepository.deleteCategory(category.id);
    alert('Não a função editar não funciona ainda...');
  }
  useEffect(() => {
    categoriesRepository.getAll()
      .then((categories) => {
        setInitialDatas(categories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <TableContainer component={Paper} className="table">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Nome</Typography>
              </TableCell>
              <TableCell>
                <Typography align="left" variant="h6">Descrição</Typography>
              </TableCell>
              <TableCell>
                <Typography align="right" variant="h6">Editar</Typography>
              </TableCell>
              <TableCell>
                <Typography align="right" variant="h6">Remover</Typography>
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {initialDatas.map((category) => (
              <TableRow key={`${category.id}`}>
                <TableCell component="th" scope="row">
                  {category.title}
                </TableCell>
                <TableCell align="left">{category.description}</TableCell>
                <TableCell align="right"><EditIcon onClick={() => { editCategoryById(); }} /></TableCell>
                <TableCell align="right"><DeleteTwoToneIcon onClick={() => deleteCategoryById()} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    background: '#53585D',
  },
  dialog: {
    background: '#071107',
    color: '#B7DFB9',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  },
  titleAlert: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
