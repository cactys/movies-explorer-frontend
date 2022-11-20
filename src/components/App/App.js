import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { auth } from '../../utils/auth';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { mainApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { GLOBAL_URL } from '../../utils/url';
import { CATCH_ERROR } from '../../utils/constants';

const App = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState(''); // заменить на нормальный сообщения
  const [infoTooltip, setInfoTooltip] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const history = useHistory();

  const isOpenPopup = isTooltipPopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    if (isOpenPopup) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isOpenPopup]);

  const closeAllPopups = () => {
    setIsTooltipPopupOpen(false);
  };

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        if (res) {
          setIsLogin(true);
          history.push(history.location.pathname);
          setCurrentUser(res);
        }
      })
      .finally(() => setIsChecked(true))
      .catch((err) => console.log(err));
    mainApi
      .getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .finally(() => setPreloader(false))
      .catch((err) => console.log(err));
  }, [isLogin, history]);

  const handleRegister = (data) => {
    auth
      .signUp(data)
      .then((res) => {
        if (res.token) {
          setIsLogin(true);
          history.push('/movies');
        }
      })
      .finally(() => setIsChecked(true))
      .catch((err) => {
        console.log(err);
        setMessageError(CATCH_ERROR);
      });
  };

  const handleLogin = (data) => {
    auth
      .signIn(data)
      .then((res) => {
        if (res.token) {
          setIsLogin(true);
          history.push('/movies');
        }
      })
      .finally(() => setIsChecked(true))
      .catch((err) => {
        console.log(err);
        setMessageError(CATCH_ERROR);
      });
  };

  const onSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setCurrentUser({
          name: '',
          email: '',
          password: '',
        });
        localStorage.clear();
        setIsLogin(false);
        setIsChecked(false);
      })
      .finally(() => {
        history.push('/');
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateUser = (data) => {
    api
      .editUser(data)
      .then((res) => {
        setCurrentUser(res);
        setInfoTooltip(true);
        setMessageTooltip('Вы изменили личные данные.');
      })
      .catch((err) => {
        console.log(err);
        setInfoTooltip(false);
        setMessageTooltip(CATCH_ERROR);
      })
      .finally(() => {
        setIsTooltipPopupOpen(true);
      });
  };

  const handleAddMovie = (movie) => {
    const addMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${GLOBAL_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${GLOBAL_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    mainApi
      .addSavedMovie(addMovie)
      .then((saveMovie) => {
        setSavedMovies([...savedMovies, saveMovie]);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header loggedIn={isLogin} />
            <Main />
            <Footer />
          </Route>
          <Route exact path="/movies">
            <Header loggedIn={isLogin} />
            {isChecked ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={Movies}
                savedMovies={savedMovies}
                onAddMovie={handleAddMovie}
                onDeleteMovie={handleDeleteMovie}
                preloader={preloader}
                setPreloader={setPreloader}
              />
            ) : (
              <Preloader />
            )}
            <Footer />
          </Route>
          <Route exact path="/saved-movies">
            <Header loggedIn={isLogin} />
            {isChecked ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={SavedMovies}
                savedMovies={savedMovies}
                onDeleteMovie={handleDeleteMovie}
              />
            ) : (
              <Preloader />
            )}
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Header loggedIn={isLogin} />
            {isChecked ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={Profile}
                onSignOut={onSignOut}
                onUpdateUser={handleUpdateUser}
              />
            ) : (
              <Preloader />
            )}
          </Route>
          <Route path="/signin">
            <Login
              loggedIn={isLogin}
              handleLogin={handleLogin}
              messageError={messageError}
            />
          </Route>

          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              messageError={messageError}
            />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isTooltipPopupOpen}
          onClose={closeAllPopups}
          onInfoTooltip={infoTooltip}
          messageTooltip={messageTooltip}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
