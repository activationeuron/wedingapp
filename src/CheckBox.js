import React from 'react';

const CheckItem = ({ product, handleChange, handleCount, key }) => {
  return (
    <>
      <div className=' flex items-center justify-between space-y-2'>
        <div className=' flex items-center space-x-2'>
          <input
            type='checkbox'
            // className='custom-control-input'
            id={`customCheck1-${product.name}`}
            checked={product.checked}
            onChange={() => handleChange(product.name)}
          />
          <label
            className='custom-control-label'
            htmlFor={`customCheck1-${product.name}`}
          >
            {product.name}
          </label>
        </div>
        <div className=' relative flex items-center'>
          <input
            className='w-20 rounded-full text-center border-2 flex justify-center'
            type='number'
            placeholder='0'
            tabIndex={key}
            onChange={(e) =>
              handleCount({
                name: product.name,
                checked: product.checked,
                count: e.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default CheckItem;
