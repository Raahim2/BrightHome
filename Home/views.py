from django.shortcuts import render , redirect
from .models import Product
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import login , logout , authenticate
from .models import Order


# Create your views here.
def index(request):
    return render(request,'index.html')

def UserLogin(request):
    messege=""
    
    
    
    if request.method=="POST":
        username = request.POST.get("Username")
        password = request.POST.get("Password")
        
        user = authenticate(username = username , password = password)

        if user is not None:
            login(request , user)
            return redirect("/")
        else :
            messege="Incorrect Username or Password!"
            return render(request,'login.html',{'messege': messege})
        
   
        
    return render(request,'login.html',{'messege': messege})
    


def UserLogout(request):
    logout(request)
    return render(request,'login.html')

def SignUp(request):

      if request.method=="POST":
        username = request.POST.get("Username")
        password = request.POST.get("Password")
        print(username , password)

        User.objects.create_user(username=username , password=password)
        user = authenticate(request, username=username, password=password)
        login(request, user)
        return redirect("/")

    
      return render(request,'signup.html')

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
    if request.user.is_anonymous:
        return redirect("UserLogin")

    a=Product.objects.filter(id=mid).values()
    b = Product.objects.order_by('?')[:5].values('name','image','id')
    context={
        'prod':a,
        'similar':b
    }
    return render(request, 'prodpage.html', context)

def cart(request ):
    if request.user.is_anonymous:
        return redirect("UserLogin")
    return render(request,'cart.html')

def checkout(request):
    if request.user.is_anonymous:
        return redirect("UserLogin")
    name = request.user.username

    if request.method == 'POST':
        

        form = Order(request.POST)
        if form:
            email = request.POST['email']
            phone = request.POST['number']
            address = request.POST['address1']+" , "+request.POST['address2']+" , "+request.POST['address3']
            order = request.POST.get('order')
            amount = request.POST.get('orderamt')


            Order.objects.create(name=name, email=email, phone=phone, address=address ,order=order,amount=amount)

  
            return redirect(confirm)

    else:
        form = Order()

    return render(request, 'checkout.html', {'username': name})

def confirm(request):
    if request.user.is_anonymous:
        return redirect("UserLogin")
    return render(request,'confirm.html')


