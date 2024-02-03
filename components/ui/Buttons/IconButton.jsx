import styled from 'styled-components/native';
import { React } from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const IconButton = () => {


  return (
    <CustomIconButton>
<Ionicons name="add-outline" size={18} color="white" />
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
`

IconButton.displayName = 'IconButton';
IconButton.propTypes = { title: PropTypes.string.isRequired, color: PropTypes.string.isRequired, onPressEventHandler: PropTypes.func, accessibilityLabel: PropTypes.string.isRequired };
export default IconButton;
