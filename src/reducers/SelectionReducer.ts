import * as libraryActions from '../actions';

type Action = libraryActions.All;

export function selectionReducer(state = null, action: Action) {
  switch (action.type) {
    case libraryActions.SELECT_LIBRARY:
      return action.payload;
    default:
      return state;
  }
}
