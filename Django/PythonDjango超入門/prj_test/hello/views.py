from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def index(request):
    # return HttpResponse("Hello Django!!")

    # クエリパラメータ表示
    # http://localhost:8000/hello/?msg=hello
    # msg = request.GET['msg']
    # return HttpResponse('you typed: "' + msg + '".')
    
    # パラメータが無い場合
    if 'msg' in request.GET:
        msg = request.GET['msg']
        result = 'you typed: "' + msg + '".'
    else:
        result = 'please send msg parameter!'
    return HttpResponse(result)
