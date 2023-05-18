import styles from './FormField.module.scss';
import { ErrorMessage, FieldProps, useField } from 'formik';

interface Props extends FieldProps {
  label: string;
}

export const FormField: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

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
