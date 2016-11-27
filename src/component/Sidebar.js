import React, { Component } from 'react';
import windowHoc from '../hoc/windowWidth';

class Sidebar extends Component {

  constructor(args) {
    super(args);
    this.state = {
      isSidebarActive: false
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      if (e.target.contains(this.refs.sidebar)) {
        this.setState({
          isSidebarActive: false
        });
      }
    });
  }

  burgerToggle() {
    this.setState({
      isSidebarActive: !this.state.isSidebarActive
    });
  }

  isSidebarActive() {
    const { isSidebarActive } = this.state;
    const { windowWidth } = this.props;

    return windowWidth > 768 || isSidebarActive;
  }

  render() {
    return (
      <div ref="sidebar">
        <div className={this.isSidebarActive() ? 'hidden' : 'burger' }>
          <i onClick={this.burgerToggle.bind(this)}>burger</i>
        </div>
        <div
          className={this.isSidebarActive() ? 'visible-content aside' : 'hidden' }>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda esse nam nihil quos velit
          voluptatum! Aliquam aperiam architecto aut cumque doloribus officiis perferendis quia rerum, sit
          vel?
          Maiores, nesciunt, soluta?
        </div>
      </div>
    );
  }
}
export default windowHoc(Sidebar);