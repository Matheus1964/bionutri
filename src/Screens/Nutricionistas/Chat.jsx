import React, { useState, useEffect, useContext } from "react";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../Services/firebaseConfig";
import { AuthGoogleContext } from "../../Contexts/authGoogle";
import { useParams } from "react-router-dom";
import styles from './Nutricionistas.module.css'

export const Chat = () => {
  const { nutriId } = useParams();
  const { user: userJson } = useContext(AuthGoogleContext);
  const user = JSON.parse(userJson);
 
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("userId", "==", user?.uid ?? "") && where("nutriId", "==", nutriId ?? ""),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      userId: user?.uid,
      nutriId: nutriId,
      ownerId: user?.uid,
    });

    setNewMessage("");
  };

  return (
    <div >
      <div className={styles.messages}>
        {messages.map((message) => (
          <div key={message.id} className={`${message.ownerId === user?.uid && styles.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
