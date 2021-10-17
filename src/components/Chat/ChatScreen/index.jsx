import React from 'react';

const ChatScreen = (props) => {
    return (
        <article>
            <ul style={{display:"flex", flexDirection:"column-reverse"}}>
                {
                    props.chatMsgs.map((msg)=>{
                        return <li>{msg}</li>
                    })
                }
            </ul>
        </article>
    );
}

export default ChatScreen;
