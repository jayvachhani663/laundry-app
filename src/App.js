import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/SignIn'; 
import Layout from './components/Layout';
import Register from './pages/Register';
import Deshboard from './pages/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Signin />} />
          <Route path="signin" element={<Signin />} /> 
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="deshbord" element={<Deshboard />} />
      </Routes>
    </Router>
  );
}

export default App;