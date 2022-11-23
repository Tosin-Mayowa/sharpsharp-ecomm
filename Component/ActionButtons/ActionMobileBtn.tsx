import { Flex } from "@chakra-ui/react";
import DeleteMobile from "../DeleteButton/DeleteMobile";

const ActionKit = ({ product, handleReload }): JSX.Element => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      data-testid="role-action"
    >
      <DeleteMobile product={product} handleReload={handleReload} />
      {/* <EditButton product={product} /> */}
    </Flex>
  );
};

export default ActionKit;
