import React from 'react'
import { useParams } from 'react-router';
import CardBodyAPI from '../CardBodyAPI'
import CardHeader from '../CardHeader'

function ProductApiDetails() {
    let { id } = useParams("id");
    return (
        <div className='card shadow w-75 m-auto'>
            <CardHeader
                headerText='Product API Details'
                showAddNew={true}
                showBackToList={true}
                addNew='/productApi/create'
                list='/productApi/list'
            />
            <CardBodyAPI
                id={id}
                read={true}
                newItem={false}
            />

        </div>
    )
}

export default ProductApiDetails
