import React from "react";
import Card from './Card';
import  Data from './Data.js';
const Menu = () => {
    return(
        <div>
            <h1 className="text-center mt-3">Menu</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    
                    {Data.productData.map((item,index)=>{
                        return(
                            <Card img={item.img} 
                            title={item.title} 
                            desc={item.desc}
                             price={item.price}
                             item={item} 
                             key={index}  />
                        )
                    })
                    
                    }
                </div>

            </section>

        </div>
    )
}
export default Menu;