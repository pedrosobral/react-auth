export const SELECT_LIBRARY = 'Select library';

// export class SelectLibrary {
//   readonly type = SELECT_LIBRARY;
//   constructor(public payload: number) { }
// }

export const selectLibrary = (id: number) => {
  return {
    payload: id,
    type: SELECT_LIBRARY,
  };
};

const selectLibraryType =  (false as true) && selectLibrary(0);

export type All = typeof selectLibraryType;

// import { Action } from '@ngrx/store';
// import { Bookings } from '../models/bookings';

// export const GET_BOOKINGS = 'Bookings get';
// export const GET_BOOKINGS_SUCCESS = 'Bookings get success';

// export class GetBookings implements Action {
//   readonly type = GET_BOOKINGS;
//   constructor(public payload: string) { }
// }

// export class GetBookingsSuccess implements Action {
//   readonly type = GET_BOOKINGS_SUCCESS;
//   constructor(public payload: Bookings) { }
// }

// export type All
//   = GetBookings
//   | GetBookingsSuccess;
