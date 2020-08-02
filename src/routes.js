import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/cadastro/Video';
import Category from './pages/cadastro/Categoria';
import Error404 from './pages/Error404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video" component={Register} />
        <Route path="/register/category" component={Category} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
