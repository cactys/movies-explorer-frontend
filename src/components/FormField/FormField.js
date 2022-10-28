const FormField = ({
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
    <label className="form__field">
          <span className='form__input-title'>{name}</span>
          <input
            type={type}
            placeholder={placeholder}
            className={`form__input ${inputError ? 'form__input_error' : ''} form__input_auth`}
            id={id}
            name={inputName}
            required
            minLength={minLength ? minLength : ''}
            maxLength={maxLength ? maxLength : ''}
            value={value}
          />
          <span className={`form__error ${errorSpan ? 'form__error_active' : ''} edit-email-error`}>Что-то пошло не так...</span>
        </label>
  )
}

export default FormField