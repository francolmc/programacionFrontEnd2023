import React from 'react';

class SaludoClassComponent extends React.Component {
    render() {
        return <h1>Hola 😃 {this.props.username} como estas?</h1>;
    }
}

export default SaludoClassComponent;
