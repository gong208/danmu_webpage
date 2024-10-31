const express = require('express');
const cloudbase = require('@cloudbase/node-sdk');

// 初始化云开发
const app = cloudbase.init({
    env: 'danmu-6g41i88te98a9ba0', // 替换为云开发环境 ID
    secretId: "wx1cfac13994031a80",
    secretKey: "3bc545bd99b583d24a2e08bea8744f56"
});

// 连接数据库
const db = app.database();
const danmuCollection = db.collection('danmu_2'); // 替换为你的弹幕集合名称

// 创建 Express 应用
const server = express();
server.use(express.json());

// 创建一个 API 来获取弹幕数据
server.get('/api/danmu', async (req, res) => {
    try {
        // 查询弹幕数据
        const { data } = await danmuCollection.get();
        res.json({ success: true, data });
    } catch (error) {
        console.error('获取弹幕失败:', error);
        res.status(500).json({ success: false, error: '获取弹幕失败' });
    }
});

// 启动服务器
const port = process.env.PORT || 80;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
