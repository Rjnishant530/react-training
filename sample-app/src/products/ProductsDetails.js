import React, { Component } from 'react'

export class ProductsDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedItem: props.selectedItem
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.selectedItem.productId !== state.selectedItem.productId) {
            return props;
        } else
            return state;
    }

    diagnostics() {
        return JSON.stringify(this.state.selectedItem)
    }

    handleEvent = (e) => {
        // let name = e.target.name;
        // let val = e.target.value;
        // if (name == 'unitPrice' || name == 'unitsInStock')
        //     val = parseInt(val);
        this.setState({ selectedItem: { ...this.state.selectedItem, [e.target.name]: e.target.value } })
    }

    submitted = (e) => {
        e.preventDefault();
        if (isNaN(this.state.selectedItem.unitPrice) || isNaN(this.state.selectedItem.unitsInStock) || this.state.selectedItem.productName.length == 0 || this.state.selectedItem.productId.length == 0) {
            return false;
        } else {
            this.props.updateProduct({ data: this.state.selectedItem })
        }
    }

    resetIt = () => {
        this.props.resetProduct()
    }
    render() {

        return (

            <div>
                {/* {this.diagnostics()} */}
                <form onSubmit={this.submitted} onReset={this.resetIt} >
                    {/* <table>


                        <tr>
                            <td><label  >Product Id:</label></td>
                            <td><label  >{this.state.selectedItem.productId}</label></td>


                        </tr>

                        <tr>
                            <td><label >Product Name:</label></td>

                            <td><label >{this.state.selectedItem.productName}</label></td>
                        </tr>
                        <tr>
                            <td>
                                <label >Product Price:</label>
                            </td>
                            <td>
                                <label >{this.state.selectedItem.unitPrice}</label>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <label >Product Stock:</label>
                            </td>
                            <td>
                                <label >{this.state.selectedItem.unitsInStock}</label>
                            </td>

                        </tr>
                    </table> */}
                    <div className='form-group mb-2'>
                        <label htmlFor="productId">Product Id :</label>
                        <input type="text" name="productId" className="form-control"
                            value={this.state.selectedItem.productId} readOnly
                        // onChange={this.handleEvent}
                        ></input>
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor="productName">Product Name :</label>
                        <input type="text" name="productName" className="form-control"
                            value={this.state.selectedItem.productName}
                            onChange={this.handleEvent}></input>
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor="unitPrice">Unit Price :</label>
                        <input type="text" name="unitPrice" className="form-control"
                            value={this.state.selectedItem.unitPrice}
                            onChange={this.handleEvent}></input>
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor="unitsInStock">Units In Stock</label>
                        <input type="text" name="unitsInStock" className="form-control"
                            value={this.state.selectedItem.unitsInStock}
                            onChange={this.handleEvent} ></input>
                    </div>
                    <div className='form-group text-center'>
                        <button type='submit' className='btn btn-success me-1'>Submit</button>
                        <button type='reset' className='btn btn-secondary ms-1'>Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProductsDetails
