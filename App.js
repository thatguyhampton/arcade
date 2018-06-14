import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './src/homeScreen';
import { SnakeScreen } from './src/snakeScreen';
import { TetrisScreen } from './src/tetrisScreen';
import { MontactScreen } from './src/montactScreen';
import { TriangleScreen } from './src/triangleScreen';

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Snake: { screen: SnakeScreen },
  Tetris: { screen: TetrisScreen },
  Montact: { screen: MontactScreen },
  Triangle: { screen: TriangleScreen }
});
