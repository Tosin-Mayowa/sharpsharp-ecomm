import { Box, Flex, FormControl, Input, InputGroup, InputLeftElement, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useMemo,useState,useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalFilter, useSortBy, useTable } from 'react-table'



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


export const products:Products[]=[
  {
      id:'1',
      name:'lg 32inches Television',
      description:'lovely 32inches tv',
      brand:'LG',
      price:'64000',
      category:'electronics',
      specification:{
          sku:12223333,
          weight:'20kg',
          shop:'sharp sharp',
      },
      keyfeatures:'<div> This is product is one of the best<ul><li>best product ever</li><li>hello world</li></ul></div>',
      productDetails:'LG 32inches is a fine electronics from the best hands it self they sell at affordable prices',
      image:['../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg']
  },
  {
      id:'2',
      name:'lg 32inches Television',
      description:'lovely 32inches tv',
      brand:'LG',
      price:'64000',
      category:'electronics',
      specification:{
          sku:12223333,
          weight:'20kg',
          shop:'sharp sharp',
      },
      keyfeatures:'<div> This is product is one of the best<ul><li>best product ever</li><li>hello world</li></ul></div>',
      productDetails:'LG 32inches is a fine electronics from the best hands it self they sell at affordable prices',
      image:['../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg']
  },

  {
      id:'3',
      name:'lg 32inches Television',
      description:'lovely 32inches tv',
      brand:'LG',
      price:'64000',
      category:'electronics',
      specification:{
          sku:12223333,
          weight:'20kg',
          shop:'sharp sharp',
      },
      keyfeatures:'<div> This is product is one of the best<ul><li>best product ever</li><li>hello world</li></ul></div>',
      productDetails:'LG 32inches is a fine electronics from the best hands it self they sell at affordable prices',
      image:['../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg']
  },

  {
      id:'4',
      name:'lg 32inches Television',
      description:'lovely 32inches tv',
      brand:'LG',
      price:'64000',
      category:'electronics',
      specification:{
          sku:12223333,
          weight:'20kg',
          shop:'sharp sharp',
      },
      keyfeatures:'<div> This is product is one of the best<ul><li>best product ever</li><li>hello world</li></ul></div>',
      productDetails:'LG 32inches is a fine electronics from the best hands it self they sell at affordable prices',
      image:['../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg']
  },

  {
      id:'5',
      name:'lg 32inches Television',
      description:'lovely 32inches tv',
      brand:'LG',
      price:'64000',
      category:'electronics',
      specification:{
          sku:12223333,
          weight:'20kg',
          shop:'sharp sharp',
      },
      keyfeatures:'<div> This is product is one of the best<ul><li>best product ever</li><li>hello world</li></ul></div>',
      productDetails:'LG 32inches is a fine electronics from the best hands it self they sell at affordable prices',
      image:['../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg']
  },

  {
      id:'6',
      name:'lg 32inches Television',
      description:'lovely 32inches tv',
      brand:'LG',
      price:'64000',
      category:'electronics',
      specification:{
          sku:12223333,
          weight:'20kg',
          shop:'sharp sharp',
      },
      keyfeatures:'<div> This is product is one of the best<ul><li>best product ever</li><li>hello world</li></ul></div>',
      productDetails:'LG 32inches is a fine electronics from the best hands it self they sell at affordable prices',
      image:['../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg','../public/Images/testIm.jpg']
  },
 
]

const ElectronicsTable=()=>{



    const tableHeader =useMemo(
        () => [
          {
            Header: 'ID',
            accessor: 'id', 
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Description',
            accessor: 'description',
          },
          {
            Header: 'Brand',
            accessor: 'brand',
          },
          {
            Header: 'Price',
            accessor: 'price',
          },
          {
            Header: 'Category',
            accessor: 'category',
          },
          {
            Header: 'Specifications',
            accessor: 'specification',
            Cell: (props) => {
              const arr:string[]=Object.values(props?.cell?.row?.original.specification);
              
              return (
                <Flex w="35%" flexDirection='column'>
                  {arr?.map((pro,idx)=><Box key={idx}>{pro}</Box>)}
                  
                </Flex>
              );
            },
          },
          {
            Header: ' Key Features',
            accessor: 'keyfeatures',
          },
          {
            Header: 'Product Details',
            accessor: 'productDetails',
          },
        
          {
            Header: 'Image Url',
            accessor: 'image',
            Cell: (props) => {
              console.log(props?.cell?.row?.original);
              
              return (
                <Flex w="45%" flexWrap='wrap'>
                  {props?.cell?.row?.original?.image?.map((img,idx)=><Box key={idx}>{img}</Box>)}
                  
                </Flex>
              );
            },
          },
        ],
        []
      )

    const data = useMemo(() => products, []);
 const columns=tableHeader;
      
      
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
      } = useTable({ columns, data }, useGlobalFilter, useSortBy);
    
      const { globalFilter } = state;
    
      const resetSearch = (e) => {
        e.target.blur();
        setGlobalFilter('');
       
      };
    return (
        <>
         <Flex my="40px" w="100%" data-testid="roles">
        <Flex w="100%" flexDir="column">
          <Flex alignItems="center" justify="space-between" w="100%">
            <Flex
              as="form"
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   orderRoles('name', formState.values.name);
              // }}
              w="35%"
              display={'flex'}
              data-testid="roles-search"
              ml="-11px"
            >
              <Flex as={FormControl} justifyContent="center">
              <InputGroup>
              <InputLeftElement
      pointerEvents='none'
      ><AiOutlineSearch color='gray' /></InputLeftElement>
                <Input
                 
                  data-testid="Apicall-search-field"
                  placeholder="Search roles"
                  h="50px"
                  value={globalFilter || ''}
                  name="name"
                  onChange={(e) => {
                    setGlobalFilter(e.target.value);
                  }}
                  autoComplete="off"
                />
                </InputGroup>
   
   
  
              </Flex>
            </Flex>
            <Box data-testid="add-roles">
              <AddElectronics fetchRolesData={fetchRolesData} queryParams={queryParams} />
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
        <Table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <Thead>
         {headerGroups.map((headerGroup,idx) => (
           <Tr {...headerGroup.getHeaderGroupProps()} key={idx}>
             {headerGroup.headers.map((column,idx) => (
               <Th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
                 key={idx}
               >
                 {column.render('Header')}
               </Th>
             ))}
           </Tr>
         ))}
       </Thead>
       <Tbody {...getTableBodyProps()}>
         {rows.map((row,idx) => {
           prepareRow(row)
           return (
             <Tr {...row.getRowProps()} key={idx}>
               {row.cells.map((cell,idx) => {
                 return (
                   <Td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                     key={idx}
                   >
                     {cell.render('Cell')}
                   </Td>
                 )
               })}
             </Tr>
           )
         })}
       </Tbody>
     </Table>
        </>
    )
}

export default ElectronicsTable;