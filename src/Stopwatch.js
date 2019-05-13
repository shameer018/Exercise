import React, { Component } from 'react';
import App from './App'
class Stopwatch extends Component {
    state = {
        status: false,
        runningTime: 0
    };

     handleClick = () => {
        const { status } = this.state;
        if (status)
            this.stopTimer();
        else
            this.runTimer();
        return this.setState({ status: !this.state.status });
    }

    stopTimer = () => {
        clearInterval(this.timer);
    }

    runTimer = () => {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
            this.setState({ runningTime: Date.now() - startTime });
        });
    }

    handleReset = () => {
        clearInterval(this.timer);
        this.setState({ runningTime: 0, status: false });
    };

    render() {
        const { status, runningTime } = this.state;
        return (
            <div>
                <p>{runningTime}ms</p>
                <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
export default Stopwatch;
