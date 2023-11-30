import styles from './chatBack.module.css'
import vector from '../../Assets/Vector.svg'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../Contexts/authGoogle'
import { Link } from 'react-router-dom'

function ChatBack() {
  const { user: userJson } = useContext(AuthGoogleContext)
  const user = JSON.parse(userJson)
  return (
    <div className={styles.container}>
      <Link to="/Nutri">
        <img src={vector} alt="" />
      </Link>
      <img class={styles.userIcon} src={user?.photoURL} />
      <h1>Bem-Vindo(a) {user?.displayName}</h1>
    </div>
  )
}
export default ChatBack
