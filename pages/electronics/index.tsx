import electronics from "../../styles/electronics.module.css";
import { products } from "../../dummy-data/product";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getElectProduct } from "../../requestApi";
import { IE } from "../../Types/productTypes";
import { Box, CircularProgress, Flex, Text } from "@chakra-ui/react";
import { currencyFormatter } from "../../lib/helpers";




const Electronics = () => {


  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [electData, setElectData] = useState<IE[]>([]);


  const fetchElectroProducts = async () => {
    setIsLoading(true);
    
    const response = await getElectProduct();
  
    setIsLoading(false);
    setElectData(response?.data?.data);
  //   toast({
  //     description:response?.data?.message ,
  //    status: 'success',
  //     duration: 2000,
  //    position: 'top',
  //  });
  };
  
  useEffect(()=>{
    fetchElectroProducts();
  },[]);
  return (
    <>
      {electData?.length?(<div className={electronics.EparentDiv}>
        <div className={electronics.Col1}></div>
        <div className={electronics.Col2}>
          
          <div className={electronics.Emiddle}>
            {electData?.map((product) => (
              <div key={product.electId} className={electronics.EinnerDiv}>
                <Link href={`/electronics/${product.electId}`}>
                  <a>
                    <div className={electronics.EProduct}>
                      <Image
                        src={product.image[0]}
                        alt="product image"
                        width={100}
                        height={100}
                      />
                      <p className={electronics.EText}>{product.name}</p>
                      <p className={electronics.EPriceTag}>{currencyFormatter(product.price)}</p>
                    </div>
                  </a>
                </Link>
                <button className={electronics.EAddToCart}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
        <div className={electronics.Col3}></div>
      </div>):(
        <Flex
        h="100%"
        bg='#f1f1f1'
        zIndex="6"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <CircularProgress color="#20A39E" isIndeterminate size="164px" thickness="6px" mb="32px" />
        <Box>
          <Text color="#4E5D78" fontSize="22px" lineHeight="27px" fontWeight="600" mb="14px">
            Loading Products
          </Text>
          <Text fontSize="18px" lineHeight="16px">
            It will only take a minute
          </Text>
        </Box>
      </Flex>
      )}
    </>
  );
};



export default Electronics;
