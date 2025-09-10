import Button from '@components/Button/Button';
import FormItem from '@/pages/DetailProduct/components/FormItem';

import styles from '../styles.module.scss';

function ReviewProduct() {
   const {
      containerReview,
      reviews,
      noreview,
      replyForm,
      commentReplyTitle,
      commentNotes,
      commentFormCookiesConsent,
      btnSubmit
   } = styles;

   return (
      <div className={containerReview}>
         <div className={reviews}>REVIEWS</div>
         <p className={noreview}>There are no reviews for this product.</p>

         <div className={replyForm}>
            <div className={commentReplyTitle}>
               BE THE FIRST TO WRITE A REVIEW *10K*
            </div>
            <p className={commentNotes}>
               Your email address will not be published. Required fields are
               marked
            </p>

            <form action="">
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
                  typeChildren="input"
               />

               {/* EMAIL  */}
               <FormItem
                  label={'Email'}
                  isRequired={true}
                  typeChildren="input"
               />

               <div className={commentFormCookiesConsent}>
                  <input type="checkbox" />
                  <span>
                     Save my name,email,and website in this browser for the next
                     time I comment
                  </span>
               </div>

               <div className={btnSubmit}>
                  <Button content="Submit" />
               </div>
            </form>
         </div>
      </div>
   );
}

export default ReviewProduct;
