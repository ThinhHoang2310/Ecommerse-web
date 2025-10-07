import { addProductToCart } from '@/apis/cartService';
import { list } from 'postcss';

export const handleAddProductToCartCommon = (
   userId,
   setIsOpen,
   setType,
   toast,
   sizeChoose,
   productId,
   quantity,
   setIsLoading,
   handleGetListProductCart
) => {
   if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart');

      return;
   }

   if (!sizeChoose) {
      toast.warning('Please choose size');
      return;
   }

   const data = {
      userId,
      productId,
      quantity,
      size: sizeChoose,
   };

   setIsLoading(true);
   addProductToCart(data)
      .then(res => {
         setIsOpen(true);
         setType('cart');
         toast.success('Add product to cart successfully!');
         setIsLoading(false);
         handleGetListProductCart(userId, 'cart');
      })
      .catch(err => {
         toast.error('Add product to cart failed!');
         setIsLoading(false);
      });
};

// export const handleTotalPrice = listProduct => {
//    return listProduct.reduce((acc, item) => {
//       return acc + item.total;
//    });
// };

export const handleTotalPrice = (listProduct = []) => {
   // Nếu mảng trống, trả về 0
   if (!Array.isArray(listProduct) || listProduct.length === 0) return 0;

   // Tính tổng, ép kiểu giá trị thành số
   const total = listProduct.reduce((acc, item) => {
      const itemTotal =
         typeof item.total === 'number'
            ? item.total
            : parseFloat(item.total) || 0;
      return acc + itemTotal;
   }, 0);

   return total;
};
