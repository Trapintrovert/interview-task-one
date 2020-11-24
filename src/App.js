import './App.css';
import Plan from './components/plan/Plan'

import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Plan/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
