import React from 'react';

import { PhotosGrid } from '../../components';
import { Container, GridWrapper } from './List.styled';

export default function List(): React.ReactElement {
  return (
    <Container>
      <GridWrapper>
        <PhotosGrid />
      </GridWrapper>
    </Container>
  );
}
