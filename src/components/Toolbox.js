import {Component}  from 'react';

export default class Toolbox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          blockTooltipActive : false  
        };
    }
    
    render() {
        let {maxBlocks, count} = this.props;
        let add = typeof maxBlocks == 'number' ? count < maxBlocks : true;

        return (
            <div className="NibitPortable__ToolBox">
                <a className="NibitPortable__PoweredLogo" href="http://nibit.chemisax.com" target="_blank"></a>
                <ul className="NibitPortable__ToolBoxButtons">
                    {add ?
                        <li id="addBlock">
                            <button className="NibitPortable__ToolBoxButton--add" onClick={this.props.onAddBlock}/>
                        </li>
                    :null}
                </ul>
            </div>
        );
    }
}