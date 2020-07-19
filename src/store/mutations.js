import * as types from "./mutation-type";

export default {
  [types.SET_CURRENT_NOTE_ID](state, id) {
    state.note.id = id;
  },
  [types.PREPEND_TO_NOTES](state, note) {
    state.notes.unshift(note);
  },
};
