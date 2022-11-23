import { Box, CircularProgress, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { currencyFormatter } from '../../lib/helpers';
import { getSingleElectronic } from '../../requestApi';
import singElectStyle from "../../styles/SingleElectro.module.css";
import { IE } from '../../Types/productTypes';
// import parse from 'html-react-parser';
const singleProduct=()=>{
  const router: NextRouter = useRouter();
  const electronicsId: string = router?.query?.electronicsId as string;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [electData, setElectData] = useState<IE>(null);
    const [url,setUrl]=useState<string>("");
   
    
    
    const fetchElectroProducts = async (electronicsId) => {
        setIsLoading(true);
        
        const response = await getSingleElectronic(electronicsId);
      
        setIsLoading(false);
        setElectData(response?.data?.data);
    //     toast({
    //       description:response?.data?.message ,
    //      status: 'success',
    //       duration: 2000,
    //      position: 'top',
    //    });
      };
      
      useEffect(()=>{
        if(electronicsId)fetchElectroProducts(electronicsId);
      },[electronicsId]);

    return (
      <>
        {electData?
        <div className={singElectStyle.WrapperE}>
           <div className={ singElectStyle.Thumbnails}>
            {
              electData?.image?.map((item,idx)=> <div key={idx} onClick={() => setUrl(item)}>
              <Image src={item} alt="" className={singElectStyle.ImageFirstChild}  width={100}
                    height={100}/>
            </div>)
            }
            </div> 
            <div className="ImageDivSec">
                      <Image 
                        src={
                          url ?url : electData?.image[0]
                        }
                        alt=""
                        className="ImageSecondChild"
                        width={400}
                        height={400}
                      />
                    </div>

                    <div>
                      <p className={singElectStyle.SingTitle}>
                        {electData?.name}
                      </p>
                      <p>{currencyFormatter(electData?.price)}</p>
<div>
  <h3>
    Descriptions
  </h3>
  <p>{electData?.description}</p>
</div>
                      <div>
                        <h3>Key Features</h3>
                        <p>{electData?.keyFeatures}</p>
                        {/* <div className="Keyfeatures">
                        <div>{parse(product.description)}</div>
                      </div> */}
                      </div>
                    
                      <div>
                        <h3> Specifications</h3>
                        <p><strong>SKU:</strong>{electData?.specification?.sku}</p>
                        <p><strong>Weight:</strong>{electData?.specification?.weight}</p>
                        <p><strong>Shop:{electData?.specification?.shop}</strong></p>
                      </div>
                    </div>
        </div>
        :<Flex
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
            Loading Product
          </Text>
          <Text fontSize="18px" lineHeight="16px">
            It will only take a minute
          </Text>
        </Box>
      </Flex>}
      </>
    )
 }

 export default singleProduct;


//  brand
// : 
// "git"
// category
// : 
// "electronics"
// description
// : 
// "gty"
// electId
// : 
// "e1"
// image
// : 
// ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…Dh1wt0IUdQ8/Efy2MY/2H+wxjH8tewv4Et/GQhC9tf0E//9k=']
// keyFeatures
// : 
// "great"
// name
// : 
// "32 inches"
// price
// : 
// "439000"
// productDetails
// : 
// "best"
// specification
// : 
// {sku: 3241, weight: '21kg', shop: 'rite'}
// _id
// : 
// "6366b95805cae357bb52475c"
// [