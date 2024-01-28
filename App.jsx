import styled from 'styled-components/native';
import { PatientList } from './components/Patient';
import { patients } from './constants/patients';
import { React } from 'react';

const App = () => {

  return (
    <Container>
      <ScrollViewLayout>
        <PatientList title="16th of September" items={patients} />
        <PatientList title="17th of September" items={patients} />
      </ScrollViewLayout>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

const ScrollViewLayout = styled.ScrollView`
  marginhorizontal: 20;
`;

export default App;
