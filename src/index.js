import {Component}      from 'react';
import NibitPortable    from './nibit';

import config from './utils/blocks';

export default class NibitDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blocks : [
                {
                    action : "send_message",
                    params : {
                        to : '@campana',
                        message: '%bodyと言いましたよ',
                        delay: '300'
                    }
                },
                {
                    action: 'update_db',
                    params: {}
                },
                {
                    action : "update_status",
                    params : {
                        slack_id : 'UFB008A2',
                        comment: '忙しい',
                        status: 'away'
                    }
                },
                {
                    action : "update_pickupon",
                    params : {
                        status: 'working',
                        comment: 'こんにちは！'
                    }
                },
                {
                    action : "set_sensor",
                    params : {
                        name : 'toilet',
                        value : 'false'
                    }
                },
                {
                    action : "send_attachment",
                    params : {
                        file : "4dmc98ee",
                        filename: "door.png",
                        title: '入り口',
                        initial_comment: '誰かいる',
                        channel: 'random'
                    }
                }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(blocks) {
        let _blocks = blocks.map(({type, params}) => {
            return {params, action:type};
        });
        this.setState({blocks:_blocks});
    }

    render() {
        return (
            <NibitPortable
                config={config}
                blocks={this.state.blocks.map(({action, params}) => {
                    return {params, type: action};
                })}
                onChange={this.handleChange}
            />
        );
    }

}

if (window) {
    window.NibitDemo = NibitDemo;
}