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
import { api } from '../../utils/api';
import { auth } from '../../utils/auth';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState(''); // заменить на нормальный сообщения
  const [infoTooltip, setInfoTooltip] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

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

  useEffect(() => {
    api
      .getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const closeAllPopups = () => {
    setIsTooltipPopupOpen(false);
  };

  const handleRegister = (name, email, password) => {
    auth
      .signUp(name, email, password)
      .then((res) => {
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
        console.log(res);
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setData({
            email: email,
            password: password,
          });
          setCurrentUser(res.data);
          setIsLogin(true);
          setInfoTooltip(true);
          setMessageTooltip('Вы успешно вошли!');
          history.push('/movies');
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
        setData({
          email: '',
          password: '',
        });
        setIsLogin(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const tokenCheck = () => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        auth
          .getContent()
          .then((res) => {
            if (res && res.data.email) {
              setData({
                email: res.data.email,
                password: res.data.password,
              });
              setCurrentUser(res.data);
              setIsLogin(true);
              history.push('/');
            } else {
              history.push('/signin');
            }
          })
          .catch((err) => console.log(err));
      }
    };
    tokenCheck();
    api
      .getUser()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
    api
      .getCurrentMovies()
      .then((res) => {
        setCurrentMovies(res);
      })
      .catch((err) => console.log(err));
  }, [history, isLogin]);

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
            <ProtectedRoute
              loggedIn={isLogin}
              component={Movies}
              cards={movies}
              checked={checked}
              setChecked={setChecked}
            />
            <Footer />
          </Route>
          <Route exact path="/saved-movies">
            <Header loggedIn={isLogin} />
            <ProtectedRoute
              // path="/saved-movies"
              loggedIn={isLogin}
              component={SaveMovies}
              cards={currentMovies}
              checked={checked}
              setChecked={setChecked}
            />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Header loggedIn={isLogin} />
            <ProtectedRoute
              loggedIn={isLogin}
              component={Profile}
              dataUser={data}
              signOut={signOut}
            />
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
