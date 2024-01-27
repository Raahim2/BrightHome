from django.shortcuts import render , redirect
from .models import Product
from django.shortcuts import render
from django.core.mail import send_mail
from django.http import JsonResponse
from .models import Order

# Create your views here.
def index(request):
    return render(request,'index.html')

def cateogry(request,cat):
    a=Product.objects.filter(cateogry=cat).values()
    if(cat=="All"):
        a=Product.objects.values()
        cat="Latest Collections"

    context={
        'name':cat,
        'prod':a
    }
    return render(request , 'cateogry.html',context)

def product(request , mid):
    a=Product.objects.filter(id=mid).values()
    b = Product.objects.order_by('?')[:5].values('name','image','id')
    context={
        'prod':a,
        'similar':b
    }
    return render(request, 'prodpage.html', context)

def cart(request ):
    return render(request,'cart.html')



def checkout(request):
    if request.method == 'POST':
        form = Order(request.POST)
        if form:
            
            name = request.POST['name']
            email = request.POST['email']
            phone = request.POST['number']
            address = request.POST['address1']+" , "+request.POST['address2']+" , "+request.POST['address3']
            order = request.POST.get('order')
            amount = request.POST.get('orderamt')


            Order.objects.create(name=name, email=email, phone=phone, address=address ,order=order,amount=amount)

  
            return redirect(confirm)

    else:
        form = Order()

    return render(request, 'checkout.html', {'form': form})


def confirm(request):
    return render(request,'confirm.html')