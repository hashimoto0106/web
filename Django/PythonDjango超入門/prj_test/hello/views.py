# アクセスしたアドレスの画面表示に必要な処理 = ビュー
# 画面表示を行うのに必要な処理はビューで担当

# from django.shortcuts import render
# from django.http import HttpResponse


# Create your views here.

#def index(request):
    # return HttpResponse("Hello Django!!")

    # クエリパラメータ表示
    # http://localhost:8000/hello/?msg=hello
    # msg = request.GET['msg']
    # return HttpResponse('you typed: "' + msg + '".')
    
    # パラメータが無い場合
    #if 'msg' in request.GET:
    #    msg = request.GET['msg']
    #    result = 'you typed: "' + msg + '".'
    #else:
    #    result = 'please send msg parameter!'
    #return HttpResponse(result)

# http://localhost:8000/hello/19810106/hashimoto
# def index(request, id, nickname):
#     result = 'your id: ' + str(id) + ', name: "' \
#         + nickname + '".'
#     return HttpResponse(result)

# http://localhost:8000/hello/my_name_is_naoki.I_am_41_years_old.
# def index(request, nickname, age):
#     result = 'your account: ' + nickname + '" (' + str(age) + ').'
#     return HttpResponse(result)


from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    # テンプレートに記述されている変数などを実際に使う値に置き換えて表示を完成させる処理
    # return render(request, 'hello/index.html')
    
    # テンプレートに値を渡す
    params = {
        'title':'Hello/Index',
        'msg':'これは、サンプルで作ったページです。',
    }
    return render(request, 'hello/index.html', params)
