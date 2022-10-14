import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  players: [],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    clearUser:(state, action) =>{
      if(state.players[action.payload.index]){
        state.players.splice(action.payload.index, 1)
      }
    },
    clearStorage:(state) =>{
      state.players = ''
      console.log(state.players)
    },
    setPlayer: (state, action) => {
      if (state.players[action.payload.index]) {
        state.players[action.payload.index] = action.payload.player
      } else {
        state.players.push(action.payload.player)
      }
    },
    incrementLifePoint: ( state, action ) => {
      state.players[action.payload].lifePoints += 1
    },
    decrementLifePoint: ( state, action ) =>{
      state.players[action.payload].lifePoints -= 1
    },
    incrementCommanderDamage: (state, action)=>{
        state.players[action.payload.playerIndex].damageCommanders[action.payload.commanderIndex] += 1
        state.players[action.payload.playerIndex].lifePoints -= 1
    },
    decrementCommanderDamage: (state, action) => {
      if (state.players[action.payload.playerIndex].damageCommanders[action.payload.commanderIndex] > 0) {
        state.players[action.payload.playerIndex].damageCommanders[action.payload.commanderIndex] -= 1
        state.players[action.payload.playerIndex].lifePoints += 1
      }
    }
  },
})

export const { setPlayer, addPlayer, clearUser, decrementLifePoint, incrementLifePoint, incrementCommanderDamage, decrementCommanderDamage, clearStorage } = gameSlice.actions

export default gameSlice.reducer