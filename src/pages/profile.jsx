import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Manage active tab state
  const [profileData, setProfileData] = useState({
    profile: 'https://via.placeholder.com/150', // Default profile image
    name: 'John Doe',
    email: 'johndoe@example.com',
    mobile: '+1234567890',
    address: '123 Main Street, Springfield, USA',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle profile image update
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create temporary URL for uploaded image
      setProfileData((prevData) => ({
        ...prevData,
        profile: imageUrl,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    // Logic to send data to the server goes here
  };
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  

  // Mock orders data
  const orders = [
    { id: 1, product: 'Laptop', date: '2024-11-20', status: 'Delivered', price: '$1200' },
    { id: 2, product: 'Phone', date: '2024-11-15', status: 'In Transit', price: '$800' },
    { id: 3, product: 'Headphones', date: '2024-11-10', status: 'Delivered', price: '$150' },
    { id: 4, product: 'Keyboard', date: '2024-11-08', status: 'Shipped', price: '$50' },
    { id: 5, product: 'Mouse', date: '2024-11-06', status: 'Pending', price: '$30' },
    { id: 6, product: 'Monitor', date: '2024-11-04', status: 'Delivered', price: '$300' },
    { id: 7, product: 'Chair', date: '2024-11-02', status: 'Pending', price: '$100' },
  ];

  // Handle page change
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Status color mapping
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500 text-white';
      case 'In Transit':
        return 'bg-yellow-500 text-black';
      case 'Pending':
        return 'bg-red-500 text-white';
      case 'Shipped':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="w-11/12 xl:w-10/12 mx-auto h-full overflow-hidden py-10 text-white">
      {/* Tabs */}
      <div className="flex mb-6 text-base">
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === 'profile' ? 'border-b-2 border-main text-main' : 'text-white'
          }`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === 'orders' ? 'border-b-2 border-main text-main' : 'text-white'
          }`}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
      {activeTab === 'profile' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <img
                  className="h-40 w-40 rounded-md border-2 object-cover"
                  src={`https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600 || ${profileData.profile}`}
                  alt="Profile"
                />
                <label className="block">
                  <span className="capitalize">Update profile photo</span>
                  <input
                    type="file"
                    className="block pt-3 w-full text-sm 
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100"
                    onChange={handleProfileImageChange}
                  />
                </label>
              </div>
              <div>
                <label className="block font-semibold mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md  outline-none focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md  outline-none focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Mobile:</label>
                <input
                  type="text"
                  name="mobile"
                  value={profileData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md  outline-none focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Address:</label>
                <textarea
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border bg-transparent border-gray-300 rounded-md  outline-none focus:outline-none focus:ring-2 focus:ring-main"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-main text-white rounded-md hover:bg-main-dark"
              >
                Update Profile
              </button>
            </form>
          </div>
        )}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
            <div className='bg-white'>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <span
                            className={`px-3 py-1 rounded-full ${getStatusColor(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>{order.price}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={orders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
