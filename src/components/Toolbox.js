import {Component}  from 'react';

export default class Toolbox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          blockTooltipActive : false  
        };
    }
    
    render() {
        return (
            <div className="NibitPortable__ToolBox">
                <a className="NibitPortable__PoweredLogo" href="http://nibit.chemisax.com" target="_blank"></a>
                <ul className="NibitPortable__ToolBoxButtons">
                    <li id="addBlock">
                        <button className="NibitPortable__ToolBoxButton--add" onClick={this.props.onAddBlock}/>
                    </li>
                </ul>
            </div>
        );
    }
}