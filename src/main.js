import {
	createSSRApp
} from "vue";
import App from "./App.vue";

// main.js
import uviewPlus from 'uview-plus'

import api from '@/api/index.js'

// pinia
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';


export function createApp() {
	const app = createSSRApp(App);

	// uviewPlusUI组件
	app.use(uviewPlus)

	// pinia
    const pinia = createPinia();
    pinia.use(
        createPersistedState({
            storage: localStorage,
            auto: true, // 启用所有Store默认持久化
        })
    );
    app.use(pinia);
    app.config.globalProperties.$store = store;


	// 配置全局api
	app.config.globalProperties.$api = api

	return {
		app,
	};
}