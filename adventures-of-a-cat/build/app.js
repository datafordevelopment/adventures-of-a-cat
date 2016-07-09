!function(e,r){function t(e,r,t){return Object.defineProperty?Object.defineProperty(e,r,t):(e[r]=t.value,e)}function n(r){if(r&&"string"==typeof r){if(a.hasOwnProperty(r))return a[r]
var n,o,s,f,_,request=u.request,c=i[r]
if(!c)throw new Error('Could not find module "'+r+'"')
if(!(c instanceof Array))throw"object"==typeof c&&(c.source||c.style)?new Error('Attempt to require an asynchronous module "'+r+'"'):"string"==typeof c?new Error('Attempt to require a bundle entry "'+r+'"'):new Error('The shared module manifest has been corrupted, the module is invalid "'+r+'"')
if(n=c[0],o=c[1],"function"!=typeof n)throw new Error('The shared module manifest has been corrupted, the module is invalid "'+r+'"')
return s={exports:{}},request&&(o?(f=function(e){return request(o.hasOwnProperty(e)?o[e]:e)},t(f,"isRequest",{value:request.isRequest})):f=request),_=o?function(e){return require(o.hasOwnProperty(e)?o[e]:e)}:require,n(s,s.exports,e,_,f),a[r]=s.exports}}var o,u=e.enyo||(e.enyo={}),i=u.__manifest__||t(u,"__manifest__",{value:{}})&&u.__manifest__,a=u.__exported__||t(u,"__exported__",{value:{}})&&u.__exported__,require=u.require||t(u,"require",{value:n})&&u.require,s=r()
o=null,s&&Object.keys(s).forEach(function(e){var r=s[e];(!i.hasOwnProperty(e)||r&&r instanceof Array)&&(i[e]=r)}),o&&o.forEach&&o.forEach(function(e){require(e)})}(this,function(){return{}})

!function(t,e){function n(t,e,n){return Object.defineProperty?Object.defineProperty(t,e,n):(t[e]=n.value,t)}function i(e){if(e&&"string"==typeof e){if(a.hasOwnProperty(e))return a[e]
var i,r,u,c,l,request=o.request,h=s[e]
if(!h)throw new Error('Could not find module "'+e+'"')
if(!(h instanceof Array))throw"object"==typeof h&&(h.source||h.style)?new Error('Attempt to require an asynchronous module "'+e+'"'):"string"==typeof h?new Error('Attempt to require a bundle entry "'+e+'"'):new Error('The shared module manifest has been corrupted, the module is invalid "'+e+'"')
if(i=h[0],r=h[1],"function"!=typeof i)throw new Error('The shared module manifest has been corrupted, the module is invalid "'+e+'"')
return u={exports:{}},request&&(r?(c=function(t){return request(r.hasOwnProperty(t)?r[t]:t)},n(c,"isRequest",{value:request.isRequest})):c=request),l=r?function(t){return require(r.hasOwnProperty(t)?r[t]:t)}:require,i(u,u.exports,t,l,c),a[e]=u.exports}}var r,o=t.enyo||(t.enyo={}),s=o.__manifest__||n(o,"__manifest__",{value:{}})&&o.__manifest__,a=o.__exported__||n(o,"__exported__",{value:{}})&&o.__exported__,require=o.require||n(o,"require",{value:i})&&o.require,u=e()
r=["index"],u&&Object.keys(u).forEach(function(t){var e=u[t];(!s.hasOwnProperty(t)||e&&e instanceof Array)&&(s[t]=e)}),r&&r.forEach&&r.forEach(function(t){require(t)})}(this,function(){return{"enyo/options":[function(t,e,n,require,request){"use strict"
t.exports=n.enyo&&n.enyo.options||{}}],enyo:[function(t,e,n,require,request){"use strict"
e=t.exports=require("./src/options"),e.version="2.7.0"},{"./src/options":"enyo/options"}],"enyo/json":[function(t,e,n,require,request){require("enyo"),t.exports={stringify:function(t,e,n){return JSON.stringify(t,e,n)},parse:function(t,e){return t?JSON.parse(t,e):null}}}],"enyo/utils":[function(t,e,n,require,request){require("enyo"),Function.prototype.bind||(Function.prototype.bind=function(t){var e,n=Array.prototype.slice.call(arguments,1),i=this,r=function(){}
if("function"!=typeof this)throw new TypeError("Function.prototype.bind called on non-callable object.")
return e=function(){var e=n.concat(Array.prototype.slice.call(arguments)),o=this instanceof r&&t?this:t
return i.apply(o,e)},r.prototype=this.prototype,e.prototype=new r,e}),e.Extensible=function t(e){if(!(this instanceof t))return new t(e)
this.fn=e
var n=function(){return this.fn.apply(this,arguments)}.bind(this)
return n.extend=function(t){this.fn=t(this.fn)}.bind(this),n},e.nop=function(){},e.nob={},e.nar=[]
var i=e.instance=function(){},r=e.setPrototype=function(t,e){t.prototype=e}
e.delegate=function(t){return r(i,t),new i}
var o=e.exists=function(t){return void 0!==t},s=0
e.uid=function(t){return String((t?t:"")+s++)},e.uuid=function(){var t,e=Math.random().toString(16).substr(2,8)+"-"+(t=Math.random().toString(16).substr(2,8)).substr(0,4)+"-"+t.substr(4,4)+(t=Math.random().toString(16).substr(2,8)).substr(0,4)+"-"+t.substr(4,4)+Math.random().toString(16).substr(2,8)
return e},e.irand=function(t){return Math.floor(Math.random()*t)}
var a=Object.prototype.toString
e.isString=function(t){return"[object String]"===a.call(t)},e.isFunction=function(t){return"[object Function]"===a.call(t)}
var u=e.isArray=Array.isArray||function(t){return"[object Array]"===a.call(t)}
e.isObject=Object.isObject||function(t){return"[object Object]"===a.call(t)},e.isTrue=function(t){return!("false"===t||t===!1||0===t||null===t||void 0===t)},e.isNumeric=function(t){return!u(t)&&t-parseFloat(t)+1>=0}
var c=e.bind=function(t,e){if(e||(e=t,t=null),t=t||n,"string"==typeof e){if(!t[e])throw'enyo.bind: scope["'+e+'"] is null (scope="'+t+'")'
e=t[e]}if("function"==typeof e){var i=m(arguments,2)
return e.bind?e.bind.apply(e,[t].concat(i)):function(){var n=m(arguments)
return e.apply(t,i.concat(n))}}throw'enyo.bind: scope["'+e+'"] is not a function (scope="'+t+'")'}
e.bindSafely=function(t,e){if("string"==typeof e){if(!t[e])throw'enyo.bindSafely: scope["'+e+'"] is null (this="'+this+'")'
e=t[e]}if("function"==typeof e){var n=m(arguments,2)
return function(){if(!t.destroyed){var i=m(arguments)
return e.apply(t,n.concat(i))}}}throw'enyo.bindSafely: scope["'+e+'"] is not a function (this="'+this+'")'},e.asyncMethod=function(t,e){return e?setTimeout(c.apply(t,arguments),1):setTimeout(t,1)},e.call=function(t,e,n){var i=t||this
if(e){var r=i[e]||e
if(r&&r.apply)return r.apply(i,n||[])}}
var l=e.now=Date.now||function(){return(new Date).getTime()}
e.perfNow=function(){var t=window.performance||{}
return t.now=t.now||t.mozNow||t.msNow||t.oNow||t.webkitNow||l,function(){return t.now()}}()
var h=e.getPath=function(t){if(!t&&null!==t&&void 0!==t)return t
var e,n,i,r,o=this
if("."==t[0]&&(t=t.replace(/^\.+/,"")),t){e=t.split("."),n=e.shift()
do r=o,o=o._getters&&(i=o._getters[n])&&!i.generated?o[i]():o.get&&o!==this&&o.get!==h?o.get(n):o[n]
while(o&&(n=e.shift()))
return o}}
h.fast=function(t){var e,n,i=this
return n=i._getters&&(e=i._getters[t])?i[e]():i[t]}
var d=e.setPath=function(t,e,n){if(!t||!t&&null!==t&&void 0!==t)return this
var i,r,o,s,a,u,c,l=this,f={create:!0,silent:!1,force:!1},p=l
if("object"==typeof n?n=y({},[f,n]):(s=n,n=f),n.force&&(s=!0),u=n.silent,a=n.create,c=n.comparator,"."==t[0]&&(t=t.replace(/^\.+/,"")),!t)return l
i=t.split("."),r=i.shift()
do if(i.length){if(l!==p&&l.set&&l.set!==d)return i.unshift(r),l.set(i.join("."),e,n),p
l=l!==p&&l.get?(l.get!==h?l.get(r):l[r])||a&&(l[r]={}):l[r]||a&&(l[r]={})}else o=l.get&&l.get!==h?l.get(r):l[r]
while(l&&i.length&&(r=i.shift()))
return l?l!==p&&l.set&&l.set!==d?(l.set(r,e,n),p):(l[r]=e,l.notify&&!u&&(s||o!==e||c&&c(o,e))&&l.notify(r,o,e,n),p):p}
d.fast=function(t,e){var n,i,r=this
return r._computed&&void 0!==r._computed[t]?r:(n=r._getters&&(i=r._getters[t])?r[i]():r[t],r[t]=e,n!==e&&r.notifyObservers(t,n,e),r)},e.toUpperCase=new e.Extensible(function(t){return null!=t?t.toString().toUpperCase():t}),e.toLowerCase=new e.Extensible(function(t){return null!=t?t.toString().toLowerCase():t}),e.cap=function(t){return t.slice(0,1).toUpperCase()+t.slice(1)},e.uncap=function(t){return t.slice(0,1).toLowerCase()+t.slice(1)},e.format=function(t){var e,n=/\%./g,i=0,r=t,o=arguments
return e=function(){return o[++i]},r.replace(n,e)},String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},e.trim=function(t){return"string"==typeof t&&t.trim()||t},Object.create=Object.create||function(){var t=function(){}
return function(e){if(!e||null===e||"object"!=typeof e)throw"Object.create: Invalid parameter"
return t.prototype=e,new t}}(),Object.keys=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty
for(var i in t)n.call(t,i)&&e.push(i)
return e},e.keys=Object.keys,e.only=function(t,e,n){var i,r,o,s={}
for(o=0,r=t.length>>>0;o<r;++o)i=t[o],(!n||void 0!==e[i]&&null!==e[i])&&(s[i]=e[i])
return s},e.remap=function(t,e,n){var i,r=n?f(e):{}
for(i in t)i in e&&(r[t[i]]=e.get?e.get(i):e[i])
return r},e.indexBy=function(t,e,n){var i,r,s={},a=0
if(!(o(e)&&e instanceof Array))return s
if(!o(t)||"string"!=typeof t)return s
var u=f(e)
for(n=o(n)&&"function"==typeof n?n:void 0,r=e.length;a<r;++a)i=e[a],o(i)&&o(i[t])&&(n?n(t,i,s,u):s[i[t]]=i)
return s}
var f=e.clone=function(t,e){if(t){if(t instanceof Array)return t.slice()
if(t instanceof Object)return e?Object.create(t):y({},t)}return t},p={},g={exists:!1,ignore:!1,filter:null},y=e.mixin=function(){var t,e=arguments[0],n=arguments[1],i=arguments[2]
if(e?e instanceof Array&&(i=n,n=e,e={}):e={},i&&i!==!0||(i=g),n instanceof Array)for(var r,o=0;r=n[o];++o)y(e,r,i)
else for(var s in n)t=n[s],p[s]!==t&&(i.exists&&!t||i.ignore&&e[s]||i.filter&&!i.filter(s,t,n,e,i)||(e[s]=t))
return e}
e.values=function(t){var e=[]
for(var n in t)t.hasOwnProperty(n)&&e.push(t[n])
return e},Array.prototype.findIndex=Array.prototype.findIndex||function(t,e){for(var n=0,i=this.length>>>0;n<i;++n)if(t.call(e,this[n],n,this))return n
return-1},Array.prototype.find=Array.prototype.find||function(t,e){for(var n=0,i=this.length>>>0;n<i;++n)if(t.call(e,this[n],n,this))return this[n]},e.indexOf=function(t,e,n){return t instanceof Array?t.indexOf(e,n):e.indexOf(t,n)},e.lastIndexOf=function(t,e,n){return t instanceof Array?t.lastIndexOf(e,n):e.lastIndexOf(t,n)},e.findIndex=function(t,e,n){return t.findIndex(e,n)}
var v=e.find=function(t,e,n){return t.find(e,n)}
e.where=v,e.forEach=function(t,e,n){return t.forEach(e,n)},e.map=function(t,e,n){return t.map(e,n)},e.filter=function(t,e,n){return t.filter(e,n)},e.pluck=function(t,e){if(!(t instanceof Array)){var n=t
t=e,e=n}for(var i=[],r=0,o=t.length>>>0;r<o;++r)i.push(t[r]?t[r][e]:void 0)
return i},e.merge=function(){for(var t=[],e=Array.prototype.concat.apply([],arguments),n=0,i=e.length>>>0;n<i;++n)~t.indexOf(e[n])||t.push(e[n])
return t}
var m=e.cloneArray=function(t,e,n){for(var i=n||[],r=e||0,o=t.length;r<o;r++)i.push(t[r])
return i}
e.toArray=m,e.remove=function(t,e){if(!(t instanceof Array)){var n=t
t=e,e=n}var i=t.indexOf(e)
return-1<i&&t.splice(i,1),t}
var b=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFE\u0590-\u05FF\uFB1D-\uFB4F]/
e.isRtl=function(t){return b.test(t)}}],"enyo/roots":[function(t,e,n,require,request){function i(t){r.forEach(function(e){e.method.call(e.context,t)})}require("enyo")
var r=[],o=[]
e.rendered=function(t,e){r.push({method:t,context:e||n})},e.roots=o,e.addToRoots=function(t){var e,n
o.indexOf(t)===-1&&(o.push(t),e=t.rendered,n=t.destroy,t.rendered=function(){e.apply(this,arguments),i(this)},t.destroy=function(){var t=o.indexOf(this)
t>-1&&o.splice(t,1),n.apply(this,arguments)})}}],"enyo/ready":[function(t,e,n,require,request){require("enyo")
var i,r,o,s,a,u=n.document,c=[],l="complete"===u.readyState,h=!1
t.exports=function(t,e){c.push([t,e]),l&&!h&&(setTimeout(a,0),h=!0)},i=function(t,e){t.call(e||n)},r=function(t){(l="interactive"===u.readyState)&&"DOMContentLoaded"!==t.type&&"readystatechange"!==t.type&&(o(t.type,r),a()),(l="complete"===u.readyState||"loaded"===u.readyState)&&(o(t.type,r),a())},s=function(t,e){u.addEventListener(t,e,!1)},o=function(t,e){u.removeEventListener(t,e,!1)},a=function(){if(l&&c.length)for(;c.length;)i.apply(n,c.shift())
h=!1},s("DOMContentLoaded",r),s("readystatechange",r)}],"enyo/platform":[function(t,e,n,require,request){require("enyo")
var i=require("./utils")
e=t.exports={touch:Boolean("ontouchstart"in window||window.navigator.msMaxTouchPoints||window.navigator.msManipulationViewsEnabled&&window.navigator.maxTouchPoints),gesture:Boolean("ongesturestart"in window||"onmsgesturestart"in window&&(window.navigator.msMaxTouchPoints>1||window.navigator.maxTouchPoints>1))}
for(var r,o,s,a=navigator.userAgent,u=e,c=[{platform:"windowsPhone",regex:/Windows Phone (?:OS )?(\d+)[.\d]+/},{platform:"androidChrome",regex:/Android .* Chrome\/(\d+)[.\d]+/},{platform:"android",regex:/Android(?:\s|\/)(\d+)/},{platform:"android",regex:/Silk\/1./,forceVersion:2,extra:{silk:1}},{platform:"android",regex:/Silk\/2./,forceVersion:4,extra:{silk:2}},{platform:"android",regex:/Silk\/3./,forceVersion:4,extra:{silk:3}},{platform:"ie",regex:/MSIE (\d+)/},{platform:"ie",regex:/Trident\/.*; rv:(\d+)/},{platform:"edge",regex:/Edge\/(\d+)/},{platform:"ios",regex:/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/},{platform:"webos",regex:/(?:web|hpw)OS\/(\d+)/},{platform:"webos",regex:/WebAppManager|Isis|webOS\./,forceVersion:4},{platform:"webos",regex:/LuneOS/,forceVersion:4,extra:{luneos:1}},{platform:"safari",regex:/Version\/(\d+)[.\d]+\s+Safari/},{platform:"chrome",regex:/Chrome\/(\d+)[.\d]+/},{platform:"androidFirefox",regex:/Android;.*Firefox\/(\d+)/},{platform:"firefoxOS",regex:/Mobile;.*Firefox\/(\d+)/},{platform:"firefox",regex:/Firefox\/(\d+)/},{platform:"blackberry",regex:/PlayBook/i,forceVersion:2},{platform:"blackberry",regex:/BB1\d;.*Version\/(\d+\.\d+)/},{platform:"tizen",regex:/Tizen (\d+)/}],l=0;r=c[l];l++)if(o=r.regex.exec(a)){s=r.forceVersion?r.forceVersion:Number(o[1]),u[r.platform]=s,r.extra&&i.mixin(u,r.extra),u.platformName=r.platform
break}},{"./utils":"enyo/utils"}],"enyo/logger":[function(t,e,n,require,request){require("enyo")
var i=require("./json"),r=require("./utils"),o=require("./platform"),s=Boolean(o.android||o.ios||o.webos)
e=t.exports={level:99,levels:{log:20,warn:10,error:0},shouldLog:function(t){var e=parseInt(this.levels[t],0)
return e<=this.level},validateArgs:function(t){for(var e,n=0,r=t.length;(e=t[n])||n<r;n++)try{"object"==typeof e&&(t[n]=i.stringify(e))}catch(e){t[n]="Error: "+e.message}},_log:function(t,e){var i=n.console
if("undefined"!=typeof i){var a=r.isArray(e)?e:r.cloneArray(e)
o.androidFirefox&&this.validateArgs(a),s&&(a=[a.join(" ")])
var u=i[t]
u&&u.apply?u.apply(i,a):i.log.apply?i.log.apply(i,a):i.log(a.join(" "))}},log:function(t,e){"log"!=t&&"warn"!=t&&"error"!=t&&(e=Array.prototype.slice.call(arguments),t="log")
var i=n.console
"undefined"!=typeof i&&this.shouldLog(t)&&this._log(t,e)}},e.setLogLevel=function(t){var e=parseInt(t,0)
isFinite(e)&&(this.level=e)},e.warn=function(){this.log("warn",arguments)},e.error=function(){this.log("error",arguments)}},{"./json":"enyo/json","./utils":"enyo/utils","./platform":"enyo/platform"}],"enyo/dom":[function(t,e,n,require,request){require("enyo")
var i=require("./roots"),r=require("./utils"),o=require("./platform"),s=t.exports={byId:function(t,e){return"string"==typeof t?(e||document).getElementById(t):t},escape:function(t){return null!==t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""},getBounds:function(t){return t?{left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}:null},getComputedStyle:function(t){return n.getComputedStyle&&t&&n.getComputedStyle(t,null)},getComputedStyleValue:function(t,e,n){var i=n||this.getComputedStyle(t),r=o.ie
if(i=i?i.getPropertyValue(e):null,r){var s={thin:"2px",medium:"4px",thick:"6px",none:"0"}
if("undefined"!=typeof s[i]&&(i=s[i]),"auto"==i)switch(e){case"width":i=t.offsetWidth
break
case"height":i=t.offsetHeight}}return i},getFirstElementByTagName:function(t){var e=document.getElementsByTagName(t)
return e&&e[0]},applyBodyFit:function(){var t=this.getFirstElementByTagName("html")
t&&this.addClass(t,"enyo-document-fit"),s.addBodyClass("enyo-body-fit"),s.bodyIsFitting=!0},getWindowWidth:function(){return n.innerWidth?n.innerWidth:document.body&&document.body.offsetWidth?document.body.offsetWidth:"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetWidth?document.documentElement.offsetWidth:320},getWindowHeight:function(){return n.innerHeight?n.innerHeight:document.body&&document.body.offsetHeight?document.body.offsetHeight:"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetHeight?document.documentElement.offsetHeight:480},_bodyScaleFactorY:1,_bodyScaleFactorX:1,updateScaleFactor:function(){var t=this.getBounds(document.body)
this._bodyScaleFactorY=t.height/this.getWindowHeight(),this._bodyScaleFactorX=t.width/this.getWindowWidth()},getComputedBoxValue:function(t,e,n,i){var r=i||this.getComputedStyle(t)
if(r){var o=r.getPropertyValue(e+"-"+n)
return"auto"===o?0:parseInt(o,10)}return 0},calcBoxExtents:function(t,e){var n=this.getComputedStyle(t)
return{top:this.getComputedBoxValue(t,e,"top",n),right:this.getComputedBoxValue(t,e,"right",n),bottom:this.getComputedBoxValue(t,e,"bottom",n),left:this.getComputedBoxValue(t,e,"left",n)}},calcPaddingExtents:function(t){return this.calcBoxExtents(t,"padding")},calcMarginExtents:function(t){return this.calcBoxExtents(t,"margin")},calcNodePosition:function(t,e){var i=0,r=0,o=t,a=o.offsetWidth,u=o.offsetHeight,c=s.getStyleTransformProp(),l=/translateX\((-?\d+)px\)/i,h=/translateY\((-?\d+)px\)/i,d=0,f=0,p=0,g=0,y=0,v=0
if(e?(p=e.offsetHeight,g=e.offsetWidth):(p=document.body.parentNode.offsetHeight>this.getWindowHeight()?this.getWindowHeight()-document.body.parentNode.scrollTop:document.body.parentNode.offsetHeight,g=document.body.parentNode.offsetWidth>this.getWindowWidth()?this.getWindowWidth()-document.body.parentNode.scrollLeft:document.body.parentNode.offsetWidth),o.offsetParent)do e&&e.compareDocumentPosition(o.offsetParent)&Node.DOCUMENT_POSITION_CONTAINS&&(y=e.offsetLeft,v=e.offsetTop),r+=o.offsetLeft-(o.offsetParent?o.offsetParent.scrollLeft:0)-y,c&&l.test(o.style[c])&&(r+=parseInt(o.style[c].replace(l,"$1"),10)),i+=o.offsetTop-(o.offsetParent?o.offsetParent.scrollTop:0)-v,c&&h.test(o.style[c])&&(i+=parseInt(o.style[c].replace(h,"$1"),10)),o!==t&&(n.getComputedStyle?(d=parseInt(n.getComputedStyle(o,"").getPropertyValue("border-left-width"),10),f=parseInt(n.getComputedStyle(o,"").getPropertyValue("border-top-width"),10)):(d=parseInt(o.style.borderLeftWidth,10),f=parseInt(o.style.borderTopWidth,10)),d&&(r+=d),f&&(i+=f))
while((o=o.offsetParent)&&(!e||e.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY))
return{top:i,left:r,bottom:p-i-u,right:g-r-a,height:u,width:a}},removeNode:function(t){t.parentNode&&t.parentNode.removeChild(t)},setInnerHtml:function(t,e){t.innerHTML=e},hasClass:function(t,e){if(t&&e&&t.className)return(" "+t.className+" ").indexOf(" "+e+" ")>=0},addClass:function(t,e){if(t&&e&&!this.hasClass(t,e)){var n=t.className
t.className=n+(n?" ":"")+e}},removeClass:function(t,e){if(t&&e&&this.hasClass(t,e)){var n=t.className
t.className=(" "+n+" ").replace(" "+e+" "," ").slice(1,-1)}},addBodyClass:function(t){r.exists(i.roots)&&0!==i.roots.length?s.addClass(document.body,t):s._bodyClasses?s._bodyClasses.push(t):s._bodyClasses=[t]},getAbsoluteBounds:function(t){return r.clone(t.getBoundingClientRect())},flushBodyClasses:function(){if(s._bodyClasses){for(var t,e=0;t=s._bodyClasses[e];++e)s.addClass(document.body,t)
s._bodyClasses=null}},_bodyClasses:null,unit:function(t,e){if(e&&this.unitToPixelFactors[e]&&("string"==typeof t&&"px"==t.substr(-2)&&(t=parseInt(t.substr(0,t.length-2),10)),"number"==typeof t))return t/this.unitToPixelFactors[e]+""+e},unitToPixelFactors:{rem:12,in:96}}
"undefined"!=typeof n.MSApp&&"undefined"!=typeof n.MSApp.execUnsafeLocalFunction&&(s.setInnerHtml=function(t,e){n.MSApp.execUnsafeLocalFunction(function(){t.innerHTML=e})}),document.head&&document.head.classList&&(s.hasClass=function(t,e){if(t)return t.classList.contains(e)},s.addClass=function(t,e){if(t)return t.classList.add(e)},s.removeClass=function(t,e){if(t)return t.classList.remove(e)}),s.requiresWindow=function(t){t()}
var a=["transform","-webkit-transform","-moz-transform","-ms-transform","-o-transform"],u=["transform","webkitTransform","MozTransform","msTransform","OTransform"]
s.calcCanAccelerate=function(){if(o.android<=2)return!1
for(var t,e=["perspective","WebkitPerspective","MozPerspective","msPerspective","OPerspective"],n=0;t=e[n];n++)if("undefined"!=typeof document.body.style[t])return!0
return!1},s.getCssTransformProp=function(){if(this._cssTransformProp)return this._cssTransformProp
var t=r.indexOf(this.getStyleTransformProp(),u)
return this._cssTransformProp=a[t],this._cssTransformProp},s.getStyleTransformProp=function(){if(this._styleTransformProp||!document.body)return this._styleTransformProp
for(var t,e=0;t=u[e];e++)if("undefined"!=typeof document.body.style[t])return this._styleTransformProp=t,this._styleTransformProp},s.domTransformsToCss=function(t){var e,n,i=""
for(e in t)n=t[e],null!==n&&void 0!==n&&""!==n&&(i+=e+"("+n+") ")
return i},s.transformsToDom=function(t){var e,n=this.domTransformsToCss(t.domTransforms)
e=t.hasNode()?this.getStyleTransformProp():this.getCssTransformProp(),e&&t.applyStyle(e,n)},s.canTransform=function(){return Boolean(this.getStyleTransformProp())},s.canAccelerate=function(){return void 0!==this.accelerando?this.accelerando:document.body&&(this.accelerando=this.calcCanAccelerate())},s.transform=function(t,e){var n=t.domTransforms=t.domTransforms||{}
r.mixin(n,e),this.transformsToDom(t)},s.transformValue=function(t,e,n){var i=t.domTransforms=t.domTransforms||{}
i[e]=n,this.transformsToDom(t)},s.accelerate=function(t,e){var n="auto"==e?this.canAccelerate():e
this.transformValue(t,"translateZ",n?0:null)},s.transition=o.ios||o.android||o.chrome||o.androidChrome||o.safari?"-webkit-transition":o.firefox||o.firefoxOS||o.androidFirefox?"-moz-transition":"transition"},{"./roots":"enyo/roots","./utils":"enyo/utils","./platform":"enyo/platform"}],"enyo/kind":[function(t,e,n,require,request){require("enyo")
var i=require("./logger"),r=require("./utils"),o=null,s=e=t.exports=function(t){var e=t.name||""
delete t.name
var n="kind"in t,i=t.kind
delete t.kind
var o=d(i),a=o&&o.prototype||null
if(n&&void 0===i||void 0===o){var u=void 0===i?"undefined kind":"unknown kind ("+i+")"
throw"enyo.kind: Attempt to subclass an "+u+". Check dependencies for ["+(e||"<unnamed>")+"]."}var c=s.makeCtor()
return t.hasOwnProperty("constructor")&&(t._constructor=t.constructor,delete t.constructor),r.setPrototype(c,a?r.delegate(a):{}),s.concatHandler(c,t),r.mixin(c.prototype,t),e?c.prototype.kindName=e:c.prototype.kindName=o&&o.prototype?o.prototype.kindName:"",c.prototype.base=o,c.prototype.ctor=c,r.forEach(s.features,function(e){e(c,t)}),e&&(h[e]=c),c}
e.setDefaultCtor=function(t){o=t}
var a=e.getDefaultCtor=function(){return o},u=e.concatenated=[]
e.singleton=function(t){delete t.name
var e=s(t),n=new e
return n},s.makeCtor=function(){var t=function(){if(!(this instanceof t))throw'enyo.kind: constructor called directly, not using "new"'
var e
if(this._constructor&&(e=this._constructor.apply(this,arguments)),this.constructed&&this.constructed.apply(this,arguments),e)return e}
return t},s.features=[],s.extendMethods=function(t,e,n){var i=t.prototype||t,o=i.base
!i.inherited&&o&&(i.inherited=s.inherited),e.hasOwnProperty("constructor")&&(e._constructor=e.constructor,delete e.constructor)
for(var a in e){var u=e[a]
l(u)&&(u=n?i[a]=u.fn(i[a]||r.nop):i[a]=u.fn(o?o.prototype[a]||r.nop:r.nop)),r.isFunction(u)&&(n?(i[a]=u,u.displayName=a+"()"):(u._inherited=o?o.prototype[a]:null,u.displayName=i.kindName+"."+a+"()"))}},s.features.push(s.extendMethods),s.inherited=function(t,e){var n=t.callee,r=n._inherited
if("function"==typeof r){var o=t
if(e){o=[]
for(var s=0,a=e.length;s<a;++s)o[s]=e[s]
for(a=t.length;s<a;++s)o[s]=t[s]}return r.apply(this,o)}i.warn("enyo.kind.inherited: unable to find requested super-method from -> "+t.callee.displayName+" in "+this.kindName)}
var c=function(t){this.fn=t}
e.inherit=function(t){return new c(t)}
var l=e.isInherited=function(t){return t&&t instanceof c}
s.features.push(function(t,e){t.subclass||(t.subclass=s.statics.subclass),t.extend||(t.extend=s.statics.extend),t.kind||(t.kind=s.statics.kind),e.statics&&(r.mixin(t,e.statics),delete t.prototype.statics),e.protectedStatics&&(r.mixin(t,e.protectedStatics),delete t.prototype.protectedStatics)
for(var n=t.prototype.base;n;)n.subclass(t,e),n=n.prototype.base}),s.statics={subclass:function(t,e){},extend:function(t,e){var n,i,o=this,a=r.isArray(t)?t:[t]
i=function(t,e){return!("function"==typeof e||l(e))&&u.indexOf(t)===-1},n=e||o.prototype
for(var c,h=0;c=a[h];++h)s.concatHandler(n,c,!0),s.extendMethods(n,c,!0),r.mixin(n,c,{filter:i})
return e||o},kind:function(t){return t.kind&&t.kind!==this&&i.warn("Creating a different kind from a constructor's kind() method is not supported and will be replaced with the constructor."),t.kind=this,s(t)}},e.concatHandler=function(t,e,n){for(var i=t.prototype||t,r=i.ctor;r;)r.concat&&r.concat(t,e,n),r=r.prototype.base}
var h=e._kindCtors={},d=e.constructorForKind=function(t){if(null===t)return t
if(void 0===t)return a()
if(r.isFunction(t))return t
i.warn("Creating instances by name is deprecated. Name used:",t)
var e=h[t]
if(e)return e
if(e=f[t]||n.enyo&&n.enyo[t]||r.getPath.call(n,"enyo."+t)||n[t]||r.getPath.call(n,t),!r.isFunction(e))throw"["+t+"] is not the name of a valid kind."
return h[t]=e,e},f=e.Theme={}
e.registerTheme=function(t){r.mixin(f,t)},e.createFromKind=function(t,e){var n=t&&d(t)
if(n)return new n(e)}},{"./logger":"enyo/logger","./utils":"enyo/utils"}],"enyo/HTMLStringDelegate":[function(t,e,n,require,request){require("enyo")
var i=require("./dom"),r={img:1,hr:1,br:1,area:1,base:1,basefont:1,input:1,link:1,meta:1,command:1,embed:1,keygen:1,wbr:1,param:1,source:1,track:1,col:1}
t.exports={invalidate:function(t,e){switch(e){case"content":this.renderContent(t)
break
default:t.tagsValid=!1}},render:function(t){if(t.parent){if(t.parent.beforeChildRender(t),!t.parent.generated)return
if(null===t.tag)return t.parent.render()}t.hasNode()||this.renderNode(t),t.hasNode()&&(this.renderDom(t),t.generated&&t.rendered())},renderInto:function(t,e){e.innerHTML=this.generateHtml(t),t.generated&&t.rendered()},renderNode:function(t){this.teardownRender(t),t.node=document.createElement(t.tag),t.addNodeToParent(),t.set("generated",!0)},renderDom:function(t){this.renderAttributes(t),this.renderStyles(t),this.renderContent(t)},renderStyles:function(t){var e=t.style
t.hasNode()&&(t.node.style.cssText=e,t.cssText=e=t.node.style.cssText,t.set("style",e))},renderAttributes:function(t){var e,n,i=t.attributes,r=t.hasNode()
if(r)for(e in i)n=i[e],null===n||n===!1||""===n?r.removeAttribute(e):r.setAttribute(e,n)},renderContent:function(t){t.generated&&this.teardownChildren(t),t.hasNode()&&(t.node.innerHTML=this.generateInnerHtml(t))},generateHtml:function(t){var e,n
return t.canGenerate===!1?"":(e=this.generateInnerHtml(t),n=this.generateOuterHtml(t,e),t.set("generated",!0),n)},generateOuterHtml:function(t,e){return t.tag?(t.tagsValid||this.prepareTags(t),t._openTag+e+t._closeTag):e},generateInnerHtml:function(t){var e,n=t.allowHtml
return t.flow(),t.children.length?this.generateChildHtml(t):(e=t.get("content"),n?e:i.escape(e))},generateChildHtml:function(t){for(var e,n,i="",r=0;e=t.children[r];++r)n=e.renderDelegate||this,i+=n.generateHtml(e)
return i},prepareTags:function(t){var e=""
e+="<"+t.tag+(t.style?' style="'+t.style+'"':""),e+=this.attributesToHtml(t.attributes),r[t.tag]?(t._openTag=e+"/>",t._closeTag=""):(t._openTag=e+">",t._closeTag="</"+t.tag+">"),t.tagsValid=!0},attributesToHtml:function(t){var e,n,i=""
for(e in t)n=t[e],null!=n&&n!==!1&&""!==n&&(i+=" "+e+'="'+this.escapeAttribute(n)+'"')
return i},escapeAttribute:function(t){return"string"!=typeof t?t:String(t).replace(/&/g,"&amp;").replace(/\"/g,"&quot;")},teardownRender:function(t,e){t.generated&&("function"==typeof t.beforeTeardown&&t.beforeTeardown(),this.teardownChildren(t,e)),t.node=null,t.set("generated",!1)},teardownChildren:function(t,e){for(var n,i=0;n=t.children[i];++i)n.teardownRender(e)}}},{"./dom":"enyo/dom"}],"enyo/gesture/util":[function(t,e,n,require,request){var i=require("../dom"),r=require("../platform"),o=require("../utils")
t.exports={eventProps:["target","relatedTarget","clientX","clientY","pageX","pageY","screenX","screenY","altKey","ctrlKey","metaKey","shiftKey","detail","identifier","dispatchTarget","which","srcEvent"],makeEvent:function(t,e){var o={}
o.type=t
for(var s,a=0;s=this.eventProps[a];a++)o[s]=e[s]
if(o.srcEvent=o.srcEvent||e,o.preventDefault=this.preventDefault,o.disablePrevention=this.disablePrevention,1===i._bodyScaleFactorX&&1===i._bodyScaleFactorY||"move"!=o.type&&"up"!=o.type&&"down"!=o.type&&"enter"!=o.type&&"leave"!=o.type||(o.clientX*=i._bodyScaleFactorX,o.clientY*=i._bodyScaleFactorY),r.ie<10){var u=n.event&&n.event.button
u&&(o.which=1&u?1:2&u?2:4&u?3:0)}else(r.webos||n.PalmSystem)&&0===o.which&&(o.which=1)
return o},preventDefault:function(){this.srcEvent&&this.srcEvent.preventDefault()},disablePrevention:function(){this.preventDefault=o.nop,this.srcEvent&&(this.srcEvent.preventDefault=o.nop)}}},{"../dom":"enyo/dom","../platform":"enyo/platform","../utils":"enyo/utils"}],"enyo/MixinSupport":[function(t,e,n,require,request){function i(t,e){var n=t._mixins?t._mixins=t._mixins.slice():t._mixins=[],i=o.isString(e)?e:e.name,r=o.indexOf(i,n)
r<0&&(i==e&&(e=o.getPath(i)),!e&&a.error("Could not find the mixin "+i),i&&n.push(i),e=o.clone(e),e.hasOwnProperty("constructor")&&(e._constructor=e.constructor,delete e.constructor),delete e.name,c(e,t),e.name=i)}function r(t,e){if(e.mixins){var n=t.prototype||t,r=e.mixins
n._mixins&&(n._mixins=n._mixins.slice()),o.forEach(r,function(t){i(n,t)})}}require("enyo")
var o=require("./utils"),s=require("./kind"),a=require("./logger")
s.concatenated.push("mixins")
var u=s.statics.extend,c=s.statics.extend=function t(e,n){return o.isArray(e)?o.forEach(e,function(e){t.call(this,e,n)},this):void("string"==typeof e?i(n||this.prototype,e):(e.mixins&&r(n||this,e),e.name?i(n||this.prototype,e):u.apply(this,arguments)))}
s.features.push(r)
var l={name:"MixinSupport",extend:function(t){t&&i(this,t)},importProps:s.inherit(function(t){return function(e){e&&e.mixins&&r(this,e),t.apply(this,arguments)}})}
t.exports=l},{"./utils":"enyo/utils","./kind":"enyo/kind","./logger":"enyo/logger"}],"enyo/LinkedListNode":[function(t,e,n,require,request){require("enyo")
var i=require("./kind"),r=require("./utils")
t.exports=i({kind:null,prev:null,next:null,copy:function(){var t=new this.ctor
return t.prev=this.prev,t.next=this.next,t},constructor:function(t){t&&r.mixin(this,t)},destroy:function(){this.prev=null,this.next&&this.next.destroy(),this.next=null}})},{"./kind":"enyo/kind","./utils":"enyo/utils"}],"enyo/Binding":[function(t,e,n,require,request){function i(t){var e=t.ready
if(!e){var i,r=t.from||"",s=t.to||"",a=t.source,u=t.target,c=t.owner,l=!t.oneWay
if("string"!=typeof r&&(r=""),"string"!=typeof s&&(s=""),!a)if("^"==r[0]){var h=r.split(".")
r=h.pop(),a=o.getPath.call(n,h.join(".").slice(1))}else a=c
if(!u)if("^"==s[0]){var d=s.split(".")
s=d.pop(),u=o.getPath.call(n,d.join(".").slice(1))}else u=c
t._target=u,t._source=a,t._from="."==r[0]?r.slice(1):r,t._to="."==s[0]?s.slice(1):s,l||(i=t._to.split("."),i.length>2&&(i.pop(),t._toTarget=i.join("."))),e=!!(a&&"object"==typeof a&&u&&"object"==typeof u&&r&&s)}return t.ready=e}require("enyo")
var r=require("./kind"),o=require("./utils"),s=[],a=1,u=2,c=r({name:"enyo.PassiveBinding",kind:null,owner:null,source:null,target:null,from:null,to:null,transform:null,isReady:function(){return this.ready||i(this)},stop:function(){this._stop=!0},reset:function(){return this.ready=null,this._source=this._target=this._to=this._from=this._toTarget=null,this},rebuild:function(){return this.reset().sync()},sync:function(){var t,e,n,i,r,s
return this.isReady()&&(t=this._source,e=this._target,n=this._from,i=this._to,r=this.getTransform(),s=o.getPath.apply(t,[n]),r&&(s=r.call(this.owner||this,s,a,this)),this._stop||o.setPath.apply(e,[i,s,{create:!1}])),this},destroy:function(){var t,e=this.owner
return this.owner=null,this.source=this._source=null,this.target=this._target=null,this.ready=null,this.destroyed=!0,t=s.indexOf(this),t>-1&&s.splice(t,1),e&&!e.destroyed&&e.removeBinding(this),this},getTransform:function(){return this._didInitTransform?this.transform:function(t){t._didInitTransform=!0
var e=t.transform,i=t.owner,r=i&&i.bindingTransformOwner
if(e)return"string"==typeof e&&(e=r&&r[e]?r[e]:i&&i[e]?i[e]:o.getPath.call(n,e)),t.transform="function"==typeof e?e:null}(this)},constructor:function(t){s.push(this),t&&o.mixin(this,t),this.euid||(this.euid=o.uid("b")),this.sync()}})
e=t.exports=r({name:"enyo.Binding",kind:c,oneWay:!0,connected:!1,autoConnect:!0,autoSync:!0,dirty:a,isConnected:function(){var t,e,n=this._from,i=this.oneWay?this._toTarget||this._to:this._to,r=this._source,o=this._target
return!!(n&&i&&r&&o)&&(this.oneWay&&!this._toTarget||(t=o.getChains()[i]),e=r.getChains()[n],this.connected&&(!e||e.isConnected())&&(!t||t.isConnected()))},reset:function(){return this.disconnect(),c.prototype.reset.apply(this,arguments)},rebuild:function(){return this.reset().connect()},connect:function(){return this.isConnected()||this.isReady()&&(this._source.observe(this._from,this._sourceChanged,this,{priority:!0}),this.oneWay?this._toTarget&&this._target.observe(this._toTarget,this._toTargetChanged,this,{priority:!0}):this._target.observe(this._to,this._targetChanged,this),this.connected=!0,this.isConnected()&&this.autoSync&&this.sync(!0)),this},disconnect:function(){return this.isConnected()&&(this._source.unobserve(this._from,this._sourceChanged,this),this.oneWay?this._toTarget&&this._target.unobserve(this._toTarget,this._toTargetChanged,this):this._target.unobserve(this._to,this._targetChanged,this),this.connected=!1),this},sync:function(t){var e,n=this._source,i=this._target,r=this._from,o=this._to,s=this.getTransform()
if(this.isReady()&&this.isConnected()){switch(this.dirty||t&&a){case u:e=i.get(o),s&&(e=s.call(this.owner||this,e,u,this)),this._stop||n.set(r,e,{create:!1})
break
case a:e=n.get(r),s&&(e=s.call(this.owner||this,e,a,this)),this._stop||i.set(o,e,{create:!1})}this.dirty=null,this._stop=null}return this},destroy:function(){return this.disconnect(),c.prototype.destroy.apply(this,arguments)},constructor:function(t){s.push(this),t&&o.mixin(this,t),this.euid||(this.euid=o.uid("b")),this.autoConnect&&this.connect()},_sourceChanged:function(t,e,n){return this.dirty=this.dirty==u?null:a,this.dirty==a&&this.sync()},_targetChanged:function(t,e,n){return this.dirty=this.dirty==a?null:u,this.dirty==u&&this.sync()},_toTargetChanged:function(t,e,n){this.dirty=a,this.reset().connect()}}),e.find=function(t){return s.find(function(e){return e.euid==t})},e.bindings=s,e.DIRTY_FROM=a,e.DIRTY_TO=u,e.defaultBindingKind=e,e.PassiveBinding=c},{"./kind":"enyo/kind","./utils":"enyo/utils"}],"enyo/ComputedSupport":[function(t,e,n,require,request){function i(t,e){var n=t._getComputedCache(e),i=t._isComputedCached(e)
return(n.dirty||void 0===n.dirty)&&(i&&(n.dirty=!1),n.previous=n.value,n.value=t[e]()),n.value}function r(t,e){var n=t._computedQueue||(t._computedQueue=[]),i=t._computedDependencies[e]
if(i)for(var r,o=0;r=i[o];++o)n.length&&-1!=n.indexOf(r)||n.push(r)}function o(t){var e=t._computedQueue
if(t._computedQueue=null,e&&t.isObserving())for(var n,r=0;n=e[r];++r)t.notify(n,t._getComputedCache(n).value,i(t,n))}require("enyo")
var s=require("./kind"),a=require("./utils"),u=s.statics.extend
s.concatenated.push("computed")
var c={name:"ComputedSuport",_computedRecursion:0,isComputed:function(t){return this._computed&&(this._computed[t]===!0||this._computed[t]===!1)},isComputedDependency:function(t){return!(!this._computedDependencies||!this._computedDependencies[t])},get:s.inherit(function(t){return function(e){return this.isComputed(e)?i(this,e):t.apply(this,arguments)}}),set:s.inherit(function(t){return function(e){return this.isComputed(e)?this:t.apply(this,arguments)}}),notifyObservers:function(){return this.notify.apply(this,arguments)},notify:s.inherit(function(t){return function(e,n,i){return this.isComputedDependency(e)&&r(this,e),this._computedRecursion++,t.apply(this,arguments),this._computedRecursion--,this._computedQueue&&0===this._computedRecursion&&o(this),this}}),_isComputedCached:function(t){return this._computed[t]},_getComputedCache:function(t){var e=this._computedCache||(this._computedCache={})
return e[t]||(e[t]={})}}
t.exports=c
var l=s.concatHandler
s.concatHandler=function(t,e,n){if(l.call(this,t,e,n),e.computed){var i=t.prototype||t,r=i._computed?Object.create(i._computed):{},o=i._computedDependencies?Object.create(i._computedDependencies):{}
u(c,i),e.computed&&e.computed instanceof Array||!function(){var t,n,i,r=[]
for(n in e.computed)t=e.computed[n],i=t&&t.find(function(e){return"object"==typeof e&&(a.remove(t,e)||!0)}),r.push({method:n,path:t,cached:i?i.cached:null})
e.computed=r}()
for(var s,h=function(t,e){var n
o[t]&&!o.hasOwnProperty(t)&&(o[t]=o[t].slice()),n=o[t]||(o[t]=[]),n.push(e)},d=0;s=e.computed[d];++d)r[s.method]=!!s.cached,s.path&&s.path instanceof Array?s.path.forEach(function(t){h(t,s.method)}):s.path&&h(s.path,s.method)
i._computed=r,i._computedDependencies=o}}},{"./kind":"enyo/kind","./utils":"enyo/utils"}],"enyo/ApplicationSupport":[function(t,e,n,require,request){require("enyo")
var i=require("./kind"),r={name:"ApplicationSupport",adjustComponentProps:i.inherit(function(t){return function(e){e.app=e.app||this.app,t.apply(this,arguments)}}),destroy:i.inherit(function(t){return function(){this.app=null,t.apply(this,arguments)}})}
t.exports=r},{"./kind":"enyo/kind"}],"enyo/ComponentBindingSupport":[function(t,e,n,require,request){require("enyo")
var i=require("./kind"),r={name:"ComponentBindingSupport",adjustComponentProps:i.inherit(function(t){return function(e){t.apply(this,arguments),e.bindingTransformOwner||(e.bindingTransformOwner=this.getInstanceOwner())}})}
t.exports=r},{"./kind":"enyo/kind"}],"enyo/Control/floatingLayer":[function(t,e,n,require,request){var i=require("../kind"),r=require("../platform")
t.exports=function(t){var e=i({kind:t,classes:"enyo-fit enyo-clip enyo-untouchable",accessibilityPreventScroll:!0,create:i.inherit(function(t){return function(){t.apply(this,arguments),this.setParent(null),r.ie<11&&this.removeClass("enyo-fit")}}),hasNode:i.inherit(function(t){return function(){return t.apply(this,arguments),this.node&&!this.node.parentNode&&this.teardownRender(),this.node}}),render:i.inherit(function(t){return function(){return this.parentNode=document.body,t.apply(this,arguments)}}),generateInnerHtml:function(){return""},beforeChildRender:function(){this.hasNode()||this.render()},teardownChildren:function(){}})
return e}},{"../kind":"enyo/kind","../platform":"enyo/platform"}],"enyo/LinkedList":[function(t,e,n,require,request){require("enyo")
var i=require("./kind"),r=require("./LinkedListNode")
t.exports=i({kind:null,nodeKind:r,head:null,tail:null,length:0,clear:function(){this.head&&this.head.destroy(),this.head=null,this.tail=null,this.length=0},slice:function(t,e){var n,i=t||this.head,r=new this.ctor
if(e=e||this.tail,i&&i!==e)do n=i.copy(),r.appendNode(n)
while((i=i.next)&&i!==e)
return r},destroy:function(){this.clear(),this.destroyed=!0},createNode:function(t){return new this.nodeKind(t)},deleteNode:function(t){return this.removeNode(t),t.destroy(),this},removeNode:function(t){var e=t.prev,n=t.next
return e&&(e.next=n),n&&(n.prev=e),this.length--,t.next=t.prev=null,this},appendNode:function(t,e){return e=e||this.tail,e?(e.next&&(t.next=e.next),e.next=t,t.prev=e,e===this.tail&&(this.tail=t),this.length++):(this.head=this.tail=t,t.prev=t.next=null,this.length=1),this},find:function(t,e,n){var i=n||this.head
if(i)do if(t.call(e||this,i,this))return i
while(i=i.next)
return!1},forward:function(t,e,n){var i=n||this.head
if(i)do if(t.call(e||this,i,this))break
while(i=i.next)
return i},backward:function(t,e,n){var i=n||this.tail
if(i)do if(t.call(e||this,i,this))break
while(i=i.prev)
return i},constructor:function(){this.nodeType=i.constructorForKind(this.nodeType)}})},{"./kind":"enyo/kind","./LinkedListNode":"enyo/LinkedListNode"}],"enyo/ObserverChainNode":[function(t,e,n,require,request){function i(t,e){return t&&"object"==typeof t?t.get?t.get(e):t[e]:void 0}require("enyo")
var r=require("./kind"),o=require("./LinkedListNode")
t.exports=r({kind:o,constructor:r.inherit(function(t){return function(){t.apply(this,arguments),this.connect()}}),destroy:r.inherit(function(t){return function(){this.disconnect(),t.apply(this,arguments),this.observer=null,this.list=null,this.object=null}}),connect:function(){var t=this.object,e=this._changed,n=this.property
t&&(t.observe&&t.observe(n,e,this,{noChain:!0,priority:!0}),this.connected=!0,this.list.connected++)},disconnect:function(){var t=this.object,e=this._changed,n=this.property,i=this.connected
t&&t.unobserve&&t.unobserve(n,e,this),this.connected=null,i&&this.list.connected--},setObject:function(t){var e,n,r=this.object,o=this.property
r!==t&&(this.disconnect(),this.object=t,this.connect(),this.list.tail===this&&(e=i(r,o),n=i(t,o),e!==n&&this.list.observed(this,e,n)))},_changed:function(t,e){this.list.observed(this,t,e)}})},{"./kind":"enyo/kind","./LinkedListNode":"enyo/LinkedListNode"}],"enyo/BindingSupport":[function(t,e,n,require,request){require("enyo")
var i=require("./kind"),r=require("./utils"),o=require("./Binding")
i.concatenated.push("bindings")
var s={name:"BindingSupport",_bindingSupportInitialized:!1,binding:function(){var t,e,n=r.toArray(arguments),s=r.mixin(n),a=this.bindings||(this.bindings=[]),u=this.passiveBindings||(this.passiveBindings=[]),c=o.PassiveBinding
return s.owner=s.owner||this,t=s.kind=s.kind||this.defaultBindingKind||o.defaultBindingKind,this._bindingSupportInitialized?(r.isString(t)&&(t=s.kind=i.constructorForKind(t)),e=new t(s),a.push(e),t===c&&u.push(e),e):(a.push(s),this)},clearBindings:function(t){var e=t||this.bindings&&this.bindings.slice()
return e.forEach(function(t){t.destroy()}),this},syncBindings:function(t){var e=t&&t.all,n=t&&t.force,i=e?this.bindings:this.passiveBindings
i.forEach(function(t){t.sync(n)})},removeBinding:function(t){return r.remove(t,this.bindings),t.ctor===o.PassiveBinding&&r.remove(t,this.passiveBindings),t.owner===this&&(t.owner=null),this},constructed:i.inherit(function(t){return function(){var e=this.bindings
this._bindingSupportInitialized=!0,e&&(this.bindings=[],this.passiveBindings=[],e.forEach(function(t){this.binding(t)},this)),t.apply(this,arguments)}}),destroy:i.inherit(function(t){return function(){t.apply(this,arguments),this.bindings&&this.bindings.length&&this.clearBindings(),this.bindings=null,this.passiveBindings=null}})}
t.exports=s
var a=i.concatHandler,u={ignore:!0}
i.concatHandler=function(t,e,n){var i=t.prototype||t,s=e&&(e.defaultBindingKind||o.defaultBindingKind),c=e&&e.bindingDefaults
a.call(this,t,e,n),e.bindings&&(e.bindings.forEach(function(t){c&&r.mixin(t,c,u),t.kind||(t.kind=s)}),i.bindings=i.bindings?i.bindings.concat(e.bindings):e.bindings,delete e.bindings)}},{"./kind":"enyo/kind","./utils":"enyo/utils","./Binding":"enyo/Binding"}],"enyo/ObserverChain":[function(t,e,n,require,request){function i(t,e){return t&&"object"==typeof t?t.get?t.get(e):t[e]:void 0}require("enyo")
var r=require("./kind"),o=require("./LinkedList"),s=require("./ObserverChainNode")
t.exports=r({kind:o,nodeKind:s,connected:0,constructor:function(t,e){this.object=e,this.path=t,this.parts=t.split("."),this.createChain()},destroy:r.inherit(function(t){return function(){t.apply(this,arguments),this.object=null,this.parts=null,this.path=null}}),rebuild:function(t){this.rebuilding||(this.rebuilding=!0,this.forward(function(t){if(t!==this.head){var e=t.prev.object,n=t.prev.property
t.setObject(i(e,n))}},this,t),this.rebuilding=!1)},isConnected:function(){return!(this.connected!==this.length||!this.length)},buildPath:function(t){var e=""
return this.backward(function(t){e=t.property+(e?"."+e:e)},this,t),e},createChain:function(){for(var t,e,n=this.parts,r=this.object,o=!1,s=0;e=n[s];++s)"$"==e?o=!0:(o&&(e="$."+e),t=this.createNode({property:e,object:r,list:this}),this.appendNode(t),r=i(r,e),o=!1)},observed:function(t,e,n){this.object.stopNotifications(),t===this.tail&&this.object.notify(this.buildPath(t),e,n),t!==this.tail&&e!==n&&this.rebuild(t),this.object.startNotifications()}})},{"./kind":"enyo/kind","./LinkedList":"enyo/LinkedList","./ObserverChainNode":"enyo/ObserverChainNode"}],"enyo/ObserverSupport":[function(t,e,n,require,request){function i(t,e,n,i){var r,o,s=this.getObservers(),a=this.getChains(),u=t.split("."),c=i&&i.priority
return o=i&&i.noChain||a[t]||u.length<2||2===u.length&&"$"==t[0],s[t]&&!s.hasOwnProperty(t)&&(s[t]=s[t].slice()),r=s[t]||(s[t]=[]),r[c?"unshift":"push"]({method:e,ctx:n||this}),o||(this.getChains()[t]=new l(t,this)),this}function r(t,e,n,i){var r,o,s=t.getObservers(e),a=t.getChains()
return s&&s.length&&(r=s.findIndex(function(t){return t.method===n&&(!i||t.ctx===i)}),r>-1&&s.splice(r,1)),(o=a[e])&&!s.length&&o.destroy(),t}function o(t,e,n,i,r){if(t.isObserving()){var o=t.getObservers(e)
if(o&&o.length)for(var a,u=0;a=o[u];++u)"string"==typeof a.method?t[a.method](n,i,e,r):a.method.call(a.ctx||t,n,i,e,r)}else s(t,e,n,i,r)
return t}function s(t,e,n,i,r){if(t._notificationQueueEnabled){var o=t._notificationQueue||(t._notificationQueue={}),s=o[e]||(o[e]={})
s.was=n,s.is=i,s.opts=r}}function a(t){var e,n,i=t._notificationQueue
if(i){t._notificationQueue=null
for(e in i)n=i[e],t.notify(e,n.was,n.is,n.opts)}}require("enyo")
var u=require("./kind"),c=require("./utils"),l=require("./ObserverChain"),h={}
u.concatenated.push("observers")
var d={name:"ObserverSupport",_observing:!0,_observeCount:0,_notificationQueue:null,_notificationQueueEnabled:!0,isObserving:function(){return this._observing},getObservers:function(t){var e,n,i=this.euid||(this.euid=c.uid("o"))
return n=h[i]||(h[i]=this._observers?Object.create(this._observers):{}),t?(e=n[t],n["*"]&&(e=e?e.concat(n["*"]):n["*"].slice()),e):n},getChains:function(){return this._observerChains||(this._observerChains={})},addObserver:function(){return i.apply(this,arguments)},observe:function(){return i.apply(this,arguments)},removeObserver:function(t,e,n){return r(this,t,e)},unobserve:function(t,e,n){return r(this,t,e,n)},removeAllObservers:function(t){var e=this.euid,n=e&&h[e]
return n&&(t?n[t]=null:delete h[e]),this},notifyObservers:function(t,e,n,i){return o(this,t,e,n,i)},notify:function(t,e,n,i){return o(this,t,e,n,i)},stopNotifications:function(t){return this._observing=!1,this._observeCount++,t&&this.disableNotificationQueue(),this},startNotifications:function(t){return this._observeCount&&this._observeCount--,0===this._observeCount&&(this._observing=!0),t&&this.enableNotificationQueue(),this.isObserving()&&a(this),this},enableNotificationQueue:function(){return this._notificationQueueEnabled=!0,this},disableNotificationQueue:function(){return this._notificationQueueEnabled=!1,this._notificationQueue=null,this},constructor:u.inherit(function(t){return function(){var e,n,i,r,o
if(this._observerChains){e=this._observerChains,this._observerChains={}
for(i in e)for(r=e[i],o=0;n=r[o];++o)this.observe(i,n.method)}t.apply(this,arguments)}}),destroy:u.inherit(function(t){return function(){var e,n,i=this._observerChains
if(t.apply(this,arguments),this.removeAllObservers(),i){for(e in i)n=i[e],n.destroy()
this._observerChains=null}}})}
t.exports=d
var f=u.concatHandler
u.concatHandler=function(t,e,n){if(f.call(this,t,e,n),e!==d){var i=t.prototype||t,r=i._observers?Object.create(i._observers):null,o=e.observers,s=i._observerChains&&Object.create(i._observerChains)
if(!r){if(!i.kindName)return
r={}}!o||o instanceof Array?o&&(o=o.slice()):!function(){var t,n,i=[]
for(n in e.observers)t=e.observers[n],i.push({method:n,path:t})
o=i}()
for(var a in e)"Changed"==a.slice(-7)&&(o||(o=[]),o.push({method:a,path:a.slice(0,-7)}))
var u=function(t,e){var n
t.indexOf(".")>-1?(s||(s={}),n=s[t]||(s[t]=[]),n.push({method:e})):(r[t]&&!r.hasOwnProperty(t)&&(r[t]=r[t].slice()),n=r[t]||(r[t]=[]),n.find(function(t){return t.method==e})||n.push({method:e}))}
o&&o.forEach(function(t){t.path&&t.path instanceof Array?t.path.forEach(function(e){u(e,t.method)}):u(t.path,t.method)}),i._observers=r,i._observerChains=s}}},{"./kind":"enyo/kind","./utils":"enyo/utils","./ObserverChain":"enyo/ObserverChain"}],"enyo/CoreObject":[function(t,e,n,require,request){function i(t,e){if(s.shouldLog(t))try{throw new Error}catch(n){s._log(t,[e.callee.caller.displayName+": "].concat(a.cloneArray(e))),s.log(n.stack)}}function r(t,e,n){var i,r=a.cap(t),o="get"+r,s="set"+r,u=n._getters||(n._getters={}),c=n._setters||(n._setters={})
n[t]=e,(i=n[o])&&"function"==typeof i?i&&"function"==typeof i&&!i.generated&&(u[t]=o):(i=n[o]=function(){return a.getPath.fast.call(this,t)},i.generated=!0),(i=n[s])&&"function"==typeof i?i&&"function"==typeof i&&!i.generated&&(c[t]=s):(i=n[s]=function(e){return a.setPath.fast.call(this,t,e)},i.generated=!0)}require("enyo")
var o=require("./kind"),s=require("./logger"),a=require("./utils"),u=require("./MixinSupport"),c=require("./ObserverSupport"),l=require("./BindingSupport")
require("./ComputedSupport")
var h=t.exports=o({name:"enyo.Object",kind:null,destroyed:!1,mixins:[u,c,l],constructor:function(t){this.importProps(t)},importProps:function(t){var e
if(t)if(o.concatHandler(this,t,!0),t.kindName)for(e in t)o.concatenated.indexOf(e)===-1&&t.hasOwnProperty(e)&&(this[e]=t[e])
else for(e in t)o.concatenated.indexOf(e)===-1&&(this[e]=t[e])
return this},destroyObject:function(t){return this[t]&&this[t].destroy&&this[t].destroy(),this[t]=null,this},log:function(){var t=arguments.callee.caller,e=((t?t.displayName:"")||"(instance method)")+":",n=Array.prototype.slice.call(arguments)
n.unshift(e),s.log("log",n)},warn:function(){i("warn",arguments)},error:function(){i("error",arguments)},get:function(){return a.getPath.apply(this,arguments)},set:function(){return a.setPath.apply(this,arguments)},bindSafely:function(){var t=Array.prototype.slice.call(arguments)
return t.unshift(this),a.bindSafely.apply(null,t)},destroy:function(){return this.set("destroyed",!0)}})
h.concat=function(t,e){var n,i,o=e.published
if(o){n=t.prototype||t
for(i in o)e[i]&&"function"==typeof e[i]||r(i,o[i],n)}}},{"./kind":"enyo/kind","./logger":"enyo/logger","./utils":"enyo/utils","./MixinSupport":"enyo/MixinSupport","./ObserverSupport":"enyo/ObserverSupport","./BindingSupport":"enyo/BindingSupport","./ComputedSupport":"enyo/ComputedSupport"}],"enyo/jobs":[function(t,e,n,require,request){require("enyo")
var i=require("./utils"),r=require("./kind"),o=require("./CoreObject")
t.exports=r.singleton({kind:o,published:{priorityLevel:0},_jobs:[[],[],[],[],[],[],[],[],[],[]],_priorities:{},_namedJobs:{},_magicWords:{low:3,normal:5,high:7},add:function(t,e,n){e=e||5,e=i.isString(e)?this._magicWords[e]:e,n&&(this.remove(n),this._namedJobs[n]=e),e>=this.priorityLevel?t():this._jobs[e-1].push({fkt:t,name:n})},remove:function(t){var e=this._jobs[this._namedJobs[t]-1]
if(e)for(var n=e.length-1;n>=0;n--)if(e[n].name===t)return e.splice(n,1)},registerPriority:function(t,e){this._priorities[e]=t,this.setPriorityLevel(Math.max(t,this.priorityLevel))},unregisterPriority:function(t){var e=0
delete this._priorities[t]
for(var n in this._priorities)e=Math.max(e,this._priorities[n])
this.setPriorityLevel(e)},priorityLevelChanged:function(t){t>this.priorityLevel&&this._doJob()},_doJob:function(){for(var t,e=9;e>=this.priorityLevel;e--)if(this._jobs[e].length){t=this._jobs[e].shift()
break}t&&(t.fkt(),delete this._namedJobs[t.name],setTimeout(i.bind(this,"_doJob"),10))}})},{"./utils":"enyo/utils","./kind":"enyo/kind","./CoreObject":"enyo/CoreObject"}],"enyo/Component":[function(t,e,n,require,request){function i(t){var e,n=h[t]
return n||(e=t.lastIndexOf("."),n=e>=0?t.slice(e+1):t,n=n.charAt(0).toLowerCase()+n.slice(1),h[t]=n),n}require("enyo")
var r=require("./kind"),o=require("./utils"),s=require("./logger"),a=require("./CoreObject"),u=require("./ApplicationSupport"),c=require("./ComponentBindingSupport"),l=require("./jobs"),h={},d=0,f=t.exports=r({name:"enyo.Component",kind:a,cachedBubble:!0,cachePoint:!1,published:{name:"",id:"",owner:null,componentOverrides:null},handlers:{},mixins:[u,c],toString:function(){return this.id+" ["+this.kindName+"]"},constructor:r.inherit(function(t){return function(e){this._componentNameMap={},this.$={},this.cachedBubbleTarget={},t.apply(this,arguments)}}),constructed:r.inherit(function(t){return function(e){this.create(e),t.apply(this,arguments)}}),create:function(){this.stopNotifications(),this.ownerChanged(),this.initComponents(),this.startNotifications()},initComponents:function(){this.createChrome(this.kindComponents),this.createClientComponents(this.components)},createChrome:function(t){this.createComponents(t,{isChrome:!0})},createClientComponents:function(t){this.createComponents(t,{owner:this.getInstanceOwner()})},getInstanceOwner:function(){return!this.owner||this.owner.notInstanceOwner?this:this.owner},destroy:r.inherit(function(t){return function(){return this.destroyComponents(),this.setOwner(null),t.apply(this,arguments),this.stopAllJobs(),this}}),destroyComponents:function(){var t,e,n=this.getComponents()
for(e=0;e<n.length;++e)t=n[e],t.destroyed||t.destroy()
return this},makeId:function(){var t="_",e=this.owner&&this.owner.getId(),n=this.name||"@@"+ ++d
return(e?e+t:"")+n},ownerChanged:function(t){t&&t.removeComponent&&t.removeComponent(this),this.owner&&this.owner.addComponent&&this.owner.addComponent(this),this.id||(this.id=this.makeId())},nameComponent:function(t){var e,n=i(t.kindName),r=this._componentNameMap[n]||0
do e=n+(++r>1?String(r):"")
while(this.$[e])
return this._componentNameMap[n]=Number(r),t.name=e},addComponent:function(t){var e=t.get("name")
return e||(e=this.nameComponent(t)),this.$[e]&&this.warn("Duplicate component name "+e+" in owner "+this.id+" violates unique-name-under-owner rule, replacing existing component in the hash and continuing, but this is an error condition and should be fixed."),this.$[e]=t,this.notify("$."+e,null,t),t.publish&&(this[e]=t,this.notify(e,null,t)),this},removeComponent:function(t){var e=t.get("name")
return delete this.$[e],t.publish&&delete this[e],this},getComponents:function(){return o.values(this.$)},adjustComponentProps:function(t){this.defaultProps&&o.mixin(t,this.defaultProps,{ignore:!0}),t.kind=t.kind||t.isa||this.defaultKind,t.owner=t.owner||this},_createComponent:function(t,e){var n=e?o.mixin({},[e,t]):o.clone(t)
return this.adjustComponentProps(n),f.create(n)},createComponent:function(t,e){return this._createComponent(t,e)},createComponents:function(t,e){var n,i,r=[]
if(t)for(i=0;i<t.length;++i)n=t[i],r.push(this._createComponent(n,e))
return r},getBubbleTarget:function(t,e){return e.delegate?this.owner:this.bubbleTarget||this.cachedBubble&&this.cachedBubbleTarget[t]||this.owner},bubble:function(t,e,n){return!this._silenced&&(e=e||{},e.lastHandledComponent=null,e.bubbling=!0,null==e.originator&&(e.originator=n||this),this.dispatchBubble(t,e,n||this))},bubbleUp:function(t,e){var n
return!(this._silenced||(e=e||{},e.bubbling=!0,!(n=this.getBubbleTarget(t,e))))&&n.dispatchBubble(t,e,e.delegate||this)},dispatchEvent:function(t,e,n){var i,r
if(!this._silenced){if(i=(e||(e={})).delegate,this.decorateEvent!==f.prototype.decorateEvent&&this.decorateEvent(t,e,n),i&&i.owner===this)return!(!this[t]||"function"!=typeof this[t])&&this.dispatch(t,e,n)
if(!i){var s=this.handlers&&this.handlers[t],a=this[t]&&o.isString(this[t]),u=this.cachePoint||s||a||"master"===this.id
if(e.bubbling&&(e.lastHandledComponent&&u&&(e.lastHandledComponent.cachedBubbleTarget[t]=this,e.lastHandledComponent=null),e.lastHandledComponent||"master"===this.id||(e.lastHandledComponent=this)),s&&this.dispatch(s,e,n))return!0
if(a)return e.delegate=this,r=this.bubbleUp(this[t],e,n),delete e.delegate,r}}return!1},dispatchBubble:function(t,e,n){return!this._silenced&&(!!this.dispatchEvent(t,e,n)||this.bubbleUp(t,e,n))},decorateEvent:function(t,e,n){},stopAllJobs:function(){var t
if(this.__jobs)for(t in this.__jobs)this.stopJob(t)},dispatch:function(t,e,n){var i
return!(this._silenced||(i=t&&this[t],!i||"function"!=typeof i))&&i.call(this,n||this,e)},triggerHandler:function(){return this.dispatchEvent.apply(this,arguments)},waterfall:function(t,e,n){if(!this._silenced){if(e=e||{},e.bubbling=!1,this.dispatchEvent(t,e,n))return!0
this.waterfallDown(t,e,n||this)}return this},waterfallDown:function(t,e,n){var i
if(e=e||{},e.bubbling=!1,!this._silenced)for(i in this.$)this.$[i].waterfall(t,e,n||this)
return this},_silenced:!1,_silenceCount:0,silence:function(){return this._silenced=!0,this._silenceCount+=1,this},isSilenced:function(){return this._silenced},unsilence:function(){return 0!==this._silenceCount&&--this._silenceCount,0===this._silenceCount&&(this._silenced=!1),!this._silenced},startJob:function(t,e,n,i){var r=this.__jobs=this.__jobs||{}
return i=i||5,"string"==typeof e&&(e=this[e]),this.stopJob(t),r[t]=setTimeout(this.bindSafely(function(){l.add(this.bindSafely(e),i,t)}),n),this},stopJob:function(t){var e=this.__jobs=this.__jobs||{}
e[t]&&(clearTimeout(e[t]),delete e[t]),l.remove(t)},throttleJob:function(t,e,n){var i=this.__jobs=this.__jobs||{}
return i[t]||("string"==typeof e&&(e=this[e]),e.call(this),i[t]=setTimeout(this.bindSafely(function(){this.stopJob(t)}),n)),this}})
f.prototype.defaultKind=f,r.setDefaultCtor(f),f.create=function(t){var e,n
if(!t.kind&&t.hasOwnProperty("kind"))throw new Error("enyo.create: Attempt to create a null kind. Check dependencies for ["+t.name+"]")
return e=t.kind||t.isa||r.getDefaultCtor(),n=r.constructorForKind(e),n||(s.error("No constructor found for kind "+e),n=f),new n(t)},f.subclass=function(t,e){var n=t.prototype
e.components?(n.kindComponents=e.components,delete n.components):e.componentOverrides&&(n.kindComponents=f.overrideComponents(n.kindComponents,e.componentOverrides,n.defaultKind))},f.concat=function(t,e){var n,i=t.prototype||t
e.handlers&&(n=i.handlers?o.clone(i.handlers):{},i.handlers=o.mixin(n,e.handlers),delete e.handlers),e.events&&f.publishEvents(i,e)},f.overrideComponents=function(t,e,n){var i=function(t,e){var n=o.isFunction(e)&&"kind"!==t||r.isInherited(e)
return!n}
t=o.clone(t)
for(var s=0;s<t.length;s++){var a=o.clone(t[s]),u=e[a.name],c=r.constructorForKind(a.kind||n)
if(u){r.concatHandler(a,u)
for(var l=a.kind&&("string"==typeof a.kind&&o.getPath(a.kind)||"function"==typeof a.kind&&a.kind)||r.getDefaultCtor();l;)l.concat&&l.concat(a,u,!0),l=l.prototype.base
o.mixin(a,u,{filter:i})}a.components&&(a.components=f.overrideComponents(a.components,e,c.prototype.defaultKind)),t[s]=a}return t},f.publishEvents=function(t,e){var n,i,r=e.events
if(r){i=t.prototype||t
for(n in r)f.addEvent(n,r[n],i)}},f.addEvent=function(t,e,n){var i,r
o.isString(e)?("on"!=t.slice(0,2)&&(s.warn('enyo/Component.addEvent: event names must start with "on". '+n.kindName+' event "'+t+'" was auto-corrected to "on'+t+'".'),t="on"+t),i=e,r="do"+o.cap(t.slice(2))):(i=e.value,r=e.caller),n[t]=i,n[r]||(n[r]=function(e,n){var i=n||e
i||(i={})
var r=i.delegate
i.delegate=void 0,o.exists(i.type)||(i.type=t),this.bubble(t,i),r&&(i.delegate=r)})}},{"./kind":"enyo/kind","./utils":"enyo/utils","./logger":"enyo/logger","./CoreObject":"enyo/CoreObject","./ApplicationSupport":"enyo/ApplicationSupport","./ComponentBindingSupport":"enyo/ComponentBindingSupport","./jobs":"enyo/jobs"}],"enyo/Signals":[function(t,e,n,require,request){require("enyo")
var i=require("./kind"),r=require("./utils"),o=require("./Component"),s=t.exports=i({name:"enyo.Signals",kind:o,create:i.inherit(function(t){return function(){t.apply(this,arguments),s.addListener(this)}}),destroy:i.inherit(function(t){return function(){s.removeListener(this),t.apply(this,arguments)}}),notify:function(t,e){this.dispatchEvent(t,e)},protectedStatics:{listeners:[],addListener:function(t){this.listeners.push(t)},removeListener:function(t){r.remove(t,this.listeners)}},statics:{send:function(t,e){r.forEach(this.listeners,function(n){n.notify(t,e)})}}})},{"./kind":"enyo/kind","./utils":"enyo/utils","./Component":"enyo/Component"}],"enyo/master":[function(t,e,n,require,request){require("enyo")
var i=require("./utils"),r=require("./Component"),o=require("./Signals"),s=t.exports=new r({name:"master",notInstanceOwner:!0,eventFlags:{showingOnly:!0},getId:function(){return""},isDescendantOf:i.nop,bubble:function(t,e){"onresize"==t?(s.waterfallDown("onresize",this.eventFlags),s.waterfallDown("onpostresize",this.eventFlags)):o.send(t,e)}})},{"./utils":"enyo/utils","./Component":"enyo/Component","./Signals":"enyo/Signals"}],"enyo/dispatcher":[function(t,e,n,require,request){function i(t){return u.dispatch(t)}require("enyo")
var r=require("./logger"),o=require("./master"),s=require("./utils"),a=require("./dom"),u=t.exports=u={$:{},events:["mousedown","mouseup","mouseover","mouseout","mousemove","mousewheel","click","dblclick","change","keydown","keyup","keypress","input","paste","copy","cut","webkitTransitionEnd","transitionend","webkitAnimationEnd","animationend","webkitAnimationStart","animationstart","webkitAnimationIteration","animationiteration"],windowEvents:["resize","load","unload","message","hashchange","popstate","focus","blur"],features:[],connect:function(){var t,e,i=u
for(t=0;e=i.events[t];t++)i.listen(document,e)
for(t=0;e=i.windowEvents[t];t++)"unload"===e&&"object"==typeof n.chrome&&n.chrome.app||i.listen(window,e)},listen:function(t,e,n){t.addEventListener(e,n||i,!1)},stopListening:function(t,e,n){t.removeEventListener(e,n||i,!1)},dispatch:function(t){var e=this.findDispatchTarget(t.target)||this.findDefaultTarget()
t.dispatchTarget=e
for(var n,i=0;n=this.features[i];i++)if(n.call(this,t)===!0)return
if(e&&!t.preventDispatch)return this.dispatchBubble(t,e)},findDispatchTarget:function(t){var e,n=t
try{for(;n;){if(e=this.$[n.id]){e.eventNode=n
break}n=n.parentNode}}catch(t){r.log(t,n)}return e},findDefaultTarget:function(){return o},dispatchBubble:function(t,e){var n=t.type
return n=t.customEvent?n:"on"+n,e.bubble(n,t,e)}}
u.iePreventDefault=function(){try{this.returnValue=!1}catch(t){}},u.bubble=function(t){t&&u.dispatch(t)},u.bubbler="enyo.bubble(arguments[0])",function(){var t=function(){u.bubble(arguments[0])}
u.makeBubble=function(){var e=Array.prototype.slice.call(arguments,0),n=e.shift()
"object"==typeof n&&"function"==typeof n.hasNode&&s.forEach(e,function(e){this.hasNode()&&u.listen(this.node,e,t)},n)},u.unmakeBubble=function(){var e=Array.prototype.slice.call(arguments,0),n=e.shift()
"object"==typeof n&&"function"==typeof n.hasNode&&s.forEach(e,function(e){this.hasNode()&&u.stopListening(this.node,e,t)},n)}}(),a.requiresWindow(u.connect),u.features.push(function(t){if("click"===t.type&&0===t.clientX&&0===t.clientY&&!t.detail){var e=s.clone(t)
e.type="tap",e.preventDefault=s.nop,u.dispatch(e)}})
var c={}
u.features.push(function(t){if("mousemove"==t.type||"tap"==t.type||"click"==t.type||"touchmove"==t.type){var e="touchmove"==t.type?t.touches[0]:t
c.clientX=e.clientX,c.clientY=e.clientY,c.pageX=e.pageX,c.pageY=e.pageY,c.screenX=e.screenX,c.screenY=e.screenY}}),u.getPosition=function(){return s.clone(c)},u.features.push(function(t){if("keydown"===t.type||"keyup"===t.type||"keypress"===t.type){t.keySymbol=this.keyMap[t.keyCode]
var e=this.findDefaultTarget()
t.dispatchTarget!==e&&this.dispatchBubble(t,e)}}),s.mixin(u,{keyMap:{},registerKeyMap:function(t){s.mixin(this.keyMap,t)}}),u.features.push(function(t){if(this.captureTarget){var e=t.dispatchTarget,n=(t.customEvent?"":"on")+t.type,i=this.captureEvents[n],r=this.captureHandlerScope||this.captureTarget,o=i&&r[i],s=o&&!(e&&e.isDescendantOf&&e.isDescendantOf(this.captureTarget))
if(s){var a=t.captureTarget=this.captureTarget
t.preventDispatch=o&&o.apply(r,[a,t])&&!this.autoForwardEvents[t.type]}}}),s.mixin(u,{autoForwardEvents:{leave:1,resize:1},captures:[],capture:function(t,e,n){var i={target:t,events:e,scope:n}
this.captures.push(i),this.setCaptureInfo(i)},release:function(t){for(var e=this.captures.length-1;e>=0;e--)if(this.captures[e].target===t){this.captures.splice(e,1),this.setCaptureInfo(this.captures[this.captures.length-1])
break}},setCaptureInfo:function(t){this.captureTarget=t&&t.target,this.captureEvents=t&&t.events,this.captureHandlerScope=t&&t.scope}}),function(){var t="previewDomEvent",e={feature:function(t){e.dispatch(t,t.dispatchTarget)},dispatch:function(e,n){var i,r,o=this.buildLineage(n)
for(i=0;r=o[i];i++)if(r[t]&&r[t](e)===!0)return void(e.preventDispatch=!0)},buildLineage:function(t){for(var e=[],n=t;n;)e.unshift(n),n=n.parent
return e}}
u.features.push(e.feature)}()},{"./logger":"enyo/logger","./master":"enyo/master","./utils":"enyo/utils","./dom":"enyo/dom"}],"enyo/UiComponent":[function(t,e,n,require,request){require("enyo")
var i=require("./kind"),r=require("./utils"),o=require("./master"),s=require("./Component"),a=t.exports=i({name:"enyo.UiComponent",kind:s,statics:{statefulKeys:["content","active","disabled"],findStatic:function(t,e){return t?t[e]?t[e]:a.findStatic(t.kind,e):a[e]}},published:{container:null,parent:null,controlParentName:"client",layoutKind:""},handlers:{onresize:"handleResize"},addBefore:void 0,create:i.inherit(function(t){return function(){this.controls=this.controls||[],this.children=this.children||[],this.containerChanged(),t.apply(this,arguments),this.layoutKindChanged()}}),destroy:i.inherit(function(t){return function(){this.destroyClientControls(),this.setContainer(null),t.apply(this,arguments)}}),importProps:i.inherit(function(t){return function(e){t.apply(this,arguments),this.owner||(this.owner=o)}}),createComponents:i.inherit(function(t){return function(){var e=t.apply(this,arguments)
return this.discoverControlParent(),e}}),updateComponents:function(t,e,n){var i,r,o,s,a,u,c,l,h={},d=this.computeComponentsDiff(t,h)
if(d)return this.destroyClientControls(),this.createComponents(t,e),!0
for(r=this.getClientControls(),c=0;c<t.length;c++)for(i=t[c],o=r[c],l=i.kind||this.defaultKind,s=h[c],u=0;u<s.length;u++)a=s[u],i[a]!=o[a]&&(n&&n.silent?o[a]=i[a]:o.set(a,i[a]))
return!1},computeComponentsDiff:function(t,e){var n=this.computeComponentsHash(t,e),i=!1
return i=!this._compHash||this._compHash!=n,this._compHash=n,i},computeComponentsHash:function(t,e){var n,i,r,o,s,u,c=0
for(r=t.map(this.bindSafely(function(t,n){var i,r,o,s=t.kind||this.defaultKind,u=a.findStatic(s,"statefulKeys"),l=Object.keys(t),h={}
for(e[n]=u,i=0;i<l.length;i++)r=l[i],u.indexOf(r)==-1&&(o=t[r],"function"==typeof o&&(o=o.prototype&&o.prototype.kindName||o.toString()),h[r]=o,c++)
return h})),i=JSON.stringify(r)+c,n=0,u=0,s=i.length;u<s;u++)o=i.charCodeAt(u),n=(n<<5)-n+o,n|=0
return n},discoverControlParent:function(){this.controlParent=this.$[this.controlParentName]||this.controlParent},adjustComponentProps:i.inherit(function(t){return function(e){e.container=e.container||this,t.apply(this,arguments)}}),containerChanged:function(t){t&&t.removeControl(this),this.container&&this.container.addControl(this,this.addBefore)},parentChanged:function(t){t&&t!=this.parent&&t.removeChild(this)},isDescendantOf:function(t){for(var e=this;e&&e!=t;)e=e.parent
return t&&e===t},getControls:function(){return this.controls},getClientControls:function(){for(var t,e=[],n=0,i=this.controls;t=i[n];n++)t.isChrome||e.push(t)
return e},destroyClientControls:function(){for(var t,e=this.getClientControls(),n=0;t=e[n];n++)t.destroy()},addControl:function(t,e){if(void 0!==e){var n=null===e?0:this.indexOfControl(e)
this.controls.splice(n,0,t)}else this.controls.push(t)
this.addChild(t,e)},removeControl:function(t){return t.setParent(null),r.remove(t,this.controls)},indexOfControl:function(t){return r.indexOf(t,this.controls)},indexOfClientControl:function(t){return r.indexOf(t,this.getClientControls())},indexInContainer:function(){return this.container.indexOfControl(this)},clientIndexInContainer:function(){return this.container.indexOfClientControl(this)},controlAtIndex:function(t){return this.controls[t]},getNextControl:function(){var t,e,n,i=this.getParent().children
for(n=i.length-1;n>=0;n--){if(t=i[n],t===this)return e?e:null
t.generated&&(e=t)}return null},addChild:function(t,e){if(this.controlParent)this.controlParent.addChild(t,e)
else if(t.setParent(this),void 0!==e){var n=null===e?0:this.indexOfChild(e)
this.children.splice(n,0,t)}else this.children.push(t)},removeChild:function(t){return r.remove(t,this.children)},indexOfChild:function(t){return r.indexOf(t,this.children)},layoutKindChanged:function(){this.layout&&this.layout.destroy(),this.layout=i.createFromKind(this.layoutKind,this),this.generated&&this.render()},flow:function(){this.layout&&this.layout.flow()},reflow:function(){this.layout&&this.layout.reflow()},resize:function(){this.waterfall("onresize"),this.waterfall("onpostresize")},handleResize:function(){this.reflow()},waterfallDown:function(t,e,n){e=e||{}
for(var i in this.$)this.$[i]instanceof a||this.$[i].waterfall(t,e,n)
for(var r,o=0,s=this.children;r=s[o];o++)r.waterfall(t,e,n)},getBubbleTarget:function(t,e){return e.delegate?this.owner:this.bubbleTarget||this.cachedBubble&&this.cachedBubbleTarget[t]||this.parent||this.owner},bubbleTargetChanged:function(t){if(t&&this.cachedBubble&&this.cachedBubbleTarget)for(var e in this.cachedBubbleTarget)this.cachedBubbleTarget[e]===t&&delete this.cachedBubbleTarget[e]}})},{"./kind":"enyo/kind","./utils":"enyo/utils","./master":"enyo/master","./Component":"enyo/Component"}],"enyo/AccessibilitySupport":[function(t,e,n,require,request){function i(t,e){t&&l.listen(t,"scroll",function(){t.scrollTop=0,t.scrollLeft=e?t.scrollWidth:0})}function r(t){var e,n,i
for(e=0,n=this._ariaObservers.length;e<n;e++)i=this._ariaObservers[e],(t||i.pending)&&i.method&&(i.method(),i.pending=!1)}function o(t){var e
t.pending||(t.pending=!0,e=this.bindSafely(r),this.accessibilityDefer?this.startJob("updateAriaAttributes",e,16):e())}function s(t,e){var n=this[t]
this.setAriaAttribute(e,void 0===n?null:n)}function a(t,e){this.setAriaAttribute(t,e)}function u(t){var e,n,i,o=t._ariaObservers
for(t._ariaObservers=[],e=0,n=p.length;e<n;e++)c(t,p[e])
if(o)for(e=0,n=o.length;e<n;e++)c(t,o[e])
i=r.bind(t,!0),t.addObserver("accessibilityDisabled",i),i()}function c(t,e){var n,i=e.path||e.from,r=e.method&&t.bindSafely(e.method)||!i&&e.to&&void 0!==e.value&&t.bindSafely(a,e.to,e.value)||e.to&&t.bindSafely(s,i,e.to)||null,u={path:i,method:r,pending:!1},c=o.bind(t,u)
if(t._ariaObservers.push(u),f.isArray(i))for(n=i.length-1;n>=0;--n)t.addObserver(i[n],c)
else i&&t.addObserver(i,c)}var l=require("../dispatcher"),h=require("../kind"),d=require("../platform"),f=require("../utils"),p=[{from:"accessibilityDisabled",method:function(){this.setAriaAttribute("aria-hidden",this.accessibilityDisabled?"true":null)}},{from:"accessibilityLive",method:function(){var t=this.accessibilityLive===!0&&"assertive"||this.accessibilityLive||null
this.setAriaAttribute("aria-live",t)}},{path:["accessibilityAlert","accessibilityRole"],method:function(){var t=this.accessibilityAlert&&"alert"||this.accessibilityRole||null
this.setAriaAttribute("role",t)}},{path:["content","accessibilityHint","accessibilityLabel","tabIndex"],method:function(){var t=this.accessibilityLabel||this.content||this.accessibilityHint||!1,e=this.accessibilityLabel||this.content||null,n=this.accessibilityHint&&e&&e+" "+this.accessibilityHint||this.accessibilityHint||this.accessibilityLabel||null
this.setAriaAttribute("aria-label",n),this.tabIndex||0===this.tabIndex?this.setAriaAttribute("tabindex",this.tabIndex):t&&void 0===this.tabIndex&&d.webos?this.setAriaAttribute("tabindex",-1):this.setAriaAttribute("tabindex",null)}}],g={name:"enyo.AccessibilitySupport",accessibilityLabel:"",accessibilityHint:"",accessibilityRole:"",accessibilityAlert:!1,accessibilityLive:!1,accessibilityDisabled:!1,accessibilityPreventScroll:!1,create:h.inherit(function(t){return function(e){t.apply(this,arguments),u(this)}}),setAriaAttribute:function(t,e){this.accessibilityDisabled&&"aria-hidden"!=t?e=null:void 0!==e&&null!==e&&(e=String(e)),this.getAttribute(t)!==e&&this.setAttribute(t,e)},rendered:h.inherit(function(t){return function(){t.apply(this,arguments),this.accessibilityPreventScroll&&i(this.hasNode(),this.rtl)}})},y=h.concatHandler
h.concatHandler=function(t,e,n){y.call(this,t,e,n)
var i=t.prototype||t,r=i._ariaObservers&&i._ariaObservers.slice(),o=e.ariaObservers
o&&o instanceof Array&&(r?r.push.apply(r,o):r=o.slice()),i._ariaObservers=r},t.exports=g},{"../dispatcher":"enyo/dispatcher","../kind":"enyo/kind","../platform":"enyo/platform","../utils":"enyo/utils"}],"enyo/Control/fullscreen":[function(t,e,n,require,request){var i=require("../dispatcher"),r=require("../utils"),o=require("../ready"),s=require("../Signals")
t.exports=function(t){var e=t.floatingLayer,n={fullscreenControl:null,fullscreenElement:null,requestor:null,elementAccessor:"fullscreenElement"in document?"fullscreenElement":"mozFullScreenElement"in document?"mozFullScreenElement":"webkitFullscreenElement"in document?"webkitFullscreenElement":null,requestAccessor:"requestFullscreen"in document.documentElement?"requestFullscreen":"mozRequestFullScreen"in document.documentElement?"mozRequestFullScreen":"webkitRequestFullscreen"in document.documentElement?"webkitRequestFullscreen":null,cancelAccessor:"cancelFullScreen"in document?"cancelFullScreen":"mozCancelFullScreen"in document?"mozCancelFullScreen":"webkitCancelFullScreen"in document?"webkitCancelFullScreen":null,nativeSupport:function(){return null!==this.elementAccessor&&null!==this.requestAccessor&&null!==this.cancelAccessor},getFullscreenElement:function(){return this.nativeSupport()?document[this.elementAccessor]:this.fullscreenElement},getFullscreenControl:function(){return this.fullscreenControl},requestFullscreen:function(t){return!(this.getFullscreenControl()||!t.hasNode())&&(this.requestor=t,this.nativeSupport()?t.hasNode()[this.requestAccessor]():this.fallbackRequestFullscreen(),!0)},cancelFullscreen:function(){this.nativeSupport()?document[this.cancelAccessor]():this.fallbackCancelFullscreen()},setFullscreenElement:function(t){this.fullscreenElement=t},setFullscreenControl:function(t){this.fullscreenControl=t},fallbackRequestFullscreen:function(){var t=this.requestor
t&&(t.prevAddBefore=t.parent.controlAtIndex(t.indexInContainer()+1),e.hasNode()||e.render(),t.addClass("enyo-fullscreen"),t.appendNodeToParent(e.hasNode()),t.resize(),this.setFullscreenControl(t),this.setFullscreenElement(t.hasNode()))},fallbackCancelFullscreen:function(){var t,e,n=this.fullscreenControl
n&&(t=n.prevAddBefore?n.prevAddBefore.hasNode():null,e=n.parent.hasNode(),n.prevAddBefore=null,n.removeClass("enyo-fullscreen"),t?n.insertNodeInParent(e,t):n.appendNodeToParent(e),n.resize(),this.setFullscreenControl(null),this.setFullscreenElement(null))},detectFullscreenChangeEvent:function(){this.setFullscreenControl(this.requestor),this.requestor=null,s.send("onFullscreenChange")}}
return o(function(){document.addEventListener("webkitfullscreenchange",r.bind(n,"detectFullscreenChangeEvent"),!1),document.addEventListener("mozfullscreenchange",r.bind(n,"detectFullscreenChangeEvent"),!1),document.addEventListener("fullscreenchange",r.bind(n,"detectFullscreenChangeEvent"),!1)}),n.nativeSupport()||i.features.push(function(t){"keydown"===t.type&&27===t.keyCode&&n.cancelFullscreen()}),n}},{"../dispatcher":"enyo/dispatcher","../utils":"enyo/utils","../ready":"enyo/ready","../Signals":"enyo/Signals"}],"enyo/gesture/drag":[function(t,e,n,require,request){var i=require("../dispatcher"),r=require("../utils"),o=require("./util")
t.exports={holdPulseDefaultConfig:{frequency:200,events:[{name:"hold",time:200}],resume:!1,preventTap:!1,moveTolerance:16,endHold:"onMove"},configureHoldPulse:function(t){this._holdPulseConfig=this._holdPulseConfig||r.clone(this.holdPulseDefaultConfig,!0),r.mixin(this._holdPulseConfig,t)},resetHoldPulseConfig:function(){this._holdPulseConfig=null},holdPulseConfig:{},trackCount:5,minFlick:.1,minTrack:8,down:function(t){this.stopDragging(t),this.target=t.target,this.startTracking(t)},move:function(t){if(this.tracking){if(this.track(t),!t.which)return this.stopDragging(t),this.endHold(),void(this.tracking=!1)
this.dragEvent?this.sendDrag(t):"onMove"===this.holdPulseConfig.endHold&&(this.dy*this.dy+this.dx*this.dx>=this.holdPulseConfig.moveTolerance?this.holdJob&&(this.holdPulseConfig.resume?this.suspendHold():(this.endHold(),this.sendDragStart(t))):this.holdPulseConfig.resume&&!this.holdJob&&this.resumeHold())}},up:function(t){this.endTracking(t),this.stopDragging(t),this.endHold(),this.target=null},enter:function(t){this.holdPulseConfig.resume&&"onLeave"===this.holdPulseConfig.endHold&&this.target&&t.target===this.target&&this.resumeHold()},leave:function(t){this.dragEvent?this.sendDragOut(t):"onLeave"===this.holdPulseConfig.endHold&&(this.holdPulseConfig.resume?this.suspendHold():(this.endHold(),this.sendDragStart(t)))},stopDragging:function(t){if(this.dragEvent){this.sendDrop(t)
var e=this.sendDragFinish(t)
return this.dragEvent=null,e}},makeDragEvent:function(t,e,n,i){var r=Math.abs(this.dx),s=Math.abs(this.dy),a=r>s,u=(a?s/r:r/s)<.414,c={}
return c.type=t,c.dx=this.dx,c.dy=this.dy,c.ddx=this.dx-this.lastDx,c.ddy=this.dy-this.lastDy,c.xDirection=this.xDirection,c.yDirection=this.yDirection,c.pageX=n.pageX,c.pageY=n.pageY,c.clientX=n.clientX,c.clientY=n.clientY,c.horizontal=a,c.vertical=!a,c.lockable=u,c.target=e,c.dragInfo=i,c.ctrlKey=n.ctrlKey,c.altKey=n.altKey,c.metaKey=n.metaKey,c.shiftKey=n.shiftKey,c.srcEvent=n.srcEvent,c.preventDefault=o.preventDefault,c.disablePrevention=o.disablePrevention,c},sendDragStart:function(t){this.dragEvent=this.makeDragEvent("dragstart",this.target,t),i.dispatch(this.dragEvent)},sendDrag:function(t){var e=this.makeDragEvent("dragover",t.target,t,this.dragEvent.dragInfo)
i.dispatch(e),e.type="drag",e.target=this.dragEvent.target,i.dispatch(e)},sendDragFinish:function(t){var e=this.makeDragEvent("dragfinish",this.dragEvent.target,t,this.dragEvent.dragInfo)
e.preventTap=function(){t.preventTap&&t.preventTap()},i.dispatch(e)},sendDragOut:function(t){var e=this.makeDragEvent("dragout",t.target,t,this.dragEvent.dragInfo)
i.dispatch(e)},sendDrop:function(t){var e=this.makeDragEvent("drop",t.target,t,this.dragEvent.dragInfo)
e.preventTap=function(){t.preventTap&&t.preventTap()},i.dispatch(e)},startTracking:function(t){this.tracking=!0,this.px0=t.clientX,this.py0=t.clientY,this.flickInfo={},this.flickInfo.startEvent=t,this.flickInfo.moves=[],this.track(t)},track:function(t){this.lastDx=this.dx,this.lastDy=this.dy,this.dx=t.clientX-this.px0,this.dy=t.clientY-this.py0,this.xDirection=this.calcDirection(this.dx-this.lastDx,0),this.yDirection=this.calcDirection(this.dy-this.lastDy,0)
var e=this.flickInfo
e.moves.push({x:t.clientX,y:t.clientY,t:r.perfNow()}),e.moves.length>this.trackCount&&e.moves.shift()},endTracking:function(){this.tracking=!1
var t=this.flickInfo,e=t&&t.moves
if(e&&e.length>1){for(var n,i=e[e.length-1],o=r.perfNow(),s=e.length-2,a=0,u=0,c=0,l=0,h=0,d=0,f=0;n=e[s];s--)a=o-n.t,u=(i.x-n.x)/a,c=(i.y-n.y)/a,d=d||(u<0?-1:u>0?1:0),f=f||(c<0?-1:c>0?1:0),(u*d>l*d||c*f>h*f)&&(l=u,h=c)
var p=Math.sqrt(l*l+h*h)
p>this.minFlick&&this.sendFlick(t.startEvent,l,h,p)}this.flickInfo=null},calcDirection:function(t,e){return t>0?1:t<0?-1:e},normalizeHoldPulseConfig:function(t){var e=r.clone(t)
return e.frequency=e.delay,e.events=[{name:"hold",time:e.delay}],e},_configureHoldPulse:function(t){var e=void 0===t.delay?t:this.normalizeHoldPulseConfig(t)
r.mixin(this.holdPulseConfig,e)},prepareHold:function(t){this.holdPulseConfig=r.clone(this._holdPulseConfig||this.holdPulseDefaultConfig,!0),t.configureHoldPulse=this._configureHoldPulse.bind(this)},beginHold:function(t){var e
this.endHold(),this.holdStart=r.perfNow(),this._holdJobFunction=r.bind(this,"handleHoldPulse"),e=this._holdJobEvent=r.clone(t),e.srcEvent=r.clone(t.srcEvent),e.downEvent=t,this._pulsing=!1,this._unsent=r.clone(this.holdPulseConfig.events),this._unsent.sort(this.sortEvents),this._next=this._unsent.shift(),this._next&&(this.holdJob=setInterval(this._holdJobFunction,this.holdPulseConfig.frequency))},resumeHold:function(){this.handleHoldPulse(),this.holdJob=setInterval(this._holdJobFunction,this.holdPulseConfig.frequency)},sortEvents:function(t,e){return t.time<e.time?-1:t.time>e.time?1:0},endHold:function(){var t=this._holdJobEvent
this.suspendHold(),t&&this._pulsing&&this.sendRelease(t),this._pulsing=!1,this._unsent=null,this._holdJobFunction=null,this._holdJobEvent=null,this._next=null},suspendHold:function(){clearInterval(this.holdJob),this.holdJob=null},handleHoldPulse:function(){var t,e=r.perfNow()-this.holdStart,n=this._holdJobEvent
this.maybeSendHold(n,e),this._pulsing&&(t=o.makeEvent("holdpulse",n),t.holdTime=e,i.dispatch(t))},maybeSendHold:function(t,e){for(var n=this._next;n&&n.time<=e;){var r=o.makeEvent(n.name,t)
!this._pulsing&&this.holdPulseConfig.preventTap&&t.downEvent.preventTap(),this._pulsing=!0,i.dispatch(r),n=this._next=this._unsent&&this._unsent.shift()}},sendRelease:function(t){var e=o.makeEvent("release",t)
i.dispatch(e)},sendFlick:function(t,e,n,r){var s=o.makeEvent("flick",t)
s.xVelocity=e,s.yVelocity=n,s.velocity=r,i.dispatch(s)}}},{"../dispatcher":"enyo/dispatcher","../utils":"enyo/utils","./util":"enyo/gesture/util"}],"enyo/gesture/touchGestures":[function(t,e,n,require,request){var i=require("../dispatcher"),r=require("../utils")
t.exports={orderedTouches:[],gesture:null,touchstart:function(t){var e,n=t.changedTouches,o=n.length
for(e=0;e<o;e++){var s=n[e].identifier
r.indexOf(s,this.orderedTouches)<0&&this.orderedTouches.push(s)}if(t.touches.length>=2&&!this.gesture){var a=this.gesturePositions(t)
this.gesture=this.gestureVector(a),this.gesture.angle=this.gestureAngle(a),this.gesture.scale=1,this.gesture.rotation=0
var u=this.makeGesture("gesturestart",t,{vector:this.gesture,scale:1,rotation:0})
i.dispatch(u)}},touchend:function(t){var e,n=t.changedTouches,o=n.length
for(e=0;e<o;e++)r.remove(n[e].identifier,this.orderedTouches)
if(t.touches.length<=1&&this.gesture){var s=t.touches[0]||t.changedTouches[t.changedTouches.length-1]
i.dispatch(this.makeGesture("gestureend",t,{vector:{xcenter:s.pageX,ycenter:s.pageY},scale:this.gesture.scale,rotation:this.gesture.rotation})),this.gesture=null}},touchmove:function(t){if(this.gesture){var e=this.makeGesture("gesturechange",t)
this.gesture.scale=e.scale,this.gesture.rotation=e.rotation,i.dispatch(e)}},findIdentifiedTouch:function(t,e){for(var n,i=0;n=t[i];i++)if(n.identifier===e)return n},gesturePositions:function(t){var e=this.findIdentifiedTouch(t.touches,this.orderedTouches[0]),n=this.findIdentifiedTouch(t.touches,this.orderedTouches[this.orderedTouches.length-1]),i=e.pageX,r=n.pageX,o=e.pageY,s=n.pageY,a=r-i,u=s-o,c=Math.sqrt(a*a+u*u)
return{x:a,y:u,h:c,fx:i,lx:r,fy:o,ly:s}},gestureAngle:function(t){var e=t,n=Math.asin(e.y/e.h)*(180/Math.PI)
return e.x<0&&(n=180-n),e.x>0&&e.y<0&&(n+=360),n},gestureVector:function(t){var e=t
return{magnitude:e.h,xcenter:Math.abs(Math.round(e.fx+e.x/2)),ycenter:Math.abs(Math.round(e.fy+e.y/2))}},makeGesture:function(t,e,n){var i,o,s
if(n)i=n.vector,o=n.scale,s=n.rotation
else{var a=this.gesturePositions(e)
i=this.gestureVector(a),o=i.magnitude/this.gesture.magnitude,s=(360+this.gestureAngle(a)-this.gesture.angle)%360}var u=r.clone(e)
return r.mixin(u,{type:t,scale:o,pageX:i.xcenter,pageY:i.ycenter,rotation:s})}}},{"../dispatcher":"enyo/dispatcher","../utils":"enyo/utils"}],"enyo/gesture":[function(t,e,n,require,request){var i=require("../dispatcher"),r=require("../dom"),o=require("../platform"),s=require("../utils"),a=require("./drag"),u=require("./touchGestures"),c=require("./util"),l=t.exports={down:function(t){var e=c.makeEvent("down",t)
a.prepareHold(e),e.preventTap=function(){e._tapPrevented=!0},i.dispatch(e),this.downEvent=e,a.beginHold(e)},move:function(t){var e=c.makeEvent("move",t)
e.dx=e.dy=e.horizontal=e.vertical=0,e.which&&this.downEvent&&(e.dx=t.clientX-this.downEvent.clientX,e.dy=t.clientY-this.downEvent.clientY,e.horizontal=Math.abs(e.dx)>Math.abs(e.dy),e.vertical=!e.horizontal),i.dispatch(e)},up:function(t){var e=c.makeEvent("up",t)
if(e._tapPrevented=this.downEvent&&this.downEvent._tapPrevented&&this.downEvent.which==e.which,e.preventTap=function(){e._tapPrevented=!0},i.dispatch(e),!e._tapPrevented&&this.downEvent&&1==this.downEvent.which){var n=this.findCommonAncestor(this.downEvent.target,t.target)
n&&(this.supportsDoubleTap(n)?this.doubleTap(e,n):this.sendTap(e,n))}this.downEvent&&this.downEvent.which==e.which&&(this.downEvent=null)},over:function(t){var e=c.makeEvent("enter",t)
i.dispatch(e)},out:function(t){var e=c.makeEvent("leave",t)
i.dispatch(e)},sendTap:function(t,e){var n=c.makeEvent("tap",t)
n.target=e,i.dispatch(n)},tapData:{id:null,timer:null,start:0},doubleTapEnabled:!1,supportsDoubleTap:function(t){var e=i.findDispatchTarget(t)
return!!e&&(this.doubleTapEnabled?!!e.doubleTapEnabled:e.doubleTapEnabled===!0)},doubleTap:function(t,e){var n=i.findDispatchTarget(e)
if(this.tapData.id!==n.id)this.resetTapData(!0),this.tapData.id=n.id,this.tapData.event=t,this.tapData.target=e,this.tapData.timer=setTimeout(s.bind(this,"resetTapData",!0),n.doubleTapInterval),this.tapData.start=s.perfNow()
else{var r=c.makeEvent("doubletap",t)
r.target=e,r.tapInterval=s.perfNow()-this.tapData.start,this.resetTapData(!1),i.dispatch(r)}},resetTapData:function(t){var e=this.tapData
t&&e.id&&this.sendTap(e.event,e.target),clearTimeout(e.timer),e.id=e.start=e.event=e.target=e.timer=null},findCommonAncestor:function(t,e){for(var n=e;n;){if(this.isTargetDescendantOf(t,n))return n
n=n.parentNode}},isTargetDescendantOf:function(t,e){for(var n=t;n;){if(n==e)return!0
n=n.parentNode}},drag:a}
t.exports.events={mousedown:function(t){l.down(t)},mouseup:function(t){l.up(t)},mousemove:function(t){l.move(t)},mouseover:function(t){l.over(t)},mouseout:function(t){l.out(t)}},r.requiresWindow(function(){document.addEventListener&&document.addEventListener("DOMMouseScroll",function(t){var e,n=s.clone(t),r=n.VERTICAL_AXIS==n.axis
n.preventDefault=function(){t.preventDefault()},n.type="mousewheel",e=n.detail*-40,n.wheelDeltaY=r?e:0,n.wheelDeltaX=r?0:e,i.dispatch(n)},!1)})
var h={touchstart:!0,touchmove:!0,touchend:!0}
i.features.push(function(t){var e=t.type
l.events[e]&&l.events[e](t),!o.gesture&&o.touch&&h[e]&&u[e](t),a[e]&&a[e](t)})},{"../dispatcher":"enyo/dispatcher","../dom":"enyo/dom","../platform":"enyo/platform","../utils":"enyo/utils","./drag":"enyo/gesture/drag","./touchGestures":"enyo/gesture/touchGestures","./util":"enyo/gesture/util"}],"enyo/Control":[function(t,e,n,require,request){function i(t){var e=o(),n=t._retainedNode
n&&e.appendChild(n),t._retainedNode=null}function r(t){var e=o()
t&&e.removeChild(t)}function o(){var t=m
return t||(t=m=document.createElement("div"),t.id="node_purgatory",t.style.display="none",document.body.appendChild(t)),t}require("enyo")
var s=require("../kind"),a=require("../utils"),u=require("../platform"),c=require("../dispatcher"),l=require("../options"),h=require("../roots"),d=require("../AccessibilitySupport"),f=require("../UiComponent"),p=require("../HTMLStringDelegate"),g=require("../dom"),y=require("./fullscreen"),v=require("./floatingLayer")
require("../gesture")
var m,b=t.exports=s({name:"enyo.Control",kind:f,mixins:l.accessibility?[d]:null,defaultKind:null,tag:"div",attributes:null,fit:null,allowHtml:!1,style:"",kindStyle:"",classes:"",kindClasses:"",controlClasses:"",content:"",doubleTapEnabled:"inherit",doubleTapInterval:300,renderOnShow:!1,handlers:{ontap:"tap",onShowingChanged:"showingChangedHandler"},strictlyInternalEvents:{onenter:1,onleave:1},isInternalEvent:function(t){var e=c.findDispatchTarget(t.relatedTarget)
return e&&e.isDescendantOf(this)},getBounds:function(){var t=this.hasNode(),e=t&&g.getBounds(t)
return e||{left:void 0,top:void 0,width:void 0,height:void 0}},setBounds:function(t,e){var n,i,r="",o=["width","height","left","top","right","bottom"],s=0
for(e=e||"px";i=o[s];++s)n=t[i],(n||0===n)&&(r+=i+":"+n+("string"==typeof n?"":e)+";")
this.set("style",this.style+r)},getAbsoluteBounds:function(){var t=this.hasNode(),e=t&&g.getAbsoluteBounds(t)
return e||{left:void 0,top:void 0,width:void 0,height:void 0,bottom:void 0,right:void 0}},show:function(){this.set("showing",!0)},hide:function(){this.set("showing",!1)},focus:function(){this.hasNode()&&this.node.focus()},blur:function(){this.hasNode()&&this.node.blur()},hasFocus:function(){if(this.hasNode())return document.activeElement===this.node},hasNode:function(){return this.generated&&(this.node||this.findNodeById())},getAttribute:function(t){var e
return this.attributes.hasOwnProperty(t)?this.attributes[t]:(e=this.hasNode(),this.attributes[t]=e?e.getAttribute(t):null)},setAttribute:function(t,e){var n=this.attributes,i=this.hasNode(),r=this.renderDelegate||b.renderDelegate
return t&&(n[t]=e,i&&(null==e||e===!1||""===e?i.removeAttribute(t):i.setAttribute(t,e)),r.invalidate(this,"attributes")),this},getNodeProperty:function(t,e){return this.hasNode()?this.node[t]:e},setNodeProperty:function(t,e){return this.hasNode()&&(this.node[t]=e),this},addContent:function(t){return this.set("content",this.get("content")+t)},hasClass:function(t){return t&&(" "+this.classes+" ").indexOf(" "+t+" ")>-1},addClass:function(t){var e=this.classes||""
return t&&!this.hasClass(t)&&this.set("classes",e+(e?" "+t:t)),this},removeClass:function(t){var e=this.classes
return t&&this.set("classes",(" "+e+" ").replace(" "+t+" "," ").trim()),this},addRemoveClass:function(t,e){return t?this[e?"addClass":"removeClass"](t):this},classesChanged:function(){var t=this.classes,e=this.hasNode(),n=this.attributes,i=this.renderDelegate||b.renderDelegate
e&&(t||this.kindClasses?e.setAttribute("class",t||this.kindClasses):e.removeAttribute("class"),this.classes=t=e.getAttribute("class")),n.class=t,i.invalidate(this,"attributes")},applyStyle:function(t,e){var n=this.hasNode(),i=this.style,r=this.renderDelegate||b.renderDelegate
return n&&(u.firefox<35||u.firefoxOS||u.androidFirefox)&&(t=t.replace(/-([a-z])/gi,function(t,e){return e.toUpperCase()})),null!==e&&""!==e&&void 0!==e?n?(n.style[t]=e,this.style=this.cssText=n.style.cssText):this.set("style",i+(" "+t+":"+e+";")):n?(n.style[t]="",this.style=this.cssText=n.style.cssText,r.invalidate(this,"style")):(i=i.replace(new RegExp("\\s*"+t+"\\s*:\\s*[a-zA-Z0-9\\ ()_\\-'\"%,]*(?:url\\(.*\\)\\s*[a-zA-Z0-9\\ ()_\\-'\"%,]*)?\\s*(?:;|;?$)","gi"),""),this.set("style",i)),r.invalidate(this,"style"),this},addStyles:function(t){var e,n=""
if("object"==typeof t)for(e in t)n+=e+":"+t[e]+";"
else n=t||""
this.set("style",this.style+n)},styleChanged:function(){var t=this.renderDelegate||b.renderDelegate
this.cssText!==this.style&&(this.hasNode()&&(this.node.style.cssText=this.kindStyle+(this.style||""),this.cssText=this.style=this.node.style.cssText),t.invalidate(this,"style"))},getComputedStyleValue:function(t,e){return this.hasNode()?g.getComputedStyleValue(this.node,t):e},findNodeById:function(){return this.id&&(this.node=g.byId(this.id))},idChanged:function(t){t&&b.unregisterDomEvents(t),this.id&&(b.registerDomEvents(this.id,this),this.setAttribute("id",this.id))},contentChanged:function(){var t=this.renderDelegate||b.renderDelegate
t.invalidate(this,"content")},beforeChildRender:function(){this.generated&&this.flow()},showingChanged:function(t){var e
!t&&this.showing?(this.applyStyle("display",this._display||""),this.generated||this.canGenerate||!this.renderOnShow||(e=this.getNextControl(),e&&!this.addBefore&&(this.addBefore=e),this.set("canGenerate",!0),this.render()),this.sendShowingChangedEvent(t)):t&&!this.showing&&(this.sendShowingChangedEvent(t),this._display=this.hasNode()?this.node.style.display:"",this.applyStyle("display","none"))},renderOnShowChanged:function(){this.showing=!!this.showing&&!this.renderOnShow,this.canGenerate=this.canGenerate&&!this.renderOnShow},sendShowingChangedEvent:function(t){var e=t===!0||t===!1,n=this.parent
!e||n&&!n.getAbsoluteShowing(!0)||this.waterfall("onShowingChanged",{originator:this,showing:this.showing})},getAbsoluteShowing:function(t){var e=t?null:this.getBounds(),n=this.parent
return!(!this.generated||this.destroyed||!this.showing||e&&0===e.height&&0===e.width)&&(!(n&&n.getAbsoluteShowing&&(!this.parentNode||this.parentNode!==b.floatingLayer.hasNode()))||n.getAbsoluteShowing(t))},showingChangedHandler:function(t,e){return this.showing&&this._needsReflow&&this.reflow(),t!==this&&!this.showing},reflow:function(){this.layout&&(this._needsReflow=!this.showing||this.layout.reflow())},fitChanged:function(){this.parent.reflow()},isFullscreen:function(){return this.hasNode()&&this.node===b.Fullscreen.getFullscreenElement()},requestFullscreen:function(){return!!this.hasNode()&&!!b.Fullscreen.requestFullscreen(this)},cancelFullscreen:function(){return!!this.isFullscreen()&&(b.Fullscreen.cancelFullscreen(),!0)},canGenerate:!0,showing:!0,renderDelegate:null,generated:!1,render:function(){var t=this.renderDelegate||b.renderDelegate
return t.render(this),this},renderInto:function(t,e){var n=this.renderDelegate||b.renderDelegate,i=this.fit===!1
return t=g.byId(t),n.teardownRender(this),t!=document.body||i?this.fit&&this.addClass("enyo-fit enyo-clip"):this.setupBodyFitting(),this.addClass("enyo-no-touch-action"),this.setupOverflowScrolling(),g.flushBodyClasses(),e||h.addToRoots(this),n.renderInto(this,t),g.updateScaleFactor(),this},rendered:function(){var t,e=0
for(this.reflow();t=this.children[e];++e)t.generated&&t.rendered()},retainNode:function(t){var e=this,n=this._retainedNode=t||this.hasNode()
return function(){e&&e._retainedNode==n?e._retainedNode=null:r(n)}},beforeTeardown:null,teardownRender:function(t){var e=this.renderDelegate||b.renderDelegate
this._retainedNode&&i(this),e.teardownRender(this,t),this.renderOnShow&&!t&&(this.set("showing",!1),this.set("canGenerate",!1))},teardownChildren:function(){var t=this.renderDelegate||b.renderDelegate
t.teardownChildren(this)},addNodeToParent:function(){var t
this.node&&(t=this.getParentNode(),t&&(void 0!==this.addBefore?this.insertNodeInParent(t,this.addBefore&&this.addBefore.hasNode()):this.appendNodeToParent(t)))},appendNodeToParent:function(t){t.appendChild(this.node)},insertNodeInParent:function(t,e){t.insertBefore(this.node,e||t.firstChild)},removeNodeFromDom:function(){var t=this.hasNode()
t&&g.removeNode(t)},getParentNode:function(){return this.parentNode||this.parent&&(this.parent.hasNode()||this.parent.getParentNode())},constructor:s.inherit(function(t){return function(e){var n=e&&e.attributes
return this.attributes=this.attributes?a.clone(this.attributes):{},n&&(a.mixin(this.attributes,n),delete e.attributes),t.apply(this,arguments)}}),create:s.inherit(function(t){return function(e){var n
this.style=this.kindStyle+this.style,this.renderOnShowChanged(),t.apply(this,arguments),this.showing||(this.style+=" display: none;"),n=this.kindClasses,n&&this.classes?n+=" "+this.classes:this.classes&&(n=this.classes),this.classes=this.attributes.class=n?n.trim():n,this.idChanged(),this.contentChanged()}}),destroy:s.inherit(function(t){return function(){this.removeNodeFromDom(),c.$[this.id]=null,t.apply(this,arguments)}}),dispatchEvent:s.inherit(function(t){return function(e,n,i){return!(!this.strictlyInternalEvents[e]||!this.isInternalEvent(n))||t.apply(this,arguments)}}),addChild:s.inherit(function(t){return function(e){e.addClass(this.controlClasses),t.apply(this,arguments)}}),removeChild:s.inherit(function(t){return function(e){t.apply(this,arguments),e.removeClass(this.controlClasses)}}),set:s.inherit(function(t){return function(e,n,i){return"showing"==e?t.call(this,e,!!n,i):t.apply(this,arguments)}}),isContainer:!1,rtl:!1,setupBodyFitting:function(){g.applyBodyFit(),this.addClass("enyo-fit enyo-clip")},setupOverflowScrolling:function(){u.android||u.androidChrome||u.blackberry||g.addBodyClass("webkitOverflowScrolling")},detectTextDirectionality:function(t){var e=arguments.length?t:this.content
e||0===e?(this.rtl=a.isRtl(e),this.applyStyle("direction",this.rtl?"rtl":"ltr")):this.applyStyle("direction",null)},getTag:function(){return this.tag},setTag:function(t){var e=this.tag
return t&&"string"==typeof t&&(this.tag=t,e!==t&&this.notify("tag",e,t)),this},getAttributes:function(){return this.attributes},setAttributes:function(t){var e=this.attributes
return"object"==typeof t&&(this.attributes=t,t!==e&&this.notify("attributes",e,t)),this},getClasses:function(){return this.classes},setClasses:function(t){var e=this.classes
return this.classes=t,e!=t&&this.notify("classes",e,t),this},getStyle:function(){return this.style},setStyle:function(t){var e=this.style
return this.style=t,e!=t&&this.notify("style",e,t),this},getContent:function(){return this.content},setContent:function(t){var e=this.content
return this.content=t,e!=t&&this.notify("content",e,t),this},getShowing:function(){return this.showing},setShowing:function(t){var e=this.showing
return this.showing=!!t,e!=t&&this.notify("showing",e,t),this},getAllowHtml:function(){return this.allowHtml},setAllowHtml:function(t){var e=this.allowHtml
return this.allowHtml=!!t,e!==t&&this.notify("allowHtml",e,t),this},getCanGenerate:function(){return this.canGenerate},setCanGenerate:function(t){var e=this.canGenerate
return this.canGenerate=!!t,e!==t&&this.notify("canGenerate",e,t),this},getFit:function(){return this.fit},setFit:function(t){var e=this.fit
return this.fit=!!t,e!==t&&this.notify("fit",e,t),this},getIsContainer:function(){return this.isContainer},setIsContainer:function(t){var e=this.isContainer
return this.isContainer=!!t,e!==t&&this.notify("isContainer",e,t),this}})
s.setDefaultCtor(b),b.renderDelegate=p,b.registerDomEvents=function(t,e){c.$[t]=e},b.unregisterDomEvents=function(t){c.$[t]=null},b.normalizeCssStyleString=function(t){return t?(";"+t).replace(/([^;])\s*$/,"$1;").replace(/\s*;\s*([\w-]+)\s*:\s*/g,"; $1: ").substr(2).trim():""},b.concat=function(t,e,n){var i,r,o=t.prototype||t
e.classes&&(n?(r=(o.classes?o.classes+" ":"")+e.classes,o.classes=r):(r=(o.kindClasses||"")+(o.classes?" "+o.classes:""),o.kindClasses=r,o.classes=e.classes),delete e.classes),e.style&&(n?(r=(o.style?o.style:"")+e.style,o.style=b.normalizeCssStyleString(r)):(r=o.kindStyle?o.kindStyle:"",r+=o.style?";"+o.style:"",r+=e.style,o.kindStyle=b.normalizeCssStyleString(r)),delete e.style),e.attributes&&(i=o.attributes,o.attributes=i?a.mixin({},[i,e.attributes]):e.attributes,delete e.attributes)},b.prototype.defaultKind=b,b.FloatingLayer=v(b),b.floatingLayer=new b.FloatingLayer({id:"floatingLayer"}),b.Fullscreen=y(b)},{"../kind":"enyo/kind","../utils":"enyo/utils","../platform":"enyo/platform","../dispatcher":"enyo/dispatcher","../options":"enyo/options","../roots":"enyo/roots","../AccessibilitySupport":"enyo/AccessibilitySupport","../UiComponent":"enyo/UiComponent","../HTMLStringDelegate":"enyo/HTMLStringDelegate","../dom":"enyo/dom","./fullscreen":"enyo/Control/fullscreen","./floatingLayer":"enyo/Control/floatingLayer","../gesture":"enyo/gesture"}],index:[function(t,e,n,require,request){var i=require("enyo/Control"),r=require("enyo/ready"),o=i.kind({content:"Hello, World!"})
r(function(){(new o).renderInto(document.body)})}]}})

