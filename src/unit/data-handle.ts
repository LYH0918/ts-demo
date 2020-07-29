// 获取非缓存页面name

export const getNotAliveList = (routes: any) => {
    const result: any = [];
    const fun = (arr: any) => {
        arr.map((item: any) => {
            if (item.children && item.children.length) {
                fun(item.children);
            }
            if (!item.meta || !item.meta.keepAlive) {
                result.push(item.name || '');
            }
        });
    };
    fun(routes);
    return result;
};
