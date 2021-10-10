# アプリケーションごとにurls.pyを用意
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('<int:id>/<nickname>/', views.index, name='index'),
    # path('my_name_is_<nickname>.I_am_<int:age>_years_old.', views.index, name='index'),
    path('next', views.next, name='next'),
]
