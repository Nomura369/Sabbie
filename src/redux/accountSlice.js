import {createAsyncThunk, createSlice} from '@redux.js/toolkit';

const initialState={
    general:{
        name:'',
        email:'',
        tel:''
    },
    login:{
        haLogin:false,
    }
};

const accountSlice = createSlice({
    name:'qaccount',
    initialState,
    reducers:{
        setGeneralAccountInfo:(state,action)=>{
            state.general=action.playload;
        },
        login:(state)=>{
            state.login.hasLogin=true;
        },
        logout:(state)=>{
            state.login.hasLogin=false;
        }
    }
});


export const selectGeneral=(state)=>state.account.general;
export const selectLogin=(state)=>state.account.login;

export const {setGeneralAccountInfo,login,logout}=accountSlice.actions;

export default accountSlice.reducer;