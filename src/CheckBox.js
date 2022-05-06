import React from 'react';

const CheckItem = ({ product, handleChange, handleCount }) => (
  <div className='custom-control custom-checkbox'>
    <div>
      <input
        type='checkbox'
        className='custom-control-input'
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
    <div>
      <input
        className='w-20 py-2 text-center'
        type='number'
        placeholder='0'
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
);

export default CheckItem;
