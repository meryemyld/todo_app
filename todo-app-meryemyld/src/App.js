import {CounterSayac, Buttons} from "./components"
import {Provider} from "react-redux"
import store from "./store/index"

function App() {
  return (
    <div className="container">
    <Provider store={store}>
      
      <CounterSayac/>
      <Buttons/>

    </Provider>
    </div>
  );
}

export default App;
