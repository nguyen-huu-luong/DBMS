import ResponsivePagination from 'react-responsive-pagination';
import Modify from "./Modify";
import Add from "./Add";
import Delete from './Delete';
import { useState } from "react";
import LoginImage from "../../Assets/LoginImage.png"

let dataAll = [
    {id: 1, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 2, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 3, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 4, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 5, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 6, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 7, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 8, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 9, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 10, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 11, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},
    {id: 12, price: "200$", image: LoginImage, quantity: "100", categoryID: "1255677"},

]

const Product = () => {
    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 6
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
                                <th>Price</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>CategoryID</th>
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
                                                <td className="pt-3">{item.price}</td>
                                                <td className="pt-2"><img src={item.image} style={{ width: "1.5cm", height: "1.5cm" }} /></td>
                                                <td className="pt-3">{item.quantity}</td>
                                                <td className="pt-3">{item.categoryID}</td>
                                                <td>
                                                    <div className="row pt-2">
                                                        <div className="col-2 text-primary" data-bs-toggle="tooltip" title="Modify" style={{ cursor: "pointer" }}>
                                                            {<Modify product={item} />}
                                                        </div>
                                                            {<Delete product={item} /> }
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
                    <p className="col-sm-6 mt-2" style={{ color: "#6C757D" }}>Showing {data.length} of {dataAll.length} products </p>
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

export default Product