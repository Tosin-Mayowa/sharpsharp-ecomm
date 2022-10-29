import { Flex, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import kitStyle from './Kitchen.module.css'
import {products} from '../../dummy-data/product'

export const Kitchen=()=>{
   return (
    <>
    <div >
        <h2 className={kitStyle.Title}>Kitchen Shop</h2>
    <div className={kitStyle.KitchenDiv}>

{products?.map(product=>
<div key={product.id} className={kitStyle.KitcheninnerDiv}>
<div className={kitStyle.Kitchen}>
<Image  src={`/${product.image}`} alt='product image' width={150} height={150} />
<p className={kitStyle.KitchenText}>{product.name}</p>
<p className={kitStyle.KitchenPriceTag}>{product.price}</p>
</div>
<button className={kitStyle.KitToCart}>Add to cart</button>
</div>
)}


    </div>
    </div>
    </>
   )
}