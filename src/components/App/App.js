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
import { savedCards } from '../../utils/config';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { auth } from '../../utils/auth';

const App = () => {
  const [getMovies, setGetMovies] = useState([]);

  const [checked, setChecked] = useState(true);

  const history = useHistory();

  const handleRegister = (name, email, password) => {
    auth
      .signUp(name, email, password)
      .then(() => {
        history.push('/signin');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .getMovies()
      .then((res) => {
        setGetMovies(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{
          name: 'Владимир',
          email: 'cactys95@yandex.ru',
        }}
      >
        <Switch>
          <Route exact path="/">
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </Route>
          <Route exact path="/movies">
            <Header loggedIn={true} />
            <Movies
              cards={getMovies}
              checked={checked}
              setChecked={setChecked}
            />
            <Footer />
          </Route>
          <Route exact path="/saved-movies">
            <Header loggedIn={true} />
            <SaveMovies
              cards={savedCards}
              checked={checked}
              setChecked={setChecked}
            />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Header loggedIn={true} />
            <Profile />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
