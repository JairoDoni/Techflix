import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/cadastro/Video';
import Categoria from './pages/cadastro/Categoria';
import Error404 from './pages/Error404';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video" component={Cadastro} />
        <Route path="/cadastro/categoria" component={Categoria} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}



