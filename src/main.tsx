import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './components/coreUi/Layout.tsx';
import App from './App.tsx';
import ChildLists from './components/list/ChildLists.tsx';
import ItemRoute from './routes/ItemRoute.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<App/>}/>
          <Route path='childList/:listId' element={<ChildLists/>}/>
          <Route path='item/:itemId' element={<ItemRoute />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
