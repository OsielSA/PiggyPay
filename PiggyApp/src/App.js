import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './pages/NavBar';
import PiggyHome from './pages/PiggyHome';
import DebitAccounts from './pages/DebitAccounts';
import DetailDebitAccount from './pages/DetailDebitAccount';
import FormDebitAccount from './components/FormDebitAccount';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavigationBar /> }>
          <Route path='home' element={ <PiggyHome /> } />
          <Route path='debit_accounts' element={ <DebitAccounts /> } />
          <Route path='debit_accounts/detail' element={ <DetailDebitAccount /> } />
          <Route path='debit_accounts/form' element={ <FormDebitAccount /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
