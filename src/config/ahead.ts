import { routes } from '@/router';
import { getNotAliveList } from '@/unit/data-handle';
import Vue from 'vue';
export default {
    install() {
        Vue.prototype.$notAliveList = getNotAliveList(routes);
    },
};
