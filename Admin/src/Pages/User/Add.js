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

            <button className="btn btn-primary " onClick={handleShow}>ADD USER</button>
            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header >
                        <Modal.Title>ADD USER</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='mb-3 fw-bold'>Please provide the following information</p>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='user' className='form-label' style={{ color: "#6B7280" }}>Username</label>
                                <input type='text' className='form-control' id='user' name='user' placeholder='Username' />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='password' className='form-label' style={{ color: "#6B7280" }}>Password</label>
                                <input type='password' className='form-control' id='password' name='password' placeholder='Password' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='fname' className='form-label' style={{ color: "#6B7280" }}>Name</label>
                                <input type='text' className='form-control' id='fname' name='fname' placeholder='First name' />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label></label>
                                <input type='text' className='form-control mt-2' id='lname' name='lname' placeholder='Last name' />
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