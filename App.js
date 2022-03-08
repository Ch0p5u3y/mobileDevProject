import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/home';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import HomeScreen from './screens/logout';
import Profile from './screens/profile';

const Drawer = createDrawerNavigator();

class App extends Component{
	render(){
		return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={ Home }/>
				<Drawer.Screen name="Login" component={ LoginScreen } />
				<Drawer.Screen name="Profile" component={ Profile } />
				<Drawer.Screen name="Signup" component={ SignupScreen } />	
				<Drawer.Screen name="Logout" component={ HomeScreen } />	
			</Drawer.Navigator>
		</NavigationContainer>
		);
	}
}

export default App;

/*
don't need to worry about geolocation stuff for assignment just networking endpoints, UI, and camera
*/
/*<Drawer.Screen name="" component={ } />*/
