import { Flex, Box, Center, CircularProgress, Text } from "@chakra-ui/react";
import Image from "next/image";
import wearClass from './Wears.module.css'

import Link from 'next/link';
import { currencyFormatter } from "../../lib/helpers";

export const Wears=({wearsData})=>{
  
   return (
    <>
    <div>
        <h2 className={wearClass.WearsTitle}>Wears Shop</h2>
    <div className={wearClass.WearsDiv}>

{wearsData?.map(product=>
<div key={product.id} className={wearClass.WearsinnerDiv}>
    
<Link href={`/wears/${product.wearsId}`}>
<a>
<div className={wearClass.Product}>
<Image  src={product.image[0]} alt='product image' width={150} height={150} />
<p className={wearClass.WearsText}>{product.name}</p>
<p className={wearClass.WearsPriceTag}>{currencyFormatter(product.price)}</p>
</div>

</a>
</Link>
<button className={wearClass.WearsToCart}>Add to cart</button>
</div>
)}


    </div>
    </div>
    </>
   )
}
