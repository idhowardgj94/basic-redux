import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCount } from './actions';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.example.counter);

  return (
    <div className="App">
      <h1> This is a Redux basic example</h1>
      <p>
        <ul>
          <li>Setup Redux Store</li>
          <li>Setup Action creator (optional)</li>
          <li>Setup Reducer and rootReducer</li>
          <li>Setup react redux</li>
          <li>`useDispatch()` and `useSelect` in Functional component </li>
        </ul>
      </p>
      <h2> current count is: { counter }</h2>
      <p>
        <button onClick={() => { dispatch(addCount(1)); }}>click me to Add 1!</button>
        <button onClick={() => { dispatch(addCount(2)); }}>click me to Add 2!</button>
      </p>
    </div>
  );
}

export default App;
