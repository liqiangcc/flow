/**
 * 模块VUEX配置
 * @author ke.shi
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as actions from './action';
import * as getters from './getter';
import mutations from './mutation';

Vue.use(Vuex);

export const config_index = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};
