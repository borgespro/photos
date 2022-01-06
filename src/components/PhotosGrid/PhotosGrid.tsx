import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useAwaitControl } from 'react-redux-await-control';

import { listPhotos } from '../../store/actions';
import { Photo } from '../../typings/photo';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { Container, ListWrapper } from './PhotosGrid.styled';
import PhotoBox from '../PhotoBox';

type ListPhotoControl = {
  data: Photo[];
  currentPage: number;
};

const CARD_WIDTH = 340;
const CARD_HEIGHT = 340;

export default function PhotosGrid(): React.ReactElement {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [
    photosControl, setPhotosControl,
  ] = useState<ListPhotoControl>({ currentPage: 0, data: [] });

  const { width, height } = useWindowDimensions();
  const listPhotosControl = useAwaitControl(listPhotos);

  const result: Photo[] = listPhotosControl.result(page) as any;
  const loading = listPhotosControl.isRunning(page);
  const success = listPhotosControl.isSuccessful(page);

  useEffect(() => {
    if (result.length && !loading && photosControl.currentPage !== page) {
      setPhotosControl({ data: [...photosControl.data, ...result], currentPage: page });
    }

    if (!!success && !result.length) {
      setHasMore(false);
    }
  }, [result, page, photosControl, loading, success]);

  useEffect(() => {
    listPhotosControl.start(page, { actionId: page });

    return () => {
      listPhotosControl.cancel({ actionId: page });
      listPhotosControl.clear({ actionId: page });
    };
  }, [page]);

  const columnSize = useMemo(() => Math.floor(width / CARD_WIDTH), [width]);

  const itemCount = useMemo(() => {
    const items = photosControl.data;
    return hasMore ? items.length / columnSize + 1 : items.length / columnSize;
  }, [photosControl.data, hasMore, columnSize]);

  const nextPage = useCallback(async () => {
    if (!loading) {
      setPage(page + 1);
    }
  }, [page, loading]);

  const isItemLoaded = useCallback((
    index: number,
  ) => !hasMore || !!photosControl.data[index * columnSize], [photosControl.data, columnSize]);

  const renderCell = useCallback(({ columnIndex, rowIndex, style }: any) => (
    <div style={style}>
      <PhotoBox data={photosControl.data[columnSize * rowIndex + columnIndex]} />
    </div>
  ), [photosControl.data, columnSize]);

  return (
    <Container>
      <ListWrapper>
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={nextPage}
          threshold={5}
        >
          {({ ref, onItemsRendered }) => (
            <Grid
              ref={ref}
              style={{ marginLeft: (width - CARD_WIDTH * columnSize) / 2 }}
              columnCount={columnSize}
              columnWidth={CARD_WIDTH}
              height={height - 70}
              rowCount={photosControl.data.length / columnSize}
              rowHeight={CARD_HEIGHT}
              width={width}
              onItemsRendered={({
                visibleRowStartIndex,
                visibleRowStopIndex,
                overscanRowStopIndex,
                overscanRowStartIndex,
              }) => {
                onItemsRendered({
                  overscanStartIndex: overscanRowStartIndex,
                  overscanStopIndex: overscanRowStopIndex,
                  visibleStartIndex: visibleRowStartIndex,
                  visibleStopIndex: visibleRowStopIndex,
                });
              }}
            >
              {renderCell}
            </Grid>
          )}
        </InfiniteLoader>
      </ListWrapper>
    </Container>
  );
}
