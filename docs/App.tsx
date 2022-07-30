import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './global.scss'
import 'github-markdown-css'

const Readme = () => {
  const Readme = lazy(() => import('../README.md'))
  return (
    <Suspense>
      <Readme />
    </Suspense>
  )
}

const Changelog = () => {
  const Changelog = lazy(() => import('../CHANGELOG.md'))
  return (
    <Suspense>
      <Changelog />
    </Suspense>
  )
}

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
