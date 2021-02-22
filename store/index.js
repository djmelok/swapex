export const state = () => ({
  sidebar: false,
  visibilityData: true
})

export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const HIDE_DATA = 'HIDE_DATA'
export const SHOW_DATA = 'SHOW_DATA'
export const TOGGLE_DATA = 'TOGGLE_DATA'

export const mutations = {
  [OPEN_SIDEBAR](state) {
    state.sidebar = true
  },
  [CLOSE_SIDEBAR](state) {
    state.sidebar = false
  },
  [HIDE_DATA](state) {
    state.visibilityData = false
  },
  [SHOW_DATA](state) {
    state.visibilityData = true
  }
}

export const actions = {
  async [OPEN_SIDEBAR]({ commit }) {
    await commit(OPEN_SIDEBAR)
  },
  async [CLOSE_SIDEBAR]({ commit }) {
    await commit(CLOSE_SIDEBAR)
  },
  async [TOGGLE_SIDEBAR]({ commit, state }) {
    await commit(state.sidebar ? CLOSE_SIDEBAR : OPEN_SIDEBAR)
  },
  async [SHOW_DATA]({ commit }) {
    await commit(SHOW_DATA)
  },
  async [HIDE_DATA]({ commit }) {
    await commit(HIDE_DATA)
  },
  async [TOGGLE_DATA]({ commit, state }) {
    await commit(state.visibilityData ? HIDE_DATA : SHOW_DATA)
  }
}
