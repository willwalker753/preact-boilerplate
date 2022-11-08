import { Component } from 'preact';
import { route } from 'preact-router';
import baseName from '../../baseName';

export default class Redirect extends Component {
    componentWillMount = () => {
        const { to } = this.props;
        // enforce formatting, starts with /, starts with baseName
        let formattedTo = to;
        if (formattedTo.startsWith('/') === false) {
            formattedTo = '/' + formattedTo;
        }
        if (formattedTo.startsWith(baseName) === false) {
            formattedTo = baseName + formattedTo;
        }
        route(formattedTo);
    }

    render = () => {
        return null;
    }
}