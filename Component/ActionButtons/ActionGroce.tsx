import { Flex } from '@chakra-ui/react';
import DeleteGroceries from '../DeleteButton/DeleteElect';




const ActionGroce = ({ product,handleReload }): JSX.Element => {
  return (
    <Flex justifyContent="space-between" alignItems="center" data-testid="role-action">
      <DeleteGroceries product={product} handleReload={handleReload} />
      {/* <EditButton product={product} /> */}
    </Flex>
  );
};

export default ActionGroce;