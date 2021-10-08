// httpオブジェクトロード
const http = require('http');

// サーバオブジェクト生成
var server = http.createServer(
  // サーバからクライアントへの応答
  (request,response)=>{
    response.end('<html><body><h1>Hello</h1><p>Welcome to Node.js</p></body></html>');
  }
);

// 待ち受け
server.listen(3000);
