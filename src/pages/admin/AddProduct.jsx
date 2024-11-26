import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone'; // Importing react-dropzone
import { FaTrash } from 'react-icons/fa'; // For the trash icon
import { IoMdCloseCircle } from "react-icons/io";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    offprice: '',
    ogprice: '',
    offer: '',
    stock: '',
    image: '', // Image URL will be set here
  });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', // Accept only image files
    onDrop: (acceptedFiles) => {
      // Set the first accepted file as the image
      setFormData({
        ...formData,
        image: URL.createObjectURL(acceptedFiles[0]), // Create an object URL for the image
      });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRemoveImage = () => {
    setFormData({
      ...formData,
      image: '', // Reset the image state to remove the image
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., add the product to the product list)
    console.log('Product added:', formData);
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Add Product</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Offer Price</label>
          <input
            type="number"
            name="offprice"
            value={formData.offprice}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Original Price</label>
          <input
            type="number"
            name="ogprice"
            value={formData.ogprice}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Discount</label>
          <input
            type="number"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Stock Status</label>
          <select
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main"
            required
          >
            <option value="">Select Stock Status</option>
            <option value="in stock">In Stock</option>
            <option value="out of stock">Out of Stock</option>
          </select>
        </div>

        {/* Image Upload Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <div
            {...getRootProps()}
            className="mt-1 w-full  py-10 border-2 border-dashed border-gray-300 rounded-md flex justify-center items-center text-gray-500 cursor-pointer"
          >
            <input {...getInputProps()} className="hidden" />
            {formData.image ? (
              <div className="relative">
                <img
                  src={formData.image}
                  alt="Uploaded"
                  className="h-32 object-contain rounded-md"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute text-xl -top-2 -right-2 text-red-500 bg-white rounded-full"
                >
                  <IoMdCloseCircle />
                </button>
              </div>
            ) : (
              <p>Drag & drop an image here, or click to select one</p>
            )}
          </div>
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            className="p-2 px-5 font-medium bg-main text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-main"
          >
            Add Product
          </button>
        </div>
      </form>

      {/* Here you would render the list of products below */}
    </div>
  );
};

export default AddProduct;
