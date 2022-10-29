import { Flex, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import groce from './Grocery.module.css'
import {products} from '../../dummy-data/product'

export const Grocery=()=>{
   return (
    <>
    <div >
        <h2 className={ groce.Title}>Grocery Shop</h2>
    <div className={ groce.GroceryDiv}>

{products?.map(product=>
<div key={product.id} className={ groce.GroceryinnerDiv}>
<div className={ groce.Grocery}>
<Image  src={`/${product.image}`} alt='product image' width={150} height={150} />
<p className={ groce.GroceryText}>{product.name}</p>
<p className={groce.GroceryPriceTag}>{product.price}</p>
</div>
<button className={groce.GroToCart}>Add to cart</button>
</div>
)}


    </div>
    </div>
    </>
   )
}