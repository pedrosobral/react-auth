import { combineReducers } from 'redux';

import Library from './Library';
import { selectionReducer } from './SelectionReducer';

import { ILibrary } from '../models';

export interface AppStore {
  libraries: ILibrary[];
  selectedLibraryId: number;
}

export default combineReducers({
  libraries: Library,
  selectedLibraryId: selectionReducer,
  // previousSelection: 
});
