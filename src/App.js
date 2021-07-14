import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const[IsShown,setIsShown] = useState(false);

  const showCartHandler = () =>{
    setIsShown(true);
  };

  const hideCartHandler = () =>{
    setIsShown(false);
  };
  return (
   <CartProvider>
    { IsShown && <Cart  onClose={hideCartHandler}/>}
    <Header onShow={showCartHandler} />
    <main>
      <Meals />
    </main>
    </CartProvider>
);
}

export default App;
