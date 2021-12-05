import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';

function App() {
  return (
  <BrowserRouter>
    <Header />
    <div className="app"></div>
    <SimpleBottomNavigation />
  </BrowserRouter>  
 );
}

export default App;
