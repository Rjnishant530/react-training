import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardHeader from '../CardHeader'
import CategoryServices from '../services/CategoryServices'

function CategoryList() {


    let data = new CategoryServices().getAllCategories();

    const [items, setItems] = useState(data);


    return (
        <div className='card shadow w-75 m-auto'>
            <CardHeader
                headerText='Category List'
                showAddNew={true}
                showBackToList={false}
                addNew='/category/create'
                list='/category/list'
            />
            <div className='card-body'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items &&
                            items.map((value, index) =>
                                <tr key={index}>
                                    <td>{value.CategoryName}</td>
                                    <td>{value.Description}</td>
                                    <td className='text-center'>
                                        <Link to={'/category/details/' + value.CategoryId}
                                            className='btn btn-sm btn-success me-1'
                                        >Details</Link>
                                        <Link to={'/category/update/' + value.CategoryId}
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

export default CategoryList
