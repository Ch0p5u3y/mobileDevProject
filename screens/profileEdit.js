import { View, Text, Alert, TextInput } from 'react-native';
import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

class ProfileEdit extends Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			firstname: '',
			lastname: '',
			password: '',
			confirmedPassword: '',
			token: '',
			id: '',
			isLoading: true,
		}
	}

	getAuthDetails = async () => {
		try{
			const userID = await AsyncStorage.getItem('id');
			const authToken = await AsyncStorage.getItem('@session_token');
			this.setState({
				id: userID,
				token: authToken
			});
		}
		catch(error){
			console.log("Error: " + error);
			Alert.alert("Error retrieving authentication details!");
		}
	}

	updateDetails(id){
		const data = {
			email: this.state.email,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			password: this.state.password

		}
		
		const patchData = JSON.stringify(data);

		if(this.state.password != this.state.passwordConfirm){
			Alert.alert("Password mismatch! Please make sure you confirm your password correctly!");
		}else{
			return fetch("http://localhost:3333/api/1.0.0/user/" + id.toString(), {
				method: 'PATCH',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'X-Authorization': this.state.token
				},
				body: patchData
			})
			.then((response) => {
				if(response.status != 200){
					throw("Response error: " + response.status);
				}
				return Alert.alert("Update complete!")
			}).catch((error) => {
				console.log(error);
			});
		}
	}
	
	componentDidMount(){
		this.getAuthDetails()
	}

	componentWilUnmount(){
		this.unsubscrive();
	}

	render(){
		const { isLoading, firstname, lastname, password, confirmedPassword } = this.state;
		if (this.state.isLoading){
			return(
				<View
					style={{
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text>Loading...</Text>
				</View>
			);
		}else{
			return(
				<View>
					<TextInput style={styles.TextInput} type='text' placeholder='email' onChangeText={(email) => this.setState({email})}></TextInput>
					<TextInput style={styles.TextInput} type='text' placeholder='first name' onChange={(firstname) => this.setState({firstname})}></TextInput>
					<TextInput style={styles.TextInput} type='text' placeholder='last name' onChange={(lastname) => this.setState({lastname})}></TextInput>
					<TextInput style={styles.TextInput} type='password' placeholder='password' onChange={(password) => this.setState({password})}></TextInput>
					<TextInput style={styles.TextInput} type='password' placeholder='confirm password' onChange={(confirmedPassword) => this.setState({confirmedPassword})}></TextInput>
					<TouchableOpacity 
					style={styles.Button}
					title = "Update"
					onPress = {()=>this.updateDetails(this.state.id)}><Text style={styles.ButtonText}>update details</Text></TouchableOpacity>
				</View>
			);
		}
	}
}

export default ProfileEdit;
