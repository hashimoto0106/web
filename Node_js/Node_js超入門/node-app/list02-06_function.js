const http = require('http');  // httpオブジェクトロード
const fs = require('fs');  //htmlファイル読み込み

// サーバオブジェクト生成
var server = http.createServer(getFromClient);

// 待ち受け
server.listen(3000);
console.log('Server start!');

// ここまでメインプログラム========

// createServerの処理
// サーバからクライアントへの応答
function getFromClient(req, res) {
  request = req;
  response = res;
  fs.readFile('./index.html', 'UTF-8',
    // コールバック関数O(readFile処理後にコール)
    (error, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);  // ファイルから読み込んだデータ
      response.end();
    }
  );
}
