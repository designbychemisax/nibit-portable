import {Component}      from 'react';

export default class Block extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {name, details, color, textColor, docLink, params, onClose} = this.props;

        return (
            <div className="NibitPortable__BlockHelp">
              <div className="NibitPortable__BlockHelpHeader" style={{backgroundColor:color, color: textColor}}>
                  <div className="NibitPortable__BlockHelpTitle">{name}</div>
                  <div className="NibitPortable__BlockHelpClose"><button onClick={onClose}>x</button></div>
              </div>
              <div className="NibitPortable__BlockHelpContent">
                  {details ? <div className="NibitPortable__BlockHelpDetails">{details}</div> : null}
                  <div className="NibitPortable__BlockHelpParams">
                    <div className="NibitPortable__BlockHelpParamsTitle">Block parameters</div>
                    <ul>
                      {params?
                        params.map((param, i) =>
                          <li key={i}>
                            <div className="NibitPortable__BlockHelpParamLabel">{param.label}</div>
                            {param.description ? <div className="NibitPortable__BlockHelpParamDescription">{param.description}</div> :null}
                          </li>
                        )
                      :null}
                    </ul>
                  </div>
                  {docLink ? <div className="NibitPortable__BlockHelpMoreLinkContainer"><a target="_blank" className="NibitPortable__BlockHelpMoreLink" href={docLink}>Read more ></a></div> : null}
              </div>
            </div>
        );
    }
}
