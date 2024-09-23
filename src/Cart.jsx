import React, { useContext } from 'react'
import usercontext from './Context'
import Item from './Item'

function Cart() {

  const { cart, total } = useContext(usercontext)
  return <>
    <div className=' container mb-5'>{
      cart.map((item,index) => {
        return (<Item item={item} index={index}></Item>)
      })}
    </div>
    <h4> SUBTOTAL : ${total}</h4>
  </>

}

export default Cart
