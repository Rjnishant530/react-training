import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardHeader from '../CardHeader'
import ProductApiService from '../services/ProductApiService';
function ProductApiList() {

    const [items, setItems] = useState([]);

    useEffect(() => {

        async function fetchData() {
            if (items.length == 0) {
                var service = new ProductApiService();
                var result = await service.getAllProduct();
                setItems(result); //stateChange
            }
        }
        fetchData();
    })
    return (
        <div className='card shadow w-75 m-auto'>
            <CardHeader
                headerText='Product API List'
                showAddNew={true}
                showBackToList={false}
                addNew='/productApi/create'
                list='/productApi/list'
            />
            <div className='card-body'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items &&
                            items.map((value, index) =>
                                <tr key={index}>
                                    <td>{value.productName}</td>
                                    <td>{value.unitPrice}</td>
                                    <td className='text-center'>
                                        <Link to={'/productApi/details/' + value.productId}
                                            className='btn btn-sm btn-success me-1'
                                        >Details</Link>
                                        <Link to={'/productApi/update/' + value.productId}
                                            className='btn btn-sm btn-success'
                                        >Modify</Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductApiList
