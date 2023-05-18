import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { PrivateRoute } from '@components/PrivetRoute/PrivateRoute';
import { PublicRoute } from '@components/PublicRoute/PublicRoute';
import { AuthPage } from '@pages/Auth';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/auth"
            element={
              <PublicRoute>
                {/* <div>Public</div> */}
                <AuthPage />
                {/* <LoginPage /> */}
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <div>Private</div>
                {/* <Home/> */}
              </PrivateRoute>
            }
          />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;

// import { Home } from '../pages/Home/Home';
// import { LoginPage } from '../pages/LoginPage/LoginPage';
// import { Page404 } from '../pages/Page404/Page404';
// import { Layout } from './Layout/Layuot';
// import { PrivateRoute } from './PrivetRoute/PrivateRoute';
// import { PublicRoute } from './PublicRoute/PublicRoute';

// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route
//             path="/auth"
//             element={
//               <PublicRoute>
//                 <LoginPage />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/auth"
//             element={
//               <PrivateRoute>
//                 <Home />
//               </PrivateRoute>
//             }
//           />
//           <Route path="*" element={<Page404 />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };
