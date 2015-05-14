/**
  *By starriness in 5/13/2015
**/

function css(obj,attr,val) {
	if (obj.nodeType != 1) {return};
	var attr = attr.replace(/^\s+|\s+$/g,"");
	if (arguments.length==2) {
		if (attr == 'opacity') {
			return 100*parseInt(obj.currentStyle?(obj.currentStyle[attr]||1):(getComputedStyle(obj,null)[attr]||1))
		};
		if (attr == 'width' || attr == 'height' || attr == 'top' || attr == 'top') {
			var str = 'offset' + attr.replace(attr.charAt(0),attr.charAt(0).toUpperCase());
			return obj[str];
		};

		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];
	};
	if (arguments.length==3) {
		switch(attr){
			case 'width':
			case 'height':
			case 'top':
			case 'left':
			obj.style[attr]=val+'px';
			break;
			case 'opacity':
			obj.style.filter = 'alpha(opacity='+val+')';
			obj.style[attr]=val/100;
			break;
			default:
			obj.style[attr]=val;
		}
	};
}