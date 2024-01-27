from django.contrib import admin
from django.urls import path ,include
from Home import views

urlpatterns = [
    path('', views.index, name='Home'),
    path('cateogry/<str:cat>', views.cateogry, name='cateogry'),
    path('product/<int:mid>',views.product , name='product'),
    path('cart',views.cart ,name='cart' ),
    path('checkout',views.checkout ,name='checkout' ),
    path('confirm',views.confirm ,name='confirm' )

]