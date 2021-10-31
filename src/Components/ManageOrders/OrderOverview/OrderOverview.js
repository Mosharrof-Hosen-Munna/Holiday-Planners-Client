import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faBookmark,faShoppingCart,faPlaneArrival } from "@fortawesome/free-solid-svg-icons";


const OrderOverview = () => {
  const { user } = useAuth();
  return (
    <section className="bg-primary py-4">
      <Container>
        <h1 className='text-white mb-4'>Hi, {user.displayName.split(' ').[0]} Welcome Back!</h1>
        <Batch></Batch>
      </Container>
    </section>
  );
};

export const Batch = () => {
     return (
          <Row lg={4} md={3} xs={2}>
                      <Col>
                           <div className='bg-white p-3 rounded-3 d-flex align-items-center'>
                                <div className='p-3 bg-primary rounded-3 me-3'>
                                      <FontAwesomeIcon
                  className="fa-2x text-white "
                  icon={faShoppingCart}
                                />
                               </div>
                                <div>
                                     <h6 className='text-secondary'>Total Booking</h6>
                                     <h2 className="text-orange">44</h2>
                                </div>
                            </div>
                      </Col>
                      <Col>
                           <div className='bg-white p-3 rounded-3 d-flex align-items-center'>
                                <div className='p-3 bg-primary rounded-3 me-3'>
                                      <FontAwesomeIcon
                  className="fa-2x text-white "
                  icon={faBookmark}
                                />
                               </div>
                                <div>
                                     <h6 className='text-secondary'>Wishlist</h6>
                                     <h2 className="text-orange">28</h2>
                                </div>
                            </div>
                      </Col>
                      <Col>
                           <div className='bg-white p-3 rounded-3 d-flex align-items-center'>
                                <div className='p-3 bg-primary rounded-3 me-3'>
                                      <FontAwesomeIcon
                  className="fa-2x text-white "
                  icon={faPlaneArrival}
                                />
                               </div>
                                <div>
                                     <h6 className='text-secondary'>Total Travel</h6>
                                     <h2 className="text-orange">85</h2>
                                </div>
                            </div>
                      </Col>
                      <Col>
                           <div className='bg-white p-3 rounded-3 d-flex align-items-center'>
                                <div className='p-3 bg-primary rounded-3 me-3'>
                                      <FontAwesomeIcon
                  className="fa-2x text-white "
                  icon={faStar}
                                />
                               </div>
                                <div>
                                     <h6 className='text-secondary'>Reviewsl</h6>
                                     <h2 className="text-orange">59</h2>
                                </div>
                            </div>
                      </Col>
        </Row>
     )
}

export default OrderOverview;

