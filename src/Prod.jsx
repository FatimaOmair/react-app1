import React from 'react'

export default function prod(props) {
  return (
    <>
     <div className="col-md-4 w-60">
    <a href="#"><img src="/img/download (2).jpg" className="w-100" alt="sweet1" /></a>
    <div className=" pt-4 ">
      
        <h2 className="text-black fs-4 fw-bold  "><span>{props.title}</span></h2>
     
      <h2 className=" fs-4 fw-bold">{props.price}</h2>
    </div>
  </div>   
    </>
  )
}
