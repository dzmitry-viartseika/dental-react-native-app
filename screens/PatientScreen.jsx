import styled from 'styled-components/native';
import { React } from 'react';
import ButtonComponent from '../components/ui/Buttons/ButtonComponent';
import IconButton from '../components/ui/Buttons/IconButton';
import { View, Text } from 'react-native';

const PatientScreen = ({ route }) => {
	const { patient } = route.params;

	const onPressLearnMore = () => {
		console.log('onPressLearnMore');
	};

	return (
		<Container>
		    <MainSection>
		        <PatientFullName>{patient.userInfo.fullName}</PatientFullName>
                			<PhoneNumber>{patient.userInfo.phoneNumber}</PhoneNumber>
                			<ActionWrapper>
                				<Test>
                					<ButtonComponent
                						onPressEventHandler={onPressLearnMore}
                						title="Формула зубов"
                						color="#4294ff"
                						accessibilityLabel="Learn more about this purple button"
                					/>
                				</Test>
                				<Test2>
                					<IconButton iconName="call" size={18} color="white" />
                				</Test2>
                			</ActionWrapper>
		    </MainSection>
		    <VisitSection>
		    			<PatientVisits>
            			    <ActionWrapper>
            			        <IconButton iconName="call" size={18} color="gray" background="white" /><Text>Зуб: 12 </Text>
            			    </ActionWrapper>
            			    <ActionWrapper>
            			        <IconButton iconName="call" size={18} color="gray" background="white" /><Text>Диагноз: пульпит</Text>
            			    </ActionWrapper>
                            <DatePricePanel>
                                <Text>11.10.2024 - 15:40</Text>
                                <Text>1500 P</Text>
                            </DatePricePanel>
            			</PatientVisits>
		    </VisitSection>
		</Container>
	);
};

const PatientVisits = styled.View`
    padding: 10px;
    border-radius: 10px;
    background: white;
`

const MainSection = styled.View`
    background: white;
    	padding: 50px 20px;
`

const VisitSection = styled.View`
    padding: 30px 20px;
`

const DatePricePanel = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const Container = styled.View`
	flex: 1;
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
