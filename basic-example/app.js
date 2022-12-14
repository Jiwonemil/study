const express = require("express");
const routes = require('./routes'); // 통신을 수행하는 Router 생성

const app = express();
const port = 3000;

// 최 상단에서 request로 수신되는 Post 데이터가 정상적으로 수신되도록 설정한다.
// 주소 형식으로 데이터를 보내는 방식
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 몽고 DB 및 Schema 설정
// 몽고 DB의 스키마 설정시 index.js의 이름을 변경해선 안된다.
const connect = require("./schemas");
connect();

app.use("/", routes);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
