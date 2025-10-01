import Stepper from '@/pages/Cart/components/steps/Stepper';
import styles from '../../styles.module.scss';
import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';

function Steps() {
   const { containerSteps, steps, line, textNotification } = styles;

   const { currentStep, setCurrentStep } = useContext(StepperContext);

   const dataSteps = [
      { number: 1, content: 'shopping cart' },
      { number: 2, content: 'checkout' },
      { number: 3, content: 'Order status' },
   ];

   return (
      <div className={containerSteps}>
         <div className={steps}>
            {dataSteps.map((item, index) => {
               const isActive = currentStep > index + 1;
               return (
                  <>
                     <Stepper
                        number={item.number}
                        content={item.content}
                        key={index}
                        isDisabled={index >= currentStep}
                        setCurrentStep={setCurrentStep}
                     />
                     {index !== dataSteps.length - 1 && (
                        // <div className={line}></div>

                        <div
                           className={line}
                           style={{
                              background: isActive ? '#333' : '#e0e0e0', // màu sáng khi active
                              transition: 'background 0.3s',
                           }}
                        ></div>
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
