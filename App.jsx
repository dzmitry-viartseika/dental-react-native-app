import styled from 'styled-components/native';
import { React } from 'react';
import { PatientScreen, HomeScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
                                                                     title: 'Пациенты',
                                                                     headerTintColor: '#2A86FF',
                                                                     headerTitleStyle: {
                                                                       fontWeight: 'bold',
                                                                     },
                                                                   }}/>
          <Stack.Screen name="Patient" component={PatientScreen} options={{ title: 'Карта пациента', headerTintColor: '#2A86FF',
                                                                                                                                                                          headerTitleStyle: {
                                                                                                                                                                            fontWeight: 'bold',
                                                                                                                                                                          }, }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

App.displayName = 'App';
export default App;
