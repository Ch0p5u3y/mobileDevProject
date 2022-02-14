/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Hello World!</Text>
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
});*/

/*import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component{
	render(){
		return(
			<View>
			  <SayHello name="Ash" />
			</View>
		);
	}
}

export default HelloWorldApp

class SayHello extends Component {
	render(){
		return(
			<View>
			  <Text>Hello {this.props.name}</Text>
			</View>
		)
	};
}*/

/*import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const Blink = (props) => {
	const [isShowingText, setIsShowingText] = useState(true);

	useEffect(() => {
		const toggle = setInterval(() => {
			setIsShowingText(!isShowingText);
		}, 1000);
		
		return () => clearInterval(toggle);

	})

	if (!isShowingText) {
		return null;
	}

	return <Text>{props.text}</Text>;
}

const BlinkApp = () => {
	return (
		<View style={{marginTop: 50}}>
			<Blink text='I love to blink' />
			<Blink text='blah blah blah' />
			<Blink text='amogus amogus amogus amogus' />
			<Blink text='very very very very tired' />
		</View>
	);
}

export default BlinkApp;*/

/*
 * Exercise 6 Lab 2
 * need a text input box on top of page
 * button next to text input called "Add"
 * when user clicks Add contents of text input should be added to the state
 * each input item be listed under text input box and Add button
 * each list should use same custom built component
 * next to each list item should be a button called 'Done'
 * when user clicks Done the item should be removed from the list
 */
import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

const HelloWorldApp = () => {
  const [text, onChangeText] = React.useState("Useless Text")

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

      <Text>Hello, world!</Text>
      <TextInput
	style={styles.input}
	
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	justifyContent: "center",
	alignItems: "center"
	}
});

export default HelloWorldApp;
