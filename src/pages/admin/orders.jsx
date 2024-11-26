import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const createData = (
  id,
  order,
  name,
  email,
  date,
  amount,
  status,
  trackingId
) => {
  return { id, order, name, email, date, amount, status, trackingId };
};

const initialRows = [
  createData(
    1,
    "#253273647234",
    "Rahul",
    "rahul123@gmail.com",
    "10-20-2024",
    "1200",
    "Pending",
    ""
  ),
  createData(
    2,
    "#253273647235",
    "Amit",
    "amit123@gmail.com",
    "10-21-2024",
    "1400",
    "Shipped",
    ""
  ),
  createData(
    3,
    "#253273647236",
    "Sita",
    "sita123@gmail.com",
    "10-22-2024",
    "1600",
    "Delivered",
    ""
  ),
  createData(
    4,
    "#253273647237",
    "Gita",
    "gita123@gmail.com",
    "10-23-2024",
    "1800",
    "Cancelled",
    ""
  ),
  createData(
    5,
    "#253273647238",
    "Mohan",
    "mohan123@gmail.com",
    "10-24-2024",
    "1000",
    "Pending",
    ""
  ),
  createData(
    6,
    "#253273647239",
    "Ravi",
    "ravi123@gmail.com",
    "10-25-2024",
    "1100",
    "Shipped",
    ""
  ),
  createData(
    7,
    "#253273647240",
    "Kiran",
    "kiran123@gmail.com",
    "10-26-2024",
    "1300",
    "Delivered",
    ""
  ),
  createData(
    8,
    "#253273647241",
    "Manish",
    "manish123@gmail.com",
    "10-27-2024",
    "1700",
    "Pending",
    ""
  ),
  createData(
    9,
    "#253273647242",
    "Anita",
    "anita123@gmail.com",
    "10-28-2024",
    "1900",
    "Shipped",
    ""
  ),
  createData(
    10,
    "#253273647243",
    "Sunita",
    "sunita123@gmail.com",
    "10-29-2024",
    "1500",
    "Delivered",
    ""
  ),
  createData(
    11,
    "#253273647244",
    "Ajay",
    "ajay123@gmail.com",
    "10-30-2024",
    "1250",
    "Cancelled",
    ""
  ),
  createData(
    12,
    "#253273647245",
    "Vijay",
    "vijay123@gmail.com",
    "11-01-2024",
    "1350",
    "Pending",
    ""
  ),
  createData(
    13,
    "#253273647246",
    "Ramesh",
    "ramesh123@gmail.com",
    "11-02-2024",
    "1450",
    "Shipped",
    ""
  ),
  createData(
    14,
    "#253273647247",
    "Suresh",
    "suresh123@gmail.com",
    "11-03-2024",
    "1550",
    "Delivered",
    ""
  ),
  createData(
    15,
    "#253273647248",
    "Lokesh",
    "lokesh123@gmail.com",
    "11-04-2024",
    "1650",
    "Cancelled",
    ""
  ),
  createData(
    16,
    "#253273647249",
    "Neha",
    "neha123@gmail.com",
    "11-05-2024",
    "1750",
    "Pending",
    ""
  ),
  createData(
    17,
    "#253273647250",
    "Pooja",
    "pooja123@gmail.com",
    "11-06-2024",
    "1850",
    "Shipped",
    ""
  ),
  createData(
    18,
    "#253273647251",
    "Arun",
    "arun123@gmail.com",
    "11-07-2024",
    "1950",
    "Delivered",
    ""
  ),
  createData(
    19,
    "#253273647252",
    "Meera",
    "meera123@gmail.com",
    "11-08-2024",
    "1050",
    "Pending",
    ""
  ),
  createData(
    20,
    "#253273647253",
    "Deepak",
    "deepak123@gmail.com",
    "11-09-2024",
    "1150",
    "Shipped",
    ""
  ),
];

const Orders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(initialRows);
  const navigate = useNavigate();

  const handleClickRow = (id) => {
    navigate(`/order/${id}`); // Navigate to the single order page
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStatusChange = (id, newStatus) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, status: newStatus } : row
      )
    );
  };

  const handleTrackingIdChange = (id, newTrackingId) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, trackingId: newTrackingId } : row
      )
    );
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold">All Orders</h1>
      <div className="w-full pt-5">
        <Paper>
          <TableContainer>
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Order</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Tracking ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        hover
                        key={row.id}
                        onClick={() => handleClickRow(row.id)}
                        style={{ cursor: "pointer" }}
                        className="hover:bg-gray-200"
                      >
                        {row.order}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">
                        <select
                        className="border p-2 foutline-none focus:outline-none focus:ring-2 focus:ring-main"
                          value={row.status}
                          onChange={(e) =>
                            handleStatusChange(row.id, e.target.value)
                          }
                          displayEmpty
                          style={{ width: 120 }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </TableCell>
                      <TableCell align="right">
                        <input
                        className="border p-2 w-full foutline-none focus:outline-none focus:ring-2 focus:ring-main"
                          value={row.trackingId}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) =>
                            handleTrackingIdChange(row.id, e.target.value)
                          }
                          placeholder="Enter Tracking ID"
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </section>
  );
};

export default Orders;
