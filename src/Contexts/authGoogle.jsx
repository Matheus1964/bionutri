import { useState, createContext, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../../src/Services/firebaseConfig'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
const provider = new GoogleAuthProvider();


export const AuthGoogleContext = createContext({})


function AuthGoogleProvider ({children}){
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user")

      if(sessionToken && sessionUser){
        setUser(sessionUser);
      }
    }
    loadStoreAuth();
  },[])


  const signInGoogle = () =>{
    
    
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user)
        setIsLoggedIn(true);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
       
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        
      });
      }
      function SignOut(){
        sessionStorage.clear()
        setUser(null);
        setIsLoggedIn(false);
        
      }
    return(
      <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user, user, SignOut , isLoggedIn }}>
        {children}

      </AuthGoogleContext.Provider>
    )

}
export default AuthGoogleProvider;