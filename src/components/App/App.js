import './App.css';
import { Route, Switch } from 'react-router-dom';
import { createContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SaveMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import PageNotFound from '../PageNotFound/PageNotFound';

export const Context = createContext(null);

const App = () => {
  return (
    <div className="page">
      <Context.Provider
        value={{
          email: 'cactys95@yandex.ru',
          name: 'Владимир',
          password: '12345678',
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
            <Movies />
            <Footer />
          </Route>
          <Route exact path="/saved-movies">
            <Header loggedIn={true} />
            <SaveMovies />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Header loggedIn={true} />
            <Profile />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Context.Provider>
    </div>
  );
};

export default App;
