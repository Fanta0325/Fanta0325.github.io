const express = require('express');
const app = express();
const PORT = 3000;

// comci.js 모듈 불러오기
const comci = require('./comci.js');

app.use(express.json());
app.use(express.static(__dirname)); // 정적 파일 제공

app.post('/api/searchSchool', (req, res) => {
    const { schoolName } = req.body;
    const result = comci.searchSchool(schoolName);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
