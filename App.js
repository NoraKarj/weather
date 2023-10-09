import { StyleSheet, Text, View } from 'react-native';
import Position from './screens/Position';

export default function App() {
  return (
   <Position/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
