export default {
    wsToken: "e6854f1a74b94c7fa71343a06448c9aa",
    ws: function (url) {
        return new WebSocket(url, [this.wsToken])
    },
};