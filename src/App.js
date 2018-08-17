import React, { Component } from 'react';
import Input from './components/Input';
import Select from './components/Select';

import './App.css';

class App extends Component {
  render() {
    const selectOptions = [
      {
        value: 1,
        name: 'One'
      },
      {
        value: 2,
        name: 'Two'
      }
    ];

    return (
      <div className="App">
        <div className="inputs-grid">
          <Input name="test" label="Placeholder" />
          <Input name="test2" label="Placeholder" />
          <Input name="test3" label="Placeholder" />
        </div>
        <div className="inputs-grid">
          <Input name="test4" label="Placeholder" />
          <Input name="test5" label="Placeholder" />
          <Select name="test6" options={selectOptions} />
        </div>
      </div>
    );
  }
}

export default App;
