import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import DataManagement from './DataManagement';
import ProductHome from './products/ProductHome';
import { Route, Routes } from 'react-router';
import NotFound from './NotFound'
import CategoryCreate from './category/CategoryCreate';
import CategoryDetails from './category/CategoryDetails';
import CategoryUpdate from './category/CategoryUpdate';
import CategoryList from './category/CategoryList';
import ProductApiUpdate from './productAPI/ProductApiUpdate';
import ProductApiList from './productAPI/ProductApiList';
import ProductApiDetails from './productAPI/ProductApiDetails';
import ProductApiCreate from './productAPI/ProductApiCreate';

import ProductApiCategoryService from './services/ProductApiCategoryService';
import ProductApiCategory from './ProductApiCategory';

function App() {

  return (
    <div>
      <Header />
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='datamanagement' element={<DataManagement />} />
          <Route path='products' element={<ProductHome />} />
          <Route path='*' element={<NotFound />} />

          <Route path='category/update/:id' element={<CategoryUpdate />} />
          <Route path='category/list' element={<CategoryList />} />
          <Route path='category/details/:id' element={<CategoryDetails />} />
          <Route path='category/create' element={<CategoryCreate />} />

          <Route path='productApi/update/:id' element={<ProductApiUpdate />} />
          <Route path='productApi/list' element={<ProductApiList />} />
          <Route path='productApi/details/:id' element={<ProductApiDetails />} />
          <Route path='productApi/create' element={<ProductApiCreate />} />

          <Route path='productApi/categoryApi' element={<ProductApiCategory />} />
        </Routes>


      </div>
      <Footer />
    </div>

  );


}

function Home() {
  const number = 5000;
  let name = 'Sony'
  var fn = () => 'Returned from function'
  return (
    <>
      <h1>Welcome to React</h1>
    </>
  )
}

class HelloClass extends Component {
  render() {
    return (<h1>Hello Again</h1>)
  }
}
function Greeting() {
  return <h1>Hello</h1>
}

const SayHello = () => <h2>Say Hello Called</h2>

const DateTime = () => <p>{new Date().toString()}</p>

export default App;
