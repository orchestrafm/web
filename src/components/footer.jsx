import React, { Component } from 'react';
import { Footer as RBXFooter, Container, Hero, Content } from 'react-bulma-components';
import styled, { css } from 'styled-components'
import 'react-bulma-components/dist/react-bulma-components.min.css';

class Footer extends Component {
    render() {
        const SmallerPadding = styled.div`
        &&&&& {
            padding-top: 1rem!important;
            padding-bottom: 1rem!important;
        }`
        return (
            <div>
            &nbsp;
                <Hero
                className="is-medium"
                >
                    <Hero.Footer>
                        <RBXFooter
                        renderAs={SmallerPadding}
                        >
                            <Container>
                                <Content
                                className="has-text-left" style={{ textAlign: 'left' }}
                                >
                                    <p
                                    className="has-text-left"
                                    >
                                        Copyright&nbsp;
                                        <i
                                        className="fa fa-copyright"
                                        alt="©"
                                        aria-hidden="true"
                                        />
                                        &nbsp;2020, Orchestra FM. Source Code is licensed under
                                        <a
                                        href="https://opensource.org/licenses/AGPL-3.0"
                                        >
                                        &nbsp;GNU Affero General Public License 3
                                        </a>
                                        .
                                    </p>
                                </Content>
                            </Container>
                        </RBXFooter>
                    </Hero.Footer>
                </Hero>
            </div>
        )
    }
}

export default Footer;
