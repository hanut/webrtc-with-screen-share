import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CallScreenLabels } from "../labels";

const initialState = {
  details: {
    title: "",
    participants: undefined,
    startedAt: undefined,
    messages: [],
    host: undefined,
  },
  isListOpen: false,
};

export const counterSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    toggleParticipantsList: (state, action) => {
      // action.payload has the list state to set
      state.isListOpen = action.payload;
      console.log("New state of isListOpen", state.isListOpen);
    },
    addParticipant: (state, action) => {
      // action.payload has complete user object
      const { id, participant } = action.payload;
      state.details.participants.set(id, participant);
    },
    removeParticipant: (state, action) => {
      // action.payload has the participant id
      state.details.participants.delete(action.payload);
    },
    setCallStarted: (state, action) => {
      // action.payload has participants  list and the title of the call
      const { participants, title } = action.payload;
      state.details.participants = {};
      participants.forEach(({ id, ...details }) => {
        state.details.participants[id] = details;
        if (details.isHost) {
          state.details.host = state.participants.get(id);
        }
      });
      state.details.startedAt = Date.now();
      state.details.title = title;
    },
    resetCall: (state) => {
      state.details = initialState;
    },
  },
});

export const {
  toggleParticipantsList,
  addParticipant,
  removeParticipant,
  resetCall,
  setCallStarted,
} = counterSlice.actions;

export const selectIsParticipantsListOpen = (state) => state.call.isListOpen;
export const selectCallStartedAt = (state) => state.call.details.startedAt;
export const selectCallMessages = (state) => state.call.details.messages;
export const selectCallHost = (state) => state.call.details.host;
export const selectCallTitle = (state) =>
  state.call.details.title || CallScreenLabels.ZeroTitle;
export const selectCallDetails = (state) => state.call.details;

export const selectCallParticipants = createSelector(
  selectCallDetails,
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

export const callIsRunning = createSelector(
  selectCallStartedAt,
  (callStartedAt) => {
    return !!callStartedAt;
  }
);

export default counterSlice.reducer;
