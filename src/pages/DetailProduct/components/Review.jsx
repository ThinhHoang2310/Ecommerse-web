import Button from '@components/Button/Button';
import FormItem from '@/pages/DetailProduct/components/FormItem';

function ReviewProduct() {
   return (
      <div>
         <div>REVIEWS</div>
         <p>There are no reviews for this product.</p>

         <div>BE THE FIRST TO WRITE A REVIEW *10K*</div>
         <p>
            Your email address will not be published. Required fields are marked
         </p>

         {/* RATING  */}
         <FormItem
            label={'Your rating'}
            isRequired={true}
            typeChildren="rating"
         />

         {/* AREA */}
         <FormItem
            label={'Your review'}
            isRequired={true}
            typeChildren="textarea"
         />

         {/* NAME  */}
         <FormItem 
         label={'Name '}
          isRequired={true}
           typeChildren="input" />

         {/* EMAIL  */}
         <FormItem
            label={'Email'}
            isRequired={true}
            typeChildren="input"
         />

         <div>
            <input type="checkbox" />
            <p>
               Save my name,email,and website in this browser for the next time
               I comment
            </p>
         </div>

         <Button content="Submit" />
      </div>
   );
}

export default ReviewProduct;
