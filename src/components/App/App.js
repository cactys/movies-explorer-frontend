import './App.css';
import { Route, Switch } from 'react-router-dom';
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
import { cards } from '../../utils/content';

const App = () => {
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
            <Movies cards={cards} />
            <Footer />
          </Route>
          <Route exact path="/saved-movies">
            <Header loggedIn={true} />
            <SaveMovies cards={cards} />
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
            <Register />
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
