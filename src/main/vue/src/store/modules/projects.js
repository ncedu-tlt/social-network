import { getProjects } from '@/api/rest/user.api';

const state = {
    projects: []
};

const mutations = {
    updateProjects(state, updatedProjects) {
        state.projects = updatedProjects;
    }
};

const actions = {
    async updateProjects({ commit }, userName) {
        const response = await getProjects(userName);
        const updatedProjects = response.data;
        commit('updateProjects', updatedProjects);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
