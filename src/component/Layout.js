import React, { Component } from 'react';

class Layout extends Component {

  render() {
    return (
      <div className="Layout-content">
        {this.props.sidebar}
        {this.props.children}
      </div>
    );
  }
}

export default Layout;