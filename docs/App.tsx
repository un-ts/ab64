import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './global.scss'
import 'github-markdown-css'

const Readme_ = lazy(() => import('../README.md'))

const Readme = () => (
  <Suspense>
    <Readme_ />
  </Suspense>
)

const Changelog_ = lazy(() => import('../CHANGELOG.md'))

const Changelog = () => (
  <Suspense>
    <Changelog_ />
  </Suspense>
)

export const App = () => (
  <Router>
    <Routes>
      <Route
        path="/CHANGELOG.md"
        element={<Changelog />}
      ></Route>
      <Route
        path="/"
        element={<Readme />}
      ></Route>
    </Routes>
  </Router>
)
