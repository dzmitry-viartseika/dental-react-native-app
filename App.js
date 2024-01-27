import styled from 'styled-components/native'
import {PatientList} from './components/Patient'
import { patients } from './constants/patients'

const App = () => {
  return (
    <Container>
        <PatientList title="16th of September" items={patients}></PatientList>
        <PatientList title="17th of September" items={patients}></PatientList>
    </Container>
  );
};

const Container = styled.View`
    flex: 1;
    margin-top: 50px;
`

export default App