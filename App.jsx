import styled from 'styled-components/native';
import { patients } from './constants/patients';
import PatientItem from './components/Patient/PatientItem';
import SectionTitle from './components/Patient/SectionTitle';
import { Ionicons } from '@expo/vector-icons';
import { React } from 'react';
import { SectionList, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <Container>
      <SafeAreaView>
        <SectionList
                  sections={patients}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => <MainSection><PatientItem item={item} /></MainSection> }
                  renderSectionHeader={({ section: { title } }) => (
                    <MainSection><SectionTitle title={title} /></MainSection>
                  )}
        />
      </SafeAreaView>
      <PlusButton>
        <Ionicons name="add-outline" size={18} color="white" />
      </PlusButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

const MainSection = styled.View`
    padding: 10px;
`

const PlusButton = styled.TouchableOpacity`
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #2A86FF;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 25px;
    right: 15px;
`

App.displayName = 'App';
export default App;
