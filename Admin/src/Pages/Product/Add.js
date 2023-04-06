import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineUserAdd } from "react-icons/ai";

const Add = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>

            <button className="btn btn-primary " onClick={handleShow}>ADD PRODUCT</button>
            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header >
                        <Modal.Title>ADD PRODUCT</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='mb-3 fw-bold'>Please provide the following information</p>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='price' className='form-label' style={{ color: "#6B7280" }}>Price</label>
                                <input type='text' className='form-control' id='price' name='price' placeholder='Price' />
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
                                <label for='quantity' className='form-label' style={{ color: "#6B7280" }}>Quantity</label>
                                <input type='text' className='form-control' id='quantity' name='quantity' placeholder='Quantity' />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='categoryID' className='form-label' style={{ color: "#6B7280" }}>CategoryID</label>
                                <input type='text' className='form-control' id='categoryID' name='categoryID' placeholder='CategoryID' />
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

export default Add