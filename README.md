#<a href='http://vxst.github.io/imguploader.js'>imguploader.js</a>

imguploader.js is all you need to upload an image to broswer and show it to users!

A client side js script to upload an image, compress it, transform it to Data URI, or to an image element

##function list

###function compressimgtourl(img,maxwidth,maxheight,callback)

 * img: a HTML Image Object
 * maxwidth, maxheight: the max size of image it should compress to
 * callback: function(dataurl)

Compress an big image object to a smaller one and return DataURI

###function fileuploadurl(file,maxwidth,maxheight,callback)

 * file: a HTML File Object
 * maxwidth, maxheight: the max size of image it should compress to
 * callback: function(dataurl)

Upload an file and compress it to a smaller one. Return DataURI when finished.

###function fileuploadimg(file,maxwidth,maxheight,callback)

 * file: a HTML File Object
 * maxwidth, maxheight: the max size of image it should compress to
 * callback: function(img)

Upload an file and compress it to a smaller one. Return Image Object when finished.

##Sample code

    fileuploadimg(document.getElementById('input').files,
    	function(img){
    		document.getElementsByTagName('body')[0].appendChild(img);
    	}
    );

