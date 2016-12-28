import {Component}  from 'react';
import Block        from './blocks/Block';
import BlockHelp    from './blocks/BlockHelp';
import Dragula      from 'react-dragula';
import ReactDOM     from 'react-dom';
import ToolTip      from 'react-portal-tooltip'


export default class BlockEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
          help : false,
          tooltip: '#nibitBlockEditor',
          helpContents: {}
        };
        this.renderBlocks = this.renderBlocks.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setDrag = this.setDrag.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.showHelp = this.showHelp.bind(this);
    }

    componentDidMount() {
        this.setDrag();
    }

    showHelp(index) {
        let {blocks, config} = this.props;
        let type = blocks[index].type;
        let block = config.find(b => b.type == type);
        let parent = `#nibitBlock-${index}-help`;

        if (parent == this.state.tooltip && this.state.help) {
          this.hideHelp();
        } else {
          this.setState({help: true, tooltip: parent, helpContents: block});
        }
    }

    hideHelp() {
        this.setState({help: false});
    }

    setDrag() {
        let container = ReactDOM.findDOMNode(this.refs.dragula);
        let mirror = ReactDOM.findDOMNode(this.refs.editor);

        this.drake = Dragula([container], {
            mirrorContainer: mirror,
            moves: (el, source, handle, sibling) => handle.className == 'NibitPortable__BlockTitle',
        });

        this.drake.on('drop', (el, target, source, sibling) => {
            this.drake.cancel(true);
            this.handleDragEnd(el.getAttribute('data-index'), sibling ? sibling.getAttribute('data-index') : null);
        });
    }

    handleDragEnd(element, sibling) {
        let blocks = [...this.props.blocks];
        let block = blocks.splice(element, 1)[0];
        if (sibling == null) {
            blocks.push(block);
        } else {
            blocks.splice(element < sibling ? sibling-1 : sibling, 0, block);
        }
        this.props.onChange(blocks);
    }

    handleDelete(index) {
        let blocks = [...this.props.blocks];
        blocks.splice(index, 1);
        this.props.onChange(blocks);
    }

    handleChange({index, name, value}) {
        let blocks = [...this.props.blocks];
        let block = blocks[index];
        if (block) {
            block.params[name] = value;
            this.props.onChange(blocks);
        }
    }

    renderBlocks() {
        let {blocks, config} = this.props;
        return blocks.map((block,index) => {
            let blockProps = {
                key : `${block.type}_${index}`,
                ...block,
                index,
                config: config.find(b => b.type == block.type) || {},
                onChange: this.handleChange,
                onDelete: this.handleDelete,
                onHelp: this.showHelp
            };
            return <Block {...blockProps} />
        });
    }

    render() {
        return (
            <div className="NibitPortable__Editor" id="nibitBlockEditor" ref="editor">
                <div style={{width:'100%', height: '100%'}} ref="dragula">
                    {this.renderBlocks()}
                </div>
                <ToolTip active={this.state.help} tooltipTimeout={0} group="help" position="bottom" arrow="center" parent={this.state.tooltip} style={{style:{zIndex:9999}, arrowStyle:{}}}>
                    <BlockHelp {...this.state.helpContents} />
                </ToolTip>
            </div>
        );
    }
}
