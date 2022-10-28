// import Day1t2 from "./task2/Day1t2";
import Todo from "./Todo";
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
      {/* <Day1t2 /> */}
    </>
  );
}

export default App;
