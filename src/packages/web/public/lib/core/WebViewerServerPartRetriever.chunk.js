/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[16],{394:function(ia,da,f){function ba(e,f,h){f.endsWith("/")||(f+="/");h=h||{};var n=h.disableWebsockets||!1;this.gW=h.singleServerMode||!1;null!=h.customQueryParameters&&Object(x.b)("wvsQueryParameters",h.customQueryParameters);f.endsWith("blackbox/")||(f+="blackbox/");this.rn=h.uploadData||null;this.ex=h.uriData||null;this.QO=h.cacheKey||null;this.mT=h.officeLocale||null;this.uu=Object(r.a)(f,null,n);this.cf=f;this.SF=e;this.tf=
null;this.Hj=aa();this.qm=aa();this.Cz=!1;this.kg=this.Ud=this.ne=this.bf=null;this.xf=[];this.nA=[];this.cache={};this.timeStamp=0;this.Uf=[];this.nh=[];this.qG=null;this.JF=!1;this.XJ=this.id=null;this.tI=this.LR=ha;this.uC=0;this.uH=!1;this.hT=1;this.ji={};this.Eq=0;this.ns=ea();this.Rp(!0)}function ea(){var e={Dr:{},Eb:[],pop:function(){var f=e.Eb.pop();e.Dr[f.key]=void 0;return f},push:function(f,h){h={key:f,data:h};e.Eb.push(h);e.Dr[f]=h.data},contains:function(f){return!!e.Dr[f]},get:function(f){return e.Dr[f]},
set:function(f,h){e.Dr[f]=h;e.Eb.forEach(function(h,n){h.key==f&&(e.Eb[n]=h)})},remove:function(f){e.Dr[f]=void 0;e.Eb.forEach(function(h,n){h.key==f&&e.Eb.splice(n,1)})},length:function(){return e.Eb.length}};return e}function aa(){var e={promise:null,resolve:null,reject:null,state:0,result:null,request:null,Or:function(){return 1===(e.state&1)},C$:function(){return 2===(e.state&2)},gi:function(){return!e.C$()&&!e.Or()},f$:function(){return 4===(e.state&4)},CV:function(){e.state|=4}};e.promise=new Promise(function(f,
h){e.resolve=function(){if(0===e.state||4===e.state)e.state=1,e.result=arguments[0],f.apply(null,arguments)};e.reject=function(){if(0===e.state||4===e.state)e.state=2,h.apply(null,arguments)}});return e}function ha(){return!1}function ca(e,f,h){if(!(f in ma))return!0;f=ma[f];for(var n=0;n<f.length;n++){var r=e;var w=f[n];var x=h;if(w.name in r){var y="",aa=!1;r=r[w.name];switch(w.type){case "s":y="String";aa=Object(z.isString)(r);break;case "a":y="Array";aa=Object(z.isArray)(r);break;case "n":y="Number";
aa=Object(z.isNumber)(r)&&Object(z.isFinite)(r);break;case "o":y="Object",aa=Object(z.isObject)(r)&&!Object(z.isArray)(r)}aa||x.reject('Expected response field "'+w.name+'" to have type '+y);w=aa}else x.reject('Response missing field "'+w.name+'"'),w=!1;if(!w)return!1}return!0}f.r(da);var z=f(0);f.n(z);var w=f(2);ia=f(48);var y=f(29),r=f(411),h=f(88),n=f(351),e=f(108),x=f(42),fa=f(158),ma={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],
health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},{name:"rID",type:"s"}]};ba.prototype=Object(z.extend)(ba.prototype,{L3:function(){var e=this;return new Promise(function(f,h){var n=new XMLHttpRequest;n.open("GET",
e.cf+"ck");n.withCredentials=e.Nk();n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?f():h())};n.send()})},efa:function(e,f){this.LR=e||ha;this.tI=f||ha},gP:function(){var e=this;this.qm=aa();this.Hj=aa();return this.uu.fG().then(function(){e.Cz=!1;e.id=null;e.JF=!1;return e.L3()})},HJ:function(){this.LR();this.NH();this.bf&&(this.bf.gi()?this.Kg(this.bf.request):this.bf.Or()&&this.tI(this.bf.result.url,"pdf")&&(this.bf=null,this.aV()));this.kg&&this.kg.gi()&&this.Kg(this.kg.request);
this.ne&&this.ne.gi()?this.Kg(this.ne.request):this.Ud&&this.Ud.gi()&&this.AR(this.Ud.request);var e;for(e=0;e<this.Uf.length;e++)this.Uf[e]&&this.Uf[e]&&(this.Uf[e].gi()?this.Kg(this.Uf[e].request):this.Uf[e].Or()&&this.tI(this.Uf[e].result.url,"image")&&(this.Uf[e]=null,this.rC(Object(z.uniqueId)(),e)));for(e=0;e<this.nh.length;e++)this.nh[e]&&this.nh[e]&&this.nh[e].gi()&&!this.nh[e].f$()&&this.Kg(this.nh[e].request);for(e=0;e<this.xf.length;e++)this.xf[e]&&this.xf[e].gi()&&this.Kg(this.xf[e].request)},
NH:function(f){var h=this;this.Cz||(this.timeStamp=Date.now(),this.uu.GK(function(e){h.Raa(e)},function(){return null},function(){return null},!0).then(function(){clearInterval(h.jC);h.jC=null},function(n){h.Cz=!1;if(!h.jC){var r=0;h.JF=!0;h.XJ=0;h.jC=setInterval(function(){2>r++?h.HJ():(clearInterval(h.jC),f&&f.reject(e.a),Object(w.f)("WebViewerServer connection failed:"+n))},5E3)}}),this.Cz=!0)},vha:function(){var e=this,f=createPromiseCapability();if(this.rn){var h=new FormData;h.append("file",
this.rn.fileHandle,this.rn.fileHandle.name);var n=this.rn.loadCallback;var r="upload";var w=this.rn.extension}else if(this.ex){h={uri:this.ex.uri,ula:this.ex.shareId};h=Object.keys(h).map(function(e){return e+"="+(h[e]?encodeURIComponent(h[e]):"")}).join("&");var x="application/x-www-form-urlencoded; charset=UTF-8";n=this.ex.loadCallback;r="url";w=this.ex.extension}else return Promise.resolve();var z=new XMLHttpRequest,aa=Object(y.j)(e.cf,"AuxUpload");aa=Object(fa.a)(aa)+"&type="+r+"&ext="+w;z.open("POST",
aa);z.withCredentials=this.Nk();x&&z.setRequestHeader("Content-Type",x);z.addEventListener("load",function(){if(z.readyState===z.DONE&&200===z.status){var h=JSON.parse(z.response);e.SF=h.uri;n(h);f.resolve(h)}});z.addEventListener("error",function(){f.reject(z.statusText+" "+JSON.stringify(z))});this.rn&&null!=this.rn.onProgress&&(z.upload.onprogress=function(f){e.rn.onProgress(f)});z.send(h);return f.promise},Hda:function(e){this.password=e||null;this.Hj.Or()||(this.Hj=aa(),this.Kg({t:"pages"}));
return this.Hj.promise},tw:function(e){this.qG=e||null;this.Hj.Or()||(this.NH(this.Hj),this.Kg({t:"pages"}));return this.Hj.promise},tu:function(e){e=Object.assign(e,{uri:encodeURIComponent(this.SF)});this.qG&&(e.ext=this.qG);this.tf&&(e.c=this.tf);this.password&&(e.pswd=this.password);this.QO&&(e.cacheKey=this.QO);this.mT&&(e.locale=this.mT);return e},kea:function(){0<this.ns.length()&&10>=this.Eq&&this.lea(this.ns.pop().data)},Y1:function(e){return 0<this.ns.length()&&this.ns.contains(e)?(this.ns.remove(e),
!0):!1},Kg:function(e){e=this.tu(e);this.uu.send(e)},rV:function(e,f){10<this.Eq?this.ns.push(e,f):(this.Eq++,e=this.tu(f),this.uu.send(e))},lea:function(e){this.Eq++;e=this.tu(e);this.uu.send(e)},zk:function(e){return e},Raa:function(e){var f=this,n=e.data,r=e.err,y=e.t;switch(y){case "upload":r?f.wha.reject(r):f.wha.resolve("Success");break;case "pages":r?f.Hj.reject(r):ca(n,y,f.Hj)&&f.Hj.resolve(n);break;case "config":if(r)f.qm.reject(r);else if(ca(n,y,f.qm)){n.id&&(f.id=n.id);if(n.auth){var z=
Object(x.a)("wvsQueryParameters");z.auth=n.auth;Object(x.b)("wvsQueryParameters",z)}n.serverVersion&&(f.qX=n.serverVersion,Object(w.g)("[WebViewer Server] server version: "+f.qX));n.serverID?(f.uC=n.serverID===f.XJ&&f.uH?f.uC+1:0,f.XJ=n.serverID):f.uC=0;f.uH=!1;f.qm.resolve(n)}break;case "health":r?f.qm.reject(r):ca(n,y,f.qm)&&(n=n.unhealthy,f.gW&&n?Object(w.i)("Server failed health check. Single server mode ignoring check."):!f.Kja&&n&&1>=f.uC&&(f.uH=!0,f.gP().then(function(){f.HJ()},function(){f.HJ()})));
break;case "pdf":n.url=Object(fa.a)(f.cf+"../"+encodeURI(n.url));r?f.bf.reject(r):ca(n,y,f.bf)&&f.bf.resolve(n);break;case "ApString2Xod":n.url=Object(fa.a)(f.cf+"../data/"+encodeURI(n.url));r?f.ji[n.rID].reject(r):ca(n,y,f.ji[n.rID])&&f.ji[n.rID].resolve(n);break;case "docmod":n.url=Object(fa.a)(f.cf+"../"+encodeURI(n.url));r?f.ji[n.rID].reject(r):ca(n,y,f.bf)&&f.ji[n.rID].resolve(n);break;case "xod":if(r)this.ne&&this.ne.gi()&&this.ne.reject(r),this.Ud&&this.Ud.gi()&&this.Ud.reject(r);else if(n.notFound)n.noCreate||
this.ne&&this.ne.gi()&&this.ne.resolve(n),this.Ud&&this.Ud.gi()&&this.Ud.resolve(n);else{n.url&&(n.url=Object(fa.a)(f.cf+"../"+encodeURI(n.url)));if(!this.Ud||this.Ud.Or())this.Ud=aa(),this.Ud.request={t:"xod",noCreate:!0};this.ne||(this.ne=aa(),this.ne.request={t:"xod"});this.Ud.resolve(n);this.ne.resolve(n)}break;case "annots":if(r)f.kg.reject(r);else if(ca(n,y,f.kg)){f.kg.CV();var ba=new XMLHttpRequest;z=f.cf+"../"+encodeURI(n.url);var ea=n.hasAppearance?Object(fa.a)(z+".xodapp"):null;ba.open("GET",
Object(fa.a)(z));ba.responseType="text";ba.withCredentials=this.Nk();ba.addEventListener("load",function(){ba.readyState===ba.DONE&&200===ba.status&&f.kg.resolve({bL:ba.response,fz:ea})});ba.addEventListener("error",function(){f.kg.reject(ba.statusText+" "+JSON.stringify(ba))});ba.send()}break;case "image":f.Eq--;var da=this.Uf[n.p];r?da.promise.reject(r):ca(n,y,da)&&(da.result=n,da.result.url=Object(fa.a)(f.cf+"../"+encodeURI(da.result.url)),da.resolve(da.result));break;case "tiles":f.Eq--;da=n.rID;
z=this.xf[da];this.xf[da]=null;this.nA.push(da);if(r)z.reject(r);else if(ca(n,y,z)){for(r=0;r<n.tiles.length;r++)n.tiles[r]=Object(fa.a)(f.cf+"../"+encodeURI(n.tiles[r]));z.resolve(n)}break;case "text":da=this.nh[n.p];if(r)da.reject(r);else if(ca(n,y,da)){da.CV();var ha=new XMLHttpRequest;n=Object(fa.a)(f.cf+"../"+encodeURI(n.url));ha.open("GET",n);ha.withCredentials=this.Nk();ha.addEventListener("load",function(){ha.readyState===ha.DONE&&200===ha.status&&(da.result=JSON.parse(ha.response),da.resolve(da.result))});
ha.addEventListener("error",function(e){da.reject(ha.statusText+" "+JSON.stringify(e))});ha.send()}break;case "progress":"loading"===n.t&&f.trigger(h.a.Events.DOCUMENT_LOADING_PROGRESS,[n.bytes,n.total])}this.kea();!y&&e.echo&&e&&"apstring2xod"==e.echo.t&&(e=e.echo.reqID)&&(2<=parseInt(f.qX)?f.ji[e].reject("Message unhandled by server"):f.ji[e].reject())},HQ:function(){this.NH(this.qm);return this.qm.promise},a7:function(e){for(var f=this,h=new XMLHttpRequest,n=Object(fa.a)(this.cf+"aul")+"&id="+
this.id,r=new FormData,w={},x=0;x<e.body.length;x++){var y=e.body[x];w[y.id]=y.ZE.w+";"+y.ZE.h;r.append(y.id,y.ZE.dataString)}e={t:"apstring2xod",reqID:this.hT++,parts:w};var z=this.tu(e);r.append("msg",JSON.stringify(z));f.ji[z.reqID]=aa();h.open("POST",n);h.withCredentials=f.Nk;n=new Promise(function(e,f){h.onreadystatechange=function(){4===h.readyState&&(200===h.status?e():f("An error occurred while sending down appearance strings to the server"))}});h.send(r);return n.then(function(){return f.ji[z.reqID].promise})},
Z6:function(){this.kg||(this.kg=aa(),this.kg.request={t:"annots"},this.Kg(this.kg.request));return this.kg.promise},rC:function(e,f){this.Uf[f]||(this.Uf[f]=aa(),this.Uf[f].request={t:"image",p:f},this.rV(e,this.Uf[f].request));return this.Uf[f].promise},Ida:function(e){this.nh[e]||(this.nh[e]=aa(),this.nh[e].request={t:"text",p:e},this.Kg(this.nh[e].request));return this.nh[e].promise},Jda:function(e,f,h,n,r){var w=this.xf.length;this.nA.length&&(w=this.nA.pop());this.xf[w]=aa();this.xf[w].request=
{t:"tiles",p:f,z:h,r:n,size:r,rID:w};this.rV(e,this.xf[w].request);return this.xf[w].promise},aV:function(){this.bf||(this.bf=aa(),this.bf.request={t:"pdf"},this.JF?this.bf.resolve({url:this.SF}):this.Kg(this.bf.request));return this.bf.promise},ZQ:function(e){var f=this,h=new XMLHttpRequest,n=Object(fa.a)(this.cf+"aul")+"&id="+this.id,r=new FormData,w={};e.annots&&(w.annots="xfdf");e.watermark&&(w.watermark="png");e.redactions&&(w.redactions="redact");w={t:"docmod",reqID:this.hT++,parts:w};e.print&&
(w.print=!0);var x=this.tu(w);r.append("msg",JSON.stringify(x));return Promise.all([e.annots,e.watermark,e.redactions].map(function(e){return Promise.resolve(e)})).then(function(e){var w=e[0],y=e[1],z=e[2];w&&r.append("annots",w);y&&r.append("watermark",e.watermark);z&&r.append("redactions",z);f.ji[x.reqID]=aa();h.open("POST",n);h.withCredentials=f.Nk;e=new Promise(function(e,f){h.onreadystatechange=function(){4===h.readyState&&(200===h.status?e():f("An error occurred while sending down annotation data to the server"))}});
h.send(r);return e.then(function(){return f.ji[x.reqID].promise})})},AR:function(){this.Ud||(this.Ud=aa(),this.Ud.request={t:"xod",noCreate:!0},this.Kg(this.Ud.request));return this.Ud.promise},Kda:function(){this.ne||(this.ne=aa(),this.ne.request={t:"xod"},this.Kg(this.ne.request));return this.ne.promise},bn:function(){return!0},request:function(){},yU:function(){},abort:function(){for(var e=0;e<this.xf.length;e++)this.xf[e]&&(this.xf[e].resolve(null),this.xf[e]=null,this.nA.push(e));this.close()},
DC:function(e){this.tf=this.tf||{};this.tf.headers=e},ika:function(){return this.tf?Object(z.omit)(this.tf.headers,["Cookie","cookie"]):null},Rp:function(e){this.tf=this.tf||{};this.tf.internal=this.tf.internal||{};this.tf.internal.withCredentials=e},Nk:function(){return this.tf&&this.tf.internal?this.tf.internal.withCredentials:null},getFileData:function(){return Promise.reject()}});Object(ia.a)(ba);Object(n.a)(ba);Object(n.b)(ba);da["default"]=ba},411:function(ia,da,f){function ba(f,w,y){function r(f,
e){function h(e){r().then(function(f){da&&!ia?setTimeout(function(){h(e)},1):f.send(JSON.stringify(e))})}function n(e,f,n,r){var x=window.createPromiseCapability(),fa=!1,ja=x;z=e;ba=f;ea=n;y=null;r&&(e=Object(ha.a)("wvsQueryParameters"),e.bcid=Object(aa.k)(8),Object(ha.b)("wvsQueryParameters",e));try{e=Ea?ua+"/"+Ea:ua+"/ws";e=Object(ca.a)(e);var ka=new WebSocket(e);ka.onopen=function(){x.resolve();fa=!0;x=null;da=!1;w.resolve(ka);ba&&ba()};ka.onerror=function(e){da=ia=!0;x&&x.reject(e);y&&y.reject()};
ka.onclose=function(){w=window.createPromiseCapability();da=!0;y||(y=window.createPromiseCapability());y.resolve();ea&&ea();z&&fa&&z({t:"health",data:{unhealthy:!0,isDead:!0}})};ka.onmessage=function(e){e&&e.data&&(e=JSON.parse(e.data),e.hb?h({hb:!0}):e.end?close():z(e))}}catch(Ga){x.reject(Ga),x=null}return ja.promise}function r(){da&&z&&n(z);return w.promise}var w=window.createPromiseCapability(),y=null,z,ba,ea=null,da=!1,ia=!1,Ea=e,ua=function(e){var f=e.indexOf("://"),h="ws://";0>f?f=0:(5===f&&
(h="wss://"),f+=3);var n=e.lastIndexOf("/");0>n&&(n=e.length);return h+e.slice(f,n)}(f);return{send:h,GK:n,fG:function(){return y?y.promise:r().then(function(e){y=window.createPromiseCapability();z=null;e.close();return y.promise})}}}function h(f){var e=f.lastIndexOf("/");0>e&&(e=f.length);return f.slice(0,e)}return window.WebSocket&&!y?r(f,w):function(f,e){function n(e){(da?da.promise:Promise.resolve(ba)).then(function(f){var h=new XMLHttpRequest,n=aa?z+"/"+aa+"pf":z+"/pf";n=Object(ca.a)(n)+"&id="+
f;f=new FormData;f.append("data",JSON.stringify(e));h.open("POST",n);h.withCredentials=!0;h.send(f)})}function r(){ba=0;da||(da=window.createPromiseCapability())}function w(){y=new XMLHttpRequest;var e=z+"/pf";e+=0!==ba?"?id="+ba+"&uc="+ua:"?uc="+ua;ua++;y.open("GET",e,!0);y.withCredentials=!0;y.setRequestHeader("Cache-Control","no-cache");y.setRequestHeader("X-Requested-With","XMLHttpRequest");var f=y,h=!1;y.onreadystatechange=function(){a:if(3<=f.readyState&&!h){try{var e=f.responseText.length}catch(Fa){Object(ea.g)("caught exception");
break a}if(0<e)try{var x=f.responseText.split("\n");for(x[x.length-1]&&x.pop();0<x.length&&3>x[x.length-1].length;)"]"===x.pop()&&r();0<x.length&&3>x[0].length&&x.shift();for(e=0;e<x.length;++e)x[e].endsWith(",")&&(x[e]=x[e].substr(0,x[e].length-1));0===ba&&0<x.length&&(ba=JSON.parse(x.shift()).id,e=da,da=null,e.resolve(ba));var y;for(e=0;e<x.length;++e)(y=JSON.parse(x[e]))&&y.end?close():y&&y.hb&&y.id===ba?n({hb:!0}):Ea(y)}catch(Fa){}ha||(h=!0,w())}};y.send()}var y,z=h(f),aa=e,ba=0,da=window.createPromiseCapability(),
ha=!1,ia=null,Ea=null,ua=0;return{send:n,GK:function(e,f,h){Ea=e;ia=h;ha=!1;r();w();f&&f();return Promise.resolve()},fG:function(){r();Ea=null;ha=!0;ia&&ia();y.abort();return Promise.resolve()}}}(f,w)}f.d(da,"a",function(){return ba});var ea=f(2),aa=f(29),ha=f(42),ca=f(158)}}]);}).call(this || window)