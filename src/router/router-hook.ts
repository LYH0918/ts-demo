import router from './index';

router.beforeEach((to, from, next) => {
    // alert(JSON.stringify(to));
    next();
});

router.onError(() => {
    alert('error');
});

export default router;
