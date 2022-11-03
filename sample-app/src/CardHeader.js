
import React from 'react'
import { Link } from 'react-router-dom';

function CardHeader(props) {
    return (
        <div className='card-header bg-primary d-flex p-2 '>
            <div className='flex-grow-1'>
                <h3 className='text-center'>{props.headerText}</h3>
            </div>
            <div>
                {
                    props.showAddNew &&
                    <Link to={props.addNew}
                        className='btn btn-warning m-1'
                        onClick={props.addClicked}
                    >Add New</Link>
                }
                {
                    props.showBackToList &&
                    <Link to={props.list}
                        className='btn btn-secondary m-1'>Back to List</Link>
                }
            </div>
        </div>
    )
}

export default CardHeader;
