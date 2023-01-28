import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./AuthServices";


const initialState = {
    user: null,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}



export const register = createAsyncThunk('users/register',async (userData, thunkAPI) => {
    
    try{
      return await authService.register(userData);
    }catch(err){
      const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();

      return thunkAPI.rejectWithValue(message);
    }

})

export const edit = createAsyncThunk("users/edit", async(userData, thunkAPI)=>{
  try {
    return await authService.edit(userData);
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();

    return thunkAPI.rejectWithValue(message);
  }

})


export const login = createAsyncThunk('users/login', async(userData, thunkAPI)=>{
    try{
      return await authService.login(userData);
    }catch(err){
      const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
      return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('users/logout', async()=>{
    await authService.logout();
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=null;

            
        },
        disconnect:(state)=>{
            state.user = null;
              state.isError = false;
              state.isLoading = false;
              state.isSuccess = false;
              state.message = null;

        }
    },
    extraReducers: (builder)=>{
        builder
          .addCase(register.fulfilled, (state, action) => {
            (state.isError = false), (state.isSuccess = true);
            state.isLoading = false;
            state.user = action.payload;
          })
          .addCase(register.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.user = null;
            state.message = action.payload;
          })
          .addCase(edit.fulfilled, (state, action) => {
            (state.isError = false), (state.isSuccess = true);
            state.isLoading = false;
            state.user = action.payload;
          })
          .addCase(edit.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(edit.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.user = null;
            state.message = action.payload;
          })
          .addCase(login.fulfilled, (state, action) => {
            (state.isError = false), (state.isSuccess = true);
            state.isLoading = false;
            state.user = action.payload;
          })
          .addCase(login.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.user = null;
            state.message = action.payload;
          })
          .addCase(logout.fulfilled, (state) => {
            state.isSuccess = true;
          });

    }

});

export const {reset,disconnect} = authSlice.actions;
export default authSlice.reducer;