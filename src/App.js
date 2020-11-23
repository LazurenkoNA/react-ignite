import { Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
