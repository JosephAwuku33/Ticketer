// eventSlice.js

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedEvent {
  id: number;
  title: string;
  location: string;
  imgUrl: string;
  headline_artist: string;
  payment: {
    Regular: number;
    VVIP: number;
    VIP: number;
  };
  details: string;
  date: string;
}

interface EventState {
  selectedEvent: SelectedEvent | null;
  selectedPayment: string | null;
  selectedPaymentOption: number | null;
}

const initialState: EventState = {
  selectedEvent: null,
  selectedPayment: null,
  selectedPaymentOption: null
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    selectEvent: (state, action: PayloadAction<SelectedEvent>) => {
      state.selectedEvent = action.payload;
      state.selectedPayment = null;
    },
    selectPayment: (state, action: PayloadAction<string>) => {
      state.selectedPayment = action.payload;
    },
    selectedPaymentOption: (state, action: PayloadAction<number>) => {
      state.selectedPaymentOption = action.payload;
    }
  },
});

export const { selectEvent, selectPayment, selectedPaymentOption } = eventSlice.actions;
export default eventSlice.reducer;
