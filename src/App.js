
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemsListContainer from './pages/ItemsListContainer/ItemsListContainer';
import ItemsDetailContainer from './pages/ItemsDetailContainer/ItemsDetailContainer';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <BasicExample/>
      <Routes>
        <Route path="/" element={<ItemsListContainer/>}/>
        <Route path='detail' element={<ItemsDetailContainer/>}/>
        <Route path='cartitaaaaaa' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
