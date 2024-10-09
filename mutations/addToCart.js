import { KeystoneContext } from '@keystone-next/types';

export default function addToCart(
  root: any,
  { productId: string },
  context: KeystoneContext
) {
  console.log('Adding To Cart');
}
