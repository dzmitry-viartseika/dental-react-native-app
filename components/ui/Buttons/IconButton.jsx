import styled from 'styled-components/native';
import { React } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ iconName, size = 18, color }) => {
	return (
		<CustomIconButton>
			<Ionicons name={iconName} size={size} color={color} />
		</CustomIconButton>
	);
};

const CustomIconButton = styled.TouchableOpacity`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background: #2a86ff;
	height: 45px;
`;

IconButton.displayName = 'IconButton';
IconButton.propTypes = {
	iconName: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};
export default IconButton;
