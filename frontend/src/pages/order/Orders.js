import React from "react";
import { DatePicker, Space } from 'antd';
import "./Orders.css";
function Orders() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return( 
  <div className="container" >
    
   <div className="order-container">
    <h4 >Order for...</h4>
    <div>
      <button className="order-button">ORDER PLANING</button>
      <button className="order-button">ADD NEW ORDER</button>
      <button className="order-button"> ADD COMLETED ORDER</button>
    </div>
   </div>
   <div className="date-search-order">
    <div className="">
    <DatePicker onChange={onChange} />
    </div>
    <div>
    {/* <input  className="order-search" type="text" placeholder="Search for a business name..."/> */}
 
   
    </div>

   </div>
    
  </div>
  )
}

export default Orders;
