import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CostCalculator from './components/CostCalculator';
import Blog from './pages/Blog';



function App() {
  return (
    <Router>
      <Header />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<CostCalculator />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </Router>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
  },
  main: {
    padding: '50px 20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#222',
  },
};

export default App;
