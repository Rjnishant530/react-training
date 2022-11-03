import React from 'react'
import { useParams } from 'react-router';
import CardBody from '../CardBody'
import CardHeader from '../CardHeader'
import CategoryServices from '../services/CategoryServices';


function CategoryCreate() {
    let id = new CategoryServices().getNewId();

    return (

        <div className='card shadow w-75 m-auto'>
            <CardHeader
                headerText='Category Create'
                showAddNew={false}
                showBackToList={true}
                addNew='/category/create'
                list='/category/list'
            /><CardBody
                id={id}
                read={false}
                newItem={true}
            />
        </div>

    )
}

export default CategoryCreate
