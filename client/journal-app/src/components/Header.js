import React, { Component } from 'react';

class Header extends Component {
  
  render() {
    const headerStyle = {
      backgroundColor: 'gray',
      textAlign: 'center',
      opacity: '0.85',
      fontSize: 40,
      color: 'black'
    }; 

    return (
      <header style={headerStyle}>
        <strong>JournalApp</strong>
      </header>
    );
  }
}

export default Header;
