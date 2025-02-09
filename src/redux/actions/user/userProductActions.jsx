import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonReduxRequest } from "../../../Common/api";
import { appJson } from "../../../Common/configurations";

export const getUserProducts = createAsyncThunk(
  "products/getUserProducts",
  async (searchParams, { rejectWithValue }) => {
    return commonReduxRequest(
      "get",
      `/user/products?${searchParams}`,
      null,
      appJson,
      rejectWithValue
    );
  }
);
