import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { history } from "../..";
import agent from "../../app/api/agent";
import { User } from "../../app/model/user";


interface AccountState {
    user: User | null;
}

const initialState: AccountState = {
    user: null
}

export const signInUser = createAsyncThunk<User, FieldValues>(
    'account/signInUser',
    async (data, thunkAPI) => {
        try {
            const user = await agent.Account.login(data);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.data});
        }
    }
)

export const fetchCurrentUser = createAsyncThunk<User>(
    'account/fetchCurrentUser',
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem('user')!)));

        try {
            const user = await agent.Account.currentUser();
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.data});
        }
    },
    {
        condition: () => {
            if (!localStorage.getItem('user')) return false;
        }
    }
)

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            history.push('/');
        },
        setUser: (state, action) => {
            // let claims = JSON.parse(atob(action.payload.token.split('.')[1]));
            // let roles = claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            // state.user = {...action.payload, roles: typeof(roles) === 'string' ? [roles] : roles};
            state.user = action.payload;
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchCurrentUser.rejected, (state) => {
            state.user = null;
            localStorage.removeItem('user');
            toast.error('Session expired - please login again');
            history.push('/');
        });
        builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action) => {
            // let claims = JSON.parse(atob(action.payload.token.split('.')[1]));
            // let roles = claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            // state.user = {...action.payload, roles: typeof(roles) === 'string' ? [roles] : roles};
            state.user = action.payload;
        });
        builder.addMatcher(isAnyOf(signInUser.rejected), (state, action) => {
            throw action.payload;
        })
    })
})

export const {signOut, setUser} = accountSlice.actions;

// import { LocalBarSharp } from "@mui/icons-material";
// import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { FieldValues } from "react-hook-form";
// import agent from "../../app/api/agent";
// import { User } from "../../app/model/user";
// import { history } from "../..";

// interface AccountState {
//     user: User | null;
// }

// const initialState: AccountState = {
//     user: null
// }

// export const signInUser = createAsyncThunk<User, FieldValues>(
//     'account/signInUser',
//     async(data, thunkAPI) =>{
//         try{
//             const user = await agent.Account.login(data);
//             localStorage.setItem('user', JSON.stringify(user));
//             return user;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue({error: error.data});
//         }
//     }
// )

// export const fetchCurrentUser = createAsyncThunk<User>(
//     'account/signInUser',
//     async(_, thunkAPI) =>{
//         try{
//             const user = await agent.Account.currentUser();
//             localStorage.setItem('user', JSON.stringify(user));
//             return user;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue({error: error.data});
//         }
//     }
// )

// export const accountSlice = createSlice({
//     name: 'account',
//     initialState,
//     reducers: {
//         signOut: (state) =>{
//             state.user = null;
//             localStorage.removeItem('user');
//             history.push('/catalog');
//         }
//     },
//     extraReducers: (builder =>{
//         builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action) =>{
//             state.user = action.payload;
//         });
//         builder.addMatcher(isAnyOf(signInUser.rejected, fetchCurrentUser.rejected), (state, action) =>{
//             console.log(action.payload);
//         })
//     })
    
// })
// export const{signOut} = accountSlice.actions