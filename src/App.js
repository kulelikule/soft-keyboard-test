import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPanel: false,
      hideButton: false,
    };

    this.changeShowPanel = this.changeShowPanel.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  changeShowPanel(status) {
    this.setState({
      showPanel: status,
    });
  }

  handleFocus() {
    this.setState({
      hideButton: true,
    });
  }

  handleBlur() {
    this.setState({
      hideButton: false,
    });
  }

  render() {
    const { showPanel, hideButton } = this.state;
    const content = 'This is a Test. Just a Demo! '.repeat(100);
    return (
      <div className="App">
        <div className="content">
          { content }
        </div>
        {
          hideButton ? null : (
            <div className="button-group">
              <div className="button" onClick={() => { this.changeShowPanel(true) }}>同意</div>
              <div className="button">拒绝</div>
            </div>
          )
        }
        {
          showPanel ? (
            <div onFocus={this.handleFocus} onBlur={this.handleBlur}>
              <div className="mask" />
              <div className="remark-panel">
                <textarea cols="30" rows="10" placeholder="请填写备注"></textarea>
                <div className="cancel-button" onClick={() => { this.changeShowPanel(false) }}>取消</div>
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default App;
