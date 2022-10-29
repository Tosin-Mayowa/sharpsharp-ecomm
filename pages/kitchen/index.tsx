import kitchn from "../../styles/kitchen.module.css";
import { products } from "../../dummy-data/product";
import Image from "next/image";
import Link from "next/link";
const Grocery = () => {
  return (
    <>
      <div className={kitchn.KparentDiv}>
        <div className={kitchn.Col1}></div>
        <div className={kitchn.KCol2}>
          
          <div className={kitchn.Kmiddle}>
            {products?.map((product) => (
              <div key={product.id} className={kitchn.KinnerDiv}>
                <Link href={`/kitchen/${product.id}`}>
                  <a>
                    <div className={kitchn.KProduct}>
                      <Image
                        src={`/${product.image}`}
                        alt="product image"
                        width={150}
                        height={150}
                      />
                      <p className={kitchn.KText}>{product.name}</p>
                      <p className={kitchn.KPriceTag}>{product.price}</p>
                    </div>
                  </a>
                </Link>
                <button className={kitchn.KAddToCart}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
        <div className={kitchn.Col3}></div>
      </div>
    </>
  );
};

export default Grocery;
