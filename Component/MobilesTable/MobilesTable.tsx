import {
    Box,
    Button,
    CircularProgress,
    Flex,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useToast,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useMemo, useState, useEffect, useCallback } from "react";
  import { AiOutlineSearch } from "react-icons/ai";
  import { useGlobalFilter, useSortBy, useTable } from "react-table";
  import { handlerFunction } from "../../lib/helpers";
  import { getMobileProduct } from "../../requestApi";
  import ActionButtons from "../ActionButtons/ActionElectButtons";
  import AddElectronics from "../AddElectronics/AddElectronics";
import AddMobile from "../AddMobile/AddMobile";
  import phone from "./Mobile.module.css";
  
  interface Products {
    id: string;
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
    keyfeatures: string;
    productDetails: string;
    image: string[];
  }
  
  const MobileTable = () => {
    const [mobile, setMobile] = useState<Array<string>>([]);
  const toast =useToast()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isModalOn, setIsModalOn] = useState<boolean>(false);
  
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [reload, setReload] = useState<boolean>(false);
  
  const handleReload=(val)=>{
    setReload(val);
  }
    const handleIsOpen = (val) => {
      setIsOpen(!val);
     
    };
    const fetchProducts = async () => {
      setIsLoading(true);
  
      const response = await getMobileProduct();
  
      setIsLoading(false);
      setMobile(response?.data?.data);
      toast({
             description:response?.data?.message ,
            status: 'success',
             duration: 2000,
            position: 'top',
          });
    };
  
  useEffect(()=>{
    fetchProducts()
  },[]);
  
    useEffect(() => {
      if(reload)fetchProducts();
    }, [reload]);
  
    const tableHeader = useMemo(
      () => [
        {
          Header: "ID",
          accessor: "mobileId",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Description",
          accessor: "description",
        },
        {
          Header: "Brand",
          accessor: "brand",
        },
        {
          Header: "Price",
          accessor: "price",
        },
        {
          Header: "Category",
          accessor: "category",
        },
        {
          Header: "Specifications",
          accessor: "specification",
          Cell: (props) => {
            const arr: string[] = Object?.values(
              props?.cell?.row?.original?.specification
            );
  
            return (
              <Flex  flexWrap="wrap">
                {arr?.map((pro, idx) => (
                  <Box width="60%" key={idx}>
                    {pro}
                  </Box>
                ))}
              </Flex>
            );
          },
        },
        {
          Header: " Key Features",
          accessor: "keyFeatures",
        },
        {
          Header: "Product Details",
          accessor: "productDetails",
        },
  
        {
          Header: "Image Url",
          accessor: "image",
          Cell: (props) => {
            return (
              <Flex flexDirection="column" width="40%">
                {props?.cell?.row?.original?.image?.map((url, idx) => (
                  <Image
                    key={idx}
                    src={url}
                    alt="product image"
                    width={100}
                    height={100}
                  />
                ))}
              </Flex>
            );
          },
        },
        {
          Header: "",
          accessor: "more",
          Cell: (props) => {
            return (
              <Flex w="75%" justifyContent="flex-start">
                <ActionButtons product={props?.cell?.row?.original} handleReload={handleReload}/>
              </Flex>
            );
          },
        },
      ],
      []
    );
  
    const data = useMemo(() => mobile, [mobile]);
    const columns = tableHeader;
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter,
    } = useTable({ columns, data }, useGlobalFilter);
  
    const { globalFilter } = state;
  
    const resetSearch = (e) => {
      e.target.blur();
      setGlobalFilter("");
    };
    if (isLoading) {
      return (
        <>
          <Flex
            h="100%"
            bg="#f1f1f1"
            zIndex="6"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
          >
            <CircularProgress
              color="#20A39E"
              isIndeterminate
              size="164px"
              thickness="6px"
              mb="32px"
            />
            <Box>
              <Text
                color="#4E5D78"
                fontSize="22px"
                lineHeight="27px"
                fontWeight="600"
                mb="14px"
              >
                Loading Products
              </Text>
              <Text fontSize="18px" lineHeight="16px">
                It will only take a minute
              </Text>
            </Box>
          </Flex>
        </>
      );
    }
    return (
      <>
        <Flex my="40px" w="100%" data-testid="roles">
          <Flex w="100%" flexDir="column">
            <Flex alignItems="center" justify="space-between" w="100%">
              <Flex
                as="form"
                w="35%"
                display={"flex"}
                data-testid="roles-search"
                ml="-11px"
              >
                <Flex as={FormControl} justifyContent="center" width="100%">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      mt="12px"
                      ml="5px"
                      fontSize="30px"
                    >
                      <AiOutlineSearch color="gray" />
                    </InputLeftElement>
                    <Input
                      data-testid="Apicall-search-field"
                      placeholder={"        " + "Search Mobile Phones"}
                      h="50px"
                      value={globalFilter || ""}
                      name="name"
                      onChange={(e) => {
                        setGlobalFilter(e.target.value);
                      }}
                      fontSize="20px"
                      autoComplete="off"
                      width="100%"
                    />
                  </InputGroup>
                </Flex>
              </Flex>
  
              <Box className={isOpen ? phone.ModalPh : ""}>
                {isOpen ? (
                  <AddMobile isOpen={isOpen} handleIsOpen={handleIsOpen} handleReload={handleReload}/>
                ) : (
                  <Button
                    className={phone.BtnPh}
                    onClick={() => {
                      handleIsOpen(isOpen);
                    }}
                  >
                    Add Mobile Phones
                  </Button>
                )}
              </Box>
            </Flex>
  
            {globalFilter && (
              <Flex mt="1.5rem">
                <Button
                  variant="link"
                  colorScheme="red"
                  ml="2.5rem"
                  onClick={resetSearch}
                  color="red"
                  outline="none"
                >
                  Reset Search
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
        {/* {error || hasFetched
          ? rolesData.length === 0 &&
            JSON.stringify(queryParams) !== '{}' && (
              <Alert
                as="div"
                status="error"
                color="#323B4B"
                description="Could not find any roles that match your search criteria."
              />
            )
          : ''} */}
        <Table
          {...getTableProps()}
          style={{ border: "solid 1px blue" }}
          width="100%"
        >
          <Thead>
            {headerGroups?.map((headerGroup, idx) => (
              <Tr {...headerGroup?.getHeaderGroupProps()} key={idx}>
                {headerGroup?.headers?.map((column, idx) => (
                  <Th
                    {...column?.getHeaderProps()}
                    style={{
                      borderBottom: "solid 3px red",
                      background: "aliceblue",
                      color: "black",
                      fontWeight: "bold",
                    }}
                    key={idx}
                  >
                    {column?.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows?.map((row, idx) => {
              prepareRow(row);
              return (
                <Tr {...row?.getRowProps()} key={idx}>
                  {row?.cells?.map((cell, idx) => {
                    return (
                      <Td
                        {...cell?.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                          background: "papayawhip",
                        }}
                        key={idx}
                      >
                        {cell?.render("Cell")}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </>
    );
  };
  
  export default MobileTable;
  