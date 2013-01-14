/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
// Underscore.js 1.2.4
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&r(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(m.call(a,h)&&(f++,!(g=m.call(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(m.call(c,
h)&&!f--)break;g=!f}}d.pop();return g}var s=this,G=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,H=k.unshift,l=p.toString,m=p.hasOwnProperty,w=k.forEach,x=k.map,y=k.reduce,z=k.reduceRight,A=k.filter,B=k.every,C=k.some,q=k.indexOf,D=k.lastIndexOf,p=Array.isArray,I=Object.keys,t=Function.prototype.bind,b=function(a){return new n(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else typeof define==="function"&&define.amd?
define("underscore",function(){return b}):s._=b;b.VERSION="1.2.4";var j=b.each=b.forEach=function(a,c,b){if(a!=null)if(w&&a.forEach===w)a.forEach(c,b);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(b,a[e],e,a)===o)break}else for(e in a)if(m.call(a,e)&&c.call(b,a[e],e,a)===o)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(x&&a.map===x)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};
b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(y&&a.reduce===y)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(z&&a.reduceRight===z)return e&&(c=b.bind(c,e)),f?a.reduceRight(c,d):a.reduceRight(c);var g=b.toArray(a).reverse();e&&!f&&
(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,c,b){var e;E(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(A&&a.filter===A)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;
if(B&&a.every===B)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,a,g,h)))return o});return e};var E=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(C&&a.some===C)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return q&&a.indexOf===q?a.indexOf(c)!=-1:b=E(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,
function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,
b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var c=[],b;j(a,function(a,f){f==0?c[0]=a:(b=Math.floor(Math.random()*(f+1)),c[f]=c[b],c[b]=a)});return c};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=
e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=
null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=
g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1));return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=
0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(q&&a.indexOf===q)return a.indexOf(c);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(D&&a.lastIndexOf===D)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-
a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};var F=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));F.prototype=a.prototype;var b=new F,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=
b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return m.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=
null;h&&a.apply(d,e);i()},c));g?h=true:a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=
0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=I||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)m.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)b[d]!==
void 0&&(a[d]=b[d])});return a};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(m.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)==
"[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};if(!b.isArguments(arguments))b.isArguments=function(a){return!(!a||!m.call(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};
b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.noConflict=function(){s._=G;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};
b.mixin=function(a){j(b.functions(a),function(c){J(c,b[c]=a[c])})};var K=0;b.uniqueId=function(a){var b=K++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/;b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||u,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(d.interpolate||
u,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||u,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ").replace(/\\\\/g,"\\")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e.call(this,a,b)}};b.chain=function(a){return b(a).chain()};var n=function(a){this._wrapped=a};b.prototype=n.prototype;var v=function(a,c){return c?b(a).chain():
a},J=function(a,c){n.prototype[a]=function(){var a=i.call(arguments);H.call(a,this._wrapped);return v(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];n.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return v(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];n.prototype[a]=function(){return v(b.apply(this._wrapped,arguments),this._chain)}});
n.prototype.chain=function(){this._chain=true;return this};n.prototype.value=function(){return this._wrapped}}).call(this);

// Backbone.js 0.5.3
// (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://documentcloud.github.com/backbone
(function(){var h=this,p=h.Backbone,e;e=typeof exports!=="undefined"?exports:h.Backbone={};e.VERSION="0.5.3";var f=h._;if(!f&&typeof require!=="undefined")f=require("underscore")._;var g=h.jQuery||h.Zepto;e.noConflict=function(){h.Backbone=p;return this};e.emulateHTTP=!1;e.emulateJSON=!1;e.Events={bind:function(a,b,c){var d=this._callbacks||(this._callbacks={});(d[a]||(d[a]=[])).push([b,c]);return this},unbind:function(a,b){var c;if(a){if(c=this._callbacks)if(b){c=c[a];if(!c)return this;for(var d=
0,e=c.length;d<e;d++)if(c[d]&&b===c[d][0]){c[d]=null;break}}else c[a]=[]}else this._callbacks={};return this},trigger:function(a){var b,c,d,e,f=2;if(!(c=this._callbacks))return this;for(;f--;)if(b=f?a:"all",b=c[b])for(var g=0,h=b.length;g<h;g++)(d=b[g])?(e=f?Array.prototype.slice.call(arguments,1):arguments,d[0].apply(d[1]||this,e)):(b.splice(g,1),g--,h--);return this}};e.Model=function(a,b){var c;a||(a={});if(c=this.defaults)f.isFunction(c)&&(c=c.call(this)),a=f.extend({},c,a);this.attributes={};
this._escapedAttributes={};this.cid=f.uniqueId("c");this.set(a,{silent:!0});this._changed=!1;this._previousAttributes=f.clone(this.attributes);if(b&&b.collection)this.collection=b.collection;this.initialize(a,b)};f.extend(e.Model.prototype,e.Events,{_previousAttributes:null,_changed:!1,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.attributes[a];
return this._escapedAttributes[a]=(b==null?"":""+b).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},has:function(a){return this.attributes[a]!=null},set:function(a,b){b||(b={});if(!a)return this;if(a.attributes)a=a.attributes;var c=this.attributes,d=this._escapedAttributes;if(!b.silent&&this.validate&&!this._performValidation(a,b))return!1;if(this.idAttribute in a)this.id=a[this.idAttribute];
var e=this._changing;this._changing=!0;for(var g in a){var h=a[g];if(!f.isEqual(c[g],h))c[g]=h,delete d[g],this._changed=!0,b.silent||this.trigger("change:"+g,this,h,b)}!e&&!b.silent&&this._changed&&this.change(b);this._changing=!1;return this},unset:function(a,b){if(!(a in this.attributes))return this;b||(b={});var c={};c[a]=void 0;if(!b.silent&&this.validate&&!this._performValidation(c,b))return!1;delete this.attributes[a];delete this._escapedAttributes[a];a==this.idAttribute&&delete this.id;this._changed=
!0;b.silent||(this.trigger("change:"+a,this,void 0,b),this.change(b));return this},clear:function(a){a||(a={});var b,c=this.attributes,d={};for(b in c)d[b]=void 0;if(!a.silent&&this.validate&&!this._performValidation(d,a))return!1;this.attributes={};this._escapedAttributes={};this._changed=!0;if(!a.silent){for(b in c)this.trigger("change:"+b,this,void 0,a);this.change(a)}return this},fetch:function(a){a||(a={});var b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&
c(b,d)};a.error=i(a.error,b,a);return(this.sync||e.sync).call(this,"read",this,a)},save:function(a,b){b||(b={});if(a&&!this.set(a,b))return!1;var c=this,d=b.success;b.success=function(a,e,f){if(!c.set(c.parse(a,f),b))return!1;d&&d(c,a,f)};b.error=i(b.error,c,b);var f=this.isNew()?"create":"update";return(this.sync||e.sync).call(this,f,this,b)},destroy:function(a){a||(a={});if(this.isNew())return this.trigger("destroy",this,this.collection,a);var b=this,c=a.success;a.success=function(d){b.trigger("destroy",
b,b.collection,a);c&&c(b,d)};a.error=i(a.error,b,a);return(this.sync||e.sync).call(this,"delete",this,a)},url:function(){var a=k(this.collection)||this.urlRoot||l();if(this.isNew())return a;return a+(a.charAt(a.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this)},isNew:function(){return this.id==null},change:function(a){this.trigger("change",this,a);this._previousAttributes=f.clone(this.attributes);this._changed=!1},hasChanged:function(a){if(a)return this._previousAttributes[a]!=
this.attributes[a];return this._changed},changedAttributes:function(a){a||(a=this.attributes);var b=this._previousAttributes,c=!1,d;for(d in a)f.isEqual(b[d],a[d])||(c=c||{},c[d]=a[d]);return c},previous:function(a){if(!a||!this._previousAttributes)return null;return this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},_performValidation:function(a,b){var c=this.validate(a);if(c)return b.error?b.error(this,c,b):this.trigger("error",this,c,b),!1;return!0}});
e.Collection=function(a,b){b||(b={});if(b.comparator)this.comparator=b.comparator;f.bindAll(this,"_onModelEvent","_removeReference");this._reset();a&&this.reset(a,{silent:!0});this.initialize.apply(this,arguments)};f.extend(e.Collection.prototype,e.Events,{model:e.Model,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,b){if(f.isArray(a))for(var c=0,d=a.length;c<d;c++)this._add(a[c],b);else this._add(a,b);return this},remove:function(a,b){if(f.isArray(a))for(var c=
0,d=a.length;c<d;c++)this._remove(a[c],b);else this._remove(a,b);return this},get:function(a){if(a==null)return null;return this._byId[a.id!=null?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");this.models=this.sortBy(this.comparator);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},
reset:function(a,b){a||(a=[]);b||(b={});this.each(this._removeReference);this._reset();this.add(a,{silent:!0});b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a||(a={});var b=this,c=a.success;a.success=function(d,f,e){b[a.add?"add":"reset"](b.parse(d,e),a);c&&c(b,d)};a.error=i(a.error,b,a);return(this.sync||e.sync).call(this,"read",this,a)},create:function(a,b){var c=this;b||(b={});a=this._prepareModel(a,b);if(!a)return!1;var d=b.success;b.success=function(a,e,f){c.add(a,b);
d&&d(a,e,f)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(a,b){if(a instanceof e.Model){if(!a.collection)a.collection=this}else{var c=a;a=new this.model(c,{collection:this});a.validate&&!a._performValidation(c,b)&&(a=!1)}return a},_add:function(a,b){b||(b={});a=this._prepareModel(a,b);if(!a)return!1;var c=this.getByCid(a);if(c)throw Error(["Can't add the same model to a set twice",
c.id]);this._byId[a.id]=a;this._byCid[a.cid]=a;this.models.splice(b.at!=null?b.at:this.comparator?this.sortedIndex(a,this.comparator):this.length,0,a);a.bind("all",this._onModelEvent);this.length++;b.silent||a.trigger("add",a,this,b);return a},_remove:function(a,b){b||(b={});a=this.getByCid(a)||this.get(a);if(!a)return null;delete this._byId[a.id];delete this._byCid[a.cid];this.models.splice(this.indexOf(a),1);this.length--;b.silent||a.trigger("remove",a,this,b);this._removeReference(a);return a},
_removeReference:function(a){this==a.collection&&delete a.collection;a.unbind("all",this._onModelEvent)},_onModelEvent:function(a,b,c,d){(a=="add"||a=="remove")&&c!=this||(a=="destroy"&&this._remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,arguments))}});f.each(["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max",
"min","sortBy","sortedIndex","toArray","size","first","rest","last","without","indexOf","lastIndexOf","isEmpty","groupBy"],function(a){e.Collection.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});e.Router=function(a){a||(a={});if(a.routes)this.routes=a.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var q=/:([\w\d]+)/g,r=/\*([\w\d]+)/g,s=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(e.Router.prototype,e.Events,{initialize:function(){},route:function(a,
b,c){e.history||(e.history=new e.History);f.isRegExp(a)||(a=this._routeToRegExp(a));e.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d))},this))},navigate:function(a,b){e.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(s,"\\$&").replace(q,
"([^/]*)").replace(r,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});e.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")};var j=/^#*/,t=/msie [\w.]+/,m=!1;f.extend(e.History.prototype,{interval:50,getFragment:function(a,b){if(a==null)if(this._hasPushState||b){a=window.location.pathname;var c=window.location.search;c&&(a+=c);a.indexOf(this.options.root)==0&&(a=a.substr(this.options.root.length))}else a=window.location.hash;return decodeURIComponent(a.replace(j,
""))},start:function(a){if(m)throw Error("Backbone.history has already been started");this.options=f.extend({},{root:"/"},this.options,a);this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||!window.history||!window.history.pushState);a=this.getFragment();var b=document.documentMode;if(b=t.exec(navigator.userAgent.toLowerCase())&&(!b||b<=7))this.iframe=g('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);
this._hasPushState?g(window).bind("popstate",this.checkUrl):"onhashchange"in window&&!b?g(window).bind("hashchange",this.checkUrl):setInterval(this.checkUrl,this.interval);this.fragment=a;m=!0;a=window.location;b=a.pathname==this.options.root;if(this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;else if(this._wantsPushState&&this._hasPushState&&b&&a.hash)this.fragment=a.hash.replace(j,""),window.history.replaceState({},
document.title,a.protocol+"//"+a.host+this.options.root+this.fragment);if(!this.options.silent)return this.loadUrl()},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.iframe.location.hash));if(a==this.fragment||a==decodeURIComponent(this.fragment))return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(window.location.hash)},loadUrl:function(a){var b=this.fragment=this.getFragment(a);
return f.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){var c=(a||"").replace(j,"");if(!(this.fragment==c||this.fragment==decodeURIComponent(c))){if(this._hasPushState){var d=window.location;c.indexOf(this.options.root)!=0&&(c=this.options.root+c);this.fragment=c;window.history.pushState({},document.title,d.protocol+"//"+d.host+c)}else if(window.location.hash=this.fragment=c,this.iframe&&c!=this.getFragment(this.iframe.location.hash))this.iframe.document.open().close(),
this.iframe.location.hash=c;b&&this.loadUrl(a)}}});e.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.delegateEvents();this.initialize.apply(this,arguments)};var u=/^(\S+)\s*(.*)$/,n=["model","collection","el","id","attributes","className","tagName"];f.extend(e.View.prototype,e.Events,{tagName:"div",$:function(a){return g(a,this.el)},initialize:function(){},render:function(){return this},remove:function(){g(this.el).remove();return this},make:function(a,
b,c){a=document.createElement(a);b&&g(a).attr(b);c&&g(a).html(c);return a},delegateEvents:function(a){if(a||(a=this.events))for(var b in f.isFunction(a)&&(a=a.call(this)),g(this.el).unbind(".delegateEvents"+this.cid),a){var c=this[a[b]];if(!c)throw Error('Event "'+a[b]+'" does not exist');var d=b.match(u),e=d[1];d=d[2];c=f.bind(c,this);e+=".delegateEvents"+this.cid;d===""?g(this.el).bind(e,c):g(this.el).delegate(d,e,c)}},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=
0,c=n.length;b<c;b++){var d=n[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el){if(f.isString(this.el))this.el=g(this.el).get(0)}else{var a=this.attributes||{};if(this.id)a.id=this.id;if(this.className)a["class"]=this.className;this.el=this.make(this.tagName,a)}}});e.Model.extend=e.Collection.extend=e.Router.extend=e.View.extend=function(a,b){var c=v(this,a,b);c.extend=this.extend;return c};var w={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};e.sync=function(a,
b,c){var d=w[a];c=f.extend({type:d,dataType:"json"},c);if(!c.url)c.url=k(b)||l();if(!c.data&&b&&(a=="create"||a=="update"))c.contentType="application/json",c.data=JSON.stringify(b.toJSON());if(e.emulateJSON)c.contentType="application/x-www-form-urlencoded",c.data=c.data?{model:c.data}:{};if(e.emulateHTTP&&(d==="PUT"||d==="DELETE")){if(e.emulateJSON)c.data._method=d;c.type="POST";c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)}}if(c.type!=="GET"&&!e.emulateJSON)c.processData=
!1;return g.ajax(c)};var o=function(){},v=function(a,b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return a.apply(this,arguments)};f.extend(d,a);o.prototype=a.prototype;d.prototype=new o;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},k=function(a){if(!a||!a.url)return null;return f.isFunction(a.url)?a.url():a.url},l=function(){throw Error('A "url" property or function must be specified');},i=function(a,b,c){return function(d){a?
a(b,d,c):b.trigger("error",b,d,c)}}}).call(this);

/*!
 * Copyright (C) 2011 by Vitaly Puzrin
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */// Extend prototypes and native objects for oldIEs, Safaies and Operas
Array.isArray||(Array.isArray=function(b){return Object.prototype.toString.call(b)==="[object Array]"}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b;for(b=0;b<this.length;b++)if(this[b]==a)return b;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d;b=b||this;for(c=0,d=this.length;c<d;c+=1)a.call(b,this[c],c)}),Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;return function(){c.apply(b,arguments)}}),Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(b){var c=[],d;for(d in b)b.hasOwnProperty(d)&&c.push(d);return c});var jsyaml=function(){var a=function(){var a=function(b,c){var d=a.resolve(b,c||"/"),e=a.modules[d];if(!e)throw new Error("Failed to resolve module "+b+", tried "+d);var f=e._cached?e._cached:e();return f};return a.paths=[],a.modules={},a.extensions=[".js",".coffee"],a._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},a.resolve=function(){return function(b,c){function h(b){if(a.modules[b])return b;for(var c=0;c<a.extensions.length;c++){var d=a.extensions[c];if(a.modules[b+d])return b+d}}function i(b){b=b.replace(/\/+$/,"");var c=b+"/package.json";if(a.modules[c]){var e=a.modules[c](),f=e.browserify;if(typeof f=="object"&&f.main){var g=h(d.resolve(b,f.main));if(g)return g}else if(typeof f=="string"){var g=h(d.resolve(b,f));if(g)return g}else if(e.main){var g=h(d.resolve(b,e.main));if(g)return g}}return h(b+"/index")}function j(a,b){var c=k(b);for(var d=0;d<c.length;d++){var e=c[d],f=h(e+"/"+a);if(f)return f;var g=i(e+"/"+a);if(g)return g}var f=h(a);if(f)return f}function k(a){var b;a==="/"?b=[""]:b=d.normalize(a).split("/");var c=[];for(var e=b.length-1;e>=0;e--){if(b[e]==="node_modules")continue;var f=b.slice(0,e+1).join("/")+"/node_modules";c.push(f)}return c}c||(c="/");if(a._core[b])return b;var d=a.modules.path(),e=c||".";if(b.match(/^(?:\.\.?\/|\/)/)){var f=h(d.resolve(e,b))||i(d.resolve(e,b));if(f)return f}var g=j(b,e);if(g)return g;throw new Error("Cannot find module '"+b+"'")}}(),a.alias=function(b,c){var d=a.modules.path(),e=null;try{e=a.resolve(b+"/package.json","/")}catch(f){e=a.resolve(b,"/")}var g=d.dirname(e),h=(Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b})(a.modules);for(var i=0;i<h.length;i++){var j=h[i];if(j.slice(0,g.length+1)===g+"/"){var k=j.slice(g.length);a.modules[c+k]=a.modules[g+k]}else j===g&&(a.modules[c]=a.modules[g])}},a.define=function(b,c){var d=a._core[b]?"":a.modules.path().dirname(b),e=function(b){return a(b,d)};e.resolve=function(b){return a.resolve(b,d)},e.modules=a.modules,e.define=a.define;var f={exports:{}};a.modules[b]=function(){return a.modules[b]._cached=f.exports,c.call(f.exports,e,f,f.exports,d,b),a.modules[b]._cached=f.exports,f.exports}},typeof process=="undefined"&&(process={}),process.nextTick||(process.nextTick=function(){var a=[],b=typeof window!="undefined"&&window.postMessage&&window.addEventListener;return b&&window.addEventListener("message",function(b){if(b.source===window&&b.data==="browserify-tick"){b.stopPropagation();if(a.length>0){var c=a.shift();c()}}},!0),function(c){b?(a.push(c),window.postMessage("browserify-tick","*")):setTimeout(c,0)}}()),process.title||(process.title="browser"),process.binding||(process.binding=function(b){if(b==="evals")return a("vm");throw new Error("No such module")}),process.cwd||(process.cwd=function(){return"."}),a.define("path",function(a,b,c,d,e){function f(a,b){var c=[];for(var d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c}function g(a,b){var c=0;for(var d=a.length;d>=0;d--){var e=a[d];e=="."?a.splice(d,1):e===".."?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var h=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;c.resolve=function(){var a="",b=!1;for(var c=arguments.length;c>=-1&&!b;c--){var d=c>=0?arguments[c]:process.cwd();if(typeof d!="string"||!d)continue;a=d+"/"+a,b=d.charAt(0)==="/"}return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=a.charAt(0)==="/",c=a.slice(-1)==="/";return a=g(f(a.split("/"),function(a){return!!a}),!b).join("/"),!a&&!b&&(a="."),a&&c&&(a+="/"),(b?"/":"")+a},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(f(a,function(a,b){return a&&typeof a=="string"}).join("/"))},c.dirname=function(a){var b=h.exec(a)[1]||"",c=!1;return b?b.length===1||c&&b.length<=3&&b.charAt(1)===":"?b:b.substring(0,b.length-1):"."},c.basename=function(a,b){var c=h.exec(a)[2]||"";return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return h.exec(a)[3]||""}}),a.define("/lib/js-yaml.js",function(a,b,c,d,e){"use strict";var f=a("fs"),g=a("./js-yaml/loader"),h=b.exports={};h.scan=function(b,c,d){d=d||g.SafeLoader;var e=new d(b);while(e.checkToken())c(e.getToken())},h.compose=function(b,c){c=c||g.SafeLoader;var d=new c(b);return d.getSingleNode()},h.load=function(b,c){c=c||g.Loader;var d=new c(b);return d.getSingleData()},h.loadAll=function(b,c,d){d=d||g.Loader;var e=new d(b);while(e.checkData())c(e.getData())},h.safeLoad=function(b){return h.load(b,g.SafeLoader)},h.safeLoadAll=function(b,c){h.loadAll(b,c,g.SafeLoader)},h.addConstructor=function(b,c,d){(d||g.Loader).addConstructor(b,c)},function(){var b=function(a,b){var c=f.openSync(b,"r");a.exports=[],h.loadAll(c,function(b){a.exports.push(b)}),f.closeSync(c)};undefined!==a.extensions&&(a.extensions[".yml"]=b,a.extensions[".yaml"]=b)}()}),a.define("fs",function(a,b,c,d,e){}),a.define("/lib/js-yaml/loader.js",function(a,b,c,d,e){function m(a){g.Reader.call(this,a),h.Scanner.call(this),i.Parser.call(this),j.Composer.call(this),l.BaseConstructor.call(this),k.BaseResolver.call(this)}function n(a){g.Reader.call(this,a),h.Scanner.call(this),i.Parser.call(this),j.Composer.call(this),l.SafeConstructor.call(this),k.Resolver.call(this)}function o(a){g.Reader.call(this,a),h.Scanner.call(this),i.Parser.call(this),j.Composer.call(this),l.Constructor.call(this),k.Resolver.call(this)}"use strict";var f=a("./common"),g=a("./reader"),h=a("./scanner"),i=a("./parser"),j=a("./composer"),k=a("./resolver"),l=a("./constructor");f.extend(m.prototype,g.Reader.prototype,h.Scanner.prototype,i.Parser.prototype,j.Composer.prototype,l.BaseConstructor.prototype,k.BaseResolver.prototype),f.extend(n.prototype,g.Reader.prototype,h.Scanner.prototype,i.Parser.prototype,j.Composer.prototype,l.SafeConstructor.prototype,k.Resolver.prototype),f.extend(o.prototype,g.Reader.prototype,h.Scanner.prototype,i.Parser.prototype,j.Composer.prototype,l.Constructor.prototype,k.Resolver.prototype),m.addConstructor=function(a,b){l.BaseConstructor.addConstructor(a,b)},n.addConstructor=function(a,b){l.SafeConstructor.addConstructor(a,b)},o.addConstructor=function(a,b){l.Constructor.addConstructor(a,b)},b.exports.BaseLoader=m,b.exports.SafeLoader=n,b.exports.Loader=o}),a.define("/lib/js-yaml/common.js",function(a,b,c,d,e){"use strict";var f=b.exports={};f.extend=function(b){var c,d,e,f=[];b=b||{},d=arguments.length,!!arguments[d-1]&&!!arguments[d-1].except&&(f=arguments[d-1].except,d-=1);for(c=1;c<d;c+=1)if(!!arguments[c]&&"object"==typeof arguments[c])for(e in arguments[c])arguments[c].hasOwnProperty(e)&&-1===f.indexOf(e)&&(b[e]=arguments[c][e]);return b},f.inherits=function(b,c){var d=function(){};d.prototype=c.prototype,b.prototype=new d,f.extend(b.prototype,c.prototype,{except:["arguments","length","name","prototype","caller"]}),f.extend(b.prototype,{constructor:b}),b.__parent__=c},f.isInstanceOf=function(b,c){var d;return b instanceof c?!0:!b||!b.constructor?!1:(d=b.constructor.__parent__,d===c||f.isInstanceOf(d,c))},f.each=function(b,c,d){var e,f,g;if(null===b||undefined===b)return;d=d||c;if(b.forEach===Array.prototype.forEach)b.forEach(c,d);else{e=Object.getOwnPropertyNames(b);for(f=0,g=e.length;f<g;f+=1)c.call(d,b[e[f]],e[f],b)}},f.reverse=function(b){var c=[],d,e;for(d=0,e=b.length;d<e;d+=1)c.unshift(b[d]);return c},f.decodeBase64=function(){var a="=",b=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];return function(d){var e,f,g=0,h=[],i,j;i=0,j=0;for(g=0;g<d.length;g+=1){f=d.charCodeAt(g),e=b[f&127];if(10!==f&&13!==f){if(-1===e)throw new Error("Illegal characters (code="+f+") in position "+g+": ordinal not in range(0..128)");j=j<<6|e,i+=6,i>=8&&(i-=8,a!==d.charAt(g)&&h.push(j>>i&255),j&=(1<<i)-1)}}if(i)throw new Error("Corrupted base64 string");return new Buffer(h)}}(),f.Populator=function(b,c,d){if(!(this instanceof f.Populator))return new f.Populator(b,c,d);this.data=b,this.execute=function(){c.call(d||c)}},f.Hash=function(b){var c,d,e;if(!(this instanceof f.Hash))return new f.Hash(b);e=0,c=[],d=[],this.store=function(b,f){var g=c.indexOf(b);if(0<=g){d[g]=f;return}g=e,e+=1,c[g]=b,d[g]=f},this.remove=function(b){var e=c.indexOf(b);0<=e&&(delete c[e],delete d[e])},this.hasKey=function(b){return 0<=c.indexOf(b)},this.get=function(e){var f=c.indexOf(e);return 0<=f?d[f]:b}}}),a.define("/lib/js-yaml/reader.js",function(a,b,c,d,e){function k(a,b,c,d,e){h.YAMLError.apply(this),this.name="ReaderError",this.name=a,this.position=b,this.character=c,this.encoding=d,this.reason=e,this.toString=function f(){return"unacceptable character "+this.character+": "+this.reason+'\n in "'+this.name+'", position '+this.position}}function l(a){this.name="<unicode string>",this.stream=null,this.streamPointer=0,this.eof=!0,this.buffer="",this.pointer=0,this.rawBuffer=null,this.encoding="utf-8",this.index=0,this.line=0,this.column=0,"string"==typeof a?(this.name="<unicode string>",this.checkPrintable(a),this.buffer=a+"\0"):Buffer.isBuffer(a)?(this.name="<buffer>",this.rawBuffer=a,this.update(1)):(this.name="<file>",this.stream=a,this.eof=!1,this.updateRaw(),this.update(1))}"use strict";var f=a("fs"),g=a("./common"),h=a("./errors"),i=new RegExp("[^\t\n\r -~ -퟿-�]"),j=undefined==="a"[0]?function(a,b){return a.charAt(b)}:function(a,b){return a[b]};g.inherits(k,h.YAMLError),l.prototype.peek=function(b){var c;return b=+b||0,c=j(this.buffer,this.pointer+b),undefined===c&&(this.update(b+1),c=j(this.buffer,this.pointer+b)),c},l.prototype.prefix=function(b){return b=+b||1,this.pointer+b>=this.buffer.length&&this.update(b),this.buffer.slice(this.pointer,this.pointer+b)},l.prototype.forward=function(b){var c;b=undefined!==b?+b:1,this.pointer+b+1>=this.buffer.length&&this.update(b+1);while(b)c=this.buffer[this.pointer],this.pointer+=1,this.index+=1,0<="\n\u2028\u2029".indexOf(c)||"\r"===c&&"\n"!==this.buffer[this.pointer]?(this.line+=1,this.column=0):c!=="﻿"&&(this.column+=1),b-=1},l.prototype.getMark=function(){return null===this.stream?new h.Mark(this.name,this.index,this.line,this.column,this.buffer,this.pointer):new h.Mark(this.name,this.index,this.line,this.column,null,null)},l.prototype.checkPrintable=function(b){var c=b.toString().match(i),d;if(c)throw d=this.index+this.buffer.length-this.pointer+c.index,new k(this.name,d,c[0],"unicode","special characters are not allowed")},l.prototype.update=function(b){var c;if(null===this.rawBuffer)return;this.buffer=this.buffer.slice(this.pointer),this.pointer=0;while(this.buffer.length<b){this.eof||this.updateRaw(),c=this.rawBuffer,this.checkPrintable(c),this.buffer+=c,this.rawBuffer=this.rawBuffer.slice(c.length);if(this.eof){this.buffer+="\0",this.rawBuffer=null;break}}},l.prototype.updateRaw=function(b){var c=new Buffer(+b||4096),d,e;d=f.readSync(this.stream,c,0,c.length),null===this.rawBuffer?this.rawBuffer=c.slice(0,d):(e=new Buffer(this.rawBuffer.length+d),this.rawBuffer.copy(e),c.copy(e,this.rawBuffer.length),this.rawBuffer=e),this.streamPointer+=d;if(!d||d<c.length)this.eof=!0},b.exports.Reader=l}),a.define("/lib/js-yaml/errors.js",function(a,b,c,d,e){function h(a,b,c,d,e,f){this.name=a,this.index=b,this.line=c,this.column=d,this.buffer=e,this.pointer=f}function i(a){f.extend(this,Error.prototype.constructor.call(this,a)),this.name="YAMLError"}function j(a){var b="Error ";return null!==a.problemMark&&(b+="on line "+(a.problemMark.line+1)+", col "+(a.problemMark.column+1)+": "),null!==a.problem&&(b+=a.problem),null!==a.note&&(b+=a.note),b}function k(a){var b=[];return null!==a.context&&b.push(a.context),null!==a.contextMark&&(null===a.problem||null===a.problemMark||a.contextMark.name!==a.problemMark.name||a.contextMark.line!==a.problemMark.line||a.contextMark.column!==a.problemMark.column)&&b.push(a.contextMark.toString()),null!==a.problem&&b.push(a.problem),null!==a.problemMark&&b.push(a.problemMark.toString()),null!==a.note&&b.push(a.note),b.join("\n")}function l(a,b,c,d,e){i.call(this),this.name="MarkedYAMLError",this.context=a||null,this.contextMark=b||null,this.problem=c||null,this.problemMark=d||null,this.note=e||null,this.toString=function f(a){return a?j(this):k(this)}}"use strict";var f=a("./common"),g=function(b,c){var d="",e;for(e=0;e<c;e+=1)d+=b;return d};h.prototype.getSnippet=function(a,b){var c,d,e,f,h;if(!this.buffer)return null;a=a||4,b=b||75,c="",d=this.pointer;while(d>0&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer[d-1])){d-=1;if(this.pointer-d>b/2-1){c=" ... ",d+=5;break}}e="",f=this.pointer;while(f<this.buffer.length&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer[f])){f+=1;if(f-this.pointer>b/2-1){e=" ... ",f-=5;break}}return h=this.buffer.slice(d,f),g(" ",a)+c+h+e+"\n"+g(" ",a+this.pointer-d+c.length)+"^"},h.prototype.toString=function(){var a=this.getSnippet(),b;return b=' in "'+this.name+'", line '+(this.line+1)+", column "+(this.column+1),a&&(b+=":\n"+a),b},f.inherits(i,Error),f.inherits(l,i),b.exports.Mark=h,b.exports.YAMLError=i,b.exports.MarkedYAMLError=l}),a.define("/lib/js-yaml/scanner.js",function(a,b,c,d,e){function l(){g.MarkedYAMLError.apply(this,arguments),this.name="ScannerError"}function m(a,b,c,d,e,f){this.tokenNumber=a,this.required=b,this.index=c,this.line=d,this.column=e,this.mark=f}function n(){this.done=!1,this.flowLevel=0,this.tokens=[],this.fetchStreamStart(),this.tokensTaken=0,this.indent=-1,this.indents=[],this.allowSimpleKey=!0,this.possibleSimpleKeys={}}"use strict";var f=a("./common"),g=a("./errors"),h=a("./tokens"),i={0:"\0",a:"",b:"\b",t:"\t","\t":"\t",n:"\n",v:"",f:"\f",r:"\r",e:""," ":" ",'"':'"',"\\":"\\",N:"",_:" ",L:"\u2028",P:"\u2029"},j={x:2,u:4,U:8},k=function(a,b){var c=[];undefined===b&&(b=a,a=0);while(0<b)c.push(a),b-=1,a+=1;return c};f.inherits(l,g.MarkedYAMLError),n.prototype.checkToken=function(){var b;while(this.needMoreTokens())this.fetchMoreTokens();if(this.tokens.length){if(!arguments.length)return!0;for(b=0;b<arguments.length;b+=1)if(f.isInstanceOf(this.tokens[0],arguments[b]))return!0}return!1},n.prototype.peekToken=function(){while(this.needMoreTokens())this.fetchMoreTokens();return this.tokens.length?this.tokens[0]:null},n.prototype.getToken=function(){var b=null;while(this.needMoreTokens())this.fetchMoreTokens();return this.tokens.length&&(this.tokensTaken+=1,b=this.tokens.shift()),b},n.prototype.needMoreTokens=function(){return this.done?!1:this.tokens.length?(this.stalePossibleSimpleKeys(),this.nextPossibleSimpleKey()===this.tokensTaken?!0:!1):!0},n.prototype.fetchMoreTokens=function(){var b;this.scanToNextToken(),this.stalePossibleSimpleKeys(),this.unwindIndent(this.column),b=this.peek();if(b==="\0")return this.fetchStreamEnd();if(b==="%"&&this.checkDirective())return this.fetchDirective();if(b==="-"&&this.checkDocumentStart())return this.fetchDocumentStart();if(b==="."&&this.checkDocumentEnd())return this.fetchDocumentEnd();if(b==="[")return this.fetchFlowSequenceStart();if(b==="{")return this.fetchFlowMappingStart();if(b==="]")return this.fetchFlowSequenceEnd();if(b==="}")return this.fetchFlowMappingEnd();if(b===",")return this.fetchFlowEntry();if(b==="-"&&this.checkBlockEntry())return this.fetchBlockEntry();if(b==="?"&&this.checkKey())return this.fetchKey();if(b===":"&&this.checkValue())return this.fetchValue();if(b==="*")return this.fetchAlias();if(b==="&")return this.fetchAnchor();if(b==="!")return this.fetchTag();if(b==="|"&&!this.flowLevel)return this.fetchLiteral();if(b===">"&&!this.flowLevel)return this.fetchFolded();if(b==="'")return this.fetchSingle();if(b==='"')return this.fetchDouble();if(this.checkPlain())return this.fetchPlain();throw new l("while scanning for the next token",null,"found character "+b+" that cannot start any token",this.getMark())},n.prototype.nextPossibleSimpleKey=function(){var b=null;return f.each(this.possibleSimpleKeys,function(a){if(null===b||a.tokenNumber<b)b=a.tokenNumber}),b},n.prototype.stalePossibleSimpleKeys=function(){f.each(this.possibleSimpleKeys,function(a,b){if(a.line!==this.line||1024<this.index-a.index){if(a.required)throw new l("while scanning a simple key",a.mark,"could not found expected ':'",this.getMark());delete this.possibleSimpleKeys[b]}},this)},n.prototype.savePossibleSimpleKey=function(){var b,c,d;b=!this.flowLevel&&this.indent===this.column;if(!this.allowSimpleKey&&b)throw new g.YAMLError("Simple key is required");this.allowSimpleKey&&(this.removePossibleSimpleKey(),c=this.tokensTaken+this.tokens.length,d=new m(c,b,this.index,this.line,this.column,this.getMark()),this.possibleSimpleKeys[this.flowLevel]=d)},n.prototype.removePossibleSimpleKey=function(){var b;if(undefined!==this.possibleSimpleKeys[this.flowLevel]){b=this.possibleSimpleKeys[this.flowLevel];if(b.required)throw new l("while scanning a simple key",b.mark,"could not found expected ':'",this.getMark());delete this.possibleSimpleKeys[this.flowLevel]}},n.prototype.unwindIndent=function(b){var c;if(this.flowLevel)return;while(this.indent>b)c=this.getMark(),this.indent=this.indents.pop(),this.tokens.push(new h.BlockEndToken(c,c))},n.prototype.addIndent=function(b){return this.indent<b?(this.indents.push(this.indent),this.indent=b,!0):!1},n.prototype.fetchStreamStart=function(){var b;b=this.getMark(),this.tokens.push(new h.StreamStartToken(b,b,this.encoding))},n.prototype.fetchStreamEnd=function(){var b;this.unwindIndent(-1),this.removePossibleSimpleKey(),this.allowSimpleKey=!1,this.possibleSimpleKeys={},b=this.getMark(),this.tokens.push(new h.StreamEndToken(b,b)),this.done=!0},n.prototype.fetchDirective=function(){this.unwindIndent(-1),this.removePossibleSimpleKey(),this.allowSimpleKey=!1,this.tokens.push(this.scanDirective())},n.prototype.fetchDocumentStart=function(){this.fetchDocumentIndicator(h.DocumentStartToken)},n.prototype.fetchDocumentEnd=function(){this.fetchDocumentIndicator(h.DocumentEndToken)},n.prototype.fetchDocumentIndicator=function(b){var c,d;this.unwindIndent(-1),this.removePossibleSimpleKey(),this.allowSimpleKey=!1,c=this.getMark(),this.forward(3),d=this.getMark(),this.tokens.push(new b(c,d))},n.prototype.fetchFlowSequenceStart=function(){this.fetchFlowCollectionStart(h.FlowSequenceStartToken)},n.prototype.fetchFlowMappingStart=function(){this.fetchFlowCollectionStart(h.FlowMappingStartToken)},n.prototype.fetchFlowCollectionStart=function(b){var c,d;this.savePossibleSimpleKey(),this.flowLevel+=1,this.allowSimpleKey=!0,c=this.getMark(),this.forward(),d=this.getMark(),this.tokens.push(new b(c,d))},n.prototype.fetchFlowSequenceEnd=function(){this.fetchFlowCollectionEnd(h.FlowSequenceEndToken)},n.prototype.fetchFlowMappingEnd=function(){this.fetchFlowCollectionEnd(h.FlowMappingEndToken)},n.prototype.fetchFlowCollectionEnd=function(b){var c,d;this.removePossibleSimpleKey(),this.flowLevel-=1,this.allowSimpleKey=!1,c=this.getMark(),this.forward(),d=this.getMark(),this.tokens.push(new b(c,d))},n.prototype.fetchFlowEntry=function(){var b,c;this.allowSimpleKey=!0,this.removePossibleSimpleKey(),b=this.getMark(),this.forward(),c=this.getMark(),this.tokens.push(new h.FlowEntryToken(b,c))},n.prototype.fetchBlockEntry=function(){var b,c,d;if(!this.flowLevel){if(!this.allowSimpleKey)throw new l(null,null,"sequence entries are not allowed here",this.getMark());this.addIndent(this.column)&&(b=this.getMark(),this.tokens.push(new h.BlockSequenceStartToken(b,b)))}this.allowSimpleKey=!0,this.removePossibleSimpleKey(),c=this.getMark(),this.forward(),d=this.getMark(),this.tokens.push(new h.BlockEntryToken(c,d))},n.prototype.fetchKey=function(){var b,c,d;if(!this.flowLevel){if(!this.allowSimpleKey)throw new l(null,null,"mapping keys are not allowed here",this.getMark());this.addIndent(this.column)&&(b=this.getMark(),this.tokens.push(new h.BlockMappingStartToken(b,b)))}this.allowSimpleKey=!this.flowLevel,this.removePossibleSimpleKey(),c=this.getMark(),this.forward(),d=this.getMark(),this.tokens.push(new h.KeyToken(c,d))},n.prototype.fetchValue=function(){var b,c,d,e;if(undefined!==this.possibleSimpleKeys[this.flowLevel])b=this.possibleSimpleKeys[this.flowLevel],delete this.possibleSimpleKeys[this.flowLevel],this.tokens.splice(b.tokenNumber-this.tokensTaken,0,new h.KeyToken(b.mark,b.mark)),this.flowLevel||this.addIndent(b.column)&&this.tokens.splice(b.tokenNumber-this.tokensTaken,0,new h.BlockMappingStartToken(b.mark,b.mark)),this.allowSimpleKey=!1;else{if(!this.flowLevel&&!this.allowSimpleKey)throw new l(null,null,"mapping values are not allowed here",this.getMark());this.flowLevel||this.addIndent(this.column)&&(c=this.getMark(),this.tokens.push(new h.BlockMappingStartToken(c,c))),this.allowSimpleKey=!this.flowLevel,this.removePossibleSimpleKey()}d=this.getMark(),this.forward(),e=this.getMark(),this.tokens.push(new h.ValueToken(d,e))},n.prototype.fetchAlias=function(){this.savePossibleSimpleKey(),this.allowSimpleKey=!1,this.tokens.push(this.scanAnchor(h.AliasToken))},n.prototype.fetchAnchor=function(){this.savePossibleSimpleKey(),this.allowSimpleKey=!1,this.tokens.push(this.scanAnchor(h.AnchorToken))},n.prototype.fetchTag=function(){this.savePossibleSimpleKey(),this.allowSimpleKey=!1,this.tokens.push(this.scanTag())},n.prototype.fetchLiteral=function(){this.fetchBlockScalar("|")},n.prototype.fetchFolded=function(){this.fetchBlockScalar(">")},n.prototype.fetchBlockScalar=function(b){this.allowSimpleKey=!0,this.removePossibleSimpleKey(),this.tokens.push(this.scanBlockScalar(b))},n.prototype.fetchSingle=function(){this.fetchFlowScalar("'")},n.prototype.fetchDouble=function(){this.fetchFlowScalar('"')},n.prototype.fetchFlowScalar=function(b){this.savePossibleSimpleKey(),this.allowSimpleKey=!1,this.tokens.push(this.scanFlowScalar(b))},n.prototype.fetchPlain=function(){this.savePossibleSimpleKey(),this.allowSimpleKey=!1,this.tokens.push(this.scanPlain())},n.prototype.checkDirective=function(){return this.column===0},n.prototype.checkDocumentStart=function(){return+this.column===0&&this.prefix(3)==="---"?0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(3)):!1},n.prototype.checkDocumentEnd=function(){return+this.column===0&&this.prefix(3)==="..."?0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(3)):!1},n.prototype.checkBlockEntry=function(){return 0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(1))},n.prototype.checkKey=function(){return this.flowLevel?!0:0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(1))},n.prototype.checkValue=function(){return this.flowLevel?!0:0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(1))},n.prototype.checkPlain=function(){var b=this.peek();return-1==="\0 \t\r\n\u2028\u2029-?:,[]{}#&*!|>'\"%@`".indexOf(b)||-1==="\0 \t\r\n\u2028\u2029".indexOf(this.peek(1))&&(b==="-"||!this.flowLevel&&0<="?:".indexOf(b))},n.prototype.scanToNextToken=function(){var b=!1;this.index===0&&this.peek()==="﻿"&&this.forward();while(!b){while(this.peek()===" ")this.forward();if(this.peek()==="#")while(-1==="\0\r\n\u2028\u2029".indexOf(this.peek()))this.forward();this.scanLineBreak()?this.flowLevel||(this.allowSimpleKey=!0):b=!0}},n.prototype.scanDirective=function(){var b,c,d,e;b=this.getMark(),this.forward(),d=this.scanDirectiveName(b),e=null;if(d==="YAML")e=this.scanYamlDirectiveValue(b),c=this.getMark();else if(d==="TAG")e=this.scanTagDirectiveValue(b),c=this.getMark();else{c=this.getMark();while(-1==="\0\r\n\u2028\u2029".indexOf(this.peek()))this.forward()}return this.scanDirectiveIgnoredLine(b),new h.DirectiveToken(d,e,b,c)},n.prototype.scanDirectiveName=function(b){var c,d,e;c=0,d=this.peek(c);while(/^[0-9A-Za-z]/.test(d)||0<="-_".indexOf(d))c+=1,d=this.peek(c);if(!c)throw new l("while scanning a directive",b,"expected alphabetic or numeric character, but found "+d,this.getMark());e=this.prefix(c),this.forward(c),d=this.peek();if(-1==="\0 \r\n\u2028\u2029".indexOf(d))throw new l("while scanning a directive",b,"expected alphabetic or numeric character, but found "+d,this.getMark());return e},n.prototype.scanYamlDirectiveValue=function(b){var c,d;while(this.peek()===" ")this.forward();c=this.scanYamlDirectiveNumber(b);if(this.peek()!==".")throw new l("while scanning a directive",b,"expected a digit or '.', but found "+this.peek(),this.getMark());this.forward(),d=this.scanYamlDirectiveNumber(b);if(-1==="\0 \r\n\u2028\u2029".indexOf(this.peek()))throw new l("while scanning a directive",b,"expected a digit or ' ', but found "+this.peek(),this.getMark());return[c,d]},n.prototype.scanYamlDirectiveNumber=function(b){var c,d,e;c=this.peek();if(!/^[0-9]/.test(c))throw new l("while scanning a directive",b,"expected a digit, but found "+c,this.getMark());d=0;while(/^[0-9]/.test(this.peek(d)))d+=1;return e=+this.prefix(d),this.forward(d),e},n.prototype.scanTagDirectiveValue=function(b){var c,d;while(this.peek()===" ")this.forward();c=this.scanTagDirectiveHandle(b);while(this.peek()===" ")this.forward();return d=this.scanTagDirectivePrefix(b),[c,d]},n.prototype.scanTagDirectiveHandle=function(b){var c,d;c=this.scanTagHandle("directive",b),d=this.peek();if(d!==" ")throw new l("while scanning a directive",b,"expected ' ', but found "+d,this.getMark());return c},n.prototype.scanTagDirectivePrefix=function(b){var c,d;c=this.scanTagUri("directive",b),d=this.peek();if(-1==="\0 \r\n\u2028\u2029".indexOf(d))throw new l("while scanning a directive",b,"expected ' ', but found "+d,this.getMark());return c},n.prototype.scanDirectiveIgnoredLine=function(b){var c;while(this.peek()===" ")this.forward();if(this.peek()==="#")while(-1==="\0\r\n\u2028\u2029".indexOf(this.peek()))this.forward();c=this.peek();if(-1==="\0\r\n\u2028\u2029".indexOf(c))throw new l("while scanning a directive",b,"expected a comment or a line break, but found "+c,this.getMark());this.scanLineBreak()},n.prototype.scanAnchor=function(b){var c,d,e,f,g,h;c=this.getMark(),d=this.peek(),e=d==="*"?"alias":"anchor",this.forward(),f=0,g=this.peek(f);while(/^[0-9A-Za-z]/.test(g)||0<="-_".indexOf(g))f+=1,g=this.peek(f);if(!f)throw new l("while scanning an "+e,c,"expected alphabetic or numeric character, but found "+g,this.getMark());h=this.prefix(f),this.forward(f),g=this.peek();if(-1==="\0 \t\r\n\u2028\u2029?:,]}%@`".indexOf(g))throw new l("while scanning an "+e,c,"expected alphabetic or numeric character, but found "+g,this.getMark());return new b(h,c,this.getMark())},n.prototype.scanTag=function(){var b,c,d,e,f,g;b=this.getMark(),c=this.peek(1);if(c==="<"){d=null,this.forward(2),e=this.scanTagUri("tag",b);if(this.peek()!==">")throw new l("while parsing a tag",b,"expected '>', but found "+this.peek(),this.getMark());this.forward()}else if(0<="\0 \t\r\n\u2028\u2029".indexOf(c))d=null,e="!",this.forward();else{f=1,g=!1;while(-1==="\0 \r\n\u2028\u2029".indexOf(c)){if(c==="!"){g=!0;break}f+=1,c=this.peek(f)}g?d=this.scanTagHandle("tag",b):(d="!",this.forward()),e=this.scanTagUri("tag",b)}c=this.peek();if(-1==="\0 \r\n\u2028\u2029".indexOf(c))throw new l("while scanning a tag",b,"expected ' ', but found "+c,this.getMark());return new h.TagToken([d,e],b,this.getMark())},n.prototype.scanBlockScalar=function(b){var c,d,e,f,g,i=null,j,k,l,m,n,o,p,q;c=b===">",d=[],e=this.getMark(),this.forward(),p=this.scanBlockScalarIndicators(e),g=p[0],i=p[1]||null,this.scanBlockScalarIgnoredLine(e),j=this.indent+1,j<1&&(j=1),null===i?(p=this.scanBlockScalarIndentation(),m=p[0],k=p[1],f=p[2],l=Math.max(j,k)):(l=j+i-1,p=this.scanBlockScalarBreaks(l),m=p[0],f=p[1]),n="";while(+this.column===l&&this.peek()!=="\0"){d=d.concat(m),o=-1===" \t".indexOf(this.peek()),q=0;while(-1==="\0\r\n\u2028\u2029".indexOf(this.peek(q)))q+=1;d.push(this.prefix(q)),this.forward(q),n=this.scanLineBreak(),p=this.scanBlockScalarBreaks(l),m=p[0],f=p[1];if(+this.column!==l||this.peek()==="\0")break;c&&n==="\n"&&o&&-1===" \t".indexOf(this.peek())?(!m||!m.length)&&d.push(" "):d.push(n)}return!1!==g&&d.push(n),!0===g&&(d=d.concat(m)),new h.ScalarToken(d.join(""),!1,e,f,b)},n.prototype.scanBlockScalarIndicators=function(b){var c=null,d=null,e=this.peek();if(0<="+-".indexOf(e)){c=e==="+",this.forward(),e=this.peek();if(0<="0123456789".indexOf(e)){d=+e;if(d===0)throw new l("while scanning a block scalar",b,"expected indentation indicator in the range 1-9, but found 0",this.getMark());this.forward()}}else if(0<="0123456789".indexOf(e)){d=+e;if(d===0)throw new l("while scanning a block scalar",b,"expected indentation indicator in the range 1-9, but found 0",this.getMark());this.forward(),e=this.peek(),0<="+-".indexOf(e)&&(c=e==="+",this.forward())}e=this.peek();if(-1==="\0 \r\n\u2028\u2029".indexOf(e))throw new l("while scanning a block scalar",b,"expected chomping or indentation indicators, but found "+e,this.getMark());return[c,d]},n.prototype.scanBlockScalarIgnoredLine=function(b){var c;while(this.peek()===" ")this.forward();if(this.peek()==="#")while(-1==="\0\r\n\u2028\u2029".indexOf(this.peek()))this.forward();c=this.peek();if(-1==="\0\r\n\u2028\u2029".indexOf(c))throw new l("while scanning a block scalar",b,"expected a comment or a line break, but found "+c,this.getMark());this.scanLineBreak()},n.prototype.scanBlockScalarIndentation=function(){var b,c,d;b=[],c=0,d=this.getMark();while(0<=" \r\n\u2028\u2029".indexOf(this.peek()))this.peek()!==" "?(b.push(this.scanLineBreak()),d=this.getMark()):(this.forward(),this.column>c&&(c=this.column));return[b,c,d]},n.prototype.scanBlockScalarBreaks=function(b){var c,d;c=[],d=this.getMark();while(this.column<b&&this.peek()===" ")this.forward();while(0<="\r\n\u2028\u2029".indexOf(this.peek())){c.push(this.scanLineBreak()),d=this.getMark();while(this.column<b&&this.peek()===" ")this.forward()}return[c,d]},n.prototype.scanFlowScalar=function(b){var c,d,e,f,g,i,j;c=b==='"',d=[],g=this.getMark(),i=this.peek(),this.forward(),d=d.concat(this.scanFlowScalarNonSpaces(c,g));while(this.peek()!==i)d=d.concat(this.scanFlowScalarSpaces(c,g)),d=d.concat(this.scanFlowScalarNonSpaces(c,g));return this.forward(),j=this.getMark(),new h.ScalarToken(d.join(""),!1,g,j,b)},n.prototype.scanFlowScalarNonSpaces=function(b,c){var d=this,e,f,g,h,m;m=function(a){if(-1==="0123456789ABCDEFabcdef".indexOf(d.peek(a)))throw new l("while scanning a double-quoted scalar",c,"expected escape sequence of "+f+" hexdecimal numbers, but found "+d.peek(a),d.getMark())},e=[];for(;;){f=0;while(-1==="'\"\\\0 \t\r\n\u2028\u2029".indexOf(this.peek(f)))f+=1;f&&(e.push(this.prefix(f)),this.forward(f)),g=this.peek();if(!b&&g==="'"&&this.peek(1)==="'")e.push("'"),this.forward(2);else if(b&&g==="'"||!b&&0<='"\\'.indexOf(g))e.push(g),this.forward();else{if(!b||g!=="\\")return e;this.forward(),g=this.peek();if(i.hasOwnProperty(g))e.push(i[g]),this.forward();else if(j.hasOwnProperty(g))f=j[g],this.forward(),k(f).forEach(m),h=parseInt(this.prefix(f),16),e.push(String.fromCharCode(h)),this.forward(f);else{if(!(0<="\r\n\u2028\u2029".indexOf(g)))throw new l("while scanning a double-quoted scalar"
,c,"found unknown escape character "+g,this.getMark());this.scanLineBreak(),e=e.concat(this.scanFlowScalarBreaks(b,c))}}}},n.prototype.scanFlowScalarSpaces=function(b,c){var d,e,f,g,h,i;d=[],e=0;while(0<=" \t".indexOf(this.peek(e)))e+=1;f=this.prefix(e),this.forward(e),g=this.peek();if(g==="\0")throw new l("while scanning a quoted scalar",c,"found unexpected end of stream",this.getMark());return 0<="\r\n\u2028\u2029".indexOf(g)?(h=this.scanLineBreak(),i=this.scanFlowScalarBreaks(b,c),h!=="\n"?d.push(h):i||d.push(" "),d=d.concat(i)):d.push(f),d},n.prototype.scanFlowScalarBreaks=function(b,c){var d=[],e;for(;;){e=this.prefix(3);if((e==="---"||e==="...")&&0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(3)))throw new l("while scanning a quoted scalar",c,"found unexpected document separator",this.getMark());while(0<=" \t".indexOf(this.peek()))this.forward();if(!(0<="\r\n\u2028\u2029".indexOf(this.peek())))return d;d.push(this.scanLineBreak())}},n.prototype.scanPlain=function(){var b,c,d,e,f,g,i;c=[],d=this.getMark(),e=d,f=this.indent+1,g=[];for(;;){i=0;if(this.peek()==="#")break;for(;;){b=this.peek(i);if(0<="\0 \t\r\n\u2028\u2029".indexOf(b)||!this.flowLevel&&b===":"&&0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(i+1))||this.flowLevel&&0<=",:?[]{}".indexOf(b))break;i+=1}if(this.flowLevel&&b===":"&&-1==="\0 \t\r\n\u2028\u2029,[]{}".indexOf(this.peek(i+1)))throw this.forward(i),new l("while scanning a plain scalar",d,"found unexpected ':'",this.getMark(),"Please check http://pyyaml.org/wiki/YAMLColonInFlowContext for details.");if(i===0)break;this.allowSimpleKey=!1,c=c.concat(g),c.push(this.prefix(i)),this.forward(i),e=this.getMark(),g=this.scanPlainSpaces(f,d);if(!Array.isArray(g)||!g.length||this.peek()==="#"||!this.flowLevel&&this.column<f)break}return new h.ScalarToken(c.join(""),!0,d,e)},n.prototype.scanPlainSpaces=function(b,c){var d,e,f,g,h,i,j;d=[],e=0;while(this.peek(e)===" ")e+=1;f=this.prefix(e),this.forward(e),g=this.peek();if(0<="\r\n\u2028\u2029".indexOf(g)){j=this.scanLineBreak(),this.allowSimpleKey=!0,h=this.prefix(3);if((h==="---"||h==="...")&&0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(3)))return;i=[];while(0<=" \r\n\u2028\u2029".indexOf(this.peek()))if(this.peek()===" ")this.forward();else{i.push(this.scanLineBreak()),h=this.prefix(3);if((h==="---"||h==="...")&&0<="\0 \t\r\n\u2028\u2029".indexOf(this.peek(3)))return}j!=="\n"?d.push(j):(!i||!i.length)&&d.push(" "),d=d.concat(i)}else f&&d.push(f);return d},n.prototype.scanTagHandle=function(b,c){var d,e,f;d=this.peek();if(d!=="!")throw new l("while scanning a "+b,c,"expected '!', but found "+d,this.getMark());e=1,d=this.peek(e);if(d!==" "){while(/^[0-9A-Za-z]/.test(d)||0<="-_".indexOf(d))e+=1,d=this.peek(e);if(d!=="!")throw this.forward(e),new l("while scanning a "+b,c,"expected '!', but found "+d,this.getMark());e+=1}return f=this.prefix(e),this.forward(e),f},n.prototype.scanTagUri=function(b,c){var d,e,f;d=[],e=0,f=this.peek(e);while(/^[0-9A-Za-z]/.test(f)||0<="-;/?:@&=+$,_.!~*'()[]%".indexOf(f))f==="%"?(d.push(this.prefix(e)),this.forward(e),e=0,d.push(this.scanUriEscapes(b,c))):e+=1,f=this.peek(e);e&&(d.push(this.prefix(e)),this.forward(e),e=0);if(!d.length)throw new l("while parsing a "+b,c,"expected URI, but found "+f,this.getMark());return d.join("")},n.prototype.scanUriEscapes=function(b,c){var d=this,e,f,g,h;e=[],f=this.getMark(),h=function(a){if(-1==="0123456789ABCDEFabcdef".indexOf(d.peek(a)))throw new l("while scanning a "+b,c,"expected URI escape sequence of 2 hexdecimal numbers, but found "+d.peek(a),d.getMark())};while(this.peek()==="%")this.forward(),k(2).forEach(h),e.push(parseInt(this.prefix(2),16)),this.forward(2);try{g=(new Buffer(e)).toString("utf8")}catch(i){throw new l("while scanning a "+b,c,i.toString(),f)}return g},n.prototype.scanLineBreak=function(){var b;return b=this.peek(),0<="\r\n".indexOf(b)?(this.prefix(2)==="\r\n"?this.forward(2):this.forward(),"\n"):0<="\u2028\u2029".indexOf(b)?(this.forward(),b):""},b.exports.Scanner=n}),a.define("/lib/js-yaml/tokens.js",function(a,b,c,d,e){function g(a,b){this.startMark=a||null,this.endMark=b||null}function h(a,b,c,d){g.call(this,c,d),this.name=a,this.value=b}function i(){g.apply(this,arguments)}function j(){g.apply(this,arguments)}function k(a,b,c){g.call(this,a,b),this.encoding=c||null}function l(){g.apply(this,arguments)}function m(){g.apply(this,arguments)}function n(){g.apply(this,arguments)}function o(){g.apply(this,arguments)}function p(){g.apply(this,arguments)}function q(){g.apply(this,arguments)}function r(){g.apply(this,arguments)}function s(){g.apply(this,arguments)}function t(){g.apply(this,arguments)}function u(){g.apply(this,arguments)}function v(){g.apply(this,arguments)}function w(){g.apply(this,arguments)}function x(a,b,c){g.call(this,b,c),this.value=a}function y(a,b,c){g.call(this,b,c),this.value=a}function z(a,b,c){g.call(this,b,c),this.value=a}function A(a,b,c,d,e){g.call(this,c,d),this.value=a,this.plain=b,this.style=e||null}"use strict";var f=a("./common");g.prototype.hash=g.prototype.toString=function B(){var a=[],b=this;return Object.getOwnPropertyNames(this).forEach(function(c){/startMark|endMark|__meta__/.test(c)||a.push(c+":"+b[c])}),this.constructor.name+"("+a.join(", ")+")"},f.inherits(h,g),h.id="<directive>",f.inherits(i,g),i.id="<document start>",f.inherits(j,g),j.id="<document end>",f.inherits(k,g),k.id="<stream start>",f.inherits(l,g),l.id="<stream end>",f.inherits(m,g),m.id="<block sequence start>",f.inherits(n,g),n.id="<block mapping start>",f.inherits(o,g),o.id="<block end>",f.inherits(p,g),p.id="[",f.inherits(q,g),q.id="{",f.inherits(r,g),r.id="]",f.inherits(s,g),s.id="}",f.inherits(t,g),t.id="?",f.inherits(u,g),u.id=":",f.inherits(v,g),v.id="-",f.inherits(w,g),w.id=",",f.inherits(x,g),x.id="<alias>",f.inherits(y,g),y.id="<anchor>",f.inherits(z,g),z.id="<tag>",f.inherits(A,g),z.id="<scalar>",b.exports.DirectiveToken=h,b.exports.DocumentStartToken=i,b.exports.DocumentEndToken=j,b.exports.StreamStartToken=k,b.exports.StreamEndToken=l,b.exports.BlockSequenceStartToken=m,b.exports.BlockMappingStartToken=n,b.exports.BlockEndToken=o,b.exports.FlowSequenceStartToken=p,b.exports.FlowMappingStartToken=q,b.exports.FlowSequenceEndToken=r,b.exports.FlowMappingEndToken=s,b.exports.KeyToken=t,b.exports.ValueToken=u,b.exports.BlockEntryToken=v,b.exports.FlowEntryToken=w,b.exports.AliasToken=x,b.exports.AnchorToken=y,b.exports.TagToken=z,b.exports.ScalarToken=A}),a.define("/lib/js-yaml/parser.js",function(a,b,c,d,e){function j(){g.MarkedYAMLError.apply(this,arguments),this.name="ParserError"}function l(a){this.currentEvent=null,this.yamlVersion=null,this.tagHandles={},this.states=[],this.marks=[],this.state=this.parseStreamStart.bind(this)}"use strict";var f=a("./common"),g=a("./errors"),h=a("./tokens"),i=a("./events");f.inherits(j,g.MarkedYAMLError);var k={"!":"!","!!":"tag:yaml.org,2002:"};l.prototype.dispose=function(){this.states=[],this.state=null},l.prototype.checkEvent=function(){var b;null===this.currentEvent&&!!this.state&&(this.currentEvent=this.state());if(null!==this.currentEvent){if(0===arguments.length)return!0;for(b=0;b<arguments.length;b+=1)if(f.isInstanceOf(this.currentEvent,arguments[b]))return!0}return!1},l.prototype.peekEvent=function(){return null===this.currentEvent&&!!this.state&&(this.currentEvent=this.state()),this.currentEvent},l.prototype.getEvent=function(){var b;return null===this.currentEvent&&!!this.state&&(this.currentEvent=this.state()),b=this.currentEvent,this.currentEvent=null,b},l.prototype.parseStreamStart=function(){var b,c;return b=this.getToken(),c=new i.StreamStartEvent(b.startMark,b.endMark,b.encoding),this.state=this.parseImplicitDocumentStart.bind(this),c},l.prototype.parseImplicitDocumentStart=function(){var b,c;return this.checkToken(h.DirectiveToken,h.DocumentStartToken,h.StreamEndToken)?this.parseDocumentStart():(this.tagHandles=k,b=this.peekToken(),c=new i.DocumentStartEvent(b.startMark,b.startMark,!1),this.states.push(this.parseDocumentEnd.bind(this)),this.state=this.parseBlockNode.bind(this),c)},l.prototype.parseDocumentStart=function(){var b,c,d,e,f,k;while(this.checkToken(h.DocumentEndToken))this.getToken();if(this.checkToken(h.StreamEndToken)){b=this.getToken(),c=new i.StreamEndEvent(b.startMark,b.endMark);if(this.states&&this.states.length)throw new g.YAMLError("States supposed to be empty");if(this.marks&&this.marks.length)throw new g.YAMLError("Marks supposed to be empty");return this.state=null,c}b=this.peekToken(),f=b.startMark,k=this.processDirectives(),d=k.shift(),e=k.shift();if(!this.checkToken(h.DocumentStartToken))throw new j(null,null,"expected '<document start>', but found "+this.peekToken().constructor.id,this.peekToken().startMark);return b=this.getToken(),c=new i.DocumentStartEvent(f,b.endMark,!0,d,e),this.states.push(this.parseDocumentEnd.bind(this)),this.state=this.parseDocumentContent.bind(this),c},l.prototype.parseDocumentEnd=function(){var b,c,d,e,f;return b=this.peekToken(),e=f=b.startMark,d=!1,this.checkToken(h.DocumentEndToken)&&(b=this.getToken(),f=b.endMark,d=!0),c=new i.DocumentEndEvent(e,f,d),this.state=this.parseDocumentStart.bind(this),c},l.prototype.parseDocumentContent=function(){var b;return this.checkToken(h.DirectiveToken,h.DocumentStartToken,h.DocumentEndToken,h.StreamEndToken)?(b=this.processEmptyScalar(this.peekToken().startMark),this.state=this.states.pop(),b):this.parseBlockNode()},l.prototype.processDirectives=function(){var b,c,d,e;this.yamlVersion=null,this.tagHandles={};while(this.checkToken(h.DirectiveToken)){b=this.getToken();if("YAML"===b.name){if(null!==this.yamlVersion)throw new j(null,null,"found duplicate YAML directive",b.startMark);if(1!==+b.value[0])throw new j(null,null,"found incompatible YAML document (version 1.* is required)",b.startMark);this.yamlVersion=b.value}else if("TAG"===b.name){c=b.value[0],d=b.value[1];if(undefined!==this.tagHandles[c])throw new j(null,null,"duplicate tag handle "+c,b.startMark);this.tagHandles[c]=d}}return Object.getOwnPropertyNames(this.tagHandles).length?(e=[this.yamlVersion,{}],Object.getOwnPropertyNames(this.tagHandles).forEach(function(a){e[1][a]=this.tagHandles[a]}.bind(this))):e=[this.yamlVersion,null],Object.getOwnPropertyNames(k).forEach(function(a){undefined===this.tagHandles[a]&&(this.tagHandles[a]=k[a])}.bind(this)),e},l.prototype.parseBlockNode=function(){return this.parseNode(!0)},l.prototype.parseFlowNode=function(){return this.parseNode()},l.prototype.parseBlockNodeOrIndentlessSequence=function(){return this.parseNode(!0,!0)},l.prototype.parseNode=function(b,c){var d,e,f=null,g=null,k=null,l,m,n=null,o=null,p,q;b=b||!1,c=c||!1;if(this.checkToken(h.AliasToken))d=this.getToken(),e=new i.AliasEvent(d.value,d.startMark,d.endMark),this.state=this.states.pop();else{f=null,g=null,k=l=m=null,this.checkToken(h.AnchorToken)?(d=this.getToken(),k=d.startMark,l=d.endMark,f=d.value,this.checkToken(h.TagToken)&&(d=this.getToken(),m=d.startMark,l=d.endMark,g=d.value)):this.checkToken(h.TagToken)&&(d=this.getToken(),k=m=d.startMark,l=d.endMark,g=d.value,this.checkToken(h.AnchorToken)&&(d=this.getToken(),l=d.endMark,f=d.value));if(null!==g){n=g[0],o=g[1];if(null===n)g=o;else{if(undefined===this.tagHandles[n])throw new j("while parsing a node",k,"found undefined tag handle "+n,m);g=this.tagHandles[n]+o}}null===k&&(k=l=this.peekToken().startMark),e=null,p=null===g||"!"===g;if(c&&this.checkToken(h.BlockEntryToken))l=this.peekToken().endMark,e=new i.SequenceStartEvent(f,g,p,k,l),this.state=this.parseIndentlessSequenceEntry.bind(this);else if(this.checkToken(h.ScalarToken))d=this.getToken(),l=d.endMark,d.plain&&null===g||"!"===g?p=[!0,!1]:null===g?p=[!1,!0]:p=[!1,!1],e=new i.ScalarEvent(f,g,p,d.value,k,l,d.style),this.state=this.states.pop();else if(this.checkToken(h.FlowSequenceStartToken))l=this.peekToken().endMark,e=new i.SequenceStartEvent(f,g,p,k,l,!0),this.state=this.parseFlowSequenceFirstEntry.bind(this);else if(this.checkToken(h.FlowMappingStartToken))l=this.peekToken().endMark,e=new i.MappingStartEvent(f,g,p,k,l,!0),this.state=this.parseFlowMappingFirstKey.bind(this);else if(b&&this.checkToken(h.BlockSequenceStartToken))l=this.peekToken().startMark,e=new i.SequenceStartEvent(f,g,p,k,l,!1),this.state=this.parseBlockSequenceFirstEntry.bind(this);else if(b&&this.checkToken(h.BlockMappingStartToken))l=this.peekToken().startMark,e=new i.MappingStartEvent(f,g,p,k,l,!1),this.state=this.parseBlockMappingFirstKey.bind(this);else{if(null===f&&null===g)throw q=b?"block":"flow",d=this.peekToken(),new j("while parsing a "+q+" node",k,"expected the node content, but found "+d.constructor.id,d.startMark);e=new i.ScalarEvent(f,g,[p,!1],"",k,l),this.state=this.states.pop()}}return e},l.prototype.parseBlockSequenceFirstEntry=function(){var b=this.getToken();return this.marks.push(b.startMark),this.parseBlockSequenceEntry()},l.prototype.parseBlockSequenceEntry=function(){var b,c;if(this.checkToken(h.BlockEntryToken))return b=this.getToken(),this.checkToken(h.BlockEntryToken,h.BlockEndToken)?(this.state=this.parseBlockSequenceEntry.bind(this),this.processEmptyScalar(b.endMark)):(this.states.push(this.parseBlockSequenceEntry.bind(this)),this.parseBlockNode());if(!this.checkToken(h.BlockEndToken))throw b=this.peekToken(),new j("while parsing a block collection",this.marks[this.marks.length-1],"expected <block end>, but found "+b.constructor.id,b.startMark);return b=this.getToken(),c=new i.SequenceEndEvent(b.startMark,b.endMark),this.state=this.states.pop(),this.marks.pop(),c},l.prototype.parseIndentlessSequenceEntry=function(){var b,c;return this.checkToken(h.BlockEntryToken)?(b=this.getToken(),this.checkToken(h.BlockEntryToken,h.KeyToken,h.ValueToken,h.BlockEndToken)?(this.state=this.parseIndentlessSequenceEntry.bind(this),this.processEmptyScalar(b.endMark)):(this.states.push(this.parseIndentlessSequenceEntry.bind(this)),this.parseBlockNode())):(b=this.peekToken(),c=new i.SequenceEndEvent(b.startMark,b.startMark),this.state=this.states.pop(),c)},l.prototype.parseBlockMappingFirstKey=function(){var b=this.getToken();return this.marks.push(b.startMark),this.parseBlockMappingKey()},l.prototype.parseBlockMappingKey=function(){var b,c;if(this.checkToken(h.KeyToken))return b=this.getToken(),this.checkToken(h.KeyToken,h.ValueToken,h.BlockEndToken)?(this.state=this.parseBlockMappingValue.bind(this),this.processEmptyScalar(b.endMark)):(this.states.push(this.parseBlockMappingValue.bind(this)),this.parseBlockNodeOrIndentlessSequence());if(!this.checkToken(h.BlockEndToken))throw b=this.peekToken(),new j("while parsing a block mapping",this.marks[this.marks.length-1],"expected <block end>, but found "+b.constructor.id,b.startMark);return b=this.getToken(),c=new i.MappingEndEvent(b.startMark,b.endMark),this.state=this.states.pop(),this.marks.pop(),c},l.prototype.parseBlockMappingValue=function(){var b,c;return this.checkToken(h.ValueToken)?(b=this.getToken(),this.checkToken(h.KeyToken,h.ValueToken,h.BlockEndToken)?(this.state=this.parseBlockMappingKey.bind(this),this.processEmptyScalar(b.endMark)):(this.states.push(this.parseBlockMappingKey.bind(this)),this.parseBlockNodeOrIndentlessSequence())):(this.state=this.parseBlockMappingKey.bind(this),b=this.peekToken(),this.processEmptyScalar(b.startMark))},l.prototype.parseFlowSequenceFirstEntry=function(){var b=this.getToken();return this.marks.push(b.startMark),this.parseFlowSequenceEntry(!0)},l.prototype.parseFlowSequenceEntry=function(b){var c,d;b=b||!1;if(!this.checkToken(h.FlowSequenceEndToken)){if(!b){if(!this.checkToken(h.FlowEntryToken))throw c=this.peekToken(),new j("while parsing a flow sequence",this.marks[this.marks.length-1],"expected ',' or ']', but got "+c.constructor.id,c.startMark);this.getToken()}if(this.checkToken(h.KeyToken))return c=this.peekToken(),d=new i.MappingStartEvent(null,null,!0,c.startMark,c.endMark,!0),this.state=this.parseFlowSequenceEntryMappingKey.bind(this),d;if(!this.checkToken(h.FlowSequenceEndToken))return this.states.push(this.parseFlowSequenceEntry.bind(this)),this.parseFlowNode()}return c=this.getToken(),d=new i.SequenceEndEvent(c.startMark,c.endMark),this.state=this.states.pop(),this.marks.pop(),d},l.prototype.parseFlowSequenceEntryMappingKey=function(){var b=this.getToken();return this.checkToken(h.ValueToken,h.FlowEntryToken,h.FlowSequenceEndToken)?(this.state=this.parseFlowSequenceEntryMappingValue.bind(this),this.processEmptyScalar(b.endMark)):(this.states.push(this.parseFlowSequenceEntryMappingValue.bind(this)),this.parseFlowNode())},l.prototype.parseFlowSequenceEntryMappingValue=function(){var b;return this.checkToken(h.ValueToken)?(b=this.getToken(),this.checkToken(h.FlowEntryToken,h.FlowSequenceEndToken)?(this.state=this.parseFlowSequenceEntryMappingEnd.bind(this),this.processEmptyScalar(b.endMark)):(this.states.push(this.parseFlowSequenceEntryMappingEnd.bind(this)),this.parseFlowNode())):(this.state=this.parseFlowSequenceEntryMappingEnd.bind(this),b=this.peekToken(),this.processEmptyScalar(b.startMark))},l.prototype.parseFlowSequenceEntryMappingEnd=function(){var b;return this.state=this.parseFlowSequenceEntry.bind(this),b=this.peekToken(),new i.MappingEndEvent(b.startMark,b.startMark)},l.prototype.parseFlowMappingFirstKey=function(){var b=this.getToken();return this.marks.push(b.startMark),this.parseFlowMappingKey(!0)},l.prototype.parseFlowMappingKey=function(b){var c,d;b=b||!1;if(!this.checkToken(h.FlowMappingEndToken)){if(!b){if(!this.checkToken(h.FlowEntryToken))throw c=this.peekToken(),new j("while parsing a flow mapping",this.marks[this.marks.length-1],"expected ',' or '}', but got "+c.constructor.id,c.startMark);this.getToken()}if(this.checkToken(h.KeyToken))return c=this.getToken(),this.checkToken(h.ValueToken,h.FlowEntryToken,h.FlowMappingEndToken)?(this.state=this.parseFlowMappingValue.bind(this),this.processEmptyScalar(c.endMark)):(this.states.push(this.parseFlowMappingValue.bind(this)),this.parseFlowNode());if(!this.checkToken(h.FlowMappingEndToken))return this.states.push(this.parseFlowMappingEmptyValue.bind(this)),this.parseFlowNode()}return c=this.getToken(),d=new i.MappingEndEvent(c.startMark,c.endMark),this.state=this.states.pop(),this.marks.pop(),d},l.prototype.parseFlowMappingValue=function(){var b;return this.checkToken(h.ValueToken)?(b=this.getToken(),this.checkToken(h.FlowEntryToken,h.FlowMappingEndToken)?(this.state=this.parseFlowMappingKey.bind(this),this.processEmptyScalar(b.endMark)):(this.states.push(this.parseFlowMappingKey.bind(this)),this.parseFlowNode())):(this.state=this.parseFlowMappingKey.bind(this),b=this.peekToken(),this.processEmptyScalar(b.startMark))},l.prototype.parseFlowMappingEmptyValue=function(){return this.state=this.parseFlowMappingKey.bind(this),this.processEmptyScalar(this.peekToken().startMark)},l.prototype.processEmptyScalar=function(b){return new i.ScalarEvent(null,null,[!0,!1],"",b,b)},b.exports.Parser=l}),a.define("/lib/js-yaml/events.js",function(a,b,c,d,e){function h(a,b){this.startMark=a||null,this.endMark=b||null}function i(a,b,c){h.call(this,b,c),this.anchor=a}function j(a,b,c,d,e,f){i.call(this,a,d,e),this.tag=b,this.implicit=c,this.flowStyle=f||null}function k(){h.apply(this,arguments)}function l(a,b,c){h.call(this,a,b),this.encoding=c||null}function m(){h.apply(this,arguments)}function n(a,b,c,d,e){h.call(this,a,b),this.explicit=c||null,this.version=d||null,this.tags=e||null}function o(a,b,c){h.call(this,a,b),this.explicit=c||null}function p(){i.apply(this,arguments)}function q(a,b,c,d,e,f,g){i.call(this,a,e,f),this.tag=b,this.implicit=c,this.value=d,this.style=g||null}function r(){j.apply(this,arguments)}function s(){k.apply(this,arguments)}function t(){j.apply(this,arguments)}function u(){k.apply(this,arguments)}"use strict";var f=a("./common"),g=["anchor","tag","implicit","value"];h.prototype.hash=h.prototype.toString=function v(){var a=this,b=[];return Object.getOwnPropertyNames(this).forEach(function(c){0<=g.indexOf(c)&&b.push(c+"="+a[c])}),this.constructor.name+"("+b.join(", ")+")"},f.inherits(i,h),f.inherits(j,i),f.inherits(k,h),f.inherits(l,h),f.inherits(m,h),f.inherits(n,h),f.inherits(o,h),f.inherits(p,i),f.inherits(q,i),f.inherits(r,j),f.inherits(s,k),f.inherits(t,j),f.inherits(u,k),b.exports.NodeEvent=i,b.exports.CollectionStartEvent=j,b.exports.CollectionEndEvent=k,b.exports.StreamStartEvent=l,b.exports.StreamEndEvent=m,b.exports.DocumentStartEvent=n,b.exports.DocumentEndEvent=o,b.exports.AliasEvent=p,b.exports.ScalarEvent=q,b.exports.SequenceStartEvent=r,b.exports.SequenceEndEvent=s,b.exports.MappingStartEvent=t,b.exports.MappingEndEvent=u}),a.define("/lib/js-yaml/composer.js",function(a,b,c,d,e){function j(){i.MarkedYAMLError.apply(this,arguments),this.name="ComposerError"}function k(){this.anchors={}}"use strict";var f=a("./common"),g=a("./nodes"),h=a("./events"),i=a("./errors");f.inherits(j,i.MarkedYAMLError),k.prototype.checkNode=function(){return this.checkEvent(h.StreamStartEvent)&&this.getEvent(),!this.checkEvent(h.StreamEndEvent)},k.prototype.getNode=function(){return this.checkEvent(h.StreamEndEvent)?null:this.composeDocument()},k.prototype.getSingleNode=function(){var b=null;this.getEvent(),this.checkEvent(h.StreamEndEvent)||(b=this.composeDocument());if(!this.checkEvent(h.StreamEndEvent))throw new j("expected a single document in the stream",b.startMark,"but found another document",this.getEvent().startMark);return this.getEvent(),b},k.prototype.composeDocument=function(){var b;return this.getEvent(),b=this.composeNode(null,null),this.getEvent(),this.anchors={},b},k.prototype.composeNode=function(b,c){var d=null,e,f;if(this.checkEvent(h.AliasEvent)){e=this.getEvent(),f=e.anchor;if(undefined===this.anchors[f])throw new j(null,null,"found undefined alias "+f,e.startMark);return this.anchors[f]}e=this.peekEvent(),f=e.anchor;if(null!==f&&undefined!==this.anchors[f])throw new j("found duplicate anchor "+f+"; first occurence",this.anchors[f].startMark,"second occurence",e.startMark);return this.checkEvent(h.ScalarEvent)?d=this.composeScalarNode(f):this.checkEvent(h.SequenceStartEvent)?d=this.composeSequenceNode(f):this.checkEvent(h.MappingStartEvent)&&(d=this.composeMappingNode(f)),d},k.prototype.composeScalarNode=function(b){var c,d,e;return c=this.getEvent(),d=c.tag,null===d?d=this.resolve(g.ScalarNode,c.value,c.implicit):"!"===d&&(d=this.resolve(g.ScalarNode,c.value,!1)),e=new g.ScalarNode(d,c.value,c.startMark,c.endMark,c.style),null!==b&&(this.anchors[b]=e),e},k.prototype.composeSequenceNode=function(b){var c,d,e,f,i,j;c=this.getEvent(),e=c.tag,null===e?e=this.resolve(g.SequenceNode,null,c.implicit):"!"===e&&(e=this.resolve(g.SequenceNode,null,!1)),f=new g.SequenceNode(e,[],c.startMark,null,c.flowStyle),null!==b&&(this.anchors[b]=f),i=0;while(!this.checkEvent(h.SequenceEndEvent))f.value.push(this.composeNode(f,i)),i+=1;return j=this.getEvent(),f.endMark=j.endMark,f},k.prototype.composeMappingNode=function(b){var c,d,e,f,i,j,k;c=this.getEvent(),e=c.tag,null===e?e=this.resolve(g.MappingNode,null,c.implicit):"!"===e&&(e=this.resolve(g.MappingNode,null,!1)),f=new g.MappingNode(e,[],c.startMark,null,c.flowStyle),null!==b&&(this.anchors[b]=f);while(!this.checkEvent(h.MappingEndEvent))i=this.composeNode(f,null),j=this.composeNode(f,i),f.value.push([i,j]);return k=this.getEvent(),f.endMark=k.endMark,f},b.exports.Composer=k}),a.define("/lib/js-yaml/nodes.js",function(a,b,c,d,e){function g(a,b,c,d){this.tag=a,this.value=b,this.startMark=c||null,this.endMark=d||null}function h(a,b,c,d,e){g.call(this,a,b,c,d),this.style=e||null}function i(a,b,c,d,e){g.call(this,a,b,c,d),this.flowStyle=e||null}function j(){i.apply(this,arguments)}function k(){i.apply(this,arguments)}"use strict";var f=a("./common");g.prototype.hash=g.prototype.toString=function l(){var a=this.value.toString();return this.constructor.name+"("+this.tag+", "+a+")"},f.inherits(h,g),h.id="scalar",f.inherits(i,g),f.inherits(j,i),j.id="sequence",f.inherits(k,i),k.id="mapping",b.exports.ScalarNode=h,b.exports.SequenceNode=j,b.exports.MappingNode=k}),a.define("/lib/js-yaml/resolver.js",function(a,b,c,d,e){function k(){this.resolverExactPaths=[],this.resolverPrefixPaths=[],this.yamlImplicitResolvers=k.yamlImplicitResolvers}function l(){k.apply(this,arguments),this.yamlImplicitResolvers=l.yamlImplicitResolvers}"use strict";var f=a("./common"),g=a("./nodes"),h="tag:yaml.org,2002:str",i="tag:yaml.org,2002:seq",j="tag:yaml.org,2002:map";k.yamlImplicitResolvers={},k.addImplicitResolver=function(b,c,d){var e=this;undefined===d&&(d=[null]),d.forEach(function(a){undefined===e.yamlImplicitResolvers[a]&&(e.yamlImplicitResolvers[a]=[]),e.yamlImplicitResolvers[a].push([b,c])})},k.prototype.resolve=function(b,c,d){var e,f,k,l;if(b===g.ScalarNode&&d&&d[0]){c===""?e=this.yamlImplicitResolvers[""]||[]:e=this.yamlImplicitResolvers[c[0]]||[],e=e.concat(this.yamlImplicitResolvers[null]||[]);for(f=0;f<e.length;f+=1){k=e[f][0],l=e[f][1];if(l.test(c))return k}}return b===g.ScalarNode?k=h:b===g.SequenceNode?k=i:b===g.MappingNode?k=j:k=null,k},f.inherits(l,k),l.yamlImplicitResolvers={},l.addImplicitResolver=k.addImplicitResolver,l.addImplicitResolver("tag:yaml.org,2002:bool",new RegExp("^(?:y|yes|Yes|YES|n|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)$"),["y","Y","n","N","t","T","f","F","o","O"]),l.addImplicitResolver("tag:yaml.org,2002:float",new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?|\\.[0-9_]+(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),["-","+","0","1","2","3","4","5","6","7","8","9","."]),l.addImplicitResolver("tag:yaml.org,2002:int",new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+)$"),["-","+","0","1","2","3","4","5","6","7","8","9"]),l.addImplicitResolver("tag:yaml.org,2002:merge",new RegExp("^(?:<<)$"),["<"]),l.addImplicitResolver("tag:yaml.org,2002:null",new RegExp("^(?:~|null|Null|NULL|)$"),["~","n","N",""]),l.addImplicitResolver("tag:yaml.org,2002:timestamp",new RegExp("^(?:[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]|[0-9][0-9][0-9][0-9]-[0-9][0-9]?-[0-9][0-9]?(?:[Tt]|[ \\t]+)[0-9][0-9]?:[0-9][0-9]:[0-9][0-9](?:\\.[0-9]*)?(?:[ \\t]*(?:Z|[-+][0-9][0-9]?(?::[0-9][0-9])?))?)$"),["0","1","2","3","4","5","6","7","8","9"]),l.addImplicitResolver("tag:yaml.org,2002:value",new RegExp("^(?:=)$"),["="]),l.addImplicitResolver("tag:yaml.org,2002:yaml",new RegExp("^(?:!|&|\\*)$"),["!","&","*"]),b.exports.BaseResolver=k,b.exports.Resolver=l}),a.define("/lib/js-yaml/constructor.js",function(a,b,c,d,e){function i(){g.MarkedYAMLError.apply(this,arguments),this.name="ConstructorError"}function l(){this.constructedObjects=new f.Hash,this.recursiveObjects=new f.Hash,this.statePopulators=[],this.deepConstruct=!1,this.yamlConstructors=l.yamlConstructors}function m(){l.apply(this),this.yamlConstructors=m.yamlConstructors}function n(){m.apply(this),this.yamlConstructors=n.yamlConstructors}"use strict";var f=a("./common"),g=a("./errors"),h=a("./nodes");f.inherits(i,g.MarkedYAMLError);var j={y:!0,yes:!0,n:!1,no:!1,"true":!0,"false":!1,on:!0,off:!1},k=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$");l.yamlConstructors={},l.addConstructor=function(b,c){this.yamlConstructors[b]=c},l.prototype.checkData=function(){return this.checkNode()},l.prototype.getData=function(){if(this.checkNode())return this.constructDocument(this.getNode())},l.prototype.getSingleData=function(){var b=this.getSingleNode();return null!==b?this.constructDocument(b):null},l.prototype.constructDocument=function(b){var c=this.constructObject(b),d,e;d=function(a){a.execute()};while(!!this.statePopulators.length)e=this.statePopulators,this.statePopulators=[],e.forEach(d);return this.constructedObjects=new f.Hash,this.recursiveObjects=new f.Hash,this.deepConstruct=!1,c},l.prototype.constructObject=function(b,c){var d,e,g,h;if(this.constructedObjects.hasKey(b))return this.constructedObjects.get(b);!c||(e=this.deepConstruct,this.deepConstruct=!0);if(this.recursiveObjects.hasKey(b))throw new i(null,null,"found unconstructable recursive node",b.startMark);this.recursiveObjects.store(b,null);if(undefined!==this.yamlConstructors[b.tag])g=this.yamlConstructors[b.tag];else{if(undefined===this.yamlConstructors[null])throw new i(null,null,"can't find any constructor for tag="+b.tag,b.startMark);g=this.yamlConstructors[null]}return d=g.call(this,b),d instanceof f.Populator&&(h=d,d=h.data,this.deepConstruct?h.execute():this.statePopulators.push(h)),this.constructedObjects.store(b,d),this.recursiveObjects.remove(b),c&&(this.deepConstruct=e),d},l.prototype.constructScalar=function(b){if(!f.isInstanceOf(b,h.ScalarNode))throw new i(null,null,"expected a scalar node, but found "+b.id,b.startMark);return b.value},l.prototype.constructSequence=function(b,c){if(!f.isInstanceOf(b,h.SequenceNode))throw new i(null,null,"expected a sequence node, but found "+b.id,b.startMark);return b.value.map(function(a){return this.constructObject(a,c)},this)},l.prototype.constructMapping=function(b,c){var d;if(!f.isInstanceOf(b,h.MappingNode))throw new i(null,null,"expected a mapping node, but found "+b.id,b.startMark);return d={},f.each(b.value,function(a){var b=a[0],e=a[1],f,g;f=this.constructObject(b,c);if(undefined===b.hash)throw new i("while constructing a mapping",b.startMark,"found unhashable key",b.startMark);g=this.constructObject(e,c),d[f]=g},this),d},l.prototype.constructPairs=function(b,c){var d;if(!f.isInstanceOf(b,h.MappingNode))throw new i(null,null,"expected a mapping node, but found "+b.id,b.startMark);return d=[],f.each(b.value,function(a){var b,e;b=this.constructObject(a[0],c),e=this.constructObject(a[1],c),d.store(b,e)},this),d},f.inherits(m,l),m.yamlConstructors=f.extend({},l.yamlConstructors),m.addConstructor=l.addConstructor,m.prototype.constructScalar=function(b){var c;if(f.isInstanceOf(b,h.MappingNode)){f.each(b.value,function(a){var b=a[0],d=a[1],e;"tag:yaml.org,2002:value"===b.tag&&(c=this.constructScalar(d))},this);if(undefined!==c)return c}return l.prototype.constructScalar.call(this,b)},m.prototype.flattenMapping=function(b){var c=this,d=[],e=0,g,j,k,l,m,n;l=function(a){d.push(a)},m=function(a){a.forEach(l)},n=function(a){if(!f.isInstanceOf(a,h.MappingNode))throw new i("while constructing a mapping",b.startMark,"expected a mapping for merging, but found "+a.id,a.startMark);c.flattenMapping(a),k.push(a.value)};while(e<b.value.length){g=b.value[e][0],j=b.value[e][1];if("tag:yaml.org,2002:merge"===g.tag){b.value.splice(e,1);if(f.isInstanceOf(j,h.MappingNode))c.flattenMapping(j),f.each(j.value,l);else{if(!f.isInstanceOf(j,h.SequenceNode))throw new i("while constructing a mapping",b.startMark,"expected a mapping or list of mappings for merging, but found "+j.id,j.startMark);k=[],f.each(j.value,n),f.reverse(k).forEach(m)}}else"tag:yaml.org,2002:value"===g.tag?(g.tag="tag:yaml.org,2002:str",e+=1):e+=1}!d.length||(f.each(b.value,function(a){d.push(a)}),b.value=d)},m.prototype.constructMapping=function(b,c){return f.isInstanceOf(b,h.MappingNode)&&this.flattenMapping(b),l.prototype.constructMapping.call(this,b)},m.prototype.constructYamlNull=function(b){return this.constructScalar(b),null},m.prototype.constructYamlBool=function(b){var c=this.constructScalar(b);return j[c.toLowerCase()]},m.prototype.constructYamlInt=function(b){var c=this.constructScalar(b).replace(/_/g,""),d="-"===c[0]?-1:1,e,f=[];return 0<="+-".indexOf(c[0])&&(c=c.slice(1)),"0"===c?0:/^0b/.test(c)?d*parseInt(c.slice(2),2):/^0x/.test(c)?d*parseInt(c,16):"0"===c[0]?d*parseInt(c,8):0<=c.indexOf(":")?(c.split(":").forEach(function(a){f.unshift(parseInt(a,10))}),c=0,e=1,f.forEach(function(a){c+=a*e,e*=60}),d*c):d*parseInt(c,10)},m.prototype.constructYamlFloat=function(b){var c=this.constructScalar(b).replace(/_/g,""),d="-"===c[0]?-1:1,e,f=[];return 0<="+-".indexOf(c[0])&&(c=c.slice(1)),".inf"===c?1===d?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===c?NaN:0<=c.indexOf(":")?(c.split(":").forEach(function(a){f.unshift(parseFloat(a,10))}),c=0,e=1,f.forEach(function(a){c+=a*e,e*=60}),d*c):d*parseFloat(c,10)},m.prototype.constructYamlBinary=function(b){try{return f.decodeBase64(this.constructScalar(b))}catch(c){throw new i(null,null,"failed to decode base64 data: "+c.toString(),b.startMark)}},m.prototype.constructYamlTimestamp=function(b){var c,d,e,f,g,h,i,j=0,l=null,m,n,o;c=k.exec(this.constructScalar(b)),d=+c[1],e=+c[2]-1,f=+c[3];if(!c[4])return new Date(d,e,f);g=+c[4],h=+c[5],i=+c[6];if(!!c[7]){j=c[7].slice(0,3);while(j.length<3)j+="0";j=+j}return!c[9]||(m=+c[10],n=+(c[11]||0),l=(m*60+n)*6e4,"-"===c[9]&&(l=-l)),o=new Date(d,e,f,g,h,i,j),!l||
o.setTime(o.getTime()-l),o},m.prototype.constructYamlOmap=function(b){var c=this,d=[];return f.Populator(d,function(){if(!f.isInstanceOf(b,h.SequenceNode))throw new i("while constructing an ordered map",b.startMark,"expected a sequence, but found "+b.id,b.startMark);b.value.forEach(function(a){var e,g,j;if(!f.isInstanceOf(a,h.MappingNode))throw new i("while constructing an ordered map",b.startMark,"expected a mapping of length 1, but found "+a.id,a.startMark);if(1!==a.value.length)throw new i("while constructing an ordered map",b.startMark,"expected a single mapping item, but found "+a.value.length+" items",a.startMark);g=c.constructObject(a.value[0][0]),j=c.constructObject(a.value[0][1]),e=Object.create(null),e[g]=j,d.push(e)})})},m.prototype.constructYamlPairs=function(b){var c=this,d=[];return f.Populator(d,function(){if(!f.isInstanceOf(b,h.SequenceNode))throw new i("while constructing pairs",b.startMark,"expected a sequence, but found "+b.id,b.startMark);b.value.forEach(function(a){var e,g;if(!f.isInstanceOf(a,h.MappingNode))throw new i("while constructing pairs",b.startMark,"expected a mapping of length 1, but found "+a.id,a.startMark);if(1!==a.value.length)throw new i("while constructing pairs",b.startMark,"expected a single mapping item, but found "+a.value.length+" items",a.startMark);e=c.constructObject(a.value[0][0]),g=c.constructObject(a.value[0][1]),d.push([e,g])})})},m.prototype.constructYamlSet=function(b){var c={};return f.Populator(c,function(){f.extend(c,this.constructMapping(b))},this)},m.prototype.constructYamlStr=function(b){return this.constructScalar(b)},m.prototype.constructYamlSeq=function(b){var c=[];return f.Populator(c,function(){this.constructSequence(b).forEach(function(a){c.push(a)})},this)},m.prototype.constructYamlMap=function(b){var c={};return f.Populator(c,function(){f.extend(c,this.constructMapping(b,!0))},this)},m.prototype.constructUndefined=function(b){throw new i(null,null,"could not determine constructor for the tag "+b.tag,b.startMark)},m.addConstructor("tag:yaml.org,2002:null",m.prototype.constructYamlNull),m.addConstructor("tag:yaml.org,2002:bool",m.prototype.constructYamlBool),m.addConstructor("tag:yaml.org,2002:int",m.prototype.constructYamlInt),m.addConstructor("tag:yaml.org,2002:float",m.prototype.constructYamlFloat),m.addConstructor("tag:yaml.org,2002:binary",m.prototype.constructYamlBinary),m.addConstructor("tag:yaml.org,2002:timestamp",m.prototype.constructYamlTimestamp),m.addConstructor("tag:yaml.org,2002:omap",m.prototype.constructYamlOmap),m.addConstructor("tag:yaml.org,2002:pairs",m.prototype.constructYamlPairs),m.addConstructor("tag:yaml.org,2002:set",m.prototype.constructYamlSet),m.addConstructor("tag:yaml.org,2002:str",m.prototype.constructYamlStr),m.addConstructor("tag:yaml.org,2002:seq",m.prototype.constructYamlSeq),m.addConstructor("tag:yaml.org,2002:map",m.prototype.constructYamlMap),m.addConstructor(null,m.prototype.constructUndefined),f.inherits(n,m),n.yamlConstructors=f.extend({},m.yamlConstructors),n.addConstructor=m.addConstructor,n.prototype.constructJavascriptRegExp=function(b){var c=this.constructScalar(b),d=/\/([gim]*)$/.exec(c),e;return"/"===c[0]&&!!d&&4>=d[0].length&&(c=c.slice(1,c.length-d[0].length),e=d[1]),new RegExp(c,e)},n.prototype.constructJavascriptUndefined=function(b){var c;return c},n.prototype.constructJavascriptFunction=function(b){var c=new Function("return "+this.constructScalar(b));return c()},n.addConstructor("tag:yaml.org,2002:js/undefined",n.prototype.constructJavascriptUndefined),n.addConstructor("tag:yaml.org,2002:js/regexp",n.prototype.constructJavascriptRegExp),n.addConstructor("tag:yaml.org,2002:js/function",n.prototype.constructJavascriptFunction),b.exports.BaseConstructor=l,b.exports.SafeConstructor=m,b.exports.Constructor=n}),a.define("/index.js",function(a,b,c,d,e){b.exports=a("./lib/js-yaml.js")}),a("/index.js"),a("/lib/js-yaml")}();return a}();



var Yaml=function(){};Yaml.prototype={spec:"1.2",setSpecVersion:function(a){if(a!="1.1"&&a!="1.2"){throw new InvalidArgumentException("Version "+a+" of the YAML specifications is not supported")}this.spec=a},getSpecVersion:function(){return this.spec},loadFile:function(a,b){if(b==undefined){input=this.getFileContents(a);return this.load(input)}this.getFileContents(a,function(c){b(new Yaml().load(c))})},load:function(a){var c=new YamlParser();var b=null;try{b=c.parse(a)}catch(d){if(d.name!=undefined&&d.name.toString=="TypeError"){throw d}throw"Syntax error: "+d.message}return b},dump:function(b,a){if(a==undefined){a=2}yaml=new YamlDumper();return yaml.dump(b,a)},getXHR:function(){if(window.XMLHttpRequest){return new XMLHttpRequest()}if(window.ActiveXObject){var c=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP","Microsoft.XMLHTTP"];for(var a=0;a<4;a++){try{return new ActiveXObject(c[a])}catch(b){}}}return null},getFileContents:function(a,c){var b=this.getXHR();if(c==undefined){b.open("GET",a,false);b.send(null);if(b.status==200||b.status==0){return b.responseText}return null}b.onreadystatechange=function(){if(b.readyState==4){if(b.status==200||b.status==0){c(b.responseText)}else{c(null)}}};b.open("GET",a,true);b.send(null)}};var YAML={encode:function(a){return new Yaml().dump(a)},decode:function(a){return new Yaml().load(a)},load:function(a,b){return new Yaml().loadFile(a,b)}};if(typeof(InvalidArgumentException)=="undefined"){InvalidArgumentException=function(a){this.name="InvalidArgumentException";this.message=a}};var YamlInline=function(){};YamlInline.prototype={i:null,load:function(b){var a=null;b=this.trim(b);if(0==b.length){return""}switch(b.charAt(0)){case"[":a=this.parseSequence(b);break;case"{":a=this.parseMapping(b);break;default:a=this.parseScalar(b)}return a},dump:function(d){var b;var a;var c=new Yaml();if("1.1"==c.getSpecVersion()){b=["true","on","+","yes","y"];a=["false","off","-","no","n"]}else{b=["true"];a=["false"]}if(typeof(d)=="object"&&null!=d){return this.dumpObject(d)}if(undefined==d||null==d){return"null"}if(typeof(d)=="boolean"){return d?"true":"false"}if(/^\d+/.test(d)){return typeof(d)=="string"?"'"+d+"'":parseInt(d)}if(this.isNumeric(d)){return typeof(d)=="string"?"'"+d+"'":parseFloat(d)}if(typeof(d)=="number"){return d==Infinity?".Inf":(d==-Infinity?"-.Inf":(isNaN(d)?".NAN":d))}if((d+"").indexOf("\n")!=-1||(d+"").indexOf("\r")!=-1){return'"'+d.split('"').join('\\"').split("\n").join("\\n").split("\r").join("\\r")+'"'}if((/[\s\'"\:\{\}\[\],&\*\#\?]/.test(d))||(/^[-?|<>=!%@`]/.test(d))){return"'"+d.split("'").join("''")+"'"}if(""==d){return"''"}if(this.getTimestampRegex().test(d)){return"'"+d+"'"}if(this.inArray(d.toLowerCase(),b)){return"'"+d+"'"}if(this.inArray(d.toLowerCase(),a)){return"'"+d+"'"}if(this.inArray(d.toLowerCase(),["null","~"])){return"'"+d+"'"}return d},dumpObject:function(e){var d=this.getKeys(e);var b=null;var c;var a=d.length;if(e instanceof Array){b=[];for(c=0;c<a;c++){b.push(this.dump(e[d[c]]))}return"["+b.join(", ")+"]"}b=[];for(c=0;c<a;c++){b.push(this.dump(d[c])+": "+this.dump(e[d[c]]))}return"{ "+b.join(", ")+" }"},parseScalar:function(b,g,e,d,f){if(g==undefined){g=null}if(e==undefined){e=['"',"'"]}if(d==undefined){d=0}if(f==undefined){f=true}var a=null;var h=null;var c=null;if(this.inArray(b[d],e)){a=this.parseQuotedScalar(b,d);d=this.i}else{if(!g){a=(b+"").substring(d);d+=a.length;h=a.indexOf(" #");if(h!=-1){a=a.substr(0,h).replace(/\s+$/g,"")}}else{if(c=new RegExp("^(.+?)("+g.join("|")+")").exec((b+"").substring(d))){a=c[1];d+=a.length}else{throw new InvalidArgumentException("Malformed inline YAML string ("+b+").")}}a=f?this.evaluateScalar(a):a}this.i=d;return a},parseQuotedScalar:function(b,d){var c=null;if(!(c=new RegExp("^"+YamlInline.REGEX_QUOTED_STRING).exec((b+"").substring(d)))){throw new InvalidArgumentException("Malformed inline YAML string ("+(b+"").substring(d)+").")}var a=c[0].substr(1,c[0].length-2);if('"'==(b+"").charAt(d)){a=a.split('\\"').join('"').split("\\n").join("\n").split("\\r").join("\r")}else{a=a.split("''").join("'")}d+=c[0].length;this.i=d;return a},parseSequence:function(g,c){if(c==undefined){c=0}var b=[];var a=g.length;c+=1;while(c<a){switch(g.charAt(c)){case"[":b.push(this.parseSequence(g,c));c=this.i;break;case"{":b.push(this.parseMapping(g,c));c=this.i;break;case"]":this.i=c;return b;case",":case" ":break;default:isQuoted=this.inArray(g.charAt(c),['"',"'"]);var d=this.parseScalar(g,[",","]"],['"',"'"],c);c=this.i;if(!isQuoted&&(d+"").indexOf(": ")!=-1){try{d=this.parseMapping("{"+d+"}")}catch(f){if(!(f instanceof InvalidArgumentException)){throw f}}}b.push(d);c--}c++}throw new InvalidArgumentException("Malformed inline YAML string "+g)},parseMapping:function(d,f){if(f==undefined){f=0}var c={};var a=d.length;f+=1;var b=false;var g=false;while(f<a){g=false;switch(d.charAt(f)){case" ":case",":f++;g=true;break;case"}":this.i=f;return c}if(g){continue}var e=this.parseScalar(d,[":"," "],['"',"'"],f,false);f=this.i;b=false;while(f<a){switch(d.charAt(f)){case"[":c[e]=this.parseSequence(d,f);f=this.i;b=true;break;case"{":c[e]=this.parseMapping(d,f);f=this.i;b=true;break;case":":case" ":break;default:c[e]=this.parseScalar(d,[",","}"],['"',"'"],f);f=this.i;b=true;f--}++f;if(b){g=true;break}}if(g){continue}}throw new InvalidArgumentException("Malformed inline YAML string "+d)},evaluateScalar:function(b){b=this.trim(b);var e;var d;var f=new Yaml();if("1.1"==f.getSpecVersion()){e=["true","on","+","yes","y"];d=["false","off","-","no","n"]}else{e=["true"];d=["false"]}var c=null;var a=null;if(("null"==b.toLowerCase())||(""==b)||("~"==b)){return null}if((b+"").indexOf("!str")!=-1){return(""+b).substring(5)}if((b+"").indexOf("! ")!=-1){return parseInt(this.parseScalar((b+"").substring(2)))}if(/^\d+/.test(b)){c=b;a=parseInt(b);return"0"==b.charAt(0)?this.octdec(b):((""+c==""+a)?a:c)}if(this.inArray(b.toLowerCase(),e)){return true}if(this.inArray(b.toLowerCase(),d)){return false}if(this.isNumeric(b)){return"0x"==(b+"").substr(0,2)?hexdec($scalar):floatval($scalar)}if(b.toLowerCase()==".inf"){return Infinity}if(b.toLowerCase()==".nan"){return NaN}if(b.toLowerCase()=="-.inf"){return -Infinity}if(/^(-|\+)?[0-9,]+(\.[0-9]+)?$/.test(b)){return parseFloat(b.split(",").join(""))}if(this.getTimestampRegex().test(b)){return this.strtodate(b)}return""+b},getTimestampRegex:function(){return new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ \t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:.([0-9]*))?(?:[ \t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$","gi")},trim:function(a){return(a+"").replace(/^\s+/,"").replace(/\s+$/,"")},isNumeric:function(a){return(a-0)==a&&a.length>0&&a.replace(/\s+/g,"")!=""},inArray:function(c,d){var b;var a=d.length;for(b=0;b<a;b++){if(c==d[b]){return true}}return false},getKeys:function(c){var b=[];for(var a in c){if(c.hasOwnProperty(a)){b.push(a)}}return b},octdec:function(a){return parseInt((a+"").replace(/[^0-7]/gi,""),8)},hexdec:function(a){a=this.trim(a);if((a+"").substr(0,2)=="0x"){a=(a+"").substring(2)}return parseInt((a+"").replace(/[^a-f0-9]/gi,""),16)},strtodate:function(a){var b=new Date();b.setTime(this.strtotime(a,new Date().getTime()));return b},strtotime:function(o,t){var q,p,i,m="",s="";m=o;m=m.replace(/\s{2,}|^\s|\s$/g," ");m=m.replace(/[\t\r\n]/g,"");if(m=="now"){return(new Date()).getTime()/1000}else{if(!isNaN(s=Date.parse(m))){return(s/1000)}else{if(t){t=new Date(t*1000)}else{t=new Date()}}}m=m.toLowerCase();var r={day:{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},mon:{jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}};var v=this.strtotime;var u=function(a){var c=(a[2]&&a[2]=="ago");var d=(d=a[0]=="last"?-1:1)*(c?-1:1);switch(a[0]){case"last":case"next":switch(a[1].substring(0,3)){case"yea":t.setFullYear(t.getFullYear()+d);break;case"mon":t.setMonth(t.getMonth()+d);break;case"wee":t.setDate(t.getDate()+(d*7));break;case"day":t.setDate(t.getDate()+d);break;case"hou":t.setHours(t.getHours()+d);break;case"min":t.setMinutes(t.getMinutes()+d);break;case"sec":t.setSeconds(t.getSeconds()+d);break;default:var e;if(typeof(e=r.day[a[1].substring(0,3)])!="undefined"){var b=e-t.getDay();if(b==0){b=7*d}else{if(b>0){if(a[0]=="last"){b-=7}}else{if(a[0]=="next"){b+=7}}}t.setDate(t.getDate()+b)}}break;default:if(/\d+/.test(a[0])){d*=parseInt(a[0],10);switch(a[1].substring(0,3)){case"yea":t.setFullYear(t.getFullYear()+d);break;case"mon":t.setMonth(t.getMonth()+d);break;case"wee":t.setDate(t.getDate()+(d*7));break;case"day":t.setDate(t.getDate()+d);break;case"hou":t.setHours(t.getHours()+d);break;case"min":t.setMinutes(t.getMinutes()+d);break;case"sec":t.setSeconds(t.getSeconds()+d);break}}else{return false}break}return true};p=m.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);if(p!=null){if(!p[2]){p[2]="00:00:00"}else{if(!p[3]){p[2]+=":00"}}i=p[1].split(/-/g);for(q in r.mon){if(r.mon[q]==i[1]-1){i[1]=q}}i[0]=parseInt(i[0],10);i[0]=(i[0]>=0&&i[0]<=69)?"20"+(i[0]<10?"0"+i[0]:i[0]+""):(i[0]>=70&&i[0]<=99)?"19"+i[0]:i[0]+"";return parseInt(v(i[2]+" "+i[1]+" "+i[0]+" "+p[2])+(p[4]?p[4]/1000:""),10)}var n="([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?";p=m.match(new RegExp(n,"gi"));if(p==null){return false}for(q=0;q<p.length;q++){if(!u(p[q].split(" "))){return false}}return(t.getTime()/1000)}};YamlInline.REGEX_QUOTED_STRING="(?:\"(?:[^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|'(?:[^']*(?:''[^']*)*)')";var YamlParser=function(a){this.offset=this.isDefined(a)?a:0};YamlParser.prototype={offset:0,lines:[],currentLineNb:-1,currentLine:"",refs:{},parse:function(m){this.currentLineNb=-1;this.currentLine="";this.lines=this.cleanup(m).split("\n");var u=null;while(this.moveToNextLine()){if(this.isCurrentLineEmpty()){continue}if(/^\t+/.test(this.currentLine)){throw new InvalidArgumentException("A YAML file cannot contain tabs as indentation at line "+(this.getRealCurrentLineNb()+1)+" ("+this.currentLine+")")}var j=false;var r=false;var q=false;var b=null;var a=null;var t=null;var d=null;var e=null;var v=null;var h=null;var p=null;var f=null;if(b=/^\-((\s+)(.+?))?\s*$/.exec(this.currentLine)){if(!this.isDefined(u)){u=[]}if(!(u instanceof Array)){throw new InvalidArgumentException("Non array entry at line "+(this.getRealCurrentLineNb()+1)+".")}b={leadspaces:b[2],value:b[3]};if(this.isDefined(b.value)&&(a=/^&([^ ]+) *(.*)/.exec(b.value))){a={ref:a[1],value:a[2]};j=a.ref;b.value=a.value}if(!this.isDefined(b.value)||""==b.value.split(" ").join("")||this.trim(b.value).charAt(0)=="#"){t=this.getRealCurrentLineNb()+1;d=new YamlParser(t);d.refs=this.refs;u.push(d.parse(this.getNextEmbedBlock()));this.refs=d.refs}else{if(this.isDefined(b.leadspaces)&&" "==b.leadspaces&&(a=new RegExp("^("+YamlInline.REGEX_QUOTED_STRING+"|[^ '\"{].*?) *:(\\s+(.+?))?\\s*$").exec(b.value))){a={key:a[1],value:a[3]};t=this.getRealCurrentLineNb();d=new YamlParser(t);d.refs=this.refs;e=b.value;if(!this.isNextLineIndented()){e+="\n"+this.getNextEmbedBlock(this.getCurrentLineIndentation()+2)}u.push(d.parse(e));this.refs=d.refs}else{u.push(this.parseValue(b.value))}}}else{if(b=new RegExp("^("+YamlInline.REGEX_QUOTED_STRING+"|[^ '\"].*?) *:(\\s+(.+?))?\\s*$").exec(this.currentLine)){if(!this.isDefined(u)){u={}}if(u instanceof Array){throw new InvalidArgumentException("Non mapped entry at line "+(this.getRealCurrentLineNb()+1)+".")}b={key:b[1],value:b[3]};v=(new YamlInline()).parseScalar(b.key);if("<<"==v){if(this.isDefined(b.value)&&"*"==(b.value+"").charAt(0)){r=b.value.substring(1)}else{if(this.isDefined(b.value)&&b.value!=""){m=b.value}else{m=this.getNextEmbedBlock()}t=this.getRealCurrentLineNb()+1;d=new YamlParser(t);d.refs=this.refs;h=d.parse(m);this.refs=d.refs;var s=[];if(!this.isObject(h)){throw new InvalidArgumentException("YAML merge keys used with a scalar value instead of an array at line "+(this.getRealCurrentLineNb()+1)+" ("+this.currentLine+")")}else{if(this.isDefined(h[0])){f=this.reverseArray(h);p=f.length;for(var o=0;o<p;o++){var l=f[o];if(!this.isObject(f[o])){throw new InvalidArgumentException("Merge items must be arrays at line "+(this.getRealCurrentLineNb()+1)+" ("+f[o]+").")}s=this.mergeObject(f[o],s)}}else{s=this.mergeObject(s,h)}}q=s}}else{if(this.isDefined(b.value)&&(a=/^&([^ ]+) *(.*)/.exec(b.value))){a={ref:a[1],value:a[2]};j=a.ref;b.value=a.value}}if(q){u=q}else{if(!this.isDefined(b.value)||""==b.value.split(" ").join("")||this.trim(b.value).charAt(0)=="#"){if(this.isNextLineIndented()){u[v]=null}else{t=this.getRealCurrentLineNb()+1;d=new YamlParser(t);d.refs=this.refs;u[v]=d.parse(this.getNextEmbedBlock());this.refs=d.refs}}else{if(r){u=this.refs[r]}else{u[v]=this.parseValue(b.value)}}}}else{if(2==this.lines.length&&this.isEmpty(this.lines[1])){m=(new YamlInline()).load(this.lines[0]);if(this.isObject(m)){first=m[0];if("*"==(first+"").substr(0,1)){u=[];p=m.length;for(var o=0;o<p;o++){u.push(this.refs[m[o].substring(1)])}m=u}}return m}throw new InvalidArgumentException('"'+this.currentLine+'" at line '+(this.getRealCurrentLineNb()+1))}}if(j){if(u instanceof Array){this.refs[j]=u[u.length-1]}else{var g=null;for(var n in u){if(u.hasOwnProperty(n)){g=n}}this.refs[j]=u[n]}}}return this.isEmpty(u)?null:u},getRealCurrentLineNb:function(){return this.currentLineNb+this.offset},getCurrentLineIndentation:function(){return this.currentLine.length-this.currentLine.replace(/^ +/g,"").length},getNextEmbedBlock:function(d){this.moveToNextLine();var b=null;var a=null;if(!this.isDefined(d)){b=this.getCurrentLineIndentation();if(!this.isCurrentLineEmpty()&&0==b){throw new InvalidArgumentException("A Indentation problem at line "+(this.getRealCurrentLineNb()+1)+" ("+this.currentLine+")")}}else{b=d}var e=[this.currentLine.substring(b)];while(this.moveToNextLine()){if(this.isCurrentLineEmpty()){if(this.isCurrentLineBlank()){e.push(this.currentLine.substring(b))}continue}a=this.getCurrentLineIndentation();var c;if(c=/^( *)$/.exec(this.currentLine)){e.push(c[1])}else{if(a>=b){e.push(this.currentLine.substring(b))}else{if(0==a){this.moveToPreviousLine();break}else{throw new InvalidArgumentException("B Indentation problem at line "+(this.getRealCurrentLineNb()+1)+" ("+this.currentLine+")")}}}}return e.join("\n")},moveToNextLine:function(){if(this.currentLineNb>=this.lines.length-1){return false}this.currentLineNb++;this.currentLine=this.lines[this.currentLineNb];return true},moveToPreviousLine:function(){this.currentLineNb--;this.currentLine=this.lines[this.currentLineNb]},parseValue:function(c){if("*"==(c+"").charAt(0)){if(this.trim(c).charAt(0)=="#"){c=(c+"").substr(1,c.indexOf("#")-2)}else{c=(c+"").substring(1)}if(this.refs[c]==undefined){throw new InvalidArgumentException('Reference "'+c+'" does not exist ('+this.currentLine+").")}return this.refs[c]}var b=null;if(b=/^(\||>)(\+|\-|\d+|\+\d+|\-\d+|\d+\+|\d+\-)?( +#.*)?$/.exec(c)){b={separator:b[1],modifiers:b[2],comments:b[3]};var a=this.isDefined(b.modifiers)?b.modifiers:"";return this.parseFoldedScalar(b.separator,a.replace(/\d+/g,""),Math.abs(parseInt(a)))}else{return(new YamlInline()).load(c)}},parseFoldedScalar:function(c,h,f){if(h==undefined){h=""}if(f==undefined){f=0}c="|"==c?"\n":" ";var j="";var g=null;var b=this.moveToNextLine();while(b&&this.isCurrentLineBlank()){j+="\n";b=this.moveToNextLine()}if(!b){return""}var d=null;if(!(d=new RegExp("^("+(f?this.strRepeat(" ",f):" +")+")(.*)$").exec(this.currentLine))){this.moveToPreviousLine();return""}d={indent:d[1],text:d[2]};var a=d.indent;var e=0;j+=d.text+c;while(this.currentLineNb+1<this.lines.length){this.moveToNextLine();if(d=new RegExp("^( {"+a.length+",})(.+)$").exec(this.currentLine)){d={indent:d[1],text:d[2]};if(" "==c&&e!=d.indent){j=j.substr(0,j.length-1)+"\n"}e=d.indent;g=d.indent.length-a.length;j+=this.strRepeat(" ",g)+d.text+(g!=0?"\n":c)}else{if(d=/^( *)$/.exec(this.currentLine)){j+=d[1].replace(new RegExp("^ {1,"+a.length+"}","g"),"",d[1])+"\n"}else{this.moveToPreviousLine();break}}}if(" "==c){j=j.replace(/ (\n*)$/g,"\n$1")}switch(h){case"":j=j.replace(/\n+$/g,"\n");break;case"+":break;case"-":j=j.replace(/\n+$/g,"");break}return j},isNextLineIndented:function(){var b=this.getCurrentLineIndentation();var c=this.moveToNextLine();while(c&&this.isCurrentLineEmpty()){c=this.moveToNextLine()}if(false==c){return false}var a=false;if(this.getCurrentLineIndentation()<=b){a=true}this.moveToPreviousLine();return a},isCurrentLineEmpty:function(){return this.isCurrentLineBlank()||this.isCurrentLineComment()},isCurrentLineBlank:function(){return""==this.currentLine.split(" ").join("")},isCurrentLineComment:function(){var a=this.currentLine.replace(/^ +/g,"");return a.charAt(0)=="#"},cleanup:function(c){c=c.split("\r\n").join("\n").split("\r").join("\n");if(!/\n$/.test(c)){c+="\n"}var b=0;var a=/^\%YAML[: ][\d\.]+.*\n/;while(a.test(c)){c=c.replace(a,"");b++}this.offset+=b;a=/^(#.*?\n)+/;if(a.test(c)){trimmedValue=c.replace(a,"");this.offset+=this.subStrCount(c,"\n")-this.subStrCount(trimmedValue,"\n");c=trimmedValue}a=/^\-\-\-.*?\n/;if(a.test(c)){trimmedValue=c.replace(a,"");this.offset+=this.subStrCount(c,"\n")-this.subStrCount(trimmedValue,"\n");c=trimmedValue;c=c.replace(/\.\.\.\s*$/g,"")}return c},isObject:function(a){return typeof(a)=="object"&&this.isDefined(a)},isEmpty:function(a){return a==undefined||a==null||a==""||a==0||a=="0"||a==false},isDefined:function(a){return a!=undefined&&a!=null},reverseArray:function(c){var b=[];var a=c.length;for(var d=a-1;d>=0;d--){b.push(c[d])}return b},merge:function(e,d){var f={};for(i in e){if(/^\d+$/.test(i)){f.push(e)}else{f[i]=e[i]}}for(i in d){if(/^\d+$/.test(i)){f.push(d)}else{f[i]=d[i]}}return f},strRepeat:function(d,c){var b;var a="";for(b=0;b<c;b++){a+=d}return d},subStrCount:function(d,b,j,f){var h=0;d=""+d;b=""+b;if(j!=undefined){d=d.substr(j)}if(f!=undefined){d=d.substr(0,f)}var a=d.length;var g=b.length;for(var e=0;e<a;e++){if(b==d.substr(e,g)){h++}}return h},trim:function(a){return(a+"").replace(/^\s+/,"").replace(/\s+$/,"")}};YamlDumper=function(){};YamlDumper.prototype={dump:function(g,f,c){if(f==undefined){f=0}if(c==undefined){c=0}var b="";var e=c?this.strRepeat(" ",c):"";var i;if(f<=0||!this.isObject(g)||this.isEmpty(g)){i=new YamlInline();b+=e+i.dump(g)}else{var d=!this.arrayEquals(this.getKeys(g),this.range(0,g.length-1));var a;for(var h in g){if(g.hasOwnProperty(h)){a=f-1<=0||!this.isObject(g[h])||this.isEmpty(g[h]);if(d){i=new YamlInline()}b+=e+""+(d?i.dump(h)+":":"-")+""+(a?" ":"\n")+""+this.dump(g[h],f-1,(a?0:c+2))+""+(a?"\n":"")}}}return b},strRepeat:function(d,c){var b;var a="";for(b=0;b<c;b++){a+=d}return d},isObject:function(a){return typeof(a)=="object"&&this.isDefined(a)},isEmpty:function(a){return a==undefined||a==null||a==""||a==0||a=="0"||a==false},isDefined:function(a){return a!=undefined&&a!=null},getKeys:function(c){var b=[];for(var a in c){if(c.hasOwnProperty(a)){b.push(a)}}return b},range:function(d,a){if(d>a){return[]}var b=[];for(var c=d;c<=a;c++){b.push(c)}return b},arrayEquals:function(e,d){if(e.length!=d.length){return false}var c=e.length;for(var f=0;f<c;f++){if(e[f]!=d[f]){return false}}return true}};
(function(){

// CommonJS exports.
var data = (typeof exports !== 'undefined') ? exports : {};

data.tzToOffset = {
  'ACDT': -630,
  'ACST': -570,
  'ACT': -480,
  'ADT': +180,
  'AEDT': -660,
  'AEST': -600,
  'AFT': -270,
  'AKDT': +480,
  'AKST': +540,
  'AMST': -300,
  'AMT': -240,
  'ART': +180,
  'AST': -240, // Arab Standard Time
  'AWDT': -540,
  'AWST': -480,
  'AZOST': +60,
  'AZT': -240,
  'BDT': -480,
  'BIOT': -360,
  'BIT': +720,
  'BOT': +240,
  'BRT': +180,
  'BST': -60, // British Summer Time
  'BTT': -360,
  'CAT': -120,
  'CCT': -390,
  'CDT': +300,
  'CEDT': -120,
  'CEST': -120,
  'CET': -60,
  'CHAST': -765,
  'ChST': -600,
  'CIST': +480,
  'CKT': +600,
  'CLST': +180,
  'CLT': +240,
  'COST': +240,
  'COT': +300,
  'CST': -480,
  'CST': +360,
  'CVT': +60,
  'CXT': -420,
  'DFT': -60,
  'EAST': +360,
  'EAT': -180,
  'ECT': +240,
  'ECT': +300,
  'EDT': +240,
  'EEDT': -180,
  'EEST': -180,
  'EET': -120,
  'EST': +300,
  'FJT': -720,
  'FKST': +240,
  'GALT': +360,
  'GET': -240,
  'GFT': +180,
  'GILT': -720,
  'GIT': +540,
  'GMT': 0,
  'GST': +120,
  'GYT': +240,
  'HADT': +540,
  'HAST': +600,
  'HKT': -480,
  'HMT': -300,
  'HST': +600,
  'IRKT': -480,
  'IRST': -210,
  'IST': -120,
  'IST': -330,
  'IST': -60,
  'JST': -540,
  'KRAT': -420,
  'KST': -540,
  'LHST': -630,
  'LINT': -840,
  'MAGT': -660,
  'MDT': +360,
  'MIT': +570,
  'MSD': -240,
  'MSK': -180,
  'MST': -390,
  'MST': -480,
  'MST': +420,
  'MUT': -240,
  'NDT': +150,
  'NFT': -690,
  'NPT': -345,
  'NST': +210,
  'NT': +210,
  'OMST': -360,
  'PDT': +420,
  'PETT': -720,
  'PHOT': -780,
  'PKT': -300,
  'PST': -480,
  'PST': +480,
  'RET': -240,
  'SAMT': -240,
  'SAST': -120,
  'SBT': -660,
  'SCT': -240,
  'SLT': -330,
  'SST': -480,
  'SST': +660,
  'TAHT': +600,
  'THA': -420,
  'UTC': 0,
  'UYST': +120,
  'UYT': +180,
  'VET': +270,
  'VLAT': -600,
  'WAT': -60,
  'WEDT': -60,
  'WEST': -60,
  'YAKT': -540,
  'YEKT': -300
};

// While indices are strings here, numbers work fine too when retrieving.
data.offsetToTz = {
  '720':  ['BIT'],
  '660':  ['SST'],
  '600':  ['HST', 'CKT', 'HAST', 'TAHT'],
  '570':  ['MIT'],
  '540':  ['AKST', 'GIT', 'HADT'],
  '480':  ['PST', 'AKDT', 'CIST'],
  '420':  ['MST', 'PDT'],
  '360':  ['CST', 'EAST', 'GALT', 'MDT'],
  '300':  ['EST', 'CDT', 'COT', 'ECT'],
  '270':  ['VET'],
  '240':  ['ECT', 'AST', 'BOT', 'CLT', 'COST', 'EDT', 'FKST', 'GYT'],
  '210':  ['NT', 'NST'],
  '180':  ['BRT', 'ADT', 'ART', 'CLST', 'GFT', 'UYT'],
  '150':  ['NDT'],
  '120':  ['GST', 'UYST'],
  '60':   ['AZOST', 'CVT'],
  '0':    ['UTC', 'GMT'],
  '-60':  ['CET', 'BST', 'DFT', 'IST', 'WAT', 'WEDT', 'WEST'],
  '-120': ['EET', 'CAT', 'CEDT', 'CEST', 'IST', 'SAST'],
  '-180': ['MSK', 'AST', 'AST', 'EAT', 'EEDT', 'EEST'],
  '-210': ['IRST'],
  '-240': ['AST', 'AMT', 'AZT', 'GET', 'MSD', 'MUT', 'RET', 'SAMT', 'SCT'],
  '-270': ['AFT'],
  '-300': ['AMST', 'HMT', 'PKT', 'YEKT'],
  '-330': ['IST', 'SLT'],
  '-345': ['NPT'],
  '-360': ['BIOT', 'BST', 'BTT', 'OMST'],
  '-390': ['CCT', 'MST'],
  '-420': ['CXT', 'KRAT', 'THA'],
  '-480': ['ACT', 'AWST', 'BDT', 'CST', 'HKT', 'IRKT', 'MST', 'PST', 'SST'],
  '-540': ['AWDT', 'JST', 'KST', 'YAKT'],
  '-570': ['ACST'],
  '-600': ['AEST', 'ChST', 'VLAT'],
  '-630': ['ACDT', 'LHST'],
  '-660': ['AEDT', 'MAGT', 'SBT'],
  '-690': ['NFT'],
  '-720': ['FJT', 'GILT', 'PETT'],
  '-765': ['CHAST'],
  '-780': ['PHOT'],
  '-840': ['LINT']
};

data.weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

data.weekdaysShort = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

data.months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

data.monthsShort = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

data.intervals = [
    function(n) { return n !== 1 ? 'years' : 'year'; },
    function(n) { return n !== 1 ? 'months' : 'month'; },
    function(n) { return n !== 1 ? 'weeks' : 'week'; },
    function(n) { return n !== 1 ? 'days' : 'day'; },
    function(n) { return n !== 1 ? 'hours' : 'hour'; },
    function(n) { return n !== 1 ? 'minutes' : 'minute'; },
    function(n) { return n !== 1 ? 'seconds' : 'second'; }
];

data.intervalFormats = {
    'ago': '% ago',
    'in': 'in %'
};

data.ordinals = function(number) {
  switch (number % 10) {
    case 1: return (number % 100 !== 11) ? 'st' : 'th';
    case 2: return (number % 100 !== 12) ? 'nd' : 'th';
    case 3: return (number % 100 !== 13) ? 'rd' : 'th';
    default: return 'th';
  }
};

function pad2(i) {
  return i < 10 ? '0' + i : i;
};

function pad2sign(i) {
  var sgn = i < 0 ? '-' : '+';
  i = Math.abs(i);
  return sgn + (i < 10 ? '0' + i : i);
};

function pad3(i) {
  return i < 10 ? '00' + i : i < 100 ? '0' + i : i;
};

function pad4sign(i) {
  var sgn = i < 0 ? '-' : '+';
  i = Math.abs(i);
  return sgn + (i < 10 ? '000' + i : i < 100 ? '00' + i : i < 1000 ? '0' + i : i);
}

Date.prototype.interval = function(other) {
    var self = this, inverse = self > other;
    if (inverse) {
        self = other;
        other = this;
    }

    var parts = [
        other.getUTCFullYear() - self.getUTCFullYear(),
        other.getUTCMonth() - self.getUTCMonth(),
        0, // weeks
        other.getUTCDate() - self.getUTCDate(),
        other.getUTCHours() - self.getUTCHours(),
        other.getUTCMinutes() - self.getUTCMinutes(),
        other.getUTCSeconds() - self.getUTCSeconds()
    ];
    if (parts[6] < 0) { parts[5]--; parts[6] += 60; }
    if (parts[5] < 0) { parts[4]--; parts[5] += 60; }
    if (parts[4] < 0) { parts[3]--; parts[4] += 24; }
    if (parts[3] < 0) { parts[1]--; parts[3] += self.getUTCDaysOfMonth(); }
    if (parts[1] < 0) { parts[0]--; parts[1] += 12; }
    parts[2] = (parts[3] / 7) | 0;
    parts[3] -= parts[2] * 7;

    var fragments = [];
    for (var i = 0; i < parts.length; i++) {
        if (parts[i]) {
            fragments.push(parts[i] + ' ' + data.intervals[i](parts[i]));
        }
    }
    return fragments;
};

Date.prototype.format = function(format, tz) {
  var time = this.getTime();

  if (tz === undefined) {
    tz = this.getTimezone();
    tzName = this.getTimezoneName();
  }
  else {
    var tzData = parseTimezone(tz);
    tz = tzData[0];
    var tzName = tzData[1];
  }

  // Use correct timezone.
  this.setTime(time - tz * 60000);

  var result = '';
  for (var i = 0; i < format.length; i++) {
    switch (format.charAt(i)) {
      // Day
      case 'd': result += pad2(this.getUTCDate()); break;
      case 'D': result += data.weekdaysShort[this.getUTCDay()]; break;
      case 'j': result += this.getUTCDate(); break;
      case 'l': result += data.weekdays[this.getUTCDay()]; break;
      case 'N': result += this.getUTCDay() || 7; break;
      case 'S': result += data.ordinals(this.getUTCDate()); break;
      case 'w': result += this.getUTCDay(); break;
      case 'z': result += this.getUTCDayOfYear(); break;

      // Week
      case 'W': result += pad2(this.getUTCISOWeek()); break;

      // Month
      case 'F': result += data.months[this.getUTCMonth()]; break;
      case 'm': result += pad2(this.getUTCMonth() + 1); break;
      case 'M': result += data.monthsShort[this.getUTCMonth()]; break;
      case 'n': result += this.getUTCMonth() + 1; break;
      case 't': result += this.getUTCDaysOfMonth(); break;

      // Year
      case 'L': result += this.isLeapYear() ? 1 : 0; break;
      case 'o': result += this.getUTCISOFullYear(); break;
      case 'Y': result += this.getUTCFullYear(); break;
      case 'y': result += pad2(this.getUTCFullYear() % 100); break;

      // Time
      case 'a': result += this.getUTCHours() >= 12 ? 'pm' : 'am'; break;
      case 'A': result += this.getUTCHours() >= 12 ? 'PM' : 'AM'; break;
      case 'g': result += this.getUTCHours() % 12 || 12; break;
      case 'G': result += this.getUTCHours(); break;
      case 'h': result += pad2(this.getUTCHours() % 12 || 12); break;
      case 'H': result += pad2(this.getUTCHours()); break;
      case 'i': result += pad2(this.getUTCMinutes()); break;
      case 's': result += pad2(this.getUTCSeconds()); break;
      case 'u': result += pad3(this.getUTCMilliseconds()); break;

      // Timezone
      case 'O': result += pad4sign((tz < 0 ? 1 : -1) * (Math.floor(Math.abs(tz) / 60) * 100 + Math.abs(tz) % 60)); break;
      case 'P': result += pad2sign((tz < 0 ? 1 : -1) * (Math.floor(Math.abs(tz) / 60))) + ':' + pad2(Math.abs(tz) % 60); break;
      case 'T': result += tzName; break;
      case 'Z': result += -tz * 60; break;

      // Full Date/Time
      case 'c': this.setTime(time); result += this.format('Y-m-d\\TH:i:sP', tz); break;
      case 'r': this.setTime(time); result += this.format('D, d M y H:i:s O', tz); break;
      case 'U': result += Math.floor(this.getTime() / 1000); break;

      case '\\': if (format.charAt(++i) !== undefined) result += format.charAt(i); break;

      default: result += format.charAt(i); break;
    }
  }

  this.setTime(time);

  return result;
};

function parseTimezone(tz) {
  if (typeof tz === 'number') {
    return [tz, tz in data.offsetToTz ? data.offsetToTz[tz][0] : ''];
  }
  var number = parseInt(tz, 10);
  if (isNaN(number)) {
    return [data.tzToOffset[tz], tz];
  }
  else {
    tz = (number < 0 ? 1 : -1) * (Math.floor(Math.abs(number) / 100) * 60 + Math.abs(number) % 100);
    return [tz, tz in data.offsetToTz ? data.offsetToTz[tz][0] : ''];
  }
}

Date.prototype.isLeapYear = function() {
  var y = this.getUTCFullYear();
  return (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
};

Date.prototype.getUTCISOWeek = function() {
  // Go to the week's thursday.
  var d = new Date(this);
  d.setUTCDate(d.getUTCDate() - (d.getUTCDay() || 7) + 4);
  return Math.ceil((d.getTime() - Date.UTC(d.getUTCFullYear(), 0)) / 86400000 / 7);
};

Date.prototype.getUTCISOFullYear = function() {
  // Go to the week's thursday.
  var d = new Date(this);
  d.setUTCDate(d.getUTCDate() - (d.getUTCDay() || 7) + 4);
  return d.getUTCFullYear();
};

Date.prototype.getUTCDaysOfMonth = function() {
  var d = new Date(this);
  d.setUTCMonth(d.getUTCMonth() + 1);
  d.setUTCDate(0);
  return d.getUTCDate();
};

Date.prototype.getUTCDayOfYear = function() {
  return Math.floor((this.getTime() - Date.UTC(this.getUTCFullYear(), 0)) / 86400000);
};

Date.prototype.getTimezone = function() {
  if (!('_tz' in this)) {
    var matches = new Date().toString().match(/([A-Z]{3,4}|NT|ChST)(?![-\+])/);
    if (matches && matches[1]) {
        this.setTimezone(matches[1]);
    } else {
        this.setTimezone(new Date().getTimezoneOffset());
    }
  }
  return this._tz;
};

Date.prototype.getTimezoneName = function() {
  this.getTimezone(); // Make sure the tz data is populated.
  return this._tzName;
};

Date.prototype.setTimezone = function(val) {
  var tzData = parseTimezone(val);
  this._tz = tzData[0];
  this._tzName = tzData[1];
};

})();

/**
 * marked - A markdown parser (https://github.com/chjj/marked)
 * Copyright (c) 2011-2012, Christopher Jeffrey. (MIT Licensed)
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,
  blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
  list: /^( *)(bull) [^\0]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
  def: /^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  paragraph: /^([^\n]+\n?(?!body))+\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)
  ();

block.html = replace(block.html)
  ('comment', /<!--[^\0]*?-->/)
  ('closed', /<(tag)[^\0]+?<\/\1>/)
  ('closing', /<tag(?!:\/|@)\b(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, tag())
  ();

block.paragraph = (function() {
  var paragraph = block.paragraph.source
    , body = [];

  (function push(rule) {
    rule = block[rule] ? block[rule].source : rule;
    body.push(rule.replace(/(^|[^\[])\^/g, '$1'));
    return push;
  })
  ('hr')
  ('heading')
  ('lheading')
  ('blockquote')
  ('<' + tag())
  ('def');

  return new
    RegExp(paragraph.replace('body', body.join('|')));
})();

block.normal = {
  fences: block.fences,
  paragraph: block.paragraph
};

block.gfm = {
  fences: /^ *``` *(\w+)? *\n([^\0]+?)\s*``` *(?:\n+|$)/,
  paragraph: /^/
};

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!' + block.gfm.fences.source.replace(/(^|[^\[])\^/g, '$1') + '|')
  ();

/**
 * Block Lexer
 */

block.lexer = function(src) {
  var tokens = [];

  tokens.links = {};

  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ');

  return block.token(src, tokens, true);
};

block.token = function(src, tokens, top) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = block.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = block.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      tokens.push({
        type: 'code',
        text: !options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = block.fences.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'code',
        lang: cap[1],
        text: cap[2]
      });
      continue;
    }

    // heading
    if (cap = block.heading.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // lheading
    if (cap = block.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = block.hr.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = block.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      block.token(cap, tokens, top);

      tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = block.list.exec(src)) {
      src = src.substring(cap[0].length);

      tokens.push({
        type: 'list_start',
        ordered: isFinite(cap[2])
      });

      // Get each top-level item.
      cap = cap[0].match(block.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item[item.length-1] === '\n';
          if (!loose) loose = next;
        }

        tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        block.token(item, tokens);

        tokens.push({
          type: 'list_item_end'
        });
      }

      tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = block.html.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'html',
        pre: cap[1] === 'pre',
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = block.def.exec(src))) {
      src = src.substring(cap[0].length);
      tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // top-level paragraph
    if (top && (cap = block.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'paragraph',
        text: cap[0]
      });
      continue;
    }

    // text
    if (cap = block.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }
  }

  return tokens;
};

/**
 * Inline Processing
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[^\0]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([^\0]+?)__(?!_)|^\*\*([^\0]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[^\0])+?)_\b|^\*((?:\*\*|[^\0])+?)\*(?!\*)/,
  code: /^(`+)([^\0]*?[^`])\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  text: /^[^\0]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._linkInside = /(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/;
inline._linkHref = /\s*<?([^\s]*?)>?(?:\s+['"]([^\0]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._linkInside)
  ('href', inline._linkHref)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._linkInside)
  ();

inline.normal = {
  url: inline.url,
  strong: inline.strong,
  em: inline.em,
  text: inline.text
};

inline.pedantic = {
  strong: /^__(?=\S)([^\0]*?\S)__(?!_)|^\*\*(?=\S)([^\0]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([^\0]*?\S)_(?!_)|^\*(?=\S)([^\0]*?\S)\*(?!\*)/
};

inline.gfm = {
  url: /^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,
  text: /^[^\0]+?(?=[\\<!\[_*`]|https?:\/\/| {2,}\n|$)/
};

/**
 * Inline Lexer
 */

inline.lexer = function(src) {
  var out = ''
    , links = tokens.links
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = inline.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = inline.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1][6] === ':'
          ? mangle(cap[1].substring(7))
          : mangle(cap[1]);
        href = mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // url (gfm)
    if (cap = inline.url.exec(src)) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // tag
    if (cap = inline.tag.exec(src)) {
      src = src.substring(cap[0].length);
      out += options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = inline.link.exec(src)) {
      src = src.substring(cap[0].length);
      out += outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      continue;
    }

    // reflink, nolink
    if ((cap = inline.reflink.exec(src))
        || (cap = inline.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0][0];
        src = cap[0].substring(1) + src;
        continue;
      }
      out += outputLink(cap, link);
      continue;
    }

    // strong
    if (cap = inline.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<strong>'
        + inline.lexer(cap[2] || cap[1])
        + '</strong>';
      continue;
    }

    // em
    if (cap = inline.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<em>'
        + inline.lexer(cap[2] || cap[1])
        + '</em>';
      continue;
    }

    // code
    if (cap = inline.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<code>'
        + escape(cap[2], true)
        + '</code>';
      continue;
    }

    // br
    if (cap = inline.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<br>';
      continue;
    }

    // text
    if (cap = inline.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[0]);
      continue;
    }
  }

  return out;
};

function outputLink(cap, link) {
  if (cap[0][0] !== '!') {
    return '<a href="'
      + escape(link.href)
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>'
      + inline.lexer(cap[1])
      + '</a>';
  } else {
    return '<img src="'
      + escape(link.href)
      + '" alt="'
      + escape(cap[1])
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>';
  }
}

/**
 * Parsing
 */

var tokens
  , token;

function next() {
  return token = tokens.pop();
}

function tok() {
  switch (token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return '<hr>\n';
    }
    case 'heading': {
      return '<h'
        + token.depth
        + '>'
        + inline.lexer(token.text)
        + '</h'
        + token.depth
        + '>\n';
    }
    case 'code': {
      if (options.highlight) {
        token.code = options.highlight(token.text, token.lang);
        if (token.code != null && token.code !== token.text) {
          token.escaped = true;
          token.text = token.code;
        }
      }

      if (!token.escaped) {
        token.text = escape(token.text, true);
      }

      return '<pre><code'
        + (token.lang
        ? ' class="lang-'
        + token.lang
        + '"'
        : '')
        + '>'
        + token.text
        + '</code></pre>\n';
    }
    case 'blockquote_start': {
      var body = '';

      while (next().type !== 'blockquote_end') {
        body += tok();
      }

      return '<blockquote>\n'
        + body
        + '</blockquote>\n';
    }
    case 'list_start': {
      var type = token.ordered ? 'ol' : 'ul'
        , body = '';

      while (next().type !== 'list_end') {
        body += tok();
      }

      return '<'
        + type
        + '>\n'
        + body
        + '</'
        + type
        + '>\n';
    }
    case 'list_item_start': {
      var body = '';

      while (next().type !== 'list_item_end') {
        body += token.type === 'text'
          ? parseText()
          : tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'loose_item_start': {
      var body = '';

      while (next().type !== 'list_item_end') {
        body += tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'html': {
      if (options.sanitize) {
        return inline.lexer(token.text);
      }
      return !token.pre && !options.pedantic
        ? inline.lexer(token.text)
        : token.text;
    }
    case 'paragraph': {
      return '<p>'
        + inline.lexer(token.text)
        + '</p>\n';
    }
    case 'text': {
      return '<p>'
        + parseText()
        + '</p>\n';
    }
  }
}

function parseText() {
  var body = token.text
    , top;

  while ((top = tokens[tokens.length-1])
         && top.type === 'text') {
    body += '\n' + next().text;
  }

  return inline.lexer(body);
}

function parse(src) {
  tokens = src.reverse();

  var out = '';
  while (next()) {
    out += tok();
  }

  tokens = null;
  token = null;

  return out;
}

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function mangle(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

function tag() {
  var tag = '(?!(?:'
    + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
    + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
    + '|span|br|wbr|ins|del|img)\\b)\\w+';

  return tag;
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    regex = regex.replace(name, val.source || val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

/**
 * Marked
 */

function marked(src, opt) {
  setOptions(opt);
  return parse(block.lexer(src));
}

/**
 * Options
 */

var options
  , defaults;

function setOptions(opt) {
  if (!opt) opt = defaults;
  if (options === opt) return;
  options = opt;

  if (options.gfm) {
    block.fences = block.gfm.fences;
    block.paragraph = block.gfm.paragraph;
    inline.text = inline.gfm.text;
    inline.url = inline.gfm.url;
  } else {
    block.fences = block.normal.fences;
    block.paragraph = block.normal.paragraph;
    inline.text = inline.normal.text;
    inline.url = inline.normal.url;
  }

  if (options.pedantic) {
    inline.em = inline.pedantic.em;
    inline.strong = inline.pedantic.strong;
  } else {
    inline.em = inline.normal.em;
    inline.strong = inline.normal.strong;
  }
}

marked.options =
marked.setOptions = function(opt) {
  defaults = opt;
  setOptions(opt);
  return marked;
};

marked.setOptions({
  gfm: true,
  pedantic: false,
  sanitize: false,
  highlight: null
});

/**
 * Expose
 */

marked.parser = function(src, opt) {
  setOptions(opt);
  return parse(src);
};

marked.lexer = function(src, opt) {
  setOptions(opt);
  return block.lexer(src);
};

marked.parse = marked;

if (typeof module !== 'undefined') {
  module.exports = marked;
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/*
 * $Id: base64.js,v 0.9 2009/03/01 20:51:18 dankogai Exp dankogai $
 */

(function(){

var b64chars
    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var b64charcodes = function(){
    var a = [];
    var codeA = 'A'.charCodeAt(0);
    var codea = 'a'.charCodeAt(0);
    var code0 = '0'.charCodeAt(0);
    for (var i = 0; i < 26; i ++) a.push(codeA + i);
    for (var i = 0; i < 26; i ++) a.push(codea + i);
    for (var i = 0; i < 10; i ++) a.push(code0 + i);
    a.push('+'.charCodeAt(0));
    a.push('/'.charCodeAt(0));
    return a;
}();

var b64tab = function(bin){
    var t = {};
    for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
    return t;
}(b64chars);

var stringToArray = function(s){
    var a = [];
    for (var i = 0, l = s.length; i < l; i ++) a[i] = s.charCodeAt(i);
    return a;
};

var convertUTF8ArrayToBase64 = function(bin){
    var padlen = 0;
    while (bin.length % 3){
        bin.push(0);
        padlen++;
    };
    var b64 = [];
    for (var i = 0, l = bin.length; i < l; i += 3){
        var c0 = bin[i], c1 = bin[i+1], c2 = bin[i+2];
        if (c0 >= 256 || c1 >= 256 || c2 >= 256)
            throw 'unsupported character found';
        var n = (c0 << 16) | (c1 << 8) | c2;
        b64.push(
            b64charcodes[ n >>> 18],
            b64charcodes[(n >>> 12) & 63],
            b64charcodes[(n >>>  6) & 63],
            b64charcodes[ n         & 63]
        );
    }
    while (padlen--) b64[b64.length - padlen - 1] = '='.charCodeAt(0);
    return String.fromCharCode.apply(String, b64);
};

var convertBase64ToUTF8Array = function(b64){
    b64 = b64.replace(/[^A-Za-z0-9+\/]+/g, '');
    var bin = [];
    var padlen = b64.length % 4;
    for (var i = 0, l = b64.length; i < l; i += 4){
        var n = ((b64tab[b64.charAt(i  )] || 0) << 18)
            |   ((b64tab[b64.charAt(i+1)] || 0) << 12)
            |   ((b64tab[b64.charAt(i+2)] || 0) <<  6)
            |   ((b64tab[b64.charAt(i+3)] || 0));
        bin.push(
            (  n >> 16 ),
            ( (n >>  8) & 0xff ),
            (  n        & 0xff )
        );
    }
    bin.length -= [0,0,2,1][padlen];
    return bin;
};

var convertUTF16ArrayToUTF8Array = function(uni){
    var bin = [];
    for (var i = 0, l = uni.length; i < l; i++){
        var n = uni[i];
        if (n < 0x80)
            bin.push(n);
        else if (n < 0x800)
            bin.push(
                0xc0 | (n >>>  6),
                0x80 | (n & 0x3f));
        else
            bin.push(
                0xe0 | ((n >>> 12) & 0x0f),
                0x80 | ((n >>>  6) & 0x3f),
                0x80 |  (n         & 0x3f));
    }
    return bin;
};

var convertUTF8ArrayToUTF16Array = function(bin){
    var uni = [];
    for (var i = 0, l = bin.length; i < l; i++){
        var c0 = bin[i];
        if    (c0 < 0x80){
            uni.push(c0);
        }else{
            var c1 = bin[++i];
            if (c0 < 0xe0){
                uni.push(((c0 & 0x1f) << 6) | (c1 & 0x3f));
            }else{
                var c2 = bin[++i];
                uni.push(
                       ((c0 & 0x0f) << 12) | ((c1 & 0x3f) << 6) | (c2 & 0x3f)
                );
            }
        }
    }
    return uni;
};

var convertUTF8StringToBase64 = function(bin){
    return convertUTF8ArrayToBase64(stringToArray(bin));
};

var convertBase64ToUTF8String = function(b64){
    return String.fromCharCode.apply(String, convertBase64ToUTF8Array(b64));
};

var convertUTF8StringToUTF16Array = function(bin){
    return convertUTF8ArrayToUTF16Array(stringToArray(bin));
};

var convertUTF8ArrayToUTF16String = function(bin){
    return String.fromCharCode.apply(String, convertUTF8ArrayToUTF16Array(bin));
};

var convertUTF8StringToUTF16String = function(bin){
    return String.fromCharCode.apply(String, convertUTF8ArrayToUTF16Array(stringToArray(bin)));
};

var convertUTF16StringToUTF8Array = function(uni){
    return convertUTF16ArrayToUTF8Array(stringToArray(uni));
};

var convertUTF16ArrayToUTF8String = function(uni){
    return String.fromCharCode.apply(String, convertUTF16ArrayToUTF8Array(uni));
};

var convertUTF16StringToUTF8String = function(uni){
    return String.fromCharCode.apply(String, convertUTF16ArrayToUTF8Array(stringToArray(uni)));
};

if (window.btoa){
    var btoa = window.btoa;
    var convertUTF16StringToBase64 = function (uni){
        return btoa(convertUTF16StringToUTF8String(uni));
    };
}
else {
    var btoa = convertUTF8StringToBase64;
    var convertUTF16StringToBase64 = function (uni){
        return convertUTF8ArrayToBase64(convertUTF16StringToUTF8Array(uni));
    };
}

if (window.atob){
    var atob = window.atob;
    var convertBase64ToUTF16String = function (b64){
        return convertUTF8StringToUTF16String(atob(b64));
    };
}
else {
    var atob = convertBase64ToUTF8String;
    var convertBase64ToUTF16String = function (b64){
        return convertUTF8ArrayToUTF16String(convertBase64ToUTF8Array(b64));
    };
}

window.Base64 = {
    convertUTF8ArrayToBase64:convertUTF8ArrayToBase64,
    convertByteArrayToBase64:convertUTF8ArrayToBase64,
    convertBase64ToUTF8Array:convertBase64ToUTF8Array,
    convertBase64ToByteArray:convertBase64ToUTF8Array,
    convertUTF16ArrayToUTF8Array:convertUTF16ArrayToUTF8Array,
    convertUTF16ArrayToByteArray:convertUTF16ArrayToUTF8Array,
    convertUTF8ArrayToUTF16Array:convertUTF8ArrayToUTF16Array,
    convertByteArrayToUTF16Array:convertUTF8ArrayToUTF16Array,
    convertUTF8StringToBase64:convertUTF8StringToBase64,
    convertBase64ToUTF8String:convertBase64ToUTF8String,
    convertUTF8StringToUTF16Array:convertUTF8StringToUTF16Array,
    convertUTF8ArrayToUTF16String:convertUTF8ArrayToUTF16String,
    convertByteArrayToUTF16String:convertUTF8ArrayToUTF16String,
    convertUTF8StringToUTF16String:convertUTF8StringToUTF16String,
    convertUTF16StringToUTF8Array:convertUTF16StringToUTF8Array,
    convertUTF16StringToByteArray:convertUTF16StringToUTF8Array,
    convertUTF16ArrayToUTF8String:convertUTF16ArrayToUTF8String,
    convertUTF16StringToUTF8String:convertUTF16StringToUTF8String,
    convertUTF16StringToBase64:convertUTF16StringToBase64,
    convertBase64ToUTF16String:convertBase64ToUTF16String,
    fromBase64:convertBase64ToUTF8String,
    toBase64:convertUTF8StringToBase64,
    atob:atob,
    btoa:btoa,
    utob:convertUTF16StringToUTF8String,
    btou:convertUTF8StringToUTF16String,
    encode:convertUTF16StringToBase64,
    encodeURI:function(u){
        return convertUTF16StringToBase64(u).replace(/[+\/]/g, function(m0){
            return m0 == '+' ? '-' : '_';
        }).replace(/=+$/, '');
    },
    decode:function(a){
        return convertBase64ToUTF16String(a.replace(/[-_]/g, function(m0){
            return m0 == '-' ? '+' : '/';
        }));
    }
};

})();

// Github.js 0.7.0
// (c) 2012 Michael Aufreiter, Development Seed
// Github.js is freely distributable under the MIT license.
// For all details and documentation:
// http://substance.io/michael/github

(function() {
  var Github;
  var API_URL = 'https://api.github.com';

  Github = window.Github = function(options) {

    // HTTP Request Abstraction
    // =======
    // 
    // I'm not proud of this and neither should you be if you were responsible for the XMLHttpRequest spec.

    function _request(method, path, data, cb, raw) {
      function getURL() {
        var url = API_URL + path;
        return url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
      }

      var xhr = new XMLHttpRequest();
      if (!raw) {xhr.dataType = "json"}

      xhr.open(method, getURL());
      xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status >= 200 && this.status < 300 || this.status === 304) {
            cb(null, raw ? this.responseText : this.responseText ? JSON.parse(this.responseText) : true);
          } else {
            cb({request: this, error: this.status});
          }
        }
      }
      xhr.setRequestHeader('Accept','application/vnd.github.raw');
      xhr.setRequestHeader('Content-Type','application/json');
      if (
         (options.auth == 'oauth' && options.token) ||
         (options.auth == 'basic' && options.username && options.password)
         ) {
           xhr.setRequestHeader('Authorization',options.auth == 'oauth'
             ? 'token '+ options.token
             : 'Basic ' + Base64.encode(options.username + ':' + options.password)
           );
         }
      data ? xhr.send(JSON.stringify(data)) : xhr.send();
    }

    // User API
    // =======

    Github.User = function() {
      this.repos = function(cb) {
        _request("GET", "/user/repos?type=all&per_page=1000&sort=updated", null, function(err, res) {
          cb(err, res);
        });
      };

      // List user organizations
      // -------

      this.orgs = function(cb) {
        _request("GET", "/user/orgs", null, function(err, res) {
          cb(err, res);
        });
      };

      // List authenticated user's gists
      // -------

      this.gists = function(cb) {
        _request("GET", "/gists", null, function(err, res) {
          cb(err,res);
        });
      };

      // Show user information
      // -------

      this.show = function(username, cb) {
        _request("GET", "/users/"+username, null, function(err, res) {
          cb(err, res);
        });
      }

      // List user repositories
      // -------

      this.userRepos = function(username, cb) {
        _request("GET", "/users/"+username+"/repos?type=all&per_page=1000&sort=updated", null, function(err, res) {
          cb(err, res);
        });
      };

      // List a user's gists
      // -------

      this.userGists = function(username, cb) {
        _request("GET", "/users/"+username+"/gists", null, function(err, res) {
          cb(err,res);
        });
      };

      // List organization repositories
      // -------

      this.orgRepos = function(orgname, cb) {
        _request("GET", "/orgs/"+orgname+"/repos?type=all&per_page=1000&sort=updated&direction=desc", null, function(err, res) {
          cb(err, res);
        });
      };
    };


    // Repository API
    // =======

    Github.Repository = function(options) {
      var repo = options.name;
      var user = options.user;
      
      var that = this;
      var repoPath = "/repos/" + user + "/" + repo;

      var currentTree = {
        "branch": null,
        "sha": null
      };

      // Uses the cache if branch has not been changed
      // -------

      function updateTree(branch, cb) {
        if (branch === currentTree.branch && currentTree.sha) return cb(null, currentTree.sha);
        that.getRef("heads/"+branch, function(err, sha) {
          currentTree.branch = branch;
          currentTree.sha = sha;
          cb(err, sha);
        });
      }

      // Get a particular reference
      // -------

      this.getRef = function(ref, cb) {
        _request("GET", repoPath + "/git/refs/" + ref, null, function(err, res) {
          if (err) return cb(err);
          cb(null, res.object.sha);
        });
      };

      // Create a new reference
      // --------
      //
      // {
      //   "ref": "refs/heads/my-new-branch-name",
      //   "sha": "827efc6d56897b048c772eb4087f854f46256132"
      // }

      this.createRef = function(options, cb) {
        _request("POST", repoPath + "/git/refs", options, cb);
      };

      // Delete a reference
      // --------
      // 
      // repo.deleteRef('heads/gh-pages')
      // repo.deleteRef('tags/v1.0')

      this.deleteRef = function(ref, cb) {
        _request("DELETE", repoPath + "/git/refs/"+ref, options, cb);
      };

      // List all branches of a repository
      // -------

      this.listBranches = function(cb) {
        _request("GET", repoPath + "/git/refs/heads", null, function(err, heads) {
          if (err) return cb(err);
          cb(null, _.map(heads, function(head) { return _.last(head.ref.split('/')); }));
        });
      };

      // Retrieve the contents of a blob
      // -------

      this.getBlob = function(sha, cb) {
        _request("GET", repoPath + "/git/blobs/" + sha, null, cb, 'raw');
      };

      // For a given file path, get the corresponding sha (blob for files, tree for dirs)
      // -------

      this.getSha = function(branch, path, cb) {
        // Just use head if path is empty
        if (path === "") return that.getRef("heads/"+branch, cb);
        that.getTree(branch+"?recursive=true", function(err, tree) {
          var file = _.select(tree, function(file) {
            return file.path === path;
          })[0];
          cb(null, file ? file.sha : null);
        });
      };

      // Retrieve the tree a commit points to
      // -------

      this.getTree = function(tree, cb) {
        _request("GET", repoPath + "/git/trees/"+tree, null, function(err, res) {
          if (err) return cb(err);
          cb(null, res.tree);
        });
      };

      // Post a new blob object, getting a blob SHA back
      // -------

      this.postBlob = function(content, cb) {
        if (typeof(content) === "string") {
          content = {
            "content": content,
            "encoding": "utf-8"
          };
        }

        _request("POST", repoPath + "/git/blobs", content, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };

      // Update an existing tree adding a new blob object getting a tree SHA back
      // -------

      this.updateTree = function(baseTree, path, blob, cb) {
        var data = {
          "base_tree": baseTree,
          "tree": [
            {
              "path": path,
              "mode": "100644",
              "type": "blob",
              "sha": blob
            }
          ]
        };
        _request("POST", repoPath + "/git/trees", data, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };

      // Post a new tree object having a file path pointer replaced
      // with a new blob SHA getting a tree SHA back
      // -------

      this.postTree = function(tree, cb) {
        _request("POST", repoPath + "/git/trees", { "tree": tree }, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };

      // Create a new commit object with the current commit SHA as the parent
      // and the new tree SHA, getting a commit SHA back
      // -------

      this.commit = function(parent, tree, message, cb) {
        var data = {
          "message": message,
          "author": {
            "name": options.username
          },
          "parents": [
            parent
          ],
          "tree": tree
        };

        _request("POST", repoPath + "/git/commits", data, function(err, res) {
          currentTree.sha = res.sha; // update latest commit
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };

      // Update the reference of your head to point to the new commit SHA
      // -------

      this.updateHead = function(head, commit, cb) {
        _request("PATCH", repoPath + "/git/refs/heads/" + head, { "sha": commit }, function(err, res) {
          cb(err);
        });
      };

      // Show repository information
      // -------

      this.show = function(cb) {
        _request("GET", repoPath, null, cb);
      };

      // Get contents
      // --------

      this.contents = function(path, cb) {
        _request("GET", repoPath + "/contents", { path: path }, cb);
      };

      // Fork repository
      // -------

      this.fork = function(cb) {
        _request("POST", repoPath + "/forks", null, cb);
      };

      // Create pull request
      // --------

      this.createPullRequest = function(options, cb) {
        _request("POST", repoPath + "/pulls", options, cb);
      };

      // Read file at given path
      // -------

      this.read = function(branch, path, cb) {
        that.getSha(branch, path, function(err, sha) {
          if (!sha) return cb("not found", null);
          that.getBlob(sha, function(err, content) {
            cb(err, content, sha);
          });
        });
      };

      // Remove a file from the tree
      // -------

      this.remove = function(branch, path, cb) {
        updateTree(branch, function(err, latestCommit) {
          that.getTree(latestCommit+"?recursive=true", function(err, tree) {
            // Update Tree
            var newTree = _.reject(tree, function(ref) { return ref.path === path });
            _.each(newTree, function(ref) {
              if (ref.type === "tree") delete ref.sha;
            });

            that.postTree(newTree, function(err, rootTree) {
              that.commit(latestCommit, rootTree, 'Deleted '+path , function(err, commit) {
                that.updateHead(branch, commit, function(err) {
                  cb(err);
                });
              });
            });
          });
        });
      };

      // Move a file to a new location
      // -------

      this.move = function(branch, path, newPath, cb) {
        updateTree(branch, function(err, latestCommit) {
          that.getTree(latestCommit+"?recursive=true", function(err, tree) {
            // Update Tree
            _.each(tree, function(ref) {
              if (ref.path === path) ref.path = newPath;
              if (ref.type === "tree") delete ref.sha;
            });

            that.postTree(tree, function(err, rootTree) {
              that.commit(latestCommit, rootTree, 'Deleted '+path , function(err, commit) {
                that.updateHead(branch, commit, function(err) {
                  cb(err);
                });
              });
            });
          });
        });
      };

      // Write file contents to a given branch and path
      // -------

      this.write = function(branch, path, content, message, cb) {
        updateTree(branch, function(err, latestCommit) {
          if (err) return cb(err);
          that.postBlob(content, function(err, blob) {
            if (err) return cb(err);
            that.updateTree(latestCommit, path, blob, function(err, tree) {
              if (err) return cb(err);
              that.commit(latestCommit, tree, message, function(err, commit) {
                if (err) return cb(err);
                that.updateHead(branch, commit, cb);
              });
            });
          });
        });
      };
    };

    // Gists API
    // =======

    Github.Gist = function(options) {
      var id = options.id;
      var that = this;
      var gistPath = "/gists/"+id;

      // Read the gist
      // --------

      this.read = function(cb) {
        _request("GET", gistPath, null, function(err, gist) {
          cb(err, gist);
        });
      };


      // Delete the gist
      // --------

      this.delete = function(cb) {
        _request("DELETE", gistPath, null, function(err,res) {
          cb(err,res);
        });
      };

      // Fork a gist
      // --------

      this.fork = function(cb) {
        _request("POST", gistPath+"/fork", null, function(err,res) {
          cb(err,res);
        });
      };

      // Update a gist with the new stuff
      // --------

      this.update = function(options, cb) {
        _request("PATCH", gistPath, options, function(err,res) {
          cb(err,res);
        });
      };
    };

    // Top Level API
    // -------

    this.getRepo = function(user, repo) {
      return new Github.Repository({user: user, name: repo});
    };

    this.getUser = function() {
      return new Github.User();
    };

    this.getGist = function(id) {
      return new Github.Gist({id: id});
    };
  };
}).call(this);
(function(){function diff_match_patch(){this.Diff_Timeout=1;this.Diff_EditCost=4;this.Match_Threshold=0.5;this.Match_Distance=1E3;this.Patch_DeleteThreshold=0.5;this.Patch_Margin=4;this.Match_MaxBits=32}
diff_match_patch.prototype.diff_main=function(a,b,c,d){"undefined"==typeof d&&(d=0>=this.Diff_Timeout?Number.MAX_VALUE:(new Date).getTime()+1E3*this.Diff_Timeout);if(null==a||null==b)throw Error("Null input. (diff_main)");if(a==b)return a?[[0,a]]:[];"undefined"==typeof c&&(c=!0);var e=c,f=this.diff_commonPrefix(a,b),c=a.substring(0,f),a=a.substring(f),b=b.substring(f),f=this.diff_commonSuffix(a,b),g=a.substring(a.length-f),a=a.substring(0,a.length-f),b=b.substring(0,b.length-f),a=this.diff_compute_(a,
b,e,d);c&&a.unshift([0,c]);g&&a.push([0,g]);this.diff_cleanupMerge(a);return a};
diff_match_patch.prototype.diff_compute_=function(a,b,c,d){if(!a)return[[1,b]];if(!b)return[[-1,a]];var e=a.length>b.length?a:b,f=a.length>b.length?b:a,g=e.indexOf(f);if(-1!=g)return c=[[1,e.substring(0,g)],[0,f],[1,e.substring(g+f.length)]],a.length>b.length&&(c[0][0]=c[2][0]=-1),c;if(1==f.length)return[[-1,a],[1,b]];return(e=this.diff_halfMatch_(a,b))?(f=e[0],a=e[1],g=e[2],b=e[3],e=e[4],f=this.diff_main(f,g,c,d),c=this.diff_main(a,b,c,d),f.concat([[0,e]],c)):c&&100<a.length&&100<b.length?this.diff_lineMode_(a,
b,d):this.diff_bisect_(a,b,d)};
diff_match_patch.prototype.diff_lineMode_=function(a,b,c){var d=this.diff_linesToChars_(a,b),a=d.chars1,b=d.chars2,d=d.lineArray,a=this.diff_main(a,b,!1,c);this.diff_charsToLines_(a,d);this.diff_cleanupSemantic(a);a.push([0,""]);for(var e=d=b=0,f="",g="";b<a.length;){switch(a[b][0]){case 1:e++;g+=a[b][1];break;case -1:d++;f+=a[b][1];break;case 0:if(1<=d&&1<=e){a.splice(b-d-e,d+e);b=b-d-e;d=this.diff_main(f,g,!1,c);for(e=d.length-1;0<=e;e--)a.splice(b,0,d[e]);b+=d.length}d=e=0;g=f=""}b++}a.pop();return a};
diff_match_patch.prototype.diff_bisect_=function(a,b,c){for(var d=a.length,e=b.length,f=Math.ceil((d+e)/2),g=f,h=2*f,j=Array(h),i=Array(h),k=0;k<h;k++)j[k]=-1,i[k]=-1;j[g+1]=0;i[g+1]=0;for(var k=d-e,p=0!=k%2,q=0,s=0,o=0,v=0,u=0;u<f&&!((new Date).getTime()>c);u++){for(var n=-u+q;n<=u-s;n+=2){var l=g+n,m;m=n==-u||n!=u&&j[l-1]<j[l+1]?j[l+1]:j[l-1]+1;for(var r=m-n;m<d&&r<e&&a.charAt(m)==b.charAt(r);)m++,r++;j[l]=m;if(m>d)s+=2;else if(r>e)q+=2;else if(p&&(l=g+k-n,0<=l&&l<h&&-1!=i[l])){var t=d-i[l];if(m>=
t)return this.diff_bisectSplit_(a,b,m,r,c)}}for(n=-u+o;n<=u-v;n+=2){l=g+n;t=n==-u||n!=u&&i[l-1]<i[l+1]?i[l+1]:i[l-1]+1;for(m=t-n;t<d&&m<e&&a.charAt(d-t-1)==b.charAt(e-m-1);)t++,m++;i[l]=t;if(t>d)v+=2;else if(m>e)o+=2;else if(!p&&(l=g+k-n,0<=l&&l<h&&-1!=j[l]&&(m=j[l],r=g+m-l,t=d-t,m>=t)))return this.diff_bisectSplit_(a,b,m,r,c)}}return[[-1,a],[1,b]]};
diff_match_patch.prototype.diff_bisectSplit_=function(a,b,c,d,e){var f=a.substring(0,c),g=b.substring(0,d),a=a.substring(c),b=b.substring(d),f=this.diff_main(f,g,!1,e),e=this.diff_main(a,b,!1,e);return f.concat(e)};
diff_match_patch.prototype.diff_linesToChars_=function(a,b){function c(a){for(var b="",c=0,f=-1,g=d.length;f<a.length-1;){f=a.indexOf("\n",c);-1==f&&(f=a.length-1);var q=a.substring(c,f+1),c=f+1;(e.hasOwnProperty?e.hasOwnProperty(q):void 0!==e[q])?b+=String.fromCharCode(e[q]):(b+=String.fromCharCode(g),e[q]=g,d[g++]=q)}return b}var d=[],e={};d[0]="";var f=c(a),g=c(b);return{chars1:f,chars2:g,lineArray:d}};
diff_match_patch.prototype.diff_charsToLines_=function(a,b){for(var c=0;c<a.length;c++){for(var d=a[c][1],e=[],f=0;f<d.length;f++)e[f]=b[d.charCodeAt(f)];a[c][1]=e.join("")}};diff_match_patch.prototype.diff_commonPrefix=function(a,b){if(!a||!b||a.charAt(0)!=b.charAt(0))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(f,e)==b.substring(f,e)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};
diff_match_patch.prototype.diff_commonSuffix=function(a,b){if(!a||!b||a.charAt(a.length-1)!=b.charAt(b.length-1))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(a.length-e,a.length-f)==b.substring(b.length-e,b.length-f)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};
diff_match_patch.prototype.diff_commonOverlap_=function(a,b){var c=a.length,d=b.length;if(0==c||0==d)return 0;c>d?a=a.substring(c-d):c<d&&(b=b.substring(0,c));c=Math.min(c,d);if(a==b)return c;for(var d=0,e=1;;){var f=a.substring(c-e),f=b.indexOf(f);if(-1==f)return d;e+=f;if(0==f||a.substring(c-e)==b.substring(0,e))d=e,e++}};
diff_match_patch.prototype.diff_halfMatch_=function(a,b){function c(a,b,c){for(var d=a.substring(c,c+Math.floor(a.length/4)),e=-1,g="",h,j,n,l;-1!=(e=b.indexOf(d,e+1));){var m=f.diff_commonPrefix(a.substring(c),b.substring(e)),r=f.diff_commonSuffix(a.substring(0,c),b.substring(0,e));g.length<r+m&&(g=b.substring(e-r,e)+b.substring(e,e+m),h=a.substring(0,c-r),j=a.substring(c+m),n=b.substring(0,e-r),l=b.substring(e+m))}return 2*g.length>=a.length?[h,j,n,l,g]:null}if(0>=this.Diff_Timeout)return null;
var d=a.length>b.length?a:b,e=a.length>b.length?b:a;if(4>d.length||2*e.length<d.length)return null;var f=this,g=c(d,e,Math.ceil(d.length/4)),d=c(d,e,Math.ceil(d.length/2)),h;if(!g&&!d)return null;h=d?g?g[4].length>d[4].length?g:d:d:g;var j;a.length>b.length?(g=h[0],d=h[1],e=h[2],j=h[3]):(e=h[0],j=h[1],g=h[2],d=h[3]);h=h[4];return[g,d,e,j,h]};
diff_match_patch.prototype.diff_cleanupSemantic=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=0,h=0,j=0,i=0;f<a.length;)0==a[f][0]?(c[d++]=f,g=j,h=i,i=j=0,e=a[f][1]):(1==a[f][0]?j+=a[f][1].length:i+=a[f][1].length,e&&e.length<=Math.max(g,h)&&e.length<=Math.max(j,i)&&(a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,d--,f=0<d?c[d-1]:-1,i=j=h=g=0,e=null,b=!0)),f++;b&&this.diff_cleanupMerge(a);this.diff_cleanupSemanticLossless(a);for(f=1;f<a.length;){if(-1==a[f-1][0]&&1==a[f][0]){b=a[f-1][1];c=a[f][1];
d=this.diff_commonOverlap_(b,c);e=this.diff_commonOverlap_(c,b);if(d>=e){if(d>=b.length/2||d>=c.length/2)a.splice(f,0,[0,c.substring(0,d)]),a[f-1][1]=b.substring(0,b.length-d),a[f+1][1]=c.substring(d),f++}else if(e>=b.length/2||e>=c.length/2)a.splice(f,0,[0,b.substring(0,e)]),a[f-1][0]=1,a[f-1][1]=c.substring(0,c.length-e),a[f+1][0]=-1,a[f+1][1]=b.substring(e),f++;f++}f++}};
diff_match_patch.prototype.diff_cleanupSemanticLossless=function(a){function b(a,b){if(!a||!b)return 6;var c=a.charAt(a.length-1),d=b.charAt(0),e=c.match(diff_match_patch.nonAlphaNumericRegex_),f=d.match(diff_match_patch.nonAlphaNumericRegex_),g=e&&c.match(diff_match_patch.whitespaceRegex_),h=f&&d.match(diff_match_patch.whitespaceRegex_),c=g&&c.match(diff_match_patch.linebreakRegex_),d=h&&d.match(diff_match_patch.linebreakRegex_),i=c&&a.match(diff_match_patch.blanklineEndRegex_),j=d&&b.match(diff_match_patch.blanklineStartRegex_);
return i||j?5:c||d?4:e&&!g&&h?3:g||h?2:e||f?1:0}for(var c=1;c<a.length-1;){if(0==a[c-1][0]&&0==a[c+1][0]){var d=a[c-1][1],e=a[c][1],f=a[c+1][1],g=this.diff_commonSuffix(d,e);if(g)var h=e.substring(e.length-g),d=d.substring(0,d.length-g),e=h+e.substring(0,e.length-g),f=h+f;for(var g=d,h=e,j=f,i=b(d,e)+b(e,f);e.charAt(0)===f.charAt(0);){var d=d+e.charAt(0),e=e.substring(1)+f.charAt(0),f=f.substring(1),k=b(d,e)+b(e,f);k>=i&&(i=k,g=d,h=e,j=f)}a[c-1][1]!=g&&(g?a[c-1][1]=g:(a.splice(c-1,1),c--),a[c][1]=
h,j?a[c+1][1]=j:(a.splice(c+1,1),c--))}c++}};diff_match_patch.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/;diff_match_patch.whitespaceRegex_=/\s/;diff_match_patch.linebreakRegex_=/[\r\n]/;diff_match_patch.blanklineEndRegex_=/\n\r?\n$/;diff_match_patch.blanklineStartRegex_=/^\r?\n\r?\n/;
diff_match_patch.prototype.diff_cleanupEfficiency=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=!1,h=!1,j=!1,i=!1;f<a.length;){if(0==a[f][0])a[f][1].length<this.Diff_EditCost&&(j||i)?(c[d++]=f,g=j,h=i,e=a[f][1]):(d=0,e=null),j=i=!1;else if(-1==a[f][0]?i=!0:j=!0,e&&(g&&h&&j&&i||e.length<this.Diff_EditCost/2&&3==g+h+j+i))a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,e=null,g&&h?(j=i=!0,d=0):(d--,f=0<d?c[d-1]:-1,j=i=!1),b=!0;f++}b&&this.diff_cleanupMerge(a)};
diff_match_patch.prototype.diff_cleanupMerge=function(a){a.push([0,""]);for(var b=0,c=0,d=0,e="",f="",g;b<a.length;)switch(a[b][0]){case 1:d++;f+=a[b][1];b++;break;case -1:c++;e+=a[b][1];b++;break;case 0:1<c+d?(0!==c&&0!==d&&(g=this.diff_commonPrefix(f,e),0!==g&&(0<b-c-d&&0==a[b-c-d-1][0]?a[b-c-d-1][1]+=f.substring(0,g):(a.splice(0,0,[0,f.substring(0,g)]),b++),f=f.substring(g),e=e.substring(g)),g=this.diff_commonSuffix(f,e),0!==g&&(a[b][1]=f.substring(f.length-g)+a[b][1],f=f.substring(0,f.length-
g),e=e.substring(0,e.length-g))),0===c?a.splice(b-d,c+d,[1,f]):0===d?a.splice(b-c,c+d,[-1,e]):a.splice(b-c-d,c+d,[-1,e],[1,f]),b=b-c-d+(c?1:0)+(d?1:0)+1):0!==b&&0==a[b-1][0]?(a[b-1][1]+=a[b][1],a.splice(b,1)):b++,c=d=0,f=e=""}""===a[a.length-1][1]&&a.pop();c=!1;for(b=1;b<a.length-1;)0==a[b-1][0]&&0==a[b+1][0]&&(a[b][1].substring(a[b][1].length-a[b-1][1].length)==a[b-1][1]?(a[b][1]=a[b-1][1]+a[b][1].substring(0,a[b][1].length-a[b-1][1].length),a[b+1][1]=a[b-1][1]+a[b+1][1],a.splice(b-1,1),c=!0):a[b][1].substring(0,
a[b+1][1].length)==a[b+1][1]&&(a[b-1][1]+=a[b+1][1],a[b][1]=a[b][1].substring(a[b+1][1].length)+a[b+1][1],a.splice(b+1,1),c=!0)),b++;c&&this.diff_cleanupMerge(a)};diff_match_patch.prototype.diff_xIndex=function(a,b){var c=0,d=0,e=0,f=0,g;for(g=0;g<a.length;g++){1!==a[g][0]&&(c+=a[g][1].length);-1!==a[g][0]&&(d+=a[g][1].length);if(c>b)break;e=c;f=d}return a.length!=g&&-1===a[g][0]?f:f+(b-e)};
diff_match_patch.prototype.diff_prettyHtml=function(a){for(var b=[],c=/&/g,d=/</g,e=/>/g,f=/\n/g,g=0;g<a.length;g++){var h=a[g][0],j=a[g][1],j=j.replace(c,"&amp;").replace(d,"&lt;").replace(e,"&gt;").replace(f,"&para;<br>");switch(h){case 1:b[g]='<ins style="background:#e6ffe6;">'+j+"</ins>";break;case -1:b[g]='<del style="background:#ffe6e6;">'+j+"</del>";break;case 0:b[g]="<span>"+j+"</span>"}}return b.join("")};
diff_match_patch.prototype.diff_text1=function(a){for(var b=[],c=0;c<a.length;c++)1!==a[c][0]&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_text2=function(a){for(var b=[],c=0;c<a.length;c++)-1!==a[c][0]&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_levenshtein=function(a){for(var b=0,c=0,d=0,e=0;e<a.length;e++){var f=a[e][0],g=a[e][1];switch(f){case 1:c+=g.length;break;case -1:d+=g.length;break;case 0:b+=Math.max(c,d),d=c=0}}return b+=Math.max(c,d)};
diff_match_patch.prototype.diff_toDelta=function(a){for(var b=[],c=0;c<a.length;c++)switch(a[c][0]){case 1:b[c]="+"+encodeURI(a[c][1]);break;case -1:b[c]="-"+a[c][1].length;break;case 0:b[c]="="+a[c][1].length}return b.join("\t").replace(/%20/g," ")};
diff_match_patch.prototype.diff_fromDelta=function(a,b){for(var c=[],d=0,e=0,f=b.split(/\t/g),g=0;g<f.length;g++){var h=f[g].substring(1);switch(f[g].charAt(0)){case "+":try{c[d++]=[1,decodeURI(h)]}catch(j){throw Error("Illegal escape in diff_fromDelta: "+h);}break;case "-":case "=":var i=parseInt(h,10);if(isNaN(i)||0>i)throw Error("Invalid number in diff_fromDelta: "+h);h=a.substring(e,e+=i);"="==f[g].charAt(0)?c[d++]=[0,h]:c[d++]=[-1,h];break;default:if(f[g])throw Error("Invalid diff operation in diff_fromDelta: "+
f[g]);}}if(e!=a.length)throw Error("Delta length ("+e+") does not equal source text length ("+a.length+").");return c};diff_match_patch.prototype.match_main=function(a,b,c){if(null==a||null==b||null==c)throw Error("Null input. (match_main)");c=Math.max(0,Math.min(c,a.length));return a==b?0:a.length?a.substring(c,c+b.length)==b?c:this.match_bitap_(a,b,c):-1};
diff_match_patch.prototype.match_bitap_=function(a,b,c){function d(a,d){var e=a/b.length,g=Math.abs(c-d);return!f.Match_Distance?g?1:e:e+g/f.Match_Distance}if(b.length>this.Match_MaxBits)throw Error("Pattern too long for this browser.");var e=this.match_alphabet_(b),f=this,g=this.Match_Threshold,h=a.indexOf(b,c);-1!=h&&(g=Math.min(d(0,h),g),h=a.lastIndexOf(b,c+b.length),-1!=h&&(g=Math.min(d(0,h),g)));for(var j=1<<b.length-1,h=-1,i,k,p=b.length+a.length,q,s=0;s<b.length;s++){i=0;for(k=p;i<k;)d(s,c+
k)<=g?i=k:p=k,k=Math.floor((p-i)/2+i);p=k;i=Math.max(1,c-k+1);var o=Math.min(c+k,a.length)+b.length;k=Array(o+2);for(k[o+1]=(1<<s)-1;o>=i;o--){var v=e[a.charAt(o-1)];k[o]=0===s?(k[o+1]<<1|1)&v:(k[o+1]<<1|1)&v|(q[o+1]|q[o])<<1|1|q[o+1];if(k[o]&j&&(v=d(s,o-1),v<=g))if(g=v,h=o-1,h>c)i=Math.max(1,2*c-h);else break}if(d(s+1,c)>g)break;q=k}return h};
diff_match_patch.prototype.match_alphabet_=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=0;for(c=0;c<a.length;c++)b[a.charAt(c)]|=1<<a.length-c-1;return b};
diff_match_patch.prototype.patch_addContext_=function(a,b){if(0!=b.length){for(var c=b.substring(a.start2,a.start2+a.length1),d=0;b.indexOf(c)!=b.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)d+=this.Patch_Margin,c=b.substring(a.start2-d,a.start2+a.length1+d);d+=this.Patch_Margin;(c=b.substring(a.start2-d,a.start2))&&a.diffs.unshift([0,c]);(d=b.substring(a.start2+a.length1,a.start2+a.length1+d))&&a.diffs.push([0,d]);a.start1-=c.length;a.start2-=c.length;a.length1+=
c.length+d.length;a.length2+=c.length+d.length}};
diff_match_patch.prototype.patch_make=function(a,b,c){var d;if("string"==typeof a&&"string"==typeof b&&"undefined"==typeof c)d=a,b=this.diff_main(d,b,!0),2<b.length&&(this.diff_cleanupSemantic(b),this.diff_cleanupEfficiency(b));else if(a&&"object"==typeof a&&"undefined"==typeof b&&"undefined"==typeof c)b=a,d=this.diff_text1(b);else if("string"==typeof a&&b&&"object"==typeof b&&"undefined"==typeof c)d=a;else if("string"==typeof a&&"string"==typeof b&&c&&"object"==typeof c)d=a,b=c;else throw Error("Unknown call format to patch_make.");
if(0===b.length)return[];for(var c=[],a=new diff_match_patch.patch_obj,e=0,f=0,g=0,h=d,j=0;j<b.length;j++){var i=b[j][0],k=b[j][1];if(!e&&0!==i)a.start1=f,a.start2=g;switch(i){case 1:a.diffs[e++]=b[j];a.length2+=k.length;d=d.substring(0,g)+k+d.substring(g);break;case -1:a.length1+=k.length;a.diffs[e++]=b[j];d=d.substring(0,g)+d.substring(g+k.length);break;case 0:k.length<=2*this.Patch_Margin&&e&&b.length!=j+1?(a.diffs[e++]=b[j],a.length1+=k.length,a.length2+=k.length):k.length>=2*this.Patch_Margin&&
e&&(this.patch_addContext_(a,h),c.push(a),a=new diff_match_patch.patch_obj,e=0,h=d,f=g)}1!==i&&(f+=k.length);-1!==i&&(g+=k.length)}e&&(this.patch_addContext_(a,h),c.push(a));return c};diff_match_patch.prototype.patch_deepCopy=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=new diff_match_patch.patch_obj;e.diffs=[];for(var f=0;f<d.diffs.length;f++)e.diffs[f]=d.diffs[f].slice();e.start1=d.start1;e.start2=d.start2;e.length1=d.length1;e.length2=d.length2;b[c]=e}return b};
diff_match_patch.prototype.patch_apply=function(a,b){if(0==a.length)return[b,[]];var a=this.patch_deepCopy(a),c=this.patch_addPadding(a),b=c+b+c;this.patch_splitMax(a);for(var d=0,e=[],f=0;f<a.length;f++){var g=a[f].start2+d,h=this.diff_text1(a[f].diffs),j,i=-1;if(h.length>this.Match_MaxBits){if(j=this.match_main(b,h.substring(0,this.Match_MaxBits),g),-1!=j&&(i=this.match_main(b,h.substring(h.length-this.Match_MaxBits),g+h.length-this.Match_MaxBits),-1==i||j>=i))j=-1}else j=this.match_main(b,h,g);
if(-1==j)e[f]=!1,d-=a[f].length2-a[f].length1;else if(e[f]=!0,d=j-g,g=-1==i?b.substring(j,j+h.length):b.substring(j,i+this.Match_MaxBits),h==g)b=b.substring(0,j)+this.diff_text2(a[f].diffs)+b.substring(j+h.length);else if(g=this.diff_main(h,g,!1),h.length>this.Match_MaxBits&&this.diff_levenshtein(g)/h.length>this.Patch_DeleteThreshold)e[f]=!1;else{this.diff_cleanupSemanticLossless(g);for(var h=0,k,i=0;i<a[f].diffs.length;i++){var p=a[f].diffs[i];0!==p[0]&&(k=this.diff_xIndex(g,h));1===p[0]?b=b.substring(0,
j+k)+p[1]+b.substring(j+k):-1===p[0]&&(b=b.substring(0,j+k)+b.substring(j+this.diff_xIndex(g,h+p[1].length)));-1!==p[0]&&(h+=p[1].length)}}}b=b.substring(c.length,b.length-c.length);return[b,e]};
diff_match_patch.prototype.patch_addPadding=function(a){for(var b=this.Patch_Margin,c="",d=1;d<=b;d++)c+=String.fromCharCode(d);for(d=0;d<a.length;d++)a[d].start1+=b,a[d].start2+=b;var d=a[0],e=d.diffs;if(0==e.length||0!=e[0][0])e.unshift([0,c]),d.start1-=b,d.start2-=b,d.length1+=b,d.length2+=b;else if(b>e[0][1].length){var f=b-e[0][1].length;e[0][1]=c.substring(e[0][1].length)+e[0][1];d.start1-=f;d.start2-=f;d.length1+=f;d.length2+=f}d=a[a.length-1];e=d.diffs;0==e.length||0!=e[e.length-1][0]?(e.push([0,
c]),d.length1+=b,d.length2+=b):b>e[e.length-1][1].length&&(f=b-e[e.length-1][1].length,e[e.length-1][1]+=c.substring(0,f),d.length1+=f,d.length2+=f);return c};
diff_match_patch.prototype.patch_splitMax=function(a){for(var b=this.Match_MaxBits,c=0;c<a.length;c++)if(!(a[c].length1<=b)){var d=a[c];a.splice(c--,1);for(var e=d.start1,f=d.start2,g="";0!==d.diffs.length;){var h=new diff_match_patch.patch_obj,j=!0;h.start1=e-g.length;h.start2=f-g.length;if(""!==g)h.length1=h.length2=g.length,h.diffs.push([0,g]);for(;0!==d.diffs.length&&h.length1<b-this.Patch_Margin;){var g=d.diffs[0][0],i=d.diffs[0][1];1===g?(h.length2+=i.length,f+=i.length,h.diffs.push(d.diffs.shift()),
j=!1):-1===g&&1==h.diffs.length&&0==h.diffs[0][0]&&i.length>2*b?(h.length1+=i.length,e+=i.length,j=!1,h.diffs.push([g,i]),d.diffs.shift()):(i=i.substring(0,b-h.length1-this.Patch_Margin),h.length1+=i.length,e+=i.length,0===g?(h.length2+=i.length,f+=i.length):j=!1,h.diffs.push([g,i]),i==d.diffs[0][1]?d.diffs.shift():d.diffs[0][1]=d.diffs[0][1].substring(i.length))}g=this.diff_text2(h.diffs);g=g.substring(g.length-this.Patch_Margin);i=this.diff_text1(d.diffs).substring(0,this.Patch_Margin);""!==i&&
(h.length1+=i.length,h.length2+=i.length,0!==h.diffs.length&&0===h.diffs[h.diffs.length-1][0]?h.diffs[h.diffs.length-1][1]+=i:h.diffs.push([0,i]));j||a.splice(++c,0,h)}}};diff_match_patch.prototype.patch_toText=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=a[c];return b.join("")};
diff_match_patch.prototype.patch_fromText=function(a){var b=[];if(!a)return b;for(var a=a.split("\n"),c=0,d=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;c<a.length;){var e=a[c].match(d);if(!e)throw Error("Invalid patch string: "+a[c]);var f=new diff_match_patch.patch_obj;b.push(f);f.start1=parseInt(e[1],10);""===e[2]?(f.start1--,f.length1=1):"0"==e[2]?f.length1=0:(f.start1--,f.length1=parseInt(e[2],10));f.start2=parseInt(e[3],10);""===e[4]?(f.start2--,f.length2=1):"0"==e[4]?f.length2=0:(f.start2--,f.length2=
parseInt(e[4],10));for(c++;c<a.length;){e=a[c].charAt(0);try{var g=decodeURI(a[c].substring(1))}catch(h){throw Error("Illegal escape in patch_fromText: "+g);}if("-"==e)f.diffs.push([-1,g]);else if("+"==e)f.diffs.push([1,g]);else if(" "==e)f.diffs.push([0,g]);else if("@"==e)break;else if(""!==e)throw Error('Invalid patch mode "'+e+'" in: '+g);c++}}return b};diff_match_patch.patch_obj=function(){this.diffs=[];this.start2=this.start1=null;this.length2=this.length1=0};
diff_match_patch.patch_obj.prototype.toString=function(){var a,b;a=0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1;b=0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2;a=["@@ -"+a+" +"+b+" @@\n"];var c;for(b=0;b<this.diffs.length;b++){switch(this.diffs[b][0]){case 1:c="+";break;case -1:c="-";break;case 0:c=" "}a[b+1]=c+encodeURI(this.diffs[b][1])+"\n"}return a.join("").replace(/%20/g," ")};
this.diff_match_patch=diff_match_patch;this.DIFF_DELETE=-1;this.DIFF_INSERT=1;this.DIFF_EQUAL=0;})()

//     keymaster.js
//     (c) 2011 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.

;(function(global){
  var k,
    _handlers = {},
    _mods = { 16: false, 18: false, 17: false, 91: false },
    _scope = 'all',
    // modifier keys
    _MODIFIERS = {
      '⇧': 16, shift: 16,
      '⌥': 18, alt: 18, option: 18,
      '⌃': 17, ctrl: 17, control: 17,
      '⌘': 91, command: 91
    },
    // special keys
    _MAP = {
      backspace: 8, tab: 9, clear: 12,
      enter: 13, 'return': 13,
      esc: 27, escape: 27, space: 32,
      left: 37, up: 38,
      right: 39, down: 40,
      del: 46, 'delete': 46,
      home: 36, end: 35,
      pageup: 33, pagedown: 34,
      ',': 188, '.': 190, '/': 191,
      '`': 192, '-': 189, '=': 187,
      ';': 186, '\'': 222,
      '[': 219, ']': 221, '\\': 220
    };

  for(k=1;k<20;k++) _MODIFIERS['f'+k] = 111+k;

  // IE doesn't support Array#indexOf, so have a simple replacement
  function index(array, item){
    var i = array.length;
    while(i--) if(array[i]===item) return i;
    return -1;
  }

  // handle keydown event
  function dispatch(event){
    var key, handler, k, i, modifiersMatch;
    key = event.keyCode;

    // if a modifier key, set the key.<modifierkeyname> property to true and return
    if(key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
    if(key in _mods) {
      _mods[key] = true;
      // 'assignKey' from inside this closure is exported to window.key
      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = true;
      return;
    }

    // see if we need to ignore the keypress (ftiler() can can be overridden)
    // by default ignore key presses if a select, textarea, or input is focused
    if(!assignKey.filter.call(this, event)) return;

    // abort if no potentially matching shortcuts found
    if (!(key in _handlers)) return;

    // for each potential shortcut
    for (i = 0; i < _handlers[key].length; i++) {
      handler = _handlers[key][i];

      // see if it's in the current scope
      if(handler.scope == _scope || handler.scope == 'all'){
        // check if modifiers match if any
        modifiersMatch = handler.mods.length > 0;
        for(k in _mods)
          if((!_mods[k] && index(handler.mods, +k) > -1) ||
            (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;
        // call the handler and stop the event if neccessary
        if((handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch){
          if(handler.method(event, handler)===false){
            if(event.preventDefault) event.preventDefault();
              else event.returnValue = false;
            if(event.stopPropagation) event.stopPropagation();
            if(event.cancelBubble) event.cancelBubble = true;
          }
        }
      }
  }
  };

  // unset modifier keys on keyup
  function clearModifier(event){
    var key = event.keyCode, k;
    if(key == 93 || key == 224) key = 91;
    if(key in _mods) {
      _mods[key] = false;
      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = false;
    }
  };

  function resetModifiers() {
    for(k in _mods) _mods[k] = false;
    for(k in _MODIFIERS) assignKey[k] = false;
  }

  // parse and assign shortcut
  function assignKey(key, scope, method){
    var keys, mods, i, mi;
    if (method === undefined) {
      method = scope;
      scope = 'all';
    }
    key = key.replace(/\s/g,'');
    keys = key.split(',');

    if((keys[keys.length-1])=='')
      keys[keys.length-2] += ',';
    // for each shortcut
    for (i = 0; i < keys.length; i++) {
      // set modifier keys if any
      mods = [];
      key = keys[i].split('+');
      if(key.length > 1){
        mods = key.slice(0,key.length-1);
        for (mi = 0; mi < mods.length; mi++)
          mods[mi] = _MODIFIERS[mods[mi]];
        key = [key[key.length-1]];
      }
      // convert to keycode and...
      key = key[0]
      key = _MAP[key] || key.toUpperCase().charCodeAt(0);
      // ...store handler
      if (!(key in _handlers)) _handlers[key] = [];
      _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });
    }
  };

  function filter(event){
    var tagName = (event.target || event.srcElement).tagName;
    // ignore keypressed in any elements that support keyboard data input
    return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
  }

  // initialize key.<modifier> to false
  for(k in _MODIFIERS) assignKey[k] = false;

  // set current scope (default 'all')
  function setScope(scope){ _scope = scope || 'all' };
  function getScope(){ return _scope || 'all' };

  // delete all handlers for a given scope
  function deleteScope(scope){
    var key, handlers, i;

    for (key in _handlers) {
      handlers = _handlers[key];
      for (i = 0; i < handlers.length; ) {
        if (handlers[i].scope === scope) handlers.splice(i, 1);
        else i++;
      }
    }
  };

  // cross-browser events
  function addEvent(object, event, method) {
    if (object.addEventListener)
      object.addEventListener(event, method, false);
    else if(object.attachEvent)
      object.attachEvent('on'+event, function(){ method(window.event) });
  };

  // set the handlers globally on document
  addEvent(document, 'keydown', dispatch);
  addEvent(document, 'keyup', clearModifier);

  // reset modifiers to false whenever the window is (re)focused.
  addEvent(window, 'focus', resetModifiers);

  // set window.key and window.key.set/get/deleteScope, and the default filter
  global.key = assignKey;
  global.key.setScope = setScope;
  global.key.getScope = getScope;
  global.key.deleteScope = deleteScope;
  global.key.filter = filter;

  if(typeof module !== 'undefined') module.exports = key;

})(this);
// CodeMirror version 2.31
//
// All functions that need access to the editor's state live inside
// the CodeMirror function. Below that, at the bottom of the file,
// some utilities are defined.

// CodeMirror is the only global var we claim
var CodeMirror = (function() {
  // This is the function that produces an editor instance. Its
  // closure is used to store the editor state.
  function CodeMirror(place, givenOptions) {
    // Determine effective options based on given values and defaults.
    var options = {}, defaults = CodeMirror.defaults;
    for (var opt in defaults)
      if (defaults.hasOwnProperty(opt))
        options[opt] = (givenOptions && givenOptions.hasOwnProperty(opt) ? givenOptions : defaults)[opt];

    // The element in which the editor lives.
    var wrapper = document.createElement("div");
    wrapper.className = "CodeMirror" + (options.lineWrapping ? " CodeMirror-wrap" : "");
    // This mess creates the base DOM structure for the editor.
    wrapper.innerHTML =
      '<div style="overflow: hidden; position: relative; width: 3px; height: 0px;">' + // Wraps and hides input textarea
        '<textarea style="position: absolute; padding: 0; width: 1px; height: 1em" wrap="off" ' +
          'autocorrect="off" autocapitalize="off"></textarea></div>' +
      '<div class="CodeMirror-scrollbar">' + // The vertical scrollbar. Horizontal scrolling is handled by the scroller itself.
        '<div class="CodeMirror-scrollbar-inner">' + // The empty scrollbar content, used solely for managing the scrollbar thumb.
      '</div></div>' + // This must be before the scroll area because it's float-right.
      '<div class="CodeMirror-scroll" tabindex="-1">' +
        '<div style="position: relative">' + // Set to the height of the text, causes scrolling
          '<div style="position: relative">' + // Moved around its parent to cover visible view
            '<div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div>' +
            // Provides positioning relative to (visible) text origin
            '<div class="CodeMirror-lines"><div style="position: relative; z-index: 0">' +
              // Used to measure text size
              '<div style="position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden;"></div>' +
              '<pre class="CodeMirror-cursor">&#160;</pre>' + // Absolutely positioned blinky cursor
              '<pre class="CodeMirror-cursor" style="visibility: hidden">&#160;</pre>' + // Used to force a width
              '<div style="position: relative; z-index: -1"></div><div></div>' + // DIVs containing the selection and the actual code
            '</div></div></div></div></div>';
    if (place.appendChild) place.appendChild(wrapper); else place(wrapper);
    // I've never seen more elegant code in my life.
    var inputDiv = wrapper.firstChild, input = inputDiv.firstChild,
        scroller = wrapper.lastChild, code = scroller.firstChild,
        mover = code.firstChild, gutter = mover.firstChild, gutterText = gutter.firstChild,
        lineSpace = gutter.nextSibling.firstChild, measure = lineSpace.firstChild,
        cursor = measure.nextSibling, widthForcer = cursor.nextSibling,
        selectionDiv = widthForcer.nextSibling, lineDiv = selectionDiv.nextSibling,
        scrollbar = inputDiv.nextSibling, scrollbarInner = scrollbar.firstChild;
    themeChanged(); keyMapChanged();
    // Needed to hide big blue blinking cursor on Mobile Safari
    if (ios) input.style.width = "0px";
    if (!webkit) scroller.draggable = true;
    lineSpace.style.outline = "none";
    if (options.tabindex != null) input.tabIndex = options.tabindex;
    if (options.autofocus) focusInput();
    if (!options.gutter && !options.lineNumbers) gutter.style.display = "none";
    // Needed to handle Tab key in KHTML
    if (khtml) inputDiv.style.height = "1px", inputDiv.style.position = "absolute";

    // Check for OS X >= 10.7. If so, we need to force a width on the scrollbar, and 
    // make it overlap the content. (But we only do this if the scrollbar doesn't already
    // have a natural width. If the mouse is plugged in or the user sets the system pref
    // to always show scrollbars, the scrollbar shouldn't overlap.)
    if (mac_geLion) {
      scrollbar.className += (overlapScrollbars() ? " cm-sb-overlap" : " cm-sb-nonoverlap");
    } else if (ie_lt8) {
      // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
      scrollbar.className += " cm-sb-ie7";
    }

    // Check for problem with IE innerHTML not working when we have a
    // P (or similar) parent node.
    try { stringWidth("x"); }
    catch (e) {
      if (e.message.match(/runtime/i))
        e = new Error("A CodeMirror inside a P-style element does not work in Internet Explorer. (innerHTML bug)");
      throw e;
    }

    // Delayed object wrap timeouts, making sure only one is active. blinker holds an interval.
    var poll = new Delayed(), highlight = new Delayed(), blinker;

    // mode holds a mode API object. doc is the tree of Line objects,
    // work an array of lines that should be parsed, and history the
    // undo history (instance of History constructor).
    var mode, doc = new BranchChunk([new LeafChunk([new Line("")])]), work, focused;
    loadMode();
    // The selection. These are always maintained to point at valid
    // positions. Inverted is used to remember that the user is
    // selecting bottom-to-top.
    var sel = {from: {line: 0, ch: 0}, to: {line: 0, ch: 0}, inverted: false};
    // Selection-related flags. shiftSelecting obviously tracks
    // whether the user is holding shift.
    var shiftSelecting, lastClick, lastDoubleClick, lastScrollTop = 0, lastScrollLeft = 0, draggingText,
        overwrite = false, suppressEdits = false;
    // Variables used by startOperation/endOperation to track what
    // happened during the operation.
    var updateInput, userSelChange, changes, textChanged, selectionChanged, leaveInputAlone,
        gutterDirty, callbacks;
    // Current visible range (may be bigger than the view window).
    var displayOffset = 0, showingFrom = 0, showingTo = 0, lastSizeC = 0;
    // bracketHighlighted is used to remember that a bracket has been
    // marked.
    var bracketHighlighted;
    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    var maxLine = "", updateMaxLine = false, maxLineChanged = true;
    var tabCache = {};

    // Initialize the content.
    operation(function(){setValue(options.value || ""); updateInput = false;})();
    var history = new History();

    // Register our event handlers.
    connect(scroller, "mousedown", operation(onMouseDown));
    connect(scroller, "dblclick", operation(onDoubleClick));
    connect(lineSpace, "selectstart", e_preventDefault);
    // Gecko browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for Gecko.
    if (!gecko) connect(scroller, "contextmenu", onContextMenu);
    connect(scroller, "scroll", onScroll);
    connect(scrollbar, "scroll", onScroll);
    connect(scrollbar, "mousedown", function() {if (focused) setTimeout(focusInput, 0);});
    connect(scroller, "mousewheel", onMouseWheel);
    connect(scroller, "DOMMouseScroll", onMouseWheel);
    connect(window, "resize", function() {updateDisplay(true);});
    connect(input, "keyup", operation(onKeyUp));
    connect(input, "input", fastPoll);
    connect(input, "keydown", operation(onKeyDown));
    connect(input, "keypress", operation(onKeyPress));
    connect(input, "focus", onFocus);
    connect(input, "blur", onBlur);

    if (options.dragDrop) {
      connect(scroller, "dragstart", onDragStart);
      function drag_(e) {
        if (options.onDragEvent && options.onDragEvent(instance, addStop(e))) return;
        e_stop(e);
      }
      connect(scroller, "dragenter", drag_);
      connect(scroller, "dragover", drag_);
      connect(scroller, "drop", operation(onDrop));
    }
    connect(scroller, "paste", function(){focusInput(); fastPoll();});
    connect(input, "paste", fastPoll);
    connect(input, "cut", operation(function(){
      if (!options.readOnly) replaceSelection("");
    }));

    // Needed to handle Tab key in KHTML
    if (khtml) connect(code, "mouseup", function() {
        if (document.activeElement == input) input.blur();
        focusInput();
    });

    // IE throws unspecified error in certain cases, when
    // trying to access activeElement before onload
    var hasFocus; try { hasFocus = (document.activeElement == input); } catch(e) { }
    if (hasFocus || options.autofocus) setTimeout(onFocus, 20);
    else onBlur();

    function isLine(l) {return l >= 0 && l < doc.size;}
    // The instance object that we'll return. Mostly calls out to
    // local functions in the CodeMirror function. Some do some extra
    // range checking and/or clipping. operation is used to wrap the
    // call so that changes it makes are tracked, and the display is
    // updated afterwards.
    var instance = wrapper.CodeMirror = {
      getValue: getValue,
      setValue: operation(setValue),
      getSelection: getSelection,
      replaceSelection: operation(replaceSelection),
      focus: function(){window.focus(); focusInput(); onFocus(); fastPoll();},
      setOption: function(option, value) {
        var oldVal = options[option];
        options[option] = value;
        if (option == "mode" || option == "indentUnit") loadMode();
        else if (option == "readOnly" && value == "nocursor") {onBlur(); input.blur();}
        else if (option == "readOnly" && !value) {resetInput(true);}
        else if (option == "theme") themeChanged();
        else if (option == "lineWrapping" && oldVal != value) operation(wrappingChanged)();
        else if (option == "tabSize") updateDisplay(true);
        else if (option == "keyMap") keyMapChanged();
        if (option == "lineNumbers" || option == "gutter" || option == "firstLineNumber" || option == "theme") {
          gutterChanged();
          updateDisplay(true);
        }
      },
      getOption: function(option) {return options[option];},
      undo: operation(undo),
      redo: operation(redo),
      indentLine: operation(function(n, dir) {
        if (typeof dir != "string") {
          if (dir == null) dir = options.smartIndent ? "smart" : "prev";
          else dir = dir ? "add" : "subtract";
        }
        if (isLine(n)) indentLine(n, dir);
      }),
      indentSelection: operation(indentSelected),
      historySize: function() {return {undo: history.done.length, redo: history.undone.length};},
      clearHistory: function() {history = new History();},
      setHistory: function(histData) {
        history = new History();
        history.done = histData.done;
        history.undone = histData.undone;
      },
      getHistory: function() {
        history.time = 0;
        return {done: history.done.concat([]), undone: history.undone.concat([])};
      },
      matchBrackets: operation(function(){matchBrackets(true);}),
      getTokenAt: operation(function(pos) {
        pos = clipPos(pos);
        return getLine(pos.line).getTokenAt(mode, getStateBefore(pos.line), pos.ch);
      }),
      getStateAfter: function(line) {
        line = clipLine(line == null ? doc.size - 1: line);
        return getStateBefore(line + 1);
      },
      cursorCoords: function(start, mode) {
        if (start == null) start = sel.inverted;
        return this.charCoords(start ? sel.from : sel.to, mode);
      },
      charCoords: function(pos, mode) {
        pos = clipPos(pos);
        if (mode == "local") return localCoords(pos, false);
        if (mode == "div") return localCoords(pos, true);
        return pageCoords(pos);
      },
      coordsChar: function(coords) {
        var off = eltOffset(lineSpace);
        return coordsChar(coords.x - off.left, coords.y - off.top);
      },
      markText: operation(markText),
      setBookmark: setBookmark,
      findMarksAt: findMarksAt,
      setMarker: operation(addGutterMarker),
      clearMarker: operation(removeGutterMarker),
      setLineClass: operation(setLineClass),
      hideLine: operation(function(h) {return setLineHidden(h, true);}),
      showLine: operation(function(h) {return setLineHidden(h, false);}),
      onDeleteLine: function(line, f) {
        if (typeof line == "number") {
          if (!isLine(line)) return null;
          line = getLine(line);
        }
        (line.handlers || (line.handlers = [])).push(f);
        return line;
      },
      lineInfo: lineInfo,
      addWidget: function(pos, node, scroll, vert, horiz) {
        pos = localCoords(clipPos(pos));
        var top = pos.yBot, left = pos.x;
        node.style.position = "absolute";
        code.appendChild(node);
        if (vert == "over") top = pos.y;
        else if (vert == "near") {
          var vspace = Math.max(scroller.offsetHeight, doc.height * textHeight()),
              hspace = Math.max(code.clientWidth, lineSpace.clientWidth) - paddingLeft();
          if (pos.yBot + node.offsetHeight > vspace && pos.y > node.offsetHeight)
            top = pos.y - node.offsetHeight;
          if (left + node.offsetWidth > hspace)
            left = hspace - node.offsetWidth;
        }
        node.style.top = (top + paddingTop()) + "px";
        node.style.left = node.style.right = "";
        if (horiz == "right") {
          left = code.clientWidth - node.offsetWidth;
          node.style.right = "0px";
        } else {
          if (horiz == "left") left = 0;
          else if (horiz == "middle") left = (code.clientWidth - node.offsetWidth) / 2;
          node.style.left = (left + paddingLeft()) + "px";
        }
        if (scroll)
          scrollIntoView(left, top, left + node.offsetWidth, top + node.offsetHeight);
      },

      lineCount: function() {return doc.size;},
      clipPos: clipPos,
      getCursor: function(start) {
        if (start == null) start = sel.inverted;
        return copyPos(start ? sel.from : sel.to);
      },
      somethingSelected: function() {return !posEq(sel.from, sel.to);},
      setCursor: operation(function(line, ch, user) {
        if (ch == null && typeof line.line == "number") setCursor(line.line, line.ch, user);
        else setCursor(line, ch, user);
      }),
      setSelection: operation(function(from, to, user) {
        (user ? setSelectionUser : setSelection)(clipPos(from), clipPos(to || from));
      }),
      getLine: function(line) {if (isLine(line)) return getLine(line).text;},
      getLineHandle: function(line) {if (isLine(line)) return getLine(line);},
      setLine: operation(function(line, text) {
        if (isLine(line)) replaceRange(text, {line: line, ch: 0}, {line: line, ch: getLine(line).text.length});
      }),
      removeLine: operation(function(line) {
        if (isLine(line)) replaceRange("", {line: line, ch: 0}, clipPos({line: line+1, ch: 0}));
      }),
      replaceRange: operation(replaceRange),
      getRange: function(from, to, lineSep) {return getRange(clipPos(from), clipPos(to), lineSep);},

      triggerOnKeyDown: operation(onKeyDown),
      execCommand: function(cmd) {return commands[cmd](instance);},
      // Stuff used by commands, probably not much use to outside code.
      moveH: operation(moveH),
      deleteH: operation(deleteH),
      moveV: operation(moveV),
      toggleOverwrite: function() {
        if(overwrite){
          overwrite = false;
          cursor.className = cursor.className.replace(" CodeMirror-overwrite", "");
        } else {
          overwrite = true;
          cursor.className += " CodeMirror-overwrite";
        }
      },

      posFromIndex: function(off) {
        var lineNo = 0, ch;
        doc.iter(0, doc.size, function(line) {
          var sz = line.text.length + 1;
          if (sz > off) { ch = off; return true; }
          off -= sz;
          ++lineNo;
        });
        return clipPos({line: lineNo, ch: ch});
      },
      indexFromPos: function (coords) {
        if (coords.line < 0 || coords.ch < 0) return 0;
        var index = coords.ch;
        doc.iter(0, coords.line, function (line) {
          index += line.text.length + 1;
        });
        return index;
      },
      scrollTo: function(x, y) {
        if (x != null) scroller.scrollLeft = x;
        if (y != null) scrollbar.scrollTop = y;
        updateDisplay([]);
      },
      getScrollInfo: function() {
        return {x: scroller.scrollLeft, y: scrollbar.scrollTop,
                height: scrollbar.scrollHeight, width: scroller.scrollWidth};
      },
      setSize: function(width, height) {
        function interpret(val) {
          val = String(val);
          return /^\d+$/.test(val) ? val + "px" : val;
        }
        if (width != null) wrapper.style.width = interpret(width);
        if (height != null) scroller.style.height = interpret(height);
      },

      operation: function(f){return operation(f)();},
      compoundChange: function(f){return compoundChange(f);},
      refresh: function(){
        updateDisplay(true, null, lastScrollTop);
        if (scrollbar.scrollHeight > lastScrollTop)
          scrollbar.scrollTop = lastScrollTop;
      },
      getInputField: function(){return input;},
      getWrapperElement: function(){return wrapper;},
      getScrollerElement: function(){return scroller;},
      getGutterElement: function(){return gutter;}
    };

    function getLine(n) { return getLineAt(doc, n); }
    function updateLineHeight(line, height) {
      gutterDirty = true;
      var diff = height - line.height;
      for (var n = line; n; n = n.parent) n.height += diff;
    }

    function setValue(code) {
      var top = {line: 0, ch: 0};
      updateLines(top, {line: doc.size - 1, ch: getLine(doc.size-1).text.length},
                  splitLines(code), top, top);
      updateInput = true;
    }
    function getValue(lineSep) {
      var text = [];
      doc.iter(0, doc.size, function(line) { text.push(line.text); });
      return text.join(lineSep || "\n");
    }

    function onScroll(e) {
      if (scroller.scrollTop) {
        scrollbar.scrollTop += scroller.scrollTop;
        scroller.scrollTop = 0;
      }
      if (lastScrollTop != scrollbar.scrollTop || lastScrollLeft != scroller.scrollLeft) {
        lastScrollTop = scrollbar.scrollTop;
        lastScrollLeft = scroller.scrollLeft;
        updateDisplay([]);
        if (options.fixedGutter) gutter.style.left = scroller.scrollLeft + "px";
        if (options.onScroll) options.onScroll(instance);
      }
    }

    function onMouseDown(e) {
      setShift(e_prop(e, "shiftKey"));
      // Check whether this is a click in a widget
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == code && n != mover) return;

      // See if this is a click in the gutter
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == gutterText) {
          if (options.onGutterClick)
            options.onGutterClick(instance, indexOf(gutterText.childNodes, n) + showingFrom, e);
          return e_preventDefault(e);
        }

      var start = posFromMouse(e);

      switch (e_button(e)) {
      case 3:
        if (gecko) onContextMenu(e);
        return;
      case 2:
        if (start) setCursor(start.line, start.ch, true);
        setTimeout(focusInput, 20);
        e_preventDefault(e);
        return;
      }
      // For button 1, if it was clicked inside the editor
      // (posFromMouse returning non-null), we have to adjust the
      // selection.
      if (!start) {if (e_target(e) == scroller) e_preventDefault(e); return;}

      if (!focused) onFocus();

      var now = +new Date, type = "single";
      if (lastDoubleClick && lastDoubleClick.time > now - 400 && posEq(lastDoubleClick.pos, start)) {
        type = "triple";
        e_preventDefault(e);
        setTimeout(focusInput, 20);
        selectLine(start.line);
      } else if (lastClick && lastClick.time > now - 400 && posEq(lastClick.pos, start)) {
        type = "double";
        lastDoubleClick = {time: now, pos: start};
        e_preventDefault(e);
        var word = findWordAt(start);
        setSelectionUser(word.from, word.to);
      } else { lastClick = {time: now, pos: start}; }

      var last = start, going;
      if (options.dragDrop && dragAndDrop && !options.readOnly && !posEq(sel.from, sel.to) &&
          !posLess(start, sel.from) && !posLess(sel.to, start) && type == "single") {
        // Let the drag handler handle this.
        if (webkit) scroller.draggable = true;
        function dragEnd(e2) {
          if (webkit) scroller.draggable = false;
          draggingText = false;
          up(); drop();
          if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
            e_preventDefault(e2);
            setCursor(start.line, start.ch, true);
            focusInput();
          }
        }
        var up = connect(document, "mouseup", operation(dragEnd), true);
        var drop = connect(scroller, "drop", operation(dragEnd), true);
        draggingText = true;
        // IE's approach to draggable
        if (scroller.dragDrop) scroller.dragDrop();
        return;
      }
      e_preventDefault(e);
      if (type == "single") setCursor(start.line, start.ch, true);

      var startstart = sel.from, startend = sel.to;

      function doSelect(cur) {
        if (type == "single") {
          setSelectionUser(start, cur);
        } else if (type == "double") {
          var word = findWordAt(cur);
          if (posLess(cur, startstart)) setSelectionUser(word.from, startend);
          else setSelectionUser(startstart, word.to);
        } else if (type == "triple") {
          if (posLess(cur, startstart)) setSelectionUser(startend, clipPos({line: cur.line, ch: 0}));
          else setSelectionUser(startstart, clipPos({line: cur.line + 1, ch: 0}));
        }
      }

      function extend(e) {
        var cur = posFromMouse(e, true);
        if (cur && !posEq(cur, last)) {
          if (!focused) onFocus();
          last = cur;
          doSelect(cur);
          updateInput = false;
          var visible = visibleLines();
          if (cur.line >= visible.to || cur.line < visible.from)
            going = setTimeout(operation(function(){extend(e);}), 150);
        }
      }

      function done(e) {
        clearTimeout(going);
        var cur = posFromMouse(e);
        if (cur) doSelect(cur);
        e_preventDefault(e);
        focusInput();
        updateInput = true;
        move(); up();
      }
      var move = connect(document, "mousemove", operation(function(e) {
        clearTimeout(going);
        e_preventDefault(e);
        if (!ie && !e_button(e)) done(e);
        else extend(e);
      }), true);
      var up = connect(document, "mouseup", operation(done), true);
    }
    function onDoubleClick(e) {
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == gutterText) return e_preventDefault(e);
      e_preventDefault(e);
    }
    function onDrop(e) {
      if (options.onDragEvent && options.onDragEvent(instance, addStop(e))) return;
      e.preventDefault();
      var pos = posFromMouse(e, true), files = e.dataTransfer.files;
      if (!pos || options.readOnly) return;
      if (files && files.length && window.FileReader && window.File) {
        function loadFile(file, i) {
          var reader = new FileReader;
          reader.onload = function() {
            text[i] = reader.result;
            if (++read == n) {
              pos = clipPos(pos);
              operation(function() {
                var end = replaceRange(text.join(""), pos, pos);
                setSelectionUser(pos, end);
              })();
            }
          };
          reader.readAsText(file);
        }
        var n = files.length, text = Array(n), read = 0;
        for (var i = 0; i < n; ++i) loadFile(files[i], i);
      } else {
        // Don't do a replace if the drop happened inside of the selected text.
        if (draggingText && !(posLess(pos, sel.from) || posLess(sel.to, pos))) return;
        try {
          var text = e.dataTransfer.getData("Text");
          if (text) {
            compoundChange(function() {
              var curFrom = sel.from, curTo = sel.to;
              setSelectionUser(pos, pos);
              if (draggingText) replaceRange("", curFrom, curTo);
              replaceSelection(text);
              focusInput();
            });
          }
        }
        catch(e){}
      }
    }
    function onDragStart(e) {
      var txt = getSelection();
      e.dataTransfer.setData("Text", txt);
      
      // Use dummy image instead of default browsers image.
      if (gecko || chrome || opera) {
        var img = document.createElement('img');
        img.scr = 'data:image/gif;base64,R0lGODdhAgACAIAAAAAAAP///ywAAAAAAgACAAACAoRRADs='; //1x1 image
        e.dataTransfer.setDragImage(img, 0, 0);
      }
    }

    function doHandleBinding(bound, dropShift) {
      if (typeof bound == "string") {
        bound = commands[bound];
        if (!bound) return false;
      }
      var prevShift = shiftSelecting;
      try {
        if (options.readOnly) suppressEdits = true;
        if (dropShift) shiftSelecting = null;
        bound(instance);
      } catch(e) {
        if (e != Pass) throw e;
        return false;
      } finally {
        shiftSelecting = prevShift;
        suppressEdits = false;
      }
      return true;
    }
    function handleKeyBinding(e) {
      // Handle auto keymap transitions
      var startMap = getKeyMap(options.keyMap), next = startMap.auto;
      clearTimeout(maybeTransition);
      if (next && !isModifierKey(e)) maybeTransition = setTimeout(function() {
        if (getKeyMap(options.keyMap) == startMap) {
          options.keyMap = (next.call ? next.call(null, instance) : next);
        }
      }, 50);

      var name = keyNames[e_prop(e, "keyCode")], handled = false;
      if (name == null || e.altGraphKey) return false;
      if (e_prop(e, "altKey")) name = "Alt-" + name;
      if (e_prop(e, "ctrlKey")) name = "Ctrl-" + name;
      if (e_prop(e, "metaKey")) name = "Cmd-" + name;

      var stopped = false;
      function stop() { stopped = true; }

      if (e_prop(e, "shiftKey")) {
        handled = lookupKey("Shift-" + name, options.extraKeys, options.keyMap,
                            function(b) {return doHandleBinding(b, true);}, stop)
               || lookupKey(name, options.extraKeys, options.keyMap, function(b) {
                 if (typeof b == "string" && /^go[A-Z]/.test(b)) return doHandleBinding(b);
               }, stop);
      } else {
        handled = lookupKey(name, options.extraKeys, options.keyMap, doHandleBinding, stop);
      }
      if (stopped) handled = false;
      if (handled) {
        e_preventDefault(e);
        restartBlink();
        if (ie) { e.oldKeyCode = e.keyCode; e.keyCode = 0; }
      }
      return handled;
    }
    function handleCharBinding(e, ch) {
      var handled = lookupKey("'" + ch + "'", options.extraKeys,
                              options.keyMap, function(b) { return doHandleBinding(b, true); });
      if (handled) {
        e_preventDefault(e);
        restartBlink();
      }
      return handled;
    }

    var lastStoppedKey = null, maybeTransition;
    function onKeyDown(e) {
      if (!focused) onFocus();
      if (ie && e.keyCode == 27) { e.returnValue = false; }
      if (pollingFast) { if (readInput()) pollingFast = false; }
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;
      var code = e_prop(e, "keyCode");
      // IE does strange things with escape.
      setShift(code == 16 || e_prop(e, "shiftKey"));
      // First give onKeyEvent option a chance to handle this.
      var handled = handleKeyBinding(e);
      if (opera) {
        lastStoppedKey = handled ? code : null;
        // Opera has no cut event... we try to at least catch the key combo
        if (!handled && code == 88 && e_prop(e, mac ? "metaKey" : "ctrlKey"))
          replaceSelection("");
      }
    }
    function onKeyPress(e) {
      if (pollingFast) readInput();
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;
      var keyCode = e_prop(e, "keyCode"), charCode = e_prop(e, "charCode");
      if (opera && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
      if (((opera && (!e.which || e.which < 10)) || khtml) && handleKeyBinding(e)) return;
      var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
      if (options.electricChars && mode.electricChars && options.smartIndent && !options.readOnly) {
        if (mode.electricChars.indexOf(ch) > -1)
          setTimeout(operation(function() {indentLine(sel.to.line, "smart");}), 75);
      }
      if (handleCharBinding(e, ch)) return;
      fastPoll();
    }
    function onKeyUp(e) {
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;
      if (e_prop(e, "keyCode") == 16) shiftSelecting = null;
    }

    function onFocus() {
      if (options.readOnly == "nocursor") return;
      if (!focused) {
        if (options.onFocus) options.onFocus(instance);
        focused = true;
        if (scroller.className.search(/\bCodeMirror-focused\b/) == -1)
          scroller.className += " CodeMirror-focused";
        if (!leaveInputAlone) resetInput(true);
      }
      slowPoll();
      restartBlink();
    }
    function onBlur() {
      if (focused) {
        if (options.onBlur) options.onBlur(instance);
        focused = false;
        if (bracketHighlighted)
          operation(function(){
            if (bracketHighlighted) { bracketHighlighted(); bracketHighlighted = null; }
          })();
        scroller.className = scroller.className.replace(" CodeMirror-focused", "");
      }
      clearInterval(blinker);
      setTimeout(function() {if (!focused) shiftSelecting = null;}, 150);
    }

    function chopDelta(delta) {
      // Make sure we always scroll a little bit for any nonzero delta.
      if (delta > 0.0 && delta < 1.0) return 1;
      else if (delta > -1.0 && delta < 0.0) return -1;
      else return Math.round(delta);
    }

    function onMouseWheel(e) {
      var deltaX = 0, deltaY = 0;
      if (e.type == "DOMMouseScroll") { // Firefox
        var delta = -e.detail * 8.0;
        if (e.axis == e.HORIZONTAL_AXIS) deltaX = delta;
        else if (e.axis == e.VERTICAL_AXIS) deltaY = delta;
      } else if (e.wheelDeltaX !== undefined && e.wheelDeltaY !== undefined) { // WebKit
        deltaX = e.wheelDeltaX / 3.0;
        deltaY = e.wheelDeltaY / 3.0;
      } else if (e.wheelDelta !== undefined) { // IE or Opera
        deltaY = e.wheelDelta / 3.0;
      }

      var scrolled = false;
      deltaX = chopDelta(deltaX);
      deltaY = chopDelta(deltaY);
      if ((deltaX > 0 && scroller.scrollLeft > 0) ||
          (deltaX < 0 && scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth)) {
        scroller.scrollLeft -= deltaX;
        scrolled = true;
      }
      if ((deltaY > 0 && scrollbar.scrollTop > 0) ||
          (deltaY < 0 && scrollbar.scrollTop + scrollbar.clientHeight < scrollbar.scrollHeight)) {
        scrollbar.scrollTop -= deltaY;
        scrolled = true;
      }
      if (scrolled) e_stop(e);
    }

    // Replace the range from from to to by the strings in newText.
    // Afterwards, set the selection to selFrom, selTo.
    function updateLines(from, to, newText, selFrom, selTo) {
      if (suppressEdits) return;
      if (history) {
        var old = [];
        doc.iter(from.line, to.line + 1, function(line) { old.push(line.text); });
        history.addChange(from.line, newText.length, old);
        while (history.done.length > options.undoDepth) history.done.shift();
      }
      updateLinesNoUndo(from, to, newText, selFrom, selTo);
    }
    function unredoHelper(from, to) {
      if (!from.length) return;
      var set = from.pop(), out = [];
      for (var i = set.length - 1; i >= 0; i -= 1) {
        var change = set[i];
        var replaced = [], end = change.start + change.added;
        doc.iter(change.start, end, function(line) { replaced.push(line.text); });
        out.push({start: change.start, added: change.old.length, old: replaced});
        var pos = {line: change.start + change.old.length - 1,
                   ch: editEnd(replaced[replaced.length-1], change.old[change.old.length-1])};
        updateLinesNoUndo({line: change.start, ch: 0}, {line: end - 1, ch: getLine(end-1).text.length}, change.old, pos, pos);
      }
      updateInput = true;
      to.push(out);
    }
    function undo() {unredoHelper(history.done, history.undone);}
    function redo() {unredoHelper(history.undone, history.done);}

    function updateLinesNoUndo(from, to, newText, selFrom, selTo) {
      if (suppressEdits) return;
      var recomputeMaxLength = false, maxLineLength = maxLine.length;
      if (!options.lineWrapping)
        doc.iter(from.line, to.line + 1, function(line) {
          if (!line.hidden && line.text.length == maxLineLength) {recomputeMaxLength = true; return true;}
        });
      if (from.line != to.line || newText.length > 1) gutterDirty = true;

      var nlines = to.line - from.line, firstLine = getLine(from.line), lastLine = getLine(to.line);
      // First adjust the line structure, taking some care to leave highlighting intact.
      if (from.ch == 0 && to.ch == 0 && newText[newText.length - 1] == "") {
        // This is a whole-line replace. Treated specially to make
        // sure line objects move the way they are supposed to.
        var added = [], prevLine = null;
        if (from.line) {
          prevLine = getLine(from.line - 1);
          prevLine.fixMarkEnds(lastLine);
        } else lastLine.fixMarkStarts();
        for (var i = 0, e = newText.length - 1; i < e; ++i)
          added.push(Line.inheritMarks(newText[i], prevLine));
        if (nlines) doc.remove(from.line, nlines, callbacks);
        if (added.length) doc.insert(from.line, added);
      } else if (firstLine == lastLine) {
        if (newText.length == 1)
          firstLine.replace(from.ch, to.ch, newText[0]);
        else {
          lastLine = firstLine.split(to.ch, newText[newText.length-1]);
          firstLine.replace(from.ch, null, newText[0]);
          firstLine.fixMarkEnds(lastLine);
          var added = [];
          for (var i = 1, e = newText.length - 1; i < e; ++i)
            added.push(Line.inheritMarks(newText[i], firstLine));
          added.push(lastLine);
          doc.insert(from.line + 1, added);
        }
      } else if (newText.length == 1) {
        firstLine.replace(from.ch, null, newText[0]);
        lastLine.replace(null, to.ch, "");
        firstLine.append(lastLine);
        doc.remove(from.line + 1, nlines, callbacks);
      } else {
        var added = [];
        firstLine.replace(from.ch, null, newText[0]);
        lastLine.replace(null, to.ch, newText[newText.length-1]);
        firstLine.fixMarkEnds(lastLine);
        for (var i = 1, e = newText.length - 1; i < e; ++i)
          added.push(Line.inheritMarks(newText[i], firstLine));
        if (nlines > 1) doc.remove(from.line + 1, nlines - 1, callbacks);
        doc.insert(from.line + 1, added);
      }
      if (options.lineWrapping) {
        var perLine = Math.max(5, scroller.clientWidth / charWidth() - 3);
        doc.iter(from.line, from.line + newText.length, function(line) {
          if (line.hidden) return;
          var guess = Math.ceil(line.text.length / perLine) || 1;
          if (guess != line.height) updateLineHeight(line, guess);
        });
      } else {
        doc.iter(from.line, from.line + newText.length, function(line) {
          var l = line.text;
          if (!line.hidden && l.length > maxLineLength) {
            maxLine = l; maxLineLength = l.length; maxLineChanged = true;
            recomputeMaxLength = false;
          }
        });
        if (recomputeMaxLength) updateMaxLine = true;
      }

      // Add these lines to the work array, so that they will be
      // highlighted. Adjust work lines if lines were added/removed.
      var newWork = [], lendiff = newText.length - nlines - 1;
      for (var i = 0, l = work.length; i < l; ++i) {
        var task = work[i];
        if (task < from.line) newWork.push(task);
        else if (task > to.line) newWork.push(task + lendiff);
      }
      var hlEnd = from.line + Math.min(newText.length, 500);
      highlightLines(from.line, hlEnd);
      newWork.push(hlEnd);
      work = newWork;
      startWorker(100);
      // Remember that these lines changed, for updating the display
      changes.push({from: from.line, to: to.line + 1, diff: lendiff});
      var changeObj = {from: from, to: to, text: newText};
      if (textChanged) {
        for (var cur = textChanged; cur.next; cur = cur.next) {}
        cur.next = changeObj;
      } else textChanged = changeObj;

      // Update the selection
      function updateLine(n) {return n <= Math.min(to.line, to.line + lendiff) ? n : n + lendiff;}
      setSelection(clipPos(selFrom), clipPos(selTo),
                   updateLine(sel.from.line), updateLine(sel.to.line));
    }

    function needsScrollbar() {
      var realHeight = doc.height * textHeight() + 2 * paddingTop();
      return realHeight - 1 > scroller.offsetHeight ? realHeight : false;
    }

    function updateVerticalScroll(scrollTop) {
      var scrollHeight = needsScrollbar();
      scrollbar.style.display = scrollHeight ? "block" : "none";
      if (scrollHeight) {
        scrollbarInner.style.height = scrollHeight + "px";
        scrollbar.style.height = scroller.offsetHeight + "px";
        if (scrollTop != null) scrollbar.scrollTop = scrollTop;
      }
      // Position the mover div to align with the current virtual scroll position
      mover.style.top = (displayOffset * textHeight() - scrollbar.scrollTop) + "px";
    }
  
    // On Mac OS X Lion and up, detect whether the mouse is plugged in by measuring 
    // the width of a div with a scrollbar in it. If the width is <= 1, then
    // the mouse isn't plugged in and scrollbars should overlap the content.
    function overlapScrollbars() {
      var tmpSb = document.createElement('div'),
          tmpSbInner = document.createElement('div');
      tmpSb.className = "CodeMirror-scrollbar";
      tmpSb.style.cssText = "position: absolute; left: -9999px; height: 100px;";
      tmpSbInner.className = "CodeMirror-scrollbar-inner";
      tmpSbInner.style.height = "200px";
      tmpSb.appendChild(tmpSbInner);

      document.body.appendChild(tmpSb);
      var result = (tmpSb.offsetWidth <= 1);
      document.body.removeChild(tmpSb);
      return result;
    }

    function computeMaxLength() {
      var maxLineLength = 0; 
      maxLine = ""; maxLineChanged = true;
      doc.iter(0, doc.size, function(line) {
        var l = line.text;
        if (!line.hidden && l.length > maxLineLength) {
          maxLineLength = l.length; maxLine = l;
        }
      });
      updateMaxLine = false;
    }

    function replaceRange(code, from, to) {
      from = clipPos(from);
      if (!to) to = from; else to = clipPos(to);
      code = splitLines(code);
      function adjustPos(pos) {
        if (posLess(pos, from)) return pos;
        if (!posLess(to, pos)) return end;
        var line = pos.line + code.length - (to.line - from.line) - 1;
        var ch = pos.ch;
        if (pos.line == to.line)
          ch += code[code.length-1].length - (to.ch - (to.line == from.line ? from.ch : 0));
        return {line: line, ch: ch};
      }
      var end;
      replaceRange1(code, from, to, function(end1) {
        end = end1;
        return {from: adjustPos(sel.from), to: adjustPos(sel.to)};
      });
      return end;
    }
    function replaceSelection(code, collapse) {
      replaceRange1(splitLines(code), sel.from, sel.to, function(end) {
        if (collapse == "end") return {from: end, to: end};
        else if (collapse == "start") return {from: sel.from, to: sel.from};
        else return {from: sel.from, to: end};
      });
    }
    function replaceRange1(code, from, to, computeSel) {
      var endch = code.length == 1 ? code[0].length + from.ch : code[code.length-1].length;
      var newSel = computeSel({line: from.line + code.length - 1, ch: endch});
      updateLines(from, to, code, newSel.from, newSel.to);
    }

    function getRange(from, to, lineSep) {
      var l1 = from.line, l2 = to.line;
      if (l1 == l2) return getLine(l1).text.slice(from.ch, to.ch);
      var code = [getLine(l1).text.slice(from.ch)];
      doc.iter(l1 + 1, l2, function(line) { code.push(line.text); });
      code.push(getLine(l2).text.slice(0, to.ch));
      return code.join(lineSep || "\n");
    }
    function getSelection(lineSep) {
      return getRange(sel.from, sel.to, lineSep);
    }

    var pollingFast = false; // Ensures slowPoll doesn't cancel fastPoll
    function slowPoll() {
      if (pollingFast) return;
      poll.set(options.pollInterval, function() {
        startOperation();
        readInput();
        if (focused) slowPoll();
        endOperation();
      });
    }
    function fastPoll() {
      var missed = false;
      pollingFast = true;
      function p() {
        startOperation();
        var changed = readInput();
        if (!changed && !missed) {missed = true; poll.set(60, p);}
        else {pollingFast = false; slowPoll();}
        endOperation();
      }
      poll.set(20, p);
    }

    // Previnput is a hack to work with IME. If we reset the textarea
    // on every change, that breaks IME. So we look for changes
    // compared to the previous content instead. (Modern browsers have
    // events that indicate IME taking place, but these are not widely
    // supported or compatible enough yet to rely on.)
    var prevInput = "";
    function readInput() {
      if (leaveInputAlone || !focused || hasSelection(input) || options.readOnly) return false;
      var text = input.value;
      if (text == prevInput) return false;
      shiftSelecting = null;
      var same = 0, l = Math.min(prevInput.length, text.length);
      while (same < l && prevInput[same] == text[same]) ++same;
      if (same < prevInput.length)
        sel.from = {line: sel.from.line, ch: sel.from.ch - (prevInput.length - same)};
      else if (overwrite && posEq(sel.from, sel.to))
        sel.to = {line: sel.to.line, ch: Math.min(getLine(sel.to.line).text.length, sel.to.ch + (text.length - same))};
      replaceSelection(text.slice(same), "end");
      if (text.length > 1000) { input.value = prevInput = ""; }
      else prevInput = text;
      return true;
    }
    function resetInput(user) {
      if (!posEq(sel.from, sel.to)) {
        prevInput = "";
        input.value = getSelection();
        selectInput(input);
      } else if (user) prevInput = input.value = "";
    }

    function focusInput() {
      if (options.readOnly != "nocursor") input.focus();
    }

    function scrollEditorIntoView() {
      var rect = cursor.getBoundingClientRect();
      // IE returns bogus coordinates when the instance sits inside of an iframe and the cursor is hidden
      if (ie && rect.top == rect.bottom) return;
      var winH = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
      if (rect.top < 0 || rect.bottom > winH) scrollCursorIntoView();
    }
    function scrollCursorIntoView() {
      var coords = calculateCursorCoords();
      return scrollIntoView(coords.x, coords.y, coords.x, coords.yBot);
    }
    function calculateCursorCoords() {
      var cursor = localCoords(sel.inverted ? sel.from : sel.to);
      var x = options.lineWrapping ? Math.min(cursor.x, lineSpace.offsetWidth) : cursor.x;
      return {x: x, y: cursor.y, yBot: cursor.yBot};
    }
    function scrollIntoView(x1, y1, x2, y2) {
      var scrollPos = calculateScrollPos(x1, y1, x2, y2), scrolled = false;
      if (scrollPos.scrollLeft != null) {scroller.scrollLeft = scrollPos.scrollLeft; scrolled = true;}
      if (scrollPos.scrollTop != null) {scrollbar.scrollTop = scrollPos.scrollTop; scrolled = true;}
      if (scrolled && options.onScroll) options.onScroll(instance);
    }
    function calculateScrollPos(x1, y1, x2, y2) {
      var pl = paddingLeft(), pt = paddingTop();
      y1 += pt; y2 += pt; x1 += pl; x2 += pl;
      var screen = scroller.clientHeight, screentop = scrollbar.scrollTop, result = {};
      var docBottom = scroller.scrollHeight;
      var atTop = y1 < pt + 10, atBottom = y2 + pt > docBottom - 10;;
      if (y1 < screentop) result.scrollTop = atTop ? 0 : Math.max(0, y1);
      else if (y2 > screentop + screen) result.scrollTop = (atBottom ? docBottom : y2) - screen;

      var screenw = scroller.clientWidth, screenleft = scroller.scrollLeft;
      var gutterw = options.fixedGutter ? gutter.clientWidth : 0;
      var atLeft = x1 < gutterw + pl + 10;
      if (x1 < screenleft + gutterw || atLeft) {
        if (atLeft) x1 = 0;
        result.scrollLeft = Math.max(0, x1 - 10 - gutterw);
      } else if (x2 > screenw + screenleft - 3) {
        result.scrollLeft = x2 + 10 - screenw;
      }
      return result;
    }

    function visibleLines(scrollTop) {
      var lh = textHeight(), top = (scrollTop != null ? scrollTop : scrollbar.scrollTop) - paddingTop();
      var fromHeight = Math.max(0, Math.floor(top / lh));
      var toHeight = Math.ceil((top + scroller.clientHeight) / lh);
      return {from: lineAtHeight(doc, fromHeight),
              to: lineAtHeight(doc, toHeight)};
    }
    // Uses a set of changes plus the current scroll position to
    // determine which DOM updates have to be made, and makes the
    // updates.
    function updateDisplay(changes, suppressCallback, scrollTop) {
      if (!scroller.clientWidth) {
        showingFrom = showingTo = displayOffset = 0;
        return;
      }
      // Compute the new visible window
      // If scrollTop is specified, use that to determine which lines
      // to render instead of the current scrollbar position.
      var visible = visibleLines(scrollTop);
      // Bail out if the visible area is already rendered and nothing changed.
      if (changes !== true && changes.length == 0 && visible.from > showingFrom && visible.to < showingTo) {
        updateVerticalScroll(scrollTop);
        return;
      }
      var from = Math.max(visible.from - 100, 0), to = Math.min(doc.size, visible.to + 100);
      if (showingFrom < from && from - showingFrom < 20) from = showingFrom;
      if (showingTo > to && showingTo - to < 20) to = Math.min(doc.size, showingTo);

      // Create a range of theoretically intact lines, and punch holes
      // in that using the change info.
      var intact = changes === true ? [] :
        computeIntact([{from: showingFrom, to: showingTo, domStart: 0}], changes);
      // Clip off the parts that won't be visible
      var intactLines = 0;
      for (var i = 0; i < intact.length; ++i) {
        var range = intact[i];
        if (range.from < from) {range.domStart += (from - range.from); range.from = from;}
        if (range.to > to) range.to = to;
        if (range.from >= range.to) intact.splice(i--, 1);
        else intactLines += range.to - range.from;
      }
      if (intactLines == to - from && from == showingFrom && to == showingTo) {
        updateVerticalScroll(scrollTop);
        return;
      }
      intact.sort(function(a, b) {return a.domStart - b.domStart;});

      var th = textHeight(), gutterDisplay = gutter.style.display;
      lineDiv.style.display = "none";
      patchDisplay(from, to, intact);
      lineDiv.style.display = gutter.style.display = "";

      var different = from != showingFrom || to != showingTo || lastSizeC != scroller.clientHeight + th;
      // This is just a bogus formula that detects when the editor is
      // resized or the font size changes.
      if (different) lastSizeC = scroller.clientHeight + th;
      showingFrom = from; showingTo = to;
      displayOffset = heightAtLine(doc, from);

      // Since this is all rather error prone, it is honoured with the
      // only assertion in the whole file.
      if (lineDiv.childNodes.length != showingTo - showingFrom)
        throw new Error("BAD PATCH! " + JSON.stringify(intact) + " size=" + (showingTo - showingFrom) +
                        " nodes=" + lineDiv.childNodes.length);

      function checkHeights() {
        var curNode = lineDiv.firstChild, heightChanged = false;
        doc.iter(showingFrom, showingTo, function(line) {
          if (!line.hidden) {
            var height = Math.round(curNode.offsetHeight / th) || 1;
            if (line.height != height) {
              updateLineHeight(line, height);
              gutterDirty = heightChanged = true;
            }
          }
          curNode = curNode.nextSibling;
        });
        return heightChanged;
      }

      if (options.lineWrapping) {
        checkHeights();
        var scrollHeight = needsScrollbar();
        var shouldHaveScrollbar = scrollHeight ? "block" : "none";
        if (scrollbar.style.display != shouldHaveScrollbar) {
          scrollbar.style.display = shouldHaveScrollbar;
          scrollbarInner.style.height = scrollHeight + "px";
          checkHeights();
        }
      }

      gutter.style.display = gutterDisplay;
      if (different || gutterDirty) {
        // If the gutter grew in size, re-check heights. If those changed, re-draw gutter.
        updateGutter() && options.lineWrapping && checkHeights() && updateGutter();
      }
      updateVerticalScroll(scrollTop);
      updateSelection();
      if (!suppressCallback && options.onUpdate) options.onUpdate(instance);
      return true;
    }

    function computeIntact(intact, changes) {
      for (var i = 0, l = changes.length || 0; i < l; ++i) {
        var change = changes[i], intact2 = [], diff = change.diff || 0;
        for (var j = 0, l2 = intact.length; j < l2; ++j) {
          var range = intact[j];
          if (change.to <= range.from && change.diff)
            intact2.push({from: range.from + diff, to: range.to + diff,
                          domStart: range.domStart});
          else if (change.to <= range.from || change.from >= range.to)
            intact2.push(range);
          else {
            if (change.from > range.from)
              intact2.push({from: range.from, to: change.from, domStart: range.domStart});
            if (change.to < range.to)
              intact2.push({from: change.to + diff, to: range.to + diff,
                            domStart: range.domStart + (change.to - range.from)});
          }
        }
        intact = intact2;
      }
      return intact;
    }

    function patchDisplay(from, to, intact) {
      // The first pass removes the DOM nodes that aren't intact.
      if (!intact.length) lineDiv.innerHTML = "";
      else {
        function killNode(node) {
          var tmp = node.nextSibling;
          node.parentNode.removeChild(node);
          return tmp;
        }
        var domPos = 0, curNode = lineDiv.firstChild, n;
        for (var i = 0; i < intact.length; ++i) {
          var cur = intact[i];
          while (cur.domStart > domPos) {curNode = killNode(curNode); domPos++;}
          for (var j = 0, e = cur.to - cur.from; j < e; ++j) {curNode = curNode.nextSibling; domPos++;}
        }
        while (curNode) curNode = killNode(curNode);
      }
      // This pass fills in the lines that actually changed.
      var nextIntact = intact.shift(), curNode = lineDiv.firstChild, j = from;
      var scratch = document.createElement("div");
      doc.iter(from, to, function(line) {
        if (nextIntact && nextIntact.to == j) nextIntact = intact.shift();
        if (!nextIntact || nextIntact.from > j) {
          if (line.hidden) var html = scratch.innerHTML = "<pre></pre>";
          else {
            var html = '<pre' + (line.className ? ' class="' + line.className + '"' : '') + '>'
              + line.getHTML(makeTab) + '</pre>';
            // Kludge to make sure the styled element lies behind the selection (by z-index)
            if (line.bgClassName)
              html = '<div style="position: relative"><pre class="' + line.bgClassName +
              '" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2">&#160;</pre>' + html + "</div>";
          }
          scratch.innerHTML = html;
          lineDiv.insertBefore(scratch.firstChild, curNode);
        } else {
          curNode = curNode.nextSibling;
        }
        ++j;
      });
    }

    function updateGutter() {
      if (!options.gutter && !options.lineNumbers) return;
      var hText = mover.offsetHeight, hEditor = scroller.clientHeight;
      gutter.style.height = (hText - hEditor < 2 ? hEditor : hText) + "px";
      var html = [], i = showingFrom, normalNode;
      doc.iter(showingFrom, Math.max(showingTo, showingFrom + 1), function(line) {
        if (line.hidden) {
          html.push("<pre></pre>");
        } else {
          var marker = line.gutterMarker;
          var text = options.lineNumbers ? options.lineNumberFormatter(i + options.firstLineNumber) : null;
          if (marker && marker.text)
            text = marker.text.replace("%N%", text != null ? text : "");
          else if (text == null)
            text = "\u00a0";
          html.push((marker && marker.style ? '<pre class="' + marker.style + '">' : "<pre>"), text);
          for (var j = 1; j < line.height; ++j) html.push("<br/>&#160;");
          html.push("</pre>");
          if (!marker) normalNode = i;
        }
        ++i;
      });
      gutter.style.display = "none";
      gutterText.innerHTML = html.join("");
      // Make sure scrolling doesn't cause number gutter size to pop
      if (normalNode != null && options.lineNumbers) {
        var node = gutterText.childNodes[normalNode - showingFrom];
        var minwidth = String(doc.size).length, val = eltText(node.firstChild), pad = "";
        while (val.length + pad.length < minwidth) pad += "\u00a0";
        if (pad) node.insertBefore(document.createTextNode(pad), node.firstChild);
      }
      gutter.style.display = "";
      var resized = Math.abs((parseInt(lineSpace.style.marginLeft) || 0) - gutter.offsetWidth) > 2;
      lineSpace.style.marginLeft = gutter.offsetWidth + "px";
      gutterDirty = false;
      return resized;
    }
    function updateSelection() {
      var collapsed = posEq(sel.from, sel.to);
      var fromPos = localCoords(sel.from, true);
      var toPos = collapsed ? fromPos : localCoords(sel.to, true);
      var headPos = sel.inverted ? fromPos : toPos, th = textHeight();
      var wrapOff = eltOffset(wrapper), lineOff = eltOffset(lineDiv);
      inputDiv.style.top = Math.max(0, Math.min(scroller.offsetHeight, headPos.y + lineOff.top - wrapOff.top)) + "px";
      inputDiv.style.left = Math.max(0, Math.min(scroller.offsetWidth, headPos.x + lineOff.left - wrapOff.left)) + "px";
      if (collapsed) {
        cursor.style.top = headPos.y + "px";
        cursor.style.left = (options.lineWrapping ? Math.min(headPos.x, lineSpace.offsetWidth) : headPos.x) + "px";
        cursor.style.display = "";
        selectionDiv.style.display = "none";
      } else {
        var sameLine = fromPos.y == toPos.y, html = "";
        var clientWidth = lineSpace.clientWidth || lineSpace.offsetWidth;
        var clientHeight = lineSpace.clientHeight || lineSpace.offsetHeight;
        function add(left, top, right, height) {
          var rstyle = quirksMode ? "width: " + (!right ? clientWidth : clientWidth - right - left) + "px"
                                  : "right: " + right + "px";
          html += '<div class="CodeMirror-selected" style="position: absolute; left: ' + left +
            'px; top: ' + top + 'px; ' + rstyle + '; height: ' + height + 'px"></div>';
        }
        if (sel.from.ch && fromPos.y >= 0) {
          var right = sameLine ? clientWidth - toPos.x : 0;
          add(fromPos.x, fromPos.y, right, th);
        }
        var middleStart = Math.max(0, fromPos.y + (sel.from.ch ? th : 0));
        var middleHeight = Math.min(toPos.y, clientHeight) - middleStart;
        if (middleHeight > 0.2 * th)
          add(0, middleStart, 0, middleHeight);
        if ((!sameLine || !sel.from.ch) && toPos.y < clientHeight - .5 * th)
          add(0, toPos.y, clientWidth - toPos.x, th);
        selectionDiv.innerHTML = html;
        cursor.style.display = "none";
        selectionDiv.style.display = "";
      }
    }

    function setShift(val) {
      if (val) shiftSelecting = shiftSelecting || (sel.inverted ? sel.to : sel.from);
      else shiftSelecting = null;
    }
    function setSelectionUser(from, to) {
      var sh = shiftSelecting && clipPos(shiftSelecting);
      if (sh) {
        if (posLess(sh, from)) from = sh;
        else if (posLess(to, sh)) to = sh;
      }
      setSelection(from, to);
      userSelChange = true;
    }
    // Update the selection. Last two args are only used by
    // updateLines, since they have to be expressed in the line
    // numbers before the update.
    function setSelection(from, to, oldFrom, oldTo) {
      goalColumn = null;
      if (oldFrom == null) {oldFrom = sel.from.line; oldTo = sel.to.line;}
      if (posEq(sel.from, from) && posEq(sel.to, to)) return;
      if (posLess(to, from)) {var tmp = to; to = from; from = tmp;}

      // Skip over hidden lines.
      if (from.line != oldFrom) {
        var from1 = skipHidden(from, oldFrom, sel.from.ch);
        // If there is no non-hidden line left, force visibility on current line
        if (!from1) setLineHidden(from.line, false);
        else from = from1;
      }
      if (to.line != oldTo) to = skipHidden(to, oldTo, sel.to.ch);

      if (posEq(from, to)) sel.inverted = false;
      else if (posEq(from, sel.to)) sel.inverted = false;
      else if (posEq(to, sel.from)) sel.inverted = true;

      if (options.autoClearEmptyLines && posEq(sel.from, sel.to)) {
        var head = sel.inverted ? from : to;
        if (head.line != sel.from.line && sel.from.line < doc.size) {
          var oldLine = getLine(sel.from.line);
          if (/^\s+$/.test(oldLine.text))
            setTimeout(operation(function() {
              if (oldLine.parent && /^\s+$/.test(oldLine.text)) {
                var no = lineNo(oldLine);
                replaceRange("", {line: no, ch: 0}, {line: no, ch: oldLine.text.length});
              }
            }, 10));
        }
      }

      sel.from = from; sel.to = to;
      selectionChanged = true;
    }
    function skipHidden(pos, oldLine, oldCh) {
      function getNonHidden(dir) {
        var lNo = pos.line + dir, end = dir == 1 ? doc.size : -1;
        while (lNo != end) {
          var line = getLine(lNo);
          if (!line.hidden) {
            var ch = pos.ch;
            if (toEnd || ch > oldCh || ch > line.text.length) ch = line.text.length;
            return {line: lNo, ch: ch};
          }
          lNo += dir;
        }
      }
      var line = getLine(pos.line);
      var toEnd = pos.ch == line.text.length && pos.ch != oldCh;
      if (!line.hidden) return pos;
      if (pos.line >= oldLine) return getNonHidden(1) || getNonHidden(-1);
      else return getNonHidden(-1) || getNonHidden(1);
    }
    function setCursor(line, ch, user) {
      var pos = clipPos({line: line, ch: ch || 0});
      (user ? setSelectionUser : setSelection)(pos, pos);
    }

    function clipLine(n) {return Math.max(0, Math.min(n, doc.size-1));}
    function clipPos(pos) {
      if (pos.line < 0) return {line: 0, ch: 0};
      if (pos.line >= doc.size) return {line: doc.size-1, ch: getLine(doc.size-1).text.length};
      var ch = pos.ch, linelen = getLine(pos.line).text.length;
      if (ch == null || ch > linelen) return {line: pos.line, ch: linelen};
      else if (ch < 0) return {line: pos.line, ch: 0};
      else return pos;
    }

    function findPosH(dir, unit) {
      var end = sel.inverted ? sel.from : sel.to, line = end.line, ch = end.ch;
      var lineObj = getLine(line);
      function findNextLine() {
        for (var l = line + dir, e = dir < 0 ? -1 : doc.size; l != e; l += dir) {
          var lo = getLine(l);
          if (!lo.hidden) { line = l; lineObj = lo; return true; }
        }
      }
      function moveOnce(boundToLine) {
        if (ch == (dir < 0 ? 0 : lineObj.text.length)) {
          if (!boundToLine && findNextLine()) ch = dir < 0 ? lineObj.text.length : 0;
          else return false;
        } else ch += dir;
        return true;
      }
      if (unit == "char") moveOnce();
      else if (unit == "column") moveOnce(true);
      else if (unit == "word") {
        var sawWord = false;
        for (;;) {
          if (dir < 0) if (!moveOnce()) break;
          if (isWordChar(lineObj.text.charAt(ch))) sawWord = true;
          else if (sawWord) {if (dir < 0) {dir = 1; moveOnce();} break;}
          if (dir > 0) if (!moveOnce()) break;
        }
      }
      return {line: line, ch: ch};
    }
    function moveH(dir, unit) {
      var pos = dir < 0 ? sel.from : sel.to;
      if (shiftSelecting || posEq(sel.from, sel.to)) pos = findPosH(dir, unit);
      setCursor(pos.line, pos.ch, true);
    }
    function deleteH(dir, unit) {
      if (!posEq(sel.from, sel.to)) replaceRange("", sel.from, sel.to);
      else if (dir < 0) replaceRange("", findPosH(dir, unit), sel.to);
      else replaceRange("", sel.from, findPosH(dir, unit));
      userSelChange = true;
    }
    var goalColumn = null;
    function moveV(dir, unit) {
      var dist = 0, pos = localCoords(sel.inverted ? sel.from : sel.to, true);
      if (goalColumn != null) pos.x = goalColumn;
      if (unit == "page") dist = Math.min(scroller.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      else if (unit == "line") dist = textHeight();
      var target = coordsChar(pos.x, pos.y + dist * dir + 2);
      if (unit == "page") scrollbar.scrollTop += localCoords(target, true).y - pos.y;
      setCursor(target.line, target.ch, true);
      goalColumn = pos.x;
    }

    function findWordAt(pos) {
      var line = getLine(pos.line).text;
      var start = pos.ch, end = pos.ch;
      var check = isWordChar(line.charAt(start < line.length ? start : start - 1)) ?
        isWordChar : function(ch) {return !isWordChar(ch);};
      while (start > 0 && check(line.charAt(start - 1))) --start;
      while (end < line.length && check(line.charAt(end))) ++end;
      return {from: {line: pos.line, ch: start}, to: {line: pos.line, ch: end}};
    }
    function selectLine(line) {
      setSelectionUser({line: line, ch: 0}, clipPos({line: line + 1, ch: 0}));
    }
    function indentSelected(mode) {
      if (posEq(sel.from, sel.to)) return indentLine(sel.from.line, mode);
      var e = sel.to.line - (sel.to.ch ? 0 : 1);
      for (var i = sel.from.line; i <= e; ++i) indentLine(i, mode);
    }

    function indentLine(n, how) {
      if (!how) how = "add";
      if (how == "smart") {
        if (!mode.indent) how = "prev";
        else var state = getStateBefore(n);
      }

      var line = getLine(n), curSpace = line.indentation(options.tabSize),
          curSpaceString = line.text.match(/^\s*/)[0], indentation;
      if (how == "smart") {
        indentation = mode.indent(state, line.text.slice(curSpaceString.length), line.text);
        if (indentation == Pass) how = "prev";
      }
      if (how == "prev") {
        if (n) indentation = getLine(n-1).indentation(options.tabSize);
        else indentation = 0;
      }
      else if (how == "add") indentation = curSpace + options.indentUnit;
      else if (how == "subtract") indentation = curSpace - options.indentUnit;
      indentation = Math.max(0, indentation);
      var diff = indentation - curSpace;

      var indentString = "", pos = 0;
      if (options.indentWithTabs)
        for (var i = Math.floor(indentation / options.tabSize); i; --i) {pos += options.tabSize; indentString += "\t";}
      while (pos < indentation) {++pos; indentString += " ";}

      replaceRange(indentString, {line: n, ch: 0}, {line: n, ch: curSpaceString.length});
    }

    function loadMode() {
      mode = CodeMirror.getMode(options, options.mode);
      doc.iter(0, doc.size, function(line) { line.stateAfter = null; });
      work = [0];
      startWorker();
    }
    function gutterChanged() {
      var visible = options.gutter || options.lineNumbers;
      gutter.style.display = visible ? "" : "none";
      if (visible) gutterDirty = true;
      else lineDiv.parentNode.style.marginLeft = 0;
    }
    function wrappingChanged(from, to) {
      if (options.lineWrapping) {
        wrapper.className += " CodeMirror-wrap";
        var perLine = scroller.clientWidth / charWidth() - 3;
        doc.iter(0, doc.size, function(line) {
          if (line.hidden) return;
          var guess = Math.ceil(line.text.length / perLine) || 1;
          if (guess != 1) updateLineHeight(line, guess);
        });
        lineSpace.style.width = code.style.width = "";
        widthForcer.style.left = "";
      } else {
        wrapper.className = wrapper.className.replace(" CodeMirror-wrap", "");
        maxLine = ""; maxLineChanged = true;
        doc.iter(0, doc.size, function(line) {
          if (line.height != 1 && !line.hidden) updateLineHeight(line, 1);
          if (line.text.length > maxLine.length) maxLine = line.text;
        });
      }
      changes.push({from: 0, to: doc.size});
    }
    function makeTab(col) {
      var w = options.tabSize - col % options.tabSize, cached = tabCache[w];
      if (cached) return cached;
      for (var str = '<span class="cm-tab">', i = 0; i < w; ++i) str += " ";
      return (tabCache[w] = {html: str + "</span>", width: w});
    }
    function themeChanged() {
      scroller.className = scroller.className.replace(/\s*cm-s-\S+/g, "") +
        options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    }
    function keyMapChanged() {
      var style = keyMap[options.keyMap].style;
      wrapper.className = wrapper.className.replace(/\s*cm-keymap-\S+/g, "") +
        (style ? " cm-keymap-" + style : "");
    }

    function TextMarker() { this.set = []; }
    TextMarker.prototype.clear = operation(function() {
      var min = Infinity, max = -Infinity;
      for (var i = 0, e = this.set.length; i < e; ++i) {
        var line = this.set[i], mk = line.marked;
        if (!mk || !line.parent) continue;
        var lineN = lineNo(line);
        min = Math.min(min, lineN); max = Math.max(max, lineN);
        for (var j = 0; j < mk.length; ++j)
          if (mk[j].marker == this) mk.splice(j--, 1);
      }
      if (min != Infinity)
        changes.push({from: min, to: max + 1});
    });
    TextMarker.prototype.find = function() {
      var from, to;
      for (var i = 0, e = this.set.length; i < e; ++i) {
        var line = this.set[i], mk = line.marked;
        for (var j = 0; j < mk.length; ++j) {
          var mark = mk[j];
          if (mark.marker == this) {
            if (mark.from != null || mark.to != null) {
              var found = lineNo(line);
              if (found != null) {
                if (mark.from != null) from = {line: found, ch: mark.from};
                if (mark.to != null) to = {line: found, ch: mark.to};
              }
            }
          }
        }
      }
      return {from: from, to: to};
    };

    function markText(from, to, className) {
      from = clipPos(from); to = clipPos(to);
      var tm = new TextMarker();
      if (!posLess(from, to)) return tm;
      function add(line, from, to, className) {
        getLine(line).addMark(new MarkedText(from, to, className, tm));
      }
      if (from.line == to.line) add(from.line, from.ch, to.ch, className);
      else {
        add(from.line, from.ch, null, className);
        for (var i = from.line + 1, e = to.line; i < e; ++i)
          add(i, null, null, className);
        add(to.line, null, to.ch, className);
      }
      changes.push({from: from.line, to: to.line + 1});
      return tm;
    }

    function setBookmark(pos) {
      pos = clipPos(pos);
      var bm = new Bookmark(pos.ch);
      getLine(pos.line).addMark(bm);
      return bm;
    }

    function findMarksAt(pos) {
      pos = clipPos(pos);
      var markers = [], marked = getLine(pos.line).marked;
      if (!marked) return markers;
      for (var i = 0, e = marked.length; i < e; ++i) {
        var m = marked[i];
        if ((m.from == null || m.from <= pos.ch) &&
            (m.to == null || m.to >= pos.ch))
          markers.push(m.marker || m);
      }
      return markers;
    }

    function addGutterMarker(line, text, className) {
      if (typeof line == "number") line = getLine(clipLine(line));
      line.gutterMarker = {text: text, style: className};
      gutterDirty = true;
      return line;
    }
    function removeGutterMarker(line) {
      if (typeof line == "number") line = getLine(clipLine(line));
      line.gutterMarker = null;
      gutterDirty = true;
    }

    function changeLine(handle, op) {
      var no = handle, line = handle;
      if (typeof handle == "number") line = getLine(clipLine(handle));
      else no = lineNo(handle);
      if (no == null) return null;
      if (op(line, no)) changes.push({from: no, to: no + 1});
      else return null;
      return line;
    }
    function setLineClass(handle, className, bgClassName) {
      return changeLine(handle, function(line) {
        if (line.className != className || line.bgClassName != bgClassName) {
          line.className = className;
          line.bgClassName = bgClassName;
          return true;
        }
      });
    }
    function setLineHidden(handle, hidden) {
      return changeLine(handle, function(line, no) {
        if (line.hidden != hidden) {
          line.hidden = hidden;
          if (!options.lineWrapping) {
            var l = line.text;
            if (hidden && l.length == maxLine.length) {
              updateMaxLine = true;
            } else if (!hidden && l.length > maxLine.length) {
              maxLine = l; updateMaxLine = false;
            }
          }
          updateLineHeight(line, hidden ? 0 : 1);
          var fline = sel.from.line, tline = sel.to.line;
          if (hidden && (fline == no || tline == no)) {
            var from = fline == no ? skipHidden({line: fline, ch: 0}, fline, 0) : sel.from;
            var to = tline == no ? skipHidden({line: tline, ch: 0}, tline, 0) : sel.to;
            // Can't hide the last visible line, we'd have no place to put the cursor
            if (!to) return;
            setSelection(from, to);
          }
          return (gutterDirty = true);
        }
      });
    }

    function lineInfo(line) {
      if (typeof line == "number") {
        if (!isLine(line)) return null;
        var n = line;
        line = getLine(line);
        if (!line) return null;
      } else {
        var n = lineNo(line);
        if (n == null) return null;
      }
      var marker = line.gutterMarker;
      return {line: n, handle: line, text: line.text, markerText: marker && marker.text,
              markerClass: marker && marker.style, lineClass: line.className, bgClass: line.bgClassName};
    }

    function stringWidth(str) {
      measure.innerHTML = "<pre><span>x</span></pre>";
      measure.firstChild.firstChild.firstChild.nodeValue = str;
      return measure.firstChild.firstChild.offsetWidth || 10;
    }
    // These are used to go from pixel positions to character
    // positions, taking varying character widths into account.
    function charFromX(line, x) {
      if (x <= 0) return 0;
      var lineObj = getLine(line), text = lineObj.text;
      function getX(len) {
        return measureLine(lineObj, len).left;
      }
      var from = 0, fromX = 0, to = text.length, toX;
      // Guess a suitable upper bound for our search.
      var estimated = Math.min(to, Math.ceil(x / charWidth()));
      for (;;) {
        var estX = getX(estimated);
        if (estX <= x && estimated < to) estimated = Math.min(to, Math.ceil(estimated * 1.2));
        else {toX = estX; to = estimated; break;}
      }
      if (x > toX) return to;
      // Try to guess a suitable lower bound as well.
      estimated = Math.floor(to * 0.8); estX = getX(estimated);
      if (estX < x) {from = estimated; fromX = estX;}
      // Do a binary search between these bounds.
      for (;;) {
        if (to - from <= 1) return (toX - x > x - fromX) ? from : to;
        var middle = Math.ceil((from + to) / 2), middleX = getX(middle);
        if (middleX > x) {to = middle; toX = middleX;}
        else {from = middle; fromX = middleX;}
      }
    }

    var tempId = "CodeMirror-temp-" + Math.floor(Math.random() * 0xffffff).toString(16);
    function measureLine(line, ch) {
      if (ch == 0) return {top: 0, left: 0};
      var wbr = options.lineWrapping && ch < line.text.length &&
                spanAffectsWrapping.test(line.text.slice(ch - 1, ch + 1));
      measure.innerHTML = "<pre>" + line.getHTML(makeTab, ch, tempId, wbr) + "</pre>";
      var elt = document.getElementById(tempId);
      var top = elt.offsetTop, left = elt.offsetLeft;
      // Older IEs report zero offsets for spans directly after a wrap
      if (ie && top == 0 && left == 0) {
        var backup = document.createElement("span");
        backup.innerHTML = "x";
        elt.parentNode.insertBefore(backup, elt.nextSibling);
        top = backup.offsetTop;
      }
      return {top: top, left: left};
    }
    function localCoords(pos, inLineWrap) {
      var x, lh = textHeight(), y = lh * (heightAtLine(doc, pos.line) - (inLineWrap ? displayOffset : 0));
      if (pos.ch == 0) x = 0;
      else {
        var sp = measureLine(getLine(pos.line), pos.ch);
        x = sp.left;
        if (options.lineWrapping) y += Math.max(0, sp.top);
      }
      return {x: x, y: y, yBot: y + lh};
    }
    // Coords must be lineSpace-local
    function coordsChar(x, y) {
      if (y < 0) y = 0;
      var th = textHeight(), cw = charWidth(), heightPos = displayOffset + Math.floor(y / th);
      var lineNo = lineAtHeight(doc, heightPos);
      if (lineNo >= doc.size) return {line: doc.size - 1, ch: getLine(doc.size - 1).text.length};
      var lineObj = getLine(lineNo), text = lineObj.text;
      var tw = options.lineWrapping, innerOff = tw ? heightPos - heightAtLine(doc, lineNo) : 0;
      if (x <= 0 && innerOff == 0) return {line: lineNo, ch: 0};
      function getX(len) {
        var sp = measureLine(lineObj, len);
        if (tw) {
          var off = Math.round(sp.top / th);
          return Math.max(0, sp.left + (off - innerOff) * scroller.clientWidth);
        }
        return sp.left;
      }
      var from = 0, fromX = 0, to = text.length, toX;
      // Guess a suitable upper bound for our search.
      var estimated = Math.min(to, Math.ceil((x + innerOff * scroller.clientWidth * .9) / cw));
      for (;;) {
        var estX = getX(estimated);
        if (estX <= x && estimated < to) estimated = Math.min(to, Math.ceil(estimated * 1.2));
        else {toX = estX; to = estimated; break;}
      }
      if (x > toX) return {line: lineNo, ch: to};
      // Try to guess a suitable lower bound as well.
      estimated = Math.floor(to * 0.8); estX = getX(estimated);
      if (estX < x) {from = estimated; fromX = estX;}
      // Do a binary search between these bounds.
      for (;;) {
        if (to - from <= 1) return {line: lineNo, ch: (toX - x > x - fromX) ? from : to};
        var middle = Math.ceil((from + to) / 2), middleX = getX(middle);
        if (middleX > x) {to = middle; toX = middleX;}
        else {from = middle; fromX = middleX;}
      }
    }
    function pageCoords(pos) {
      var local = localCoords(pos, true), off = eltOffset(lineSpace);
      return {x: off.left + local.x, y: off.top + local.y, yBot: off.top + local.yBot};
    }

    var cachedHeight, cachedHeightFor, measureText;
    function textHeight() {
      if (measureText == null) {
        measureText = "<pre>";
        for (var i = 0; i < 49; ++i) measureText += "x<br/>";
        measureText += "x</pre>";
      }
      var offsetHeight = lineDiv.clientHeight;
      if (offsetHeight == cachedHeightFor) return cachedHeight;
      cachedHeightFor = offsetHeight;
      measure.innerHTML = measureText;
      cachedHeight = measure.firstChild.offsetHeight / 50 || 1;
      measure.innerHTML = "";
      return cachedHeight;
    }
    var cachedWidth, cachedWidthFor = 0;
    function charWidth() {
      if (scroller.clientWidth == cachedWidthFor) return cachedWidth;
      cachedWidthFor = scroller.clientWidth;
      return (cachedWidth = stringWidth("x"));
    }
    function paddingTop() {return lineSpace.offsetTop;}
    function paddingLeft() {return lineSpace.offsetLeft;}

    function posFromMouse(e, liberal) {
      var offW = eltOffset(scroller, true), x, y;
      // Fails unpredictably on IE[67] when mouse is dragged around quickly.
      try { x = e.clientX; y = e.clientY; } catch (e) { return null; }
      // This is a mess of a heuristic to try and determine whether a
      // scroll-bar was clicked or not, and to return null if one was
      // (and !liberal).
      if (!liberal && (x - offW.left > scroller.clientWidth || y - offW.top > scroller.clientHeight))
        return null;
      var offL = eltOffset(lineSpace, true);
      return coordsChar(x - offL.left, y - offL.top);
    }
    function onContextMenu(e) {
      var pos = posFromMouse(e), scrollPos = scrollbar.scrollTop;
      if (!pos || opera) return; // Opera is difficult.
      if (posEq(sel.from, sel.to) || posLess(pos, sel.from) || !posLess(pos, sel.to))
        operation(setCursor)(pos.line, pos.ch);

      var oldCSS = input.style.cssText;
      inputDiv.style.position = "absolute";
      input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
        "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: white; " +
        "border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
      leaveInputAlone = true;
      var val = input.value = getSelection();
      focusInput();
      selectInput(input);
      function rehide() {
        var newVal = splitLines(input.value).join("\n");
        if (newVal != val && !options.readOnly) operation(replaceSelection)(newVal, "end");
        inputDiv.style.position = "relative";
        input.style.cssText = oldCSS;
        if (ie_lt9) scrollbar.scrollTop = scrollPos;
        leaveInputAlone = false;
        resetInput(true);
        slowPoll();
      }

      if (gecko) {
        e_stop(e);
        var mouseup = connect(window, "mouseup", function() {
          mouseup();
          setTimeout(rehide, 20);
        }, true);
      } else {
        setTimeout(rehide, 50);
      }
    }

    // Cursor-blinking
    function restartBlink() {
      clearInterval(blinker);
      var on = true;
      cursor.style.visibility = "";
      blinker = setInterval(function() {
        cursor.style.visibility = (on = !on) ? "" : "hidden";
      }, 650);
    }

    var matching = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"};
    function matchBrackets(autoclear) {
      var head = sel.inverted ? sel.from : sel.to, line = getLine(head.line), pos = head.ch - 1;
      var match = (pos >= 0 && matching[line.text.charAt(pos)]) || matching[line.text.charAt(++pos)];
      if (!match) return;
      var ch = match.charAt(0), forward = match.charAt(1) == ">", d = forward ? 1 : -1, st = line.styles;
      for (var off = pos + 1, i = 0, e = st.length; i < e; i+=2)
        if ((off -= st[i].length) <= 0) {var style = st[i+1]; break;}

      var stack = [line.text.charAt(pos)], re = /[(){}[\]]/;
      function scan(line, from, to) {
        if (!line.text) return;
        var st = line.styles, pos = forward ? 0 : line.text.length - 1, cur;
        for (var i = forward ? 0 : st.length - 2, e = forward ? st.length : -2; i != e; i += 2*d) {
          var text = st[i];
          if (st[i+1] != style) {pos += d * text.length; continue;}
          for (var j = forward ? 0 : text.length - 1, te = forward ? text.length : -1; j != te; j += d, pos+=d) {
            if (pos >= from && pos < to && re.test(cur = text.charAt(j))) {
              var match = matching[cur];
              if (match.charAt(1) == ">" == forward) stack.push(cur);
              else if (stack.pop() != match.charAt(0)) return {pos: pos, match: false};
              else if (!stack.length) return {pos: pos, match: true};
            }
          }
        }
      }
      for (var i = head.line, e = forward ? Math.min(i + 100, doc.size) : Math.max(-1, i - 100); i != e; i+=d) {
        var line = getLine(i), first = i == head.line;
        var found = scan(line, first && forward ? pos + 1 : 0, first && !forward ? pos : line.text.length);
        if (found) break;
      }
      if (!found) found = {pos: null, match: false};
      var style = found.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
      var one = markText({line: head.line, ch: pos}, {line: head.line, ch: pos+1}, style),
          two = found.pos != null && markText({line: i, ch: found.pos}, {line: i, ch: found.pos + 1}, style);
      var clear = operation(function(){one.clear(); two && two.clear();});
      if (autoclear) setTimeout(clear, 800);
      else bracketHighlighted = clear;
    }

    // Finds the line to start with when starting a parse. Tries to
    // find a line with a stateAfter, so that it can start with a
    // valid state. If that fails, it returns the line with the
    // smallest indentation, which tends to need the least context to
    // parse correctly.
    function findStartLine(n) {
      var minindent, minline;
      for (var search = n, lim = n - 40; search > lim; --search) {
        if (search == 0) return 0;
        var line = getLine(search-1);
        if (line.stateAfter) return search;
        var indented = line.indentation(options.tabSize);
        if (minline == null || minindent > indented) {
          minline = search - 1;
          minindent = indented;
        }
      }
      return minline;
    }
    function getStateBefore(n) {
      var start = findStartLine(n), state = start && getLine(start-1).stateAfter;
      if (!state) state = startState(mode);
      else state = copyState(mode, state);
      doc.iter(start, n, function(line) {
        line.highlight(mode, state, options.tabSize);
        line.stateAfter = copyState(mode, state);
      });
      if (start < n) changes.push({from: start, to: n});
      if (n < doc.size && !getLine(n).stateAfter) work.push(n);
      return state;
    }
    function highlightLines(start, end) {
      var state = getStateBefore(start);
      doc.iter(start, end, function(line) {
        line.highlight(mode, state, options.tabSize);
        line.stateAfter = copyState(mode, state);
      });
    }
    function highlightWorker() {
      var end = +new Date + options.workTime;
      var foundWork = work.length;
      while (work.length) {
        if (!getLine(showingFrom).stateAfter) var task = showingFrom;
        else var task = work.pop();
        if (task >= doc.size) continue;
        var start = findStartLine(task), state = start && getLine(start-1).stateAfter;
        if (state) state = copyState(mode, state);
        else state = startState(mode);

        var unchanged = 0, compare = mode.compareStates, realChange = false,
            i = start, bail = false;
        doc.iter(i, doc.size, function(line) {
          var hadState = line.stateAfter;
          if (+new Date > end) {
            work.push(i);
            startWorker(options.workDelay);
            if (realChange) changes.push({from: task, to: i + 1});
            return (bail = true);
          }
          var changed = line.highlight(mode, state, options.tabSize);
          if (changed) realChange = true;
          line.stateAfter = copyState(mode, state);
          var done = null;
          if (compare) {
            var same = hadState && compare(hadState, state);
            if (same != Pass) done = !!same;
          }
          if (done == null) {
            if (changed !== false || !hadState) unchanged = 0;
            else if (++unchanged > 3 && (!mode.indent || mode.indent(hadState, "") == mode.indent(state, "")))
              done = true;
          }
          if (done) return true;
          ++i;
        });
        if (bail) return;
        if (realChange) changes.push({from: task, to: i + 1});
      }
      if (foundWork && options.onHighlightComplete)
        options.onHighlightComplete(instance);
    }
    function startWorker(time) {
      if (!work.length) return;
      highlight.set(time, operation(highlightWorker));
    }

    // Operations are used to wrap changes in such a way that each
    // change won't have to update the cursor and display (which would
    // be awkward, slow, and error-prone), but instead updates are
    // batched and then all combined and executed at once.
    function startOperation() {
      updateInput = userSelChange = textChanged = null;
      changes = []; selectionChanged = false; callbacks = [];
    }
    function endOperation() {
      if (updateMaxLine) computeMaxLength();
      if (maxLineChanged && !options.lineWrapping) {
        var cursorWidth = widthForcer.offsetWidth, left = stringWidth(maxLine);
        widthForcer.style.left = left + "px";
        lineSpace.style.minWidth = (left + cursorWidth) + "px";
        maxLineChanged = false;
      }
      var newScrollPos, updated;
      if (selectionChanged) {
        var coords = calculateCursorCoords();
        newScrollPos = calculateScrollPos(coords.x, coords.y, coords.x, coords.yBot);
      }
      if (changes.length) updated = updateDisplay(changes, true, (newScrollPos ? newScrollPos.scrollTop : null));
      else {
        if (selectionChanged) updateSelection();
        if (gutterDirty) updateGutter();
      }
      if (newScrollPos) scrollCursorIntoView();
      if (selectionChanged) {scrollEditorIntoView(); restartBlink();}

      if (focused && !leaveInputAlone &&
          (updateInput === true || (updateInput !== false && selectionChanged)))
        resetInput(userSelChange);

      if (selectionChanged && options.matchBrackets)
        setTimeout(operation(function() {
          if (bracketHighlighted) {bracketHighlighted(); bracketHighlighted = null;}
          if (posEq(sel.from, sel.to)) matchBrackets(false);
        }), 20);
      var sc = selectionChanged, cbs = callbacks; // these can be reset by callbacks
      if (textChanged && options.onChange && instance)
        options.onChange(instance, textChanged);
      if (sc && options.onCursorActivity)
        options.onCursorActivity(instance);
      for (var i = 0; i < cbs.length; ++i) cbs[i](instance);
      if (updated && options.onUpdate) options.onUpdate(instance);
    }
    var nestedOperation = 0;
    function operation(f) {
      return function() {
        if (!nestedOperation++) startOperation();
        try {var result = f.apply(this, arguments);}
        finally {if (!--nestedOperation) endOperation();}
        return result;
      };
    }

    function compoundChange(f) {
      history.startCompound();
      try { return f(); } finally { history.endCompound(); }
    }

    for (var ext in extensions)
      if (extensions.propertyIsEnumerable(ext) &&
          !instance.propertyIsEnumerable(ext))
        instance[ext] = extensions[ext];
    return instance;
  } // (end of function CodeMirror)

  // The default configuration options.
  CodeMirror.defaults = {
    value: "",
    mode: null,
    theme: "default",
    indentUnit: 2,
    indentWithTabs: false,
    smartIndent: true,
    tabSize: 4,
    keyMap: "default",
    extraKeys: null,
    electricChars: true,
    autoClearEmptyLines: false,
    onKeyEvent: null,
    onDragEvent: null,
    lineWrapping: false,
    lineNumbers: false,
    gutter: false,
    fixedGutter: false,
    firstLineNumber: 1,
    readOnly: false,
    dragDrop: true,
    onChange: null,
    onCursorActivity: null,
    onGutterClick: null,
    onHighlightComplete: null,
    onUpdate: null,
    onFocus: null, onBlur: null, onScroll: null,
    matchBrackets: false,
    workTime: 100,
    workDelay: 200,
    pollInterval: 100,
    undoDepth: 40,
    tabindex: null,
    autofocus: null,
    lineNumberFormatter: function(integer) { return integer; }
  };

  var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
  var mac = ios || /Mac/.test(navigator.platform);
  var win = /Win/.test(navigator.platform);

  // Known modes, by name and by MIME
  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};
  CodeMirror.defineMode = function(name, mode) {
    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
    if (arguments.length > 2) {
      mode.dependencies = [];
      for (var i = 2; i < arguments.length; ++i) mode.dependencies.push(arguments[i]);
    }
    modes[name] = mode;
  };
  CodeMirror.defineMIME = function(mime, spec) {
    mimeModes[mime] = spec;
  };
  CodeMirror.resolveMode = function(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec))
      spec = mimeModes[spec];
    else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec))
      return CodeMirror.resolveMode("application/xml");
    if (typeof spec == "string") return {name: spec};
    else return spec || {name: "null"};
  };
  CodeMirror.getMode = function(options, spec) {
    var spec = CodeMirror.resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
    return mfactory(options, spec);
  };
  CodeMirror.listModes = function() {
    var list = [];
    for (var m in modes)
      if (modes.propertyIsEnumerable(m)) list.push(m);
    return list;
  };
  CodeMirror.listMIMEs = function() {
    var list = [];
    for (var m in mimeModes)
      if (mimeModes.propertyIsEnumerable(m)) list.push({mime: m, mode: mimeModes[m]});
    return list;
  };

  var extensions = CodeMirror.extensions = {};
  CodeMirror.defineExtension = function(name, func) {
    extensions[name] = func;
  };

  var commands = CodeMirror.commands = {
    selectAll: function(cm) {cm.setSelection({line: 0, ch: 0}, {line: cm.lineCount() - 1});},
    killLine: function(cm) {
      var from = cm.getCursor(true), to = cm.getCursor(false), sel = !posEq(from, to);
      if (!sel && cm.getLine(from.line).length == from.ch) cm.replaceRange("", from, {line: from.line + 1, ch: 0});
      else cm.replaceRange("", from, sel ? to : {line: from.line});
    },
    deleteLine: function(cm) {var l = cm.getCursor().line; cm.replaceRange("", {line: l, ch: 0}, {line: l});},
    undo: function(cm) {cm.undo();},
    redo: function(cm) {cm.redo();},
    goDocStart: function(cm) {cm.setCursor(0, 0, true);},
    goDocEnd: function(cm) {cm.setSelection({line: cm.lineCount() - 1}, null, true);},
    goLineStart: function(cm) {cm.setCursor(cm.getCursor().line, 0, true);},
    goLineStartSmart: function(cm) {
      var cur = cm.getCursor();
      var text = cm.getLine(cur.line), firstNonWS = Math.max(0, text.search(/\S/));
      cm.setCursor(cur.line, cur.ch <= firstNonWS && cur.ch ? 0 : firstNonWS, true);
    },
    goLineEnd: function(cm) {cm.setSelection({line: cm.getCursor().line}, null, true);},
    goLineUp: function(cm) {cm.moveV(-1, "line");},
    goLineDown: function(cm) {cm.moveV(1, "line");},
    goPageUp: function(cm) {cm.moveV(-1, "page");},
    goPageDown: function(cm) {cm.moveV(1, "page");},
    goCharLeft: function(cm) {cm.moveH(-1, "char");},
    goCharRight: function(cm) {cm.moveH(1, "char");},
    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
    goColumnRight: function(cm) {cm.moveH(1, "column");},
    goWordLeft: function(cm) {cm.moveH(-1, "word");},
    goWordRight: function(cm) {cm.moveH(1, "word");},
    delCharLeft: function(cm) {cm.deleteH(-1, "char");},
    delCharRight: function(cm) {cm.deleteH(1, "char");},
    delWordLeft: function(cm) {cm.deleteH(-1, "word");},
    delWordRight: function(cm) {cm.deleteH(1, "word");},
    indentAuto: function(cm) {cm.indentSelection("smart");},
    indentMore: function(cm) {cm.indentSelection("add");},
    indentLess: function(cm) {cm.indentSelection("subtract");},
    insertTab: function(cm) {cm.replaceSelection("\t", "end");},
    defaultTab: function(cm) {
      if (cm.somethingSelected()) cm.indentSelection("add");
      else cm.replaceSelection("\t", "end");
    },
    transposeChars: function(cm) {
      var cur = cm.getCursor(), line = cm.getLine(cur.line);
      if (cur.ch > 0 && cur.ch < line.length - 1)
        cm.replaceRange(line.charAt(cur.ch) + line.charAt(cur.ch - 1),
                        {line: cur.line, ch: cur.ch - 1}, {line: cur.line, ch: cur.ch + 1});
    },
    newlineAndIndent: function(cm) {
      cm.replaceSelection("\n", "end");
      cm.indentLine(cm.getCursor().line);
    },
    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
  };

  var keyMap = CodeMirror.keyMap = {};
  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharRight", "Backspace": "delCharLeft", "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite"
  };
  // Note that the save and find-related commands aren't defined by
  // default. Unknown commands are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Alt-Up": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Down": "goDocEnd",
    "Ctrl-Left": "goWordLeft", "Ctrl-Right": "goWordRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delWordLeft", "Ctrl-Delete": "delWordRight", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    fallthrough: "basic"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goWordLeft",
    "Alt-Right": "goWordRight", "Cmd-Left": "goLineStart", "Cmd-Right": "goLineEnd", "Alt-Backspace": "delWordLeft",
    "Ctrl-Alt-Backspace": "delWordRight", "Alt-Delete": "delWordRight", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore",
    fallthrough: ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageUp", "Shift-Ctrl-V": "goPageDown", "Ctrl-D": "delCharRight", "Ctrl-H": "delCharLeft",
    "Alt-D": "delWordRight", "Alt-Backspace": "delWordLeft", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
  };

  function getKeyMap(val) {
    if (typeof val == "string") return keyMap[val];
    else return val;
  }
  function lookupKey(name, extraMap, map, handle, stop) {
    function lookup(map) {
      map = getKeyMap(map);
      var found = map[name];
      if (found != null && handle(found)) return true;
      if (map.nofallthrough) {
        if (stop) stop();
        return true;
      }
      var fallthrough = map.fallthrough;
      if (fallthrough == null) return false;
      if (Object.prototype.toString.call(fallthrough) != "[object Array]")
        return lookup(fallthrough);
      for (var i = 0, e = fallthrough.length; i < e; ++i) {
        if (lookup(fallthrough[i])) return true;
      }
      return false;
    }
    if (extraMap && lookup(extraMap)) return true;
    return lookup(map);
  }
  function isModifierKey(event) {
    var name = keyNames[e_prop(event, "keyCode")];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
  }

  CodeMirror.fromTextArea = function(textarea, options) {
    if (!options) options = {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabindex)
      options.tabindex = textarea.tabindex;
    if (options.autofocus == null && textarea.getAttribute("autofocus") != null)
      options.autofocus = true;

    function save() {textarea.value = instance.getValue();}
    if (textarea.form) {
      // Deplorable hack to make the submit method do the right thing.
      var rmSubmit = connect(textarea.form, "submit", save, true);
      if (typeof textarea.form.submit == "function") {
        var realSubmit = textarea.form.submit;
        function wrappedSubmit() {
          save();
          textarea.form.submit = realSubmit;
          textarea.form.submit();
          textarea.form.submit = wrappedSubmit;
        }
        textarea.form.submit = wrappedSubmit;
      }
    }

    textarea.style.display = "none";
    var instance = CodeMirror(function(node) {
      textarea.parentNode.insertBefore(node, textarea.nextSibling);
    }, options);
    instance.save = save;
    instance.getTextArea = function() { return textarea; };
    instance.toTextArea = function() {
      save();
      textarea.parentNode.removeChild(instance.getWrapperElement());
      textarea.style.display = "";
      if (textarea.form) {
        rmSubmit();
        if (typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit;
      }
    };
    return instance;
  };

  // Utility functions for working with state. Exported because modes
  // sometimes need to do this.
  function copyState(mode, state) {
    if (state === true) return state;
    if (mode.copyState) return mode.copyState(state);
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) val = val.concat([]);
      nstate[n] = val;
    }
    return nstate;
  }
  CodeMirror.copyState = copyState;
  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true;
  }
  CodeMirror.startState = startState;

  // The character stream used by a mode's parser.
  function StringStream(string, tabSize) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
  }
  StringStream.prototype = {
    eol: function() {return this.pos >= this.string.length;},
    sol: function() {return this.pos == 0;},
    peek: function() {return this.string.charAt(this.pos);},
    next: function() {
      if (this.pos < this.string.length)
        return this.string.charAt(this.pos++);
    },
    eat: function(match) {
      var ch = this.string.charAt(this.pos);
      if (typeof match == "string") var ok = ch == match;
      else var ok = ch && (match.test ? match.test(ch) : match(ch));
      if (ok) {++this.pos; return ch;}
    },
    eatWhile: function(match) {
      var start = this.pos;
      while (this.eat(match)){}
      return this.pos > start;
    },
    eatSpace: function() {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
      return this.pos > start;
    },
    skipToEnd: function() {this.pos = this.string.length;},
    skipTo: function(ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {this.pos = found; return true;}
    },
    backUp: function(n) {this.pos -= n;},
    column: function() {return countColumn(this.string, this.start, this.tabSize);},
    indentation: function() {return countColumn(this.string, null, this.tabSize);},
    match: function(pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        function cased(str) {return caseInsensitive ? str.toLowerCase() : str;}
        if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) {
          if (consume !== false) this.pos += pattern.length;
          return true;
        }
      } else {
        var match = this.string.slice(this.pos).match(pattern);
        if (match && consume !== false) this.pos += match[0].length;
        return match;
      }
    },
    current: function(){return this.string.slice(this.start, this.pos);}
  };
  CodeMirror.StringStream = StringStream;

  function MarkedText(from, to, className, marker) {
    this.from = from; this.to = to; this.style = className; this.marker = marker;
  }
  MarkedText.prototype = {
    attach: function(line) { this.marker.set.push(line); },
    detach: function(line) {
      var ix = indexOf(this.marker.set, line);
      if (ix > -1) this.marker.set.splice(ix, 1);
    },
    split: function(pos, lenBefore) {
      if (this.to <= pos && this.to != null) return null;
      var from = this.from < pos || this.from == null ? null : this.from - pos + lenBefore;
      var to = this.to == null ? null : this.to - pos + lenBefore;
      return new MarkedText(from, to, this.style, this.marker);
    },
    dup: function() { return new MarkedText(null, null, this.style, this.marker); },
    clipTo: function(fromOpen, from, toOpen, to, diff) {
      if (fromOpen && to > this.from && (to < this.to || this.to == null))
        this.from = null;
      else if (this.from != null && this.from >= from)
        this.from = Math.max(to, this.from) + diff;
      if (toOpen && (from < this.to || this.to == null) && (from > this.from || this.from == null))
        this.to = null;
      else if (this.to != null && this.to > from)
        this.to = to < this.to ? this.to + diff : from;
    },
    isDead: function() { return this.from != null && this.to != null && this.from >= this.to; },
    sameSet: function(x) { return this.marker == x.marker; }
  };

  function Bookmark(pos) {
    this.from = pos; this.to = pos; this.line = null;
  }
  Bookmark.prototype = {
    attach: function(line) { this.line = line; },
    detach: function(line) { if (this.line == line) this.line = null; },
    split: function(pos, lenBefore) {
      if (pos < this.from) {
        this.from = this.to = (this.from - pos) + lenBefore;
        return this;
      }
    },
    isDead: function() { return this.from > this.to; },
    clipTo: function(fromOpen, from, toOpen, to, diff) {
      if ((fromOpen || from < this.from) && (toOpen || to > this.to)) {
        this.from = 0; this.to = -1;
      } else if (this.from > from) {
        this.from = this.to = Math.max(to, this.from) + diff;
      }
    },
    sameSet: function(x) { return false; },
    find: function() {
      if (!this.line || !this.line.parent) return null;
      return {line: lineNo(this.line), ch: this.from};
    },
    clear: function() {
      if (this.line) {
        var found = indexOf(this.line.marked, this);
        if (found != -1) this.line.marked.splice(found, 1);
        this.line = null;
      }
    }
  };

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  function Line(text, styles) {
    this.styles = styles || [text, null];
    this.text = text;
    this.height = 1;
    this.marked = this.gutterMarker = this.className = this.bgClassName = this.handlers = null;
    this.stateAfter = this.parent = this.hidden = null;
  }
  Line.inheritMarks = function(text, orig) {
    var ln = new Line(text), mk = orig && orig.marked;
    if (mk) {
      for (var i = 0; i < mk.length; ++i) {
        if (mk[i].to == null && mk[i].style) {
          var newmk = ln.marked || (ln.marked = []), mark = mk[i];
          var nmark = mark.dup(); newmk.push(nmark); nmark.attach(ln);
        }
      }
    }
    return ln;
  }
  Line.prototype = {
    // Replace a piece of a line, keeping the styles around it intact.
    replace: function(from, to_, text) {
      var st = [], mk = this.marked, to = to_ == null ? this.text.length : to_;
      copyStyles(0, from, this.styles, st);
      if (text) st.push(text, null);
      copyStyles(to, this.text.length, this.styles, st);
      this.styles = st;
      this.text = this.text.slice(0, from) + text + this.text.slice(to);
      this.stateAfter = null;
      if (mk) {
        var diff = text.length - (to - from);
        for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i];
          mark.clipTo(from == null, from || 0, to_ == null, to, diff);
          if (mark.isDead()) {mark.detach(this); mk.splice(i--, 1);}
        }
      }
    },
    // Split a part off a line, keeping styles and markers intact.
    split: function(pos, textBefore) {
      var st = [textBefore, null], mk = this.marked;
      copyStyles(pos, this.text.length, this.styles, st);
      var taken = new Line(textBefore + this.text.slice(pos), st);
      if (mk) {
        for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i];
          var newmark = mark.split(pos, textBefore.length);
          if (newmark) {
            if (!taken.marked) taken.marked = [];
            taken.marked.push(newmark); newmark.attach(taken);
            if (newmark == mark) mk.splice(i--, 1);
          }
        }
      }
      return taken;
    },
    append: function(line) {
      var mylen = this.text.length, mk = line.marked, mymk = this.marked;
      this.text += line.text;
      copyStyles(0, line.text.length, line.styles, this.styles);
      if (mymk) {
        for (var i = 0; i < mymk.length; ++i)
          if (mymk[i].to == null) mymk[i].to = mylen;
      }
      if (mk && mk.length) {
        if (!mymk) this.marked = mymk = [];
        outer: for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i];
          if (!mark.from) {
            for (var j = 0; j < mymk.length; ++j) {
              var mymark = mymk[j];
              if (mymark.to == mylen && mymark.sameSet(mark)) {
                mymark.to = mark.to == null ? null : mark.to + mylen;
                if (mymark.isDead()) {
                  mymark.detach(this);
                  mk.splice(i--, 1);
                }
                continue outer;
              }
            }
          }
          mymk.push(mark);
          mark.attach(this);
          mark.from += mylen;
          if (mark.to != null) mark.to += mylen;
        }
      }
    },
    fixMarkEnds: function(other) {
      var mk = this.marked, omk = other.marked;
      if (!mk) return;
      outer: for (var i = 0; i < mk.length; ++i) {
        var mark = mk[i], close = mark.to == null;
        if (close && omk) {
          for (var j = 0; j < omk.length; ++j) {
            var om = omk[j];
            if (!om.sameSet(mark) || om.from != null) continue
            if (mark.from == this.text.length && om.to == 0) {
              omk.splice(j, 1);
              mk.splice(i--, 1);
              continue outer;
            } else {
              close = false; break;
            }
          }
        }
        if (close) mark.to = this.text.length;
      }
    },
    fixMarkStarts: function() {
      var mk = this.marked;
      if (!mk) return;
      for (var i = 0; i < mk.length; ++i)
        if (mk[i].from == null) mk[i].from = 0;
    },
    addMark: function(mark) {
      mark.attach(this);
      if (this.marked == null) this.marked = [];
      this.marked.push(mark);
      this.marked.sort(function(a, b){return (a.from || 0) - (b.from || 0);});
    },
    // Run the given mode's parser over a line, update the styles
    // array, which contains alternating fragments of text and CSS
    // classes.
    highlight: function(mode, state, tabSize) {
      var stream = new StringStream(this.text, tabSize), st = this.styles, pos = 0;
      var changed = false, curWord = st[0], prevWord;
      if (this.text == "" && mode.blankLine) mode.blankLine(state);
      while (!stream.eol()) {
        var style = mode.token(stream, state);
        var substr = this.text.slice(stream.start, stream.pos);
        stream.start = stream.pos;
        if (pos && st[pos-1] == style)
          st[pos-2] += substr;
        else if (substr) {
          if (!changed && (st[pos+1] != style || (pos && st[pos-2] != prevWord))) changed = true;
          st[pos++] = substr; st[pos++] = style;
          prevWord = curWord; curWord = st[pos];
        }
        // Give up when line is ridiculously long
        if (stream.pos > 5000) {
          st[pos++] = this.text.slice(stream.pos); st[pos++] = null;
          break;
        }
      }
      if (st.length != pos) {st.length = pos; changed = true;}
      if (pos && st[pos-2] != prevWord) changed = true;
      // Short lines with simple highlights return null, and are
      // counted as changed by the driver because they are likely to
      // highlight the same way in various contexts.
      return changed || (st.length < 5 && this.text.length < 10 ? null : false);
    },
    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(mode, state, ch) {
      var txt = this.text, stream = new StringStream(txt);
      while (stream.pos < ch && !stream.eol()) {
        stream.start = stream.pos;
        var style = mode.token(stream, state);
      }
      return {start: stream.start,
              end: stream.pos,
              string: stream.current(),
              className: style || null,
              state: state};
    },
    indentation: function(tabSize) {return countColumn(this.text, null, tabSize);},
    // Produces an HTML fragment for the line, taking selection,
    // marking, and highlighting into account.
    getHTML: function(makeTab, wrapAt, wrapId, wrapWBR) {
      var html = [], first = true, col = 0;
      function span_(text, style) {
        if (!text) return;
        // Work around a bug where, in some compat modes, IE ignores leading spaces
        if (first && ie && text.charAt(0) == " ") text = "\u00a0" + text.slice(1);
        first = false;
        if (text.indexOf("\t") == -1) {
          col += text.length;
          var escaped = htmlEscape(text);
        } else {
          var escaped = "";
          for (var pos = 0;;) {
            var idx = text.indexOf("\t", pos);
            if (idx == -1) {
              escaped += htmlEscape(text.slice(pos));
              col += text.length - pos;
              break;
            } else {
              col += idx - pos;
              var tab = makeTab(col);
              escaped += htmlEscape(text.slice(pos, idx)) + tab.html;
              col += tab.width;
              pos = idx + 1;
            }
          }
        }
        if (style) html.push('<span class="', style, '">', escaped, "</span>");
        else html.push(escaped);
      }
      var span = span_;
      if (wrapAt != null) {
        var outPos = 0, open = "<span id=\"" + wrapId + "\">";
        span = function(text, style) {
          var l = text.length;
          if (wrapAt >= outPos && wrapAt < outPos + l) {
            if (wrapAt > outPos) {
              span_(text.slice(0, wrapAt - outPos), style);
              // See comment at the definition of spanAffectsWrapping
              if (wrapWBR) html.push("<wbr>");
            }
            html.push(open);
            var cut = wrapAt - outPos;
            span_(opera ? text.slice(cut, cut + 1) : text.slice(cut), style);
            html.push("</span>");
            if (opera) span_(text.slice(cut + 1), style);
            wrapAt--;
            outPos += l;
          } else {
            outPos += l;
            span_(text, style);
            // Output empty wrapper when at end of line
            if (outPos == wrapAt && outPos == len) html.push(open + (gecko ? "&#x200b;" : " ") + "</span>");
            // Stop outputting HTML when gone sufficiently far beyond measure
            else if (outPos > wrapAt + 10 && /\s/.test(text)) span = function(){};
          }
        }
      }

      var st = this.styles, allText = this.text, marked = this.marked;
      var len = allText.length;
      function styleToClass(style) {
        if (!style) return null;
        return "cm-" + style.replace(/ +/g, " cm-");
      }

      if (!allText && wrapAt == null) {
        span(" ");
      } else if (!marked || !marked.length) {
        for (var i = 0, ch = 0; ch < len; i+=2) {
          var str = st[i], style = st[i+1], l = str.length;
          if (ch + l > len) str = str.slice(0, len - ch);
          ch += l;
          span(str, styleToClass(style));
        }
      } else {
        var pos = 0, i = 0, text = "", style, sg = 0;
        var nextChange = marked[0].from || 0, marks = [], markpos = 0;
        function advanceMarks() {
          var m;
          while (markpos < marked.length &&
                 ((m = marked[markpos]).from == pos || m.from == null)) {
            if (m.style != null) marks.push(m);
            ++markpos;
          }
          nextChange = markpos < marked.length ? marked[markpos].from : Infinity;
          for (var i = 0; i < marks.length; ++i) {
            var to = marks[i].to;
            if (to == null) to = Infinity;
            if (to == pos) marks.splice(i--, 1);
            else nextChange = Math.min(to, nextChange);
          }
        }
        var m = 0;
        while (pos < len) {
          if (nextChange == pos) advanceMarks();
          var upto = Math.min(len, nextChange);
          while (true) {
            if (text) {
              var end = pos + text.length;
              var appliedStyle = style;
              for (var j = 0; j < marks.length; ++j)
                appliedStyle = (appliedStyle ? appliedStyle + " " : "") + marks[j].style;
              span(end > upto ? text.slice(0, upto - pos) : text, appliedStyle);
              if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
              pos = end;
            }
            text = st[i++]; style = styleToClass(st[i++]);
          }
        }
      }
      return html.join("");
    },
    cleanUp: function() {
      this.parent = null;
      if (this.marked)
        for (var i = 0, e = this.marked.length; i < e; ++i) this.marked[i].detach(this);
    }
  };
  // Utility used by replace and split above
  function copyStyles(from, to, source, dest) {
    for (var i = 0, pos = 0, state = 0; pos < to; i+=2) {
      var part = source[i], end = pos + part.length;
      if (state == 0) {
        if (end > from) dest.push(part.slice(from - pos, Math.min(part.length, to - pos)), source[i+1]);
        if (end >= from) state = 1;
      } else if (state == 1) {
        if (end > to) dest.push(part.slice(0, to - pos), source[i+1]);
        else dest.push(part, source[i+1]);
      }
      pos = end;
    }
  }

  // Data structure that holds the sequence of lines.
  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    for (var i = 0, e = lines.length, height = 0; i < e; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }
  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length; },
    remove: function(at, n, callbacks) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        line.cleanUp();
        if (line.handlers)
          for (var j = 0; j < line.handlers.length; ++j) callbacks.push(line.handlers[j]);
      }
      this.lines.splice(at, n);
    },
    collapse: function(lines) {
      lines.splice.apply(lines, [lines.length, 0].concat(this.lines));
    },
    insertHeight: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0, e = lines.length; i < e; ++i) lines[i].parent = this;
    },
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        if (op(this.lines[at])) return true;
    }
  };
  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0, e = children.length; i < e; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }
  BranchChunk.prototype = {
    chunkSize: function() { return this.size; },
    remove: function(at, n, callbacks) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.remove(at, rm, callbacks);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) break;
          at = 0;
        } else at -= sz;
      }
      if (this.size - n < 25) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },
    collapse: function(lines) {
      for (var i = 0, e = this.children.length; i < e; ++i) this.children[i].collapse(lines);
    },
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0, e = lines.length; i < e; ++i) height += lines[i].height;
      this.insertHeight(at, lines, height);
    },
    insertHeight: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertHeight(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            while (child.lines.length > 50) {
              var spilled = child.lines.splice(child.lines.length - 25, 25);
              var newleaf = new LeafChunk(spilled);
              child.height -= newleaf.height;
              this.children.splice(i + 1, 0, newleaf);
              newleaf.parent = this;
            }
            this.maybeSpill();
          }
          break;
        }
        at -= sz;
      }
    },
    maybeSpill: function() {
      if (this.children.length <= 10) return;
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
        } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10);
      me.parent.maybeSpill();
    },
    iter: function(from, to, op) { this.iterN(from, to - from, op); },
    iterN: function(at, n, op) {
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) return true;
          if ((n -= used) == 0) break;
          at = 0;
        } else at -= sz;
      }
    }
  };

  function getLineAt(chunk, n) {
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break; }
        n -= sz;
      }
    }
    return chunk.lines[n];
  }
  function lineNo(line) {
    if (line.parent == null) return null;
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0, e = chunk.children.length; ; ++i) {
        if (chunk.children[i] == cur) break;
        no += chunk.children[i].chunkSize();
      }
    }
    return no;
  }
  function lineAtHeight(chunk, h) {
    var n = 0;
    outer: do {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], ch = child.height;
        if (h < ch) { chunk = child; continue outer; }
        h -= ch;
        n += child.chunkSize();
      }
      return n;
    } while (!chunk.lines);
    for (var i = 0, e = chunk.lines.length; i < e; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) break;
      h -= lh;
    }
    return n + i;
  }
  function heightAtLine(chunk, n) {
    var h = 0;
    outer: do {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; continue outer; }
        n -= sz;
        h += child.height;
      }
      return h;
    } while (!chunk.lines);
    for (var i = 0; i < n; ++i) h += chunk.lines[i].height;
    return h;
  }

  // The history object 'chunks' changes that are made close together
  // and at almost the same time into bigger undoable units.
  function History() {
    this.time = 0;
    this.done = []; this.undone = [];
    this.compound = 0;
    this.closed = false;
  }
  History.prototype = {
    addChange: function(start, added, old) {
      this.undone.length = 0;
      var time = +new Date, cur = this.done[this.done.length - 1], last = cur && cur[cur.length - 1];
      var dtime = time - this.time;

      if (this.compound && cur && !this.closed) {
        cur.push({start: start, added: added, old: old});
      } else if (dtime > 400 || !last || this.closed ||
                 last.start > start + old.length || last.start + last.added < start) {
        this.done.push([{start: start, added: added, old: old}]);
        this.closed = false;
      } else {
        var startBefore = Math.max(0, last.start - start),
            endAfter = Math.max(0, (start + old.length) - (last.start + last.added));
        for (var i = startBefore; i > 0; --i) last.old.unshift(old[i - 1]);
        for (var i = endAfter; i > 0; --i) last.old.push(old[old.length - i]);
        if (startBefore) last.start = start;
        last.added += added - (old.length - startBefore - endAfter);
      }
      this.time = time;
    },
    startCompound: function() {
      if (!this.compound++) this.closed = true;
    },
    endCompound: function() {
      if (!--this.compound) this.closed = true;
    }
  };

  function stopMethod() {e_stop(this);}
  // Ensure an event has a stop method.
  function addStop(event) {
    if (!event.stop) event.stop = stopMethod;
    return event;
  }

  function e_preventDefault(e) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}
  CodeMirror.e_stop = e_stop;
  CodeMirror.e_preventDefault = e_preventDefault;
  CodeMirror.e_stopPropagation = e_stopPropagation;

  function e_target(e) {return e.target || e.srcElement;}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) b = 1;
      else if (e.button & 2) b = 3;
      else if (e.button & 4) b = 2;
    }
    if (mac && e.ctrlKey && b == 1) b = 3;
    return b;
  }

  // Allow 3rd-party code to override event properties by adding an override
  // object to an event object.
  function e_prop(e, prop) {
    var overridden = e.override && e.override.hasOwnProperty(prop);
    return overridden ? e.override[prop] : e[prop];
  }

  // Event handler registration. If disconnect is true, it'll return a
  // function that unregisters the handler.
  function connect(node, type, handler, disconnect) {
    if (typeof node.addEventListener == "function") {
      node.addEventListener(type, handler, false);
      if (disconnect) return function() {node.removeEventListener(type, handler, false);};
    } else {
      var wrapHandler = function(event) {handler(event || window.event);};
      node.attachEvent("on" + type, wrapHandler);
      if (disconnect) return function() {node.detachEvent("on" + type, wrapHandler);};
    }
  }
  CodeMirror.connect = connect;

  function Delayed() {this.id = null;}
  Delayed.prototype = {set: function(ms, f) {clearTimeout(this.id); this.id = setTimeout(f, ms);}};

  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

  var gecko = /gecko\/\d{7}/i.test(navigator.userAgent);
  var ie = /MSIE \d/.test(navigator.userAgent);
  var ie_lt8 = /MSIE [1-7]\b/.test(navigator.userAgent);
  var ie_lt9 = /MSIE [1-8]\b/.test(navigator.userAgent);
  var quirksMode = ie && document.documentMode == 5;
  var webkit = /WebKit\//.test(navigator.userAgent);
  var chrome = /Chrome\//.test(navigator.userAgent);
  var opera = /Opera\//.test(navigator.userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var khtml = /KHTML\//.test(navigator.userAgent);
  var mac_geLion = /Mac OS X 10\D([7-9]|\d\d)\D/.test(navigator.userAgent);

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie_lt9) return false;
    var div = document.createElement('div');
    return "draggable" in div || "dragDrop" in div;
  }();

  // Feature-detect whether newlines in textareas are converted to \r\n
  var lineSep = function () {
    var te = document.createElement("textarea");
    te.value = "foo\nbar";
    if (te.value.indexOf("\r") > -1) return "\r\n";
    return "\n";
  }();

  // For a reason I have yet to figure out, some browsers disallow
  // word wrapping between certain characters *only* if a new inline
  // element is started between them. This makes it hard to reliably
  // measure the position of things, since that requires inserting an
  // extra span. This terribly fragile set of regexps matches the
  // character combinations that suffer from this phenomenon on the
  // various browsers.
  var spanAffectsWrapping = /^$/; // Won't match any two-character string
  if (gecko) spanAffectsWrapping = /$'/;
  else if (safari) spanAffectsWrapping = /\-[^ \-?]|\?[^ !'\"\),.\-\/:;\?\]\}]/;
  else if (chrome) spanAffectsWrapping = /\-[^ \-\.?]|\?[^ \-\.?\]\}:;!'\"\),\/]|[\.!\"#&%\)*+,:;=>\]|\}~][\(\{\[<]|\$'/;

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) end = string.length;
    }
    for (var i = 0, n = 0; i < end; ++i) {
      if (string.charAt(i) == "\t") n += tabSize - (n % tabSize);
      else ++n;
    }
    return n;
  }

  function computedStyle(elt) {
    if (elt.currentStyle) return elt.currentStyle;
    return window.getComputedStyle(elt, null);
  }

  function eltOffset(node, screen) {
    // Take the parts of bounding client rect that we are interested in so we are able to edit if need be,
    // since the returned value cannot be changed externally (they are kept in sync as the element moves within the page)
    try { var box = node.getBoundingClientRect(); box = { top: box.top, left: box.left }; }
    catch(e) { box = {top: 0, left: 0}; }
    if (!screen) {
      // Get the toplevel scroll, working around browser differences.
      if (window.pageYOffset == null) {
        var t = document.documentElement || document.body.parentNode;
        if (t.scrollTop == null) t = document.body;
        box.top += t.scrollTop; box.left += t.scrollLeft;
      } else {
        box.top += window.pageYOffset; box.left += window.pageXOffset;
      }
    }
    return box;
  }

  // Get a node's text content.
  function eltText(node) {
    return node.textContent || node.innerText || node.nodeValue || "";
  }
  function selectInput(node) {
    if (ios) { // Mobile Safari apparently has a bug where select() is broken.
      node.selectionStart = 0;
      node.selectionEnd = node.value.length;
    } else node.select();
  }

  // Operations on {line, ch} objects.
  function posEq(a, b) {return a.line == b.line && a.ch == b.ch;}
  function posLess(a, b) {return a.line < b.line || (a.line == b.line && a.ch < b.ch);}
  function copyPos(x) {return {line: x.line, ch: x.ch};}

  var escapeElement = document.createElement("pre");
  function htmlEscape(str) {
    escapeElement.textContent = str;
    return escapeElement.innerHTML;
  }
  // Recent (late 2011) Opera betas insert bogus newlines at the start
  // of the textContent, so we strip those.
  if (htmlEscape("a") == "\na") {
    htmlEscape = function(str) {
      escapeElement.textContent = str;
      return escapeElement.innerHTML.slice(1);
    };
  // Some IEs don't preserve tabs through innerHTML
  } else if (htmlEscape("\t") != "\t") {
    htmlEscape = function(str) {
      escapeElement.innerHTML = "";
      escapeElement.appendChild(document.createTextNode(str));
      return escapeElement.innerHTML;
    };
  }
  CodeMirror.htmlEscape = htmlEscape;

  // Used to position the cursor after an undo/redo by finding the
  // last edited character.
  function editEnd(from, to) {
    if (!to) return 0;
    if (!from) return to.length;
    for (var i = from.length, j = to.length; i >= 0 && j >= 0; --i, --j)
      if (from.charAt(i) != to.charAt(j)) break;
    return j + 1;
  }

  function indexOf(collection, elt) {
    if (collection.indexOf) return collection.indexOf(elt);
    for (var i = 0, e = collection.length; i < e; ++i)
      if (collection[i] == elt) return i;
    return -1;
  }
  function isWordChar(ch) {
    return /\w/.test(ch) || ch.toUpperCase() != ch.toLowerCase();
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) nl = string.length;
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result;
  } : function(string){return string.split(/\r\n?|\n/);};
  CodeMirror.splitLines = splitLines;

  var hasSelection = window.getSelection ? function(te) {
    try { return te.selectionStart != te.selectionEnd; }
    catch(e) { return false; }
  } : function(te) {
    try {var range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) return false;
    return range.compareEndPoints("StartToEnd", range) != 0;
  };

  CodeMirror.defineMode("null", function() {
    return {token: function(stream) {stream.skipToEnd();}};
  });
  CodeMirror.defineMIME("text/plain", "null");

  var keyNames = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
                  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
                  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
                  46: "Delete", 59: ";", 91: "Mod", 92: "Mod", 93: "Mod", 109: "-", 107: "=", 127: "Delete",
                  186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
                  221: "]", 222: "'", 63276: "PageUp", 63277: "PageDown", 63275: "End", 63273: "Home",
                  63234: "Left", 63232: "Up", 63235: "Right", 63233: "Down", 63302: "Insert", 63272: "Delete"};
  CodeMirror.keyNames = keyNames;
  (function() {
    // Number keys
    for (var i = 0; i < 10; i++) keyNames[i + 48] = String(i);
    // Alphabetic keys
    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
    // Function keys
    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
  })();

  return CodeMirror;
})();

CodeMirror.defineMode("xml", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var Kludges = parserConfig.htmlMode ? {
    autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                      'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                      'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                      'track': true, 'wbr': true},
    implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                       'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                       'th': true, 'tr': true},
    contextGrabbers: {
      'dd': {'dd': true, 'dt': true},
      'dt': {'dd': true, 'dt': true},
      'li': {'li': true},
      'option': {'option': true, 'optgroup': true},
      'optgroup': {'optgroup': true},
      'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
            'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
            'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
            'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
            'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
      'rp': {'rp': true, 'rt': true},
      'rt': {'rp': true, 'rt': true},
      'tbody': {'tbody': true, 'tfoot': true},
      'td': {'td': true, 'th': true},
      'tfoot': {'tbody': true},
      'th': {'td': true, 'th': true},
      'thead': {'tbody': true, 'tfoot': true},
      'tr': {'tr': true}
    },
    doNotIndent: {"pre": true},
    allowUnquoted: true,
    allowMissing: false
  } : {
    autoSelfClosers: {},
    implicitlyClosed: {},
    contextGrabbers: {},
    doNotIndent: {},
    allowUnquoted: false,
    allowMissing: false
  };
  var alignCDATA = parserConfig.alignCDATA;

  // Return variables for tokenizers
  var tagName, type;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        }
        else if (stream.match("--")) return chain(inBlock("comment", "-->"));
        else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        }
        else return null;
      }
      else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      }
      else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        stream.eatSpace();
        tagName = "";
        var c;
        while ((c = stream.eat(/[^\s\u00a0=<>\"\'\/?]/))) tagName += c;
        state.tokenize = inTag;
        return "tag";
      }
    }
    else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");          
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    }
    else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag";
    }
    else if (ch == "=") {
      type = "equals";
      return null;
    }
    else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      return state.tokenize(stream, state);
    }
    else {
      stream.eatWhile(/[^\s\u00a0=<>\"\'\/?]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  var curState, setStyle;
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) curState.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }

  function pushContext(tagName, startOfLine) {
    var noIndent = Kludges.doNotIndent.hasOwnProperty(tagName) || (curState.context && curState.context.noIndent);
    curState.context = {
      prev: curState.context,
      tagName: tagName,
      indent: curState.indented,
      startOfLine: startOfLine,
      noIndent: noIndent
    };
  }
  function popContext() {
    if (curState.context) curState.context = curState.context.prev;
  }

  function element(type) {
    if (type == "openTag") {
      curState.tagName = tagName;
      return cont(attributes, endtag(curState.startOfLine));
    } else if (type == "closeTag") {
      var err = false;
      if (curState.context) {
        if (curState.context.tagName != tagName) {
          if (Kludges.implicitlyClosed.hasOwnProperty(curState.context.tagName.toLowerCase())) {
            popContext();
          }
          err = !curState.context || curState.context.tagName != tagName;
        }
      } else {
        err = true;
      }
      if (err) setStyle = "error";
      return cont(endclosetag(err));
    }
    return cont();
  }
  function endtag(startOfLine) {
    return function(type) {
      if (type == "selfcloseTag" ||
          (type == "endTag" && Kludges.autoSelfClosers.hasOwnProperty(curState.tagName.toLowerCase()))) {
        maybePopContext(curState.tagName.toLowerCase());
        return cont();
      }
      if (type == "endTag") {
        maybePopContext(curState.tagName.toLowerCase());
        pushContext(curState.tagName, startOfLine);
        return cont();
      }
      return cont();
    };
  }
  function endclosetag(err) {
    return function(type) {
      if (err) setStyle = "error";
      if (type == "endTag") { popContext(); return cont(); }
      setStyle = "error";
      return cont(arguments.callee);
    }
  }
  function maybePopContext(nextTagName) {
    var parentTagName;
    while (true) {
      if (!curState.context) {
        return;
      }
      parentTagName = curState.context.tagName.toLowerCase();
      if (!Kludges.contextGrabbers.hasOwnProperty(parentTagName) ||
          !Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext();
    }
  }

  function attributes(type) {
    if (type == "word") {setStyle = "attribute"; return cont(attribute, attributes);}
    if (type == "endTag" || type == "selfcloseTag") return pass();
    setStyle = "error";
    return cont(attributes);
  }
  function attribute(type) {
    if (type == "equals") return cont(attvalue, attributes);
    if (!Kludges.allowMissing) setStyle = "error";
    return (type == "endTag" || type == "selfcloseTag") ? pass() : cont();
  }
  function attvalue(type) {
    if (type == "string") return cont(attvaluemaybe);
    if (type == "word" && Kludges.allowUnquoted) {setStyle = "string"; return cont();}
    setStyle = "error";
    return (type == "endTag" || type == "selfCloseTag") ? pass() : cont();
  }
  function attvaluemaybe(type) {
    if (type == "string") return cont(attvaluemaybe);
    else return pass();
  }

  return {
    startState: function() {
      return {tokenize: inText, cc: [], indented: 0, startOfLine: true, tagName: null, context: null};
    },

    token: function(stream, state) {
      if (stream.sol()) {
        state.startOfLine = true;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;

      setStyle = type = tagName = null;
      var style = state.tokenize(stream, state);
      state.type = type;
      if ((style || type) && style != "comment") {
        curState = state;
        while (true) {
          var comb = state.cc.pop() || element;
          if (comb(type || style)) break;
        }
      }
      state.startOfLine = false;
      return setStyle || style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      if ((state.tokenize != inTag && state.tokenize != inText) ||
          context && context.noIndent)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      if (alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      if (context && /^<\//.test(textAfter))
        context = context.prev;
      while (context && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return 0;
    },

    compareStates: function(a, b) {
      if (a.indented != b.indented || a.tokenize != b.tokenize) return false;
      for (var ca = a.context, cb = b.context; ; ca = ca.prev, cb = cb.prev) {
        if (!ca || !cb) return ca == cb;
        if (ca.tagName != cb.tagName) return false;
      }
    },

    electricChars: "/"
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});
CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

  var htmlMode = CodeMirror.getMode(cmCfg, { name: 'xml', htmlMode: true });

  var header   = 'header'
  ,   code     = 'comment'
  ,   quote    = 'quote'
  ,   list     = 'string'
  ,   hr       = 'hr'
  ,   linktext = 'link'
  ,   linkhref = 'string'
  ,   em       = 'em'
  ,   strong   = 'strong'
  ,   emstrong = 'emstrong';

  var hrRE = /^([*\-=_])(?:\s*\1){2,}\s*$/
  ,   ulRE = /^[*\-+]\s+/
  ,   olRE = /^[0-9]+\.\s+/
  ,   headerRE = /^(?:\={3,}|-{3,})$/
  ,   textRE = /^[^\[*_\\<>`]+/;

  function switchInline(stream, state, f) {
    state.f = state.inline = f;
    return f(stream, state);
  }

  function switchBlock(stream, state, f) {
    state.f = state.block = f;
    return f(stream, state);
  }


  // Blocks

  function blankLine(state) {
    // Reset EM state
    state.em = false;
    // Reset STRONG state
    state.strong = false;
    return null;
  }

  function blockNormal(stream, state) {
    var match;
    if (state.indentationDiff >= 4) {
      state.indentation -= state.indentationDiff;
      stream.skipToEnd();
      return code;
    } else if (stream.eatSpace()) {
      return null;
    } else if (stream.peek() === '#' || stream.match(headerRE)) {
      state.header = true;
    } else if (stream.eat('>')) {
      state.indentation++;
      state.quote = true;
    } else if (stream.peek() === '[') {
      return switchInline(stream, state, footnoteLink);
    } else if (stream.match(hrRE, true)) {
      return hr;
    } else if (match = stream.match(ulRE, true) || stream.match(olRE, true)) {
      state.indentation += match[0].length;
      return list;
    }
    
    return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (style === 'tag' && state.htmlState.type !== 'openTag' && !state.htmlState.context) {
      state.f = inlineNormal;
      state.block = blockNormal;
    }
    return style;
  }


  // Inline
  function getType(state) {
    var styles = [];
    
    if (state.strong) { styles.push(state.em ? emstrong : strong); }
    else if (state.em) { styles.push(em); }
    
    if (state.header) { styles.push(header); }
    if (state.quote) { styles.push(quote); }

    return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
    if (stream.match(textRE, true)) {
      return getType(state);
    }
    return undefined;        
  }

  function inlineNormal(stream, state) {
    var style = state.text(stream, state)
    if (typeof style !== 'undefined')
      return style;
    
    var ch = stream.next();
    
    if (ch === '\\') {
      stream.next();
      return getType(state);
    }
    if (ch === '`') {
      return switchInline(stream, state, inlineElement(code, '`'));
    }
    if (ch === '[') {
      return switchInline(stream, state, linkText);
    }
    if (ch === '<' && stream.match(/^\w/, false)) {
      stream.backUp(1);
      return switchBlock(stream, state, htmlBlock);
    }

    var t = getType(state);
    if (ch === '*' || ch === '_') {
      if (stream.eat(ch)) {
        return (state.strong = !state.strong) ? getType(state) : t;
      }
      return (state.em = !state.em) ? getType(state) : t;
    }
    
    return getType(state);
  }

  function linkText(stream, state) {
    while (!stream.eol()) {
      var ch = stream.next();
      if (ch === '\\') stream.next();
      if (ch === ']') {
        state.inline = state.f = linkHref;
        return linktext;
      }
    }
    return linktext;
  }

  function linkHref(stream, state) {
    stream.eatSpace();
    var ch = stream.next();
    if (ch === '(' || ch === '[') {
      return switchInline(stream, state, inlineElement(linkhref, ch === '(' ? ')' : ']'));
    }
    return 'error';
  }

  function footnoteLink(stream, state) {
    if (stream.match(/^[^\]]*\]:/, true)) {
      state.f = footnoteUrl;
      return linktext;
    }
    return switchInline(stream, state, inlineNormal);
  }

  function footnoteUrl(stream, state) {
    stream.eatSpace();
    stream.match(/^[^\s]+/, true);
    state.f = state.inline = inlineNormal;
    return linkhref;
  }

  function inlineRE(endChar) {
    if (!inlineRE[endChar]) {
      // match any not-escaped-non-endChar and any escaped char
      // then match endChar or eol
      inlineRE[endChar] = new RegExp('^(?:[^\\\\\\' + endChar + ']|\\\\.)*(?:\\' + endChar + '|$)');
    }
    return inlineRE[endChar];
  }

  function inlineElement(type, endChar, next) {
    next = next || inlineNormal;
    return function(stream, state) {
      stream.match(inlineRE(endChar));
      state.inline = state.f = next;
      return type;
    };
  }

  return {
    startState: function() {
      return {
        f: blockNormal,
        
        block: blockNormal,
        htmlState: htmlMode.startState(),
        indentation: 0,
        
        inline: inlineNormal,
        text: handleText,
        em: false,
        strong: false,
        header: false,
        quote: false
      };
    },

    copyState: function(s) {
      return {
        f: s.f,
        
        block: s.block,
        htmlState: CodeMirror.copyState(htmlMode, s.htmlState),
        indentation: s.indentation,
        
        inline: s.inline,
        text: s.text,
        em: s.em,
        strong: s.strong,
        header: s.header,
        quote: s.quote
      };
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (stream.match(/^\s*$/, true)) { return blankLine(state); }

        // Reset state.header
        state.header = false;
        // Reset state.quote
        state.quote = false;

        state.f = state.block;
        var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, '    ').length;
        state.indentationDiff = indentation - state.indentation;
        state.indentation = indentation;
        if (indentation > 0) { return null; }
      }
      return state.f(stream, state);
    },

    blankLine: blankLine,

    getType: getType
  };

}, "xml");

CodeMirror.defineMIME("text/x-markdown", "markdown");
CodeMirror.defineMode("gfm", function(config, parserConfig) {
  var mdMode = CodeMirror.getMode(config, "markdown");
  var aliases = {
    html: "htmlmixed",
    js: "javascript",
    json: "application/json",
    c: "text/x-csrc",
    "c++": "text/x-c++src",
    java: "text/x-java",
    csharp: "text/x-csharp",
    "c#": "text/x-csharp"
  };

  // make this lazy so that we don't need to load GFM last
  var getMode = (function () {
    var i, modes = {}, mimes = {}, mime;

    var list = CodeMirror.listModes();
    for (i = 0; i < list.length; i++) {
      modes[list[i]] = list[i];
    }
    var mimesList = CodeMirror.listMIMEs();
    for (i = 0; i < mimesList.length; i++) {
      mime = mimesList[i].mime;
      mimes[mime] = mimesList[i].mime;
    }

    for (var a in aliases) {
      if (aliases[a] in modes || aliases[a] in mimes)
        modes[a] = aliases[a];
    }
    
    return function (lang) {
      return modes[lang] ? CodeMirror.getMode(config, modes[lang]) : null;
    }
  }());

  function markdown(stream, state) {
    // intercept fenced code blocks
    if (stream.sol() && stream.match(/^```([\w+#]*)/)) {
      // try switching mode
      state.localMode = getMode(RegExp.$1)
      if (state.localMode)
        state.localState = state.localMode.startState();

      state.token = local;
      return 'code';
    }

    return mdMode.token(stream, state.mdState);
  }

  function local(stream, state) {
    if (stream.sol() && stream.match(/^```/)) {
      state.localMode = state.localState = null;
      state.token = markdown;
      return 'code';
    }
    else if (state.localMode) {
      return state.localMode.token(stream, state.localState);
    } else {
      stream.skipToEnd();
      return 'code';
    }
  }

  // custom handleText to prevent emphasis in the middle of a word
  // and add autolinking
  function handleText(stream, mdState) {
    var match;
    if (stream.match(/^\w+:\/\/\S+/)) {
      return 'link';
    }
    if (stream.match(/^[^\[*\\<>` _][^\[*\\<>` ]*[^\[*\\<>` _]/)) {
      return mdMode.getType(mdState);
    }
    if (match = stream.match(/^[^\[*\\<>` ]+/)) {
      var word = match[0];
      if (word[0] === '_' && word[word.length-1] === '_') {
        stream.backUp(word.length);
        return undefined;
      }
      return mdMode.getType(mdState);
    }
    if (stream.eatSpace()) {
      return null;
    }
  }

  return {
    startState: function() {
      var mdState = mdMode.startState();
      mdState.text = handleText;
      return {token: markdown, mode: "markdown", mdState: mdState,
              localMode: null, localState: null};
    },

    copyState: function(state) {
      return {token: state.token, mode: state.mode, mdState: CodeMirror.copyState(mdMode, state.mdState),
              localMode: state.localMode,
              localState: state.localMode ? CodeMirror.copyState(state.localMode, state.localState) : null};
    },

    token: function(stream, state) {
        /* Parse GFM double bracket links */
        if ((ch = stream.peek()) != undefined && ch == '[') {
            stream.next(); // Advance the stream

            /* Only handle double bracket links */
            if ((ch = stream.peek()) == undefined || ch != '[') {
                stream.backUp(1);
                return state.token(stream, state);
            } 

            while ((ch = stream.next()) != undefined && ch != ']') {}

            if (ch == ']' && (ch = stream.next()) != undefined && ch == ']') 
                return 'link';

            /* If we did not find the second ']' */
            stream.backUp(1);
        }

        /* Match GFM latex formulas, as well as latex formulas within '$' */
        if (stream.match(/^\$[^\$]+\$/)) {
            return "string";
        }

        if (stream.match(/^\\\((.*?)\\\)/)) {
            return "string";
        }

        if (stream.match(/^\$\$[^\$]+\$\$/)) {
            return "string";
        }
        
        if (stream.match(/^\\\[(.*?)\\\]/)) {
            return "string";
        }

        return state.token(stream, state);
    }
  }
}, "markdown");
CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var jsonMode = parserConfig.json;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};
    return {
      "if": A, "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": C, "break": C, "continue": C, "new": C, "delete": C, "throw": C,
      "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|]/;

  function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
  }

  function nextUntilUnescaped(stream, end) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (next == end && !escaped)
        return false;
      escaped = !escaped && next == "\\";
    }
    return escaped;
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }

  function jsTokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'")
      return chain(stream, state, jsTokenString(ch));
    else if (/[\[\]{}\(\),;\:\.]/.test(ch))
      return ret(ch);
    else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "number");
    }      
    else if (/\d/.test(ch) || ch == "-" && stream.eat(/\d/)) {
      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
      return ret("number", "number");
    }
    else if (ch == "/") {
      if (stream.eat("*")) {
        return chain(stream, state, jsTokenComment);
      }
      else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      }
      else if (state.reAllowed) {
        nextUntilUnescaped(stream, "/");
        stream.eatWhile(/[gimy]/); // 'y' is "sticky" option in Mozilla
        return ret("regexp", "string-2");
      }
      else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", null, stream.current());
      }
    }
    else if (ch == "#") {
        stream.skipToEnd();
        return ret("error", "error");
    }
    else if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return ret("operator", null, stream.current());
    }
    else {
      stream.eatWhile(/[\w\$_]/);
      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
      return (known && state.kwAllowed) ? ret(known.type, known.style, word) :
                     ret("variable", "variable", word);
    }
  }

  function jsTokenString(quote) {
    return function(stream, state) {
      if (!nextUntilUnescaped(stream, quote))
        state.tokenize = jsTokenBase;
      return ret("string", "string");
    };
  }

  function jsTokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc;
  
    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    var state = cx.state;
    if (state.context) {
      cx.marked = "def";
      for (var v = state.localVars; v; v = v.next)
        if (v.name == varname) return;
      state.localVars = {name: varname, next: state.localVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    if (!cx.state.context) cx.state.localVars = defaultVars;
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state;
      state.lexical = new JSLexical(state.indented, cx.stream.column(), type, null, state.lexical, info)
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    return function expecting(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(arguments.callee);
    };
  }

  function statement(type) {
    if (type == "var") return cont(pushlex("vardef"), vardef1, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), expect("("), pushlex(")"), forspec1, expect(")"),
                                      poplex, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"),
                                         block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                        statement, poplex, popcontext);
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeoperator);
    if (type == "function") return cont(functiondef);
    if (type == "keyword c") return cont(maybeexpression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == "[") return cont(pushlex("]"), commasep(expression, "]"), poplex, maybeoperator);
    if (type == "{") return cont(pushlex("}"), commasep(objprop, "}"), poplex, maybeoperator);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }
    
  function maybeoperator(type, value) {
    if (type == "operator" && /\+\+|--/.test(value)) return cont(maybeoperator);
    if (type == "operator" || type == ":") return cont(expression);
    if (type == ";") return;
    if (type == "(") return cont(pushlex(")"), commasep(expression, ")"), poplex, maybeoperator);
    if (type == ".") return cont(property, maybeoperator);
    if (type == "[") return cont(pushlex("]"), expression, expect("]"), poplex, maybeoperator);
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperator, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type) {
    if (type == "variable") cx.marked = "property";
    if (atomicTypes.hasOwnProperty(type)) return cont(expect(":"), expression);
  }
  function commasep(what, end) {
    function proceed(type) {
      if (type == ",") return cont(what, proceed);
      if (type == end) return cont();
      return cont(expect(end));
    }
    return function commaSeparated(type) {
      if (type == end) return cont();
      else return pass(what, proceed);
    };
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function vardef1(type, value) {
    if (type == "variable"){register(value); return cont(vardef2);}
    return cont();
  }
  function vardef2(type, value) {
    if (value == "=") return cont(expression, vardef2);
    if (type == ",") return cont(vardef1);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef1, forspec2);
    if (type == ";") return pass(forspec2);
    if (type == "variable") return cont(formaybein);
    return pass(forspec2);
  }
  function formaybein(type, value) {
    if (value == "in") return cont(expression);
    return cont(maybeoperator, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in") return cont(expression);
    return cont(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushlex(")"), pushcontext, commasep(funarg, ")"), poplex, statement, popcontext);
  }
  function funarg(type, value) {
    if (type == "variable") {register(value); return cont();}
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: jsTokenBase,
        reAllowed: true,
        kwAllowed: true,
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && {vars: parserConfig.localVars},
        indented: 0
      };
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.reAllowed = !!(type == "operator" || type == "keyword c" || type.match(/^[\[{}\(,;:]$/));
      state.kwAllowed = type != '.';
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize != jsTokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
      if (lexical.type == "stat" && firstChar == "}") lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;
      if (type == "vardef") return lexical.indented + 4;
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "stat" || type == "form") return lexical.indented + indentUnit;
      else if (lexical.info == "switch" && !closing)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricChars: ":{}"
  };
});

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMode("css", function(config) {
  var indentUnit = config.indentUnit, type;
  function ret(style, tp) {type = tp; return style;}

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == "@") {stream.eatWhile(/[\w\\\-]/); return ret("meta", stream.current());}
    else if (ch == "/" && stream.eat("*")) {
      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
    else if (ch == "<" && stream.eat("!")) {
      state.tokenize = tokenSGMLComment;
      return tokenSGMLComment(stream, state);
    }
    else if (ch == "=") ret(null, "compare");
    else if ((ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
    else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    }
    else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    }
    else if (/\d/.test(ch)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    }
    else if (/[,.+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    }
    else if (/[;{}:\[\]]/.test(ch)) {
      return ret(null, ch);
    }
    else {
      stream.eatWhile(/[\w\\\-]/);
      return ret("variable", "variable");
    }
  }

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenSGMLComment(stream, state) {
    var dashes = 0, ch;
    while ((ch = stream.next()) != null) {
      if (dashes >= 2 && ch == ">") {
        state.tokenize = tokenBase;
        break;
      }
      dashes = (ch == "-") ? dashes + 1 : 0;
    }
    return ret("comment", "comment");
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped)
          break;
        escaped = !escaped && ch == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  return {
    startState: function(base) {
      return {tokenize: tokenBase,
              baseIndent: base || 0,
              stack: []};
    },

    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);

      var context = state.stack[state.stack.length-1];
      if (type == "hash" && context != "rule") style = "string-2";
      else if (style == "variable") {
        if (context == "rule") style = "number";
        else if (!context || context == "@media{") style = "tag";
      }

      if (context == "rule" && /^[\{\};]$/.test(type))
        state.stack.pop();
      if (type == "{") {
        if (context == "@media") state.stack[state.stack.length-1] = "@media{";
        else state.stack.push("{");
      }
      else if (type == "}") state.stack.pop();
      else if (type == "@media") state.stack.push("@media");
      else if (context == "{" && type != "comment") state.stack.push("rule");
      return style;
    },

    indent: function(state, textAfter) {
      var n = state.stack.length;
      if (/^\}/.test(textAfter))
        n -= state.stack[state.stack.length-1] == "rule" ? 2 : 1;
      return state.baseIndent + n * indentUnit;
    },

    electricChars: "}"
  };
});

CodeMirror.defineMIME("text/css", "css");
/**
 * Author: Hans Engel
 * Branched from CodeMirror's Scheme mode (by Koh Zi Han, based on implementation by Koh Zi Chun)
 */
CodeMirror.defineMode("clojure", function (config, mode) {
    var BUILTIN = "builtin", COMMENT = "comment", STRING = "string", TAG = "tag",
        ATOM = "atom", NUMBER = "number", BRACKET = "bracket", KEYWORD = "keyword";
    var INDENT_WORD_SKIP = 2, KEYWORDS_SKIP = 1;

    function makeKeywords(str) {
        var obj = {}, words = str.split(" ");
        for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
        return obj;
    }

    var atoms = makeKeywords("true false nil");
    
    var keywords = makeKeywords(
      "defn defn- def def- defonce defmulti defmethod defmacro defstruct deftype defprotocol defrecord defproject deftest slice defalias defhinted defmacro- defn-memo defnk defnk defonce- defunbound defunbound- defvar defvar- let letfn do case cond condp for loop recur when when-not when-let when-first if if-let if-not . .. -> ->> doto and or dosync doseq dotimes dorun doall load import unimport ns in-ns refer try catch finally throw with-open with-local-vars binding gen-class gen-and-load-class gen-and-save-class handler-case handle");

    var builtins = makeKeywords(
        "* *1 *2 *3 *agent* *allow-unresolved-vars* *assert *clojure-version* *command-line-args* *compile-files* *compile-path* *e *err* *file* *flush-on-newline* *in* *macro-meta* *math-context* *ns* *out* *print-dup* *print-length* *print-level* *print-meta* *print-readably* *read-eval* *source-path* *use-context-classloader* *warn-on-reflection* + - / < <= = == > >= accessor aclone agent agent-errors aget alength alias all-ns alter alter-meta! alter-var-root amap ancestors and apply areduce array-map aset aset-boolean aset-byte aset-char aset-double aset-float aset-int aset-long aset-short assert assoc assoc! assoc-in associative? atom await await-for await1 bases bean bigdec bigint binding bit-and bit-and-not bit-clear bit-flip bit-not bit-or bit-set bit-shift-left bit-shift-right bit-test bit-xor boolean boolean-array booleans bound-fn bound-fn* butlast byte byte-array bytes case cast char char-array char-escape-string char-name-string char? chars chunk chunk-append chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? class class? clear-agent-errors clojure-version coll? comment commute comp comparator compare compare-and-set! compile complement concat cond condp conj conj! cons constantly construct-proxy contains? count counted? create-ns create-struct cycle dec decimal? declare definline defmacro defmethod defmulti defn defn- defonce defstruct delay delay? deliver deref derive descendants destructure disj disj! dissoc dissoc! distinct distinct? doall doc dorun doseq dosync dotimes doto double double-array doubles drop drop-last drop-while empty empty? ensure enumeration-seq eval even? every? extend extend-protocol extend-type extends? extenders false? ffirst file-seq filter find find-doc find-ns find-var first float float-array float? floats flush fn fn? fnext for force format future future-call future-cancel future-cancelled? future-done? future? gen-class gen-interface gensym get get-in get-method get-proxy-class get-thread-bindings get-validator hash hash-map hash-set identical? identity if-let if-not ifn? import in-ns inc init-proxy instance? int int-array integer? interleave intern interpose into into-array ints io! isa? iterate iterator-seq juxt key keys keyword keyword? last lazy-cat lazy-seq let letfn line-seq list list* list? load load-file load-reader load-string loaded-libs locking long long-array longs loop macroexpand macroexpand-1 make-array make-hierarchy map map? mapcat max max-key memfn memoize merge merge-with meta method-sig methods min min-key mod name namespace neg? newline next nfirst nil? nnext not not-any? not-empty not-every? not= ns ns-aliases ns-imports ns-interns ns-map ns-name ns-publics ns-refers ns-resolve ns-unalias ns-unmap nth nthnext num number? odd? or parents partial partition pcalls peek persistent! pmap pop pop! pop-thread-bindings pos? pr pr-str prefer-method prefers primitives-classnames print print-ctor print-doc print-dup print-method print-namespace-doc print-simple print-special-doc print-str printf println println-str prn prn-str promise proxy proxy-call-with-super proxy-mappings proxy-name proxy-super push-thread-bindings pvalues quot rand rand-int range ratio? rational? rationalize re-find re-groups re-matcher re-matches re-pattern re-seq read read-line read-string reify reduce ref ref-history-count ref-max-history ref-min-history ref-set refer refer-clojure release-pending-sends rem remove remove-method remove-ns repeat repeatedly replace replicate require reset! reset-meta! resolve rest resultset-seq reverse reversible? rseq rsubseq satisfies? second select-keys send send-off seq seq? seque sequence sequential? set set-validator! set? short short-array shorts shutdown-agents slurp some sort sort-by sorted-map sorted-map-by sorted-set sorted-set-by sorted? special-form-anchor special-symbol? split-at split-with str stream? string? struct struct-map subs subseq subvec supers swap! symbol symbol? sync syntax-symbol-anchor take take-last take-nth take-while test the-ns time to-array to-array-2d trampoline transient tree-seq true? type unchecked-add unchecked-dec unchecked-divide unchecked-inc unchecked-multiply unchecked-negate unchecked-remainder unchecked-subtract underive unquote unquote-splicing update-in update-proxy use val vals var-get var-set var? vary-meta vec vector vector? when when-first when-let when-not while with-bindings with-bindings* with-in-str with-loading-context with-local-vars with-meta with-open with-out-str with-precision xml-seq");

    var indentKeys = makeKeywords(
        // Built-ins
        "ns fn def defn defmethod bound-fn if if-not case condp when while when-not when-first do future comment doto locking proxy with-open with-precision reify deftype defrecord defprotocol extend extend-protocol extend-type try catch " +

        // Binding forms
        "let letfn binding loop for doseq dotimes when-let if-let " +

        // Data structures
        "defstruct struct-map assoc " +

        // clojure.test
        "testing deftest " +

        // contrib
        "handler-case handle dotrace deftrace");

    var tests = {
        digit: /\d/,
        digit_or_colon: /[\d:]/,
        hex: /[0-9a-fA-F]/,
        sign: /[+-]/,
        exponent: /[eE]/,
        keyword_char: /[^\s\(\[\;\)\]]/,
        basic: /[\w\$_\-]/,
        lang_keyword: /[\w*+!\-_?:\/]/
    };

    function stateStack(indent, type, prev) { // represents a state stack object
        this.indent = indent;
        this.type = type;
        this.prev = prev;
    }

    function pushStack(state, indent, type) {
        state.indentStack = new stateStack(indent, type, state.indentStack);
    }

    function popStack(state) {
        state.indentStack = state.indentStack.prev;
    }

    function isNumber(ch, stream){
        // hex
        if ( ch === '0' && 'x' == stream.peek().toLowerCase() ) {
            stream.eat('x');
            stream.eatWhile(tests.hex);
            return true;
        }

        // leading sign
        if ( ch == '+' || ch == '-' ) {
          stream.eat(tests.sign);
          ch = stream.next();
        }

        if ( tests.digit.test(ch) ) {
            stream.eat(ch);
            stream.eatWhile(tests.digit);

            if ( '.' == stream.peek() ) {
                stream.eat('.');
                stream.eatWhile(tests.digit);
            }

            if ( 'e' == stream.peek().toLowerCase() ) {
                stream.eat(tests.exponent);
                stream.eat(tests.sign);
                stream.eatWhile(tests.digit);
            }

            return true;
        }

        return false;
    }

    return {
        startState: function () {
            return {
                indentStack: null,
                indentation: 0,
                mode: false
            };
        },

        token: function (stream, state) {
            if (state.indentStack == null && stream.sol()) {
                // update indentation, but only if indentStack is empty
                state.indentation = stream.indentation();
            }

            // skip spaces
            if (stream.eatSpace()) {
                return null;
            }
            var returnType = null;

            switch(state.mode){
                case "string": // multi-line string parsing mode
                    var next, escaped = false;
                    while ((next = stream.next()) != null) {
                        if (next == "\"" && !escaped) {

                            state.mode = false;
                            break;
                        }
                        escaped = !escaped && next == "\\";
                    }
                    returnType = STRING; // continue on in string mode
                    break;
                default: // default parsing mode
                    var ch = stream.next();

                    if (ch == "\"") {
                        state.mode = "string";
                        returnType = STRING;
                    } else if (ch == "'" && !( tests.digit_or_colon.test(stream.peek()) )) {
                        returnType = ATOM;
                    } else if (ch == ";") { // comment
                        stream.skipToEnd(); // rest of the line is a comment
                        returnType = COMMENT;
                    } else if (isNumber(ch,stream)){
                        returnType = NUMBER;
                    } else if (ch == "(" || ch == "[") {
                        var keyWord = ''; var indentTemp = stream.column();
                        /**
                        Either
                        (indent-word ..
                        (non-indent-word ..
                        (;something else, bracket, etc.
                        */

                        if (ch == "(") while ((letter = stream.eat(tests.keyword_char)) != null) {
                            keyWord += letter;
                        }

                        if (keyWord.length > 0 && indentKeys.propertyIsEnumerable(keyWord)) { // indent-word
                            pushStack(state, indentTemp + INDENT_WORD_SKIP, ch);
                        } else { // non-indent word
                            // we continue eating the spaces
                            stream.eatSpace();
                            if (stream.eol() || stream.peek() == ";") {
                                // nothing significant after
                                // we restart indentation 1 space after
                                pushStack(state, indentTemp + 1, ch);
                            } else {
                                pushStack(state, indentTemp + stream.current().length, ch); // else we match
                            }
                        }
                        stream.backUp(stream.current().length - 1); // undo all the eating

                        returnType = BRACKET;
                    } else if (ch == ")" || ch == "]") {
                        returnType = BRACKET;
                        if (state.indentStack != null && state.indentStack.type == (ch == ")" ? "(" : "[")) {
                            popStack(state);
                        }
                    } else if ( ch == ":" ) {
                        stream.eatWhile(tests.lang_keyword);
                        return ATOM;
                    } else {
                        stream.eatWhile(tests.basic);

                        if (keywords && keywords.propertyIsEnumerable(stream.current())) {
                            returnType = KEYWORD;
                        } else if (builtins && builtins.propertyIsEnumerable(stream.current())) {
                            returnType = BUILTIN;
                        } else if (atoms && atoms.propertyIsEnumerable(stream.current())) {
                            returnType = ATOM;
                        } else returnType = null;
                    }
            }

            return returnType;
        },

        indent: function (state, textAfter) {
            if (state.indentStack == null) return state.indentation;
            return state.indentStack.indent;
        }
    };
});

CodeMirror.defineMIME("text/x-clojure", "clojure");
/***************************************
*
*	Javascript Textile->HTML conversion
*
*	ben@ben-daglish.net (with thanks to John Hughes for improvements)
*   Issued under the "do what you like with it - I take no respnsibility" licence
****************************************/
function convert_textile(t) {

  var inpr,inbq,inbqq,html;
  var aliases = new Array;
  var alg={'>':'right','<':'left','=':'center','<>':'justify','~':'bottom','^':'top'};
  var ent={"'":"&#8217;"," - ":" &#8211; ","--":"&#8212;"," x ":" &#215; ","\\.\\.\\.":"&#8230;","\\(C\\)":"&#169;","\\(R\\)":"&#174;","\\(TM\\)":"&#8482;"};
  var tags={"b":"\\*\\*","i":"__","em":"_","strong":"\\*","cite":"\\?\\?","sup":"\\^","sub":"~","span":"\\%","del":"-","code":"@","ins":"\\+","del":"-"};
  var le="\n\n";
  var lstlev=0,lst="",elst="",intable=0,mm="";
  var para = /^p(\S*)\.\s*(.*)/;
  var rfn = /^fn(\d+)\.\s*(.*)/;
  var bq = /^bq\.(\.)?\s*/;
  var table=/^table\s*{(.*)}\..*/;
  var trstyle = /^\{(\S+)\}\.\s*\|/;
  
  function convert(t) {
  	var lines = t.split(/\r?\n/);
  	html="";
  	inpr=inbq=inbqq=0;
  	for(var i=0;i<lines.length;i++) {
  		if(lines[i].indexOf("[") == 0) {
  			var m = lines[i].indexOf("]");
  			aliases[lines[i].substring(1,m)]=lines[i].substring(m+1);
  		}
  	}
  	for(i=0;i<lines.length;i++) {
  		if (lines[i].indexOf("[") == 0) {continue;}
  		if(mm=para.exec(lines[i])){stp(1);inpr=1;html += lines[i].replace(para,"<p"+make_attr(mm[1])+">"+prep(mm[2]));continue;}
  		if(mm = /^h(\d)(\S*)\.\s*(.*)/.exec(lines[i])){stp(1);html += tag("h"+mm[1],make_attr(mm[2]),prep(mm[3]))+le;continue;}
  		if(mm=rfn.exec(lines[i])){stp(1);inpr=1;html+=lines[i].replace(rfn,'<p id="fn'+mm[1]+'"><sup>'+mm[1]+'<\/sup>'+prep(mm[2]));continue;}
  		if (lines[i].indexOf("*") == 0) {lst="<ul>";elst="<\/ul>";}
  		else if (lines[i].indexOf("#") == 0) {lst="<\ol>";elst="<\/ol>";}
  		else {while (lstlev > 0) {html += elst;if(lstlev > 1){html += "<\/li>";}else{html+="\n";}html+="\n";lstlev--;}lst="";}
  		if(lst) {
  			stp(1);
  			var m = /^([*#]+)\s*(.*)/.exec(lines[i]);
  			var lev = m[1].length;
  			while(lev < lstlev) {html += elst+"<\/li>\n";lstlev--;}
  			while(lstlev < lev) {html=html.replace(/<\/li>\n$/,"\n");html += lst;lstlev++;}
  			html += tag("li","",prep(m[2]))+"\n";
  			continue;
  		}
  		if (lines[i].match(table)){stp(1);intable=1;html += lines[i].replace(table,'<table style="$1;">\n');continue;}
  		if ((lines[i].indexOf("|") == 0)  || (lines[i].match(trstyle)) ) {
  			stp(1);
  			if(!intable) {html += "<table>\n";intable=1;}
  			var rowst="";var trow="";
  			var ts=trstyle.exec(lines[i]);
  			if(ts){rowst=qat('style',ts[1]);lines[i]=lines[i].replace(trstyle,"\|");}
  			var cells = lines[i].split("|");
  			for(j=1;j<cells.length-1;j++) {
  				var ttag="td";
  				if(cells[j].indexOf("_.")==0) {ttag="th";cells[j]=cells[j].substring(2);}
  				cells[j]=prep(cells[j]);
  				var al=/^([<>=^~\/\\\{]+.*?)\.(.*)/.exec(cells[j]);
  				var at="",st="";
  				if(al != null) {
  					cells[j]=al[2];
  					var cs= /\\(\d+)/.exec(al[1]);if(cs != null){at +=qat('colspan',cs[1]);}
  					var rs= /\/(\d+)/.exec(al[1]);if(rs != null){at +=qat('rowspan',rs[1]);}
  					var va= /([\^~])/.exec(al[1]);if(va != null){st +="vertical-align:"+alg[va[1]]+";";}
  					var ta= /(<>|=|<|>)/.exec(al[1]);if(ta != null){st +="text-align:"+alg[ta[1]]+";";}
  					var is= /\{([^\}]+)\}/.exec(al[1]);if(is != null){st +=is[1];}
  					if(st != ""){at+=qat('style',st);}					
  				}
  				trow += tag(ttag,at,cells[j]);
  			}
  			html += "\t"+tag("tr",rowst,trow)+"\n";
  			continue;
  		}
  		if(intable) {html += "<\/table>"+le;intable=0;}
  
  		if (lines[i]=="") {stp();}
  		else if (!inpr) {
  			if(mm=bq.exec(lines[i])){lines[i]=lines[i].replace(bq,"");html +="<blockquote>";inbq=1;if(mm[1]) {inbqq=1;}}
  			html += "<p>"+prep(lines[i]);inpr=1;
  		}
  		else {html += prep(lines[i]);}
  	}
  	stp();
  	return html;
  }
  
  function prep(m){
  	for(i in ent) {m=m.replace(new RegExp(i,"g"),ent[i]);}
  	for(i in tags) {
  		m = make_tag(m,RegExp("^"+tags[i]+"(.+?)"+tags[i]),i,"");
  		m = make_tag(m,RegExp(" "+tags[i]+"(.+?)"+tags[i]),i," ");
  	}
  	m=m.replace(/\[(\d+)\]/g,'<sup><a href="#fn$1">$1<\/a><\/sup>');
  	m=m.replace(/([A-Z]+)\((.*?)\)/g,'<acronym title="$2">$1<\/acronym>');
  	m=m.replace(/\"([^\"]+)\":((http|https|mailto):\S+)/g,'<a href="$2">$1<\/a>');
  	m = make_image(m,/!([^!\s]+)!:(\S+)/);
  	m = make_image(m,/!([^!\s]+)!/);
  	m=m.replace(/"([^\"]+)":(\S+)/g,function($0,$1,$2){return tag("a",qat('href',aliases[$2]),$1)});
  	m=m.replace(/(=)?"([^\"]+)"/g,function($0,$1,$2){return ($1)?$0:"&#8220;"+$2+"&#8221;"});
  	return m;
  }
  
  function make_tag(s,re,t,sp) {
  	while(m = re.exec(s)) {
  		var st = make_attr(m[1]);
  		m[1]=m[1].replace(/^[\[\{\(]\S+[\]\}\)]/g,"");
  		m[1]=m[1].replace(/^[<>=()]+/,"");
  		s = s.replace(re,sp+tag(t,st,m[1]));
  	}
  	return s;
  }
  
  function make_image(m,re) {
  	var ma = re.exec(m);
  	if(ma != null) {
  		var attr="";var st="";
  		var at = /\((.*)\)$/.exec(ma[1]);
  		if(at != null) {attr = qat('alt',at[1])+qat("title",at[1]);ma[1]=ma[1].replace(/\((.*)\)$/,"");}
  		if(ma[1].match(/^[><]/)) {st = "float:"+((ma[1].indexOf(">")==0)?"right;":"left;");ma[1]=ma[1].replace(/^[><]/,"");}
  		var pdl = /(\(+)/.exec(ma[1]);if(pdl){st+="padding-left:"+pdl[1].length+"em;";}
  		var pdr = /(\)+)/.exec(ma[1]);if(pdr){st+="padding-right:"+pdr[1].length+"em;";}
  		if(st){attr += qat('style',st);}
  		var im = '<img src="'+ma[1]+'"'+attr+" />";
  		if(ma.length >2) {im=tag('a',qat('href',ma[2]),im);}
  		m = m.replace(re,im);
  	}
  	return m;
  }
  
  function make_attr(s) {
  	var st="";var at="";
  	if(!s){return "";}
  	var l=/\[(\w\w)\]/.exec(s);
  	if(l != null) {at += qat('lang',l[1]);}
  	var ci=/\((\S+)\)/.exec(s);
  	if(ci != null) {
  		s = s.replace(/\((\S+)\)/,"");
  		at += ci[1].replace(/#(.*)$/,' id="$1"').replace(/^(\S+)/,' class="$1"');
  	}
  	var ta= /(<>|=|<|>)/.exec(s);if(ta){st +="text-align:"+alg[ta[1]]+";";}
  	var ss=/\{(\S+)\}/.exec(s);if(ss){st += ss[1];if(!ss[1].match(/;$/)){st+= ";";}}
  	var pdl = /(\(+)/.exec(s);if(pdl){st+="padding-left:"+pdl[1].length+"em;";}
  	var pdr = /(\)+)/.exec(s);if(pdr){st+="padding-right:"+pdr[1].length+"em;";}
  	if(st) {at += qat('style',st);}
  	return at;
  }
  
  function qat(a,v){return ' '+a+'="'+v+'"';}
  function tag(t,a,c) {return "<"+t+a+">"+c+"</"+t+">";}
  function stp(b){if(b){inbqq=0;}if(inpr){html+="<\/p>"+le;inpr=0;}if(inbq && !inbqq){html+="<\/blockquote>"+le;inbq=0;}}

return convert(t);
}
/**
 * Link to the project's GitHub page:
 * https://github.com/pickhardt/coffeescript-codemirror-mode
 */
CodeMirror.defineMode('coffeescript', function(conf) {
    var ERRORCLASS = 'error';

    function wordRegexp(words) {
        return new RegExp("^((" + words.join(")|(") + "))\\b");
    }

    var singleOperators = new RegExp("^[\\+\\-\\*/%&|\\^~<>!\?]");
    var singleDelimiters = new RegExp('^[\\(\\)\\[\\]\\{\\},:`=;\\.]');
    var doubleOperators = new RegExp("^((\->)|(\=>)|(\\+\\+)|(\\+\\=)|(\\-\\-)|(\\-\\=)|(\\*\\*)|(\\*\\=)|(\\/\\/)|(\\/\\=)|(==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//))");
    var doubleDelimiters = new RegExp("^((\\.\\.)|(\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");
    var tripleDelimiters = new RegExp("^((\\.\\.\\.)|(//=)|(>>=)|(<<=)|(\\*\\*=))");
    var identifiers = new RegExp("^[_A-Za-z$][_A-Za-z$0-9]*");
    var properties = new RegExp("^(@|this\.)[_A-Za-z$][_A-Za-z$0-9]*");

    var wordOperators = wordRegexp(['and', 'or', 'not',
                                    'is', 'isnt', 'in',
                                    'instanceof', 'typeof']);
    var indentKeywords = ['for', 'while', 'loop', 'if', 'unless', 'else',
                          'switch', 'try', 'catch', 'finally', 'class'];
    var commonKeywords = ['break', 'by', 'continue', 'debugger', 'delete',
                          'do', 'in', 'of', 'new', 'return', 'then',
                          'this', 'throw', 'when', 'until'];

    var keywords = wordRegexp(indentKeywords.concat(commonKeywords));

    indentKeywords = wordRegexp(indentKeywords);


    var stringPrefixes = new RegExp("^('{3}|\"{3}|['\"])");
    var regexPrefixes = new RegExp("^(/{3}|/)");
    var commonConstants = ['Infinity', 'NaN', 'undefined', 'null', 'true', 'false', 'on', 'off', 'yes', 'no'];
    var constants = wordRegexp(commonConstants);

    // Tokenizers
    function tokenBase(stream, state) {
        // Handle scope changes
        if (stream.sol()) {
            var scopeOffset = state.scopes[0].offset;
            if (stream.eatSpace()) {
                var lineOffset = stream.indentation();
                if (lineOffset > scopeOffset) {
                    return 'indent';
                } else if (lineOffset < scopeOffset) {
                    return 'dedent';
                }
                return null;
            } else {
                if (scopeOffset > 0) {
                    dedent(stream, state);
                }
            }
        }
        if (stream.eatSpace()) {
            return null;
        }

        var ch = stream.peek();

        // Handle docco title comment (single line)
        if (stream.match("####")) {
            stream.skipToEnd();
            return 'comment';
        }

        // Handle multi line comments
        if (stream.match("###")) {
            state.tokenize = longComment;
            return state.tokenize(stream, state);
        }

        // Single line comment
        if (ch === '#') {
            stream.skipToEnd();
            return 'comment';
        }

        // Handle number literals
        if (stream.match(/^-?[0-9\.]/, false)) {
            var floatLiteral = false;
            // Floats
            if (stream.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)) {
              floatLiteral = true;
            }
            if (stream.match(/^-?\d+\.\d*/)) {
              floatLiteral = true;
            }
            if (stream.match(/^-?\.\d+/)) {
              floatLiteral = true;
            }

            if (floatLiteral) {
                // prevent from getting extra . on 1..
                if (stream.peek() == "."){
                    stream.backUp(1);
                }
                return 'number';
            }
            // Integers
            var intLiteral = false;
            // Hex
            if (stream.match(/^-?0x[0-9a-f]+/i)) {
              intLiteral = true;
            }
            // Decimal
            if (stream.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)) {
                intLiteral = true;
            }
            // Zero by itself with no other piece of number.
            if (stream.match(/^-?0(?![\dx])/i)) {
              intLiteral = true;
            }
            if (intLiteral) {
                return 'number';
            }
        }

        // Handle strings
        if (stream.match(stringPrefixes)) {
            state.tokenize = tokenFactory(stream.current(), 'string');
            return state.tokenize(stream, state);
        }
        // Handle regex literals
        if (stream.match(regexPrefixes)) {
            if (stream.current() != '/' || stream.match(/^.*\//, false)) { // prevent highlight of division
                state.tokenize = tokenFactory(stream.current(), 'string-2');
                return state.tokenize(stream, state);
            } else {
                stream.backUp(1);
            }
        }

        // Handle operators and delimiters
        if (stream.match(tripleDelimiters) || stream.match(doubleDelimiters)) {
            return 'punctuation';
        }
        if (stream.match(doubleOperators)
            || stream.match(singleOperators)
            || stream.match(wordOperators)) {
            return 'operator';
        }
        if (stream.match(singleDelimiters)) {
            return 'punctuation';
        }

        if (stream.match(constants)) {
            return 'atom';
        }

        if (stream.match(keywords)) {
            return 'keyword';
        }

        if (stream.match(identifiers)) {
            return 'variable';
        }
        
        if (stream.match(properties)) {
            return 'property';
        }

        // Handle non-detected items
        stream.next();
        return ERRORCLASS;
    }

    function tokenFactory(delimiter, outclass) {
        var singleline = delimiter.length == 1;
        return function tokenString(stream, state) {
            while (!stream.eol()) {
                stream.eatWhile(/[^'"\/\\]/);
                if (stream.eat('\\')) {
                    stream.next();
                    if (singleline && stream.eol()) {
                        return outclass;
                    }
                } else if (stream.match(delimiter)) {
                    state.tokenize = tokenBase;
                    return outclass;
                } else {
                    stream.eat(/['"\/]/);
                }
            }
            if (singleline) {
                if (conf.mode.singleLineStringErrors) {
                    outclass = ERRORCLASS
                } else {
                    state.tokenize = tokenBase;
                }
            }
            return outclass;
        };
    }

    function longComment(stream, state) {
        while (!stream.eol()) {
            stream.eatWhile(/[^#]/);
            if (stream.match("###")) {
                state.tokenize = tokenBase;
                break;
            }
            stream.eatWhile("#");
        }
        return "comment"
    }

    function indent(stream, state, type) {
        type = type || 'coffee';
        var indentUnit = 0;
        if (type === 'coffee') {
            for (var i = 0; i < state.scopes.length; i++) {
                if (state.scopes[i].type === 'coffee') {
                    indentUnit = state.scopes[i].offset + conf.indentUnit;
                    break;
                }
            }
        } else {
            indentUnit = stream.column() + stream.current().length;
        }
        state.scopes.unshift({
            offset: indentUnit,
            type: type
        });
    }

    function dedent(stream, state) {
        if (state.scopes.length == 1) return;
        if (state.scopes[0].type === 'coffee') {
            var _indent = stream.indentation();
            var _indent_index = -1;
            for (var i = 0; i < state.scopes.length; ++i) {
                if (_indent === state.scopes[i].offset) {
                    _indent_index = i;
                    break;
                }
            }
            if (_indent_index === -1) {
                return true;
            }
            while (state.scopes[0].offset !== _indent) {
                state.scopes.shift();
            }
            return false
        } else {
            state.scopes.shift();
            return false;
        }
    }

    function tokenLexer(stream, state) {
        var style = state.tokenize(stream, state);
        var current = stream.current();

        // Handle '.' connected identifiers
        if (current === '.') {
            style = state.tokenize(stream, state);
            current = stream.current();
            if (style === 'variable') {
                return 'variable';
            } else {
                return ERRORCLASS;
            }
        }

        // Handle scope changes.
        if (current === 'return') {
            state.dedent += 1;
        }
        if (((current === '->' || current === '=>') &&
                  !state.lambda &&
                  state.scopes[0].type == 'coffee' &&
                  stream.peek() === '')
               || style === 'indent') {
            indent(stream, state);
        }
        var delimiter_index = '[({'.indexOf(current);
        if (delimiter_index !== -1) {
            indent(stream, state, '])}'.slice(delimiter_index, delimiter_index+1));
        }
        if (indentKeywords.exec(current)){
            indent(stream, state);
        }
        if (current == 'then'){
            dedent(stream, state);
        }


        if (style === 'dedent') {
            if (dedent(stream, state)) {
                return ERRORCLASS;
            }
        }
        delimiter_index = '])}'.indexOf(current);
        if (delimiter_index !== -1) {
            if (dedent(stream, state)) {
                return ERRORCLASS;
            }
        }
        if (state.dedent > 0 && stream.eol() && state.scopes[0].type == 'coffee') {
            if (state.scopes.length > 1) state.scopes.shift();
            state.dedent -= 1;
        }

        return style;
    }

    var external = {
        startState: function(basecolumn) {
            return {
              tokenize: tokenBase,
              scopes: [{offset:basecolumn || 0, type:'coffee'}],
              lastToken: null,
              lambda: false,
              dedent: 0
          };
        },

        token: function(stream, state) {
            var style = tokenLexer(stream, state);

            state.lastToken = {style:style, content: stream.current()};

            if (stream.eol() && stream.lambda) {
                state.lambda = false;
            }

            return style;
        },

        indent: function(state, textAfter) {
            if (state.tokenize != tokenBase) {
                return 0;
            }

            return state.scopes[0].offset;
        }

    };
    return external;
});

CodeMirror.defineMIME('text/x-coffeescript', 'coffeescript');
/*
LESS mode - http://www.lesscss.org/
Ported to CodeMirror by Peter Kroon
*/

CodeMirror.defineMode("less", function(config) {
  var indentUnit = config.indentUnit, type;
  function ret(style, tp) {type = tp; return style;}
  //html5 tags
  var tags = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","keygen","kbd","label","legend","li","link","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"];
  
  function inTagsArray(val){
	  for(var i=0; i<tags.length; i++){
		  if(val === tags[i]){
			  return true;
		  }
	  }
  }

  function tokenBase(stream, state) {
    var ch = stream.next();

	if (ch == "@") {stream.eatWhile(/[\w\-]/); return ret("meta", stream.current());}
    else if (ch == "/" && stream.eat("*")) {
      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
    else if (ch == "<" && stream.eat("!")) {
      state.tokenize = tokenSGMLComment;
      return tokenSGMLComment(stream, state);
    }
    else if (ch == "=") ret(null, "compare");
    else if ((ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
    else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
	else if (ch == "/") { // lesscss e.g.: .png will not be parsed as a class
	  if(stream.eat("/")){
		state.tokenize = tokenSComment
      	return tokenSComment(stream, state);
	  }else{
	    stream.eatWhile(/[\a-zA-Z0-9\-_.\s]/);
		if(/\/|\)|#/.test(stream.peek() || stream.eol() || (stream.eatSpace() && stream.peek() == ")")))return ret("string", "string");//let url(/images/logo.png) without quotes return as string
        return ret("number", "unit");
	  }
    }
    else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    }
    else if (/\d/.test(ch)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    }
    else if (/[,+<>*\/]/.test(ch)) {//removed . dot character original was [,.+>*\/]
      return ret(null, "select-op");
    }
    else if (/[;{}:\[\]()]/.test(ch)) { //added () char for lesscss original was [;{}:\[\]]
      if(ch == ":"){
		stream.eatWhile(/[active|hover|link|visited]/);
		if( stream.current().match(/active|hover|link|visited/)){
		  return ret("tag", "tag");
		}else{
		  return ret(null, ch);	
		}
	  }else{
  	    return ret(null, ch);
	  }
    }
	else if (ch == ".") { // lesscss
	  stream.eatWhile(/[\a-zA-Z0-9\-_]/);
      return ret("tag", "tag");
    }
	else if (ch == "#") { // lesscss
	  //we don't eat white-space, we want the hex color and or id only
	  stream.eatWhile(/[A-Za-z0-9]/);
	  //check if there is a proper hex color length e.g. #eee || #eeeEEE
	  if(stream.current().length ===4 || stream.current().length ===7){
		  if(stream.current().match(/[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}/,false) != null){//is there a valid hex color value present in the current stream
		  	//when not a valid hex value, parse as id
			if(stream.current().substring(1) != stream.current().match(/[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}/,false))return ret("atom", "tag");
			//eat white-space
			stream.eatSpace();
			//when hex value declaration doesn't end with [;,] but is does with a slash/cc comment treat it as an id, just like the other hex values that don't end with[;,]
			if( /[\/<>.(){!$%^&*_\-\\?=+\|#'~`]/.test(stream.peek()) )return ret("atom", "tag");
			//#time { color: #aaa }
			else if(stream.peek() == "}" )return ret("number", "unit");
			//we have a valid hex color value, parse as id whenever an element/class is defined after the hex(id) value e.g. #eee aaa || #eee .aaa
			else if( /[a-zA-Z\\]/.test(stream.peek()) )return ret("atom", "tag");
			//when a hex value is on the end of a line, parse as id
			else if(stream.eol())return ret("atom", "tag");
			//default
			else return ret("number", "unit");
		  }else{//when not a valid hexvalue in the current stream e.g. #footer
			stream.eatWhile(/[\w\\\-]/);
			return ret("atom", "tag"); 
		  }
	  }else{
		stream.eatWhile(/[\w\\\-]/);		
		return ret("atom", "tag");
	  }
    }
	else if (ch == "&") {
	  stream.eatWhile(/[\w\-]/);
	  return ret(null, ch);
	}
    else {
      stream.eatWhile(/[\w\\\-_%.{]/);
	  if(stream.current().match(/http|https/) != null){
		stream.eatWhile(/[\w\\\-_%.{:\/]/);
		return ret("string", "string");
	  }else if(stream.peek() == "<" || stream.peek() == ">"){
		return ret("tag", "tag");
	  }else if( stream.peek().match(/\(/) != null ){// lessc
		return ret(null, ch);
	  }else if (stream.peek() == "/" && state.stack[state.stack.length-1] != undefined){ // url(dir/center/image.png)
	  	return ret("string", "string");
	  }else if( stream.current().match(/\-\d|\-.\d/) ){ // lesscss match e.g.: -5px -0.4 etc... only colorize the minus sign
		//stream.backUp(stream.current().length-1); //commment out these 2 comment if you want the minus sign to be parsed as null -500px
	  	//return ret(null, ch);
		return ret("number", "unit");
	  }else if( inTagsArray(stream.current()) ){ // lesscss match html tags
	  	return ret("tag", "tag");
	  }else if( /\/|[\s\)]/.test(stream.peek() || stream.eol() || (stream.eatSpace() && stream.peek() == "/")) && stream.current().indexOf(".") !== -1){
		if(stream.current().substring(stream.current().length-1,stream.current().length) == "{"){
			stream.backUp(1);
			return ret("tag", "tag");
		}//end if
		if( (stream.eatSpace() && stream.peek().match(/[{<>.a-zA-Z]/) != null)  || stream.eol() )return ret("tag", "tag");//e.g. button.icon-plus
		return ret("string", "string");//let url(/images/logo.png) without quotes return as string
	  }else if( stream.eol() ){
		  if(stream.current().substring(stream.current().length-1,stream.current().length) == "{")stream.backUp(1);
		  return ret("tag", "tag");
	  }else{
      	return ret("variable", "variable");
	  }
    }
    
  }

  function tokenSComment(stream, state) {// SComment = Slash comment
    stream.skipToEnd();
	state.tokenize = tokenBase;
    return ret("comment", "comment");
  }
    
  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenSGMLComment(stream, state) {
    var dashes = 0, ch;
    while ((ch = stream.next()) != null) {
      if (dashes >= 2 && ch == ">") {
        state.tokenize = tokenBase;
        break;
      }
      dashes = (ch == "-") ? dashes + 1 : 0;
    }
    return ret("comment", "comment");
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped)
          break;
        escaped = !escaped && ch == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  return {
    startState: function(base) { 
      return {tokenize: tokenBase,
              baseIndent: base || 0,
              stack: []};
    },

    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);

      var context = state.stack[state.stack.length-1];
      if (type == "hash" && context == "rule") style = "atom";
      else if (style == "variable") {
        if (context == "rule") style = null; //"tag"
        else if (!context || context == "@media{"){ 
			style = stream.current() 	== "when" 	? "variable" 	: 
			stream.string.match(/#/g) 	!= undefined 	? null 		: 
			/[\s,|\s\)]/.test(stream.peek()) 		? "tag" 	: null;
		}
      }

      if (context == "rule" && /^[\{\};]$/.test(type))
        state.stack.pop();
      if (type == "{") {
        if (context == "@media") state.stack[state.stack.length-1] = "@media{";
        else state.stack.push("{");
      }
      else if (type == "}") state.stack.pop();
      else if (type == "@media") state.stack.push("@media");
      else if (context == "{" && type != "comment") state.stack.push("rule");
      return style;
    },

    indent: function(state, textAfter) {
      var n = state.stack.length;
      if (/^\}/.test(textAfter))
        n -= state.stack[state.stack.length-1] == "rule" ? 2 : 1;
      return state.baseIndent + n * indentUnit;
    },

    electricChars: "}"
  };
});

CodeMirror.defineMIME("text/x-less", "less");
if (!CodeMirror.mimeModes.hasOwnProperty("text/css"))
  CodeMirror.defineMIME("text/css", "less");
CodeMirror.defineMode("htmlmixed", function(config, parserConfig) {
  var htmlMode = CodeMirror.getMode(config, {name: "xml", htmlMode: true});
  var jsMode = CodeMirror.getMode(config, "javascript");
  var cssMode = CodeMirror.getMode(config, "css");

  function html(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (style == "tag" && stream.current() == ">" && state.htmlState.context) {
      if (/^script$/i.test(state.htmlState.context.tagName)) {
        state.token = javascript;
        state.localState = jsMode.startState(htmlMode.indent(state.htmlState, ""));
        state.mode = "javascript";
      }
      else if (/^style$/i.test(state.htmlState.context.tagName)) {
        state.token = css;
        state.localState = cssMode.startState(htmlMode.indent(state.htmlState, ""));
        state.mode = "css";
      }
    }
    return style;
  }
  function maybeBackup(stream, pat, style) {
    var cur = stream.current();
    var close = cur.search(pat);
    if (close > -1) stream.backUp(cur.length - close);
    return style;
  }
  function javascript(stream, state) {
    if (stream.match(/^<\/\s*script\s*>/i, false)) {
      state.token = html;
      state.localState = null;
      state.mode = "html";
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*script\s*>/,
                       jsMode.token(stream, state.localState));
  }
  function css(stream, state) {
    if (stream.match(/^<\/\s*style\s*>/i, false)) {
      state.token = html;
      state.localState = null;
      state.mode = "html";
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*style\s*>/,
                       cssMode.token(stream, state.localState));
  }

  return {
    startState: function() {
      var state = htmlMode.startState();
      return {token: html, localState: null, mode: "html", htmlState: state};
    },

    copyState: function(state) {
      if (state.localState)
        var local = CodeMirror.copyState(state.token == css ? cssMode : jsMode, state.localState);
      return {token: state.token, localState: local, mode: state.mode,
              htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
    },

    token: function(stream, state) {
      return state.token(stream, state);
    },

    indent: function(state, textAfter) {
      if (state.token == html || /^\s*<\//.test(textAfter))
        return htmlMode.indent(state.htmlState, textAfter);
      else if (state.token == javascript)
        return jsMode.indent(state.localState, textAfter);
      else
        return cssMode.indent(state.localState, textAfter);
    },

    compareStates: function(a, b) {
      if (a.mode != b.mode) return false;
      if (a.localState) return CodeMirror.Pass;
      return htmlMode.compareStates(a.htmlState, b.htmlState);
    },

    electricChars: "/{}:"
  }
}, "xml", "javascript", "css");

CodeMirror.defineMIME("text/html", "htmlmixed");
CodeMirror.defineMode('rst', function(config, options) {
    function setState(state, fn, ctx) {
        state.fn = fn;
        setCtx(state, ctx);
    }

    function setCtx(state, ctx) {
        state.ctx = ctx || {};
    }

    function setNormal(state, ch) {
        if (ch && (typeof ch !== 'string')) {
            var str = ch.current();
            ch = str[str.length-1];
        }

        setState(state, normal, {back: ch});
    }

    function hasMode(mode) {
        if (mode) {
            var modes = CodeMirror.listModes();

            for (var i in modes) {
                if (modes[i] == mode) {
                    return true;
                }
            }
        }

        return false;
    }

    function getMode(mode) {
        if (hasMode(mode)) {
            return CodeMirror.getMode(config, mode);
        } else {
            return null;
        }
    }

    var verbatimMode = getMode(options.verbatim);
    var pythonMode = getMode('python');

    var reSection = /^[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
    var reDirective = /^\s*\w([-:.\w]*\w)?::(\s|$)/;
    var reHyperlink = /^\s*_[\w-]+:(\s|$)/;
    var reFootnote = /^\s*\[(\d+|#)\](\s|$)/;
    var reCitation = /^\s*\[[A-Za-z][\w-]*\](\s|$)/;
    var reFootnoteRef = /^\[(\d+|#)\]_/;
    var reCitationRef = /^\[[A-Za-z][\w-]*\]_/;
    var reDirectiveMarker = /^\.\.(\s|$)/;
    var reVerbatimMarker = /^::\s*$/;
    var rePreInline = /^[-\s"([{</:]/;
    var rePostInline = /^[-\s`'")\]}>/:.,;!?\\_]/;
    var reEnumeratedList = /^\s*((\d+|[A-Za-z#])[.)]|\((\d+|[A-Z-a-z#])\))\s/;
    var reBulletedList = /^\s*[-\+\*]\s/;
    var reExamples = /^\s+(>>>|In \[\d+\]:)\s/;

    function normal(stream, state) {
        var ch, sol, i;

        if (stream.eat(/\\/)) {
            ch = stream.next();
            setNormal(state, ch);
            return null;
        }

        sol = stream.sol();

        if (sol && (ch = stream.eat(reSection))) {
            for (i = 0; stream.eat(ch); i++);

            if (i >= 3 && stream.match(/^\s*$/)) {
                setNormal(state, null);
                return 'header';
            } else {
                stream.backUp(i + 1);
            }
        }

        if (sol && stream.match(reDirectiveMarker)) {
            if (!stream.eol()) {
                setState(state, directive);
            }
            return 'meta';
        }

        if (stream.match(reVerbatimMarker)) {
            if (!verbatimMode) {
                setState(state, verbatim);
            } else {
                var mode = verbatimMode;

                setState(state, verbatim, {
                    mode: mode,
                    local: mode.startState()
                });
            }
            return 'meta';
        }

        if (sol && stream.match(reExamples, false)) {
            if (!pythonMode) {
                setState(state, verbatim);
                return 'meta';
            } else {
                var mode = pythonMode;

                setState(state, verbatim, {
                    mode: mode,
                    local: mode.startState()
                });

                return null;
            }
        }

        function testBackward(re) {
            return sol || !state.ctx.back || re.test(state.ctx.back);
        }

        function testForward(re) {
            return stream.eol() || stream.match(re, false);
        }

        function testInline(re) {
            return stream.match(re) && testBackward(/\W/) && testForward(/\W/);
        }

        if (testInline(reFootnoteRef)) {
            setNormal(state, stream);
            return 'footnote';
        }

        if (testInline(reCitationRef)) {
            setNormal(state, stream);
            return 'citation';
        }

        ch = stream.next();

        if (testBackward(rePreInline)) {
            if ((ch === ':' || ch === '|') && stream.eat(/\S/)) {
                var token;

                if (ch === ':') {
                    token = 'builtin';
                } else {
                    token = 'atom';
                }

                setState(state, inline, {
                    ch: ch,
                    wide: false,
                    prev: null,
                    token: token
                });

                return token;
            }

            if (ch === '*' || ch === '`') {
                var orig = ch,
                    wide = false;

                ch = stream.next();

                if (ch == orig) {
                    wide = true;
                    ch = stream.next();
                }

                if (ch && !/\s/.test(ch)) {
                    var token;

                    if (orig === '*') {
                        token = wide ? 'strong' : 'em';
                    } else {
                        token = wide ? 'string' : 'string-2';
                    }

                    setState(state, inline, {
                        ch: orig,               // inline() has to know what to search for
                        wide: wide,             // are we looking for `ch` or `chch`
                        prev: null,             // terminator must not be preceeded with whitespace
                        token: token            // I don't want to recompute this all the time
                    });

                    return token;
                }
            }
        }

        setNormal(state, ch);
        return null;
    }

    function inline(stream, state) {
        var ch = stream.next(),
            token = state.ctx.token;

        function finish(ch) {
            state.ctx.prev = ch;
            return token;
        }

        if (ch != state.ctx.ch) {
            return finish(ch);
        }

        if (/\s/.test(state.ctx.prev)) {
            return finish(ch);
        }

        if (state.ctx.wide) {
            ch = stream.next();

            if (ch != state.ctx.ch) {
                return finish(ch);
            }
        }

        if (!stream.eol() && !rePostInline.test(stream.peek())) {
            if (state.ctx.wide) {
                stream.backUp(1);
            }

            return finish(ch);
        }

        setState(state, normal);
        setNormal(state, ch);

        return token;
    }

    function directive(stream, state) {
        var token = null;

        if (stream.match(reDirective)) {
            token = 'attribute';
        } else if (stream.match(reHyperlink)) {
            token = 'link';
        } else if (stream.match(reFootnote)) {
            token = 'quote';
        } else if (stream.match(reCitation)) {
            token = 'quote';
        } else {
            stream.eatSpace();

            if (stream.eol()) {
                setNormal(state, stream);
                return null;
            } else {
                stream.skipToEnd();
                setState(state, comment);
                return 'comment';
            }
        }

        // FIXME this is unreachable
        setState(state, body, {start: true});
        return token;
    }

    function body(stream, state) {
        var token = 'body';

        if (!state.ctx.start || stream.sol()) {
            return block(stream, state, token);
        }

        stream.skipToEnd();
        setCtx(state);

        return token;
    }

    function comment(stream, state) {
        return block(stream, state, 'comment');
    }

    function verbatim(stream, state) {
        if (!verbatimMode) {
            return block(stream, state, 'meta');
        } else {
            if (stream.sol()) {
                if (!stream.eatSpace()) {
                    setNormal(state, stream);
                }

                return null;
            }

            return verbatimMode.token(stream, state.ctx.local);
        }
    }

    function block(stream, state, token) {
        if (stream.eol() || stream.eatSpace()) {
            stream.skipToEnd();
            return token;
        } else {
            setNormal(state, stream);
            return null;
        }
    }

    return {
        startState: function() {
            return {fn: normal, ctx: {}};
        },

        copyState: function(state) {
            return {fn: state.fn, ctx: state.ctx};
        },

        token: function(stream, state) {
            var token = state.fn(stream, state);
            return token;
        }
    };
}, "python");

CodeMirror.defineMIME("text/x-rst", "rst");
CodeMirror.defineMode("clike", function(config, parserConfig) {
  var indentUnit = config.indentUnit,
      keywords = parserConfig.keywords || {},
      builtin = parserConfig.builtin || {},
      blockKeywords = parserConfig.blockKeywords || {},
      atoms = parserConfig.atoms || {},
      hooks = parserConfig.hooks || {},
      multiLineStrings = parserConfig.multiLineStrings;
  var isOperatorChar = /[+\-*&%=<>!?|\/]/;

  var curPunc;

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (hooks[ch]) {
      var result = hooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      curPunc = ch;
      return null;
    }
    if (/\d/.test(ch)) {
      stream.eatWhile(/[\w\.]/);
      return "number";
    }
    if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      }
      if (stream.eat("/")) {
        stream.skipToEnd();
        return "comment";
      }
    }
    if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return "operator";
    }
    stream.eatWhile(/[\w\$_]/);
    var cur = stream.current();
    if (keywords.propertyIsEnumerable(cur)) {
      if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
      return "keyword";
    }
    if (builtin.propertyIsEnumerable(cur)) {
      if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
      return "builtin";
    }
    if (atoms.propertyIsEnumerable(cur)) return "atom";
    return "variable";
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next, end = false;
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) {end = true; break;}
        escaped = !escaped && next == "\\";
      }
      if (end || !(escaped || multiLineStrings))
        state.tokenize = null;
      return "string";
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return "comment";
  }

  function Context(indented, column, type, align, prev) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.align = align;
    this.prev = prev;
  }
  function pushContext(state, col, type) {
    return state.context = new Context(state.indented, col, type, null, state.context);
  }
  function popContext(state) {
    var t = state.context.type;
    if (t == ")" || t == "]" || t == "}")
      state.indented = state.context.indented;
    return state.context = state.context.prev;
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: null,
        context: new Context((basecolumn || 0) - indentUnit, 0, "top", false),
        indented: 0,
        startOfLine: true
      };
    },

    token: function(stream, state) {
      var ctx = state.context;
      if (stream.sol()) {
        if (ctx.align == null) ctx.align = false;
        state.indented = stream.indentation();
        state.startOfLine = true;
      }
      if (stream.eatSpace()) return null;
      curPunc = null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style == "comment" || style == "meta") return style;
      if (ctx.align == null) ctx.align = true;

      if ((curPunc == ";" || curPunc == ":") && ctx.type == "statement") popContext(state);
      else if (curPunc == "{") pushContext(state, stream.column(), "}");
      else if (curPunc == "[") pushContext(state, stream.column(), "]");
      else if (curPunc == "(") pushContext(state, stream.column(), ")");
      else if (curPunc == "}") {
        while (ctx.type == "statement") ctx = popContext(state);
        if (ctx.type == "}") ctx = popContext(state);
        while (ctx.type == "statement") ctx = popContext(state);
      }
      else if (curPunc == ctx.type) popContext(state);
      else if (ctx.type == "}" || ctx.type == "top" || (ctx.type == "statement" && curPunc == "newstatement"))
        pushContext(state, stream.column(), "statement");
      state.startOfLine = false;
      return style;
    },

    indent: function(state, textAfter) {
      if (state.tokenize != tokenBase && state.tokenize != null) return 0;
      var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
      if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
      var closing = firstChar == ctx.type;
      if (ctx.type == "statement") return ctx.indented + (firstChar == "{" ? 0 : indentUnit);
      else if (ctx.align) return ctx.column + (closing ? 0 : 1);
      else return ctx.indented + (closing ? 0 : indentUnit);
    },

    electricChars: "{}"
  };
});

(function() {
  function words(str) {
    var obj = {}, words = str.split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }
  var cKeywords = "auto if break int case long char register continue return default short do sizeof " +
    "double static else struct entry switch extern typedef float union for unsigned " +
    "goto while enum void const signed volatile";

  function cppHook(stream, state) {
    if (!state.startOfLine) return false;
    stream.skipToEnd();
    return "meta";
  }

  // C#-style strings where "" escapes a quote.
  function tokenAtString(stream, state) {
    var next;
    while ((next = stream.next()) != null) {
      if (next == '"' && !stream.eat('"')) {
        state.tokenize = null;
        break;
      }
    }
    return "string";
  }

  CodeMirror.defineMIME("text/x-csrc", {
    name: "clike",
    keywords: words(cKeywords),
    blockKeywords: words("case do else for if switch while struct"),
    atoms: words("null"),
    hooks: {"#": cppHook}
  });
  CodeMirror.defineMIME("text/x-c++src", {
    name: "clike",
    keywords: words(cKeywords + " asm dynamic_cast namespace reinterpret_cast try bool explicit new " +
                    "static_cast typeid catch operator template typename class friend private " +
                    "this using const_cast inline public throw virtual delete mutable protected " +
                    "wchar_t"),
    blockKeywords: words("catch class do else finally for if struct switch try while"),
    atoms: words("true false null"),
    hooks: {"#": cppHook}
  });
  CodeMirror.defineMIME("text/x-java", {
    name: "clike",
    keywords: words("abstract assert boolean break byte case catch char class const continue default " + 
                    "do double else enum extends final finally float for goto if implements import " +
                    "instanceof int interface long native new package private protected public " +
                    "return short static strictfp super switch synchronized this throw throws transient " +
                    "try void volatile while"),
    blockKeywords: words("catch class do else finally for if switch try while"),
    atoms: words("true false null"),
    hooks: {
      "@": function(stream, state) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      }
    }
  });
  CodeMirror.defineMIME("text/x-csharp", {
    name: "clike",
    keywords: words("abstract as base break case catch checked class const continue" + 
                    " default delegate do else enum event explicit extern finally fixed for" + 
                    " foreach goto if implicit in interface internal is lock namespace new" + 
                    " operator out override params private protected public readonly ref return sealed" + 
                    " sizeof stackalloc static struct switch this throw try typeof unchecked" + 
                    " unsafe using virtual void volatile while add alias ascending descending dynamic from get" + 
                    " global group into join let orderby partial remove select set value var yield"),
    blockKeywords: words("catch class do else finally for foreach if struct switch try while"),
    builtin: words("Boolean Byte Char DateTime DateTimeOffset Decimal Double" +
                    " Guid Int16 Int32 Int64 Object SByte Single String TimeSpan UInt16 UInt32" +
                    " UInt64 bool byte char decimal double short int long object"  +
                    " sbyte float string ushort uint ulong"),
    atoms: words("true false null"),
    hooks: {
      "@": function(stream, state) {
        if (stream.eat('"')) {
          state.tokenize = tokenAtString;
          return tokenAtString(stream, state);
        }
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      }
    }
  });
  CodeMirror.defineMIME("text/x-scala", {
    name: "clike",
    keywords: words(
      
      /* scala */
      "abstract case catch class def do else extends false final finally for forSome if " +
      "implicit import lazy match new null object override package private protected return " +
      "sealed super this throw trait try trye type val var while with yield _ : = => <- <: " +
      "<% >: # @ " +
                    
      /* package scala */
      "assert assume require print println printf readLine readBoolean readByte readShort " +
      "readChar readInt readLong readFloat readDouble " +
      
      "AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either " +
      "Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable " +
      "Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering " +
      "Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder " +
      "StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector :: #:: " +
      
      /* package java.lang */            
      "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
      "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
      "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
      "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
      
      
    ),
    blockKeywords: words("catch class do else finally for forSome if match switch try while"),
    atoms: words("true false null"),
    hooks: {
      "@": function(stream, state) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      }
    }
  });
}());
CodeMirror.defineMode("ruby", function(config, parserConfig) {
  function wordObj(words) {
    var o = {};
    for (var i = 0, e = words.length; i < e; ++i) o[words[i]] = true;
    return o;
  }
  var keywords = wordObj([
    "alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else",
    "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or",
    "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless",
    "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc",
    "caller", "lambda", "proc", "public", "protected", "private", "require", "load",
    "require_relative", "extend", "autoload"
  ]);
  var indentWords = wordObj(["def", "class", "case", "for", "while", "do", "module", "then",
                             "catch", "loop", "proc", "begin"]);
  var dedentWords = wordObj(["end", "until"]);
  var matching = {"[": "]", "{": "}", "(": ")"};
  var curPunc;

  function chain(newtok, stream, state) {
    state.tokenize.push(newtok);
    return newtok(stream, state);
  }

  function tokenBase(stream, state) {
    curPunc = null;
    if (stream.sol() && stream.match("=begin") && stream.eol()) {
      state.tokenize.push(readBlockComment);
      return "comment";
    }
    if (stream.eatSpace()) return null;
    var ch = stream.next(), m;
    if (ch == "`" || ch == "'" || ch == '"' ||
        (ch == "/" && !stream.eol() && stream.peek() != " ")) {
      return chain(readQuoted(ch, "string", ch == '"' || ch == "`"), stream, state);
    } else if (ch == "%") {
      var style, embed = false;
      if (stream.eat("s")) style = "atom";
      else if (stream.eat(/[WQ]/)) { style = "string"; embed = true; }
      else if (stream.eat(/[wxqr]/)) style = "string";
      var delim = stream.eat(/[^\w\s]/);
      if (!delim) return "operator";
      if (matching.propertyIsEnumerable(delim)) delim = matching[delim];
      return chain(readQuoted(delim, style, embed, true), stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return "comment";
    } else if (ch == "<" && (m = stream.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) {
      return chain(readHereDoc(m[1]), stream, state);
    } else if (ch == "0") {
      if (stream.eat("x")) stream.eatWhile(/[\da-fA-F]/);
      else if (stream.eat("b")) stream.eatWhile(/[01]/);
      else stream.eatWhile(/[0-7]/);
      return "number";
    } else if (/\d/.test(ch)) {
      stream.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/);
      return "number";
    } else if (ch == "?") {
      while (stream.match(/^\\[CM]-/)) {}
      if (stream.eat("\\")) stream.eatWhile(/\w/);
      else stream.next();
      return "string";
    } else if (ch == ":") {
      if (stream.eat("'")) return chain(readQuoted("'", "atom", false), stream, state);
      if (stream.eat('"')) return chain(readQuoted('"', "atom", true), stream, state);
      stream.eatWhile(/[\w\?]/);
      return "atom";
    } else if (ch == "@") {
      stream.eat("@");
      stream.eatWhile(/[\w\?]/);
      return "variable-2";
    } else if (ch == "$") {
      stream.next();
      stream.eatWhile(/[\w\?]/);
      return "variable-3";
    } else if (/\w/.test(ch)) {
      stream.eatWhile(/[\w\?]/);
      if (stream.eat(":")) return "atom";
      return "ident";
    } else if (ch == "|" && (state.varList || state.lastTok == "{" || state.lastTok == "do")) {
      curPunc = "|";
      return null;
    } else if (/[\(\)\[\]{}\\;]/.test(ch)) {
      curPunc = ch;
      return null;
    } else if (ch == "-" && stream.eat(">")) {
      return "arrow";
    } else if (/[=+\-\/*:\.^%<>~|]/.test(ch)) {
      stream.eatWhile(/[=+\-\/*:\.^%<>~|]/);
      return "operator";
    } else {
      return null;
    }
  }

  function tokenBaseUntilBrace() {
    var depth = 1;
    return function(stream, state) {
      if (stream.peek() == "}") {
        depth--;
        if (depth == 0) {
          state.tokenize.pop();
          return state.tokenize[state.tokenize.length-1](stream, state);
        }
      } else if (stream.peek() == "{") {
        depth++;
      }
      return tokenBase(stream, state);
    };
  }
  function readQuoted(quote, style, embed, unescaped) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && (unescaped || !escaped)) {
          state.tokenize.pop();
          break;
        }
        if (embed && ch == "#" && !escaped && stream.eat("{")) {
          state.tokenize.push(tokenBaseUntilBrace(arguments.callee));
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      return style;
    };
  }
  function readHereDoc(phrase) {
    return function(stream, state) {
      if (stream.match(phrase)) state.tokenize.pop();
      else stream.skipToEnd();
      return "string";
    };
  }
  function readBlockComment(stream, state) {
    if (stream.sol() && stream.match("=end") && stream.eol())
      state.tokenize.pop();
    stream.skipToEnd();
    return "comment";
  }

  return {
    startState: function() {
      return {tokenize: [tokenBase],
              indented: 0,
              context: {type: "top", indented: -config.indentUnit},
              continuedLine: false,
              lastTok: null,
              varList: false};
    },

    token: function(stream, state) {
      if (stream.sol()) state.indented = stream.indentation();
      var style = state.tokenize[state.tokenize.length-1](stream, state), kwtype;
      if (style == "ident") {
        var word = stream.current();
        style = keywords.propertyIsEnumerable(stream.current()) ? "keyword"
          : /^[A-Z]/.test(word) ? "tag"
          : (state.lastTok == "def" || state.lastTok == "class" || state.varList) ? "def"
          : "variable";
        if (indentWords.propertyIsEnumerable(word)) kwtype = "indent";
        else if (dedentWords.propertyIsEnumerable(word)) kwtype = "dedent";
        else if ((word == "if" || word == "unless") && stream.column() == stream.indentation())
          kwtype = "indent";
      }
      if (curPunc || (style && style != "comment")) state.lastTok = word || curPunc || style;
      if (curPunc == "|") state.varList = !state.varList;

      if (kwtype == "indent" || /[\(\[\{]/.test(curPunc))
        state.context = {prev: state.context, type: curPunc || style, indented: state.indented};
      else if ((kwtype == "dedent" || /[\)\]\}]/.test(curPunc)) && state.context.prev)
        state.context = state.context.prev;

      if (stream.eol())
        state.continuedLine = (curPunc == "\\" || style == "operator");
      return style;
    },

    indent: function(state, textAfter) {
      if (state.tokenize[state.tokenize.length-1] != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0);
      var ct = state.context;
      var closing = ct.type == matching[firstChar] ||
        ct.type == "keyword" && /^(?:end|until|else|elsif|when|rescue)\b/.test(textAfter);
      return ct.indented + (closing ? 0 : config.indentUnit) +
        (state.continuedLine ? config.indentUnit : 0);
    },
     electricChars: "}de" // enD and rescuE

  };
});

CodeMirror.defineMIME("text/x-ruby", "ruby");

CodeMirror.defineMode("yaml", function() {
  
  var cons = ['true', 'false', 'on', 'off', 'yes', 'no'];
  var keywordRegex = new RegExp("\\b(("+cons.join(")|(")+"))$", 'i');
  
  return {
    token: function(stream, state) {
      var ch = stream.peek();
      var esc = state.escaped;
      state.escaped = false;
      /* comments */
      if (ch == "#") { stream.skipToEnd(); return "comment"; }
      if (state.literal && stream.indentation() > state.keyCol) {
        stream.skipToEnd(); return "string";
      } else if (state.literal) { state.literal = false; }
      if (stream.sol()) {
        state.keyCol = 0;
        state.pair = false;
        state.pairStart = false;
        /* document start */
        if(stream.match(/---/)) { return "def"; }
        /* document end */
        if (stream.match(/\.\.\./)) { return "def"; }
        /* array list item */
        if (stream.match(/\s*-\s+/)) { return 'meta'; }
      }
      /* pairs (associative arrays) -> key */
      if (!state.pair && stream.match(/^\s*([a-z0-9\._-])+(?=\s*:)/i)) {
        state.pair = true;
        state.keyCol = stream.indentation();
        return "atom";
      }
      if (state.pair && stream.match(/^:\s*/)) { state.pairStart = true; return 'meta'; }
      
      /* inline pairs/lists */
      if (stream.match(/^(\{|\}|\[|\])/)) {
        if (ch == '{')
          state.inlinePairs++;
        else if (ch == '}')
          state.inlinePairs--;
        else if (ch == '[')
          state.inlineList++;
        else
          state.inlineList--;
        return 'meta';
      }
      
      /* list seperator */
      if (state.inlineList > 0 && !esc && ch == ',') {
        stream.next();
        return 'meta';
      }
      /* pairs seperator */
      if (state.inlinePairs > 0 && !esc && ch == ',') {
        state.keyCol = 0;
        state.pair = false;
        state.pairStart = false;
        stream.next();
        return 'meta';
      }
      
      /* start of value of a pair */
      if (state.pairStart) {
        /* block literals */
        if (stream.match(/^\s*(\||\>)\s*/)) { state.literal = true; return 'meta'; };
        /* references */
        if (stream.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)) { return 'variable-2'; }
        /* numbers */
        if (state.inlinePairs == 0 && stream.match(/^\s*-?[0-9\.\,]+\s?$/)) { return 'number'; }
        if (state.inlinePairs > 0 && stream.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)) { return 'number'; }
        /* keywords */
        if (stream.match(keywordRegex)) { return 'keyword'; }
      }

      /* nothing found, continue */
      state.pairStart = false;
      state.escaped = (ch == '\\');
      stream.next();
      return null;
    },
    startState: function() {
      return {
        pair: false,
        pairStart: false,
        keyCol: 0,
        inlinePairs: 0,
        inlineList: 0,
        literal: false,
        escaped: false
      };
    }
  };
});

CodeMirror.defineMIME("text/x-yaml", "yaml");

/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {
    
    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        
        value = String(value);
        
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};


window.app = {
    config: {},
    models: {},
    views: {},
    routers: {},
    utils: {},
    templates: _($('script[name]')).reduce(function(memo, el) {
        memo[el.getAttribute('name')] = _(el.innerHTML).template();
        return memo;
    }, {}),
    state: {'repo': ''},
    instance: {}
};

window.args = _(window.app).toArray();

// Run an array of functions in serial
// -------

_.serial = function () {
  (_(arguments).reduceRight(_.wrap, function() {}))();
};


// Parent path
// -------

_.parentPath = function(path) {
  return path.replace(/\/?[a-zA-Z0-9_-]*$/, "");
};


// Topmost path
// -------

_.topPath = function(path) {
  var match = path.match(/\/?([a-zA-Z0-9_-]*)$/);
  return match[1];
};


// Valid filename check
// -------

_.validFilename = function(filename) {
  return !!filename.match(/^([a-zA-Z0-9_-]|\.)+$/);
  // Disabled for now: the Jekyll post format layout
  // return !!filename.match(/^\d{4}-\d{2}-\d{2}-[a-zA-Z0-9_-]+\.md$/);
};


// Valid pathname check
// -------

_.validPathname = function(path) {  
  return _.all(path.split('/'), function(filename) {
    return _.validFilename(filename);
  });
};


// Extract filename from a given path
// -------
// 
// _.extractFilename('path/to/foo.md')
// => ['path/to', 'foo.md']

_.extractFilename = function(path) {
  if (!path.match(/\//)) return ["", path];
  var matches = path.match(/(.*)\/(.*)$/);
  return [ matches[1], matches[2] ];
};


// Determine mode for CodeMirror
// -------

_.mode = function(file) {
  if (_.markdown(file)) return "gfm";

  var extension = _.extension(file);

  if (_.include(["js", "json"], extension)) return "javascript";
  if (extension === "html") return "htmlmixed";
  if (extension === "rb") return "ruby";
  if (extension === "yml") return "yaml";
  if (extension === "clj") return "clojure";
  if (_.include(["coffee", "cake"], extension)) return "coffeescript";
  if (_.include(["java", "c", "cpp", "cs", "php"], extension)) return "clike";
  
  return extension;
}


// Check if a given file is a Jekyll post
// -------

_.jekyll = function(path, file) {
  return !!(path.match('_posts') && _.markdown(file));
};


// Extract file extension
// -------

_.extension = function(file) {
  var match = file.match(/\.(\w+)$/);
  return match ? match[1] : null;
};


// Determines whether a given file is a markdown file or not
// -------

_.markdown = function(file) {
  var regex = new RegExp("\.(md|mkdn?|mdown|markdown)$");
  return !!(regex.test(file));
};


// Clip a string
// -------

_.clip = function(str, length) {
  var res = str.substr(0, length);
  if (length < str.length) res += " ...";
  return res;
};


// Concatenate path + file to full filepath
// -------

_.filepath = function(path, file) {
  return (path ? path +"/" : "") + file;
};


// Converts a javascript object to YAML
// Does not support nested objects
// Multiline values are serialized as Blocks

_.toYAML = function(metadata) {
  var res = [];
  _.each(metadata, function(value, property) {
    if (value.match(/\n/)) {
      var str = property+": |\n";

      _.each(value.split('\n'), function(line) {
        str += "  "+line;
      });

      res.push()
    } else {
      res.push(property+": "+value);
    }
  });

  return res.join('\n');
};


// Only parses first level of YAML file
// Considers the whole thing as a key-value pair party
// 
// name: "michael"
// age: 25
// friends:
// - Michael
// - John
// block: |
//   Hello World
//   Another line
//   24123 
// 
// =>
// {
//   name: 'michael',
//   age: "25",
//   friends: "- Michael\n- John",
//   block: "Hello World\nAnother line\n24123"
// }
// 
// var yaml = 'name:     "michael"\nage: 25\nfriends:\n- Michael\n- John\nblock: |\n  hey ho\n  some text\n  yay';
// console.log(_.fromYAML(yaml));

_.fromYAML = function(rawYAML) {
  var data = {};

  var lines = rawYAML.split('\n');
  var key = null;
  var value = "";
  var blockValue = false;

  function add() {
    data[key] = _.isArray(value) ? value.join('\n') : value;
    key = null;
    value = "";    
  }

  _.each(lines, function(line) {
    var match = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);

    if (match && key) add();
    if (match) { // New Top Level key found
      key = match[1];
      value = match[2];
      if (value.match(/\|$/)) {
        blockValue = true;
        value = "";
      }
      // console.log(key, value);
    } else {
      if (!_.isArray(value)) value = [];
      if (blockValue) {
        value.push(line.trim());
      } else {
        value.push(line.replace(/^\s\s/, ''));
      }
    }
  });

  add();
  return data;
}

// Chunked Path
// -------
// 
// _.chunkedPath('path/to/foo')
// =>
// [
//   { url: 'path',        name: 'path' },
//   { url: 'path/to',     name: 'to' },
//   { url: 'path/to/foo', name: 'foo' }
// ]

_.chunkedPath = function(path) {
  var chunks = path.split('/');
  return _.map(chunks, function(chunk, index) {
    var url = [];
    for (var i=0; i<=index; i++) {
      url.push(chunks[i]);
    }
    return {
      url: url.join('/'),
      name: chunk
    }
  });
}


// Gimme a Github object! Please.
function github() {
  return new Github({
    token: $.cookie('oauth-token'),
    username: $.cookie('username'),
    auth: "oauth"
  });
}

var currentRepo = {
  user: null,
  repo: null,
  instance: null
};

// Return a random string
// -------

function randomString() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var string_length = 8;
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// Smart caching (needed for managing subsequent updates)
// -------

function getRepo(user, repo) {
  if (currentRepo.user === user && currentRepo.repo === repo) {
    return currentRepo.instance; // Cached
  }

  currentRepo = {
    user: user,
    repo: repo,
    instance: github().getRepo(user, repo)
  };
  return currentRepo.instance;
}


// Authentication
// -------

function authenticate() {
  if ($.cookie("oauth-token")) return window.authenticated = true;
  var match = window.location.href.match(/\?code=([a-z0-9]*)/);

  // Handle Code
  if (match) {
    $.getJSON('http://prose-gatekeeper.herokuapp.com/authenticate/'+match[1], function(data) {
      $.cookie('oauth-token', data.token);
      window.authenticated = true;
      // Adjust URL
      var regex = new RegExp("\\?code="+match[1]);
      window.location.href = window.location.href.replace(regex, '').replace('&state=', '');
    });
    return false;
  } else {
    return true;  
  }
}


function logout() {
  window.authenticated = false;
  $.cookie("oauth-token", null);
}

// Load Application
// -------
// 
// Load everything that's needed for the app + header

function loadApplication(cb) {

  if (window.authenticated) {
    $.ajax({
      type: "GET",
      url: 'https://api.github.com/user',
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded',
      headers : { Authorization : 'token ' + $.cookie('oauth-token') },
      success: function(res) {
        $.cookie("avatar", res.avatar_url);
        $.cookie("username", res.login);
        app.username = res.login;

        var user = github().getUser();
        var owners = {};

        user.repos(function(err, repos) {
          user.orgs(function(err, orgs) {
            _.each(repos, function(r) {
              owners[r.owner.login] = owners[r.owner.login] ? owners[r.owner.login].concat([r]) : [r];
            });
            
            cb(null, {
              "available_repos": repos,
              "organizations": orgs,
              "owners": owners
            });
          });
        });

      },
      error: function(err) { 
        cb('error', { "available_repos": [], "owners": {} });
      }
    });

  } else {
    cb(null, { "available_repos": [], "owners": {} });
  }
}


// Load Repos
// -------
// 
// List all available repositories for a certain user

function loadRepos(username, cb) {
  var user = github().getUser();

  user.show(username, function(err, u) {
    var owners = {};
    if (u.type.toLowerCase() === "user") {
      user.userRepos(username, function(err, repos) {
        cb(null, { "repos": repos, user: u });
      });
    } else {
      user.orgRepos(username, function(err, repos) {
        cb(null, { "repos": repos, user: u });
      });
    }
  });
}


// Load Branches
// -------
// 
// List all available branches of a repository

function loadBranches(user, repo, cb) {
  var repo = getRepo(user, repo);

  repo.listBranches(function(err, branches) {
    cb(err, branches);
  });
}


// Get files from a tree based on a given path and searchstr
// -------

function getFiles(tree, path, searchstr) {
  var pathMatches = 0;
  function matchesPath(file) {
    if (file.path === path) return false; // skip current path
    var match = file.path.match(new RegExp("^"+path+"(.*)$"));
    if (match) {
      return !!searchstr || match[1].split('/').length <= (path ? 2 : 1);
    }
    return false;
  }

  function matchesSearch(file) {
    if (!searchstr) return true;
    // Insert crazy search pattern match algorithm
    return file.path.toLowerCase().search(searchstr.toLowerCase()) >= 0;
  }

  // Filter
  var files = _.filter(tree, function(file) {
    var matchSearch = new RegExp("("+searchstr+")", "i");

    // Depending on search use full path or filename
    file.name = searchstr ? file.path : _.extractFilename(file.path)[1];

    // Scope name to current path
    file.name = file.name.replace(new RegExp("^"+path+"/?"), "");

    // Mark match
    file.name = file.name.replace(matchSearch, "<b>$1</b>");

    if (!matchesPath(file)) return false;
    pathMatches += 1;
    return matchesSearch(file);
  });

  // Sort by name
  files = _.sortBy(files, function(entry){ 
    return (entry.type === "tree" ? "A" : "B") + entry.path;
  });

  return {
    tree: tree,
    files: files,
    total: pathMatches
  }
}

// Load Posts
// -------
// 
// List all postings for a given repo+branch+path plus load _config.yml

function loadPosts(user, reponame, branch, path, cb) {
  var repo = getRepo(user, reponame);

  function loadConfig(cb) {
    repo.read(branch, "_config.yml", function(err, data) {
      if (err) return cb(err);
      cb(null, jsyaml.load(data));
    });
  }

  function load(repodata) {
    loadConfig(function(err, config) {
      app.state.jekyll = !err;
      app.state.config = config;

      var root = config && config.prose && config.prose.rooturl ? config.prose.rooturl : "";
      if (!path) path = root;

      repo.getTree(branch+"?recursive=true", function(err, tree) {
        if (err) return cb("Not found");
        loadBranches(user, reponame, function(err, branches) {
          if (err) return cb("Branches couldn't be fetched");
          app.state.path = path ? path : "";
          app.state.branches = _.filter(branches, function(b) { return b !== branch });
          cb(null, getFiles(tree, path, ""));
        });
      });
    });
  }

  repo.show(function(err, repodata) {
    if (!branch) app.state.branch = branch = repodata.master_branch;
    app.state.permissions = repodata.permissions;
    load();
  });
}

// Serialize
// -------

function serialize(content, metadata) {
  if (metadata) {
    return ["---", metadata, "---"].join('\n')+'\n\n'+content;
  } else {
    return content;
  }
}


// Save File
// -------
// 
// Store a file to GitHub

function saveFile(user, repo, branch, path, content, message, cb) {
  var repo = getRepo(user, repo);
  repo.write(branch, path, content, message, cb);
}


// Fork repository
// -------
// 
// Creates a fork for the current user

function forkRepo(user, reponame, branch, cb) {
  var repo = getRepo(user, reponame);
  var forkedRepo = getRepo(app.username, reponame);

  // Wait until contents are ready.

  function onceReady(cb) {
    _.delay(function() {
      forkedRepo.contents("", function(err, contents) {
        contents ? cb() : onceReady(cb);
      });
    }, 500);
  }

  repo.fork(function(err) {
    onceReady(function() {
      repo.getRef("heads/"+branch, function(err, commitSha) {
        // Create temp branch
        var refSpec = { "ref": "refs/heads/prose-patch", "sha": commitSha };
        forkedRepo.createRef(refSpec, cb);
      });
    });
  });
}


// New pull request
// -------
// 
// Creates a new pull request

function createPullRequest(user, repo, pull, cb) {
  var repo = getRepo(user, repo);

  repo.createPullRequest(pull, function(err) {
    cb();
  });
}


// Patch File
// -------
// 
// Send a pull request on GitHub

function patchFile(user, repo, branch, path, content, message, cb) {
  forkRepo(user, repo, branch, function(err, info) {
    saveFile(app.username, repo, "prose-patch", path, content, message, function(err) {
      if (err) return cb(err);
      var pull = {
        title: message,
        body: "This pull request has been automatically generated by Prose.io.",
        base: app.state.branch,
        head: app.username + ":" + "prose-patch",
      };
      createPullRequest(app.state.user, app.state.repo, pull, function(err) {
        window.forkedRepo = github().getRepo(app.username, repo);
        forkedRepo.deleteRef('heads/prose-patch', cb);
      });
    });
  });
}


// Delete Post
// -------

function deletePost(user, repo, branch, path, file, cb) {
  var repo = getRepo(user, repo);
  repo.remove(branch, _.filepath(path, file), cb);
}


// Move Post
// -------

function movePost(user, repo, branch, path, newPath, cb) {
  var repo = getRepo(user, repo);
  repo.move(branch, path, newPath, cb);
}


// New Post
// -------
// 
// Prepare new empty post

function emptyPost(user, repo, branch, path, cb) {
  var rawMetadata = "layout: default\npublished: false";
  var metadata = {
    "layout": "default",
    "published": false,
  };

  var cfg = app.state.config
  if (cfg && cfg.prose && cfg.prose.metadata) {
    if (cfg.prose.metadata[path]) {
      rawMetadata = cfg.prose.metadata[path];
      try {
        metadata = jsyaml.load(rawMetadata);
      } catch(err) {
        console.log('ERROR encoding YAML');
        // No-op
      }
    }
  }

  cb(null, {
    "metadata": metadata,
    "raw_metadata": rawMetadata,
    "content": "# How does it work?\n\nEnter Text in Markdown format.",
    "repo": repo,
    "path": path,
    "published": false,
    "persisted": false,
    "writeable": true,
    "file": new Date().format("Y-m-d")+"-your-filename.md"
  });
}

// Load Post
// -------
// 
// List all postings for a given repository
// Looks into _posts/blog

function loadPost(user, repo, branch, path, file, cb) {
  var repo = getRepo(user, repo);

  repo.read(branch, path ? path + "/" + file : file, function(err, data, commit) {
    if (err) return cb(err);

    // Given a YAML front matter, determines published or not
    function published(metadata) {
      return !!metadata.match(/published: true/);
    }

    // Extract YAML from a post, trims whitespace
    function parse(content) {
      var content = content.replace(/\r\n/g, "\n"); // normalize a little bit

      function writeable() {
        return !!(app.state.permissions && app.state.permissions.push);
      }

      if (!_.jekyll(path, file)) return {
        raw_metadata: "",
        content: content,
        published: false,
        writeable: writeable()
      };

      var res = { raw_metadata: "", published: false, writeable: writeable() };
      res.content = content.replace(/(---\n)((.|\n)*)\n---\n?/, function(match, dashes, frontmatter) {
        res.raw_metadata = frontmatter;
        res.published = published(frontmatter);
        return "";
      }).trim();
      return res;
    }

    var post = parse(data);
    cb(err, _.extend(post, {
      "sha": commit,
      "markdown": _.markdown(file),
      "jekyll": _.jekyll(path, file),
      "repo": repo,
      "path": path,
      "file": file,
      "persisted": true
    }));
  });
}
(function(config, models, views, routers, utils) {

// The Router
// ---------------

routers.Application = Backbone.Router.extend({
  initialize: function() {
    // Using this.route, because order matters
    this.route(/(.*\/.*)/, 'path', this.path);
    this.route(":user", 'user', this.profile);
    this.route(":user/:repo", 'repo', this.repo);
    this.route("", "start", this.start);
  },

  start: function() {
    if (confirmExit()) {
      app.state = {
        user: "",
        repo: "",
        mode: "",
        branch: "",
        path: ""
      };
      app.instance.start();
    }
  },

  extractURL: function(url) {
    url = url.split('/');
    app.state = {
      user: url[0],
      repo: url[1],
      mode: url[2],
      branch: url[3],
      path: (url.slice(4) || []).join('/')
    };
    return app.state;
  },

  path: function(url) {
    var url = this.extractURL(url);
    if (url.mode === "tree") {
      app.instance.posts(url.user, url.repo, url.branch, url.path);
    } else if (url.mode === "new") {
      app.instance.newPost(url.user, url.repo, url.branch, url.path);
    } else {
      var parts = _.extractFilename(url.path);
      app.state.file = parts[1];
      app.instance.post(url.user, url.repo, url.branch, parts[0], parts[1], url.mode);
    }
  },

  // #example-user/example-repo
  repo: function(username, reponame) {
    app.state = {
      user: username,
      repo: reponame,
      mode: "tree",
      branch: "",
      path: ""
    };
    app.instance.posts(username, reponame);
  },

  // #example-user
  // #example-organization
  profile: function(username) {
    if (confirmExit()) {
      app.state = {
        user: username,
        repo: "",
        mode: "",
        branch: "",
        path: ""
      };
      app.instance.profile(username);
    }
  }
});

}).apply(this, window.args);

(function(config, models, views, routers, utils, templates) {

// This is the top-level piece of UI.

views.Application = Backbone.View.extend({

  // Events
  // ------

  events: {
    'click .toggle-view': 'toggleView'
  },

  toggleView: function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    var link  = $(e.currentTarget),
        route = link.attr('href').replace(/^\//, '');
    
    $('.toggle-view.active').removeClass('active');
    link.addClass('active');
    router.navigate(route, true);
  },

  // Initialize
  // ----------

  initialize: function () {
    _.bindAll(this);
    var that = this;
    this.header = new views.Header({model: this.model});

    // No longer needed
    // $(window).on('scroll', function() {
    //   if ($(window).scrollTop()>60) {
    //     $('#post').addClass('sticky-menu');
    //   } else {
    //     $('#post').removeClass('sticky-menu');
    //   }
    // });

    function calculateLayout() {
      if (that.mainView && that.mainView.refreshCodeMirror) {
        that.mainView.refreshCodeMirror();
      }
    }

    var lazyLayout = _.debounce(calculateLayout, 300);
    $(window).resize(lazyLayout);
  },

  // Should be rendered just once
  render: function () {
    $(this.header.render().el).prependTo(this.el);
    return this;
  },


  // Helpers
  // -------

  replaceMainView: function (name, view) {
    $('body').removeClass().addClass('current-view '+name);
    // Make sure the header gets shown
    if (name !== "start") $('#header').show();

    if (this.mainView) {
      this.mainView.remove();
    } else {
      $('#main').empty();
    }
    this.mainView = view;
    $(view.el).appendTo(this.$('#main'));
  },


  // Main Views
  // ----------

  static: function() {
    this.header.render();
    // No-op ;-)
  },

  posts: function (user, repo, branch, path) {
    this.loading('Loading posts ...');
    loadPosts(user, repo, branch, path, _.bind(function (err, data) {
      this.loaded();
      if (err) return this.notify('error', 'The requested resource could not be found.');
      this.header.render();
      this.replaceMainView("posts", new views.Posts({ model: data, id: 'posts' }).render());
    }, this));
  },

  post: function (user, repo, branch, path, file, mode) {
    this.loading('Loading post ...');
    loadPosts(user, repo, branch, path, _.bind(function (err, data) {
      if (err) return this.notify('error', 'The requested resource could not be found.');
      loadPost(user, repo, branch, path, file, _.bind(function (err, data) {
        this.loaded();
        this.header.render();
        if (err) return this.notify('error', 'The requested resource could not be found.');
        data.preview = !(mode === "edit");
        data.lang = _.mode(file);
        this.replaceMainView(window.authenticated ? "post" : "read-post", new views.Post({ model: data, id: 'post' }).render());
        var that = this;
      }, this));
      this.header.render();
    }, this));
  },

  newPost: function (user, repo, branch, path) {
    this.loading('Creating file ...');
    loadPosts(user, repo, branch, path, _.bind(function (err, data) {
      emptyPost(user, repo, branch, path, _.bind(function(err, data) {
        this.loaded();
        data.jekyll = _.jekyll(path, data.file);
        data.preview = false;
        data.markdown = _.markdown(data.file);
        this.replaceMainView("post", new views.Post({ model: data, id: 'post' }).render());
        this.mainView._makeDirty();
        app.state.file = data.file;
        this.header.render();
      }, this));
    }, this));
  },

  profile: function(username) {
    var that = this;
    app.state.title = username;
    this.loading('Loading profile ...');
    loadRepos(username, function(err, data) {
      that.header.render();
      that.loaded();
      data.authenticated = !!window.authenticated;
      that.replaceMainView("start", new views.Profile({id: "start", model: data}).render());
    });
  },

  start: function(username) {
    var that = this;
    app.state.title = "";
    this.header.render();

    this.replaceMainView("start", new views.Start({
      id: "start",
      model: _.extend(this.model, { authenticated: !!window.authenticated} )
    }).render());
  },

  notify: function(type, message) {
    this.header.render();
    this.replaceMainView("notification", new views.Notification(type, message).render());
  },

  loading: function(msg) {
    $('#main').html('<div class="loading"><span>'+ msg || 'Loading ...' +'</span></div>');
  },

  loaded: function() {
    $('#main .loading').remove();
  }

});

}).apply(this, window.args);

(function(config, models, views, routers, utils, templates) {

views.Notification = Backbone.View.extend({
  
  id: 'notification',

  initialize: function(type, message) {
    this.model = {};
    this.model.type = type;
    this.model.message = message;
  },

  render: function() {
    $(this.el).html(templates.notification(this.model));
    return this;
  }
});

}).apply(this, window.args);
(function(config, models, views, routers, utils, templates) {

views.Profile = Backbone.View.extend({
  id: 'start',

  events: {
  },

  initialize: function(options) {},

  render: function() {
    $(this.el).html(templates.profile(this.model));
    return this;
  }
});

}).apply(this, window.args);

(function(config, models, views, routers, utils, templates) {

views.Start = views.Profile.extend({
  id: 'start',

  events: {
    'submit #login_form': '_login'
  },

  initialize: function(options) {},

  _login: function() {
    var self = this;

    var user = self.$('#github_user').val();
    var password = self.$('#github_password').val();

    login({username: user, password: password}, function(err) {
      if (err) return self.$('.bad-credentials').show();
      window.location.reload();
    });
    return false;
  },

  render: function() {
    $(this.el).html(templates.start(this.model));
    if (!window.authenticated) $('#header').hide();
    return this;
  }
});

}).apply(this, window.args);

(function(config, models, views, routers, utils, templates) {

views.Header = Backbone.View.extend({
  id: 'header',

  events: {
    "click a.logout": "_logout"
  },

  _logout: function() {
    logout();
    app.instance.render();
    if ($('#start').length > 0) {
      app.instance.start();
    } else {
      window.location.reload();
    }
    return false;
  },

  initialize: function(options) {
    
  },

  render: function() {
    $(this.el).html(templates.header(_.extend(this.model, {state: app.state})));
    return this;
  }
});

}).apply(this, window.args);
(function(config, models, views, routers, utils, templates) {

views.Posts = Backbone.View.extend({
  events: {
    'click a.link': '_loading',
    'keyup #search_str': '_search',
    'click a.switch-branch': '_toggleBranchSelection'
  },

  _toggleBranchSelection: function() {
    this.$('.branch-wrapper .branches').toggle();
    return false;
  },

  initialize: function(options) {

  },

  _search: function() {
    _.delay(_.bind(function() {
      var searchstr = this.$('#search_str').val();
      this.model = getFiles(this.model.tree, app.state.path, searchstr);
      this.renderResults();      
    }, this), 10);
  },

  _loading: function(e) {
    $(e.currentTarget).addClass('loading');
  },

  // Creates human readable versions of _posts/paths
  semantifyPaths: function(paths) {
    return _.map(paths, function(path) {
      return { path: path, name: path }
    });
  },

  renderResults: function() {
    this.$('#files').html(templates.files(_.extend(this.model, app.state, {
      current_path: app.state.path
    })));

    var caption = this.model.files.length+'';
    var searchstr = this.$('#search_str').val();
    if (searchstr) {
      caption += ' matches'; // for "'+searchstr+'"'; // within "'+app.state.path+'/*"';
    } else {
      caption += ' files'; // within "'+ (app.state.path ? app.state.path : '/') +'"';
    }
    this.$('.results').html(caption);
  },

  render: function() {
    var that = this;
    $(this.el).html(templates.posts(_.extend(this.model, app.state, {
      current_path: app.state.path
    })));

    _.delay(function() {
      that.renderResults();
      $('#search_str').focus();
    }, 1);
    return this;
  }
});

}).apply(this, window.args);

(function(config, models, views, routers, utils, templates) {

views.Post = Backbone.View.extend({

  id: 'post',

  events: {
    'click .save': '_save',
    'click .cancel-save': '_toggleCommit',
    'click .save.confirm': 'updateFile',
    'click a.toggle.view': '_toggleView',
    'click a.toggle.meta': '_toggleMeta',
    'change input': '_makeDirty',
    'change #post_published': 'updateMetaData',
    'click .delete': '_delete',
    'click .toggle-options': '_toggleOptions'
  },

  _toggleOptions: function() {
    $('.options').toggle();
    return false;
  },

  _delete: function() {
    if (confirm("Are you sure you want to delete that file?")) {
      deletePost(app.state.user, app.state.repo, app.state.branch, this.model.path, this.model.file, _.bind(function(err) {
        if (err) return alert('Error during deletion. Please wait 30 seconds and try again.');
        router.navigate([app.state.user, app.state.repo, "tree", app.state.branch].join('/'), true);
      }, this));
    }
    return false;
  },

  updateURL: function() {
    var url = _.compact([app.state.user, app.state.repo, this.model.preview ? "blob" : "edit", app.state.branch, this.model.path, this.model.file]);
    router.navigate(url.join('/'), false);
  },

  _makeDirty: function(e) {
    this.dirty = true;
    if (this.editor) this.model.content = this.editor.getValue();
    if (this.metadataEditor) this.model.raw_metadata = this.metadataEditor.getValue();
    if (!this.$('.button.save').hasClass('saving')) {
      this.$('.button.save').html(this.model.writeable ? "SAVE" : "SEND PATCH");
      this.$('.button.save').removeClass('inactive error');      
    }
  },

  showDiff: function() {
    var text1 = this.prevContent;
    var text2 = this.serialize();
    var d = this.dmp.diff_main(text1, text2);
    this.dmp.diff_cleanupSemantic(d);
    var diff = this.dmp.diff_prettyHtml(d).replace(/&para;/g, "");
    $('.diff-wrapper .diff').html(diff);
  },

  _toggleCommit: function() {
    if (!this.$('.document-menu').hasClass('commit')) {
      this.$('.commit-message').val("Updated "+$('input.filepath').val());  
    }

    this.hideMeta();
    this.$('.button.save').html(this.$('.document-menu').hasClass('commit') ? (this.model.writeable ? "SAVE" : "SEND PATCH") : "COMMIT");
    this.$('.button.save').toggleClass('confirm');
    this.$('.document-menu').toggleClass('commit');    
    this.$('.button.cancel-save').toggle();
    this.$('.document-menu-content .options').hide();
    this.showDiff();
    this.$('.surface').toggle();
    this.$('.diff-wrapper').toggle();

    return false;
  },

  _save: function(e) {
    if (!this.dirty) return false;
    this._toggleCommit();
    e.preventDefault();
    return false;
  },

  _toggleView: function(e) {
    var that = this;
    this.toggleView($(e.currentTarget).attr('data-view'));
    _.delay(function() { that.refreshCodeMirror(); }, 1);
    return false;
  },

  _toggleMeta: function(e) {
    var that = this;
    if (e) e.preventDefault();
    $('.toggle.meta').toggleClass('active');
    $('.metadata').toggle();
    _.delay(function() { that.refreshCodeMirror(); }, 1);
    return false;
  },

  refreshCodeMirror: function() {
    if ($('.toggle.meta').hasClass('active')) {
      $('.CodeMirror-scroll').height($('.document').height() / 2);
    } else {
      $('.CodeMirror-scroll').height($('.document').height());
    }
    this.editor.refresh();
    if (this.metadataEditor) this.metadataEditor.refresh();
  },

  toggleView: function(view) {
    this.view = view;
    if (view === 'preview') {
      this.model.preview = true;
      this.$('.post-content').html(marked(this.model.content));
    } else {
      this.model.preview = false;
    }
    this.hideMeta();
    this.updateURL();
    $('.toggle').removeClass('active');
    $('.toggle.'+view).addClass('active');

    $('.document .surface').removeClass('preview cheatsheet compose');
    $('.document .surface').addClass(view);
  },

  hideMeta: function() {
    $('.toggle.meta').removeClass('active');
    $('.metadata').hide();
  },

  right: function() {
    var view = $('.toggle.active').attr('data-view');
    if (view === 'preview') return;
    if (view === 'compose') return this.toggleView('preview');
    return this.toggleView('compose');
  },

  left: function() {
    var view = $('.toggle.active').attr('data-view');
    if (view === 'cheatsheet') return;
    if (view === 'compose') return this.toggleView('cheatsheet');
    return this.toggleView('compose');
  },

  initialize: function() {
    this.dmp = new diff_match_patch();
    this.mode = "edit";
    this.prevContent = this.serialize();
    if (!window.shortcutsRegistered) {
      key('⌘+s, ctrl+s', _.bind(function() { this.updateFile(); return false; }, this));
      key('ctrl+shift+right', _.bind(function() { this.right(); return false; }, this));
      key('ctrl+shift+left', _.bind(function() { this.left(); return false; }, this));
      key('esc', _.bind(function() { this.toggleView('compose'); return false; }, this));
      window.shortcutsRegistered = true;
    }
  },

  // TODO: We might not wanna use this
  parseMetadata: function(metadata) {
    var metadata = this.metadataEditor.getValue();
    if (!metadata) return {};
    try {
      return jsyaml.load(metadata);
    } catch(err) {
      return null;
    }
  },

  updateMetaData: function() {
    if (!this.model.jekyll) return true; // metadata -> skip

    // Update published
    function updatePublished(yamlStr, published) {
      var regex = /published: (false|true)/;
      if (yamlStr.match(regex)) {
        return yamlStr.replace(regex, "published: " + !!published);
      } else {
        return yamlStr + "\npublished: " + !!published;
      }
    }

    this.model.raw_metadata = this.metadataEditor.getValue();
    var published = this.$('#post_published').prop('checked');

    this.model.raw_metadata = updatePublished(this.model.raw_metadata, published);
    this.metadataEditor.setValue(this.model.raw_metadata);

    published ? $('#post').addClass('published') : $('#post').removeClass('published');

    return true;
  },

  updateFilename: function(filepath, cb) {
    var that = this;
    
    if (!_.validPathname(filepath)) return cb('error');
    app.state.path = this.model.path; // ?
    app.state.file = _.extractFilename(filepath)[1];
    app.state.path = _.extractFilename(filepath)[0];

    function finish() {
      that.model.path = app.state.path;
      that.model.file = app.state.file;
      // rerender header to reflect the filename change
      app.instance.header.render();
      that.updateURL();
    }

    if (this.model.persisted) {
      movePost(app.state.user, app.state.repo, app.state.branch, _.filepath(this.model.path, this.model.file), filepath, _.bind(function(err) {
        if (!err) finish()
        err ? cb('error') : cb(null)
      }, this));
    } else {
      finish();
      cb(null);
    }
  },

  serialize: function() {
    return serialize(this.model.content, this.model.jekyll ? this.model.raw_metadata : null)
  },

  // Update save state (saving ..., sending patch ..., etc.)

  updateSaveState: function(label, classes) {
    $('.button.save').html(label)
                     .removeClass('inactive error saving')
                     .addClass(classes);
  },

  // Submits a patch (fork + pull request workflow)

  sendPatch: function(filepath, filename, filecontent, message) {
    var that = this;

    function patch() {
      if (that.updateMetaData()) {
        that.model.content = that.prevContent;
        that.editor.setValue(that.prevContent);

        patchFile(app.state.user, app.state.repo, app.state.branch, filepath, filecontent, message, function(err) {
          if (err) {
            _.delay(function() { 
              that.$('.button.save').html("SEND PATCH");
              that.$('.button.save').removeClass('error');
              that.$('.button.save').addClass('inactive');
            }, 3000);
            that.updateSaveState('! Try again in 30 seconds', 'error');
            return;
          }

          that.dirty = false;
          that.model.persisted = true;
          that.model.file = filename;
          that.updateURL();
          that.prevContent = filecontent;
          that.updateSaveState('PATCH SENT', 'inactive');
        });
      } else {
        that.updateSaveState('! Metadata', 'error');
      }
    }

    that.updateSaveState('SEND PATCH ...', 'inactive saving');
    patch();

    return false;
  },

  saveFile: function(filepath, filename, filecontent, message) {
    var that = this;

    function save() {
      if (that.updateMetaData()) {
        saveFile(app.state.user, app.state.repo, app.state.branch, filepath, filecontent, message, function(err) {
          if (err) {
            _.delay(function() { that._makeDirty() }, 3000);
            that.updateSaveState('! Try again in 30 seconds', 'error');
            return;
          }
          that.dirty = false;
          that.model.persisted = true;
          that.model.file = filename;
          that.updateURL();
          that.prevContent = filecontent;
          that.updateSaveState('SAVED', 'inactive');
        });
      } else {
        that.updateSaveState('! Metadata', 'error');
      }
    }

    that.updateSaveState('SAVING ...', 'inactive saving');

    if (filepath === _.filepath(this.model.path, this.model.file)) return save();

    // Move or create file
    this.updateFilename(filepath, function(err) {
      err ? that.updateSaveState('! Filename', 'error') : save();
    });
  },

  updateFile: function() {
    var that = this,
        filepath = $('input.filepath').val(),
        filename = _.extractFilename(filepath)[1],
        filecontent = this.serialize(),
        message = this.$('.commit-message').val(),
        method = this.model.writeable ? this.saveFile : this.sendPatch;

    // Update content
    this.model.content = this.editor.getValue();

    // Delegate
    method.call(this, filepath, filename, filecontent, message);
  },

  keyMap: function() {
    var that = this;
    return {
      "Shift-Ctrl-Left": function(codemirror) {
        that.left();
      },
      "Shift-Ctrl-Right": function(codemirror) {
        that.right();
      },
      "Shift-Ctrl-M": function(codemirror) {
        that._toggleMeta();
      },
      "Ctrl-S": function(codemirror) {
        that.updateFile();
      }
    };
  },

  initEditor: function() {
    var that = this;
    setTimeout(function() {
      if (that.model.jekyll) {
        that.metadataEditor = CodeMirror($('#raw_metadata')[0], {
          mode: 'yaml',
          value: that.model.raw_metadata,
          theme: 'prose-dark',
          lineWrapping: true,
          lineNumbers: true,
          extraKeys: that.keyMap(),
          onChange: _.bind(that._makeDirty, that)
        });
        $('#post .metadata').hide();
      }
      that.editor = CodeMirror($('#code')[0], {
        mode: that.model.lang,
        value: that.model.content,
        lineWrapping: true,
        lineNumbers: true,
        extraKeys: that.keyMap(),
        matchBrackets: true,
        theme: 'prose-bright',
        onChange: _.bind(that._makeDirty, that)
      });
      that.refreshCodeMirror();
    }, 100);
  },

  render: function() {
    var that = this;
    $(this.el).html(templates.post(_.extend(this.model, { mode: this.mode })));
    if (this.model.published) $(this.el).addClass('published');
    this.initEditor();
    return this;
  }
});

}).apply(this, window.args);


// Prevent exit when there are unsaved changes
window.onbeforeunload = function() {
  if (window.app.instance.mainView && window.app.instance.mainView.dirty)
    return "You have unsaved changes. Are you sure you want to leave?";
};

function confirmExit() {
  if (window.app.instance.mainView && window.app.instance.mainView.dirty)
    return confirm("You have unsaved changes. Are you sure you want to leave?");
  return true;
}


