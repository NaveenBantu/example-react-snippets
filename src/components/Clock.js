import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {

        super(props);

        this.state = { date: new Date() };

    }

    componentDidMount() {

        this.timer = setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );

    }

    componentWillUnmount() {

        clearInterval(this.timer);

    }

    render() {

        return this.state.date.toLocaleTimeString();

    }

}
