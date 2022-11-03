import React from 'react'
import CardHeader from '../CardHeader'
import CardBodyAPI from '../CardBodyAPI'
import { useParams } from 'react-router';
function ProductApiCreate() {
    let { id } = useParams("id");
    return (
        <div className='card shadow w-75 m-auto'>
            <CardHeader
                headerText='Product API Create'
                showAddNew={false}
                showBackToList={true}
                addNew='/productApi/create'
                list='/productApi/list'
            />
            <CardBodyAPI
                id={id}
                read={false}
                newItem={true}
            />

        </div>
    )
}

export default ProductApiCreate
