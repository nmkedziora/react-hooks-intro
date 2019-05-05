import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isOn: false
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
        count: prevState.count + 1,
      }),
    );
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render() {
    return (
      <>
        <h1>React with class component</h1>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>Current count is: {this.state.count}</button>

        <h2>Toggle light</h2>
        <div
          style={{
            height: '150px',
            width: '150px',
            background: this.state.isOn ? 'yellowgreen' : 'lightgrey',
          }}
          onClick={this.toggleLight}
        ></div>
      </>
    );
  }
}

export default App;
