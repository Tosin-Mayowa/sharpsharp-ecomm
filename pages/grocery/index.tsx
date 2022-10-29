import groce from "../../styles/grocery.module.css";
import { products } from "../../dummy-data/product";
import Image from "next/image";
import Link from "next/link";
const Grocery = () => {
  return (
    <>
      <div className={groce.GparentDiv}>
        <div className={groce.Col1}></div>
        <div className={groce.GCol2}>
          
          <div className={groce.Gmiddle}>
            {products?.map((product) => (
              <div key={product.id} className={groce.GinnerDiv}>
                <Link href={`/grocery/${product.id}`}>
                  <a>
                    <div className={groce.GProduct}>
                      <Image
                        src={`/${product.image}`}
                        alt="product image"
                        width={150}
                        height={150}
                      />
                      <p className={groce.GText}>{product.name}</p>
                      <p className={groce.GPriceTag}>{product.price}</p>
                    </div>
                  </a>
                </Link>
                <button className={groce.GAddToCart}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
        <div className={groce.Col3}></div>
      </div>
    </>
  );
};

export default Grocery;
