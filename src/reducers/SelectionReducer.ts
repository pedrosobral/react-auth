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

// import { AppStore } from './index';
// import * as bookingsActions from '../actions/bookings';
// import { Bookings } from '../models/bookings';

// type Action = bookingsActions.All;

// export const selectBookings = (state: AppStore) => state.bookings;

// export function bookingsReducer(state: Bookings, action: Action) {
//   switch (action.type) {
//     case bookingsActions.GET_BOOKINGS:
//       return { ...state, loading: true }

//     case bookingsActions.GET_BOOKINGS_SUCCESS:
//       return { ...state, ...action.payload, loading: false }

//     default: return state;
//   }
// }
