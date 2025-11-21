import { Component } from "react";

export class Unmount extends Component {
    constructor() {
        super();
        this.state = { time: 1, timer: "" }
    }
    componentDidMount() {
        this.state.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 3000)
    }
    componentWillUnmount() {
        this.setState({ time: 1, timer: "" })
    }
    render() {
        return <>
            <h1>mounting</h1>
            <p>Count : {this.state.time}</p>
        </>
    }
}