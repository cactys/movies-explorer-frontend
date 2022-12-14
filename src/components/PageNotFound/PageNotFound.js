import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  const history = useHistory();

  return (
    <main className="error-page">
      <section className="error-page__container">
        <h2 className="error-page__error-code">404</h2>
        <p className="error-page__error-text">Страница не найдена</p>
        <button className="error-page__button" onClick={() => history.goBack()}>
          Назад
        </button>
      </section>
    </main>
  );
};

export default PageNotFound;
