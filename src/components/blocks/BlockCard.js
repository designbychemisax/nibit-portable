import {Component}  from 'react';
import is           from 'is_js';

export default class BlockCard extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let {type, params} = this.props;
        let block = {type, params : {}};

        params.forEach(param => {
           if (param.default) {
               block.params[param.name] = param.default;
           } else if (is.array(param.options)) {
               if (is.existy(param.options[0])) {
                   block.params[param.name] = param.options[0].value;
               } else {
                   block.params[param.name] = '';
               }
           } else {
               block.params[param.name] = '';
           }
        });
        this.props.onClick(block);
    }

    render() {
        let {name, description, color, icon} = this.props;
        
        return (
            <div className="NibitPortable__BlockCard" onClick={this.handleClick}>
                <div className="NibitPortable__BlockCardName">
                    {icon ? <span><i className={icon} /></span> : null}
                    {name}
                </div>
                <div className="NibitPortable__BlockCardDescription">
                    {description}
                </div>
            </div>
        );
    }
}
