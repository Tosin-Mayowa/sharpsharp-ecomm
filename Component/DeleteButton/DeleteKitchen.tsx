import {
    Box,
    Button,
    Center,
    Flex,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  
  import { AiOutlineDelete } from "react-icons/ai";
  import { handleError } from "../../lib/helpers";
  import { deleteElectronic, deleteKit } from "../../requestApi";
  
  import styleDelete from "./DeleteButton.module.css";
  
  const DeleteKitchen = ({ product,handleReload}): JSX.Element => {
    const [isDelete, setIsDelete] = useState<boolean>(false);
    const [hasDelete, setHasDelete] = useState<boolean>(false);
    const toast = useToast();
  console.log('hasDelete',hasDelete);
  
  
  
   const handleIsDelete=(val)=>{
    setIsDelete(!val)
   }
  
   const deleteProductApi=async ()=>{
  
    const response= await deleteKit(product.kitId);
    console.log(response,'deleRes');
    
  if(response){
    setHasDelete(true)
  }
    
  const errorResponse=handleError(response)
  
  
      if ((response && !response.data) || !response || errorResponse) {
        toast({
          description: errorResponse,
          status: 'error',
          duration: 2000,
          position: 'top',
        });
      }
  
   }
    useEffect(()=>{
      if(hasDelete)handleReload(hasDelete);
    },[hasDelete,handleReload])
    return (
      <>
       
        <Box className={isDelete ? styleDelete.ModalX : ""}>
          {isDelete ? (
            <Box flexDir="column" mr="500px" width="50%">
              <Flex bg="#fff" flexDir="column">
                <Center>
                  <Text
                    fontSize="18px"
                    borderBottom="2px solid #D6DDEB"
                    fontWeight="bold"
                  >
                    Delete Product
                  </Text>
                </Center>
  <Center>
                <Text
                  color="#636E95"
                  lineHeight="150%"
                  fontSize="16px"
                  fontWeight="400"
                  mt="24px"
                  padding='10px'
                >
                  You are about to delete <strong>{product.name}</strong>. Are you
                  sure you want to delete this role.
                </Text>
                </Center>
                <Flex flexDir="row" mt="20px" justifyContent="center" p="10px">
                  <Button
                    width="40%"
                    mr={3}
                    height="50px"
                    onClick={() => {
                      deleteProductApi();
                      handleIsDelete(isDelete);
                      
                    }}
                  >
                    yes
                  </Button>
                  <Button
                    width="60%"
                    height="50px"
                    onClick={() => {
                      handleIsDelete(isDelete);
                    }}
                  >
                    Cancel
                  </Button>
                </Flex>
              </Flex>
            </Box>
          ) : (
            <AiOutlineDelete
              onClick={() => {
               
                handleIsDelete(isDelete);
              }}
            />
          )}
        </Box>
      </>
    );
  };
  export default DeleteKitchen;
  
  // color="#25324B"
  //           fontSize="20px"
  //           fontWeight="800"
  //           data-testid="delete-role-header"
  //           display="flex"
  //           p="25px 30px"
  //           justifyContent="center"
  //           borderBottom="1px"
  //           borderBottomColor="#D6DDEB"
  //         >
  //           Delete Role
  //         </Heading>
  