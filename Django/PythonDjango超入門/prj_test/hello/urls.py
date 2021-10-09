# アプリケーションごとにurls.pyを用意
from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('<int:id>/<nickname>/', views.index, name='index'),
]
