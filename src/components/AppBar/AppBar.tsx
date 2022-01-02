import React from 'react';

import {
  Container, Content, Icon, Title,
} from './AppBar.styled';

export default function AppBar(): React.ReactElement {
  return (
    <Container>
      <Content>
        <Icon />
        <Title>Photos</Title>
      </Content>
    </Container>
  );
}
