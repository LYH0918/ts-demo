// 添加路由守卫
import router from './index';

router.beforeEach((to, from, next) => {
    // console.log(to);
    next();
});

router.onError(() => {
    alert('error');
});

export default router;
