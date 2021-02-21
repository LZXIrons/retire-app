import React from 'react'
import { Redirect } from 'react-router-dom'
const Entry = React.lazy(() => import('@pages/entry/entry'))
const Index = React.lazy(() => import('@pages/index/index'))
const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/entry" /> },
  { path: '/entry', component: Entry },
  { path: '/index', component: Index },
]

export default routes
