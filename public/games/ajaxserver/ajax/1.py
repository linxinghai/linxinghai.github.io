from django.shortcuts import render,HttpResponse,redirect
import uuid
import os
import json

# Create your views here.
def ajax(request):
    print("get请求：",request.GET)
    print("post请求：",request.POST)
    # print("请求体：",request.body)
    print(request.FILES)
    ret={'status':True,'message':'ok!'}
    file=request.FILES.get("k3")
    f=open(file.name,"wb")
    for i in file.chunks():
        f.write(i)
    f.close()

    return HttpResponse(json.dumps(ret))

def index(request):
    return render(request,"index.html")