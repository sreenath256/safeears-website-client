import React, { useState, useEffect } from "react";
import { allProducts } from '../../components/data';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Products = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null); // To track selected product
  const [editProduct, setEditProduct] = useState(null); // To track the product being edited

  // Close the popup when clicked outside
  const handleClosePopup = (e) => {
    if (e.target.id === "popup-overlay") {
      setSelectedProduct(null);
      setEditProduct(null); // Close the edit popup as well
    }
  };

  // Add event listener for outside click
  useEffect(() => {
    if (selectedProduct || editProduct) {
      document.addEventListener("click", handleClosePopup);
    }
    return () => {
      document.removeEventListener("click", handleClosePopup);
    };
  }, [selectedProduct, editProduct]);

  const handleView = (id) => {
    const product = allProducts.find((prod) => prod.id === id);
    setSelectedProduct(product);
  };

  const handleEdit = (id) => {
    const product = allProducts.find((prod) => prod.id === id);
    setEditProduct(product); // Set the product to edit
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete product with ID: ${id}?`)) {
      alert(`Deleted product with ID: ${id}`);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    alert(`Product with ID: ${editProduct.id} has been updated.`);
    setEditProduct(null); // Close the edit popup after submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  };

  const commonPadding = { padding: "8px 16px" };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <Link to='/add-product' className="w-fit bg-main flex text-sm font-medium gap-2 items-center text-white p-2 px-4 hover:bg-yellow-600 duration-150 rounded-md">
          <MdFormatListBulletedAdd className="text-xl"/> Add Product
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={commonPadding}><h2 className="font-medium">ID</h2></TableCell>
              <TableCell sx={commonPadding}><h2 className="font-medium">Product</h2></TableCell>
              <TableCell sx={commonPadding}><h2 className="font-medium">Offer Price</h2></TableCell>
              <TableCell sx={commonPadding}><h2 className="font-medium">Original Price</h2></TableCell>
              <TableCell sx={commonPadding}><h2 className="font-medium">Discount</h2></TableCell>
              <TableCell sx={commonPadding}><h2 className="font-medium">Stock</h2></TableCell>
              <TableCell sx={commonPadding}><h2 className="font-medium">Actions</h2></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={product.id}>
                  <TableCell sx={commonPadding}>{product.id}</TableCell> {/* Product ID */}
                  <TableCell sx={commonPadding} onClick={() => handleView(product.id)} className="hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center capitalize">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-14 w-14 rounded-full object-cover mr-4"
                      />
                      {product.title}
                    </div>
                  </TableCell>
                  <TableCell sx={commonPadding}>₹{product.offprice}</TableCell>
                  <TableCell sx={commonPadding}>
                    <span className="line-through">₹{product.ogprice}</span>
                  </TableCell>
                  <TableCell sx={commonPadding}>{product.offer}%</TableCell>
                  <TableCell sx={commonPadding}>{product.stock}</TableCell>
                  <TableCell sx={{ padding: "0px 16px" }}>
                    <div className="flex items-center justify-start gap-5">
                      <button
                        className="bg-gray-200 hover:text-white duration-100 hover:bg-blue-500 p-2"
                        onClick={() => handleView(product.id)}
                      >
                        <FaEye />
                      </button>
                      <button className="bg-gray-200 hover:text-white duration-100 hover:bg-yellow-500 p-2" onClick={() => handleEdit(product.id)} >
                        <FaEdit />
                      </button>
                      <button className="bg-gray-200 hover:text-white duration-100 hover:bg-red-500 p-2" onClick={() => handleDelete(product.id)}>
                        <IoTrashOutline />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={allProducts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Product Details Popup */}
      {selectedProduct && (
        <div
          id="popup-overlay"
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full flex flex-col items-center gap-2 capitalize relative">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <img className="h-52 object-contain rounded-2xl" src={selectedProduct.image} alt="" />
            <p><strong>ID:</strong> {selectedProduct.id}</p>
            <p><strong>Title:</strong> {selectedProduct.title}</p>
            <p><strong>Offer Price:</strong> ₹{selectedProduct.offprice}</p>
            <p><strong>Original Price:</strong> ₹{selectedProduct.ogprice}</p>
            <p><strong>Discount:</strong> {selectedProduct.offer}%</p>
            <p><strong>Stock:</strong> {selectedProduct.stock}</p>
            <button
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-3 right-3 w-fit bg-main hover:bg-yellow-400 duration-200 rounded-md p-1 "
            >
              <MdClose/>
            </button>
          </div>
        </div>
      )}

      {/* Edit Product Popup */}
      {editProduct && (
        <div
          id="popup-overlay"
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full flex flex-col gap-4 relative">
            <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editProduct.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="font-medium">Offer Price</label>
                <input
                  type="number"
                  name="offprice"
                  value={editProduct.offprice}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="font-medium">Original Price</label>
                <input
                  type="number"
                  name="ogprice"
                  value={editProduct.ogprice}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="font-medium">Discount</label>
                <input
                  type="number"
                  name="offer"
                  value={editProduct.offer}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="font-medium">Stock</label>
                <select
                  name="stock"
                  value={editProduct.stock}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>
              <div className="flex justify-between items-center text-sm">
                <button
                  type="button"
                  onClick={() => setEditProduct(null)}
                  className="bg-main text-white p-2 rounded-md hover:bg-red-600 flex gap-2 items-center"
                >
                  <MdClose />
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-main text-white p-2 rounded-md hover:bg-green-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
