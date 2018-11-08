/**
 * 更新容器中的state
 * @author ke.shi
 */
import * as TYPE from './type';

const mutations = {
    /**
     * 获取信息
     * @param state
     * @param playload
     */
    [TYPE.CONFIG_SOURCE_LIST] (state, playload) {
        Object.assign(state, {
            source_list: playload.source_list,
        });
    },
    /**
     * 获取用户登录权限信息
     * @param state
     * @param playload
     */
    [TYPE.INDEX_LOGIN_PERMISSION] (state, playload) {
        Object.assign(state, {
            index_login_permission: playload.loginPermissionInfo,
        });
    },

};

export default mutations;
