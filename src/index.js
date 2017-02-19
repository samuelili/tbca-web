import React from 'react';
import ReactDOM from 'react-dom';
import Intro, {AnimateText} from './components/Intro';
import Container from './components/Container';
import Button from './components/Button';
import {Line, Space} from './components/Misc';
import './css/typography.css';

ReactDOM.render(
    <div id="root">
        <Intro>
            <h3>We are</h3>
            <AnimateText text="tbca" interval="376"/>
            <p>Utilizing blockchain technologies to change the world.</p>
        </Intro>
        <Container bgColor='bg-primary' width="480px">
            <div>
                <h1>About Us</h1>
                <Line shade="light"/>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus id
                nunc porta ornare.
                Duis et pulvinar ante. Aenean in tortor vel diam vehicula lacinia eget malesuada diam.
                Phasellus blandit at sem vitae consectetur.
            </div>
            <Space space="20px"/>
            <div className="watch-animate">
                <Button size="xl" animate="fade-bottom">Learn More</Button>
            </div>
            <Space space="40px"/>
        </Container>
        <Container width="960px">Hey!</Container>
    </div>,
    document.querySelector('#app')
);