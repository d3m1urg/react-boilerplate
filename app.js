import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({ message: 'Hi!' }, props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign({ message: 'Hi!' }, nextProps));
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }

}

App.propTypes = {
  message: React.PropTypes.string,
};

export default App;
