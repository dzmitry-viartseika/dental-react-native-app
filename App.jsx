import styled from 'styled-components/native';
import { patients } from './constants/patients';
import PatientItem from './components/Patient/PatientItem';
import SectionTitle from './components/Patient/SectionTitle';
import { React } from 'react';
import {
  SectionList,
  SafeAreaView,
  Text,
} from 'react-native';

const App = () => {

  return (
    <Container>
      <SafeAreaView>
           <SectionList
              sections={patients}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                       <PatientItem item={item} />
              )}
              renderSectionHeader={({section: {title}}) => (
                <SectionTitle title={title} />
              )}
            />
      </SafeAreaView>
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

const Group = styled.View`
  padding: 20px;
`;

App.displayName = 'App';
export default App;