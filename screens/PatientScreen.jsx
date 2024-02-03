import styled from 'styled-components/native';
import { React } from 'react';
import { Button } from 'react-native';

const PatientScreen = ({ route }) => {
  const { patient } = route.params;

  const onPressLearnMore = () => {
    console.log('onPressLearnMore');
  };

  return (
    <Container>
      <PatientFullName>{patient.userInfo.fullName}</PatientFullName>
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
  pading: 0 10px;
`;

const PatientFullName = styled.Text`
  font-weight: 800;
  font-size: 28px;
  line-height: 30px;
`;

const PhoneNumber = styled.Text`
  font-size: 14px;
  color: grey;
`;

PatientScreen.displayName = 'PatientScreen';
export default PatientScreen;
