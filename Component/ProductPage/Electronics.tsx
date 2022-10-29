import { Flex, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import classes from './Electronics.module.css'
import {products} from '../../dummy-data/product'
import Link from 'next/link';

export const ProductPage=()=>{
   return (
    <>
    <div>
        <h2 className={classes.Title}>Electronics Shop</h2>
    <div className={classes.AllParentDiv}>

{products?.map(product=>
<div key={product.id} className={classes.AllinnerDiv}>
    
<Link href={`/electronics/${product.id}`}>
<a>
<div className={classes.Product}>
<Image  src={`/${product.image}`} alt='product image' width={150} height={150} />
<p className={classes.AllText}>{product.name}</p>
<p className={classes.AllPriceTag}>{product.price}</p>
</div>

</a>
</Link>
<button className={classes.AddToCart}>Add to cart</button>
</div>
)}


    </div>
    </div>
    </>
   )
}
