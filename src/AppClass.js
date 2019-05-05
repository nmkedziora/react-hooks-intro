import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isOn: false,
      x: null,
      y: null,
    };
  }

  componentDidMount() {
    document.title = `Current count is: ${this.state.count}`;

    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `Current count is: ${this.state.count}`;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  incrementCount = () => {
    this.setState(prevState => ({
        count: prevState.count + 1,
      }),
    );
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn,
    }));
  };

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY,
    });
  };

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
          }}
          onClick={this.toggleLight}
        >click to toggle
        </div>

        <h2>Mouse position</h2>
        <p>x: {this.state.x}</p>
        <p>y: {this.state.y}</p>
      </>
    );
  }
}

export default App;
