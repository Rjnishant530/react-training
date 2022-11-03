import React, { useState } from 'react'
import { Navigate } from 'react-router';
import { CategoryModel } from './models/CategoryModel';
import CategoryServices from './services/CategoryServices'

function CardBody(props) {
    let categoryObj = new CategoryServices().getCategoryDetails(props.id);
    if (categoryObj == undefined) {
        categoryObj = new CategoryModel(props.id)
    }
    const [item, setitem] = useState(categoryObj);
    const [canRedirect, setcanRedirect] = useState(false);

    const handleChange = (e) => {
        setitem({ ...item, [e.target.name]: (e.target.value) })
    }

    const saved = (e) => {
        e.preventDefault();
        new CategoryServices().updateCat(item);
        setcanRedirect(true)
    }
    const clear = (e) => {
        setitem(new CategoryModel(props.id))
    }
    if (canRedirect)
        return <Navigate replace to='/category/list' />

    return (
        <div className='card-body'>
            <form className='form text-start' onSubmit={saved} onReset={clear}>
                <div className='form-group mb-2 row'>
                    <label htmlFor="CategoryId" className='col-sm-2 col-form-label'>Category Id :</label>
                    <div className='col-sm-10'>
                        <input type="text" name="CategoryId" className="form-control"
                            value={item.CategoryId}
                            onChange={handleChange}
                            readOnly required></input></div>

                </div>
                <div className='form-group mb-2 row' >
                    <label htmlFor="CategoryName" className='col-sm-2 col-form-label'>Category Name:</label>
                    <div className='col-sm-10'>
                        <input type="text" name="CategoryName" className="form-control required" required
                            value={item.CategoryName}
                            onChange={handleChange}
                            readOnly={props.read}></input>
                    </div>
                </div>
                <div className='form-group mb-2 row'>
                    <label htmlFor="Description" className='col-sm-2 col-form-label'>Description :</label>
                    <div className='col-sm-10'>
                        <input type="text" name="Description" className="form-control" required
                            value={item.Description}
                            onChange={handleChange}
                            readOnly={props.read}></input>
                    </div>

                </div>
                {!props.read &&
                    <div className='form-group text-center'>
                        <button type='submit' className='btn btn-success me-1'>Submit</button>
                        {
                            props.newItem && <button type='reset' className='btn btn-secondary ms-1'>Reset</button>
                        }
                    </div>}
            </form>
        </div>
    )
}
export default CardBody
