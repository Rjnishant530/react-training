import React from 'react'
import { useParams } from 'react-router';
import CardHeader from '../CardHeader'
import CardBodyAPI from '../CardBodyAPI'
function ProductApiUpdate() {
    let { id } = useParams("id");
    return (
        <div className='card shadow w-75 m-auto mt-5'>
            <CardHeader
                headerText='Product API Update'
                showAddNew={false}
                showBackToList={true}
                addNew='/productApi/create'
                list='/productApi/list'
            />
            <CardBodyAPI
                id={id}
                read={false}
                newItem={false}
            />
        </div>

    )
}

export default ProductApiUpdate
