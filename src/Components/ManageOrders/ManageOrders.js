import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import OrderOverview from "./OrderOverview/OrderOverview";
import StackedChart from "./StackedChart/StackedCart";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://aqueous-fortress-86306.herokuapp.com/api/bookingOrder/all`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [update]);

  const handleDelete = (id) => {
    const isDelete = window.confirm("Are you sure for Delete your this order?");
    if (isDelete) {
      axios
        .delete(
          `https://aqueous-fortress-86306.herokuapp.com/api/order/delete/${id}`
        )
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            const newAllOrders = orders.filter((order) => order._id !== id);
            setOrders(newAllOrders);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleApproved = (id) => {
    axios
      .put(
        `https://aqueous-fortress-86306.herokuapp.com/api/order/update/status/${id}`
      )
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          setUpdate(!update);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section style={{ minHeight: "800px" }}>
      <OrderOverview></OrderOverview>
      <Container className="my-5">
        {orders.length > 0 ? (
          <Table className="rounded-3" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Author</th>
                <th>Name</th>
                <th>Email</th>
                <th>Place</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr>
                  <td>
                    <img
                      width="40px"
                      className="rounded-circle bg-white"
                      src={order.author.photo}
                      alt=""
                    />
                  </td>
                  <td>
                    {order.author.name ? order.author.name : "Not/available"}
                  </td>
                  <td>{order.email}</td>
                  <td>{order.place}</td>
                  <td>$ {order.price}</td>
                  <td>{order.date}</td>
                  <td>
                    <div
                      className={`bg-${
                        order.status === "Approved" ? "success" : "warning"
                      } rounded fw-bold text-center`}
                    >
                      {order.status}
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <button
                        onClick={() => handleApproved(order._id)}
                        className="btn btn-sm btn-primary "
                        disabled={
                          order.status === "Cancelled" ||
                          order.status === "Approved"
                        }
                      >
                        Approved
                      </button>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="btn btn-sm btn-danger "
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h1 className="text-center fw-bold text-danger">
            You have no order yet
          </h1>
        )}
      </Container>
      <StackedChart></StackedChart>
    </section>
  );
};

export default ManageOrders;
