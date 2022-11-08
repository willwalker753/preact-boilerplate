import { Component } from 'preact';
import { route } from 'preact-router';

export default class Redirect extends Component {
    componentWillMount = () => {
        const { to } = this.props;
        route(to, true);
    }

    render = () => {
        return null;
    }
}