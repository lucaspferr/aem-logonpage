import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import { CounterStorage } from './components/micro/CountdownComponent/CounterContext';


// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        <CounterStorage>
          {this.childComponents}
          {this.childPages}
        </CounterStorage>
      </div>
    );
  }
}

export default withModel(App);
