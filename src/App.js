import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/home" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/order-review" element={<OrderReview />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;