import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SaveMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useState } from 'react';
import { api } from '../../utils/Api';
import { auth } from '../../utils/Auth';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { GLOBAL_URL } from '../../utils/config';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState(''); // заменить на нормальный сообщения
  const [infoTooltip, setInfoTooltip] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const [checked, setChecked] = useState(true);

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
    const tokenCheck = () => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        auth
          .getContent()
          .then((res) => {
            if (res) {
              setIsLogin(true);
              history.push(history.location.pathname);
              setCurrentUser(res);
            }
          })
          .catch((err) => console.log(err));
      }
    };
    tokenCheck();
    api
      .getUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
    mainApi
      .getCurrentMovies()
      .then((res) => {
        setCurrentMovies(res);
      })
      .catch((err) => console.log(err));
    moviesApi.getMovies().then((res) => {
      setMovies(res);
    });
  }, [isLogin, history]);

  const handleRegister = (name, email, password) => {
    auth
      .signUp(name, email, password)
      .then(() => {
        setIsTooltipPopupOpen(true);
        setInfoTooltip(true);
        setMessageTooltip('Вы успешно зарегистрировались!');
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
        setIsTooltipPopupOpen(true);
        setInfoTooltip(false);
        setMessageTooltip('Что-то пошло не так! Попробуйте ещё раз.');
      });
  };

  const handleLogin = (email, password) => {
    auth
      .signIn(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsLogin(true);
          setInfoTooltip(true);
          setMessageTooltip('Вы успешно вошли!');
          history.push('/profile');
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoTooltip(false);
        setMessageTooltip('Что-то пошло не так! Попробуйте ещё раз.');
      })
      .finally(() => {
        setIsTooltipPopupOpen(true);
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setCurrentUser({
          name: '',
          email: '',
          password: '',
        });
        setIsLogin(false);
      })
      .finally(() => {
        history.push('/signin');
        setInfoTooltip(true);
        setIsTooltipPopupOpen(true);
        setMessageTooltip('Выход УСПЕХ!');
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateUser = (data) => {
    api
      .editUser(data)
      .then((res) => {
        setCurrentUser(res);
        setInfoTooltip(true);
        setIsTooltipPopupOpen(true);
        setMessageTooltip('Вы изменили личный данные.');
      })
      .catch((err) => {
        console.log(err);
        setInfoTooltip(false);
        setMessageTooltip('Что-то пошло не так! Попробуйте ещё раз.');
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
      .addCurrentMovie(addMovie)
      .then((saveMovie) => {
        setCurrentMovies([...currentMovies, saveMovie]);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setCurrentMovies((state) => state.filter((c) => c._id !== movie._id));
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
            {isLogin ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={Movies}
                cards={movies}
                currentCards={currentMovies}
                checked={checked}
                setChecked={setChecked}
                onAddMovie={handleAddMovie}
              />
            ) : (
              <Preloader />
            )}
            <Footer />
          </Route>
          <Route exact path="/saved-movies">
            <Header loggedIn={isLogin} />
            {isLogin ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={SaveMovies}
                cards={currentMovies}
                checked={checked}
                setChecked={setChecked}
                onDeleteMovie={handleDeleteMovie}
              />
            ) : (
              <Preloader />
            )}
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Header loggedIn={isLogin} />
            {isLogin ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={Profile}
                signOut={signOut}
                onUpdateUser={handleUpdateUser}
              />
            ) : (
              <Preloader />
            )}
          </Route>
          <Route exact path="/signin">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route exact path="/signup">
            <Register handleRegister={handleRegister} />
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
