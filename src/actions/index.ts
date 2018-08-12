export const SELECT_LIBRARY = 'Select library';

export const selectLibrary = (id: number) => {
  return {
    payload: id,
    type: SELECT_LIBRARY,
  };
};

const selectLibraryType =  (false as true) && selectLibrary(0);

export type All = typeof selectLibraryType;
