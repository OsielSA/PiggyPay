// import  { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
// import NavigationBar from './pages/NavBar';
// import PiggyHome from './pages/PiggyHome';
// import DebitAccounts from './pages/DebitAccounts';
// import DetailDebitAccount from './pages/DetailDebitAccount';
// import FormDebitAccount from './components/FormDebitAccount';

// import { useAuth0, withAuthenticationRequired  } from '@auth0/auth0-react'
// import './App.css';

// function App() {
//   // Componente funcional para DebitAccounts
//   const DebitAccountsWrapper = () => {
//     // Contenido de DebitAccounts
//     return <DebitAccounts />;
//   };
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={ <NavigationBar /> }>
//           <Route path='home' element={ <PiggyHome /> } />
//           <Route path='debit_accounts' element={withAuthenticationRequired(<DebitAccountsWrapper />, {
//             // Configuración opcional para la redirección en caso de no autenticación
//             onRedirecting: () => <div>Loading...</div>,
//           })} />
//           <Route path='debit_accounts/detail' element={ <DetailDebitAccount /> } />
//           <Route path='debit_accounts/form' element={ <FormDebitAccount /> } />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { useEffect } from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './pages/NavBar';
import PiggyHome from './pages/PiggyHome';
import DebitAccounts from './pages/DebitAccounts';
import DetailDebitAccount from './pages/DetailDebitAccount';
import FormDebitAccount from './components/FormDebitAccount';
import Login from './pages/Login';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated &&
        <Login></Login>
      }
      {isAuthenticated &&
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavigationBar />}>
              <Route path='home' element={<PiggyHome />} />
              <Route path='debit_accounts' element={<DebitAccounts />} />
              <Route path='debit_accounts/detail' element={<DetailDebitAccount />} />
              <Route path='debit_accounts/form' element={<FormDebitAccount />} />
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;