import {
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import { React } from 'react';

const SectionTitle = ({ title }) => {
    return (
        <SectionMainTitle>{title}</SectionMainTitle>
    )
};

const SectionMainTitle = styled.Text`
    font-weight: 800;
    font-size: 22px;
    color: #000;
`

SectionTitle.displayName = 'SectionTitle';
export default SectionTitle;