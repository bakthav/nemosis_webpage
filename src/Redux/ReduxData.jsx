import {createSlice} from '@reduxjs/toolkit'


const reduxData = createSlice({
    name:'user',
    initialState:{value:{name:'',models:''}},
    reducers:{
        model : (state , action)=>{
            state.value = action.payload
        },
      
    }
})
export const {model} = reduxData.actions;
export default reduxData.reducer;