import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { API_URL } from '../../globals/constants';
import { Photo } from '../../typings/photo';
import Shape from '../Shape';
import { Container, Image } from './PhotoBox.styled';

type PhotoBoxProps = {
  data: Photo;
};

export default function PhotoBox({ data }: PhotoBoxProps): React.ReactElement {
  const imageUrl = useMemo(() => `${API_URL}/id/${data?.id}/300`, [data?.id]);

  return (
    <Container>
      <Shape elevation={4} hoverElevation={15}>
        <Link to={`/photos/${data.id}`}>
          <Image alt={data.id} src={imageUrl} />
        </Link>
      </Shape>
    </Container>
  );
}
