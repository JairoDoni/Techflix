import { useState } from 'react';

export default function useForm(initialValors) {
  const [values, setValues] = useState(initialValors);
  function setValue(indice, valor) {
    setValues({
      ...values,
      [indice]: valor,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function clearForm() {
    setValues(initialValors);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
