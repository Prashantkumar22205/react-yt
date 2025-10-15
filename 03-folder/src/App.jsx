import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Prince' age={20} img='https://plus.unsplash.com/premium_photo-1738980401922-70995a1b6ade?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1267' />
      <Card user='Prashant' age={20}  img='https://plus.unsplash.com/premium_photo-1738590561029-33c9c5d64af2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1267'/>
    </div>
  )
}

export default App
