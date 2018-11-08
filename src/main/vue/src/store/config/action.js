/**
 * 操作Actions
 */
import * as TYPE from './type';
import {toGet,toPost,toDel,toPut} from '../../utils/MyAxios';
import $ from 'jquery';
import {Message} from 'iview';
import {MessageBus} from '../../utils/MessageBus';


export const queryList = ({commit}) => {
    toGet('/flow/querySource')
        .then((response) => {
            commit(TYPE.CONFIG_SOURCE_LIST,{
                source_list: response
            })
        });

};

