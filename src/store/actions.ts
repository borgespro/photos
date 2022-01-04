import { createAsyncAction } from 'react-redux-await-control';

export type Action = {
  type: string;
  payload?: any;
  meta?: any;
};

export const listPhotos = createAsyncAction('LIST_PHOTOS', { saveResult: true, initialValue: [] });
export const getPhoto = createAsyncAction('GET_PHOTO', { saveResult: true });
