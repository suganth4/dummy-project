import './App.css';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import store from './store';
function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Chat />
      </Provider>
    </div>
  );
}

export default App;
