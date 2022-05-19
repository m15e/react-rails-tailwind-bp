import React from 'react'
import Main from '../pages/Main'
import Demo from '../pages/Demo'

export default (
  <Routes>
    <Route path={paths.HOME} elements={Main} />
    <Route path={paths.DEMO} element={Demo} />
  </Routes>
)