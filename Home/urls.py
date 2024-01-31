from django.contrib import admin
from django.urls import path ,include
from Home import views

urlpatterns = [
    path('', views.index, name='Home'),
    path('UserLogin', views.UserLogin, name='UserLogin'),
    path('SignUp', views.SignUp, name='SignUp'),
    path('UserLogout', views.UserLogout, name='UserLogout'),
    path('cateogry/<str:cat>', views.cateogry, name='cateogry'),
    path('product/<int:mid>',views.product , name='product'),
    path('cart',views.cart ,name='cart' ),
    path('checkout',views.checkout ,name='checkout' ),
    path('confirm',views.confirm ,name='confirm' )

]
