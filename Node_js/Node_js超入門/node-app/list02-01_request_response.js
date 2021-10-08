// httpオブジェクトロード
const http = require('http');

// サーバオブジェクト生成
var server = http.createServer(
  // サーバからクライアントへの応答
  (request,response)=>{
    response.end('Hello Node.js!');
  }
);

// 待ち受け
server.listen(3000);
