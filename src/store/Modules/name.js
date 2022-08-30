const state = {
    name: 'Sami'
};

const getters = {
    getName(state) {
        return state.name
    }
};

const mutations = { 
    changeName(state, newName) {
        state.name = newName
    }
};

const actions = {
    changeName(context, newName) {
        context.commit('changeName', newName)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}