import styled from 'styled-components/native';
import { React } from 'react';
import { Button, View, Text } from 'react-native';
import ButtonComponent from '../components/ui/Buttons/ButtonComponent'
import IconButton from '../components/ui/Buttons/IconButton'

const PatientScreen = ({ route }) => {
  const { patient } = route.params;

  const onPressLearnMore = () => {
    console.log('onPressLearnMore');
  };

  return (
    <Container>
      <PatientFullName>{patient.userInfo.fullName}</PatientFullName>
      <PhoneNumber>{patient.userInfo.phoneNumber}</PhoneNumber>
      <ActionWrapper>
        <Test>
            <ButtonComponent onPressEventHandler={onPressLearnMore} title="Формула зубов" color="#4294ff" accessibilityLabel="Learn more about this purple button"/>
        </Test>
        <Test2>
        <IconButton iconName="call" size={18} color="white" />
        </Test2>
      </ActionWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  padding: 0 20px;
`;

const ActionWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Test = styled.View`
    display: flex;
    width: 85%;
    margin-right: 10px;
`;

const Test2 = styled.View`
    display: flex;
    width: 15%;
`;

const PatientFullName = styled.Text`
  font-weight: 800;
  font-size: 28px;
  line-height: 30px;
  margin-bottom: 10px;
`;

const PhoneNumber = styled.Text`
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
`;

PatientScreen.displayName = 'PatientScreen';
export default PatientScreen;
