import styled from 'styled-components/native';
import { React } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ iconName, size = 18, color, background }) => {
    console.log('background', background);
	return (
		<CustomIconButton background={background}>
			<Ionicons name={iconName} size={size} color={color} />
		</CustomIconButton>
	);
};

const CustomIconButton = styled.TouchableOpacity`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background: ${(props) => (props.background ? props.background : '#4294ff')};
	height: 45px;
`;

IconButton.displayName = 'IconButton';
IconButton.propTypes = {
	iconName: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	background: PropTypes.string,
};
export default IconButton;
