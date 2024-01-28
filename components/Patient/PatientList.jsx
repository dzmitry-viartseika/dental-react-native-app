import styled from 'styled-components/native';
import { React, useEffect } from 'react';

const PatientList = ({ items }) => {
const test = '1000'
  return (
    <Group>
      {items.map((item) => (
        <GroupItem key={item.id}>
          <Avatar source={{ uri: item.userInfo.avatar }} />
          <UserInfo>
            <FullName>{item.userInfo.fullName}</FullName>
            <ReasonText>{item.visitReason}</ReasonText>
          </UserInfo>
          <TimeGroup active={item.active}>{item.timeVisit}</TimeGroup>
        </GroupItem>
      ))}
    </Group>
  );
};

const Group = styled.View`
  padding: 20px;
`;

const FullName = styled.Text`
  font-weight: 400;
  font-size: 16px;
`;

const UserInfo = styled.View`
  padding: 0 15px;
`;

const ReasonText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

const TimeGroup = styled.Text`
  background: ${(props) => (props.active ? '#2A86FF' : '#e9f5ff')};
  color: ${(props) => (props.active ? '#fff' : '#4294ff')};
  border-radius: 18px;
  font-weight: 600;
  width: 70px;
  height: 32px;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
`;

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  border-bottom-color: #f3f3f3;
  border-bottom-width: 1px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

export default PatientList;
