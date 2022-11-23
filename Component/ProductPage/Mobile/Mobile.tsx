import { Flex, Box, Center, CircularProgress, Text } from "@chakra-ui/react";
import Image from "next/image";
import phones from './Mobile.module.css'

import Link from 'next/link';
import { IMobile } from "../../../Types/productTypes";

type Props={
    mobileData:IMobile[]
}

export const Mobile=({mobileData}:Props)=>{
   
   return (
    <>
    <div>
        <h2 className={phones.Title}>Mobile Phones And Accessories</h2>
    <div className={phones.MobileDiv}>

{mobileData?.map(product=>
<div key={product.id} className={phones.MobileinnerDiv}>
    
<Link href={`/electronics/${product.id}`}>
<a>
<div className={phones.Mobile }>
<Image  src={product.image[0]} alt='product image' width={150} height={150} />
<p className={phones.MobileText}>{product.name}</p>
<p className={phones.MobilePriceTag}>{product.price}</p>
</div>

</a>
</Link>
<button className={phones.MobileToCart}>Add to cart</button>
</div>
)}


    </div>
    </div>
    </>
   )
}
