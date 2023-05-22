import { FormFieldProps } from '@pages/Auth/Utilse';
import styles from './FormField.module.scss';
import { ErrorMessage, useField } from 'formik';

export const FormField: React.FC<
  { label: string } & React.InputHTMLAttributes<HTMLInputElement> &
    FormFieldProps
> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label className={styles.label} htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        autoComplete="on"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
};
