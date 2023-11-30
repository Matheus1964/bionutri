import AppRoutes from "./Routes/Routes"
import './App.css';
import './variables.css'
import  AuthGoogleProvider  from './Contexts/authGoogle';

function App() {
  return (
    
    <AuthGoogleProvider>
        <AppRoutes />
      </AuthGoogleProvider>
      
  );
}

export default App;
