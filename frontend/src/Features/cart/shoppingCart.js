import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { Offcanvas, Stack } from 'react-bootstrap';
import { selectAllCartItems } from './cartSlice';
import CartCard from './CartCard';

const ShoppingCart = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItems = useSelector(selectAllCartItems);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>
  
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map(item => (
              <CartCard game={item} key={item.id}/>
              
            ))}
          </Stack>
        </Offcanvas.Body>
  
      </Offcanvas>
      </>
    )
}

export default ShoppingCart;