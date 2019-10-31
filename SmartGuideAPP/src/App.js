import React from 'react';
// import {useSelector} from 'react-redux';

import createRouter from './routes';

// Componente separado porque futuramente teremos o Provider dando acesso ao Store neste componente

export default function App() {
  const signed = false; // Info do redux virá aqui

  const Routes = createRouter(signed);

  return <Routes />;
}
