import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocaleState = {
  language: string;
};

const initialState: LocaleState = {
  language: "id", // Default bahasa Indonesia
};

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLocale } = localeSlice.actions;
export default localeSlice.reducer;
