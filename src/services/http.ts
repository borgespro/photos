import axios from 'axios';
import { API_URL } from '../globals/constants';

export const getPhotos = () => axios.get(`${API_URL}/v2/list`);
export const getPhoto = (id: string) => axios.get(`${API_URL}/id/${id}/info`);
