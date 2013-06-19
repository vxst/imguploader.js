function compressimgtobase64(img,maxwidth,maxheight,callback){
	var twidth=img.width,theight=img.height;
	if(twidth>maxwidth){
		twidth=maxwidth;theight=twidth*img.height/img.width;
	}
	if(theight>maxheight){
		theight=maxheight;twidth=theight*img.width/img.height;
	}
	var canvas = document.createElement("canvas");
	canvas.width = twidth;
	canvas.height = theight;

	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0,twidth,theight);
	ctx.fillRect(0,0,0,0);

	callback(canvas.toDataURL());
}
function fileuploadurl(file,maxwidth,maxheight,callback){
	var imageReader = new FileReader();
	imageReader.readAsDataURL(file[0]);
	imageReader.onload=function(e){
		var img=new Image();
		img.src=e.target.result;
		img.onload=function(){
			compressimgtobase64(img,maxwidth,maxheight,function(txt){
				callback(txt);
			});
		}
	};
}
function fileuploadimg(file,maxwidth,maxheight,callback){
	fileuploadurl(file,maxwidth,maxheight,function(txt){
		var img=Image();
		img.src=txt;
		img.onload=function(){
			callback(img);
		}
	});
}
