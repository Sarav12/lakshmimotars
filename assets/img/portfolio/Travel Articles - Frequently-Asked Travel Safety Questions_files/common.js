function findObj(n, d) { //v4.01
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function previousPage() {
	history.go(-1);
}
function trim(str) {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
}
function formatUpperCase(obj){
obj.value = obj.value.toUpperCase();
}
function formatLowerCase(obj){
obj.value = obj.value.toLowerCase();
}
function searchSite(strField, strCategory, strType) {
	document.location.href = "/search/?q=" + findObj(strField).value + "&c=" + strCategory + "&t=" + strType;
	return false;
}
function clearField(obj) {
	if (obj.value == "Search") {
		obj.value = "";
	} else if (obj.value == "") {
		obj.value = "Search";
	}
}