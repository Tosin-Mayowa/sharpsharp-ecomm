import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useCallback, useEffect } from "react";
import ElectronicsTable from "../../Component/ElectnicsTable/ElectronicsTable";
import FoodsTable from "../../Component/FoodsTable/FoodsTable";
import GroceriesTable from "../../Component/GroceriesTable/GroceriesTable";
import KitchenTable from "../../Component/KitchenTable/KitchenTable";
import MobilesTable from "../../Component/MobilesTable/MobilesTable";
import WearsTable from "../../Component/WearsTable/WearsTable";






const ProductsUpload=():JSX.Element=>{

 
 
return (
    <>
    
    <Tabs mt="100px" ml='20px' width='100%'>
  <TabList width='100%' borderBottom='2px solid #f1f1f1'>
    <Tab fontSize='18px'>Electronics</Tab>
    <Tab fontSize='18px'>Kitchen</Tab>
    <Tab fontSize='18px'>Wears</Tab>
    <Tab fontSize='18px'>Mobile</Tab>
    <Tab fontSize='18px'>food</Tab>
    <Tab fontSize='18px'>Grocery</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <ElectronicsTable/>
    </TabPanel>
    <TabPanel>
     <KitchenTable/>
    </TabPanel>
    <TabPanel>
    <WearsTable/>
    </TabPanel>
    <TabPanel>
    <MobilesTable/>
    </TabPanel>
    <TabPanel>
    <FoodsTable/>
    </TabPanel>
    <TabPanel>
    <GroceriesTable/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
)




}

export default ProductsUpload;