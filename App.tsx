import { Text, View } from "react-native"
import Home from "./src/screens/Home";
import { Provider } from 'react-redux';
import { store } from "./src/store/store";
import Demo from "./src/screens/Demo";

const  App = () => {
  return(
    <Provider store={store}>
        <Home/>
    </Provider>
  )
}

export default App;