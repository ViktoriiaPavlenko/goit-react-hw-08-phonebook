import { isRejectedWithValue } from '@reduxjs/toolkit';

export const ErrorLogger = api => next => action => {
  if (isRejectedWithValue(action)) {
    alert(`Auth Error! ${action.error.message}`);
  }
  return next(action);
};
