import React from 'react'
import Parent from './components/memo/parent'
import { UseMemoExample } from './usememo/useMemoExample'

const App = () => {
  return (
    <div>
      <h4>App</h4>
      <Parent/>
      <UseMemoExample/>
    </div>
  )
}

export default App
