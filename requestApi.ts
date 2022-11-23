import { handleError } from './lib/helpers';
import requestClient from "./lib/requestClient";

interface IEproducts {
  electId:string;
  name: string;
  description: string;
  brand: string;
  price: string;
  category: string;
  specification: {
    sku: number;
    weight: string;
    shop: string;
  };
  keyFeatures: string;
  productDetails: string;
  image: string[];
}


// Delete Request

export const deleteElectronic=async (id:string)=>{
  return await requestClient.delete(`/api/electronics/${id}`).catch((err) => {
      return handleError(err)
    });
}


export const deleteKit=async (id:string)=>{
  return await requestClient.delete(`/api/kitchen/${id}`).catch((err) => {
      return handleError(err)
    });
}

export const deleteGroce=async (id:string)=>{
  return await requestClient.delete(`/api/groceries/${id}`).catch((err) => {
      return handleError(err)
    });
}

export const deleteMobile=async (id:string)=>{
  return await requestClient.delete(`/api/mobile/${id}`).catch((err) => {
      return handleError(err)
    });
}

export const deleteWears=async (id:string)=>{
  return await requestClient.delete(`/api/wears/${id}`).catch((err) => {
      return handleError(err)
    });
}

// Get single Product

export const getSingleElectronic=async (id:string)=>{
  return await requestClient.get(`/api/electronics/${id}`).catch((err) => {
      return handleError(err)
    });
}





// Get Request

export const getMobileProduct=async ()=>{
  return await requestClient.get(`/api/mobile`).catch((err) => {
      return handleError(err)
    });
}
export const getGroceProduct=async ()=>{
  return await requestClient.get(`/api/groceries`).catch((err) => {
      return handleError(err)
    });
}

export const getKitProduct=async ()=>{
    return await requestClient.get(`/api/kitchen`).catch((err) => {
        return handleError(err)
      });
}

export const getElectProduct=async ()=>{
  return await requestClient.get(`/api/electronics`).catch((err) => {
      return handleError(err)
    });
}

export const getWears=async ()=>{
  return await requestClient.get(`/api/wears`).catch((err) => {
      return handleError(err)
    });
}


export const searchProduct=async (name:string,limit:number)=>{
    return await requestClient.get(`/api/productss?search=${name}&limit=${limit}`).catch((err) => {
        return handleError(err)
      });
}





// Post Request

export const createKitProduct = async ({
  kitId,
  name,
  description,
  brand,
  price,
  category,
  specification,
  keyFeatures,
  productDetails,
  image,
}) => {
  return await requestClient
    .post(`/api/kitchen`, {
      kitId,
      name,
      description,
      brand,
      price,
      category,
      specification,
      keyFeatures,
      productDetails,
      image,
    })
    .catch((err) => {
      return handleError(err)
    });
};



export const createMobile = async ({
  mobileId,
  name,
  description,
  brand,
  price,
  category,
  specification,
  keyFeatures,
 
  colors,
  productDetails,
  image,
}) => {
  return await requestClient
    .post(`/api/mobile`, {
      mobileId,
      name,
      description,
      brand,
      price,
      category,
      colors,
      specification,
      keyFeatures,
      productDetails,
      image,
    })
    .catch((err) => {
      return handleError(err)
    });
};


export const createGroceries = async ({
  groceId,
  name,
  description,
  brand,
  price,
  category,
  specification,
  keyFeatures,
  productDetails,
  image,
}) => {
  return await requestClient
    .post(`/api/groceries`, {
      groceId,
      name,
      description,
      brand,
      price,
      category,
      specification,
      keyFeatures,
      productDetails,
      image,
    })
    .catch((err) => {
      return handleError(err)
    });
};


export const createElecroProduct = async ({
  electId,
  name,
  description,
  brand,
  price,
  category,
  specification,
  keyFeatures,
  productDetails,
  image,
}: IEproducts) => {
  return await requestClient
    .post(`/api/electronics`, {
      electId,
      name,
      description,
      brand,
      price,
      category,
      specification,
      keyFeatures,
      productDetails,
      image,
    })
    .catch((err) => {
      return handleError(err)
    });
};

export const createWears = async ({
  wearsId,
  name,
  description,
  brand,
  price,
  category,
  specification,
  keyFeatures,
  sizes,
  colors,
  productDetails,
  image,
}) => {
  return await requestClient
    .post(`/api/wears`, {
      wearsId,
      name,
      description,
      brand,
      price,
      category,
      sizes,
      colors,
      specification,
      keyFeatures,
      productDetails,
      image,
    })
    .catch((err) => {
      return handleError(err)
    });
};


//    
// };id:1,
// name:'lg 32inches Television',
// description:'lovely 32inches tv',
// brand:'LG',
// price:'64000',
// category:'electronics',
// specification:{
//     sku:12223333,
//     weight:'20kg',
//     shop:'sharp sharp',
// },
// keyfeatures:'<div> This is product is one of the best<ul><li>best product ever</li><li>hello world</li></ul></div>',
// productDetails:'LG 32inches is a fine electronics from the best hands it self they sell at affordable prices',
// image:['../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg']
// },
