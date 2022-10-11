import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  players: [],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    /*increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },*/
    clearStorage:(state) =>{
      state.players = []
    },
    addPlayer:(state, player) =>{
      state.players.push(player)
    },
    incrementLifePoint: ( state, index ) => {
      state.players[index.payload].payload.lifePoints += 1
    },
    decrementLifePoint: ( state, index ) =>{
      state.players[index.payload].payload.lifePoints -= 1
    },
    incrementCommanderDamage: (state, index)=>{
      state.players[index.payload].payload.damageCommanders += 1
    },
    decrementCommanderDamage: (state, index) => {
      state.players[index.payload].payload.damageCommanders -= 1
    }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = gameSlice.actions
export const { addPlayer, clearStorage, decrementLifePoint, incrementLifePoint, incrementCommanderDamage, decrementCommanderDamage } = gameSlice.actions

export default gameSlice.reducer