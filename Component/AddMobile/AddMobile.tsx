import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useEffect, useState } from "react";
  import { createElecroProduct, createKitProduct, createMobile } from "../../requestApi";
  import FileBase from "react-file-base64";
  const AddMobile= ({ isOpen, handleIsOpen, handleReload }) => {
    const [name, setName] = useState<string>("");
    const [mobileId, setMobileId] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [sku, setSku] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [shop, setShop] = useState<string>("");
    const [productDetails, setProductDetails] = useState<string>("");
    const [hasFetched, setHasFetched] = useState<boolean>(false);
    const [keyFeatures, setKeyFeatures] = useState<string>("");
    const [imgUrls, setImgUrls] = useState<any>([]);
    const [colors, setColors] = useState<any>([]);
    console.log("cat", category);
  
    const reset = () => {
      setImgUrls("");
      setMobileId("");
      setProductDetails("");
      setShop("");
      setWeight("");
      setSku("");
      setPrice("");
      setBrand("");
      setDescription("");
      setName("");
    };
  
    const sendProduct = async (e) => {
      e.preventDefault();
      setHasFetched(false);
      const specification = {
        sku: Number(sku),
        weight,
        shop,
      };
      const image = imgUrls;
    
      const response = await createMobile({
        mobileId,
        name,
        description,
        brand,
        price,
        colors,
        category,
        specification,
        keyFeatures,
        productDetails,
        image,
      });
  
      if (response) {
        handleReload(isOpen);
      }
  
      // setIsLoading(false);
  
      // const responseError = handleResponseError(response);
  
      // if ((response && !response.data) || !response || responseError) {
      //   toast({
      //     description: responseError,
      //     status: 'error',
      //     duration: 2000,
      //     position: 'top',
      //   });
  
      //   setError(true);
      //   setSuccess(false);
      //   setModalOn(false);
      // }
  
      // setSuccess(true);
      // setModalOn(false);
      // setPermissions([]);
    };
  
    return (
      <>
        {/* {imgUrls.map((url, i) =>  <Image key={i} src={url} alt='product image' width={100} height={100} />)} */}
  
        <Box flexDir="column" mr="500px" width="30%" overflow='scroll'>
          <Flex bg="#fff" flexDir="column">
            <Center>
              <Text
                fontSize="18px"
                borderBottom="2px solid #f1f1f1"
                fontWeight="bold"
              >
                Add Product Details
              </Text>
            </Center>
            <Box width="100%" ml="20px">
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                 Mobile ID
                </FormLabel>
                <Input
                  placeholder="brand"
                  width="80%"
                  height="50px"
                  mt="4px"
                  value={mobileId}
                  onChange={(e) => setMobileId(e.target.value)}
                  fontSize="14px"
                />
              </FormControl>
  
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                  color=""
                >
                  name
                </FormLabel>
                <Input
                  placeholder="product name"
                  width="80%"
                  height="50px"
                  mt="4px"
                  fontSize="14px"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  description
                </FormLabel>
                <Input
                  placeholder="description"
                  width="80%"
                  height="50px"
                  mt="4px"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  fontSize="14px"
                />
              </FormControl>
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  brand
                </FormLabel>
                <Input
                  placeholder="brand"
                  width="80%"
                  height="50px"
                  mt="4px"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  fontSize="14px"
                />
              </FormControl>
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  price
                </FormLabel>
                <Input
                  placeholder="price"
                  width="80%"
                  height="50px"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  mt="4px"
                  fontSize="14px"
                />
              </FormControl>

              <FormControl mt="20px">
              <FormLabel
                fontSize="16px"
                textTransform="capitalize"
                fontWeight="bold"
              >
                Colour
              </FormLabel>
              <Stack spacing={5} direction="row">
                <Checkbox colorScheme="red">Red</Checkbox>
                <Checkbox colorScheme="green">Green</Checkbox>
                <Checkbox colorScheme="green">Blue</Checkbox>
              </Stack>
            </FormControl>

              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  category
                </FormLabel>
                <Select placeholder="Select category" height="30px"  onChange={(e) => {
                  console.log('catval',e.target.value);
                  
                  setCategory(e.target.value)}}>
                  <option value='electronics'>Electronics</option>
                  <option value='kitchen'>Kitchen</option>
                  <option value='wears'>Wears</option>
                  <option value='groceries'>Groceries</option>
                  <option value='mobile'>Phones</option>
                </Select>
              </FormControl>
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  sku
                </FormLabel>
                <Input
                  placeholder="SKU"
                  width="80%"
                  height="50px"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  mt="4px"
                  fontSize="14px"
                />
              </FormControl>
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  weight
                </FormLabel>
                <Input
                  placeholder="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  width="80%"
                  height="50px"
                  mt="4px"
                  fontSize="14px"
                />
              </FormControl>
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  shop
                </FormLabel>
                <Input
                  placeholder="Shop"
                  width="80%"
                  value={shop}
                  onChange={(e) => setShop(e.target.value)}
                  height="50px"
                  mt="4px"
                  fontSize="14px"
                />
              </FormControl>


              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  Key Features
                </FormLabel>
                <Textarea
                  value={keyFeatures}
                  onChange={(e) => setKeyFeatures(e.target.value)}
                  width="80%"
                  height="50px"
                  placeholder="Key features goes here"
                  size="lg"
                  fontSize="14px"
                />
              </FormControl>
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  product details
                </FormLabel>
  
                <Textarea
                  value={productDetails}
                  onChange={(e) => setProductDetails(e.target.value)}
                  width="80%"
                  height="50px"
                  placeholder="Product details here"
                  size="lg"
                  fontSize="14px"
                />
              </FormControl>
              <FormControl mt="20px">
                <FormLabel
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  image url
                </FormLabel>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => {
                    const arr = [];
                    arr.push(base64);
                    setImgUrls((prev) => [...prev, ...arr]);
                  }}
                />
              </FormControl>
            </Box>
  
            <Flex flexDir="row" mt="20px" justifyContent="center" p="10px">
              <Button
                width="40%"
                mr={3}
                height="50px"
                onClick={(e) => {
                  sendProduct(e);
                  handleIsOpen(isOpen);
                  reset();
                }}
              >
                Save
              </Button>
              <Button
                width="60%"
                height="50px"
                onClick={() => {
                  reset();
                  handleIsOpen(isOpen);
                }}
              >
                Cancel
              </Button>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  };
  
  export default AddMobile;
  