import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/SignIn'; 
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signin" element={<Signin />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
