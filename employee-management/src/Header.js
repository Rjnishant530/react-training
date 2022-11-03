import React from "react"

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
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
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