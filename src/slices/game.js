import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  players: [],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    clearStorage:(state) =>{
      state.players = []
    },
    addPlayer:(state, action) =>{
      state.players.push(action.payload)
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

export const { setPlayer, addPlayer, clearStorage, decrementLifePoint, incrementLifePoint, incrementCommanderDamage, decrementCommanderDamage } = gameSlice.actions

export default gameSlice.reducer