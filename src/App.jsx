import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BalancesPage from './pages/BalancesPage';
import Navigation from './components/Navigation';
import SavingsPage from './pages/SavingsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<BalancesPage />} />
          <Route path="/balances" element={<BalancesPage />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
