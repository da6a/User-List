import { Fragment } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
        </section>

      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
