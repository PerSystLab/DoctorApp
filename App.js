import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput,Button ,View } from 'react-native';
import Checkbox from 'expo-checkbox';
import React,{ useState }  from 'react';
export default function App() {
  const [rememberme, set_rememberme] = useState(false);
  return (
    <View style={styles.container}>
      <Text style = {styles.header}>WELCOME OUR APP!</Text>
      <TextInput
        style = {styles.input}
        placeholder= 'Username'
        />
        <TextInput
        style = {styles.input}
        placeholder='Password'
        />
      <StatusBar style="auto" />
      <View style = {styles.buttonContainer}>
        <Button title = 'Login' />
        <View style = {styles.spacer} /> 
        <Button title = 'Sign Up'/>
      </View>
      <View style= {styles.checkboxContainer}>
        <Checkbox style ={styles.checkBox} 
          value = {rememberme}
          onValueChange = {set_rememberme}
        />
        <Text>Remember me</Text>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:40,
  },
  input: {
    height: 50,
    width: 200,
    margin: 10,
    borderWidth: 1,
    padding: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkBox:
  {
    margin:10,
    borderWidth:2,
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    width:"%40",
    margin: 20,
  },
  spacer:{
    margin:20,
  },
});
