import { useContext } from "react";
import { AuthGoogleContext } from "../../../Contexts/authGoogle";
import TexteContext from "../../../Contexts/texteContext";


function Profile(){
  const testeContextValue = useContext(TexteContext);
  const { user: userJson } = useContext(AuthGoogleContext);
  const user = JSON.parse(userJson);
  return(
    <div>
      <h1>{user?.displayName}</h1>
      <h1>{user?.photoURL}</h1>
      <p>{testeContextValue}</p>
    </div>
    

  )
  
}
export default Profile;