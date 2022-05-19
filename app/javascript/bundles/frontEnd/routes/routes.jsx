import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as paths from '../constants/paths'
import Main from '../pages/Main'
import Demo from '../pages/Demo'

export default (
  <Routes>
    <Route path={paths.HOME} elements={Main} />
    <Route path={paths.DEMO} element={Demo} />
  </Routes>
)