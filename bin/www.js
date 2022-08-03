"use strict";

const app = require("../app")

const port = 3000;

app.listen(port, () => {
    console.log("서버 가동");
});

// node ./bin/www.js 실행할 때 이렇게 안하고 bin으로 가서 하면 오류남 이거때문에 3시간 날라감.