import React, { useState,useEffect } from 'react';
import UserContectMain from '../UserContext';
import empty from './images/empty-cart.webp'


export const Card = () => {
   const {cart} = UserContectMain()
  const [CART, setCART] = useState([])

  useEffect(() => {
      setCART(cart)
  }, [cart])
  
  return (
    <>
 


    <h2 className='m-5'>Cart page</h2>
      <div className='p-4' style={cart.length === 0?{backgroundImage:`url(${(empty)})`,height:"90vh",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{backgroundColor:"white"}} >
  {
    CART.map((two,cartindex) =>{
          
        return(
            <>
         


          <div className=" container row border-bottom justify-content-center" style={{height:"15vh"}}>
            <div className='col-md-3  d-flex align-items-center justify-content-center'>
              <img src={two.image} alt="" style={{height:"5rem" , width:'5rem'}}/>
            </div>
            <div className='col-md-3 d-flex align-items-center justify-content-center'>{two.title}</div>
            <div className='col-md-3 d-flex align-items-center justify-content-center '>
              <span role="button"
               onClick={() =>{
                      const _CART = CART.map((t,index) => {
                          return cartindex === index ?{...t,quantity : two.quantity-1} : t
                      })
                      setCART(_CART)}} 
                      > - </span>

             <span className='p-3'>{two.quantity}</span>
              <span role="button" 
              onClick={() =>{
                      const _CART = CART.map((t,index) => {
                          return cartindex === index ?{...t,quantity : two.quantity+1} : t
                      })
                      setCART(_CART)}}
                       >+</span>
              </div>
           
            <div className='col-md-3 d-flex align-items-center justify-content-center'>$ {two.quantity * two.price}</div>
          </div>
            
          
          </>
        )
    })
  }

  <div className='col-md- d-flex align-items-center justify-content-end mt-5' style={{width:"80%",fontSize:"2rem",fontFamily:"fantasy"}}>
     Subtotal = $ {CART.map(t => t.price * t.quantity ).reduce((total,value) => total+value,0)}
  </div>
  <div className='col-md- d-flex align-items-center justify-content-end mt-2'>
  <button class="btn btn-success" type="submit" style={{marginRight:"50vh"}}>BUY NOW</button>
  </div>
  </div>

   
    </>
  )
}
