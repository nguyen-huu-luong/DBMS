import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencilSquare } from "react-icons/bs";

const Modify = ({ user }) => {
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
                        <Modal.Title>Modify information for user with ID: {user.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='userID' className='form-label' style={{ color: "#6B7280" }}>ID</label>
                                <input type='userID' className='form-control' id='userID' name='userID' value={user.id} disabled />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='username' className='form-label' style={{ color: "#6B7280" }}>Username</label>
                                <input type='text' className='form-control' id='username' name='username' value={user.userName} disabled />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='fname' className='form-label' style={{ color: "#6B7280" }}>Name</label>
                                <input type='text' className='form-control' id='fname' name='fname' value={user.fName} />
                            </div>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label></label>
                                <input type='text' className='form-control mt-2' id='lname' name='lname' value={user.lName} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-3' style={{ width: "48%" }}>
                                <label for='birth' className='form-label' style={{ color: "#6B7280" }}>Password</label>
                                <input type='text' className='form-control' id='birth' name='birth' value={user.password} />
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