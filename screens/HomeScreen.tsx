import { StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen!</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 16,
    fontSize: 20,
  },
});

export default HomeScreen;

// #c8d69b Tea Green
// #f6e6a5 Vanilla
// #3971b8 Celtic Blue 
// #fbfcee Ivory
// #343b1b Drab Dark Brown
