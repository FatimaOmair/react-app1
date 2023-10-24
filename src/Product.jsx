import React from 'react'
import './Product.css'
import Prod from './Prod.jsx';
export default function () {

  const products = [
    {id:1,title:'Nabulsi kunafa',price:'$6.00'},
    {id:2,title:'French macarons',price:'$10.79'},
    {id:3,title:'Cheese dessert',price:'$5.00'},
];
  return (
    <>
   <div className='container py-5 mt-4'>
   <div className="row font">
  

  {products.map((product)=>{
    return <Prod {...product}  key={product.id}/>
  })}







  {/* <div className="col-md-4 w-60">
    <a href="#"><img src="/img/fr21012022.jpg" className="w-100" alt="sweet2" /></a>
    <div className=" pt-4 ">
      
        <h2 className="text-black fs-4 fw-bold"><span>French macarons</span></h2>
     
      <h2 className=" fs-4 fw-bold"> $10.79</h2>
    </div>
  </div>
  <div className="col-md-4 w-60">
    <a href="#"><img src="/img/download (3).jpg" className="w-100" alt="sweet3" /></a>
    <div className=" pt-4 ">
     
        <h2 className="text-black fs-4 fw-bold"><span>Cheese dessert</span></h2>
      
      <h2 className=" fs-4 fw-bold">$5.00</h2>
    </div>
  </div> */}
</div>

   </div>
    
    </>
  )
}
