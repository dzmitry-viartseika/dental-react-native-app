import styled from 'styled-components/native';
import { React } from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
  return <SectionMainTitle>{title}</SectionMainTitle>;
};

const SectionMainTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000;
`;

SectionTitle.displayName = 'SectionTitle';
SectionTitle.propTypes = { title: PropTypes.string.isRequired };
export default SectionTitle;
