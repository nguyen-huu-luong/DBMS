import ResponsivePagination from 'react-responsive-pagination';
import Modify from "./Modify";
import Add from "./Add";
import Delete from './Delete';
import { useState } from "react";

let dataAll = [
    {id: 1, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 2, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 3, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 4, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 5, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 6, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 7, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 8, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 9, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 10, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 11, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},
    {id: 12, fName: "Nguyen", lName: "Luong", userName: "nguyenluong1234", password: "1255677", role: "Client"},

]

const User = () => {
    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 8
    const endOffset = itemOffset.offset + itemPerPage
    const data = dataAll.slice(itemOffset.offset, endOffset)
    const countPage = Math.ceil(dataAll.length / itemPerPage)

    const handelPagination = (event) => {
        const newOffset = ((event - 1) * itemPerPage) % dataAll.length  //event start from 1
        SetOffset({ offset: newOffset, current: (event) })
    }


    return (
        <>

            <div className='w-100 bg-white h-100vh border border-1 p-3'  >

                <div className="row mt-3">
                    <div className="mb-4 col-5">
                        <div className="row">
                            <p className="ms-2 col-sm-2 mt-2 mb-4 me-3">All({dataAll.length})</p>
                            <div className="col-sm-6">
                                {<Add />}

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <form className='row'>
                            <div className="col-xl-4 mb-2">
                                <div className='row '>
                                    <p for="ID" className="form-label  col-xl-3 col-lg-2 col-md-1 mt-2">ID :</p>
                                    <input type="email " className="form-control  col-lg " id="ID" placeholder="Enter ID" name="ID" />
                                </div>
                            </div>
                            <div className="col-xl mb-2 ">
                                <div className='row '>
                                    <p for="Name" className="form-label  col-xl-4 col-lg-2 col-md-1 mt-2">Name :</p>
                                    <input type="email " className="form-control  col-lg col-sm " id="Name" placeholder="Enter Name" name="Name" />
                                </div>
                            </div>
                            <div className='col-xl-3 mb-2  d-flex justify-content-center  '>
                                <button type="submit" className="btn btn-primary m-0 d-inline-block">Search</button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className='table-responsive-lg '>
                    <table className='table '>
                        <thead>
                            <tr >
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "#6C757D" }}>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className="pt-3">{item.id}</td>
                                                <td className="pt-3">{item.fName}</td>
                                                <td className="pt-3">{item.lName}</td>
                                                <td className="pt-3">{item.userName}</td>
                                                <td className="pt-3">{item.password}</td>
                                                <td className="pt-3">{item.role}</td>
                                                <td>
                                                    <div className="row pt-2">
                                                        <div className="col-2 text-primary" data-bs-toggle="tooltip" title="Modify" style={{ cursor: "pointer" }}>
                                                            {<Modify user={item} />}
                                                        </div>
                                                            {<Delete user={item} /> }
                                                    </div>
                                                </td>

                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className=" position-block py-1  row" style={{ bottom: "0px" }}>
                    <p className="col-sm-6 mt-2" style={{ color: "#6C757D" }}>Showing {data.length} of {dataAll.length} users </p>
                    <div className="col-sm-6 d-flex justify-content-end">
                        {
                            <ResponsivePagination
                                current={itemOffset.current}
                                total={countPage}
                                onPageChange={handelPagination}

                            />
                        }
                    </div>
                </div>

            </div>


        </>
    )
}

export default User;
