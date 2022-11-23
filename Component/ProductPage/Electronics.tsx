import { Flex, Box, Center, CircularProgress, Text } from "@chakra-ui/react";
import Image from "next/image";
import classes from './Electronics.module.css'

import Link from 'next/link';
import { currencyFormatter } from "../../lib/helpers";
import { IE } from "../../Types/productTypes";
type Props={
    electData:IE[]
}
export const Electronics=({electData}:Props)=>{
  
   return (
    <>
    <div>
        <h2 className={classes.Title}>Electronics Shop</h2>
    <div className={classes.AllParentDiv}>

{electData?.map(product=>
<div key={product.electId} className={classes.AllinnerDiv}>
    
<Link href={`/electronics/${product.electId}`}>
<a>
<div className={classes.Product}>
<Image  src={product.image[0]} alt='product image' width={150} height={150} />
<p className={classes.AllText}>{product.name}</p>
<p className={classes.AllPriceTag}>{currencyFormatter(product.price)}</p>
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
