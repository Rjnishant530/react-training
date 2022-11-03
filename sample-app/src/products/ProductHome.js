import React, { Component } from 'react'
import ProductModel from '../models/ProductModel';
import { getAllProduct, getProductDetails } from '../services/ProductListService';
import ProductsDetails from './ProductsDetails';

export class ProductHome extends Component {
    state = {
        items: [],
        selectedItem: {}
    };

    componentDidMount() {
        var products = getAllProduct();
        this.setState({ ...this.state, items: products })
    }


    select = (e) => {
        // console.log('Selected fn', e);
        var item = getProductDetails(e);
        // console.log('select', item)
        this.setState({ ...this.state, selectedItem: item })
    }

    updateDetails = (e) => {

        let index = this.state.items.findIndex((curr) => {

            return curr.productId == e.data.productId;
        })
        // console.log(e.data)
        if (index != -1) {
            // console.log("updateDetails called");
            this.state.items.splice(index, 1, e.data)
            // console.log('arrayOfProducts', arrayOfProducts)
            //this.state.items.push(e.data);
            // let arr = ;
            //console.log(arr)

            // this.setState({ ...this.state, items: [...this.state.items, e.data] })
        } else {
            this.state.items.push(e.data)
        }
        this.componentDidMount();
    }

    newProduct = () => {
        let iids = getAllProduct().map((v) => v.productId)
        let newId = Math.max(...iids) + 1;

        let product = new ProductModel(newId, '', 0, 0);
        this.setState({ ...this.state, selectedItem: product })

    }

    resetProduct = () => {
        let product = new ProductModel('', '', '', '');
        this.setState({ ...this.state, selectedItem: product })
    }

    render() {
        // console.log(this.state.items)
        return (
            <div className="container mt-5">
                <div className="card shadow w-75 m-auto">
                    <div className="card-header d-flex">
                        <div className="flex-grow-1">
                            <h3 className='offset-2 text-center '>Product Management</h3>
                        </div>
                        <div>
                            <button onClick={this.newProduct} className='btn btn-danger'>Add New</button>
                        </div>
                    </div>{/*End of card header*/}
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <h3>List of Products</h3>
                                <ProductList items={this.state.items} selectItem={this.select} />
                            </div>
                            <div className='col-6 text-start'>
                                <h3> Product Details</h3>
                                <ProductsDetails selectedItem={this.state.selectedItem} updateProduct={this.updateDetails} resetProduct={this.resetProduct} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function ProductList(params) {
    return (
        <>
            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <th>
                            Product name
                    </th>
                        <th>
                            Price
                    </th>
                        <th>
                            Units In Stock
                    </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        params.items &&
                        params.items.map((value, index) => (
                            <tr key={index}>
                                <td >
                                    {value.productName}
                                </td>
                                <td >
                                    {value.unitPrice}
                                </td>
                                <td >
                                    {value.unitsInStock}
                                </td>

                                <td >
                                    <button className='btn btn-info btn-sm' onClick={() => params.selectItem(value.productId)}
                                    >Select</button>
                                </td>
                            </tr>
                        ))
                    }
                    {
                        false && [
                            (<p>po1</p>),
                            (<p>p1</p>)
                        ]
                    }

                </tbody>
            </table>
            {/* <p>{params.items.toString()}</p> */}

        </>
    )
}

export default ProductHome
