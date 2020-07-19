export const note = state => {
  return state.note;
};
export const notes = state => {
  return state.notes.sort((a, b) => {
    return a["lastsaved"] < b["lastsaved"];
  });
};
