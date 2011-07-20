/**
 * @author Eric
 */

var image_n = 0;
function fondu() {
	if (document.all) {
		document.getElementById("image_" + ImagePosChange).filters.alpha.opacity = image_n; //ie
		image_n += 5;
		if (image_n <= 30) {
			setTimeout("fondu()", 30);
			return 0;
		}
	} else {
		document.getElementById("image_" + ImagePosChange).style.setProperty(
				"opacity", image_n, ""); // FF
		image_n += 0.05;
		if (image_n <= 1) {
			setTimeout("fondu()", 30);
			return 0;
		}
	}
	image_n = 0;
	document.getElementById("image").style.background = "url('resource/"
			+ tab[ImagePosChange][0] + "') 0px 0px no-repeat";
	setTimeout("changer()", 30); 
}
function changer() {
	document.getElementById("image").innerHTML = "";
	setTimeout("enchainement()", 4000);
}
var ImagePos = 0;
var ImagePosChange;
function enchainement() {
	ImagePosChange = ImagePos;
	ImagePos++;
	if (tab.length <= ImagePos)
		ImagePos = 0;

	if (tab[ImagePosChange][1] == 1)
		document.getElementById("image").innerHTML += "<img src='resource/"
				+ tab[ImagePosChange][0]
				+ "' id='image_"
				+ ImagePosChange
				+ "' style='filter:alpha(opacity=0); opacity:0; position: absolute; ' />";
	else {
		setTimeout("enchainement()", 10);
		return 0;
	}
	fondu();
}

var tab = [ [ "image_1.jpg", 1 ], [ "image_2.jpg", 1 ],
		[ "image_3.jpg", 1 ], [ "image_4.jpg", 1 ], [ "image_5.jpg", 1 ]];
enchainement();