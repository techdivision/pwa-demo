import React, { Component } from 'react';

import classify from '../../classify';
import defaultClasses from './topbar.css';
import { shape, string } from 'prop-types';

class TopBar extends Component {
    static propTypes = {
        classes: shape({
            root: string
        })
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.topbar}>
                TechDivision GmbH - PWA Demo Store
            </div>
        );
    }
}

export default classify(defaultClasses)(TopBar);
