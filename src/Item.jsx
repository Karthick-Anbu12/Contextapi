import React, { useContext } from 'react'
import usercontext from './Context'
function Item({item,index}) {
    const {quant,inc,dec,remove}=useContext(usercontext)
    return (
        <div className='border border-dark mt-2 rounded p-4'>
        <div className=' container d-flex m-4 p-2 '>
            <img class="imgcart"src={`${item.image}`}></img>
            <div className='container mt-4'>
            <h3>{item.title}</h3>
            <h6> Rating: {item.rating.rate}/5 ({item.rating.count})</h6>
            </div>
            <button className='btn btn-outline-dark m-4 p-1' style={{height:'2rem',width:'2em'}} onClick={()=>dec(index)}>-</button>
            <div className='mt-4 m-1 ' >{quant}</div>
            <button className='btn btn-outline-dark m-4 p-1' style={{height:'2em',width:'2em'}} onClick={()=>inc(index)}>+</button>
            <p className='m-4'>Price:{item.price*quant}</p>
        </div>
        <button className='remove btn btn-outline-danger p-1' style={{height:'2em'}} onClick={()=>remove(index)}>Remove</button>
        
       
               
        </div>

    )
}

export default Item
