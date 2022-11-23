import { Flex } from "@chakra-ui/react";

import DeleteKitchen from "../DeleteButton/DeleteKitchen";

const ActionKit = ({ product, handleReload }): JSX.Element => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      data-testid="role-action"
    >
      <DeleteKitchen product={product} handleReload={handleReload} />
      {/* <EditButton product={product} /> */}
    </Flex>
  );
};

export default ActionKit;
