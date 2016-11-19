import ReactDOM     from 'react-dom';
import {Component}  from 'react';
import BlockCard    from './blocks/BlockCard';
import Infinite     from 'react-infinite';

export default class BlockSelector extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            scrollerHeight: 200
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.updateSize();
    }

    componentDidUpdate() {
        this.updateSize();
    }

    updateSize() {
        if (this.props.visible) {
            let container = ReactDOM.findDOMNode(this.refs.scroller);
            let scrollerHeight = container.offsetHeight;
            if (this.state.scrollerHeight != scrollerHeight) {
                this.setState({scrollerHeight});
            }
        }
    }

    handleSelect(block) {
        this.props.onSelect(block);
    }
    
    render() {
        let {blocks, visible, onClose, onSelect} = this.props;
        let {scrollerHeight} = this.state;
        if (!visible) return null;
        return (
            <div className="NibitPortable__BlockSelectorOverlay">
                <div className="NibitPortable__BlockSelector">
                    <div className="NibitPortable__BlockSelectorHeader">
                        Select action
                    </div>
                    <div className="NibitPortable__BlockSelectorBlocks" ref="scroller">
                        <Infinite containerHeight={scrollerHeight} elementHeight={49}>
                            {blocks.map((block, key) => <BlockCard key={key} {...block} onClick={this.handleSelect} />)}
                        </Infinite>
                    </div>
                    <div className="NibitPortable__BlockSelectorBottom">
                        <button className="NibitPortable__Button" onClick={onClose}>cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}