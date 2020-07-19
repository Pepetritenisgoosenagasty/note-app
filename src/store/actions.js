import * as mutations from "./mutation-type";

export const saveNote = ({ commit, state }) => {
  // Tourch last save timestamp
  if (state.note.id === null) {
    //   Set current note id
    commit(mutations.SET_CURRENT_NOTE_ID, Date.now());
    commit(mutations.PREPEND_TO_NOTES, state.note);
    // prepend to note
  }
};
