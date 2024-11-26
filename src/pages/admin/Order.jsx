import React from "react";
import { useParams } from "react-router-dom";

const rows = [
    { id: 1, order: "#253273647234", name: "Rahul", email: "rahul123@gmail.com", date: "10-20-2024", amount: "1200" },
    { id: 2, order: "#253273647235", name: "Amit", email: "amit123@gmail.com", date: "10-21-2024", amount: "1400" },
    { id: 3, order: "#253273647236", name: "Sita", email: "sita123@gmail.com", date: "10-22-2024", amount: "1600" },
    { id: 4, order: "#253273647237", name: "Gita", email: "gita123@gmail.com", date: "10-23-2024", amount: "1800" },
    { id: 5, order: "#253273647238", name: "Mohan", email: "mohan123@gmail.com", date: "10-24-2024", amount: "1000" },
    { id: 6, order: "#253273647239", name: "Ravi", email: "ravi123@gmail.com", date: "10-25-2024", amount: "1100" },
    { id: 7, order: "#253273647240", name: "Kiran", email: "kiran123@gmail.com", date: "10-26-2024", amount: "1300" },
    { id: 8, order: "#253273647241", name: "Manish", email: "manish123@gmail.com", date: "10-27-2024", amount: "1700" },
    { id: 9, order: "#253273647242", name: "Anita", email: "anita123@gmail.com", date: "10-28-2024", amount: "1900" },
    { id: 10, order: "#253273647243", name: "Sunita", email: "sunita123@gmail.com", date: "10-29-2024", amount: "1500" },
    { id: 11, order: "#253273647244", name: "Ajay", email: "ajay123@gmail.com", date: "10-30-2024", amount: "1250" },
    { id: 12, order: "#253273647245", name: "Vijay", email: "vijay123@gmail.com", date: "11-01-2024", amount: "1350" },
    { id: 13, order: "#253273647246", name: "Ramesh", email: "ramesh123@gmail.com", date: "11-02-2024", amount: "1450" },
    { id: 14, order: "#253273647247", name: "Suresh", email: "suresh123@gmail.com", date: "11-03-2024", amount: "1550" },
    { id: 15, order: "#253273647248", name: "Lokesh", email: "lokesh123@gmail.com", date: "11-04-2024", amount: "1650" },
    { id: 16, order: "#253273647249", name: "Neha", email: "neha123@gmail.com", date: "11-05-2024", amount: "1750" },
    { id: 17, order: "#253273647250", name: "Pooja", email: "pooja123@gmail.com", date: "11-06-2024", amount: "1850" },
    { id: 18, order: "#253273647251", name: "Arun", email: "arun123@gmail.com", date: "11-07-2024", amount: "1950" },
    { id: 19, order: "#253273647252", name: "Meera", email: "meera123@gmail.com", date: "11-08-2024", amount: "1050" },
    { id: 20, order: "#253273647253", name: "Deepak", email: "deepak123@gmail.com", date: "11-09-2024", amount: "1150" },
  ];
  

const SingleOrder = () => {
  const { id } = useParams(); // Get the order ID from the URL
  const order = rows.find((row) => row.id === parseInt(id));

  if (!order) {
    return <h2>Order not found</h2>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Order Details</h1>
      <div className="mt-5">
        <p><strong>Order ID:</strong> {order.order}</p>
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Amount:</strong> {order.amount}</p>
      </div>
    </div>
  );
};

export default SingleOrder;
