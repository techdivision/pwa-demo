import React, { Component } from 'react';

import classify from '../../classify';
import defaultClasses from './legalLinks.css';
import { shape, string } from 'prop-types';

class LegalLinks extends Component {
    static propTypes = {
        classes: shape({
            root: string
        })
    };

    render() {
        const { classes } = this.props;
        return (
            <ul className={classes.root}>
                <li>
                    <a href="https://www.techdivision.com/en/information/legal-notice.html">
                        Legal Notice
                    </a>
                </li>
                <li>
                    <a href="https://www.techdivision.com/en/information/privacy-statement-1.html">
                        Privacy Statement
                    </a>
                </li>
            </ul>
        );
    }
}

export default classify(defaultClasses)(LegalLinks);
