import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencilSquare } from "react-icons/bs";

const Modify = ({ product }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>

            <button className="bg-white text-primary border-0" onClick={handleShow}>  <BsPencilSquare size={20} /> </button>
            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header >
                        <Modal.Title>Modify information for product with ID: {product.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='productID' className='form-label' style={{ color: "#6B7280" }}>ID</label>
                                <input type='productID' className='form-control' id='productID' name='productID' value={product.id} disabled />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "100%" }}>
                                    <label for='image' className='form-label' style={{ color: "#6B7280" }}>Image</label>
                                    <input type='file' className='form-control' id='image' name='image' accept='image/*' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='price' className='form-label' style={{ color: "#6B7280" }}>Price</label>
                                <input type='text' className='form-control' id='price' name='price' value={product.price} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='categoryID' className='form-label' style={{ color: "#6B7280" }}>CategoryID</label>
                                <input type='text' className='form-control' id='categoryID' name='categoryID' value={product.categoryID} />
                            </div>
                        </div>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type='submit' onClick={handleClose}>
                            Save and close
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    );
}

export default Modify