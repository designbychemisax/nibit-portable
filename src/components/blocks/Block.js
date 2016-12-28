import {Component}      from 'react';
import Color            from 'color';
import PulldownOther    from './form/PulldownOther';
import Pulldown         from './form/Pulldown';

export default class Block extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.calculateColors(props),
            open : true
        };
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOnHelp = this.handleOnHelp.bind(this);
    }

    handleOnHelp() {
        this.props.onHelp(this.props.index);
    }

    handleToggleForm() {
        this.setState({ open : !this.state.open });
    }

    handleChange(value, name) {
        let {index} = this.props;
        this.props.onChange({index, name, value});
    }

    handleDelete() {
        this.props.onDelete(this.props.index);
    }

    calculateColors(props) {
        let {color, textColor} = props.config;
        let baseColor = color || '#cdd7dc';
        return {
            baseColor : baseColor,
            textColor : textColor || '#4a4a4a',
            darkColor : new Color(baseColor).darken(0.2).hexString(),
            lightColor : new Color(baseColor).lighten(0.2).hexString()
        };
    }

    renderFormInput(field) {
        let {params} = this.props;
        let color = this.state.textColor;
        switch (field.type) {
            case 'text':
                return <input
                    style={{color}}
                    value={params[field.name]}
                    type="text"
                    onChange={evt => this.handleChange(evt.target.value, field.name)}
                />;
            case 'pulldown_other':
                return <PulldownOther
                    style={{color}}
                    options={field.options}
                    value={params[field.name]}
                    onChange={val => this.handleChange(val, field.name)}
                />;
            case 'pulldown':
                return <Pulldown
                    style={{color}}
                    options={field.options}
                    value={params[field.name]}
                    onChange={val => this.handleChange(val, field.name)}
                />;
            default:
                return null;
        }
    }

    renderForm() {
        let {config} = this.props;
        let {darkColor} =  this.state;
        if (config.params) {
            return config.params.map((field, key) => {
                return (
                  <div key={key} className="NibitPortable__BlockSettingsField" style={{
                    borderBottom: `1px solid ${darkColor}`
                  }}>
                      <div className="NibitPortable__BlockSettingsFieldLabel">
                          {field.label}
                      </div>
                      <div className="NibitPortable__BlockSettingsInput">
                          {this.renderFormInput(field)}
                      </div>
                  </div>
                );
            });
        }
        return null;
    }

    render() {
        let {handleToggleForm, renderForm, handleOnHelp} = this;
        let {open, baseColor, textColor, lightColor, darkColor} = this.state;
        let {config, index} = this.props;

        let blockStyle = {
            color : textColor,
            backgroundColor: baseColor,
            borderBottom : `1px solid ${darkColor}`
        };

        let buttonStyle = {
            color : darkColor,
            backgroundColor: lightColor,
            border : `1px solid ${darkColor}`
        };

        return (
            <div className="NibitPortable__Block" data-index={index} style={blockStyle} onClick={this.handleClick}>
                <div className="NibitPortable__BlockTitle">
                    {config.icon ? <span><i className={config.icon} /></span> : null}
                    {config.name || "Unkwnown block"}
                    <ul className="NibitPortable__BlockToolbox">

                        {config.params ?
                            <li>
                                <button style={buttonStyle} id={`nibitBlock-${index}-help`} onClick={handleOnHelp}>?</button>
                            </li>
                        :null}

                        {config.params ?
                            <li>
                                <button style={buttonStyle} onClick={handleToggleForm}>-</button>
                            </li>
                        :null}

                        <li>
                            <button style={buttonStyle} onClick={this.handleDelete}>
                                x
                            </button>
                        </li>
                    </ul>
                </div>
                {open ?
                    <div className="NibitPortable__BlockSettingsForm">
                        {renderForm()}
                    </div>
                :null}
            </div>
        );
    }
}
