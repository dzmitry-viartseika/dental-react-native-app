import styled from 'styled-components/native';
import { React } from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ButtonComponent = ({ title, color = '841584', onPressEventHandler, accessibilityLabel }) => {

  const onPressLearnMore = () => {
    onPressEventHandler();
    console.log('ButtonComponent');
  };

  return (
    <CustomButton
        onPress={onPressLearnMore}
        title={title}
        color={color}
        accessibilityLabel={accessibilityLabel}
      >
        <ButtonText>{title}</ButtonText>
      </CustomButton>
  );
};

const CustomButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: #2a86ff;
    height: 45px;
`

const ButtonText = styled.Text`
    color: white;
    font-weight: 500;
    font-size: 16px;
`

ButtonComponent.displayName = 'ButtonComponent';
ButtonComponent.propTypes = { title: PropTypes.string.isRequired, color: PropTypes.string.isRequired, onPressEventHandler: PropTypes.func, accessibilityLabel: PropTypes.string.isRequired };
export default ButtonComponent;
