import React from 'react'
import { useParams } from 'react-router';
import CardBody from '../CardBody'
import CardHeader from '../CardHeader'

function CategoryUpdate() {
    let { id } = useParams("id");
    return (

        <div className='card shadow w-75 m-auto'>
            <CardHeader
                headerText='Category Update'
                showAddNew={false}
                showBackToList={true}
                addNew='/category/create'
                list='/category/list'
            />
            <CardBody
                id={id}
                read={false}
                newItem={false}
            />
        </div>

    )
}

export default CategoryUpdate
