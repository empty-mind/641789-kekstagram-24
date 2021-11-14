import './thumbnails.js';
import './new-photo-modal.js';
import './fullsize-photo-effects.js';
import {getData} from './api.js';
import {showErrorMessage} from './api.js';
import {getUserPhotoDescriptionsList} from './thumbnails.js';

getData(getUserPhotoDescriptionsList, showErrorMessage);
