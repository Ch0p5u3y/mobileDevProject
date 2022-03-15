import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
    		flex: 1,
    		backgroundColor: '#ddd',
    		alignItems: 'center',
    		justifyContent: 'center',
  	},
  	Button: {
  		flex:1,
        	justifyContent: 'center',
        	marginBottom: 36,
        	marginTop:  20,
        	marginHorizontal: 84,
        	fontSize: 20,
        	color:'#ffffff',
        	textAlign:'center',
        	padding:20,
        	backgroundColor: '#202646',
        	borderRadius:5
  	},
	ButtonText: {
		alignItems: 'center',
        	justifyContent: 'center',
        	fontSize:20,
        	textAlign: 'center',
        	color:'#ffffff',
	},
	TextInput: {
		textAlign: 'center',
        	height: 50,
        	borderWidth: 2,
        	borderColor:'#202646',
        	borderRadius: 20,
        	backgroundColor: '#ffffff',
        	marginHorizontal: 40,
        	marginTop:20,
	},
});
