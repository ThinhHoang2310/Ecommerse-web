import styles from './styles.module.scss';

function InputCustom({ label, type, dataOption, isRequired = false }) {
   const { container, labelCls } = styles;

   const renderInput = () => {
      if (type === 'text') {
         return <input type="text" placeholder={label} />;
      } else {
         return (
            <select>
               {dataOption.map(item => (
                  <option key={item.value}>{item.label}</option>
               ))}
            </select>
         );
      }
   };

   return (
      <div className={container}>
         <label className={labelCls}>
            {label} {isRequired && <span>*</span>}
         </label>
         {renderInput()}
      </div>
   );
}

export default InputCustom;
