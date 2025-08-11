import Stepper from '@/pages/Cart/components/steps/Stepper';
import styles from '../../styles.module.scss';

function Steps() {
   const { containerSteps, steps, line, textNotification } = styles;

   const dataSteps = [
      { number: '1', content: 'shopping cart' },
      { number: '2', content: 'checkout' },
      { number: '3', content: 'Order status' },
   ];

   return (
      <div className={containerSteps}>
         <div className={steps}>
            {dataSteps.map((item, index) => {
               return (
                  <>
                     <Stepper
                        number={item.number}
                        content={item.content}
                        key={index}
                        isDisabled={index !== 0}
                     />
                     {index !== dataSteps.length - 1 && (
                        <div className={line}></div>
                     )}
                  </>
               );
            })}
         </div>

         <div className={textNotification}>
            🔥 Hurry up, these products are limited, checkout within 12:12
         </div>
      </div>
   );
}

export default Steps;
