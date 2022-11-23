export type IE={
    _id?:string;
  readonly  electId:string;
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

export type IMobile={
  _id?:string;
readonly  mobileId:string;
name: string;
description: string;
brand: string;
price: string;
colors:string;
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

export type IKitchen={
  _id?:string;
readonly  kitId:string;
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