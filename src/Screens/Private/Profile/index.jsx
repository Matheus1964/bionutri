import { useContext } from "react";
import { AuthGoogleContext } from "../../../Contexts/authGoogle";

function Profile(){
  const { user: userJson } = useContext(AuthGoogleContext);
  const user = JSON.parse(userJson);
  return(
    <div>
      <h1>{user?.displayName}</h1>
      <h1>{user?.photoURL}</h1>
    <p>a</p>
    </div>
    

  )
  
}
export default Profile;