import './App.scss';
import Plan from './components/plan/Plan'

import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="plan">
        <Plan/>
      </div>
    </Provider>
  );
}

export default App;
