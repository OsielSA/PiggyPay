// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idAccount: '',
  issuingBank: '',
  cardholderName: '',
  cardNumber: '',
  currentBalance: '',
  allowsSections: ''
};

export const debitAccountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      const {idAccount, issuingBank, cardholderName, cardNumber, currentBalance, allowsSections} = action.payload;
      state.idAccount = idAccount;
      state.issuingBank = issuingBank;
      state.cardholderName = cardholderName;
      state.cardNumber = cardNumber;
      state.currentBalance = currentBalance;
      state.allowsSections = allowsSections;    
    }
  }
});

export const { addAccount } = debitAccountSlice.actions;
export default debitAccountSlice.reducer;
