wx.request({
    url: '10.195.202.129:80/api/danmu', // 使用本地 IP 地址和端口
    method: 'GET',
    success: res => {
        console.log('弹幕数据:', res.data);
    },
    fail: err => {
        console.error('请求失败:', err);
    }
});
