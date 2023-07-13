import React from "react";

class ContadorClassComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            countValue: 0
        };
        this.countClick = this.countClick.bind(this);
    }

    countClick() {
        this.setState({
            countValue: this.state.countValue + 1
        });
    }

    render() {
        return <button onClick={this.countClick}>Contador: {this.state.countValue}</button>
    }
}

export default ContadorClassComponent;
