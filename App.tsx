import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Lab1Navigator, Lab2Navigator } from './src/navigator'

const App = () => {
  return (
    <NavigationContainer>
      {/* <Lab1Navigator/> */}
      <Lab2Navigator/>
    </NavigationContainer>
  )
}

export default App