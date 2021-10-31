import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { Batch } from "../ManageOrders/OrderOverview/OrderOverview";
import StackedChart from "../ManageOrders/StackedChart/StackedCart";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [load, setLoad] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/bookingOrders/${user.uid}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, [user, load]);

  const handleCancel = (id) => {
    const isCancel = window.confirm("Are you sure for cancel your this order?");
    if (isCancel) {
      axios
        .put(`http://localhost:5000/api/order/cancel/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            setLoad(!load);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section>
      <div className="bg-primary py-5">
        <Container>
          <h1 className="text-white mb-4">My Booking</h1>
          <Batch></Batch>
        </Container>
      </div>
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
                        order.status === "Cancelled"
                          ? "danger"
                          : order.status === "Approved"
                          ? "success"
                          : "warning"
                      }  rounded fw-bold text-center`}
                    >
                      {order.status}
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="btn btn-primary w-75"
                        disabled={
                          order.status === "Cancelled" ||
                          order.status === "Approved"
                        }
                      >
                        Cancel
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

export default MyOrders;
// name: "munna",
// email: "mdsaf@gmail.com",
// phone: "164631121",
// paymentMethod: "Cash On Delivery",
// message: "sadfasdfasdf",
// status: 'pending'
// author: {
//   uid:user.uid,
//   name: user.displayName,
//   email: user.email ? user.email : "Not/Available",
//   photoUrl: user.photoURL
//     ? user.photoURL
//     : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
// },
