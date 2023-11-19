import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../../src/Services/firebaseConfig'
import { createContext } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
const provider = new GoogleAuthProvider();


export const AuthGoogleContext = createContext({})


function AuthGoogleProvider ({children}){
  const auth = getAuth(app);
  const [user, setUser] = useState(null)

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
        
      }
    return(
      <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user, user, SignOut }}>
        {children}

      </AuthGoogleContext.Provider>
    )

}
export default AuthGoogleProvider;