import React, { memo, Suspense } from 'react';
// import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './router';
import { BackTop, Skeleton } from 'antd';
// import store from './store';

export default memo(function App() {
  return (
    <HashRouter>
        <Suspense fallback={<Skeleton active />}>
          {renderRoutes(routes)}
        </Suspense>
    </HashRouter>
  )
});

