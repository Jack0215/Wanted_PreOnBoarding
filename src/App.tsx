import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/List";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
