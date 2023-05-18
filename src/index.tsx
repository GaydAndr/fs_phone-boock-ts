import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import reportWebVitals from './reportWebVitals';
// import { App } from './components/App';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Provider store={store}> */}
//     {/* <PersistGate loading={null} persistor={persistor}> */}
  

//     {/* </PersistGate> */}
//     {/* </Provider> */}
//   </React.StrictMode>
// );

// // reportWebVitals();
