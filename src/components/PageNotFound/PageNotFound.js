import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-page__container">
        <h2 className="error-page__error-code">404</h2>
        <p className="error-page__error-text">Страница не найдена</p>
        <Link className='error-page__link' to='/'>
          Назад
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
