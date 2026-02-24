import { useState, useCallback } from 'react';

export type FormErrors<T> = Partial<Record<keyof T, string>>;

export const useFormValidation = <T extends Record<string, any>>(
  initialValues: T,
  validateFn: (values: T) => FormErrors<T>,
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const name = e.target.name as keyof T;
      const value = e.target.value;

      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors],
  );

  const validate = useCallback(() => {
    const validationErrors = validateFn(values);
    setErrors(validationErrors);
    return validationErrors;
  }, [values, validateFn]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setSuccess(false);
    setLoading(false);
  }, [initialValues]);

  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    setValues,
    errors,
    handleChange,
    validate,
    isValid,
    success,
    setSuccess,
    loading,
    setLoading,
    resetForm,
  };
};
