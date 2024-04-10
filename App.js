import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const AppNavigator = createStackNavigator(
  {
     MenúPrincipal: HomeScreen,
     IniciarSesión: LoginScreen,
     CrearCuenta: CreateAccountScreen
  },
  {
     initialRouteName: 'CrearCuenta'
  }
);

export default createAppContainer(AppNavigator);
