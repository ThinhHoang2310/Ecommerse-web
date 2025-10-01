import InputCustom from '@components/InputCommon2/Input';

function Checkout() {
   const dataOptions = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
   ];

   return (
      <div>
         <InputCustom label={'FirstName'} type="text" isRequired />

         <InputCustom
            label={'Country/Region'}
            dataOption={dataOptions}
            isRequired
         />
      </div>
   );
}

export default Checkout;
