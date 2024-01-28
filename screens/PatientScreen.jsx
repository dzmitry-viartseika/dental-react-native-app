import styled from 'styled-components/native';
import { React } from 'react';
import { Text, Button } from 'react-native';

const PatientScreen = ({ route }) => {
  const { patient } = route.params;

  const onPressLearnMore = () => {
    console.log('onPressLearnMore');
  };

  return (
    <Container>
      <Text>{patient.userInfo.fullName}</Text>
      <PhoneNumber>{patient.userInfo.phoneNumber}</PhoneNumber>
      <Button
        onPress={onPressLearnMore}
        title="Формула зубов"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

const PhoneNumber = styled.Text`
  font-size: 20px;
  color: 'grey';
`;

PatientScreen.displayName = 'PatientScreen';
export default PatientScreen;
