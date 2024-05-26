import {createAsyncThunk, createSlice} from '@redux.js/toolkit';
import { login,logout,register,readUser,updateUser } from '../api/firebase';

const loginAsync = createAsyncThunk(
    'accout/login',
    async ({email,password}) =>{
        const { data}= await login({email,password});
        return data;
    }
)

const registerAsync = createAsyncThunk(
    'account/register',
    async({name,email,password})=>{
        const { data}= await register({name,email,password});
        return data; 
    }
);

const readUserAsync= createAsyncThunk(
    'account/readUser',
    async ()=>{
        return await readUser();
    }
);

const updateUserAsync= createAsyncThunk(
    'account/updateUser',
    async(userInfo)=>{
        return await updateUser(userInfo);
    }
);

const initialState={
    general:{
        name:'',
        email:'',
        tel:''
    },
    login:{
        hasLogin:false,
        hasAccount:true,
    },
    status:'idle',
};

const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        setGeneralAccountInfo:(state,action)=>{
            state.general=action.payload;
        },
        signOut:(state)=>{
            logout();
            state.login.hasLogin=false;
        },
        gotoRegister:(state)=>{
            state.login.hasAccount=false;
        },
        gotoLogin:(state)=>{
            state.login.hasAccount=true;
        }  
    },
    extraReducers:(builder)=>{
        builder
          .addCase(loginAsync.pending,(state)=>{
            state.status='loading';
          })
          .addCase(loginAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.login.hasLogin=true;
          })
         .addCase(registerAsync.pending,(state)=>{
            state.status='loading';
         })
         .addCase(registerAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.login.hasLogin=true;
         })
         .addCase(readUserAsync.fulfilled,(state,action)=>{
            state.general={...state.general,...action.payload};
         })
         .addCase(updateUserAsync.fulfilled,(state,action)=>{
            state.general={...state.general,...action.payload};
         })
    },
});


export const selectGeneral=(state)=>state.account.general;
export const selectLogin=(state)=>state.account.login;

export const {setGeneralAccountInfo,gotoRegister,gotoLogin,signOut}=accountSlice.actions;
export {loginAsync,registerAsync,readUserAsync,updateUserAsync}

export default accountSlice.reducer;