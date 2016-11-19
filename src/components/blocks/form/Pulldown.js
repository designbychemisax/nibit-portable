import {Component}  from 'react';

export default class Pulldown extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(evt) {
        this.props.onChange(evt.target.value);
    }

    render() {
        return (
            <div className="NibitPortable__PulldownBlockForm">
                <select
                    className="NibitPortable__PulldownBlockFormSelect"
                    value={this.props.value}
                    onChange={this.handleChange}
                    style={{
                        ...this.props.style,
                        borderColor: this.props.style.color
                    }}
                >
                    {this.props.options.map(({value, label}, key) =>
                        <option key={key} value={value}>{label}</option>
                    )}
                </select>
            </div>
        );
    }
}