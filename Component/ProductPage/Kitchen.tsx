import { Flex, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { currencyFormatter } from "../../lib/helpers";
import { IKitchen } from "../../Types/productTypes";
import kitStyle from "./Kitchen.module.css";
type Props={
  kitchenData:IKitchen[]
}
export const Kitchen = ({ kitchenData }:Props) => {
  return (
    <>
      <div>
        <h2 className={kitStyle.Title}>Kitchen Shop</h2>
        <div className={kitStyle.KitchenDiv}>
          {kitchenData?.map((product) => (
            <div key={product.kitId} className={kitStyle.KitcheninnerDiv}>
              <Link href={`/kitchen/${product.kitId}`}>
<a>
              <div className={kitStyle.Kitchen}>
                <Image
                  src={product.image[0]}
                  alt="product image"
                  width={150}
                  height={150}
                />
                <p className={kitStyle.KitchenText}>{product.name}</p>
                <p className={kitStyle.KitchenPriceTag}>
                  {currencyFormatter(product.price)}
                </p>
              </div>
              </a>
              </Link>
              <button className={kitStyle.KitToCart}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
