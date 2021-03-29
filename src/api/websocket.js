export default {
    wsToken: localStorage.getItem('token') == null ? "e6854f1a74b94c7fa71343a06448c9aa" : localStorage.getItem('token'),
    ws: function (url) {
        return new WebSocket(url, [this.wsToken])
    },
};