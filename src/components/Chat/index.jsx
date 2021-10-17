import React  from "react";
import ChatForm from "./ChatForm";
import { useState } from "react";
import ChatScreen from "./ChatScreen";


export default function Chat(){
 const [chatMessages, setChatMessagse] = useState([]);

    const onSubmit=(values,formikBag) =>{
        console.log(values);

        setChatMessagse((prevMessages) =>{
            const newMessages = [...prevMessages,values.text,];
            return newMessages;
        })
        formikBag.resetForm()
    }
    return(
        <div>
            <ChatForm onSubmit={onSubmit} />
            <ChatScreen chatMsgs={chatMessages} />
        </div>
    )

}
