import React from 'react';






let MessageDate = [
    { messages: "jopa" }
]

const ChMes = (props) => {
    return (<div>{props.messages}</div>);
}

let messageElement = MessageDate.map((mes) => <ChMes messages={mes.messages} />);





export class ChatMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: ""

        };
    }
    render() {
        return (
            <div>
                {messageElement}
            </div>
        )
    };
}

