import React, { Component } from 'react';
import { Footer as RBXFooter, Container, Hero, Content } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

class Footer extends Component {
    render() {
        return (
            <div>
            &nbsp;
                <Hero className="is-medium">
                    <Hero.Footer>
                        <RBXFooter>
                            <Container>
                                <Content className="has-text-left" style={{ textAlign: 'left' }}>
                                    <p className="has-text-left">
                                        Copyright <i className="fa fa-copyright" alt="©" aria-hidden="true"></i> 2020, Orchestra FM. Source Code is licensed under <a href="https://opensource.org/licenses/AGPL-3.0.php">GNU Affero General Public License 3</a>.
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
