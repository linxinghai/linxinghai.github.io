from django.shortcuts import render,HttpResponse,redirect
import uuid
import os
import json

# Create your views here.

def upload(request):
    if request.method=="GET":
        return render(request,"upload.html")
    else:
        dic={'status':True,'path':None,'message':None}
        img=request.FILES.get("img")
        uid=str(uuid.uuid4())
        file_path=os.path.join("static",uid+img.name)
        f=open(file_path,"wb")
        for i in img.chunks():
            f.write(i)
        f.close()
        dic["path"]=file_path
        dic["message"]="上传成功！"
    return HttpResponse(json.dumps(dic))