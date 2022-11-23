import { Flex, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { currencyFormatter } from "../../lib/helpers";
import groce from './Grocery.module.css'


export const Grocery=({groceriesData})=>{
   return (
    <>
    <div >
        <h2 className={ groce.Title}>Grocery Shop</h2>
    <div className={ groce.GroceryDiv}>

{groceriesData?.map(product=>
<div key={product.id} className={ groce.GroceryinnerDiv}>
<Link href={`/groceries/${product.groceId}`}>
<a>
<div className={ groce.Grocery}>
<Image  src={product.image[0]} alt='product image' width={150} height={150} />
<p className={ groce.GroceryText}>{product.name}</p>
<p className={groce.GroceryPriceTag}>{currencyFormatter(product.price)}</p>
</div>
</a>
</Link>
<button className={groce.GroToCart}>Add to cart</button>
</div>
)}


    </div>
    </div>
    </>
   )
}