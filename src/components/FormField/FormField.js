const FormField = ({
  className,
  name,
  type,
  placeholder,
  id,
  inputName,
  value,
  minLength,
  maxLength,
  inputError,
  errorSpan,
}) => {
  return (
    <label className={`${className}__field`}>
      <span className={`${className}__input-title`}>{name}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={`${className}__input ${
          inputError ? `${className}__input_error` : ''
        }`}
        id={id}
        name={inputName}
        required
        minLength={minLength ? minLength : ''}
        maxLength={maxLength ? maxLength : ''}
        value={value}
      />
      <span
        className={`${className}__error ${
          errorSpan ? `${className}__error_active` : ''
        } edit-${type}-error`}
      >
        Что-то пошло не так...
      </span>
    </label>
  );
};

export default FormField;
