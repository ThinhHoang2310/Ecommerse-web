import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';
import Contents from '@/pages/Cart/components/contents/Contents';
import Checkout from '@/pages/Cart/components/Checkout/Checkout';

function ContentStep() {
   const { currentStep } = useContext(StepperContext);

   const handleRenderContent = () => {
      switch (currentStep) {
         case 1:
            return <Contents />;
         case 2:
            return <Checkout/>;
         case 3:
            return <div>Step 3 Content</div>;
      }
   };
   return <>{handleRenderContent()}</>;
}

export default ContentStep;
