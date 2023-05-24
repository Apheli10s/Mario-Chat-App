import { avatarImages } from "../library/avatar.js"
import "../styles/Message.css"


export function Message (props){
    return (
        <div className="message">
            <img className="messageAvatar" src={avatarImages[props.avatarIndex]} 
                alt={props.author}
                />
            <div className="message-author">{props.author}</div>
            <div className="message-text">{props.text}</div>
        </div>
    );
}