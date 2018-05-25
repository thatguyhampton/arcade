import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './src/homeScreen';
import { SnakeScreen } from './src/snakeScreen';

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Snake: { screen: SnakeScreen },
});
