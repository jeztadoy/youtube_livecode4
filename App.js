import React from 'react'
import {createStackNavigator, createSwitchNavigator} from 'react-navigation'
import {HomeScreen, DetailScreen, LoginScreen, RegisterScreen, FavoriteScreen} from './screens/Index'
import {Provider} from 'react-redux'
import store from './store'
 
const navigationOptions = {
  headerStyle: {
    backgroundColor: '#ef2f4f',
  }, 
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'italic',
  } 
} 
 
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
}, {
    initialRouteName: 'Login', navigationOptions: navigationOptions
  })

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
  Favorite: FavoriteScreen
}, {
    initialRouteName: 'Home', navigationOptions: navigationOptions
  })

const Navigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
}, {
    initialRouteName: 'Auth'
  })

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)
export default App
