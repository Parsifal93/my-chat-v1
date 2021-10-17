import React from 'react';

const ChatScreen = (props) => {
    return (
        <article>
            <ul style={{display:"flex", flexDirection:"column-reverse"}}>
                {
                    props.chatMsgs.map((msg)=>{
                        return <li 
                        key={msg.id}>
                            <pre>
                                {""}
                            Text:
                            {msg.text}
                            . Time:
                             {new Date(msg.time).toString()
                             }
                             </pre>
                             </li>
                    })
                }
            </ul>
        </article>
    );
}

export default ChatScreen;
