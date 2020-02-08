import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import ScrollReveal from 'scrollreveal';
import Axios from "axios";
import { addToast } from '../components/toast'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulmaswatch/cyborg/bulmaswatch.min.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {email: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value})
    }

    async handleSubmit(event) {
        return await Axios.post("http://localhost:1000/api/v0/invite/join", {
            email: this.state.email
        }).catch((e) => {
            addToast("The server could not be reached.", {
                appearance: 'error',
                autoDismiss: true,
                pauseOnHover: false,
            });
        });
    }

    render() {
        const DiscordButton = styled.button`
            background-color: #7289da;

            ${props =>
            props.primary &&
            css`
                background: #7289da;
            `};
        `
        return (
            <container>
                <div> &nbsp; </div>
                <section className="hero is-danger">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title logo">
                                <img src="logo_verylarge_cropped.webp" alt="Orchestra FM" width='750' height='540'/>
                            </h1>
                            <h2 className="subtitle slogan">
                                A free, open source platform for all your favorite rhythm game types.
                            </h2>

                            <div className="columns">
                                <div className="column is-one-third">
                                    <a href="https://github.com/OrchestraFM">
                                        <button className="button is-large">
                                            <span className="icon is-medium">
                                                <i className="fab fa-github"></i>
                                            </span>
                                            <span>View on GitHub</span>
                                        </button>
                                    </a>
                                </div>

                                <div className="column is-one-third">
                                    <a href="https://discord.gg/EsZaJVN">
                                        <DiscordButton className="button is-large">
                                            <span className="icon is-medium">
                                                <i className="fab fa-discord"></i>
                                            </span>
                                            <span>Visit Us on Discord</span>
                                        </DiscordButton>
                                    </a>
                                </div>

                                <div className="column is-one-third">
                                    <a href="https://twitter.com/OrchestraFM">
                                        <button className="button is-large is-info">
                                            <span className="icon is-medium">
                                                <i className="fab fa-twitter"></i>
                                            </span>
                                            <span>Follow Us on Twitter</span>
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column is-half is-offset-one-quarter">
                                    <div className="field has-addons">

                                            <div className="control">
                                                <input className="input is-large" type="email" placeholder="example@example.com" value={this.state.email} onChange={this.handleChange}/>
                                            </div>
                                            <div className="control">
                                                <button type="submit" className="button is-success is-large" onClick={this.handleSubmit}>
                                                Request Early Access
                                                </button>
                                            </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                <div> &nbsp; </div>

                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <h3 className="title has-text-centered has-text-danger">
                            Welcome to Orchestra FM
                        </h3>
                        <p className="content has-text-centered is-medium">
                            The only rhythm game platform built from the ground up with creators in mind. A place where everyone is welcomed, newcomers or experienced players alike. Anyone and everyone should feel at home.
                        </p>
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <h3 className="title has-text-centered has-text-danger">
                            For The Players
                        </h3>
                        <p className="content has-text-centered is-medium">
                            All playstyles have a home here, we don't want to leave any one game style or type behind. At the beginning, we will have a heavy focus on the "Effective" game mode type popularized by Sound Voltex. You'll be able to play this rhythm game type by using Unnamed SDVX Clone, and hopefully in the future NeuroSonic. Along the way, we will include other game types, and other various ways to play.
                        </p>
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <h3 className="title has-text-centered has-text-danger">
                            For The Designers
                        </h3>
                        <p className="content has-text-centered is-medium">
                        If your the creative type, then you'll probably be interested in working on the platform, or in the community. Whether you are a musician, writing music for the masses, a charter, designing charts for players to enjoy, or a programmer, wanting to help improve the platform by providing new features or bugfixes, there is something for everyone to create.
                        </p>
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <h3 className="title has-text-centered has-text-danger">
                            Stay Tuned!
                        </h3>
                        <p className="content has-text-centered is-medium">
                        We are currently in pre-alpha stages and are looking to partner with charters, musicians, and programmers of all-kinds. If you think you have something valuable to provide to the team, or just looking to contribute in general, get in contact with the current development team on Discord, and we'll see if we can fit you in!
                        </p>
                    </div>
                </div>

            </container>
        )
    }

    componentDidMount() {
        ScrollReveal().reveal('.logo', { delay: 1500, duration: 1000 });
        ScrollReveal().reveal('.slogan', { delay: 2000, duration: 1000 });
    }
}

export default Home;
