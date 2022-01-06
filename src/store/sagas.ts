import {
  call, takeLatest, takeLeading, put, SagaReturnType, select,
} from 'redux-saga/effects';

import { getPhotos, getPhoto } from '../services/http';
import { Photo } from '../typings/photo';
import { Action, getPhoto as getPhotoDetail, listPhotos } from './actions';

type GetPhotosResponse = SagaReturnType<typeof getPhotos>;
type GetPhotoResponse = SagaReturnType<typeof getPhoto>;

function* listPhotosSaga({ payload, meta }: Action) {
  try {
    const { data }: GetPhotosResponse = yield call(getPhotos, payload);
    const oldList: Photo[] = yield select(listPhotos.getResult(meta?.actionId));
    yield put(listPhotos.success([...oldList, ...data], meta));
    yield put(listPhotos.clear({ actionId: payload - 1 }));
  } catch (e) {
    yield put(listPhotos.failure(e, meta));
  }
}

function* getPhotoSaga({ payload }: Action) {
  try {
    const { data }: GetPhotoResponse = yield call(getPhoto, payload);
    yield put(getPhotoDetail.success(data));
  } catch (e) {
    yield put(getPhotoDetail.failure(e));
  }
}

export default function* mainSaga(): Generator {
  yield takeLeading(listPhotos.start.toString(), listPhotosSaga);
  yield takeLatest(getPhotoDetail.start.toString(), getPhotoSaga);
}
