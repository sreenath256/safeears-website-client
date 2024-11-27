import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


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

  // Mock orders data
  const orders = [
    {
      id: 1,
      product: 'Laptop',
      date: '2024-11-20',
      status: 'Delivered',
      price: '$1200',
      listPrice: '$1500',
      sellingPrice: '$1200',
      offerPrice: '$300 off',
      totalAmount: '$1200',
      size: '15 inches',
      color: 'Silver',
      deliveryAddress: '123 Main Street, Springfield, USA',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      product: 'Phone',
      date: '2024-11-15',
      status: 'In Transit',
      price: '$800',
      listPrice: '$900',
      sellingPrice: '$800',
      offerPrice: '$100 off',
      totalAmount: '$800',
      size: '6.5 inches',
      color: 'Black',
      deliveryAddress: '456 Elm Street, Metropolis, USA',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      product: 'Headphones',
      date: '2024-11-10',
      status: 'Delivered',
      price: '$150',
      listPrice: '$200',
      sellingPrice: '$150',
      offerPrice: '$50 off',
      totalAmount: '$150',
      size: 'Universal',
      color: 'Blue',
      deliveryAddress: '789 Pine Street, Gotham, USA',
      image: 'https://via.placeholder.com/100',
    },
  ];

  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrderDetails = (id) => {
    setExpandedOrderId((prevId) => (prevId === id ? null : id));
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
                  src={profileData.profile}
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
              {/* Profile fields */}
              {['name', 'email', 'mobile', 'address'].map((field) => (
                <div key={field}>
                  <label className="block font-semibold mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={profileData[field]}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-main"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="px-6 py-2 bg-main text-white rounded-md hover:bg-main-dark"
              >
                Update Profile
              </button>
            </form>
          </div>
        )}
        {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="px-4 py-2 border rounded-md bg-white hover:bg-gray-100 duration-200 text-black cursor-pointer"
                onClick={() => toggleOrderDetails(order.id)}
              >
                <div className="flex justify-between items-center selection:bg-none">
                  <div className="flex items-center gap-5">
                    <h3 className="text-lg font-medium">{order.product}</h3>
                    <img
                      src={order.image}
                      alt={order.product}
                      className="w-16 h-16 rounded-md"
                    />
                  </div>
                  <button
                    className="text-sm capitalize flex items-center gap-1 transition-all duration-200"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {expandedOrderId === order.id ? (
                      <>
                        show less <FaAngleUp />
                      </>
                    ) : (
                      <>
                        show more <FaAngleDown />
                      </>
                    )}
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    expandedOrderId === order.id ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                    <div className="mt-5">
                      <div className="my-5 h-[1px] bg-gray-300" />
                      <p><strong>Size:</strong> {order.size}</p>
                      <p><strong>Color:</strong> {order.color}</p>
                      <p><strong>Delivery Address:</strong> {order.deliveryAddress}</p>
                      <p><strong>List Price:</strong> {order.listPrice}</p>
                      <p><strong>Selling Price:</strong> {order.sellingPrice}</p>
                      <p><strong>Offer Price:</strong> {order.offerPrice}</p>
                      <p><strong>Total Amount:</strong> {order.totalAmount}</p>
                      <p><strong>Date:</strong> {order.date}</p>
                      <p><strong>Status:</strong> {order.status}</p>
                      <button className="bg-main px-10 rounded-md py-2 text-sm text-white hover:text-black duration-150 mt-5">
                        Track your order
                      </button>
                    </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
