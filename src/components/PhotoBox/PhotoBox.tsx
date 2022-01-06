import React, { useMemo } from 'react';

import { API_URL } from '../../globals/constants';
import { Photo } from '../../typings/photo';
import { Container, Image } from './PhotoBox.styled';

type PhotoBoxProps = {
  data: Photo;
};

export default function PhotoBox({ data }: PhotoBoxProps): React.ReactElement {
  const imageUrl = useMemo(() => `${API_URL}/id/${data?.id}/300`, [data?.id]);

  return (
    <Container>
      <Image alt={data?.id} src={imageUrl} />
    </Container>
  );
}
