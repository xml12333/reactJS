import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ItemsList } from ".";
const Categories = () => {
  const products = useSelector((state) => state.products.value);
  const [categoriesSet, setCategoriesSet] = useState(new Set());
  useEffect(() => {
    setCategoriesSet(
      products.reduce((cat, el) => cat.add(...el.categories), new Set())
    );
  }, [products]);

  return (
    <>
      {Array.from(categoriesSet).map((category, idx) => (
        <>
          <section key={idx} className="category" data-name={category}>
            <h2>{category}</h2>
            <div className="category__container">
              {products.map((product, id) => (
                <ItemsList key={id} category={category} product={product} />
              ))}
            </div>
          </section>
        </>
      ))}
    </>
  );
};

export default Categories;
