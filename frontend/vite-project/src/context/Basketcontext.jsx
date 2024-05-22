import React, { createContext } from 'react';
import useLocalStorage from '../hooks/UseLocalStorage';

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage('basket', []);

  const AddBasket = (product) => {
    const productExists = basket.find((item) => item._id === product._id);
    if (!productExists) {
      setBasket([...basket, { ...product, count: 1 }]); 
    }
  };

  const DeleteBasket = (productId) => {
    const updatedBasket = basket.filter((item) => item._id !== productId);
    setBasket(updatedBasket); 
  };

  const increaseBasket = (product_id) => {
    const updatedBasket = basket.map((item) => {
      if (item._id === product_id) {
        const newCount = (item.count || 0) + 1; 
        return { ...item, count: newCount };
      }
      return item;
    });
    setBasket(updatedBasket);
  };

  const decreaseBasket = (product_id) => {
    const updatedBasket = basket.map((item) => {
      if (item._id === product_id && item.count > 1) {
        const newCount = (item.count || 0) - 1; 
        return { ...item, count: newCount };
      }
      return item;
    }).filter((item) => item.count !== undefined); 
    setBasket(updatedBasket);
  };

  const basketData = {
    basket,
    AddBasket,
    DeleteBasket,
    increaseBasket,
    decreaseBasket,
  };

  return (
    <BasketContext.Provider value={basketData}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
