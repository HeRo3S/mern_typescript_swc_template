import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './utils/routes';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
