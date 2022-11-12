export const getInputDataFromForm = (formSelector, attribut) => {
  const nodeList = formSelector.querySelectorAll(`input[${attribut}]`);
  return Array.from(nodeList).reduce(
    (obj, el) => ({
      ...obj,
      [el.attributes[attribut].value]: el.value,
    }),
    {}
  );
};

export const getCartItem = (shoppingCart,productId) =>{
  return shoppingCart.find(
    (el) =>  el.id === productId
  );
}

export const getProductById = (Products, productId) =>{
  return Products.find(
    (el) =>  el.id === productId
  );
}


