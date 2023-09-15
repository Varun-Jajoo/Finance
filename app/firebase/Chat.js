import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import {
  addDoc,
  collection,
  serverTimestamp,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase-config";
import { UserContext } from "../App";

const Chat = (props) => {
  const { room } = props;
  const { userData, setUserData } = useContext(UserContext);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = collection(db, "messages");

  // Load initial messages and set up real-time updates
  useEffect(() => {
    const q = query(messageRef, orderBy("createAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedMessages = [];
      querySnapshot.forEach((doc) => {
        updatedMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(updatedMessages);
    });

    return () => {
      // Unsubscribe from real-time updates when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleSubmit = async () => {
    if (text === "") return;

    await addDoc(messageRef, {
      text: text,
      createAt: serverTimestamp(),
      user: userData.name,
      room,
    });

    setText("");
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.user}: {item.text}
            </Text>
          </View>
        )}
        inverted={true} // Render messages in reverse order
      />
      <TextInput
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Type your message here"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Chat;
