import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
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
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { auth } from '../../utils/auth';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { mainApi } from '../../utils/MainApi';
import { URL } from '../../utils/constants';
import { MESSAGE } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

const App = () => {
  const { beatfilmMovies } = URL;
  const { catchError } = MESSAGE;
  const [savedMovies, setSavedMovies] = useState([]);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState('');
  const [infoTooltip, setInfoTooltip] = useState();
  const [currentUser, setCurrentUser] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errorActive, setErrorActive] = useState(false);
  const [preloader, setPreloader] = useState(true);

  const getWindowWidth = useCallback(() => window.innerWidth, []);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const history = useHistory();

  const isOpenPopup = isTooltipPopupOpen;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(getWindowWidth());
    };

    let resizeTime;

    const resizeController = () => {
      if (!resizeTime) {
        resizeTime = setTimeout(() => {
          resizeTime = null;
          handleWindowResize();
        }, 1000);
      }
    };

    window.addEventListener('resize', resizeController, false);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [getWindowWidth]);

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

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        if (res._id) {
          setIsLogin(true);
          setCurrentUser(res);
          setIsChecked(true);
        }
        setMessageError('');
        setErrorActive(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLogin(false);
        setIsChecked(false);
      });
    mainApi
      .getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .finally(() => setPreloader(false))
      .catch((err) => console.log(err));
  }, [isLogin]);

  const closeAllPopups = () => {
    setIsTooltipPopupOpen(false);
  };

  const handleRegister = (data) => {
    auth
      .signUp(data)
      .then((res) => {
        if (res.token) {
          setIsLogin(true);
          history.push('/movies');
          setIsChecked(true);
          setMessageTooltip('');
        }
      })
      .catch((err) => {
        console.log(err);
        setIsTooltipPopupOpen(true);
        setInfoTooltip(false);
        setMessageTooltip(catchError);
      });
  };

  const handleLogin = (data) => {
    auth
      .signIn(data)
      .then((res) => {
        if (res.token) {
          setIsLogin(true);
          history.push('/movies');
          setIsChecked(true);
          setMessageTooltip('');
        }
      })
      .catch((err) => {
        console.log(err);
        setIsTooltipPopupOpen(true);
        setInfoTooltip(false);
        setMessageTooltip(catchError);
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
      })
      .finally(() => {
        setIsLogin(false);
        setIsChecked(false);
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
        setMessageTooltip(catchError);
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
      image: `${beatfilmMovies}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${beatfilmMovies}${movie.image.formats.thumbnail.url}`,
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
                windowWidth={windowWidth}
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
                windowWidth={windowWidth}
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
            {isChecked ? (
              <Redirect to="/movies" />
            ) : (
              <Login
                // loggedIn={isLogin}
                handleLogin={handleLogin}
                messageError={messageError}
                errorActive={errorActive}
              />
            )}
          </Route>
          <Route path="/signup">
            {isChecked ? (
              <Redirect to="/movies" />
            ) : (
              <Register
                handleRegister={handleRegister}
                messageError={messageError}
                errorActive={errorActive}
              />
            )}
          </Route>
          <Route component={PageNotFound} />
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
