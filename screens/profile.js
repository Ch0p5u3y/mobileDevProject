import React, {Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Profile extends Component {
	constructor(props){
		super(props);

		this.state = {
			photo: null,
			isLoading: true,
			data: []
		}
	}
	
	componentDidMount(){
		this.unsubscribe = this.props.navigation.addListener('focus', () => {
			this.checkLoggedIn();
		});

		this._retrieveProfile();
	}

	componentWillUnmount(){
		this.unsubscibe();
	}
	
	_retrieveProfilePhoto = () => {
		const value = AsyncStorage.getItem('@session_token');
		fetch("http://localhost:3333/api/1.0.0/user/" + id.toString() + "/photo", {
			method: 'get',
			headers: {
				'X-Authorization': value
			}
		}).then((res) => {
			return res.blob();
		})
		.then((resBlob) => {
			let photoData = URL.createObectURL(resBlob);
			this.setState({
				photo: photoData,
				isLoading: false
			});
		})
		.catch((err) => {
			console.log("error", err)
		});
	}

	_retrieveProfile = async () => {
		const value = await AsyncStorage.getItem('@session_token');
		const id = await AsyncStorage.getItem('currentID');
		return fetch("http://localhost:3333/api/1.0.0/user/" + id.toString(), {
			method: 'get',
			headers: {
				'X-Authorization': value
			}	
		})
		.then((response) => {
			if(response.status === 200){
				return response.json()
			} else if(response.status === 401){
				this.props.navigation.navigate("Login");
			} else(
				throw 'Something went wrong');	
		})
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				data: responseJson
			})	
		})
		.catch((error) =>{
			console.log(error);
		})
	}

	checkLoggedIn = async () => {
		const value = await AsyncStorage.getItem('@session_token');
		if(value !== null){
			this.setState({token:value});
		}else{
			this.props.navigation.navigate("Login");
		}
	}

	

	render(){
		const { data, isLoading, photo } = this.state;	
		if (this.state.isLoading){
			return (
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
					<Image 
						source={{
							uri: this.state.photo,
						}}
						style={{
							width: 400,
							height: 400,
							borderWidth: 5
						}}
					/>
					<Text>Name: { data.first_name } { data.last_name }</Text>
					<Text>Email: { data.email }</Text>
					<Text>Friends: { data.friend_count } </Text>
					<Text>Upload/Change Photo</Text>
				</View>
			);
		}
	}
}

export default Profile
