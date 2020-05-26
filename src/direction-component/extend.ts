import YhConfirm from './yhComfirm.vue';
import YHCom from './com.vue';
import Vue from 'vue';

interface Dom {
	[propName: string]: any;
}

const initDomObj = (extendArr: object[]): Dom[] => {
	return extendArr.map((item: object) => {
		const extendobj = Vue.extend(item);
		const instance: Dom = new extendobj();
		instance.vm = instance.$mount();
		document.body.appendChild(instance.vm.$el);
		return instance;
	});
};

const [ demo, com ] = initDomObj([ YhConfirm, YHCom ]);

export default {
	install(vue: Dom) {
		vue.prototype.$YHConfirm = demo.vm.show;
		vue.prototype.$YHCom = () => {
			com.vm.visible = true;
		};
	},
};
