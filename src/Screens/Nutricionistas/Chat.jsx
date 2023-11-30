import sendIcon from '../../Assets/sendIcon.svg'
import img from "../../Assets/img.svg"
import React, { useState, useEffect, useContext } from 'react'
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore'
import { db } from '../../Services/firebaseConfig'
import { AuthGoogleContext } from '../../Contexts/authGoogle'
import { useLocation, useParams } from 'react-router-dom'
import styles from './Nutricionistas.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ChatBack from '../../Components/ChatBack'

export const Chat = () => {
  const { state } = useLocation()
  const { user: userJson } = useContext(AuthGoogleContext)
  const user = JSON.parse(userJson)


  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [media, setMedia] = useState(null) // Para armazenar a mídia a ser enviada
  const messagesRef = collection(db, 'messages')


  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where('userId', '==', user?.uid ?? '') &&
        where('nutriId', '==', state.id ?? ''),
      orderBy('createdAt')
    )
    const unsuscribe = onSnapshot(queryMessages, snapshot => {
      let messages = []
      snapshot.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })

    return () => unsuscribe()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    if (!newMessage && !media) return

    const messageData = {
      text: newMessage,
      createdAt: serverTimestamp(),
      userId: user?.uid,
      nutriId: state.id,
      ownerId: user?.uid
    }

    if (media) {
      messageData.media = media
    }

    await addDoc(messagesRef, messageData)

    setNewMessage('')
    setMedia(null)
  }

  return (
    <div>
      <Header />
      <ChatBack/>
      <div className={styles.container_chat}>
        <h1>Você está no chat com {state.nome}</h1>
        <div className={styles.messages}>
          {messages.map(message => (
            <div
              key={message.id}
              className={`${
                message.ownerId === user?.uid
                  ? styles.sentMessage
                  : styles.receivedMessage
              }`}
            >
              <div className={styles.chat_texto}>
                <h3 className={styles.testeNome}>
                  {message.ownerId === user?.uid ? (
                    <span className={styles.voce}>Você</span>
                  ) : (
                    <span className={styles.elea}>ele(a)</span>
                  )}
                </h3>
                <h4 className={styles.tamanhos}>
                  {message.text}
                  {message.media && <img src={message.media} alt="Media" />}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className={styles.forms}>
          <input
            className={styles.input_send}
            type="text"
            value={newMessage}
            onChange={event => setNewMessage(event.target.value)}
            placeholder="Digite sua mensagem"
          />
          <div className={styles.sent_img}>
            <label for="arquivo">
              <img src={img} alt="" />
            </label>
            <input
              className={styles.input_img}
              type="file"
              name="arquivo"
              id="arquivo"
              accept="image/*, video/*"
              onChange={event =>
                setMedia(URL.createObjectURL(event.target.files[0]))
              }
            />
          </div>

          <button type="submit" className={styles.botao_chat}>
            <img src={sendIcon} alt="" />
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
