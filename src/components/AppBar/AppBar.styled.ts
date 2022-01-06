import styled from 'styled-components';
import { Link } from 'react-router-dom';

import getElevation from '../../globals/styles/getElevation';
import camera from '../../images/camera.svg';

export const Container = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  
  z-index: 1;
  
  box-shadow: ${() => getElevation(5)};

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  padding-left: 24px;
  padding-right: 24px;
  min-height: 64px;
  
  text-decoration: none;
`;

export const Icon = styled.img.attrs(() => ({
  alt: 'photos',
  src: camera,
}))`
  margin-right: 16px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
  
  padding-bottom: 3px;
`;
