import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        let i = 0;
        console.log(`${i}-props in ErrorBoundry is: ${props}`)
        console.log(`${i}-this is: ${this}`)
        i++;
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. There is something wrong try again</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;