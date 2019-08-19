import React from 'react'
import { NavLink } from 'react-router-dom'


let MemberDate = [
    { username: "Jusus", id: 1 },
    { username: "Petr", id: 2 },
    { username: "Judas", id: 3 }
]

const ChatMember = (props) => {
    return (
        <div>
        <NavLink className="btn_chat" to={"/chat/" + props.id}>{props.username}
        </NavLink>
        </div>
    );
}

let memberElement = MemberDate.map((mem) => <ChatMember username={mem.username} id={mem.id} />);


export class ChatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: ""
            
        };
        
    }

    
    render() {
        return (
            <div>
                {memberElement}
            </div>
        )
    };
}

