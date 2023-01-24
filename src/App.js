import "./App.css";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "./components/Context";
import { useState } from "react";
import Admin from "./components/Admin/Admin";
import store from "./components/Resume/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [context, setContext] = useState(0);
  return (
    <Provider store={store}>
      <Context.Provider value={[context, setContext]}>
      <Router>
        <nav className="bg-gray-200 px-20 mb-2">
          <div className="flex">
            <h1>Nav</h1>
            <ul className="flex items-center justify-center my-auto">
              <a href="/" className="mx-2">Resume</a>
              <a href="/admin">Admin</a>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" exact element={<Resume />} />
          <Route path="/admin" element={<Admin />} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Routes>
      </Router>
      </Context.Provider>
    </Provider>
  );
}

export default App;
