import {Component}  from 'react';

export default class PulldownOther extends Component {

    constructor(props) {
        super(props);
        this.getOptionValue = this.getOptionValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getOptionValue() {
        let {value} = this.props;
        let option = this.props.options.find(o => o.value == value);
        return option ? option.value : '%other%';
    }

    handleChange(evt) {
        let val = evt.target.value;
        this.props.onChange(val == '%other%' ? "" : val);
    }

    render() {
        let isOther = this.getOptionValue() == '%other%';

        return (
            <div className="NibitPortable__PulldownOtherBlockForm">
                <select
                    className="NibitPortable__PulldownOtherBlockFormSelect"
                    value={this.getOptionValue()}
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
                {isOther?
                    <div className="NibitPortable__PulldownOtherBlockFormOther">
                        <div className="NibitPortable__PulldownOtherBlockFormOtherLabel">Value</div>
                        <input style={this.props.style} value={this.props.value} onChange={this.handleChange} type="text" />
                    </div>
                :null}
            </div>
        );
    }
}