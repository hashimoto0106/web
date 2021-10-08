// オブジェクトロード
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// テンプレートファイル読み込み
const index_page = fs.readFileSync('./index_02-09.ejs', 'utf8');

// サーバオブジェクト生成
var server = http.createServer(getFromClient);

// 待ち受け
server.listen(3000);
console.log('Server start!');

// ここまでメインプログラム========

// createServerの処理
// サーバからクライアントへの応答
function getFromClient(request, response){
  // レンダリング(templete -> html)
  var content = ejs.render(index_page, {
    title: "Indexページ",
    content: "これはテンプレートを使ったサンプルページです。",
  });
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(content);  // htmlソースコード
  response.end();
}
