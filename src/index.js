import {Component}      from 'react'
import Toolbox          from './components/Toolbox';
import BlockSelector    from './components/BlockSelector';
import BlockEditor      from './components/BlockEditor';

class NibitPortable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selector: false
        };
        this.handleAddBlock = this.handleAddBlock.bind(this);
    }

    handleAddBlock(block) {
        let blocks = [...this.props.blocks];
        blocks.push(block);
        this.props.onChange(blocks);
        this.setState({selector: false});
    }

    render() {
        let {config, blocks} = this.props;
        let {selector} = this.state;
        return (
            <div className="NibitPortable__Main">
                <BlockSelector
                    visible={selector}
                    blocks={config}
                    onSelect={this.handleAddBlock}
                    onClose={() => this.setState({selector:false})}
                />
                <Toolbox
                    onAddBlock={() => this.setState({selector:true})}
                />
                <BlockEditor
                    config={config}
                    blocks={blocks}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default NibitPortable;