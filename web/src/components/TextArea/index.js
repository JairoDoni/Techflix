import React from 'react';

export default function TextArea({ placeholder, label, type, name, value, onChange }){
  return (
    <div>
    <label>
      {label}: 
      <textarea
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
  )
}