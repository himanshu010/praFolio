import React, { Component } from 'react';

const TITLE = [
    'a software engineer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
];

class Title extends Component{
    state = {titleIndex: 0, fadeIn: true};

    componentDidMount(){
        // console.log('Mounted');
        this.timeout = setTimeout(() => {
            this.setState({fadeIn: false});
        }, 2000);
        this.animateTitle();
    }

    componentWillUnmount(){
        // console.log('Unmounted');
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitle = () =>{
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLE.length;
            this.setState({titleIndex, fadeIn: true});
            this.timeout = setTimeout(() => {
                this.setState({fadeIn: false});
            }, 2000);
        }, 4000);

    }

    render(){
        const title = TITLE[this.state.titleIndex];
        return (
            <p className={this.state.fadeIn ? 'title-fade-in': 'title-fade-out'}>I am {title}.</p>
        )
    }
}

export default Title;