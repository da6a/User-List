import { useEffect, useState } from 'react';
import * as userService from './services/userService';
import { Fragment } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import './App.css';
import { UserList } from './components/UserList';

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    userService.getAll()
    .then(setUser)
    .catch(err => {
      console.log('Error' + err);
    });
  }, []);

  const onUserCreate = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const createdUser = await userService.create(data);
    setUser(state => [createdUser, ...state]);
  };

  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="card users-container">

          <Search />
          <UserList users={users} onUserCreate={onUserCreate} />

        </section>

      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
