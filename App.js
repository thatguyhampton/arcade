import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './src/homeScreen';
import { SnakeScreen } from './src/snakeScreen';
import { TetrisScreen } from './src/tetrisScreen';

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Snake: { screen: SnakeScreen },
  Tetris: { screen: TetrisScreen }
});
