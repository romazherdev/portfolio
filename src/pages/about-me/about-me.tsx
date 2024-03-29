import React, { Component } from 'react';
import './about-me.scss';
import Boy from '../../shared/components/boy/boy';
import { withRouter } from 'react-router-dom';

class AboutMe extends Component<{ history: any }> {

    componentDidMount(): void {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="rz-about-me rz-page">
                <div className="rz-container rz-page__container">
                    <h1 className="rz-title">Welcome to my website</h1>
                    <div className="rz-info">
                        <div className="rz-info__block rz-boy">
                            <Boy/>
                        </div>
                        <div className="rz-info__block">
                            <div className="rz-faq">
                                <p className="rz-faq__subtitle">My name is</p>
                                <strong className="rz-faq__name">Roman Zherdev</strong>
                                <ul className="rz-faq-list">
                                    <li className="rz-faq-list__item">Who am I?</li>
                                    <li className="rz-faq-list__item">I'm a Senior Software Engineer at <a href="https://epam.com" target="_blank">EPAM</a>.</li>
                                    <li className="rz-faq-list__item">What is my job?</li>
                                    <li className="rz-faq-list__item">Primarily it is Frontend. However I've got some expertise with Node.js</li>
                                    <li className="rz-faq-list__item">How many years of experience do I have?</li>
                                    <li className="rz-faq-list__item">3 years in web development. And a few years with C# .NET</li>
                                    <li className="rz-faq-list__item">What’s the difference between me and other developers?</li>
                                    <li className="rz-faq-list__item">I have a magic cat who helps me to write beautiful code :3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="rz-next" onClick={() => this.goTo('/technologies')}>
                    <span className="rz-next__text">Technologies</span>
                </button>
            </section>
        );
    }

    goTo(path: string): void {
        this.props.history.push(path);
    }
}

export default withRouter<any>(AboutMe);
