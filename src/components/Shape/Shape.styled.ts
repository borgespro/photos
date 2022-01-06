import styled from 'styled-components';

import getElevation from '../../globals/styles/getElevation';

type ShapeContainerProps = {
  level: number;
  hoverElevation: number;
};

export const Container = styled.div<ShapeContainerProps>`
  box-shadow: ${({ level }) => getElevation(level)};
  
  :hover {
    box-shadow: ${({ hoverElevation }) => getElevation(hoverElevation)};
  }
`;
