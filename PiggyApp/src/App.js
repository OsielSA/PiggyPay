import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './layouts/NavBar';
import PiggyHome from './layouts/PiggyHome';
import DebitAccounts from './layouts/DebitAccounts';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavigationBar /> }>
          <Route path='home' element={ <PiggyHome /> } />
          <Route path='debit_accounts' element={ <DebitAccounts /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
