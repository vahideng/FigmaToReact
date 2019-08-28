import React, { PureComponent } from 'react';
import { CAlephFrame } from './components/CAlephFrame';

export class MasterAlephFrame extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CAlephFrame {...this.props} nodeId="1:2" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "1:2") return CAlephFrame1D2;
  return null;
}

class CAlephFrame1D2 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="21:7"
            style={{"marginLeft":144,"width":283,"minWidth":283,"height":null,"marginTop":56,"marginBottom":78,"minHeight":124,"backgroundColor":"rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="21:8"
            style={{"marginLeft":252,"width":73,"minWidth":73,"height":null,"marginTop":-140,"marginBottom":126,"minHeight":14,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">saaeeeddddd</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

