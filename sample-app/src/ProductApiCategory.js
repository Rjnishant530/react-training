import React, { Component } from 'react'
import ProductApiCategoryService from './services/ProductApiCategoryService'
import ProductApiService from './services/ProductApiService';

export default class ProductApiCategory extends Component {

    state = {
        catList: [],
        //selectedCatId: '',
        productList: []
    }

    constructor(props) {
        super(props)
        this.updateList();
        // this.selected = this.selected.bind(this);
    }

    async updateList() {
        if (this.state.catList.length == 0) {
            var service = new ProductApiCategoryService();
            var result = await service.getAllProduct();
            this.setState({ ...this.state, catList: result });

        }

    }

    selected = async (obj) => {
        //async selected(obj) {
        var service = new ProductApiService();
        var list = await service.getProductByCategory(obj.target.value)
        this.setState({ ...this.state, productList: list });

    }
    render() {
        //console.log('productlist', this.state.productList)
        // console.log('catList', this.state.catList)
        return (
            <div >
                <div className="card shadow w-75 m-auto">
                    <div className='card-head bg-info d-flex p-2'>
                        <div className='flex-grow-1'>
                            <h1 className='text-center'>Categories</h1>
                            <select className="form-select mt-2" aria-label="Default select example" onChange={this.selected}>
                                <option defaultValue>---Select Option---</option>
                                {
                                    this.state.catList &&
                                    this.state.catList.map((v, index) => (
                                        <option key={index} value={v.categoryId} > { v.categoryName}</option>
                                    ))
                                }
                            </select>
                        </div>

                    </div>
                    <div className='card-body'>
                        <div>
                            {/* <div className='flex-grow-1'>
                                <h3 className='text-center'>Product Name</h3>
                                <hr></hr>
                                <div className='ms-2'>
                                    {
                                        this.state.productList &&
                                        this.state.productList.map((v, index) => (
                                            <>
                                                <p key={index}>{v.productName}</p>
                                                <hr></hr>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="vr"></div>
                            <div className='flex-grow-1'>
                                <h3 className='text-center'>Unit Price</h3>
                                <hr></hr>
                                <div className='ms-2'>
                                    {
                                        this.state.productList &&
                                        this.state.productList.map((v, index) => (
                                            <>
                                                <p key={index}>{v.unitPrice}</p>
                                                <hr></hr>
                                            </>

                                        ))
                                    }
                                </div>
                            </div> */}
                            <table className='table table-striped table-hover w-50'>
                                <caption>List of Products Based on Category</caption>
                                <thead>
                                    <tr>
                                        <th >Product Name</th>
                                        <th >Unit Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.productList &&
                                        this.state.productList.map((v, index) => (
                                            <tr key={index}>
                                                <td>{v.productName}</td>
                                                <td>{v.unitPrice}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
