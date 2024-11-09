import React, { useState } from "react";
import { ear2, ear1, ear3 } from "../assets";
import ProductDetailModal from '../components/ProductModal';

const Products = [
  {
    name: `SE-Black RIGHT`,
    price: `1299`,
    prodimage: ear1,
    prodimage2: ear2,
  },
  {
    name: `SE-Grey RIGHT`,
    price: `1299`,
    prodimage: ear3,
    prodimage2: ear1,
  },
  {
    name: `SE-Beige RIGHT`,
    price: `1299`,
    prodimage: ear2,
      prodimage2: ear1, 
  },
  {
    name: `SE-white RIGHT`,
    price: `1299`,
    prodimage: ear2,
      prodimage2: ear1,
  },
  {
    name: `SE-Black RIGHT`,
    price: `1299`,
    prodimage: ear1,
      prodimage2: ear1,
  },
  {
    name: `SE-Grey RIGHT`,
    price: `1299`,
    prodimage: ear3,
      prodimage2: ear1,
  },
  {
    name: `SE-Beige RIGHT`,
    price: `1299`,
    prodimage: ear2,
      prodimage2: ear1,
  },
  {
    name: `SE-white RIGHT`,
    price: `1299`,
    prodimage: ear2,
      prodimage2: ear1,
  },
];




const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section className="w-11/12 xl:w-10/12 mx-auto py-10 h-full">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-8">
        {Products?.map((data, i) => {
          return (
            <>
            <div className="text-center space-y-4" key={i}>
                <div className="group bg-[#bfbfbf] cursor-pointer p-3 xl:p-5 rounded-3xl">
                    <img onClick={() => openModal(data)} className="object-fill group-hover:scale-105 duration-300" src={data.prodimage} alt={data.name} loading="lazy" />
                </div>
                <h1 className="text-base">{data.name}</h1>
            </div>
            </>
          );
        })}
      </div>
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Shop;
