import React from "react"
import { Link } from "react-router-dom";
import CategoryDetails from "./category/CategoryDetails";

function Header() {
    return (
        // <nav className="navbar navbar-expand-lg bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                         </a>
        //                     <ul className="dropdown-menu">
        //                         <li><a className="dropdown-item" href="#">Action</a></li>
        //                         <li><a className="dropdown-item" href="#">Another action</a></li>
        //                         <li><hr className="dropdown-divider" /></li>
        //                         <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link disabled">Disabled</a>
        //                 </li>
        //             </ul>

        //         </div>
        //     </div>
        // </nav>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                    <li><a href="datamanagement" className="nav-link px-2 link-dark">Data-Management</a></li>
                    <li><Link to="products" className="nav-link px-2 link-dark">Products</Link></li>
                    <li><div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul className="dropdown-menu  gap-1 p-2 rounded-3 mx-0 shadow w-220px">
                            <li><Link to="/category/list" className="dropdown-item rounded-2">CategoryList</Link></li>
                            <li><Link to="/category/details/1" className="dropdown-item rounded-2">CategoryDetails</Link></li>
                            <li><Link to="/category/update/1" className="dropdown-item rounded-2">CategoryUpdate</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/category/create" className="dropdown-item rounded-2">CategoryCreate</Link></li>
                        </ul>
                    </div>
                    </li>
                    <li><div className="dropdown mx-1">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ProductAPI
                        </button>
                        <ul className="dropdown-menu  gap-1 p-2 rounded-3 mx-0 shadow w-220px">
                            <li><Link to="/productApi/list" className="dropdown-item rounded-2">Product List</Link></li>
                            <li><Link to="/productApi/categoryApi" className="dropdown-item rounded-2">Categories</Link></li>
                            <li><Link to="/productApi/details/1" className="dropdown-item rounded-2">Product Details</Link></li>
                            <li><Link to="/productApi/update/1" className="dropdown-item rounded-2">Product Update</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/productApi/create" className="dropdown-item rounded-2">Product Create</Link></li>
                        </ul>
                    </div>
                    </li>

                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </header>
        </div>
    )
}

export default Header;