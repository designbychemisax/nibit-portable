import {Component}  from 'react';
import Block        from './blocks/Block';
import Dragula      from 'react-dragula';
import ReactDOM     from 'react-dom';

export default class BlockEditor extends Component {
    
    constructor(props) {
        super(props);
        this.renderBlocks = this.renderBlocks.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setDrag = this.setDrag.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.setDrag();
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
                onDelete: this.handleDelete
            };
            return <Block {...blockProps} />
        });    
    }
    
    render() {
        return (
            <div className="NibitPortable__Editor" ref="editor">
                <div style={{width:'100%', height: '100%'}} ref="dragula">
                    {this.renderBlocks()}
                </div>
            </div>
        );
    }
}