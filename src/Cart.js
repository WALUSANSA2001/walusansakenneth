import { TableBody } from "@mui/material";
import React from "react";
import { useCart} from "react-use-cart";

const Cart = () =>{
    const { isEmpty,
        totalUniqueItems, 
        item,
        totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
 } =  useCart();
 if( isEmpty)return<h1 className="text-center">your cart is empty</h1>
  return(
    <section className="py-4 container">
        <div className="row justify-conten-center">
            <div col-12>
                <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                <table className="table table-light table-hover m-0">
                    <TableBody>
                     {item && item.map((item,index)=>{
                        return(
                        <tr key={index}>
                             <td>
                                <img src={item.img} style={{height:'6rem'}} />
                             </td>
                             <tb>{item.title}</tb>
                             <tb>{item.price}</tb>
                             <tb>Quantity({item.quantity})</tb>
                             <tb>
                                <button className="btn btn-info ms 2"
                                onClick={() =>updateItemQuantity(item.id, item.quantity-1)}
                                >-</button>
                                <button className="btn btn-info ms 2"
                                onClick={() =>updateItemQuantity(item.id, item.quantity+1)}
                                >+</button>
                                <button className="btn btn-danger ms 2">removeItem</button>
                             </tb>
                        </tr>
                        )
                     })
                     }
                     </TableBody>
                </table>

            </div>
            <div className="col-auto ms-auto">
                <h1>total price: $ {cartTotal}</h1>

            </div>
            <div className="col-auto">
                <button className="btn btn-danger m-2"
                onClick={()=>emptyCart()}
                >Clear cart</button>
                <button className="btn btn-primary m-2">Buy Now</button>

            </div>
            
        </div>
        </section>
    )


}
export default Cart;