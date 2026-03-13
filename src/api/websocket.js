import { returnToken } from './nevt';

export default {
    ws: function (url) {
        // 创建连接时读取当前登录状态，避免复用旧凭据或漏掉会话登录。
        const token = returnToken();
        if (!token) throw new Error('请先登录后再建立实时连接');
        return new WebSocket(url, [token]);
    },
};
