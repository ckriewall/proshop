import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

/* 
  To render data from Redux global state. We: 
  1. Import useDispatch() to allow us to dispatch actions.
     This replaces the legacy mapStateToProps().
  2. Manipulate state by dispatching an action in useEffect. 
  3. Pull what we want from state with useSelector.
  4. Destructure returned variables from useSelector and render them.
*/

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
