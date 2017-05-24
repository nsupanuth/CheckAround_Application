import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
	let btnType = (props.type == 'danger') ? '#c0392b': '#3498db';
	let btnTypeStyle = { backgroundColor: btnType };
	return (
		<TouchableOpacity onPress={props.onPress} style={[styles.button, btnTypeStyle]}>
			<Text style={{textAlign: 'center', color: '#ffffff'}}>
				{props.children}
			</Text>
		</TouchableOpacity>
	)
}

const styles = {
	button: {
		backgroundColor: '#3498db',
		padding: 10,
		
	}
}

export { Button };