// httpオブジェクトロード
const http = require('http');

// サーバオブジェクト生成
var server = http.createServer(
  // サーバからクライアントへの応答
  (request,response)=>{
    // htmlで表示
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html lang="ja">');
    response.write('<head><meta charset="utf-8">');
    response.write('<title>Hello</title></head>');
    response.write('<body><h1>Hello Node.js!</h1>');
    response.write('<p>This is Node.js sample page.</p>');
    response.write('<p>これは、Node.jsのサンプルページです。</p>', 'utf8');
    response.write('</body></html>');
    response.end();
  }
);

// 待ち受け
server.listen(3000);
console.log('Server start!');
