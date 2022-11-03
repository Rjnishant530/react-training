import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router';
import ProductApiService from './services/ProductApiService';


function CardBodyAPI(props) {
    const blankProduct = {
        productId: 0,
        productName: "",
        categoryId: '',
        unitPrice: '',
        unitsInStock: '',
        discontinued: ''
    }
    const [item, setitem] = useState({});
    const [newId, setnewId] = useState(0)

    useEffect(() => {
        async function fetchData() {
            if (!item.productId) {

                try {
                    var service = new ProductApiService();
                    if (props.id) {
                        var result = await service.getProductDetails(props.id)
                        setnewId(0)
                        setitem(result);
                    }
                    else {
                        setnewId(await service.getNewId());
                        blankProduct.productId = newId;
                        setitem(blankProduct)
                    }
                } catch (e) { console.log('error', e); }
            }
        }
        fetchData();
    })

    // let categoryObj = new CategoryServices().getCategoryDetails(props.id);
    // if (categoryObj == undefined) {
    //     categoryObj = new CategoryModel(props.id)
    // }

    const [canRedirect, setcanRedirect] = useState(false);

    const handleChange = (e) => {
        setitem({ ...item, [e.target.name]: (e.target.value) })
    }

    const saved = async (e) => {
        e.preventDefault();
        var service = new ProductApiService();

        if (item.productId == newId)
            await service.createProduct(item);
        else
            await service.updateProduct(item);
        setcanRedirect(true)
    }
    const clear = (e) => {
        // setitem(new CategoryModel(props.id))
    }
    if (canRedirect)
        return <Navigate replace to='/productApi/list' />

    return (
        <div className='card-body'>
            <form className='form text-start' onSubmit={saved} onReset={clear}>
                <div className='form-group mb-2 row'>
                    <label htmlFor="productId" className='col-sm-2 col-form-label'>Product Id :</label>
                    <div className='col-sm-10'>
                        <input type="text" name="productId" className="form-control"
                            value={item.productId}
                            onChange={handleChange}
                            readOnly required></input></div>

                </div>
                <div className='form-group mb-2 row' >
                    <label htmlFor="productName" className='col-sm-2 col-form-label'>Product Name:</label>
                    <div className='col-sm-10'>
                        <input type="text" name="productName" className="form-control required" required
                            value={item.productName}
                            onChange={handleChange}
                            readOnly={props.read}></input>
                    </div>
                </div>
                <div className='form-group mb-2 row'>
                    <label htmlFor="unitPrice" className='col-sm-2 col-form-label'>Unit Price :</label>
                    <div className='col-sm-10'>
                        <input type="text" name="unitPrice" className="form-control" required
                            value={item.unitPrice}
                            onChange={handleChange}
                            readOnly={props.read}></input>
                    </div>

                </div>
                <div className='form-group mb-2 row'>
                    <label htmlFor="unitsInStock" className='col-sm-2 col-form-label'>Unit In Stock :</label>
                    <div className='col-sm-10'>
                        <input type="text" name="unitsInStock" className="form-control" required
                            value={item.unitsInStock}
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
export default CardBodyAPI
