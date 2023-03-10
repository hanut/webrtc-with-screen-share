import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CallScreenLabels } from "../labels";

const initialState = {
  title: "",
  participants: undefined,
  startedAt: undefined,
  messages: [],
  host: undefined,
};

export const counterSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    addParticipant: (state, action) => {
      // action.payload has complete user object
      const { id, participant } = action.payload;
      state.participants.set(id, participant);
    },
    removeParticipant: (state, action) => {
      // action.payload has the participant id
      state.participants.delete(action.payload);
    },
    setCallStarted: (state, action) => {
      // action.payload has participants  list and the title of the call
      const { participants, title } = action.payload;
      state.participants = {};
      participants.forEach(({ id, ...details }) => {
        state.participants[id] = details;
        if (details.isHost) {
          state.host = state.participants.get(id);
        }
      });
      state.startedAt = Date.now();
      state.title = title;
    },
    resetCall: (state) => {
      state.participants.clear();
      state = initialState;
    },
  },
});

export const { addParticipant, removeParticipant, resetCall, setCallStarted } =
  counterSlice.actions;

export const selectCall = (state) => state.call;
export const selectCallStartedAt = (state) => state.call.startedAt;
export const selectCallMessages = (state) => state.call.messages;
export const selectCallHost = (state) => state.call.host;
export const selectCallTitle = (state) =>
  state.call.title || CallScreenLabels.ZeroTitle;

export const selectCallParticipants = createSelector(
  selectCall,
  (callState) => {
    const participants = [];
    if (!callState.participants) {
      return [];
    }
    Object.entries(callState.participants).map(([id, details]) => {
      participants.push({ ...details, id });
    });
    return participants;
  }
);

export default counterSlice.reducer;
