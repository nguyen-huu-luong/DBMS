import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AiFillDelete } from "react-icons/ai";

const Delete = ({ user }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);


    return (
        <>
                <div className="col-4 text-danger" data-bs-toggle="tooltip" title="Delete" style={{ cursor: "pointer" }}>
                    <button className="bg-white text-danger border-0" onClick={handleShow}>  <AiFillDelete size={20} /> </button>

                    <Modal show={show} onHide={handleClose} dialogClassName="w-25">
                        <form >
             
                            <Modal.Body className='pt-5 text-center border-0'>
            
                                    <h6 >Delete user with ID: {user.id} ?</h6>
                            </Modal.Body>
                            <Modal.Footer className='w-75 border-0 pt-1 m-auto d-flex justify-content-around'>
                                <Button variant="secondary" onClick={handleClose} className="px-4">
                                    Cancel
                                </Button>
                                <Button variant="danger" type='submit' className='px-3' onClick={handleClose}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </div>


        </>
    );
}

export default Delete