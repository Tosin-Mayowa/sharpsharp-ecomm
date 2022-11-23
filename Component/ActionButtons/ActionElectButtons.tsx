import { Flex } from '@chakra-ui/react';
import DeleteButton from '../DeleteButton/DeleteElect';




const ActionButtons = ({ product,handleReload }): JSX.Element => {
  return (
    <Flex justifyContent="space-between" alignItems="center" data-testid="role-action">
      <DeleteButton product={product} handleReload={handleReload} />
      {/* <EditButton product={product} /> */}
    </Flex>
  );
};

export default ActionButtons;