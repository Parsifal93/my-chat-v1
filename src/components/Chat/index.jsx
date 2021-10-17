import React  from "react";
import ChatForm from "./ChatForm";
import { useState } from "react";
import ChatScreen from "./ChatScreen";


export default function Chat(){
 const [chatMessages, setChatMessagse] = useState([]);

    const onSubmit=(values,formikBag) =>{
        console.log(values);

        setChatMessagse((prevMessages) =>{

            const newMsg = {
                text: values.text,
                id:prevMessages.length,
                time: Date.now(),
            };

            const newMessages = [...prevMessages, newMsg,];
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
