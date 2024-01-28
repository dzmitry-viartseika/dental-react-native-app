import styled from 'styled-components/native';
import { React } from 'react';
import { Text } from 'react-native';

const PatientScreen = ({ route }) => {
  const { patient } = route.params;

  return (
    <Container>
        <Text>{patient.userInfo.fullName}</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

PatientScreen.displayName = 'PatientScreen';
export default PatientScreen;
