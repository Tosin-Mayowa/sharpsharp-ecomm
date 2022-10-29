import electronics from "../../styles/electronics.module.css";
import { products } from "../../dummy-data/product";
import Image from "next/image";
import Link from "next/link";




const Electronics = () => {


  return (
    <>
      <div className={electronics.EparentDiv}>
        <div className={electronics.Col1}></div>
        <div className={electronics.Col2}>
          
          <div className={electronics.Emiddle}>
            {products?.map((product) => (
              <div key={product.id} className={electronics.EinnerDiv}>
                <Link href={`/electronics/${product.id}`}>
                  <a>
                    <div className={electronics.EProduct}>
                      <Image
                        src={`/${product.image}`}
                        alt="product image"
                        width={150}
                        height={150}
                      />
                      <p className={electronics.EText}>{product.name}</p>
                      <p className={electronics.EPriceTag}>{product.price}</p>
                    </div>
                  </a>
                </Link>
                <button className={electronics.EAddToCart}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
        <div className={electronics.Col3}></div>
      </div>
    </>
  );
};



export default Electronics;
