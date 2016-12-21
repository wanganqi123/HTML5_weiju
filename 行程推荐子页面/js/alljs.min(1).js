/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
;
(function(l,o,i,e){var p=i("html"),d=i(l),a=i(o),q=i.fancybox=function(){q.open.apply(this,arguments)
},k=navigator.userAgent.match(/msie/i),c=null,f=o.createTouch!==e,j=function(r){return r&&r.hasOwnProperty&&r instanceof i
},b=function(r){return r&&i.type(r)==="string"
},m=function(r){return b(r)&&r.indexOf("%")>0
},h=function(r){return(r&&!(r.style.overflow&&r.style.overflow==="hidden")&&((r.clientWidth&&r.scrollWidth>r.clientWidth)||(r.clientHeight&&r.scrollHeight>r.clientHeight)))
},n=function(u,s){var r=parseInt(u,10)||0;
if(s&&m(u)){r=q.getViewport()[s]/100*r
}return Math.ceil(r)
},g=function(r,s){return n(r,s)+"px"
};
i.extend(q,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!f,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},iframe:{scrolling:"auto",preload:true},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(k?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:true,title:true},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(s,r){if(!s){return
}if(!i.isPlainObject(r)){r={}
}if(false===q.close(true)){return
}if(!i.isArray(s)){s=j(s)?i(s).get():[s]
}i.each(s,function(y,z){var x={},u,C,A,B,w,D,v;
if(i.type(z)==="object"){if(z.nodeType){z=i(z)
}if(j(z)){x={href:z.data("fancybox-href")||z.attr("href"),title:i("<div/>").text(z.data("fancybox-title")||z.attr("title")||"").html(),isDom:true,element:z};
if(i.metadata){i.extend(true,x,z.metadata())
}}else{x=z
}}u=r.href||x.href||(b(z)?z:null);
C=r.title!==e?r.title:x.title||"";
A=r.content||x.content;
B=A?"html":(r.type||x.type);
if(!B&&x.isDom){B=z.data("fancybox-type");
if(!B){w=z.prop("class").match(/fancybox\.(\w+)/);
B=w?w[1]:null
}}if(b(u)){if(!B){if(q.isImage(u)){B="image"
}else{if(q.isSWF(u)){B="swf"
}else{if(u.charAt(0)==="#"){B="inline"
}else{if(b(z)){B="html";
A=z
}}}}}if(B==="ajax"){D=u.split(/\s+/,2);
u=D.shift();
v=D.shift()
}}if(!A){if(B==="inline"){if(u){A=i(b(u)?u.replace(/.*(?=#[^\s]+$)/,""):u)
}else{if(x.isDom){A=z
}}}else{if(B==="html"){A=u
}else{if(!B&&!u&&x.isDom){B="inline";
A=z
}}}}i.extend(x,{href:u,type:B,content:A,title:C,selector:v});
s[y]=x
});
q.opts=i.extend(true,{},q.defaults,r);
if(r.keys!==e){q.opts.keys=r.keys?i.extend({},q.defaults.keys,r.keys):false
}q.group=s;
return q._start(q.opts.index)
},cancel:function(){var r=q.coming;
if(r&&false===q.trigger("onCancel")){return
}q.hideLoading();
if(!r){return
}if(q.ajaxLoad){q.ajaxLoad.abort()
}q.ajaxLoad=null;
if(q.imgPreload){q.imgPreload.onload=q.imgPreload.onerror=null
}if(r.wrap){r.wrap.stop(true,true).trigger("onReset").remove()
}q.coming=null;
if(!q.current){q._afterZoomOut(r)
}},close:function(r){q.cancel();
if(false===q.trigger("beforeClose")){return
}q.unbindEvents();
if(!q.isActive){return
}if(!q.isOpen||r===true){i(".fancybox-wrap").stop(true).trigger("onReset").remove();
q._afterZoomOut()
}else{q.isOpen=q.isOpened=false;
q.isClosing=true;
i(".fancybox-item, .fancybox-nav").remove();
q.wrap.stop(true,true).removeClass("fancybox-opened");
q.transitions[q.current.closeMethod]()
}},play:function(u){var r=function(){clearTimeout(q.player.timer)
},w=function(){r();
if(q.current&&q.player.isActive){q.player.timer=setTimeout(q.next,q.current.playSpeed)
}},s=function(){r();
a.unbind(".player");
q.player.isActive=false;
q.trigger("onPlayEnd")
},v=function(){if(q.current&&(q.current.loop||q.current.index<q.group.length-1)){q.player.isActive=true;
a.bind({"onCancel.player beforeClose.player":s,"onUpdate.player":w,"beforeLoad.player":r});
w();
q.trigger("onPlayStart")
}};
if(u===true||(!q.player.isActive&&u!==false)){v()
}else{s()
}},next:function(s){var r=q.current;
if(r){if(!b(s)){s=r.direction.next
}q.jumpto(r.index+1,s,"next")
}},prev:function(s){var r=q.current;
if(r){if(!b(s)){s=r.direction.prev
}q.jumpto(r.index-1,s,"prev")
}},jumpto:function(s,v,r){var u=q.current;
if(!u){return
}s=n(s);
q.direction=v||u.direction[(s>=u.index?"next":"prev")];
q.router=r||"jumpto";
if(u.loop){if(s<0){s=u.group.length+(s%u.group.length)
}s=s%u.group.length
}if(u.group[s]!==e){q.cancel();
q._start(s)
}},reposition:function(v,r){var u=q.current,s=u?u.wrap:null,w;
if(s){w=q._getPosition(r);
if(v&&v.type==="scroll"){delete w.position;
s.stop(true,true).animate(w,200)
}else{s.css(w);
u.pos=i.extend({},u.dim,w)
}}},update:function(u){var r=(u&&u.originalEvent&&u.originalEvent.type),s=!r||r==="orientationchange";
if(s){clearTimeout(c);
c=null
}if(!q.isOpen||c){return
}c=setTimeout(function(){var v=q.current;
if(!v||q.isClosing){return
}q.wrap.removeClass("fancybox-tmp");
if(s||r==="load"||(r==="resize"&&v.autoResize)){q._setDimension()
}if(!(r==="scroll"&&v.canShrink)){q.reposition(u)
}q.trigger("onUpdate");
c=null
},(s&&!f?0:300))
},toggle:function(r){if(q.isOpen){q.current.fitToView=i.type(r)==="boolean"?r:!q.current.fitToView;
if(f){q.wrap.removeAttr("style").addClass("fancybox-tmp");
q.trigger("onUpdate")
}q.update()
}},hideLoading:function(){a.unbind(".loading");
i("#fancybox-loading").remove()
},showLoading:function(){var s,r;
q.hideLoading();
s=i(q.opts.tpl.loading).click(q.cancel).appendTo("body");
a.bind("keydown.loading",function(u){if((u.which||u.keyCode)===27){u.preventDefault();
q.cancel()
}});
if(!q.defaults.fixed){r=q.getViewport();
s.css({position:"absolute",top:(r.h*0.5)+r.y,left:(r.w*0.5)+r.x})
}q.trigger("onLoading")
},getViewport:function(){var r=(q.current&&q.current.locked)||false,s={x:d.scrollLeft(),y:d.scrollTop()};
if(r&&r.length){s.w=r[0].clientWidth;
s.h=r[0].clientHeight
}else{s.w=f&&l.innerWidth?l.innerWidth:d.width();
s.h=f&&l.innerHeight?l.innerHeight:d.height()
}return s
},unbindEvents:function(){if(q.wrap&&j(q.wrap)){q.wrap.unbind(".fb")
}a.unbind(".fb");
d.unbind(".fb")
},bindEvents:function(){var s=q.current,r;
if(!s){return
}d.bind("orientationchange.fb"+(f?"":" resize.fb")+(s.autoCenter&&!s.locked?" scroll.fb":""),q.update);
r=s.keys;
if(r){a.bind("keydown.fb",function(w){var u=w.which||w.keyCode,v=w.target||w.srcElement;
if(u===27&&q.coming){return false
}if(!w.ctrlKey&&!w.altKey&&!w.shiftKey&&!w.metaKey&&!(v&&(v.type||i(v).is("[contenteditable]")))){i.each(r,function(x,y){if(s.group.length>1&&y[u]!==e){q[x](y[u]);
w.preventDefault();
return false
}if(i.inArray(u,y)>-1){q[x]();
w.preventDefault();
return false
}})
}})
}if(i.fn.mousewheel&&s.mouseWheel){q.wrap.bind("mousewheel.fb",function(z,A,v,u){var y=z.target||null,w=i(y),x=false;
while(w.length){if(x||w.is(".fancybox-skin")||w.is(".fancybox-wrap")){break
}x=h(w[0]);
w=i(w).parent()
}if(A!==0&&!x){if(q.group.length>1&&!s.canShrink){if(u>0||v>0){q.prev(u>0?"down":"left")
}else{if(u<0||v<0){q.next(u<0?"up":"right")
}}z.preventDefault()
}}})
}},trigger:function(s,v){var r,u=v||q.coming||q.current;
if(u){if(i.isFunction(u[s])){r=u[s].apply(u,Array.prototype.slice.call(arguments,1))
}if(r===false){return false
}if(u.helpers){i.each(u.helpers,function(x,w){if(w&&q.helpers[x]&&i.isFunction(q.helpers[x][s])){q.helpers[x][s](i.extend(true,{},q.helpers[x].defaults,w),u)
}})
}}a.trigger(s)
},isImage:function(r){return b(r)&&r.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
},isSWF:function(r){return b(r)&&r.match(/\.(swf)((\?|#).*)?$/i)
},_start:function(s){var u={},y,r,v,w,x;
s=n(s);
y=q.group[s]||null;
if(!y){return false
}u=i.extend(true,{},q.opts,y);
w=u.margin;
x=u.padding;
if(i.type(w)==="number"){u.margin=[w,w,w,w]
}if(i.type(x)==="number"){u.padding=[x,x,x,x]
}if(u.modal){i.extend(true,u,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})
}if(u.autoSize){u.autoWidth=u.autoHeight=true
}if(u.width==="auto"){u.autoWidth=true
}if(u.height==="auto"){u.autoHeight=true
}u.group=q.group;
u.index=s;
q.coming=u;
if(false===q.trigger("beforeLoad")){q.coming=null;
return
}v=u.type;
r=u.href;
if(!v){q.coming=null;
if(q.current&&q.router&&q.router!=="jumpto"){q.current.index=s;
return q[q.router](q.direction)
}return false
}q.isActive=true;
if(v==="image"||v==="swf"){u.autoHeight=u.autoWidth=false;
u.scrolling="visible"
}if(v==="image"){u.aspectRatio=true
}if(v==="iframe"&&f){u.scrolling="scroll"
}u.wrap=i(u.tpl.wrap).addClass("fancybox-"+(f?"mobile":"desktop")+" fancybox-type-"+v+" fancybox-tmp "+u.wrapCSS).appendTo(u.parent||"body");
i.extend(u,{skin:i(".fancybox-skin",u.wrap),outer:i(".fancybox-outer",u.wrap),inner:i(".fancybox-inner",u.wrap)});
i.each(["Top","Right","Bottom","Left"],function(A,z){u.skin.css("padding"+z,g(u.padding[A]))
});
q.trigger("onReady");
if(v==="inline"||v==="html"){if(!u.content||!u.content.length){return q._error("content")
}}else{if(!r){return q._error("href")
}}if(v==="image"){q._loadImage()
}else{if(v==="ajax"){q._loadAjax()
}else{if(v==="iframe"){q._loadIframe()
}else{q._afterLoad()
}}}},_error:function(r){i.extend(q.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:r,content:q.coming.tpl.error});
q._afterLoad()
},_loadImage:function(){var r=q.imgPreload=new Image();
r.onload=function(){this.onload=this.onerror=null;
q.coming.width=this.width/q.opts.pixelRatio;
q.coming.height=this.height/q.opts.pixelRatio;
q._afterLoad()
};
r.onerror=function(){this.onload=this.onerror=null;
q._error("image")
};
r.src=q.coming.href;
if(r.complete!==true){q.showLoading()
}},_loadAjax:function(){var r=q.coming;
q.showLoading();
q.ajaxLoad=i.ajax(i.extend({},r.ajax,{url:r.href,error:function(s,u){if(q.coming&&u!=="abort"){q._error("ajax",s)
}else{q.hideLoading()
}},success:function(s,u){if(u==="success"){r.content=s;
q._afterLoad()
}}}))
},_loadIframe:function(){var r=q.coming,s=i(r.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr("scrolling",f?"auto":r.iframe.scrolling).attr("src",r.href);
i(r.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()
}catch(u){}});
if(r.iframe.preload){q.showLoading();
s.one("load",function(){i(this).data("ready",1);
if(!f){i(this).bind("load.fb",q.update)
}i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
q._afterLoad()
})
}r.content=s.appendTo(r.inner);
if(!r.iframe.preload){q._afterLoad()
}},_preloadImages:function(){var x=q.group,w=q.current,r=x.length,u=w.preload?Math.min(w.preload,r-1):0,v,s;
for(s=1;
s<=u;
s+=1){v=x[(w.index+s)%r];
if(v.type==="image"&&v.href){new Image().src=v.href
}}},_afterLoad:function(){var s=q.coming,v=q.current,A="fancybox-placeholder",x,y,z,u,r,w;
q.hideLoading();
if(!s||q.isActive===false){return
}if(false===q.trigger("afterLoad",s,v)){s.wrap.stop(true).trigger("onReset").remove();
q.coming=null;
return
}if(v){q.trigger("beforeChange",v);
v.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()
}q.unbindEvents();
x=s;
y=s.content;
z=s.type;
u=s.scrolling;
i.extend(q,{wrap:x.wrap,skin:x.skin,outer:x.outer,inner:x.inner,current:x,previous:v});
r=x.href;
switch(z){case"inline":case"ajax":case"html":if(x.selector){y=i("<div>").html(y).find(x.selector)
}else{if(j(y)){if(!y.data(A)){y.data(A,i('<div class="'+A+'"></div>').insertAfter(y).hide())
}y=y.show().detach();
x.wrap.bind("onReset",function(){if(i(this).find(y).length){y.hide().replaceAll(y.data(A)).data(A,false)
}})
}}break;
case"image":y=x.tpl.image.replace(/\{href\}/g,r);
break;
case"swf":y='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>';
w="";
i.each(x.swf,function(B,C){y+='<param name="'+B+'" value="'+C+'"></param>';
w+=" "+B+'="'+C+'"'
});
y+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+w+"></embed></object>";
break
}if(!(j(y)&&y.parent().is(x.inner))){x.inner.append(y)
}q.trigger("beforeShow");
x.inner.css("overflow",u==="yes"?"scroll":(u==="no"?"hidden":u));
q._setDimension();
q.reposition();
q.isOpen=false;
q.coming=null;
q.bindEvents();
if(!q.isOpened){i(".fancybox-wrap").not(x.wrap).stop(true).trigger("onReset").remove()
}else{if(v.prevMethod){q.transitions[v.prevMethod]()
}}q.transitions[q.isOpened?x.nextMethod:x.openMethod]();
q._preloadImages()
},_setDimension:function(){var V=q.getViewport(),R=0,X=false,Z=false,D=q.wrap,P=q.skin,aa=q.inner,M=q.current,N=M.width,K=M.height,G=M.minWidth,z=M.minHeight,T=M.maxWidth,L=M.maxHeight,F=M.scrolling,x=M.scrollOutside?M.scrollbarWidth:0,J=M.margin,y=n(J[1]+J[3]),w=n(J[0]+J[2]),u,s,Q,S,I,H,O,B,A,W,v,Y,r,C,E;
D.add(P).add(aa).width("auto").height("auto").removeClass("fancybox-tmp");
u=n(P.outerWidth(true)-P.width());
s=n(P.outerHeight(true)-P.height());
Q=y+u;
S=w+s;
I=m(N)?(V.w-Q)*n(N)/100:N;
H=m(K)?(V.h-S)*n(K)/100:K;
if(M.type==="iframe"){C=M.content;
if(M.autoHeight&&C.data("ready")===1){try{if(C[0].contentWindow.document.location){aa.width(I).height(9999);
E=C.contents().find("body");
if(x){E.css("overflow-x","hidden")
}H=E.outerHeight(true)
}}catch(U){}}}else{if(M.autoWidth||M.autoHeight){aa.addClass("fancybox-tmp");
if(!M.autoWidth){aa.width(I)
}if(!M.autoHeight){aa.height(H)
}if(M.autoWidth){I=aa.width()
}if(M.autoHeight){H=aa.height()
}aa.removeClass("fancybox-tmp")
}}N=n(I);
K=n(H);
A=I/H;
G=n(m(G)?n(G,"w")-Q:G);
T=n(m(T)?n(T,"w")-Q:T);
z=n(m(z)?n(z,"h")-S:z);
L=n(m(L)?n(L,"h")-S:L);
O=T;
B=L;
if(M.fitToView){T=Math.min(V.w-Q,T);
L=Math.min(V.h-S,L)
}Y=V.w-y;
r=V.h-w;
if(M.aspectRatio){if(N>T){N=T;
K=n(N/A)
}if(K>L){K=L;
N=n(K*A)
}if(N<G){N=G;
K=n(N/A)
}if(K<z){K=z;
N=n(K*A)
}}else{N=Math.max(G,Math.min(N,T));
if(M.autoHeight&&M.type!=="iframe"){aa.width(N);
K=aa.height()
}K=Math.max(z,Math.min(K,L))
}if(M.fitToView){aa.width(N).height(K);
D.width(N+u);
W=D.width();
v=D.height();
if(M.aspectRatio){while((W>Y||v>r)&&N>G&&K>z){if(R++>19){break
}K=Math.max(z,Math.min(L,K-10));
N=n(K*A);
if(N<G){N=G;
K=n(N/A)
}if(N>T){N=T;
K=n(N/A)
}aa.width(N).height(K);
D.width(N+u);
W=D.width();
v=D.height()
}}else{N=Math.max(G,Math.min(N,N-(W-Y)));
K=Math.max(z,Math.min(K,K-(v-r)))
}}if(x&&F==="auto"&&K<H&&(N+u+x)<Y){N+=x
}aa.width(N).height(K);
D.width(N+u);
W=D.width();
v=D.height();
X=(W>Y||v>r)&&N>G&&K>z;
Z=M.aspectRatio?(N<O&&K<B&&N<I&&K<H):((N<O||K<B)&&(N<I||K<H));
i.extend(M,{dim:{width:g(W),height:g(v)},origWidth:I,origHeight:H,canShrink:X,canExpand:Z,wPadding:u,hPadding:s,wrapSpace:v-P.outerHeight(true),skinSpace:P.height()-K});
if(!C&&M.autoHeight&&K>z&&K<L&&!Z){aa.height("auto")
}},_getPosition:function(u){var y=q.current,s=q.getViewport(),w=y.margin,v=q.wrap.width()+w[1]+w[3],r=q.wrap.height()+w[0]+w[2],x={position:"absolute",top:w[0],left:w[3]};
if(y.autoCenter&&y.fixed&&!u&&r<=s.h&&v<=s.w){x.position="fixed"
}else{if(!y.locked){x.top+=s.y;
x.left+=s.x
}}x.top=g(Math.max(x.top,x.top+((s.h-r)*y.topRatio)));
x.left=g(Math.max(x.left,x.left+((s.w-v)*y.leftRatio)));
return x
},_afterZoomIn:function(){var r=q.current;
if(!r){return
}q.isOpen=q.isOpened=true;
q.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0);
q.update();
if(r.closeClick||(r.nextClick&&q.group.length>1)){q.inner.css("cursor","pointer").bind("click.fb",function(s){if(!i(s.target).is("a")&&!i(s.target).parent().is("a")){s.preventDefault();
q[r.closeClick?"close":"next"]()
}})
}if(r.closeBtn){i(r.tpl.closeBtn).appendTo(q.skin).bind("click.fb",function(s){s.preventDefault();
q.close()
})
}if(r.arrows&&q.group.length>1){if(r.loop||r.index>0){i(r.tpl.prev).appendTo(q.outer).bind("click.fb",q.prev)
}if(r.loop||r.index<q.group.length-1){i(r.tpl.next).appendTo(q.outer).bind("click.fb",q.next)
}}q.trigger("afterShow");
if(!r.loop&&r.index===r.group.length-1){q.play(false)
}else{if(q.opts.autoPlay&&!q.player.isActive){q.opts.autoPlay=false;
q.play(true)
}}},_afterZoomOut:function(r){r=r||q.current;
i(".fancybox-wrap").trigger("onReset").remove();
i.extend(q,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});
q.trigger("afterClose",r)
}});
q.transitions={getOrigPosition:function(){var v=q.current,s=v.element,y=v.orig,x={},r=50,z=50,w=v.hPadding,A=v.wPadding,u=q.getViewport();
if(!y&&v.isDom&&s.is(":visible")){y=s.find("img:first");
if(!y.length){y=s
}}if(j(y)){x=y.offset();
if(y.is("img")){r=y.outerWidth();
z=y.outerHeight()
}}else{x.top=u.y+(u.h-z)*v.topRatio;
x.left=u.x+(u.w-r)*v.leftRatio
}if(q.wrap.css("position")==="fixed"||v.locked){x.top-=u.y;
x.left-=u.x
}x={top:g(x.top-w*v.topRatio),left:g(x.left-A*v.leftRatio),width:g(r+A),height:g(z+w)};
return x
},step:function(s,u){var w,y,z,r=u.prop,v=q.current,x=v.wrapSpace,A=v.skinSpace;
if(r==="width"||r==="height"){w=u.end===u.start?1:(s-u.start)/(u.end-u.start);
if(q.isClosing){w=1-w
}y=r==="width"?v.wPadding:v.hPadding;
z=s-y;
q.skin[r](n(r==="width"?z:z-(x*w)));
q.inner[r](n(r==="width"?z:z-(x*w)-(A*w)))
}},zoomIn:function(){var w=q.current,s=w.pos,u=w.openEffect,v=u==="elastic",r=i.extend({opacity:1},s);
delete r.position;
if(v){s=this.getOrigPosition();
if(w.openOpacity){s.opacity=0.1
}}else{if(u==="fade"){s.opacity=0.1
}}q.wrap.css(s).animate(r,{duration:u==="none"?0:w.openSpeed,easing:w.openEasing,step:v?this.step:null,complete:q._afterZoomIn})
},zoomOut:function(){var v=q.current,s=v.closeEffect,u=s==="elastic",r={opacity:0.1};
if(u){r=this.getOrigPosition();
if(v.closeOpacity){r.opacity=0.1
}}q.wrap.animate(r,{duration:s==="none"?0:v.closeSpeed,easing:v.closeEasing,step:u?this.step:null,complete:q._afterZoomOut})
},changeIn:function(){var x=q.current,u=x.nextEffect,s=x.pos,r={opacity:1},w=q.direction,y=200,v;
s.opacity=0.1;
if(u==="elastic"){v=w==="down"||w==="up"?"top":"left";
if(w==="down"||w==="right"){s[v]=g(n(s[v])-y);
r[v]="+="+y+"px"
}else{s[v]=g(n(s[v])+y);
r[v]="-="+y+"px"
}}if(u==="none"){q._afterZoomIn()
}else{q.wrap.css(s).animate(r,{duration:x.nextSpeed,easing:x.nextEasing,complete:q._afterZoomIn})
}},changeOut:function(){var u=q.previous,s=u.prevEffect,r={opacity:0.1},v=q.direction,w=200;
if(s==="elastic"){r[v==="down"||v==="up"?"top":"left"]=(v==="up"||v==="left"?"-":"+")+"="+w+"px"
}u.wrap.animate(r,{duration:s==="none"?0:u.prevSpeed,easing:u.prevEasing,complete:function(){i(this).trigger("onReset").remove()
}})
}};
q.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!f,fixed:true},overlay:null,fixed:false,el:i("html"),create:function(s){var r;
s=i.extend({},this.defaults,s);
if(this.overlay){this.close()
}r=q.coming?q.coming.parent:s.parent;
this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(r&&r.length?r:"body");
this.fixed=false;
if(s.fixed&&q.defaults.fixed){this.overlay.addClass("fancybox-overlay-fixed");
this.fixed=true
}},open:function(s){var r=this;
s=i.extend({},this.defaults,s);
if(this.overlay){this.overlay.unbind(".overlay").width("auto").height("auto")
}else{this.create(s)
}if(!this.fixed){d.bind("resize.overlay",i.proxy(this.update,this));
this.update()
}if(s.closeClick){this.overlay.bind("click.overlay",function(u){if(i(u.target).hasClass("fancybox-overlay")){if(q.isActive){q.close()
}else{r.close()
}return false
}})
}this.overlay.css(s.css).show()
},close:function(){d.unbind("resize.overlay");
if(this.el.hasClass("fancybox-lock")){i(".fancybox-margin").removeClass("fancybox-margin");
this.el.removeClass("fancybox-lock");
d.scrollTop(this.scrollV).scrollLeft(this.scrollH)
}i(".fancybox-overlay").remove().hide();
i.extend(this,{overlay:null,fixed:false})
},update:function(){var s="100%",r;
this.overlay.width(s).height("100%");
if(k){r=Math.max(o.documentElement.offsetWidth,o.body.offsetWidth);
if(a.width()>r){s=a.width()
}}else{if(a.width()>d.width()){s=a.width()
}}this.overlay.width(s).height(a.height())
},onReady:function(s,u){var r=this.overlay;
i(".fancybox-overlay").stop(true,true);
if(!r){this.create(s)
}if(s.locked&&this.fixed&&u.fixed){u.locked=this.overlay.append(u.wrap);
u.fixed=false
}if(s.showEarly===true){this.beforeShow.apply(this,arguments)
}},beforeShow:function(r,s){if(s.locked&&!this.el.hasClass("fancybox-lock")){if(this.fixPosition!==false){i("*").filter(function(){return(i(this).css("position")==="fixed"&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap"))
}).addClass("fancybox-margin")
}this.el.addClass("fancybox-margin");
this.scrollV=d.scrollTop();
this.scrollH=d.scrollLeft();
this.el.addClass("fancybox-lock");
d.scrollTop(this.scrollV).scrollLeft(this.scrollH)
}this.open(r)
},onUpdate:function(){if(!this.fixed){this.update()
}},afterClose:function(r){if(this.overlay&&!q.coming){this.overlay.fadeOut(r.speedOut,i.proxy(this.close,this))
}}};
q.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(s){var v=q.current,x=v.title,r=s.type,w,u;
if(i.isFunction(x)){x=x.call(v.element,v)
}if(!b(x)||i.trim(x)===""){return
}w=i('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+x+"</div>");
switch(r){case"inside":u=q.skin;
break;
case"outside":u=q.wrap;
break;
case"over":u=q.inner;
break;
default:u=q.skin;
w.appendTo("body");
if(k){w.width(w.width())
}w.wrapInner('<span class="child"></span>');
q.current.margin[2]+=Math.abs(n(w.css("margin-bottom")));
break
}w[(s.position==="top"?"prependTo":"appendTo")](u)
}};
i.fn.fancybox=function(u){var s,v=i(this),r=this.selector||"",w=function(A){var z=i(this).blur(),x=s,y,B;
if(!(A.ctrlKey||A.altKey||A.shiftKey||A.metaKey)&&!z.is(".fancybox-wrap")){y=u.groupAttr||"data-fancybox-group";
B=z.attr(y);
if(!B){y="rel";
B=z.get(0)[y]
}if(B&&B!==""&&B!=="nofollow"){z=r.length?i(r):v;
z=z.filter("["+y+'="'+B+'"]');
x=z.index(this)
}u.index=x;
if(q.open(z,u)!==false){A.preventDefault()
}}};
u=u||{};
s=u.index||0;
if(!r||u.live===false){v.unbind("click.fb-start").bind("click.fb-start",w)
}else{a.undelegate(r,"click.fb-start").delegate(r+":not('.fancybox-item, .fancybox-nav')","click.fb-start",w)
}this.filter("[data-fancybox-start=1]").trigger("click");
return this
};
a.ready(function(){var s,r;
if(i.scrollbarWidth===e){i.scrollbarWidth=function(){var v=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),w=v.children(),u=w.innerWidth()-w.height(99).innerWidth();
v.remove();
return u
}
}if(i.support.fixedPosition===e){i.support.fixedPosition=(function(){var v=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),u=(v[0].offsetTop===20||v[0].offsetTop===15);
v.remove();
return u
}())
}i.extend(q.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")});
s=i(l).width();
p.addClass("fancybox-lock-test");
r=i(l).width();
p.removeClass("fancybox-lock-test");
i("<style type='text/css'>.fancybox-margin{margin-right:"+(r-s)+"px;}</style>").appendTo("head")
})
}(window,document,jQuery));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(jQuery)
}}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "));
return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);
if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setTime(+u+r*86400000)
}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};
var s=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=s.length;
o<m;
o++){var n=s[o].split("=");
var j=g(n.shift());
var k=n.join("=");
if(q&&q===j){w=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w
};
b.defaults={};
f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false
}f.cookie(j,"",f.extend({},i,{expires:-1}));
return !f.cookie(j)
}
}));
eval(function(h,b,i,d,g,f){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36))
};
if(!"".replace(/^/,String)){while(i--){f[g(i)]=d[i]||g(i)
}d=[function(a){return f[a]
}];
g=function(){return"\\w+"
};
i=1
}while(i--){if(d[i]){h=h.replace(new RegExp("\\b"+g(i)+"\\b","g"),d[i])
}}return h
}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)',62,382,"||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document".split("|"),0,{}));
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Carousel Jquery Plugin
 * http://owlgraphic.com/owlcarousel/
 *
 * items : 3, //10 items above 1000px browser width
 * itemsDesktop : [1000,3], //5 items between 1000px and 901px
 * itemsDesktopSmall : [900,2], // betweem 900px and 801px
 * itemsTablet: [800,1], //2 items between 451 and 800
 * itemsMobile : [450,1], //1 items between 450 and 0
 * navigation: false, // Display "next" and "prev" buttons.
 * pagination: true, // Show pagination.
 * itemsScaleUp : true //Option to not stretch items when it is less than the supplied items
 */
;
(function(f,d,a,h){var e="carousel",g={items:3,itemsDesktop:[1000,3],itemsDesktopSmall:[900,2],itemsTablet:[800,1],itemsMobile:[450,1],navigation:false,pagination:true,itemsScaleUp:true,mouseDrag:false,touchDrag:true};
function c(m,k){this.element=m;
this.options=f.extend({},g,k);
this._defaults=g;
this._name=e;
var j=f(this.element);
var n=this.options.stopAutoplayOnEvent;
if(typeof n==="string"&&n!==""){f(d).on(n,function(){j.trigger("owl.stop")
})
}var i=this.options.startAutoplayOnEvent;
var l=this.options.autoPlay;
if(typeof i==="string"&&i!==""){f(d).on(i,function(){j.trigger("owl.play",l)
})
}j.owlCarousel(this.options)
}function b(j){var i=f(j);
i.removeClass("carousel-hide");
i.addClass("carousel-show")
}f.fn[e]=function(i){return this.each(function(){if(!f.data(this,"plugin_"+e)){f.data(this,"plugin_"+e,new c(this,i))
}})
};
f(d).load(function(){var i=f(".carousel");
f.each(i,function(j,l){var k=f(l);
var m=k.attr("data-carousel-enable-callback");
if(typeof(m)!=="undefined"){k.carousel({afterInit:b})
}else{k.carousel()
}});
f("#carousel-wide").carousel({items:1,itemsDesktop:[1000,1],itemsDesktopSmall:[900,1],itemsTablet:[800,1],itemsMobile:[450,1],navigation:true,navigationText:["",""],theme:"ta-theme"});
f(".carousel-generic").each(function(l,m){var k=f(m);
var n={navigation:true,slideSpeed:300,paginationSpeed:800,singleItem:true,rewindNav:true,navigationText:["",""],theme:"ta-theme"};
var j=false;
if(k&&k.data("should-autorotate")){j=k.data("should-autorotate")
}if(j){f.extend(n,{autoPlay:6000,stopOnHover:true})
}k.carousel(n)
});
f(".miniatdw-carousel").carousel({items:7,itemsDesktop:[1200,7],itemsDesktopSmall:[1024,4],itemsTablet:[768,3],itemsMobile:[420,1],navigation:false,pagination:true,afterInit:b})
});
f(a).ready(function(){f(d).on("livefyre-carousel-init-owl",function(j){var i={items:3,itemsDesktop:[1200,3],itemsDesktopSmall:[1024,3],itemsTablet:[767,2],itemsMobile:[420,2],navigation:true,navigationText:["",""],theme:"ta-theme",pagination:true,afterInit:b};
if(j.originalEvent.detail.shouldAutorotate){f.extend(i,{autoPlay:5000,stopOnHover:true,rewindNav:true,scrollPerPage:true,stopAutoplayOnEvent:"lightbox-open",startAutoplayOnEvent:"lightbox-close"})
}f(j.originalEvent.detail.id).carousel(i)
})
})
})(jQuery,window,document);
/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(aS,W,A){var a=aS.skrollr={get:function(){return O
},init:function(aX){return O||new aI(aX)
},VERSION:"0.6.21"};
var aG=Object.prototype.hasOwnProperty;
var am=aS.Math;
var az=aS.getComputedStyle;
var z;
var u;
var x="touchstart";
var aN="touchmove";
var ab="touchcancel";
var e="touchend";
var aj="skrollable";
var Z=aj+"-before";
var aU=aj+"-between";
var Q=aj+"-after";
var i="skrollr";
var ax="no-"+i;
var af=i+"-desktop";
var n=i+"-mobile";
var g="linear";
var X=1000;
var aq=0.004;
var aC=200;
var G="start";
var ad="end";
var at="center";
var o="bottom";
var j="___skrollable_id";
var ag=/^(?:input|textarea|button|select)$/i;
var p=/^\s+|\s+$/g;
var H=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;
var v=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;
var d=/^([a-z\-]+)\[(\w+)\]$/;
var an=/-([a-z])/g;
var au=function(aY,aX){return aX.toUpperCase()
};
var av=/[\-+]?[\d]*\.?[\d]+/g;
var N=/\{\?\}/g;
var m=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;
var aB=/[a-z\-]+-gradient/g;
var E="";
var ai="";
var aQ=function(){var aZ=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
if(!az){return
}var aY=az(u,null);
for(var aX in aY){E=(aX.match(aZ)||(+aX==aX&&aY[aX].match(aZ)));
if(E){break
}}if(!E){E=ai="";
return
}E=E[0];
if(E.slice(0,1)==="-"){ai=E;
E=({"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"})[E]
}else{ai="-"+E.toLowerCase()+"-"
}};
var k=function(){var aX=aS.requestAnimationFrame||aS[E.toLowerCase()+"RequestAnimationFrame"];
var aY=M();
if(J||!aX){aX=function(a1){var aZ=M()-aY;
var a0=am.max(0,1000/60-aZ);
return aS.setTimeout(function(){aY=M();
a1()
},a0)
}
}return aX
};
var ak=function(){var aX=aS.cancelAnimationFrame||aS[E.toLowerCase()+"CancelAnimationFrame"];
if(J||!aX){aX=function(aY){return aS.clearTimeout(aY)
}
}return aX
};
var K={begin:function(){return 0
},end:function(){return 1
},linear:function(aX){return aX
},quadratic:function(aX){return aX*aX
},cubic:function(aX){return aX*aX*aX
},swing:function(aX){return(-am.cos(aX*am.PI)/2)+0.5
},sqrt:function(aX){return am.sqrt(aX)
},outCubic:function(aX){return(am.pow((aX-1),3)+1)
},bounce:function(aY){var aX;
if(aY<=0.5083){aX=3
}else{if(aY<=0.8489){aX=9
}else{if(aY<=0.96208){aX=27
}else{if(aY<=0.99981){aX=91
}else{return 1
}}}}return 1-am.abs(3*am.cos(aY*aX*1.028)/aX)
}};
function aI(aY){z=W.documentElement;
u=W.body;
aQ();
O=this;
aY=aY||{};
Y=aY.constants||{};
if(aY.easing){for(var a0 in aY.easing){K[a0]=aY.easing[a0]
}}aL=aY.edgeStrategy||"set";
f={beforerender:aY.beforerender,render:aY.render};
aa=aY.forceHeight!==false;
if(aa){ap=aY.scale||1
}ar=aY.mobileDeceleration||aq;
C=aY.smoothScrolling!==false;
r=aY.smoothScrollingDuration||aC;
aD={targetTop:O.getScrollTop()};
J=((aY.mobileCheck||function(){return(/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent||navigator.vendor||aS.opera)
})());
if(J){S=W.getElementById("skrollr-body");
if(S){aV()
}s();
w(z,[i,n],[ax])
}else{w(z,[i,af],[ax])
}O.refresh();
aW(aS,"resize orientationchange",function(){var a2=z.clientWidth;
var a1=z.clientHeight;
if(a1!==B||a2!==l){B=a1;
l=a2;
aw=true
}});
var aZ=k();
(function aX(){ah();
aP=aZ(aX)
}());
return O
}aI.prototype.refresh=function(a6){var a5;
var bi;
var a4=false;
if(a6===A){a4=true;
T=[];
al=0;
a6=W.getElementsByTagName("*")
}else{a6=[].concat(a6)
}a5=0;
bi=a6.length;
for(;
a5<bi;
a5++){var aY=a6[a5];
var a2=aY;
var aX=[];
var bf=C;
var bb=aL;
if(!aY.attributes){continue
}var be=0;
var a7=aY.attributes.length;
for(;
be<a7;
be++){var a9=aY.attributes[be];
if(a9.name==="data-anchor-target"){a2=W.querySelector(a9.value);
if(a2===null){throw'Unable to find anchor target "'+a9.value+'"'
}continue
}if(a9.name==="data-smooth-scrolling"){bf=a9.value!=="off";
continue
}if(a9.name==="data-edge-strategy"){bb=a9.value;
continue
}var a3=a9.name.match(H);
if(a3===null){continue
}var a0={props:a9.value,element:aY};
aX.push(a0);
var aZ=a3[1];
if(aZ){a0.constant=aZ.substr(1)
}var a1=a3[2];
if(/p$/.test(a1)){a0.isPercentage=true;
a0.offset=(a1.slice(0,-1)|0)/100
}else{a0.offset=(a1|0)
}var bh=a3[3];
var bg=a3[4]||bh;
if(!bh||bh===G||bh===ad){a0.mode="absolute";
if(bh===ad){a0.isEnd=true
}else{if(!a0.isPercentage){a0.offset=a0.offset*ap
}}}else{a0.mode="relative";
a0.anchors=[bh,bg]
}}if(!aX.length){continue
}var bd,ba;
var a8;
if(!a4&&j in aY){a8=aY[j];
bd=T[a8].styleAttr;
ba=T[a8].classAttr
}else{a8=(aY[j]=al++);
bd=aY.style.cssText;
ba=ao(aY)
}T[a8]={element:aY,styleAttr:bd,classAttr:ba,anchorTarget:a2,keyFrames:aX,smoothScrolling:bf,edgeStrategy:bb};
w(aY,[aj],[])
}U();
a5=0;
bi=a6.length;
for(;
a5<bi;
a5++){var bc=T[a6[a5][j]];
if(bc===A){continue
}y(bc);
F(bc)
}return O
};
aI.prototype.relativeToAbsolute=function(aY,aZ,a1){var aX=z.clientHeight;
var a0=aY.getBoundingClientRect();
var a3=a0.top;
var a2=a0.bottom-a0.top;
if(aZ===o){a3-=aX
}else{if(aZ===at){a3-=aX/2
}}if(a1===o){a3+=a2
}else{if(a1===at){a3+=a2/2
}}a3+=O.getScrollTop();
return(a3+0.5)|0
};
aI.prototype.animateTo=function(a0,aY){aY=aY||{};
var aX=M();
var aZ=O.getScrollTop();
aE={startTop:aZ,topDiff:a0-aZ,targetTop:a0,duration:aY.duration||X,startTime:aX,endTime:aX+(aY.duration||X),easing:K[aY.easing||g],done:aY.done};
if(!aE.topDiff){if(aE.done){aE.done.call(O,false)
}aE=A
}return O
};
aI.prototype.stopAnimateTo=function(){if(aE&&aE.done){aE.done.call(O,true)
}aE=A
};
aI.prototype.isAnimatingTo=function(){return !!aE
};
aI.prototype.setScrollTop=function(aY,aX){aK=(aX===true);
if(J){aJ=am.min(am.max(aY,0),ay)
}else{aS.scrollTo(0,aY)
}return O
};
aI.prototype.getScrollTop=function(){if(J){return aJ
}else{return aS.pageYOffset||z.scrollTop||u.scrollTop||0
}};
aI.prototype.getMaxScrollTop=function(){return ay
};
aI.prototype.on=function(aX,aY){f[aX]=aY;
return O
};
aI.prototype.off=function(aX){delete f[aX];
return O
};
aI.prototype.destroy=function(){var aY=ak();
aY(aP);
c();
w(z,[ax],[i,af,n]);
var aX=0;
var aZ=T.length;
for(;
aX<aZ;
aX++){I(T[aX].element)
}z.style.overflow=u.style.overflow="auto";
z.style.height=u.style.height="auto";
if(S){a.setStyle(S,"transform","none")
}O=A;
S=A;
f=A;
aa=A;
ay=0;
ap=1;
Y=A;
ar=A;
h="down";
D=-1;
l=0;
B=0;
aw=false;
aE=A;
C=A;
r=A;
aD=A;
aK=A;
al=0;
aL=A;
J=false;
aJ=0;
ae=A
};
var s=function(){var a8;
var a5;
var a7;
var a3;
var a1;
var a2;
var a4;
var aZ;
var a0;
var aY;
var aX;
var a6;
aW(z,[x,aN,ab,e].join(" "),function(be){var bc=be.changedTouches[0];
a3=be.target;
while(a3.nodeType===3){a3=a3.parentNode
}a1=bc.clientY;
a2=bc.clientX;
aY=be.timeStamp;
if(!ag.test(a3.tagName)){be.preventDefault()
}switch(be.type){case x:if(a8){a8.blur()
}O.stopAnimateTo();
a8=a3;
a5=a4=a1;
a7=a2;
a0=aY;
break;
case aN:if(ag.test(a3.tagName)&&W.activeElement!==a3){be.preventDefault()
}aZ=a1-a4;
a6=aY-aX;
O.setScrollTop(aJ-aZ,true);
a4=a1;
aX=aY;
break;
default:case ab:case e:var bf=a5-a1;
var bh=a7-a2;
var bd=bh*bh+bf*bf;
if(bd<49){if(!ag.test(a8.tagName)){a8.focus();
var bi=W.createEvent("MouseEvents");
bi.initMouseEvent("click",true,true,be.view,1,bc.screenX,bc.screenY,bc.clientX,bc.clientY,be.ctrlKey,be.altKey,be.shiftKey,be.metaKey,0,null);
a8.dispatchEvent(bi)
}return
}a8=A;
var ba=aZ/a6;
ba=am.max(am.min(ba,3),-3);
var bb=am.abs(ba/ar);
var bj=ba*bb+0.5*ar*bb*bb;
var bg=O.getScrollTop()-bj;
var a9=0;
if(bg>ay){a9=(ay-bg)/bj;
bg=ay
}else{if(bg<0){a9=-bg/bj;
bg=0
}}bb=bb*(1-a9);
O.animateTo((bg+0.5)|0,{easing:"outCubic",duration:bb});
break
}});
aS.scrollTo(0,0);
z.style.overflow=u.style.overflow="hidden"
};
var L=function(){var a7=z.clientHeight;
var a9=aA();
var aZ;
var a5;
var a4;
var a6;
var aX;
var a0;
var a1;
var a3;
var a8;
var a2;
var aY;
a3=0;
a8=T.length;
for(;
a3<a8;
a3++){aZ=T[a3];
a5=aZ.element;
a4=aZ.anchorTarget;
a6=aZ.keyFrames;
aX=0;
a0=a6.length;
for(;
aX<a0;
aX++){a1=a6[aX];
a2=a1.offset;
aY=a9[a1.constant]||0;
a1.frame=a2;
if(a1.isPercentage){a2=a2*a7;
a1.frame=a2
}if(a1.mode==="relative"){I(a5);
a1.frame=O.relativeToAbsolute(a4,a1.anchors[0],a1.anchors[1])-a2;
I(a5,true)
}a1.frame+=aY;
if(aa){if(!a1.isEnd&&a1.frame>ay){ay=a1.frame
}}}}ay=am.max(ay,R());
a3=0;
a8=T.length;
for(;
a3<a8;
a3++){aZ=T[a3];
a6=aZ.keyFrames;
aX=0;
a0=a6.length;
for(;
aX<a0;
aX++){a1=a6[aX];
aY=a9[a1.constant]||0;
if(a1.isEnd){a1.frame=ay-a1.offset+aY
}}aZ.keyFrames.sort(aH)
}};
var ac=function(bb,bc){var aZ=0;
var a1=T.length;
for(;
aZ<a1;
aZ++){var bf=T[aZ];
var aY=bf.element;
var a8=bf.smoothScrolling?bb:bc;
var a7=bf.keyFrames;
var a4=a7[0].frame;
var aX=a7[a7.length-1].frame;
var bd=a8<a4;
var a6=a8>aX;
var bg=a7[bd?0:a7.length-1];
var bh;
var ba;
if(bd||a6){if(bd&&bf.edge===-1||a6&&bf.edge===1){continue
}w(aY,[bd?Z:Q],[Z,aU,Q]);
bf.edge=bd?-1:1;
switch(bf.edgeStrategy){case"reset":I(aY);
continue;
case"ease":a8=bg.frame;
break;
default:case"set":var a0=bg.props;
for(bh in a0){if(aG.call(a0,bh)){ba=b(a0[bh].value);
a.setStyle(aY,bh,ba)
}}continue
}}else{if(bf.edge!==0){w(aY,[aj,aU],[Z,Q]);
bf.edge=0
}}var a5=0;
var a9=a7.length-1;
for(;
a5<a9;
a5++){if(a8>=a7[a5].frame&&a8<=a7[a5+1].frame){var a2=a7[a5];
var be=a7[a5+1];
for(bh in a2.props){if(aG.call(a2.props,bh)){var a3=(a8-a2.frame)/(be.frame-a2.frame);
a3=a2.props[bh].easing(a3);
ba=aO(a2.props[bh].value,be.props[bh].value,a3);
ba=b(ba);
a.setStyle(aY,bh,ba)
}}break
}}}};
var ah=function(){if(aw){aw=false;
U()
}var aZ=O.getScrollTop();
var aY;
var a1=M();
var a0;
if(aE){if(a1>=aE.endTime){aZ=aE.targetTop;
aY=aE.done;
aE=A
}else{a0=aE.easing((a1-aE.startTime)/aE.duration);
aZ=(aE.startTop+a0*aE.topDiff)|0
}O.setScrollTop(aZ,true)
}else{if(!aK){var aX=aD.targetTop-aZ;
if(aX){aD={startTop:D,topDiff:aZ-D,targetTop:aZ,startTime:aR,endTime:aR+r}
}if(a1<=aD.endTime){a0=K.sqrt((a1-aD.startTime)/r);
aZ=(aD.startTop+a0*aD.topDiff)|0
}}}if(J&&S){a.setStyle(S,"transform","translate(0, "+-(aJ)+"px) "+ae)
}if(aK||D!==aZ){h=(aZ>D)?"down":(aZ<D?"up":h);
aK=false;
var a3={curTop:aZ,lastTop:D,maxTop:ay,direction:h};
var a2=f.beforerender&&f.beforerender.call(O,a3);
if(a2!==false){ac(aZ,O.getScrollTop());
D=aZ;
if(f.render){f.render.call(O,a3)
}}if(aY){aY.call(O,false)
}}aR=a1
};
var y=function(aZ){var aY=0;
var a1=aZ.keyFrames.length;
for(;
aY<a1;
aY++){var a0=aZ.keyFrames[aY];
var a3;
var a5;
var aX;
var a4={};
var a2;
while((a2=v.exec(a0.props))!==null){aX=a2[1];
a5=a2[2];
a3=aX.match(d);
if(a3!==null){aX=a3[1];
a3=a3[2]
}else{a3=g
}a5=a5.indexOf("!")?V(a5):[a5.slice(1)];
a4[aX]={value:a5,easing:K[a3]}
}a0.props=a4
}};
var V=function(aY){var aX=[];
m.lastIndex=0;
aY=aY.replace(m,function(aZ){return aZ.replace(av,function(a0){return a0/255*100+"%"
})
});
if(ai){aB.lastIndex=0;
aY=aY.replace(aB,function(aZ){return ai+aZ
})
}aY=aY.replace(av,function(aZ){aX.push(+aZ);
return"{?}"
});
aX.unshift(aY);
return aX
};
var F=function(aY){var aX={};
var a0;
var aZ;
a0=0;
aZ=aY.keyFrames.length;
for(;
a0<aZ;
a0++){aM(aY.keyFrames[a0],aX)
}aX={};
a0=aY.keyFrames.length-1;
for(;
a0>=0;
a0--){aM(aY.keyFrames[a0],aX)
}};
var aM=function(aZ,aX){var aY;
for(aY in aX){if(!aG.call(aZ.props,aY)){aZ.props[aY]=aX[aY]
}}for(aY in aZ.props){aX[aY]=aZ.props[aY]
}};
var aO=function(a1,a0,aZ){var a2;
var aX=a1.length;
if(aX!==a0.length){throw"Can't interpolate between \""+a1[0]+'" and "'+a0[0]+'"'
}var aY=[a1[0]];
a2=1;
for(;
a2<aX;
a2++){aY[a2]=a1[a2]+((a0[a2]-a1[a2])*aZ)
}return aY
};
var b=function(aY){var aX=1;
N.lastIndex=0;
return aY[0].replace(N,function(){return aY[aX++]
})
};
var I=function(a2,aZ){a2=[].concat(a2);
var aY;
var a1;
var aX=0;
var a0=a2.length;
for(;
aX<a0;
aX++){a1=a2[aX];
aY=T[a1[j]];
if(!aY){continue
}if(aZ){a1.style.cssText=aY.dirtyStyleAttr;
w(a1,aY.dirtyClassAttr)
}else{aY.dirtyStyleAttr=a1.style.cssText;
aY.dirtyClassAttr=ao(a1);
a1.style.cssText=aY.styleAttr;
w(a1,aY.classAttr)
}}};
var aV=function(){ae="translateZ(0)";
a.setStyle(S,"transform",ae);
var aZ=az(S);
var aY=aZ.getPropertyValue("transform");
var aX=aZ.getPropertyValue(ai+"transform");
var a0=(aY&&aY!=="none")||(aX&&aX!=="none");
if(!a0){ae=""
}};
a.setStyle=function(aY,a1,aZ){var aX=aY.style;
a1=a1.replace(an,au).replace("-","");
if(a1==="zIndex"){if(isNaN(aZ)){aX[a1]=aZ
}else{aX[a1]=""+(aZ|0)
}}else{if(a1==="float"){aX.styleFloat=aX.cssFloat=aZ
}else{try{if(E){aX[E+a1.slice(0,1).toUpperCase()+a1.slice(1)]=aZ
}aX[a1]=aZ
}catch(a0){}}}};
var aW=a.addEvent=function(a0,a2,a3){var a1=function(a4){a4=a4||aS.event;
if(!a4.target){a4.target=a4.srcElement
}if(!a4.preventDefault){a4.preventDefault=function(){a4.returnValue=false
}
}return a3.call(this,a4)
};
a2=a2.split(" ");
var aZ;
var aY=0;
var aX=a2.length;
for(;
aY<aX;
aY++){aZ=a2[aY];
if(a0.addEventListener){a0.addEventListener(aZ,a3,false)
}else{a0.attachEvent("on"+aZ,a1)
}aF.push({element:a0,name:aZ,listener:a3})
}};
var q=a.removeEvent=function(aZ,a0,a1){a0=a0.split(" ");
var aY=0;
var aX=a0.length;
for(;
aY<aX;
aY++){if(aZ.removeEventListener){aZ.removeEventListener(a0[aY],a1,false)
}else{aZ.detachEvent("on"+a0[aY],a1)
}}};
var c=function(){var aZ;
var aX=0;
var aY=aF.length;
for(;
aX<aY;
aX++){aZ=aF[aX];
q(aZ.element,aZ.name,aZ.listener)
}aF=[]
};
var U=function(){var aX=O.getScrollTop();
ay=0;
if(aa&&!J){u.style.height="auto"
}L();
if(aa&&!J){u.style.height=(ay+z.clientHeight)+"px"
}if(J){O.setScrollTop(am.min(O.getScrollTop(),ay))
}else{O.setScrollTop(aX,true)
}aK=true
};
var aA=function(){var aX=z.clientHeight;
var a0={};
var aZ;
var aY;
for(aZ in Y){aY=Y[aZ];
if(typeof aY==="function"){aY=aY.call(O)
}else{if((/p$/).test(aY)){aY=(aY.slice(0,-1)/100)*aX
}}a0[aZ]=aY
}return a0
};
var R=function(){var aY=(S&&S.offsetHeight||0);
var aX=am.max(aY,u.scrollHeight,u.offsetHeight,z.scrollHeight,z.offsetHeight,z.clientHeight);
return aX-z.clientHeight
};
var ao=function(aX){var aY="className";
if(aS.SVGElement&&aX instanceof aS.SVGElement){aX=aX[aY];
aY="baseVal"
}return aX[aY]
};
var w=function(a0,a5,a1){var aX="className";
if(aS.SVGElement&&a0 instanceof aS.SVGElement){a0=a0[aX];
aX="baseVal"
}if(a1===A){a0[aX]=a5;
return
}var aY=a0[aX];
var a4=0;
var aZ=a1.length;
for(;
a4<aZ;
a4++){aY=P(aY).replace(P(a1[a4])," ")
}aY=aT(aY);
var a3=0;
var a2=a5.length;
for(;
a3<a2;
a3++){if(P(aY).indexOf(P(a5[a3]))===-1){aY+=" "+a5[a3]
}}a0[aX]=aT(aY)
};
var aT=function(aX){return aX.replace(p,"")
};
var P=function(aX){return" "+aX+" "
};
var M=Date.now||function(){return +new Date()
};
var aH=function(aY,aX){return aY.frame-aX.frame
};
var O;
var T;
var S;
var f;
var aa;
var ay=0;
var ap=1;
var Y;
var ar;
var h="down";
var D=-1;
var aR=M();
var l=0;
var B=0;
var aw=false;
var aE;
var C;
var r;
var aD;
var aK;
var al=0;
var aL;
var J=false;
var aJ=0;
var ae;
var aF=[];
var aP
}(window,document));
(function(d){var b=d.event,a,c;
a=b.special.debouncedresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(i,e){var h=this,g=arguments,f=function(){i.type="debouncedresize";
b.dispatch.apply(h,g)
};
if(c){clearTimeout(c)
}e?f():c=setTimeout(f,a.threshold)
},threshold:150}
})($);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
g.id="mq-test-1";
g.style.cssText="position:absolute;top:-100em";
d.style.background="none";
d.appendChild(g);
return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(d,b);
c=g.offsetWidth===42;
a.removeChild(d);
return{matches:c,media:h}
}
}(document));
(function(c,b){b.picturefill=function(e){var g;
var f=0;
if(e===g){e=c("body")
}c("div[data-picture]",e).each(function(){var k=this;
var j=[];
c("div[data-media]",k).each(function(){var q=c(this).attr("data-media");
if(!q||(b.matchMedia&&b.matchMedia(q).matches)){j.push(this)
}});
var i=c("img",k).first();
if(j.length){if(i.size()===0){var l=c(k);
var n=l.attr("data-alt");
var p=l.attr("data-title");
var h=l.attr("data-class");
i=c("<img />");
if(n&&n.length){i.attr("alt",n)
}if(p&&p.length){i.attr("title",p)
}if(h&&h.length){i.attr("class",h)
}i=i.appendTo(l)
}var m=j.pop();
i.attr("src",m.getAttribute("data-src"));
i.attr("alt",m.getAttribute("data-alt"));
var o=m.getAttribute("data-height");
if(o!=null){f=f+1;
i.closest(".largeparallax").find(".img-holder").attr("data-parallax-height",o).attr("data-id-for-parallax","parallax_elementID_"+f)
}}else{i.remove()
}})
};
c(function(){b.picturefill();
a()
});
c(b).on("debouncedresize ta-atdwresultspopulated ta-eventscalendarpopulated ta-searchresultspopulated",function(){b.picturefill();
a()
});
function d(){return navigator.userAgent.toString().toLowerCase().indexOf("trident/4.0")!==-1
}function a(){if(!d()){c(".fullwidth-bg-img-wrapper").each(function(){var h=c(this);
var i=h.find("img");
var g=i.attr("src");
if(g){switch(h.data("component")){case"hero":var f=h.closest(".fullwidth-bg");
f.addClass("fullwidth-hero-bg-img");
f.css("background-image","url("+g+")");
break;
case"eventsslideshow":var e=h.closest(".eventsslideshow-bg-img");
e.css("background-image","url("+g+")");
break;
case"fullwidth-bg-image":var e=h.closest(".fullwidth-bg");
e.css("background-image","url("+g+")");
break
}}})
}}}($,this));
+function(d){var b=function(f,e){this.options=e;
this.$body=d(document.body);
this.$element=d(f);
this.$backdrop=this.isShown=null;
this.scrollbarWidth=0;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
b.VERSION="3.2.0";
b.DEFAULTS={backdrop:true,keyboard:true,show:true};
b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)
};
b.prototype.show=function(h){var f=this;
var g=d.Event("show.bs.modal",{relatedTarget:h});
this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return
}this.isShown=true;
this.checkScrollbar();
this.$body.addClass("modal-open");
this.setScrollbar();
this.escape();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));
this.backdrop(function(){var j=d.support.transition&&f.$element.hasClass("fade");
if(!f.$element.parent().length){f.$element.appendTo(f.$body)
}f.$element.show().scrollTop(0);
if(j){f.$element[0].offsetWidth
}f.$element.addClass("in").attr("aria-hidden",false);
f.enforceFocus();
var i=d.Event("shown.bs.modal",{relatedTarget:h});
j?f.$element.find(".modal-dialog").one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(i)
}).emulateTransitionEnd(300):f.$element.trigger("focus").trigger(i)
})
};
b.prototype.hide=function(f){if(f){f.preventDefault()
}f=d.Event("hide.bs.modal");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.$body.removeClass("modal-open");
this.resetScrollbar();
this.escape();
d(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");
d.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",d.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()
};
b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")
}},this))
};
b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")
}}};
b.prototype.hideModal=function(){var e=this;
this.$element.hide();
this.backdrop(function(){e.$element.trigger("hidden.bs.modal")
})
};
b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
b.prototype.backdrop=function(i){var h=this;
var f=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;
this.$backdrop=d('<div class="modal-backdrop '+f+'" />').appendTo(this.$body);
this.$element.on("click.dismiss.bs.modal",d.proxy(function(j){if(j.target!==j.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)
},this));
if(e){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!i){return
}e?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(150):i()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var g=function(){h.removeBackdrop();
i&&i()
};
d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(150):g()
}else{if(i){i()
}}}};
b.prototype.checkScrollbar=function(){if(document.body.clientWidth>=window.innerWidth){return
}this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar()
};
b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);
if(this.scrollbarWidth){this.$body.css("padding-right",e+this.scrollbarWidth)
}};
b.prototype.resetScrollbar=function(){this.$body.css("padding-right","")
};
b.prototype.measureScrollbar=function(){var f=document.createElement("div");
f.className="modal-scrollbar-measure";
this.$body.append(f);
var e=f.offsetWidth-f.clientWidth;
this.$body[0].removeChild(f);
return e
};
function c(e,f){return this.each(function(){var i=d(this);
var h=i.data("bs.modal");
var g=d.extend({},b.DEFAULTS,i.data(),typeof e=="object"&&e);
if(!h){i.data("bs.modal",(h=new b(this,g)))
}if(typeof e=="string"){h[e](f)
}else{if(g.show){h.show(f)
}}})
}var a=d.fn.modal;
d.fn.modal=c;
d.fn.modal.Constructor=b;
d.fn.modal.noConflict=function(){d.fn.modal=a;
return this
};
d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(j){var i=d(this);
var g=i.attr("href");
var f=d(i.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));
var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),i.data());
if(i.is("a")){j.preventDefault()
}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return
}f.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")
})
});
c.call(f,h,this)
})
}(jQuery);
function PathAnimator(a){if(a){this.updatePath(a)
}this.timer=null
}PathAnimator.prototype.start=function(b,a,c,e,d){this.percent=c||0;
this.startPercent=c||0;
this.step=b||function(){};
this.callback=e||function(){};
this.startTime=new Date();
this.reverse=a;
this.delay=1000/60
};
PathAnimator.prototype.render=function(a){if(this.duration==0){return false
}var b=[],c;
if(typeof easing==="function"){a=easing(t)*100
}if(this.reverse){a=this.startPercent-a
}else{a+=this.startPercent
}if(a>100||a<0){return this.callback.call(this.context)
}this.percent=a;
b[0]=this.pointAt(a-1);
b[1]=this.pointAt(a+1);
c=Math.atan2(b[1].y-b[0].y,b[1].x-b[0].x)*180/Math.PI;
this.step.call(this.context,this.pointAt(a),c)
};
PathAnimator.prototype.pointAt=function(a){return this.path.getPointAtLength(this.len*a/100)
};
PathAnimator.prototype.updatePath=function(a){this.path=a;
this.len=this.path.getTotalLength()
};
/*! Video.js v4.8.1 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function(){var b=void 0,f=!0,k=null,l=!1;
function m(){return function(){}
}function p(a){return function(){return this[a]
}
}function r(a){return function(){return a
}
}var s;
document.createElement("video");
document.createElement("audio");
document.createElement("track");
function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));
if(t.Ba[a]){return t.Ba[a]
}a=t.v(a)
}if(!a||!a.nodeName){throw new TypeError("The element or ID supplied is not valid. (videojs)")
}return a.player||new t.Player(a,c,d)
}var videojs=window.videojs=t;
t.Ub="4.8";
t.Sc="https:"==document.location.protocol?"https://":"http://";
t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2000,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{},errorDisplay:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.ve||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
"GENERATED_CDN_VSN"!==t.Ub&&(videojs.options.flash.swf=t.Sc+"vjs.zencdn.net/"+t.Ub+"/video-js.swf");
t.dd=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.ga.Va(t.options.languages[a],c):c;
return t.options.languages
};
t.Ba={};
"function"===typeof define&&define.amd?define([],function(){return videojs
}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);
t.qa=t.CoreObject=m();
t.qa.extend=function(a){var c,d;
a=a||{};
c=a.init||a.i||this.prototype.init||this.prototype.i||m();
d=function(){c.apply(this,arguments)
};
d.prototype=t.h.create(this.prototype);
d.prototype.constructor=d;
d.extend=t.qa.extend;
d.create=t.qa.create;
for(var e in a){a.hasOwnProperty(e)&&(d.prototype[e]=a[e])
}return d
};
t.qa.create=function(){var a=t.h.create(this.prototype);
this.apply(a,arguments);
return a
};
t.d=function(a,c,d){if(t.h.isArray(c)){return u(t.d,a,c,d)
}var e=t.getData(a);
e.C||(e.C={});
e.C[c]||(e.C[c]=[]);
d.w||(d.w=t.w++);
e.C[c].push(d);
e.X||(e.disabled=l,e.X=function(c){if(!e.disabled){c=t.pc(c);
var d=e.C[c.type];
if(d){for(var d=d.slice(0),j=0,n=d.length;
j<n&&!c.wc();
j++){d[j].call(a,c)
}}}});
1==e.C[c].length&&(a.addEventListener?a.addEventListener(c,e.X,l):a.attachEvent&&a.attachEvent("on"+c,e.X))
};
t.o=function(a,c,d){if(t.sc(a)){var e=t.getData(a);
if(e.C){if(t.h.isArray(c)){return u(t.o,a,c,d)
}if(c){var g=e.C[c];
if(g){if(d){if(d.w){for(e=0;
e<g.length;
e++){g[e].w===d.w&&g.splice(e--,1)
}}}else{e.C[c]=[]
}t.jc(a,c)
}}else{for(g in e.C){c=g,e.C[c]=[],t.jc(a,c)
}}}}};
t.jc=function(a,c){var d=t.getData(a);
0===d.C[c].length&&(delete d.C[c],a.removeEventListener?a.removeEventListener(c,d.X,l):a.detachEvent&&a.detachEvent("on"+c,d.X));
t.Hb(d.C)&&(delete d.C,delete d.X,delete d.disabled);
t.Hb(d)&&t.Fc(a)
};
t.pc=function(a){function c(){return f
}function d(){return l
}if(!a||!a.Ib){var e=a||window.event;
a={};
for(var g in e){"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]))
}a.target||(a.target=a.srcElement||document);
a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;
a.preventDefault=function(){e.preventDefault&&e.preventDefault();
a.returnValue=l;
a.yd=c;
a.defaultPrevented=f
};
a.yd=d;
a.defaultPrevented=l;
a.stopPropagation=function(){e.stopPropagation&&e.stopPropagation();
a.cancelBubble=f;
a.Ib=c
};
a.Ib=d;
a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();
a.wc=c;
a.stopPropagation()
};
a.wc=d;
if(a.clientX!=k){g=document.documentElement;
var h=document.body;
a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);
a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)
}a.which=a.charCode||a.keyCode;
a.button!=k&&(a.button=a.button&1?0:a.button&4?1:a.button&2?2:0)
}return a
};
t.l=function(a,c){var d=t.sc(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;
"string"===typeof c&&(c={type:c,target:a});
c=t.pc(c);
d.X&&d.X.call(a,c);
if(e&&!c.Ib()&&c.bubbles!==l){t.l(e,c)
}else{if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;
if("function"===typeof c.target[c.type]){c.target[c.type]()
}d.disabled=l
}}return !c.defaultPrevented
};
t.W=function(a,c,d){function e(){t.o(a,c,e);
d.apply(this,arguments)
}if(t.h.isArray(c)){return u(t.W,a,c,d)
}e.w=d.w=d.w||t.w++;
t.d(a,c,e)
};
function u(a,c,d,e){t.hc.forEach(d,function(d){a(c,d,e)
})
}var v=Object.prototype.hasOwnProperty;
t.e=function(a,c){var d;
c=c||{};
d=document.createElement(a||"div");
t.h.Y(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c
});
return d
};
t.aa=function(a){return a.charAt(0).toUpperCase()+a.slice(1)
};
t.h={};
t.h.create=Object.create||function(a){function c(){}c.prototype=a;
return new c
};
t.h.Y=function(a,c,d){for(var e in a){v.call(a,e)&&c.call(d||this,e,a[e])
}};
t.h.z=function(a,c){if(!c){return a
}for(var d in c){v.call(c,d)&&(a[d]=c[d])
}return a
};
t.h.md=function(a,c){var d,e,g;
a=t.h.copy(a);
for(d in c){v.call(c,d)&&(e=a[d],g=c[d],a[d]=t.h.Ta(e)&&t.h.Ta(g)?t.h.md(e,g):c[d])
}return a
};
t.h.copy=function(a){return t.h.z({},a)
};
t.h.Ta=function(a){return !!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object
};
t.h.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)
};
t.Ad=function(a){return a!==a
};
t.bind=function(a,c,d){function e(){return c.apply(a,arguments)
}c.w||(c.w=t.w++);
e.w=d?d+"_"+c.w:c.w;
return e
};
t.ua={};
t.w=1;
t.expando="vdata"+(new Date).getTime();
t.getData=function(a){var c=a[t.expando];
c||(c=a[t.expando]=t.w++,t.ua[c]={});
return t.ua[c]
};
t.sc=function(a){a=a[t.expando];
return !(!a||t.Hb(t.ua[a]))
};
t.Fc=function(a){var c=a[t.expando];
if(c){delete t.ua[c];
try{delete a[t.expando]
}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=k
}}};
t.Hb=function(a){for(var c in a){if(a[c]!==k){return l
}}return f
};
t.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)
};
t.p=function(a,c){var d,e;
if(-1!=a.className.indexOf(c)){d=a.className.split(" ");
for(e=d.length-1;
0<=e;
e--){d[e]===c&&d.splice(e,1)
}a.className=d.join(" ")
}};
t.A=t.e("video");
t.L=navigator.userAgent;
t.Yc=/iPhone/i.test(t.L);
t.Xc=/iPad/i.test(t.L);
t.Zc=/iPod/i.test(t.L);
t.Wc=t.Yc||t.Xc||t.Zc;
var aa=t,x;
var y=t.L.match(/OS (\d+)_/i);
x=y&&y[1]?y[1]:b;
aa.ke=x;
t.Uc=/Android/i.test(t.L);
var ba=t,z;
var A=t.L.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;
A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:k):z=k;
ba.Tb=z;
t.$c=t.Uc&&/webkit/i.test(t.L)&&2.3>t.Tb;
t.Vc=/Firefox/i.test(t.L);
t.le=/Chrome/i.test(t.L);
t.dc=!!("ontouchstart" in window||window.Tc&&document instanceof window.Tc);
t.Hc=function(a,c){t.h.Y(c,function(c,e){e===k||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)
})
};
t.za=function(a){var c,d,e,g;
c={};
if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;
for(var h=d.length-1;
0<=h;
h--){e=d[h].name;
g=d[h].value;
if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+",")){g=g!==k?f:l
}c[e]=g
}}return c
};
t.re=function(a,c){var d="";
document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");
return d
};
t.Gb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)
};
t.Oa={};
t.v=function(a){0===a.indexOf("#")&&(a=a.slice(1));
return document.getElementById(a)
};
t.ya=function(a,c){c=c||a;
var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),j=Math.floor(c/3600);
if(isNaN(a)||Infinity===a){g=e=d="-"
}g=0<g||0<j?g+":":"";
return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)
};
t.gd=function(){document.body.focus();
document.onselectstart=r(l)
};
t.ge=function(){document.onselectstart=r(f)
};
t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")
};
t.round=function(a,c){c||(c=0);
return Math.round(a*Math.pow(10,c))/Math.pow(10,c)
};
t.zb=function(a,c){return{length:1,start:function(){return a
},end:function(){return c
}}
};
t.get=function(a,c,d,e){var g,h,j,n;
d=d||m();
"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")
}catch(d){}throw Error("This browser does not support XMLHttpRequest.")
});
h=new XMLHttpRequest;
j=t.Td(a);
n=window.location;
j.protocol+j.host!==n.protocol+n.host&&window.XDomainRequest&&!("withCredentials" in h)?(h=new window.XDomainRequest,h.onload=function(){c(h.responseText)
},h.onerror=d,h.onprogress=m(),h.ontimeout=d):(g="file:"==j.protocol||"file:"==n.protocol,h.onreadystatechange=function(){4===h.readyState&&(200===h.status||g&&0===h.status?c(h.responseText):d(h.responseText))
});
try{h.open("GET",a,f),e&&(h.withCredentials=f)
}catch(q){d(q);
return
}try{h.send()
}catch(w){d(w)
}};
t.Xd=function(a){try{var c=window.localStorage||l;
c&&(c.volume=a)
}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)
}};
t.rc=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);
return a
};
t.Td=function(a){var c,d,e,g;
g="protocol hostname port pathname search hash host".split(" ");
d=t.e("a",{href:a});
if(e=""===d.host&&"file:"!==d.protocol){c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c)
}a={};
for(var h=0;
h<g.length;
h++){a[g[h]]=d[g[h]]
}e&&document.body.removeChild(c);
return a
};
function D(a,c){var d,e;
d=Array.prototype.slice.call(c);
e=m();
e=window.console||{log:e,warn:e,error:e};
a?d.unshift(a.toUpperCase()+":"):a="log";
t.log.history.push(d);
d.unshift("VIDEOJS:");
if(e[a].apply){e[a].apply(e,d)
}else{e[a](d.join(" "))
}}t.log=function(){D(k,arguments)
};
t.log.history=[];
t.log.error=function(){D("error",arguments)
};
t.log.warn=function(){D("warn",arguments)
};
t.ud=function(a){var c,d;
a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());
if(!c){return{left:0,top:0}
}a=document.documentElement;
d=document.body;
return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}
};
t.hc={};
t.hc.forEach=function(a,c,d){if(t.h.isArray(a)&&c instanceof Function){for(var e=0,g=a.length;
e<g;
++e){c.call(d||t,a[e],e,a)
}}return a
};
t.ga={};
t.ga.Va=function(a,c){var d,e,g;
a=t.h.copy(a);
for(d in c){c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.h.Ta(e)&&t.h.Ta(g)?t.ga.Va(e,g):c[d])
}return a
};
t.a=t.qa.extend({i:function(a,c,d){this.c=a;
this.k=t.h.copy(this.k);
c=this.options(c);
this.T=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+t.w++);
this.Gd=c.name||k;
this.b=c.el||this.e();
this.M=[];
this.Pa={};
this.Qa={};
this.uc();
this.I(d);
if(c.Gc!==l){var e,g;
e=t.bind(this.j(),this.j().reportUserActivity);
this.d("touchstart",function(){e();
clearInterval(g);
g=setInterval(e,250)
});
a=function(){e();
clearInterval(g)
};
this.d("touchmove",e);
this.d("touchend",a);
this.d("touchcancel",a)
}}});
s=t.a.prototype;
s.dispose=function(){this.l({type:"dispose",bubbles:l});
if(this.M){for(var a=this.M.length-1;
0<=a;
a--){this.M[a].dispose&&this.M[a].dispose()
}}this.Qa=this.Pa=this.M=k;
this.o();
this.b.parentNode&&this.b.parentNode.removeChild(this.b);
t.Fc(this.b);
this.b=k
};
s.c=f;
s.j=p("c");
s.options=function(a){return a===b?this.k:this.k=t.ga.Va(this.k,a)
};
s.e=function(a,c){return t.e(a,c)
};
s.s=function(a){var c=this.c.language(),d=this.c.languages();
return d&&d[c]&&d[c][a]?d[c][a]:a
};
s.v=p("b");
s.ja=function(){return this.u||this.b
};
s.id=p("T");
s.name=p("Gd");
s.children=p("M");
s.wd=function(a){return this.Pa[a]
};
s.ka=function(a){return this.Qa[a]
};
s.Q=function(a,c){var d,e;
"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.aa(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;
this.M.push(d);
"function"===typeof d.id&&(this.Pa[d.id()]=d);
(e=e||d.name&&d.name())&&(this.Qa[e]=d);
"function"===typeof d.el&&d.el()&&this.ja().appendChild(d.el());
return d
};
s.removeChild=function(a){"string"===typeof a&&(a=this.ka(a));
if(a&&this.M){for(var c=l,d=this.M.length-1;
0<=d;
d--){if(this.M[d]===a){c=f;
this.M.splice(d,1);
break
}}c&&(this.Pa[a.id]=k,this.Qa[a.name]=k,(c=a.v())&&c.parentNode===this.ja()&&this.ja().removeChild(a.v()))
}};
s.uc=function(){var a,c,d,e;
a=this;
if(c=this.options().children){if(t.h.isArray(c)){for(var g=0;
g<c.length;
g++){d=c[g],"string"==typeof d?(e=d,d={}):e=d.name,a[e]=a.Q(e,d)
}}else{t.h.Y(c,function(c,d){d!==l&&(a[c]=a.Q(c,d))
})
}}};
s.S=r("");
s.d=function(a,c){t.d(this.b,a,t.bind(this,c));
return this
};
s.o=function(a,c){t.o(this.b,a,c);
return this
};
s.W=function(a,c){t.W(this.b,a,t.bind(this,c));
return this
};
s.l=function(a){t.l(this.b,a);
return this
};
s.I=function(a){a&&(this.la?a.call(this):(this.ab===b&&(this.ab=[]),this.ab.push(a)));
return this
};
s.Fa=function(){this.la=f;
var a=this.ab;
if(a&&0<a.length){for(var c=0,d=a.length;
c<d;
c++){a[c].call(this)
}this.ab=[];
this.l("ready")
}};
s.n=function(a){t.n(this.b,a);
return this
};
s.p=function(a){t.p(this.b,a);
return this
};
s.show=function(){this.b.style.display="block";
return this
};
s.V=function(){this.b.style.display="none";
return this
};
function E(a){a.p("vjs-lock-showing")
}s.disable=function(){this.V();
this.show=m()
};
s.width=function(a,c){return F(this,"width",a,c)
};
s.height=function(a,c){return F(this,"height",a,c)
};
s.pd=function(a,c){return this.width(a,f).height(c)
};
function F(a,c,d,e){if(d!==b){if(d===k||t.Ad(d)){d=0
}a.b.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";
e||a.l("resize");
return a
}if(!a.b){return 0
}d=a.b.style[c];
e=d.indexOf("px");
return -1!==e?parseInt(d.slice(0,e),10):parseInt(a.b["offset"+t.aa(c)],10)
}function G(a){var c,d,e,g,h,j,n,q;
c=0;
d=k;
a.d("touchstart",function(a){1===a.touches.length&&(d=a.touches[0],c=(new Date).getTime(),g=f)
});
a.d("touchmove",function(a){1<a.touches.length?g=l:d&&(j=a.touches[0].pageX-d.pageX,n=a.touches[0].pageY-d.pageY,q=Math.sqrt(j*j+n*n),22<q&&(g=l))
});
h=function(){g=l
};
a.d("touchleave",h);
a.d("touchcancel",h);
a.d("touchend",function(a){d=k;
g===f&&(e=(new Date).getTime()-c,250>e&&(a.preventDefault(),this.l("tap")))
})
}t.t=t.a.extend({i:function(a,c){t.a.call(this,a,c);
G(this);
this.d("tap",this.r);
this.d("click",this.r);
this.d("focus",this.Ya);
this.d("blur",this.Xa)
}});
s=t.t.prototype;
s.e=function(a,c){var d;
c=t.h.z({className:this.S(),role:"button","aria-live":"polite",tabIndex:0},c);
d=t.a.prototype.e.call(this,a,c);
c.innerHTML||(this.u=t.e("div",{className:"vjs-control-content"}),this.xb=t.e("span",{className:"vjs-control-text",innerHTML:this.s(this.ta)||"Need Text"}),this.u.appendChild(this.xb),d.appendChild(this.u));
return d
};
s.S=function(){return"vjs-control "+t.a.prototype.S.call(this)
};
s.r=m();
s.Ya=function(){t.d(document,"keydown",t.bind(this,this.da))
};
s.da=function(a){if(32==a.which||13==a.which){a.preventDefault(),this.r()
}};
s.Xa=function(){t.o(document,"keydown",t.bind(this,this.da))
};
t.P=t.a.extend({i:function(a,c){t.a.call(this,a,c);
this.fd=this.ka(this.k.barName);
this.handle=this.ka(this.k.handleName);
this.d("mousedown",this.Za);
this.d("touchstart",this.Za);
this.d("focus",this.Ya);
this.d("blur",this.Xa);
this.d("click",this.r);
this.c.d("controlsvisible",t.bind(this,this.update));
a.d(this.Bc,t.bind(this,this.update));
this.R={};
this.R.move=t.bind(this,this.$a);
this.R.end=t.bind(this,this.Lb)
}});
s=t.P.prototype;
s.e=function(a,c){c=c||{};
c.className+=" vjs-slider";
c=t.h.z({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);
return t.a.prototype.e.call(this,a,c)
};
s.Za=function(a){a.preventDefault();
t.gd();
this.n("vjs-sliding");
t.d(document,"mousemove",this.R.move);
t.d(document,"mouseup",this.R.end);
t.d(document,"touchmove",this.R.move);
t.d(document,"touchend",this.R.end);
this.$a(a)
};
s.$a=m();
s.Lb=function(){t.ge();
this.p("vjs-sliding");
t.o(document,"mousemove",this.R.move,l);
t.o(document,"mouseup",this.R.end,l);
t.o(document,"touchmove",this.R.move,l);
t.o(document,"touchend",this.R.end,l);
this.update()
};
s.update=function(){if(this.b){var a,c=this.Fb(),d=this.handle,e=this.fd;
isNaN(c)&&(c=0);
a=c;
if(d){a=this.b.offsetWidth;
var g=d.v().offsetWidth;
a=g?g/a:0;
c*=1-a;
a=c+a/2;
d.v().style.left=t.round(100*c,2)+"%"
}e&&(e.v().style.width=t.round(100*a,2)+"%")
}};
function H(a,c){var d,e,g,h;
d=a.b;
e=t.ud(d);
h=g=d.offsetWidth;
d=a.handle;
if(a.options().vertical){return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.v().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g))
}g=e.left;
e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;
d&&(d=d.v().offsetWidth,g+=d/2,h-=d);
return Math.max(0,Math.min(1,(e-g)/h))
}s.Ya=function(){t.d(document,"keyup",t.bind(this,this.da))
};
s.da=function(a){if(37==a.which||40==a.which){a.preventDefault(),this.Kc()
}else{if(38==a.which||39==a.which){a.preventDefault(),this.Lc()
}}};
s.Xa=function(){t.o(document,"keyup",t.bind(this,this.da))
};
s.r=function(a){a.stopImmediatePropagation();
a.preventDefault()
};
t.Z=t.a.extend();
t.Z.prototype.defaultValue=0;
t.Z.prototype.e=function(a,c){c=c||{};
c.className+=" vjs-slider-handle";
c=t.h.z({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);
return t.a.prototype.e.call(this,"div",c)
};
t.ha=t.a.extend();
function ca(a,c){a.Q(c);
c.d("click",t.bind(a,function(){E(this)
}))
}t.ha.prototype.e=function(){var a=this.options().kc||"ul";
this.u=t.e(a,{className:"vjs-menu-content"});
a=t.a.prototype.e.call(this,"div",{append:this.u,className:"vjs-menu"});
a.appendChild(this.u);
t.d(a,"click",function(a){a.preventDefault();
a.stopImmediatePropagation()
});
return a
};
t.H=t.t.extend({i:function(a,c){t.t.call(this,a,c);
this.selected(c.selected)
}});
t.H.prototype.e=function(a,c){return t.t.prototype.e.call(this,"li",t.h.z({className:"vjs-menu-item",innerHTML:this.k.label},c))
};
t.H.prototype.r=function(){this.selected(f)
};
t.H.prototype.selected=function(a){a?(this.n("vjs-selected"),this.b.setAttribute("aria-selected",f)):(this.p("vjs-selected"),this.b.setAttribute("aria-selected",l))
};
t.K=t.t.extend({i:function(a,c){t.t.call(this,a,c);
this.Aa=this.wa();
this.Q(this.Aa);
this.N&&0===this.N.length&&this.V();
this.d("keyup",this.da);
this.b.setAttribute("aria-haspopup",f);
this.b.setAttribute("role","button")
}});
s=t.K.prototype;
s.sa=l;
s.wa=function(){var a=new t.ha(this.c);
this.options().title&&a.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.aa(this.options().title),de:-1}));
if(this.N=this.createItems()){for(var c=0;
c<this.N.length;
c++){ca(a,this.N[c])
}}return a
};
s.va=m();
s.S=function(){return this.className+" vjs-menu-button "+t.t.prototype.S.call(this)
};
s.Ya=m();
s.Xa=m();
s.r=function(){this.W("mouseout",t.bind(this,function(){E(this.Aa);
this.b.blur()
}));
this.sa?I(this):J(this)
};
s.da=function(a){a.preventDefault();
32==a.which||13==a.which?this.sa?I(this):J(this):27==a.which&&this.sa&&I(this)
};
function J(a){a.sa=f;
a.Aa.n("vjs-lock-showing");
a.b.setAttribute("aria-pressed",f);
a.N&&0<a.N.length&&a.N[0].v().focus()
}function I(a){a.sa=l;
E(a.Aa);
a.b.setAttribute("aria-pressed",l)
}t.D=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.h.z(this,a);
this.message||(this.message=t.D.nd[this.code]||"")
};
t.D.prototype.code=0;
t.D.prototype.message="";
t.D.prototype.status=k;
t.D.Sa="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
t.D.nd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};
for(var K=0;
K<t.D.Sa.length;
K++){t.D[t.D.Sa[K]]=K,t.D.prototype[t.D.Sa[K]]=K
}var L,M,N,O;
L=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
M=L[0];
for(O=0;
O<L.length;
O++){if(L[O][1] in document){N=L[O];
break
}}if(N){t.Oa.Eb={};
for(O=0;
O<N.length;
O++){t.Oa.Eb[M[O]]=N[O]
}}t.Player=t.a.extend({i:function(a,c,d){this.O=a;
a.id=a.id||"vjs_video_"+t.w++;
this.ee=a&&t.za(a);
c=t.h.z(da(a),c);
this.Ua=c.language||t.options.language;
this.Ed=c.languages||t.options.languages;
this.F={};
this.Cc=c.poster;
this.yb=c.controls;
a.controls=l;
c.Gc=l;
t.a.call(this,this,c,d);
this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");
t.Ba[this.T]=this;
c.plugins&&t.h.Y(c.plugins,function(a,c){this[a](c)
},this);
var e,g,h,j,n,q;
e=t.bind(this,this.reportUserActivity);
this.d("mousedown",function(){e();
clearInterval(g);
g=setInterval(e,250)
});
this.d("mousemove",function(a){if(a.screenX!=n||a.screenY!=q){n=a.screenX,q=a.screenY,e()
}});
this.d("mouseup",function(){e();
clearInterval(g)
});
this.d("keydown",e);
this.d("keyup",e);
h=setInterval(t.bind(this,function(){if(this.pa){this.pa=l;
this.userActive(f);
clearTimeout(j);
var a=this.options().inactivityTimeout;
0<a&&(j=setTimeout(t.bind(this,function(){this.pa||this.userActive(l)
}),a))
}}),250);
this.d("dispose",function(){clearInterval(h);
clearTimeout(j)
})
}});
s=t.Player.prototype;
s.language=function(a){if(a===b){return this.Ua
}this.Ua=a;
return this
};
s.languages=p("Ed");
s.k=t.options;
s.dispose=function(){this.l("dispose");
this.o("dispose");
t.Ba[this.T]=k;
this.O&&this.O.player&&(this.O.player=k);
this.b&&this.b.player&&(this.b.player=k);
this.m&&this.m.dispose();
t.a.prototype.dispose.call(this)
};
function da(a){var c={sources:[],tracks:[]};
t.h.z(c,t.za(a));
if(a.hasChildNodes()){var d,e,g,h;
a=a.childNodes;
g=0;
for(h=a.length;
g<h;
g++){d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(t.za(d)):"track"===e&&c.tracks.push(t.za(d))
}}return c
}s.e=function(){var a=this.b=t.a.prototype.e.call(this,"div"),c=this.O,d;
c.removeAttribute("width");
c.removeAttribute("height");
if(c.hasChildNodes()){var e,g,h,j,n;
e=c.childNodes;
g=e.length;
for(n=[];
g--;
){h=e[g],j=h.nodeName.toLowerCase(),"track"===j&&n.push(h)
}for(e=0;
e<n.length;
e++){c.removeChild(n[e])
}}d=t.za(c);
t.h.Y(d,function(c){a.setAttribute(c,d[c])
});
c.id+="_html5_api";
c.className="vjs-tech";
c.player=a.player=this;
this.n("vjs-paused");
this.width(this.k.width,f);
this.height(this.k.height,f);
c.parentNode&&c.parentNode.insertBefore(a,c);
t.Gb(c,a);
this.b=a;
this.d("loadstart",this.Ld);
this.d("waiting",this.Rd);
this.d(["canplay","canplaythrough","playing","ended"],this.Qd);
this.d("seeking",this.Od);
this.d("seeked",this.Nd);
this.d("ended",this.Hd);
this.d("play",this.Nb);
this.d("firstplay",this.Jd);
this.d("pause",this.Mb);
this.d("progress",this.Md);
this.d("durationchange",this.zc);
this.d("fullscreenchange",this.Kd);
return a
};
function P(a,c,d){a.m&&(a.la=l,a.m.dispose(),a.m=l);
"Html5"!==c&&a.O&&(t.g.Bb(a.O),a.O=k);
a.eb=c;
a.la=l;
var e=t.h.z({source:d,parentEl:a.b},a.k[c.toLowerCase()]);
d&&(a.mc=d.type,d.src==a.F.src&&0<a.F.currentTime&&(e.startTime=a.F.currentTime),a.F.src=d.src);
a.m=new window.videojs[c](a,e);
a.m.I(function(){this.c.Fa()
})
}s.Ld=function(){this.error(k);
this.paused()?(Q(this,l),this.W("play",function(){Q(this,f)
})):this.l("firstplay")
};
s.tc=l;
function Q(a,c){c!==b&&a.tc!==c&&((a.tc=c)?(a.n("vjs-has-started"),a.l("firstplay")):a.p("vjs-has-started"))
}s.Nb=function(){this.p("vjs-paused");
this.n("vjs-playing")
};
s.Rd=function(){this.n("vjs-waiting")
};
s.Qd=function(){this.p("vjs-waiting")
};
s.Od=function(){this.n("vjs-seeking")
};
s.Nd=function(){this.p("vjs-seeking")
};
s.Jd=function(){this.k.starttime&&this.currentTime(this.k.starttime);
this.n("vjs-has-started")
};
s.Mb=function(){this.p("vjs-playing");
this.n("vjs-paused")
};
s.Md=function(){1==this.bufferedPercent()&&this.l("loadedalldata")
};
s.Hd=function(){this.k.loop&&(this.currentTime(0),this.play())
};
s.zc=function(){var a=R(this,"duration");
a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.n("vjs-live"):this.p("vjs-live"))
};
s.Kd=function(){this.isFullscreen()?this.n("vjs-fullscreen"):this.p("vjs-fullscreen")
};
function S(a,c,d){if(a.m&&!a.m.la){a.m.I(function(){this[c](d)
})
}else{try{a.m[c](d)
}catch(e){throw t.log(e),e
}}}function R(a,c){if(a.m&&a.m.la){try{return a.m[c]()
}catch(d){throw a.m[c]===b?t.log("Video.js: "+c+" method not defined for "+a.eb+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.eb+" playback technology element.",d),a.m.la=l):t.log(d),d
}}}s.play=function(){S(this,"play");
return this
};
s.pause=function(){S(this,"pause");
return this
};
s.paused=function(){return R(this,"paused")===l?l:f
};
s.currentTime=function(a){return a!==b?(S(this,"setCurrentTime",a),this):this.F.currentTime=R(this,"currentTime")||0
};
s.duration=function(a){if(a!==b){return this.F.duration=parseFloat(a),this
}this.F.duration===b&&this.zc();
return this.F.duration||0
};
s.remainingTime=function(){return this.duration()-this.currentTime()
};
s.buffered=function(){var a=R(this,"buffered");
if(!a||!a.length){a=t.zb(0,0)
}return a
};
s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;
if(!a){return 0
}for(var h=0;
h<c.length;
h++){e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e
}return d/a
};
s.volume=function(a){if(a!==b){return a=Math.max(0,Math.min(1,parseFloat(a))),this.F.volume=a,S(this,"setVolume",a),t.Xd(a),this
}a=parseFloat(R(this,"volume"));
return isNaN(a)?1:a
};
s.muted=function(a){return a!==b?(S(this,"setMuted",a),this):R(this,"muted")||l
};
s.Da=function(){return R(this,"supportsFullScreen")||l
};
s.vc=l;
s.isFullscreen=function(a){return a!==b?(this.vc=!!a,this):this.vc
};
s.requestFullscreen=function(){var a=t.Oa.Eb;
this.isFullscreen(f);
a?(t.d(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);
this.isFullscreen()===l&&t.o(document,a.fullscreenchange,arguments.callee);
this.l("fullscreenchange")
})),this.b[a.requestFullscreen]()):this.m.Da()?S(this,"enterFullScreen"):(this.oc(),this.l("fullscreenchange"));
return this
};
s.exitFullscreen=function(){var a=t.Oa.Eb;
this.isFullscreen(l);
if(a){document[a.exitFullscreen]()
}else{this.m.Da()?S(this,"exitFullScreen"):(this.Cb(),this.l("fullscreenchange"))
}return this
};
s.oc=function(){this.zd=f;
this.qd=document.documentElement.style.overflow;
t.d(document,"keydown",t.bind(this,this.qc));
document.documentElement.style.overflow="hidden";
t.n(document.body,"vjs-full-window");
this.l("enterFullWindow")
};
s.qc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Cb())
};
s.Cb=function(){this.zd=l;
t.o(document,"keydown",this.qc);
document.documentElement.style.overflow=this.qd;
t.p(document.body,"vjs-full-window");
this.l("exitFullWindow")
};
s.selectSource=function(a){for(var c=0,d=this.k.techOrder;
c<d.length;
c++){var e=t.aa(d[c]),g=window.videojs[e];
if(g){if(g.isSupported()){for(var h=0,j=a;
h<j.length;
h++){var n=j[h];
if(g.canPlaySource(n)){return{source:n,m:e}
}}}}else{t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')
}}return l
};
s.src=function(a){if(a===b){return R(this,"src")
}t.h.isArray(a)?T(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!window.videojs[this.eb].canPlaySource(a)?T(this,[a]):(this.F.src=a.src,this.mc=a.type||"",this.I(function(){S(this,"src",a.src);
"auto"==this.k.preload&&this.load();
this.k.autoplay&&this.play()
})));
return this
};
function T(a,c){var d=a.selectSource(c),e;
d?d.m===a.eb?a.src(d.source):P(a,d.m,d.source):(e=setTimeout(t.bind(a,function(){this.error({code:4,message:this.s(this.options().notSupportedMessage)})
}),0),a.Fa(),a.d("dispose",function(){clearTimeout(e)
}))
}s.load=function(){S(this,"load");
return this
};
s.currentSrc=function(){return R(this,"currentSrc")||this.F.src||""
};
s.Ra=function(){return this.mc||""
};
s.Ca=function(a){return a!==b?(S(this,"setPreload",a),this.k.preload=a,this):R(this,"preload")
};
s.autoplay=function(a){return a!==b?(S(this,"setAutoplay",a),this.k.autoplay=a,this):R(this,"autoplay")
};
s.loop=function(a){return a!==b?(S(this,"setLoop",a),this.k.loop=a,this):R(this,"loop")
};
s.poster=function(a){if(a===b){return this.Cc
}this.Cc=a;
S(this,"setPoster",a);
this.l("posterchange")
};
s.controls=function(a){return a!==b?(a=!!a,this.yb!==a&&((this.yb=a)?(this.p("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.l("controlsenabled")):(this.p("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.l("controlsdisabled"))),this):this.yb
};
t.Player.prototype.Sb;
s=t.Player.prototype;
s.usingNativeControls=function(a){return a!==b?(a=!!a,this.Sb!==a&&((this.Sb=a)?(this.n("vjs-using-native-controls"),this.l("usingnativecontrols")):(this.p("vjs-using-native-controls"),this.l("usingcustomcontrols"))),this):this.Sb
};
s.ca=k;
s.error=function(a){if(a===b){return this.ca
}if(a===k){return this.ca=a,this.p("vjs-error"),this
}this.ca=a instanceof t.D?a:new t.D(a);
this.l("error");
this.n("vjs-error");
t.log.error("(CODE:"+this.ca.code+" "+t.D.Sa[this.ca.code]+")",this.ca.message,this.ca);
return this
};
s.ended=function(){return R(this,"ended")
};
s.seeking=function(){return R(this,"seeking")
};
s.pa=f;
s.reportUserActivity=function(){this.pa=f
};
s.Rb=f;
s.userActive=function(a){return a!==b?(a=!!a,a!==this.Rb&&((this.Rb=a)?(this.pa=f,this.p("vjs-user-inactive"),this.n("vjs-user-active"),this.l("useractive")):(this.pa=l,this.m&&this.m.W("mousemove",function(a){a.stopPropagation();
a.preventDefault()
}),this.p("vjs-user-active"),this.n("vjs-user-inactive"),this.l("userinactive"))),this):this.Rb
};
s.playbackRate=function(a){return a!==b?(S(this,"setPlaybackRate",a),this):this.m&&this.m.featuresPlaybackRate?R(this,"playbackRate"):1
};
t.Ia=t.a.extend();
t.Ia.prototype.k={se:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{}}};
t.Ia.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})
};
t.Xb=t.a.extend({i:function(a,c){t.a.call(this,a,c)
}});
t.Xb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});
this.u=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.s("Stream Type")+"</span>"+this.s("LIVE"),"aria-live":"off"});
a.appendChild(this.u);
return a
};
t.$b=t.t.extend({i:function(a,c){t.t.call(this,a,c);
a.d("play",t.bind(this,this.Nb));
a.d("pause",t.bind(this,this.Mb))
}});
s=t.$b.prototype;
s.ta="Play";
s.S=function(){return"vjs-play-control "+t.t.prototype.S.call(this)
};
s.r=function(){this.c.paused()?this.c.play():this.c.pause()
};
s.Nb=function(){t.p(this.b,"vjs-paused");
t.n(this.b,"vjs-playing");
this.b.children[0].children[0].innerHTML=this.s("Pause")
};
s.Mb=function(){t.p(this.b,"vjs-playing");
t.n(this.b,"vjs-paused");
this.b.children[0].children[0].innerHTML=this.s("Play")
};
t.hb=t.a.extend({i:function(a,c){t.a.call(this,a,c);
a.d("timeupdate",t.bind(this,this.fa))
}});
t.hb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});
this.u=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});
a.appendChild(this.u);
return a
};
t.hb.prototype.fa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();
this.u.innerHTML='<span class="vjs-control-text">'+this.s("Current Time")+"</span> "+t.ya(a,this.c.duration())
};
t.ib=t.a.extend({i:function(a,c){t.a.call(this,a,c);
a.d("timeupdate",t.bind(this,this.fa))
}});
t.ib.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});
this.u=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.s("Duration Time")+"</span> 0:00","aria-live":"off"});
a.appendChild(this.u);
return a
};
t.ib.prototype.fa=function(){var a=this.c.duration();
a&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Duration Time")+"</span> "+t.ya(a))
};
t.fc=t.a.extend({i:function(a,c){t.a.call(this,a,c)
}});
t.fc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})
};
t.pb=t.a.extend({i:function(a,c){t.a.call(this,a,c);
a.d("timeupdate",t.bind(this,this.fa))
}});
t.pb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});
this.u=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -0:00","aria-live":"off"});
a.appendChild(this.u);
return a
};
t.pb.prototype.fa=function(){this.c.duration()&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -"+t.ya(this.c.remainingTime()))
};
t.Ja=t.t.extend({i:function(a,c){t.t.call(this,a,c)
}});
t.Ja.prototype.ta="Fullscreen";
t.Ja.prototype.S=function(){return"vjs-fullscreen-control "+t.t.prototype.S.call(this)
};
t.Ja.prototype.r=function(){this.c.isFullscreen()?(this.c.exitFullscreen(),this.xb.innerHTML=this.s("Fullscreen")):(this.c.requestFullscreen(),this.xb.innerHTML=this.s("Non-Fullscreen"))
};
t.ob=t.a.extend({i:function(a,c){t.a.call(this,a,c)
}});
t.ob.prototype.k={children:{seekBar:{}}};
t.ob.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})
};
t.bc=t.P.extend({i:function(a,c){t.P.call(this,a,c);
a.d("timeupdate",t.bind(this,this.oa));
a.I(t.bind(this,this.oa))
}});
s=t.bc.prototype;
s.k={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};
s.Bc="timeupdate";
s.e=function(){return t.P.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})
};
s.oa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();
this.b.setAttribute("aria-valuenow",t.round(100*this.Fb(),2));
this.b.setAttribute("aria-valuetext",t.ya(a,this.c.duration()))
};
s.Fb=function(){return this.c.currentTime()/this.c.duration()
};
s.Za=function(a){t.P.prototype.Za.call(this,a);
this.c.bb=f;
this.ie=!this.c.paused();
this.c.pause()
};
s.$a=function(a){a=H(this,a)*this.c.duration();
a==this.c.duration()&&(a-=0.1);
this.c.currentTime(a)
};
s.Lb=function(a){t.P.prototype.Lb.call(this,a);
this.c.bb=l;
this.ie&&this.c.play()
};
s.Lc=function(){this.c.currentTime(this.c.currentTime()+5)
};
s.Kc=function(){this.c.currentTime(this.c.currentTime()-5)
};
t.lb=t.a.extend({i:function(a,c){t.a.call(this,a,c);
a.d("progress",t.bind(this,this.update))
}});
t.lb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Loaded")+"</span>: 0%</span>"})
};
t.lb.prototype.update=function(){var a,c,d,e,g=this.c.buffered();
a=this.c.duration();
var h,j=this.c;
h=j.buffered();
j=j.duration();
h=h.end(h.length-1);
h>j&&(h=j);
j=this.b.children;
this.b.style.width=100*(h/a||0)+"%";
for(a=0;
a<g.length;
a++){c=g.start(a),d=g.end(a),(e=j[a])||(e=this.b.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%"
}for(a=j.length;
a>g.length;
a--){this.b.removeChild(j[a-1])
}};
t.Zb=t.a.extend({i:function(a,c){t.a.call(this,a,c)
}});
t.Zb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Progress")+"</span>: 0%</span>"})
};
t.La=t.Z.extend({i:function(a,c){t.Z.call(this,a,c);
a.d("timeupdate",t.bind(this,this.fa))
}});
t.La.prototype.defaultValue="00:00";
t.La.prototype.e=function(){return t.Z.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})
};
t.La.prototype.fa=function(){var a=this.c.bb?this.c.F.currentTime:this.c.currentTime();
this.b.innerHTML='<span class="vjs-control-text">'+t.ya(a,this.c.duration())+"</span>"
};
t.rb=t.a.extend({i:function(a,c){t.a.call(this,a,c);
a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");
a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")
}))
}});
t.rb.prototype.k={children:{volumeBar:{}}};
t.rb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})
};
t.qb=t.P.extend({i:function(a,c){t.P.call(this,a,c);
a.d("volumechange",t.bind(this,this.oa));
a.I(t.bind(this,this.oa))
}});
s=t.qb.prototype;
s.oa=function(){this.b.setAttribute("aria-valuenow",t.round(100*this.c.volume(),2));
this.b.setAttribute("aria-valuetext",t.round(100*this.c.volume(),2)+"%")
};
s.k={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
s.Bc="volumechange";
s.e=function(){return t.P.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})
};
s.$a=function(a){this.c.muted()&&this.c.muted(l);
this.c.volume(H(this,a))
};
s.Fb=function(){return this.c.muted()?0:this.c.volume()
};
s.Lc=function(){this.c.volume(this.c.volume()+0.1)
};
s.Kc=function(){this.c.volume(this.c.volume()-0.1)
};
t.gc=t.a.extend({i:function(a,c){t.a.call(this,a,c)
}});
t.gc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})
};
t.sb=t.Z.extend();
t.sb.prototype.defaultValue="00:00";
t.sb.prototype.e=function(){return t.Z.prototype.e.call(this,"div",{className:"vjs-volume-handle"})
};
t.ia=t.t.extend({i:function(a,c){t.t.call(this,a,c);
a.d("volumechange",t.bind(this,this.update));
a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");
a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")
}))
}});
t.ia.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})
};
t.ia.prototype.r=function(){this.c.muted(this.c.muted()?l:f)
};
t.ia.prototype.update=function(){var a=this.c.volume(),c=3;
0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);
this.c.muted()?this.b.children[0].children[0].innerHTML!=this.s("Unmute")&&(this.b.children[0].children[0].innerHTML=this.s("Unmute")):this.b.children[0].children[0].innerHTML!=this.s("Mute")&&(this.b.children[0].children[0].innerHTML=this.s("Mute"));
for(a=0;
4>a;
a++){t.p(this.b,"vjs-vol-"+a)
}t.n(this.b,"vjs-vol-"+c)
};
t.ra=t.K.extend({i:function(a,c){t.K.call(this,a,c);
a.d("volumechange",t.bind(this,this.update));
a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");
a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")
}));
this.n("vjs-menu-button")
}});
t.ra.prototype.wa=function(){var a=new t.ha(this.c,{kc:"div"}),c=new t.qb(this.c,t.h.z({vertical:f},this.k.we));
a.Q(c);
return a
};
t.ra.prototype.r=function(){t.ia.prototype.r.call(this);
t.K.prototype.r.call(this)
};
t.ra.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})
};
t.ra.prototype.update=t.ia.prototype.update;
t.ac=t.K.extend({i:function(a,c){t.K.call(this,a,c);
this.Qc();
this.Pc();
a.d("loadstart",t.bind(this,this.Qc));
a.d("ratechange",t.bind(this,this.Pc))
}});
s=t.ac.prototype;
s.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-playback-rate vjs-menu-button vjs-control",innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+this.s("Playback Rate")+"</span></div>"});
this.xc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});
a.appendChild(this.xc);
return a
};
s.wa=function(){var a=new t.ha(this.j()),c=this.j().options().playbackRates;
if(c){for(var d=c.length-1;
0<=d;
d--){a.Q(new t.nb(this.j(),{rate:c[d]+"x"}))
}}return a
};
s.oa=function(){this.v().setAttribute("aria-valuenow",this.j().playbackRate())
};
s.r=function(){for(var a=this.j().playbackRate(),c=this.j().options().playbackRates,d=c[0],e=0;
e<c.length;
e++){if(c[e]>a){d=c[e];
break
}}this.j().playbackRate(d)
};
function U(a){return a.j().m&&a.j().m.featuresPlaybackRate&&a.j().options().playbackRates&&0<a.j().options().playbackRates.length
}s.Qc=function(){U(this)?this.p("vjs-hidden"):this.n("vjs-hidden")
};
s.Pc=function(){U(this)&&(this.xc.innerHTML=this.j().playbackRate()+"x")
};
t.nb=t.H.extend({kc:"button",i:function(a,c){var d=this.label=c.rate,e=this.Ec=parseFloat(d,10);
c.label=d;
c.selected=1===e;
t.H.call(this,a,c);
this.j().d("ratechange",t.bind(this,this.update))
}});
t.nb.prototype.r=function(){t.H.prototype.r.call(this);
this.j().playbackRate(this.Ec)
};
t.nb.prototype.update=function(){this.selected(this.j().playbackRate()==this.Ec)
};
t.Ka=t.t.extend({i:function(a,c){t.t.call(this,a,c);
a.poster()&&this.src(a.poster());
(!a.poster()||!a.controls())&&this.V();
a.d("posterchange",t.bind(this,function(){this.src(a.poster())
}));
a.d("play",t.bind(this,this.V))
}});
var ea="backgroundSize" in t.A.style;
t.Ka.prototype.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});
ea||a.appendChild(t.e("img"));
return a
};
t.Ka.prototype.src=function(a){var c=this.v();
a!==b&&(ea?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)
};
t.Ka.prototype.r=function(){this.j().controls()&&this.c.play()
};
t.Yb=t.a.extend({i:function(a,c){t.a.call(this,a,c)
}});
t.Yb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})
};
t.fb=t.t.extend();
t.fb.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})
};
t.fb.prototype.r=function(){this.c.play()
};
t.jb=t.a.extend({i:function(a,c){t.a.call(this,a,c);
this.update();
a.d("error",t.bind(this,this.update))
}});
t.jb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});
this.u=t.e("div");
a.appendChild(this.u);
return a
};
t.jb.prototype.update=function(){this.j().error()&&(this.u.innerHTML=this.s(this.j().error().message))
};
t.q=t.a.extend({i:function(a,c,d){c=c||{};
c.Gc=l;
t.a.call(this,a,c,d);
this.featuresProgressEvents||(this.yc=f,this.Dc=setInterval(t.bind(this,function(){var a=this.j().bufferedPercent();
this.hd!=a&&this.j().l("progress");
this.hd=a;
1===a&&clearInterval(this.Dc)
}),500));
this.featuresTimeupdateEvents||(this.Kb=f,this.j().d("play",t.bind(this,this.Oc)),this.j().d("pause",t.bind(this,this.cb)),this.W("timeupdate",function(){this.featuresTimeupdateEvents=f;
fa(this)
}));
var e,g;
g=this;
e=this.j();
a=function(){if(e.controls()&&!e.usingNativeControls()){var a;
g.d("mousedown",g.r);
g.d("touchstart",function(){a=this.c.userActive()
});
g.d("touchmove",function(){a&&this.j().reportUserActivity()
});
g.d("touchend",function(a){a.preventDefault()
});
G(g);
g.d("tap",g.Pd)
}};
c=t.bind(g,g.Vd);
this.I(a);
e.d("controlsenabled",a);
e.d("controlsdisabled",c);
this.I(function(){this.networkState&&0<this.networkState()&&this.j().l("loadstart")
})
}});
s=t.q.prototype;
s.Vd=function(){this.o("tap");
this.o("touchstart");
this.o("touchmove");
this.o("touchleave");
this.o("touchcancel");
this.o("touchend");
this.o("click");
this.o("mousedown")
};
s.r=function(a){0===a.button&&this.j().controls()&&(this.j().paused()?this.j().play():this.j().pause())
};
s.Pd=function(){this.j().userActive(!this.j().userActive())
};
function fa(a){a.Kb=l;
a.cb();
a.o("play",a.Oc);
a.o("pause",a.cb)
}s.Oc=function(){this.lc&&this.cb();
this.lc=setInterval(t.bind(this,function(){this.j().l("timeupdate")
}),250)
};
s.cb=function(){clearInterval(this.lc);
this.j().l("timeupdate")
};
s.dispose=function(){this.yc&&(this.yc=l,clearInterval(this.Dc));
this.Kb&&fa(this);
t.a.prototype.dispose.call(this)
};
s.Pb=function(){this.Kb&&this.j().l("timeupdate")
};
s.Ic=m();
t.q.prototype.featuresVolumeControl=f;
t.q.prototype.featuresFullscreenResize=l;
t.q.prototype.featuresPlaybackRate=l;
t.q.prototype.featuresProgressEvents=l;
t.q.prototype.featuresTimeupdateEvents=l;
t.media={};
t.g=t.q.extend({i:function(a,c,d){this.featuresVolumeControl=t.g.kd();
this.featuresPlaybackRate=t.g.jd();
this.movingMediaElementInDOM=!t.Wc;
this.featuresProgressEvents=this.featuresFullscreenResize=f;
t.q.call(this,a,c,d);
for(d=t.g.kb.length-1;
0<=d;
d--){t.d(this.b,t.g.kb[d],t.bind(this,this.sd))
}if((c=c.source)&&this.b.currentSrc!==c.src){this.b.src=c.src
}if(t.dc&&a.options().nativeControlsForTouch!==l){var e,g,h,j;
e=this;
g=this.j();
c=g.controls();
e.b.controls=!!c;
h=function(){e.b.controls=f
};
j=function(){e.b.controls=l
};
g.d("controlsenabled",h);
g.d("controlsdisabled",j);
c=function(){g.o("controlsenabled",h);
g.o("controlsdisabled",j)
};
e.d("dispose",c);
g.d("usingcustomcontrols",c);
g.usingNativeControls(f)
}a.I(function(){this.O&&(this.k.autoplay&&this.paused())&&(delete this.O.poster,this.play())
});
this.Fa()
}});
s=t.g.prototype;
s.dispose=function(){t.g.Bb(this.b);
t.q.prototype.dispose.call(this)
};
s.e=function(){var a=this.c,c=a.O,d;
if(!c||this.movingMediaElementInDOM===l){c?(d=c.cloneNode(l),t.g.Bb(c),c=d,a.O=k):(c=t.e("video"),t.Hc(c,t.h.z(a.ee||{},{id:a.id()+"_html5_api","class":"vjs-tech"}))),c.player=a,t.Gb(c,a.v())
}d=["autoplay","preload","loop","muted"];
for(var e=d.length-1;
0<=e;
e--){var g=d[e],h={};
"undefined"!==typeof a.k[g]&&(h[g]=a.k[g]);
t.Hc(c,h)
}return c
};
s.sd=function(a){"error"==a.type&&this.error()?this.j().error(this.error().code):(a.bubbles=l,this.j().l(a))
};
s.play=function(){this.b.play()
};
s.pause=function(){this.b.pause()
};
s.paused=function(){return this.b.paused
};
s.currentTime=function(){return this.b.currentTime
};
s.Pb=function(a){try{this.b.currentTime=a
}catch(c){t.log(c,"Video is not ready. (Video.js)")
}};
s.duration=function(){return this.b.duration||0
};
s.buffered=function(){return this.b.buffered
};
s.volume=function(){return this.b.volume
};
s.be=function(a){this.b.volume=a
};
s.muted=function(){return this.b.muted
};
s.Zd=function(a){this.b.muted=a
};
s.width=function(){return this.b.offsetWidth
};
s.height=function(){return this.b.offsetHeight
};
s.Da=function(){return"function"==typeof this.b.webkitEnterFullScreen&&(/Android/.test(t.L)||!/Chrome|Mac OS X 10.5/.test(t.L))?f:l
};
s.nc=function(){var a=this.b;
a.paused&&a.networkState<=a.je?(this.b.play(),setTimeout(function(){a.pause();
a.webkitEnterFullScreen()
},0)):a.webkitEnterFullScreen()
};
s.td=function(){this.b.webkitExitFullScreen()
};
s.src=function(a){if(a===b){return this.b.src
}this.b.src=a
};
s.load=function(){this.b.load()
};
s.currentSrc=function(){return this.b.currentSrc
};
s.poster=function(){return this.b.poster
};
s.Ic=function(a){this.b.poster=a
};
s.Ca=function(){return this.b.Ca
};
s.ae=function(a){this.b.Ca=a
};
s.autoplay=function(){return this.b.autoplay
};
s.Wd=function(a){this.b.autoplay=a
};
s.controls=function(){return this.b.controls
};
s.loop=function(){return this.b.loop
};
s.Yd=function(a){this.b.loop=a
};
s.error=function(){return this.b.error
};
s.seeking=function(){return this.b.seeking
};
s.ended=function(){return this.b.ended
};
s.playbackRate=function(){return this.b.playbackRate
};
s.$d=function(a){this.b.playbackRate=a
};
s.networkState=function(){return this.b.networkState
};
t.g.isSupported=function(){try{t.A.volume=0.5
}catch(a){return l
}return !!t.A.canPlayType
};
t.g.vb=function(a){try{return !!t.A.canPlayType(a.type)
}catch(c){return""
}};
t.g.kd=function(){var a=t.A.volume;
t.A.volume=a/2+0.1;
return a!==t.A.volume
};
t.g.jd=function(){var a=t.A.playbackRate;
t.A.playbackRate=a/2+0.1;
return a!==t.A.playbackRate
};
var V,ga=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,ha=/^video\/mp4/i;
t.g.Ac=function(){4<=t.Tb&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ga.test(a)?"maybe":V.call(this,a)
});
t.$c&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ha.test(a)?"maybe":V.call(this,a)
})
};
t.g.he=function(){var a=t.A.constructor.prototype.canPlayType;
t.A.constructor.prototype.canPlayType=V;
V=k;
return a
};
t.g.Ac();
t.g.kb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
t.g.Bb=function(a){if(a){a.player=k;
for(a.parentNode&&a.parentNode.removeChild(a);
a.hasChildNodes();
){a.removeChild(a.firstChild)
}a.removeAttribute("src");
if("function"===typeof a.load){try{a.load()
}catch(c){}}}};
t.f=t.q.extend({i:function(a,c,d){t.q.call(this,a,c,d);
var e=c.source;
d=c.parentEl;
var g=this.b=t.e("div",{id:a.id()+"_temp_flash"}),h=a.id()+"_flash_api",j=a.k,j=t.h.z({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:j.autoplay,preload:j.Ca,loop:j.loop,muted:j.muted},c.flashVars),n=t.h.z({wmode:"opaque",bgcolor:"#000000"},c.params),h=t.h.z({id:h,name:h,"class":"vjs-tech"},c.attributes);
e&&(e.type&&t.f.Cd(e.type)?(e=t.f.Mc(e.src),j.rtmpConnection=encodeURIComponent(e.wb),j.rtmpStream=encodeURIComponent(e.Qb)):j.src=encodeURIComponent(t.rc(e.src)));
t.Gb(g,d);
c.startTime&&this.I(function(){this.load();
this.play();
this.currentTime(c.startTime)
});
t.Vc&&this.I(function(){t.d(this.v(),"mousemove",t.bind(this,function(){this.j().l({type:"mousemove",bubbles:l})
}))
});
a.d("stageclick",a.reportUserActivity);
this.b=t.f.rd(c.swf,g,j,n,h)
}});
t.f.prototype.dispose=function(){t.q.prototype.dispose.call(this)
};
t.f.prototype.play=function(){this.b.vjs_play()
};
t.f.prototype.pause=function(){this.b.vjs_pause()
};
t.f.prototype.src=function(a){if(a===b){return this.currentSrc()
}t.f.Bd(a)?(a=t.f.Mc(a),this.te(a.wb),this.ue(a.Qb)):(a=t.rc(a),this.b.vjs_src(a));
if(this.c.autoplay()){var c=this;
setTimeout(function(){c.play()
},0)
}};
t.f.prototype.setCurrentTime=function(a){this.Fd=a;
this.b.vjs_setProperty("currentTime",a);
t.q.prototype.Pb.call(this)
};
t.f.prototype.currentTime=function(){return this.seeking()?this.Fd||0:this.b.vjs_getProperty("currentTime")
};
t.f.prototype.currentSrc=function(){var a=this.b.vjs_getProperty("currentSrc");
if(a==k){var c=this.rtmpConnection(),d=this.rtmpStream();
c&&d&&(a=t.f.ce(c,d))
}return a
};
t.f.prototype.load=function(){this.b.vjs_load()
};
t.f.prototype.poster=function(){this.b.vjs_getProperty("poster")
};
t.f.prototype.setPoster=m();
t.f.prototype.buffered=function(){return t.zb(0,this.b.vjs_getProperty("buffered"))
};
t.f.prototype.Da=r(l);
t.f.prototype.nc=r(l);
function ia(){var a=W[X],c=a.charAt(0).toUpperCase()+a.slice(1);
ja["set"+c]=function(c){return this.b.vjs_setProperty(a,c)
}
}function ka(a){ja[a]=function(){return this.b.vjs_getProperty(a)
}
}var ja=t.f.prototype,W="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),la="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),X;
for(X=0;
X<W.length;
X++){ka(W[X]),ia()
}for(X=0;
X<la.length;
X++){ka(la[X])
}t.f.isSupported=function(){return 10<=t.f.version()[0]
};
t.f.vb=function(a){if(!a.type){return""
}a=a.type.replace(/;.*/,"").toLowerCase();
if(a in t.f.vd||a in t.f.Nc){return"maybe"
}};
t.f.vd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};
t.f.Nc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};
t.f.onReady=function(a){var c;
if(c=(a=t.v(a))&&a.parentNode&&a.parentNode.player){a.player=c,t.f.checkReady(c.m)
}};
t.f.checkReady=function(a){a.v()&&(a.v().vjs_getProperty?a.Fa():setTimeout(function(){t.f.checkReady(a)
},50))
};
t.f.onEvent=function(a,c){t.v(a).player.l(c)
};
t.f.onError=function(a,c){var d=t.v(a).player,e="FLASH: "+c;
"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)
};
t.f.version=function(){var a="0,0,0";
try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]
}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])
}catch(d){}}return a.split(",")
};
t.f.rd=function(a,c,d,e,g){a=t.f.xd(a,d,e,g);
a=t.e("div",{innerHTML:a}).childNodes[0];
d=c.parentNode;
c.parentNode.replaceChild(a,c);
var h=d.childNodes[0];
setTimeout(function(){h.style.display="block"
},1000);
return a
};
t.f.xd=function(a,c,d,e){var g="",h="",j="";
c&&t.h.Y(c,function(a,c){g+=a+"="+c+"&amp;"
});
d=t.h.z({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);
t.h.Y(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'
});
e=t.h.z({data:a,width:"100%",height:"100%"},e);
t.h.Y(e,function(a,c){j+=a+'="'+c+'" '
});
return'<object type="application/x-shockwave-flash"'+j+">"+h+"</object>"
};
t.f.ce=function(a,c){return a+"&"+c
};
t.f.Mc=function(a){var c={wb:"",Qb:""};
if(!a){return c
}var d=a.indexOf("&"),e;
-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));
c.wb=a.substring(0,d);
c.Qb=a.substring(e,a.length);
return c
};
t.f.Cd=function(a){return a in t.f.Nc
};
t.f.bd=/^rtmp[set]?:\/\//i;
t.f.Bd=function(a){return t.f.bd.test(a)
};
t.ad=t.a.extend({i:function(a,c,d){t.a.call(this,a,c,d);
if(!a.k.sources||0===a.k.sources.length){c=0;
for(d=a.k.techOrder;
c<d.length;
c++){var e=t.aa(d[c]),g=window.videojs[e];
if(g&&g.isSupported()){P(a,e);
break
}}}else{a.src(a.k.sources)
}}});
t.Player.prototype.textTracks=function(){return this.Ea=this.Ea||[]
};
function ma(a,c,d,e,g){var h=a.Ea=a.Ea||[];
g=g||{};
g.kind=c;
g.label=d;
g.language=e;
c=t.aa(c||"subtitles");
var j=new window.videojs[c+"Track"](a,g);
h.push(j);
j.Ab()&&a.I(function(){setTimeout(function(){Y(j.j(),j.id())
},0)
})
}function Y(a,c,d){for(var e=a.Ea,g=0,h=e.length,j,n;
g<h;
g++){j=e[g],j.id()===c?(j.show(),n=j):d&&(j.J()==d&&0<j.mode())&&j.disable()
}(c=n?n.J():d?d:l)&&a.l(c+"trackchange")
}t.B=t.a.extend({i:function(a,c){t.a.call(this,a,c);
this.T=c.id||"vjs_"+c.kind+"_"+c.language+"_"+t.w++;
this.Jc=c.src;
this.od=c["default"]||c.dflt;
this.fe=c.title;
this.Ua=c.srclang;
this.Dd=c.label;
this.ba=[];
this.tb=[];
this.ma=this.na=0;
this.c.d("fullscreenchange",t.bind(this,this.ed))
}});
s=t.B.prototype;
s.J=p("G");
s.src=p("Jc");
s.Ab=p("od");
s.title=p("fe");
s.language=p("Ua");
s.label=p("Dd");
s.ld=p("ba");
s.cd=p("tb");
s.readyState=p("na");
s.mode=p("ma");
s.ed=function(){this.b.style.fontSize=this.c.isFullscreen()?140*(screen.width/this.c.width())+"%":""
};
s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-"+this.G+" vjs-text-track"})
};
s.show=function(){na(this);
this.ma=2;
t.a.prototype.show.call(this)
};
s.V=function(){na(this);
this.ma=1;
t.a.prototype.V.call(this)
};
s.disable=function(){2==this.ma&&this.V();
this.c.o("timeupdate",t.bind(this,this.update,this.T));
this.c.o("ended",t.bind(this,this.reset,this.T));
this.reset();
this.c.ka("textTrackDisplay").removeChild(this);
this.ma=0
};
function na(a){0===a.na&&a.load();
0===a.ma&&(a.c.d("timeupdate",t.bind(a,a.update,a.T)),a.c.d("ended",t.bind(a,a.reset,a.T)),("captions"===a.G||"subtitles"===a.G)&&a.c.ka("textTrackDisplay").Q(a))
}s.load=function(){0===this.na&&(this.na=1,t.get(this.Jc,t.bind(this,this.Sd),t.bind(this,this.Id)))
};
s.Id=function(a){this.error=a;
this.na=3;
this.l("error")
};
s.Sd=function(a){var c,d;
a=a.split("\n");
for(var e="",g=1,h=a.length;
g<h;
g++){if(e=t.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=t.trim(a[++g])):c=this.ba.length;
c={id:c,index:this.ba.length};
d=e.split(/[\t ]+/);
c.startTime=oa(d[0]);
c.xa=oa(d[2]);
for(d=[];
a[++g]&&(e=t.trim(a[g]));
){d.push(e)
}c.text=d.join("<br/>");
this.ba.push(c)
}}this.na=2;
this.l("loaded")
};
function oa(a){var c=a.split(":");
a=0;
var d,e,g;
3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);
c=c.split(/\s+/);
c=c.splice(0,1)[0];
c=c.split(/\.|,/);
g=parseFloat(c[1]);
c=c[0];
a+=3600*parseFloat(d);
a+=60*parseFloat(e);
a+=parseFloat(c);
g&&(a+=g/1000);
return a
}s.update=function(){if(0<this.ba.length){var a=this.c.options().trackTimeOffset||0,a=this.c.currentTime()+a;
if(this.Ob===b||a<this.Ob||this.Wa<=a){var c=this.ba,d=this.c.duration(),e=0,g=l,h=[],j,n,q,w;
a>=this.Wa||this.Wa===b?w=this.Db!==b?this.Db:0:(g=f,w=this.Jb!==b?this.Jb:c.length-1);
for(;
;
){q=c[w];
if(q.xa<=a){e=Math.max(e,q.xa),q.Na&&(q.Na=l)
}else{if(a<q.startTime){if(d=Math.min(d,q.startTime),q.Na&&(q.Na=l),!g){break
}}else{g?(h.splice(0,0,q),n===b&&(n=w),j=w):(h.push(q),j===b&&(j=w),n=w),d=Math.min(d,q.xa),e=Math.max(e,q.startTime),q.Na=f
}}if(g){if(0===w){break
}else{w--
}}else{if(w===c.length-1){break
}else{w++
}}}this.tb=h;
this.Wa=d;
this.Ob=e;
this.Db=j;
this.Jb=n;
j=this.tb;
n="";
a=0;
for(c=j.length;
a<c;
a++){n+='<span class="vjs-tt-cue">'+j[a].text+"</span>"
}this.b.innerHTML=n;
this.l("cuechange")
}}};
s.reset=function(){this.Wa=0;
this.Ob=this.c.duration();
this.Jb=this.Db=0
};
t.Vb=t.B.extend();
t.Vb.prototype.G="captions";
t.cc=t.B.extend();
t.cc.prototype.G="subtitles";
t.Wb=t.B.extend();
t.Wb.prototype.G="chapters";
t.ec=t.a.extend({i:function(a,c,d){t.a.call(this,a,c,d);
if(a.k.tracks&&0<a.k.tracks.length){c=this.c;
a=a.k.tracks;
for(var e=0;
e<a.length;
e++){d=a[e],ma(c,d.kind,d.label,d.language,d)
}}}});
t.ec.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})
};
t.$=t.H.extend({i:function(a,c){var d=this.ea=c.track;
c.label=d.label();
c.selected=d.Ab();
t.H.call(this,a,c);
this.c.d(d.J()+"trackchange",t.bind(this,this.update))
}});
t.$.prototype.r=function(){t.H.prototype.r.call(this);
Y(this.c,this.ea.T,this.ea.J())
};
t.$.prototype.update=function(){this.selected(2==this.ea.mode())
};
t.mb=t.$.extend({i:function(a,c){c.track={J:function(){return c.kind
},j:a,label:function(){return c.kind+" off"
},Ab:r(l),mode:r(l)};
t.$.call(this,a,c);
this.selected(f)
}});
t.mb.prototype.r=function(){t.$.prototype.r.call(this);
Y(this.c,this.ea.T,this.ea.J())
};
t.mb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;
c<d;
c++){e=a[c],e.J()==this.ea.J()&&2==e.mode()&&(g=l)
}this.selected(g)
};
t.U=t.K.extend({i:function(a,c){t.K.call(this,a,c);
1>=this.N.length&&this.V()
}});
t.U.prototype.va=function(){var a=[],c;
a.push(new t.mb(this.c,{kind:this.G}));
for(var d=0;
d<this.c.textTracks().length;
d++){c=this.c.textTracks()[d],c.J()===this.G&&a.push(new t.$(this.c,{track:c}))
}return a
};
t.Ga=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);
this.b.setAttribute("aria-label","Captions Menu")
}});
t.Ga.prototype.G="captions";
t.Ga.prototype.ta="Captions";
t.Ga.prototype.className="vjs-captions-button";
t.Ma=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);
this.b.setAttribute("aria-label","Subtitles Menu")
}});
t.Ma.prototype.G="subtitles";
t.Ma.prototype.ta="Subtitles";
t.Ma.prototype.className="vjs-subtitles-button";
t.Ha=t.U.extend({i:function(a,c,d){t.U.call(this,a,c,d);
this.b.setAttribute("aria-label","Chapters Menu")
}});
s=t.Ha.prototype;
s.G="chapters";
s.ta="Chapters";
s.className="vjs-chapters-button";
s.va=function(){for(var a=[],c,d=0;
d<this.c.textTracks().length;
d++){c=this.c.textTracks()[d],c.J()===this.G&&a.push(new t.$(this.c,{track:c}))
}return a
};
s.wa=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,h=this.N=[];
c<d;
c++){if(e=a[c],e.J()==this.G){if(0===e.readyState()){e.load(),e.d("loaded",t.bind(this,this.wa))
}else{g=e;
break
}}}a=this.Aa;
a===b&&(a=new t.ha(this.c),a.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.aa(this.G),de:-1})));
if(g){e=g.ba;
for(var j,c=0,d=e.length;
c<d;
c++){j=e[c],j=new t.gb(this.c,{track:g,cue:j}),h.push(j),a.Q(j)
}this.Q(a)
}0<this.N.length&&this.show();
return a
};
t.gb=t.H.extend({i:function(a,c){var d=this.ea=c.track,e=this.cue=c.cue,g=a.currentTime();
c.label=e.text;
c.selected=e.startTime<=g&&g<e.xa;
t.H.call(this,a,c);
d.d("cuechange",t.bind(this,this.update))
}});
t.gb.prototype.r=function(){t.H.prototype.r.call(this);
this.c.currentTime(this.cue.startTime);
this.update(this.cue.startTime)
};
t.gb.prototype.update=function(){var a=this.cue,c=this.c.currentTime();
this.selected(a.startTime<=c&&c<a.xa)
};
t.h.z(t.Ia.prototype.k.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse){t.JSON=window.JSON
}else{t.JSON={};
var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
t.JSON.parse=function(a,c){function d(a,e){var j,n,q=a[e];
if(q&&"object"===typeof q){for(j in q){Object.prototype.hasOwnProperty.call(q,j)&&(n=d(q,j),n!==b?q[j]=n:delete q[j])
}}return c.call(a,e,q)
}var e;
a=String(a);
Z.lastIndex=0;
Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e
}throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
}
}t.ic=function(){var a,c,d=document.getElementsByTagName("video");
if(d&&0<d.length){for(var e=0,g=d.length;
e<g;
e++){if((c=d[e])&&c.getAttribute){c.player===b&&(a=c.getAttribute("data-setup"),a!==k&&(a=t.JSON.parse(a||"{}"),videojs(c,a)))
}else{t.ub();
break
}}}else{t.Rc||t.ub()
}};
t.ub=function(){setTimeout(t.ic,1)
};
"complete"===document.readyState?t.Rc=f:t.W(window,"load",function(){t.Rc=f
});
t.ub();
t.Ud=function(a,c){t.Player.prototype[a]=c
};
var pa=this;
function $(a,c){var d=a.split("."),e=pa;
!(d[0] in e)&&e.execScript&&e.execScript("var "+d[0]);
for(var g;
d.length&&(g=d.shift());
){!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}
}}$("videojs",t);
$("_V_",t);
$("videojs.options",t.options);
$("videojs.players",t.Ba);
$("videojs.TOUCH_ENABLED",t.dc);
$("videojs.cache",t.ua);
$("videojs.Component",t.a);
t.a.prototype.player=t.a.prototype.j;
t.a.prototype.options=t.a.prototype.options;
t.a.prototype.init=t.a.prototype.i;
t.a.prototype.dispose=t.a.prototype.dispose;
t.a.prototype.createEl=t.a.prototype.e;
t.a.prototype.contentEl=t.a.prototype.ja;
t.a.prototype.el=t.a.prototype.v;
t.a.prototype.addChild=t.a.prototype.Q;
t.a.prototype.getChild=t.a.prototype.ka;
t.a.prototype.getChildById=t.a.prototype.wd;
t.a.prototype.children=t.a.prototype.children;
t.a.prototype.initChildren=t.a.prototype.uc;
t.a.prototype.removeChild=t.a.prototype.removeChild;
t.a.prototype.on=t.a.prototype.d;
t.a.prototype.off=t.a.prototype.o;
t.a.prototype.one=t.a.prototype.W;
t.a.prototype.trigger=t.a.prototype.l;
t.a.prototype.triggerReady=t.a.prototype.Fa;
t.a.prototype.show=t.a.prototype.show;
t.a.prototype.hide=t.a.prototype.V;
t.a.prototype.width=t.a.prototype.width;
t.a.prototype.height=t.a.prototype.height;
t.a.prototype.dimensions=t.a.prototype.pd;
t.a.prototype.ready=t.a.prototype.I;
t.a.prototype.addClass=t.a.prototype.n;
t.a.prototype.removeClass=t.a.prototype.p;
t.a.prototype.buildCSSClass=t.a.prototype.S;
t.a.prototype.localize=t.a.prototype.s;
t.Player.prototype.ended=t.Player.prototype.ended;
t.Player.prototype.enterFullWindow=t.Player.prototype.oc;
t.Player.prototype.exitFullWindow=t.Player.prototype.Cb;
t.Player.prototype.preload=t.Player.prototype.Ca;
t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;
t.Player.prototype.supportsFullScreen=t.Player.prototype.Da;
t.Player.prototype.currentType=t.Player.prototype.Ra;
t.Player.prototype.requestFullScreen=t.Player.prototype.Ra;
t.Player.prototype.cancelFullScreen=t.Player.prototype.Ra;
t.Player.prototype.isFullScreen=t.Player.prototype.Ra;
$("videojs.MediaLoader",t.ad);
$("videojs.TextTrackDisplay",t.ec);
$("videojs.ControlBar",t.Ia);
$("videojs.Button",t.t);
$("videojs.PlayToggle",t.$b);
$("videojs.FullscreenToggle",t.Ja);
$("videojs.BigPlayButton",t.fb);
$("videojs.LoadingSpinner",t.Yb);
$("videojs.CurrentTimeDisplay",t.hb);
$("videojs.DurationDisplay",t.ib);
$("videojs.TimeDivider",t.fc);
$("videojs.RemainingTimeDisplay",t.pb);
$("videojs.LiveDisplay",t.Xb);
$("videojs.ErrorDisplay",t.jb);
$("videojs.Slider",t.P);
$("videojs.ProgressControl",t.ob);
$("videojs.SeekBar",t.bc);
$("videojs.LoadProgressBar",t.lb);
$("videojs.PlayProgressBar",t.Zb);
$("videojs.SeekHandle",t.La);
$("videojs.VolumeControl",t.rb);
$("videojs.VolumeBar",t.qb);
$("videojs.VolumeLevel",t.gc);
$("videojs.VolumeMenuButton",t.ra);
$("videojs.VolumeHandle",t.sb);
$("videojs.MuteToggle",t.ia);
$("videojs.PosterImage",t.Ka);
$("videojs.Menu",t.ha);
$("videojs.MenuItem",t.H);
$("videojs.MenuButton",t.K);
$("videojs.PlaybackRateMenuButton",t.ac);
t.K.prototype.createItems=t.K.prototype.va;
t.U.prototype.createItems=t.U.prototype.va;
t.Ha.prototype.createItems=t.Ha.prototype.va;
$("videojs.SubtitlesButton",t.Ma);
$("videojs.CaptionsButton",t.Ga);
$("videojs.ChaptersButton",t.Ha);
$("videojs.MediaTechController",t.q);
t.q.prototype.featuresVolumeControl=t.q.prototype.qe;
t.q.prototype.featuresFullscreenResize=t.q.prototype.me;
t.q.prototype.featuresPlaybackRate=t.q.prototype.ne;
t.q.prototype.featuresProgressEvents=t.q.prototype.oe;
t.q.prototype.featuresTimeupdateEvents=t.q.prototype.pe;
t.q.prototype.setPoster=t.q.prototype.Ic;
$("videojs.Html5",t.g);
t.g.Events=t.g.kb;
t.g.isSupported=t.g.isSupported;
t.g.canPlaySource=t.g.vb;
t.g.patchCanPlayType=t.g.Ac;
t.g.unpatchCanPlayType=t.g.he;
t.g.prototype.setCurrentTime=t.g.prototype.Pb;
t.g.prototype.setVolume=t.g.prototype.be;
t.g.prototype.setMuted=t.g.prototype.Zd;
t.g.prototype.setPreload=t.g.prototype.ae;
t.g.prototype.setAutoplay=t.g.prototype.Wd;
t.g.prototype.setLoop=t.g.prototype.Yd;
t.g.prototype.enterFullScreen=t.g.prototype.nc;
t.g.prototype.exitFullScreen=t.g.prototype.td;
t.g.prototype.playbackRate=t.g.prototype.playbackRate;
t.g.prototype.setPlaybackRate=t.g.prototype.$d;
$("videojs.Flash",t.f);
t.f.isSupported=t.f.isSupported;
t.f.canPlaySource=t.f.vb;
t.f.onReady=t.f.onReady;
$("videojs.TextTrack",t.B);
t.B.prototype.label=t.B.prototype.label;
t.B.prototype.kind=t.B.prototype.J;
t.B.prototype.mode=t.B.prototype.mode;
t.B.prototype.cues=t.B.prototype.ld;
t.B.prototype.activeCues=t.B.prototype.cd;
$("videojs.CaptionsTrack",t.Vb);
$("videojs.SubtitlesTrack",t.cc);
$("videojs.ChaptersTrack",t.Wb);
$("videojs.autoSetup",t.ic);
$("videojs.plugin",t.Ud);
$("videojs.createTimeRange",t.zb);
$("videojs.util",t.ga);
t.ga.mergeOptions=t.ga.Va;
t.addLanguage=t.dd
})();
(function(b,a){a.mbr={autoSwitch:true,currentIndex:0,bandwidth:-1};
var c=function(l){var k=this,j=(l&&l.autoSwitch!==undefined)?l.autoSwitch:a.mbr.autoSwitch,i=(l&&l.bandwidthOverride!==undefined)?l.bandwidthOverride:a.mbr.bandwidth,g=(l&&l.currentIndex!==undefined)?l.currentIndex:a.mbr.currentIndex,d,h,f=function(m){if(m){}else{return i
}},e=function(){var m=k.hls.master.playlists.slice();
return m[g]
};
k.controlBar.mbrMenuButton=new a.MbrMenuButton(k);
k.controlBar.addChild(k.controlBar.mbrMenuButton);
k.mbr.autoSwitch=function(m){if(m!==undefined){j=m;
if(j){k.hls.selectPlaylist=d
}else{k.hls.selectPlaylist=e
}}else{return j
}};
k.mbr.bandwidthOverride=function(m){if(m){i=m;
if(k.hls&&k.hls.sourceBuffer){if(m===-1){k.hls.bandwidth=h
}else{k.hls.bandwidth=f
}}}else{return i
}};
k.mbr.currentIndex=function(m){if(m!==undefined){console.log("setting current index:",m);
if(g!==m){g=m;
k.hls.validate(k.hls.selectPlaylist())
}}else{return g
}}
};
a.plugin("mbr",function(){var d=function(){return function(){this.mbr=d();
c.apply(this,arguments)
}
};
d().apply(this,arguments)
})
})(window,window.videojs);
videojs.MbrMenuButton=videojs.MenuButton.extend({init:function(b,a){videojs.MenuButton.call(this,b,a);
this.createEl();
this.updateVisibility();
b.on("ready",videojs.bind(this,this.onPlayerReady))
}});
videojs.MbrMenuButton.prototype.createEl=function(){var a=videojs.Component.prototype.createEl.call(this,"div",{className:"vjs-mbr-control vjs-menu-button vjs-control",innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">Playback Rate</span></div>'});
return a
};
videojs.MbrMenuButton.prototype.updateVisibility=function(){if(this.mbrSupported()){this.show()
}else{this.hide()
}};
videojs.MbrMenuButton.prototype.mbrSupported=function(){return this.player().hls&&this.player().hls.playlists&&this.player().hls.playlists.master&&this.player().hls.playlists.master.playlists&&this.player().hls.playlists.master.playlists.length>1
};
videojs.MbrMenuButton.prototype.onPlayerReady=function(){var a=this;
var b=a.player();
if(b.hls){if(b.hls.playlists.state==="HAVE_NOTHING"){b.hls.playlists.on("loadedmetadata",function(){var d=[];
if(b.hls.playlists.master.playlists.length>1){var c=0;
while(c<b.hls.playlists.master.playlists.length){d.push(b.hls.playlists.master.playlists[c]);
c++
}}else{d.push(b.hls.playlists.master.playlists[0])
}b.options()["renditions"]=d;
console.log(b.options()["renditions"]);
b.trigger("renditionsloaded")
})
}}};
videojs.MbrMenuButton.prototype.createMenu=function(){var c=new vjs.Menu(this.player());
var b=this.player().options()["renditions"];
if(b){for(var a=b.length-1;
a>=0;
a--){c.addChild(new videojs.MbrMenuItem(this.player(),b[a]))
}}return c
};
videojs.MbrMenuItem=videojs.MenuItem.extend({contentElType:"button",init:function(d,c){console.log("initiate a menu item for renditions");
console.log("-",c);
var b=this.bandwidth=parseFloat(c.bandwidth);
var a=this.label=this.bandwidth/1000+"k";
d.on("renditionchange",videojs.bind(this,this.update))
}});
(function(a){if(typeof a.fn.each2=="undefined"){a.extend(a.fn,{each2:function(f){var d=a([0]),e=-1,b=this.length;
while(++e<b&&(d.context=d[0]=this[e])&&f.call(d[0],e,d)!==false){}return this
}})
}})(jQuery);
(function(E,m){if(window.Select2!==m){return
}var P,y,c,a,q,o={x:0,y:0},w,x,M={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(Q){Q=Q.which?Q.which:Q;
switch(Q){case M.LEFT:case M.RIGHT:case M.UP:case M.DOWN:return true
}return false
},isControl:function(R){var Q=R.which;
switch(Q){case M.SHIFT:case M.CTRL:case M.ALT:return true
}if(R.metaKey){return true
}return false
},isFunctionKey:function(Q){Q=Q.which?Q.which:Q;
return Q>=112&&Q<=123
}},C="<div class='select2-measure-scrollbar'></div>",d={"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038A":"\u0399","\u03AA":"\u0399","\u038C":"\u039F","\u038E":"\u03A5","\u03AB":"\u03A5","\u038F":"\u03A9","\u03AC":"\u03B1","\u03AD":"\u03B5","\u03AE":"\u03B7","\u03AF":"\u03B9","\u03CA":"\u03B9","\u0390":"\u03B9","\u03CC":"\u03BF","\u03CD":"\u03C5","\u03CB":"\u03C5","\u03B0":"\u03C5","\u03C9":"\u03C9","\u03C2":"\u03C3"};
w=E(document);
a=(function(){var Q=1;
return function(){return Q++
}
}());
function p(Q){var R=E(document.createTextNode(""));
Q.before(R);
R.before(Q);
R.remove()
}function e(R){function Q(S){return d[S]||S
}return R.replace(/[^\u0000-\u007E]/g,Q)
}function r(S,T){var R=0,Q=T.length;
for(;
R<Q;
R=R+1){if(u(S,T[R])){return R
}}return -1
}function O(){var Q=E(C);
Q.appendTo(document.body);
var R={width:Q.width()-Q[0].clientWidth,height:Q.height()-Q[0].clientHeight};
Q.remove();
return R
}function u(R,Q){if(R===Q){return true
}if(R===m||Q===m){return false
}if(R===null||Q===null){return false
}if(R.constructor===String){return R+""===Q+""
}if(Q.constructor===String){return Q+""===R+""
}return false
}function i(S,U,R){var V,T,Q;
if(S===null||S.length<1){return[]
}V=S.split(U);
for(T=0,Q=V.length;
T<Q;
T=T+1){V[T]=R(V[T])
}return V
}function h(Q){return Q.outerWidth(false)-Q.width()
}function H(R){var Q="keyup-change-value";
R.on("keydown",function(){if(E.data(R,Q)===m){E.data(R,Q,R.val())
}});
R.on("keyup",function(){var S=E.data(R,Q);
if(S!==m&&R.val()!==S){E.removeData(R,Q);
R.trigger("keyup-change")
}})
}function L(Q){Q.on("mousemove",function(S){var R=o;
if(R===m||R.x!==S.pageX||R.y!==S.pageY){E(S.target).trigger("mousemove-filtered",S)
}})
}function k(T,R,Q){Q=Q||m;
var S;
return function(){var U=arguments;
window.clearTimeout(S);
S=window.setTimeout(function(){R.apply(Q,U)
},T)
}
}function l(Q,S){var R=k(Q,function(T){S.trigger("scroll-debounced",T)
});
S.on("scroll",function(T){if(r(T.target,S.get())>=0){R(T)
}})
}function K(Q){if(Q[0]===document.activeElement){return
}window.setTimeout(function(){var T=Q[0],U=Q.val().length,S;
Q.focus();
var R=(T.offsetWidth>0||T.offsetHeight>0);
if(R&&T===document.activeElement){if(T.setSelectionRange){T.setSelectionRange(U,U)
}else{if(T.createTextRange){S=T.createTextRange();
S.collapse(false);
S.select()
}}}},0)
}function f(Q){Q=E(Q)[0];
var T=0;
var R=0;
if("selectionStart" in Q){T=Q.selectionStart;
R=Q.selectionEnd-T
}else{if("selection" in document){Q.focus();
var S=document.selection.createRange();
R=document.selection.createRange().text.length;
S.moveStart("character",-Q.value.length);
T=S.text.length-R
}}return{offset:T,length:R}
}function B(Q){Q.preventDefault();
Q.stopPropagation()
}function b(Q){Q.preventDefault();
Q.stopImmediatePropagation()
}function n(R){if(!q){var Q=R[0].currentStyle||window.getComputedStyle(R[0],null);
q=E(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:Q.fontSize,fontFamily:Q.fontFamily,fontStyle:Q.fontStyle,fontWeight:Q.fontWeight,letterSpacing:Q.letterSpacing,textTransform:Q.textTransform,whiteSpace:"nowrap"});
q.attr("class","select2-sizer");
E(document.body).append(q)
}q.text(R.val());
return q.width()
}function j(R,V,Q){var T,U=[],S;
T=E.trim(R.attr("class"));
if(T){T=""+T;
E(T.split(/\s+/)).each2(function(){if(this.indexOf("select2-")===0){U.push(this)
}})
}T=E.trim(V.attr("class"));
if(T){T=""+T;
E(T.split(/\s+/)).each2(function(){if(this.indexOf("select2-")!==0){S=Q(this);
if(S){U.push(S)
}}})
}R.attr("class",U.join(" "))
}function v(V,U,S,Q){var T=e(V.toUpperCase()).indexOf(e(U.toUpperCase())),R=U.length;
if(T<0){S.push(Q(V));
return
}S.push(Q(V.substring(0,T)));
S.push("<span class='select2-match'>");
S.push(Q(V.substring(T,T+R)));
S.push("</span>");
S.push(Q(V.substring(T+R,V.length)))
}function I(Q){var R={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};
return String(Q).replace(/[&<>"'\/\\]/g,function(S){return R[S]
})
}function F(R){var U,S=null,V=R.quietMillis||100,T=R.url,Q=this;
return function(W){window.clearTimeout(U);
U=window.setTimeout(function(){var Z=R.data,Y=T,ab=R.transport||E.fn.select2.ajaxDefaults.transport,X={type:R.type||"GET",cache:R.cache||false,jsonpCallback:R.jsonpCallback||m,dataType:R.dataType||"json"},aa=E.extend({},E.fn.select2.ajaxDefaults.params,X);
Z=Z?Z.call(Q,W.term,W.page,W.context):null;
Y=(typeof Y==="function")?Y.call(Q,W.term,W.page,W.context):Y;
if(S&&typeof S.abort==="function"){S.abort()
}if(R.params){if(E.isFunction(R.params)){E.extend(aa,R.params.call(Q))
}else{E.extend(aa,R.params)
}}E.extend(aa,{url:Y,dataType:R.dataType,data:Z,success:function(ad){var ac=R.results(ad,W.page,W);
W.callback(ac)
},error:function(ad,af,ae){var ac={hasError:true,jqXHR:ad,textStatus:af,errorThrown:ae};
W.callback(ac)
}});
S=ab.call(Q,aa)
},V)
}
}function J(R){var U=R,T,S,V=function(W){return""+W.text
};
if(E.isArray(U)){S=U;
U={results:S}
}if(E.isFunction(U)===false){S=U;
U=function(){return S
}
}var Q=U();
if(Q.text){V=Q.text;
if(!E.isFunction(V)){T=Q.text;
V=function(W){return W[T]
}
}}return function(Y){var X=Y.term,W={results:[]},Z;
if(X===""){Y.callback(U());
return
}Z=function(ab,ad){var ac,aa;
ab=ab[0];
if(ab.children){ac={};
for(aa in ab){if(ab.hasOwnProperty(aa)){ac[aa]=ab[aa]
}}ac.children=[];
E(ab.children).each2(function(ae,af){Z(af,ac.children)
});
if(ac.children.length||Y.matcher(X,V(ac),ab)){ad.push(ac)
}}else{if(Y.matcher(X,V(ab),ab)){ad.push(ab)
}}};
E(U().results).each2(function(ab,aa){Z(aa,W.results)
});
Y.callback(W)
}
}function A(R){var Q=E.isFunction(R);
return function(V){var U=V.term,T={results:[]};
var S=Q?R(V):R;
if(E.isArray(S)){E(S).each(function(){var W=this.text!==m,X=W?this.text:this;
if(U===""||V.matcher(U,X)){T.results.push(W?this:{id:this,text:this})
}});
V.callback(T)
}}
}function z(Q,R){if(E.isFunction(Q)){return true
}if(!Q){return false
}if(typeof(Q)==="string"){return true
}throw new Error(R+" must be a string, function, or falsy value")
}function D(S,R){if(E.isFunction(S)){var Q=Array.prototype.slice.call(arguments,2);
return S.apply(R,Q)
}return S
}function s(Q){var R=0;
E.each(Q,function(S,T){if(T.children){R+=s(T.children)
}else{R++
}});
return R
}function g(Y,Z,W,Q){var R=Y,aa=false,T,X,U,S,V;
if(!Q.createSearchChoice||!Q.tokenSeparators||Q.tokenSeparators.length<1){return m
}while(true){X=-1;
for(U=0,S=Q.tokenSeparators.length;
U<S;
U++){V=Q.tokenSeparators[U];
X=Y.indexOf(V);
if(X>=0){break
}}if(X<0){break
}T=Y.substring(0,X);
Y=Y.substring(X+V.length);
if(T.length>0){T=Q.createSearchChoice.call(this,T,Z);
if(T!==m&&T!==null&&Q.id(T)!==m&&Q.id(T)!==null){aa=false;
for(U=0,S=Z.length;
U<S;
U++){if(u(Q.id(T),Q.id(Z[U]))){aa=true;
break
}}if(!aa){W(T)
}}}}if(R!==Y){return Y
}}function G(){var Q=this;
E.each(arguments,function(S,R){Q[R].remove();
Q[R]=null
})
}function N(Q,R){var S=function(){};
S.prototype=new Q;
S.prototype.constructor=S;
S.prototype.parent=Q.prototype;
S.prototype=E.extend(S.prototype,R);
return S
}P=N(Object,{bind:function(R){var Q=this;
return function(){R.apply(Q,arguments)
}
},init:function(U){var S,R,V=".select2-results";
this.opts=U=this.prepareOpts(U);
this.id=U.id;
if(U.element.data("select2")!==m&&U.element.data("select2")!==null){U.element.data("select2").destroy()
}this.container=this.createContainer();
this.liveRegion=E(".select2-hidden-accessible");
if(this.liveRegion.length==0){this.liveRegion=E("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body)
}this.containerId="s2id_"+(U.element.attr("id")||"autogen"+a());
this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");
this.container.attr("id",this.containerId);
this.container.attr("title",U.element.attr("title"));
this.body=E(document.body);
j(this.container,this.opts.element,this.opts.adaptContainerCssClass);
this.container.attr("style",U.element.attr("style"));
this.container.css(D(U.containerCss,this.opts.element));
this.container.addClass(D(U.containerCssClass,this.opts.element));
this.elementTabIndex=this.opts.element.attr("tabindex");
this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",B);
this.container.data("select2",this);
this.dropdown=this.container.find(".select2-drop");
j(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);
this.dropdown.addClass(D(U.dropdownCssClass,this.opts.element));
this.dropdown.data("select2",this);
this.dropdown.on("click",B);
this.results=S=this.container.find(V);
this.search=R=this.container.find("input.select2-input");
this.queryCount=0;
this.resultsPage=0;
this.context=null;
this.initContainer();
this.container.on("click",B);
L(this.results);
this.dropdown.on("mousemove-filtered",V,this.bind(this.highlightUnderEvent));
this.dropdown.on("touchstart touchmove touchend",V,this.bind(function(W){this._touchEvent=true;
this.highlightUnderEvent(W)
}));
this.dropdown.on("touchmove",V,this.bind(this.touchMoved));
this.dropdown.on("touchstart touchend",V,this.bind(this.clearTouchMoved));
this.dropdown.on("click",this.bind(function(W){if(this._touchEvent){this._touchEvent=false;
this.selectHighlighted()
}}));
l(80,this.results);
this.dropdown.on("scroll-debounced",V,this.bind(this.loadMoreIfNeeded));
E(this.container).on("change",".select2-input",function(W){W.stopPropagation()
});
E(this.dropdown).on("change",".select2-input",function(W){W.stopPropagation()
});
if(E.fn.mousewheel){S.mousewheel(function(Z,aa,X,W){var Y=S.scrollTop();
if(W>0&&Y-W<=0){S.scrollTop(0);
B(Z)
}else{if(W<0&&S.get(0).scrollHeight-S.scrollTop()+W<=S.height()){S.scrollTop(S.get(0).scrollHeight-S.height());
B(Z)
}}})
}H(R);
R.on("keyup-change input paste",this.bind(this.updateResults));
R.on("focus",function(){R.addClass("select2-focused")
});
R.on("blur",function(){R.removeClass("select2-focused")
});
this.dropdown.on("mouseup",V,this.bind(function(W){if(E(W.target).closest(".select2-result-selectable").length>0){this.highlightUnderEvent(W);
this.selectHighlighted(W)
}}));
this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(W){W.stopPropagation()
});
this.lastSearchTerm=m;
if(E.isFunction(this.opts.initSelection)){this.initSelection();
this.monitorSource()
}if(U.maximumInputLength!==null){this.search.attr("maxlength",U.maximumInputLength)
}var T=U.element.prop("disabled");
if(T===m){T=false
}this.enable(!T);
var Q=U.element.prop("readonly");
if(Q===m){Q=false
}this.readonly(Q);
x=x||O();
this.autofocus=U.element.prop("autofocus");
U.element.prop("autofocus",false);
if(this.autofocus){this.focus()
}this.search.attr("placeholder",U.searchInputPlaceholder)
},destroy:function(){var S=this.opts.element,R=S.data("select2"),Q=this;
this.close();
if(S.length&&S[0].detachEvent&&Q._sync){S.each(function(){if(Q._sync){this.detachEvent("onpropertychange",Q._sync)
}})
}if(this.propertyObserver){this.propertyObserver.disconnect();
this.propertyObserver=null
}this._sync=null;
if(R!==m){R.container.remove();
R.liveRegion.remove();
R.dropdown.remove();
S.removeData("select2").off(".select2");
if(!S.is("input[type='hidden']")){S.show().prop("autofocus",this.autofocus||false);
if(this.elementTabIndex){S.attr({tabindex:this.elementTabIndex})
}else{S.removeAttr("tabindex")
}S.show()
}else{S.css("display","")
}}G.call(this,"container","liveRegion","dropdown","results","search")
},optionToData:function(Q){if(Q.is("option")){return{id:Q.prop("value"),text:Q.text(),element:Q.get(),css:Q.attr("class"),disabled:Q.prop("disabled"),locked:u(Q.attr("locked"),"locked")||u(Q.data("locked"),true)}
}else{if(Q.is("optgroup")){return{text:Q.attr("label"),children:[],element:Q.get(),css:Q.attr("class")}
}}},prepareOpts:function(V){var T,R,Q,U,S=this;
T=V.element;
if(T.get(0).tagName.toLowerCase()==="select"){this.select=R=V.element
}if(R){E.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in V){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")
}})
}V.debug=V.debug||E.fn.select2.defaults.debug;
if(V.debug&&console&&console.warn){if(V.id!=null){console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id")
}if(V.text!=null){console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id")
}if(V.sortResults!=null){console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. ")
}if(V.selectOnBlur!=null){console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0.")
}if(V.ajax!=null&&V.ajax.results!=null){console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0.")
}if(V.formatNoResults!=null){console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0.")
}if(V.formatSearching!=null){console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0.")
}if(V.formatInputTooShort!=null){console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0.")
}if(V.formatInputTooLong!=null){console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0.")
}if(V.formatLoading!=null){console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0.")
}if(V.formatSelectionTooBig!=null){console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0.")
}if(V.element.data("select2Tags")){console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")
}}if(V.element.data("tags")!=null){var W=V.element.data("tags");
if(!E.isArray(W)){W=[]
}V.element.data("select2Tags",W)
}if(V.sorter!=null){V.sortResults=V.sorter
}if(V.selectOnClose!=null){V.selectOnBlur=V.selectOnClose
}if(V.ajax!=null){if(E.isFunction(V.ajax.processResults)){V.ajax.results=V.ajax.processResults
}}if(V.language!=null){var X=V.language;
if(E.isFunction(X.noMatches)){V.formatNoMatches=X.noMatches
}if(E.isFunction(X.searching)){V.formatSearching=X.searching
}if(E.isFunction(X.inputTooShort)){V.formatInputTooShort=X.inputTooShort
}if(E.isFunction(X.inputTooLong)){V.formatInputTooLong=X.inputTooLong
}if(E.isFunction(X.loadingMore)){V.formatLoading=X.loadingMore
}if(E.isFunction(X.maximumSelected)){V.formatSelectionTooBig=X.maximumSelected
}}V=E.extend({},{populateResults:function(Z,aa,ac){var ab,ad=this.opts.id,Y=this.liveRegion;
ab=function(al,af,ak){var am,ah,ar,ao,ai,aq,ag,ap,an,aj;
al=V.sortResults(al,af,ac);
var ae=[];
for(am=0,ah=al.length;
am<ah;
am=am+1){ar=al[am];
ai=(ar.disabled===true);
ao=(!ai)&&(ad(ar)!==m);
aq=ar.children&&ar.children.length>0;
ag=E("<li></li>");
ag.addClass("select2-results-dept-"+ak);
ag.addClass("select2-result");
ag.addClass(ao?"select2-result-selectable":"select2-result-unselectable");
if(ai){ag.addClass("select2-disabled")
}if(aq){ag.addClass("select2-result-with-children")
}ag.addClass(S.opts.formatResultCssClass(ar));
ag.attr("role","presentation");
ap=E(document.createElement("div"));
ap.addClass("select2-result-label");
ap.attr("id","select2-result-label-"+a());
ap.attr("role","option");
aj=V.formatResult(ar,ap,ac,S.opts.escapeMarkup);
if(aj!==m){ap.html(aj);
ag.append(ap)
}if(aq){an=E("<ul></ul>");
an.addClass("select2-result-sub");
ab(ar.children,an,ak+1);
ag.append(an)
}ag.data("select2-data",ar);
ae.push(ag[0])
}af.append(ae);
Y.text(V.formatMatches(al.length))
};
ab(aa,Z,0)
}},E.fn.select2.defaults,V);
if(typeof(V.id)!=="function"){Q=V.id;
V.id=function(Y){return Y[Q]
}
}if(E.isArray(V.element.data("select2Tags"))){if("tags" in V){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+V.element.attr("id")
}V.tags=V.element.data("select2Tags")
}if(R){V.query=this.bind(function(ac){var ab={results:[],more:false},aa=ac.term,Z,Y,ad;
ad=function(ae,ag){var af;
if(ae.is("option")){if(ac.matcher(aa,ae.text(),ae)){ag.push(S.optionToData(ae))
}}else{if(ae.is("optgroup")){af=S.optionToData(ae);
ae.children().each2(function(ah,ai){ad(ai,af.children)
});
if(af.children.length>0){ag.push(af)
}}}};
Z=T.children();
if(this.getPlaceholder()!==m&&Z.length>0){Y=this.getPlaceholderOption();
if(Y){Z=Z.not(Y)
}}Z.each2(function(ae,af){ad(af,ab.results)
});
ac.callback(ab)
});
V.id=function(Y){return Y.id
}
}else{if(!("query" in V)){if("ajax" in V){U=V.element.data("ajax-url");
if(U&&U.length>0){V.ajax.url=U
}V.query=F.call(V.element,V.ajax)
}else{if("data" in V){V.query=J(V.data)
}else{if("tags" in V){V.query=A(V.tags);
if(V.createSearchChoice===m){V.createSearchChoice=function(Y){return{id:E.trim(Y),text:E.trim(Y)}
}
}if(V.initSelection===m){V.initSelection=function(Y,aa){var Z=[];
E(i(Y.val(),V.separator,V.transformVal)).each(function(){var ac={id:this,text:this},ab=V.tags;
if(E.isFunction(ab)){ab=ab()
}E(ab).each(function(){if(u(this.id,ac.id)){ac=this;
return false
}});
Z.push(ac)
});
aa(Z)
}
}}}}}}if(typeof(V.query)!=="function"){throw"query function not defined for Select2 "+V.element.attr("id")
}if(V.createSearchChoicePosition==="top"){V.createSearchChoicePosition=function(Z,Y){Z.unshift(Y)
}
}else{if(V.createSearchChoicePosition==="bottom"){V.createSearchChoicePosition=function(Z,Y){Z.push(Y)
}
}else{if(typeof(V.createSearchChoicePosition)!=="function"){throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function"
}}}return V
},monitorSource:function(){var S=this.opts.element,R,Q=this;
S.on("change.select2",this.bind(function(T){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection()
}}));
this._sync=this.bind(function(){var U=S.prop("disabled");
if(U===m){U=false
}this.enable(!U);
var T=S.prop("readonly");
if(T===m){T=false
}this.readonly(T);
if(this.container){j(this.container,this.opts.element,this.opts.adaptContainerCssClass);
this.container.addClass(D(this.opts.containerCssClass,this.opts.element))
}if(this.dropdown){j(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);
this.dropdown.addClass(D(this.opts.dropdownCssClass,this.opts.element))
}});
if(S.length&&S[0].attachEvent){S.each(function(){this.attachEvent("onpropertychange",Q._sync)
})
}R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
if(R!==m){if(this.propertyObserver){delete this.propertyObserver;
this.propertyObserver=null
}this.propertyObserver=new R(function(T){E.each(T,Q._sync)
});
this.propertyObserver.observe(S.get(0),{attributes:true,subtree:false})
}},triggerSelect:function(R){var Q=E.Event("select2-selecting",{val:this.id(R),object:R,choice:R});
this.opts.element.trigger(Q);
return !Q.isDefaultPrevented()
},triggerChange:function(Q){Q=Q||{};
Q=E.extend({},Q,{type:"change",val:this.val()});
this.opts.element.data("select2-change-triggered",true);
this.opts.element.trigger(Q);
this.opts.element.data("select2-change-triggered",false);
this.opts.element.click();
if(this.opts.blurOnChange){this.opts.element.blur()
}},isInterfaceEnabled:function(){return this.enabledInterface===true
},enableInterface:function(){var Q=this._enabled&&!this._readonly,R=!Q;
if(Q===this.enabledInterface){return false
}this.container.toggleClass("select2-container-disabled",R);
this.close();
this.enabledInterface=Q;
return true
},enable:function(Q){if(Q===m){Q=true
}if(this._enabled===Q){return
}this._enabled=Q;
this.opts.element.prop("disabled",!Q);
this.enableInterface()
},disable:function(){this.enable(false)
},readonly:function(Q){if(Q===m){Q=false
}if(this._readonly===Q){return
}this._readonly=Q;
this.opts.element.prop("readonly",Q);
this.enableInterface()
},opened:function(){return(this.container)?this.container.hasClass("select2-dropdown-open"):false
},positionDropdown:function(){var S=this.dropdown,ab=this.container,V=ab.offset(),af=ab.outerHeight(false),ag=ab.outerWidth(false),aa=S.outerHeight(false),ad=E(window),al=ad.width(),Y=ad.height(),R=ad.scrollLeft()+al,ak=ad.scrollTop()+Y,T=V.top+af,ai=V.left,Q=T+aa<=ak,X=(V.top-aa)>=ad.scrollTop(),ac=S.outerWidth(false),an=function(){return ai+ac<=R
},ah=function(){return V.left+R+ab.outerWidth(false)>ac
},am=S.hasClass("select2-drop-above"),W,aj,U,Z,ae;
if(am){aj=true;
if(!X&&Q){U=true;
aj=false
}}else{aj=false;
if(!Q&&X){U=true;
aj=true
}}if(U){S.hide();
V=this.container.offset();
af=this.container.outerHeight(false);
ag=this.container.outerWidth(false);
aa=S.outerHeight(false);
R=ad.scrollLeft()+al;
ak=ad.scrollTop()+Y;
T=V.top+af;
ai=V.left;
ac=S.outerWidth(false);
S.show();
this.focusSearch()
}if(this.opts.dropdownAutoWidth){ae=E(".select2-results",S)[0];
S.addClass("select2-drop-auto-width");
S.css("width","");
ac=S.outerWidth(false)+(ae.scrollHeight===ae.clientHeight?0:x.width);
ac>ag?ag=ac:ac=ag;
aa=S.outerHeight(false)
}else{this.container.removeClass("select2-drop-auto-width")
}if(this.body.css("position")!=="static"){W=this.body.offset();
T-=W.top;
ai-=W.left
}if(!an()&&ah()){ai=V.left+this.container.outerWidth(false)-ac
}Z={left:ai,width:ag};
if(aj){this.container.addClass("select2-drop-above");
S.addClass("select2-drop-above");
aa=S.outerHeight(false);
Z.top=V.top-aa;
Z.bottom="auto"
}else{Z.top=T;
Z.bottom="auto";
this.container.removeClass("select2-drop-above");
S.removeClass("select2-drop-above")
}Z=E.extend(Z,D(this.opts.dropdownCss,this.opts.element));
S.css(Z)
},shouldOpen:function(){var Q;
if(this.opened()){return false
}if(this._enabled===false||this._readonly===true){return false
}Q=E.Event("select2-opening");
this.opts.element.trigger(Q);
return !Q.isDefaultPrevented()
},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");
this.dropdown.removeClass("select2-drop-above")
},open:function(){if(!this.shouldOpen()){return false
}this.opening();
w.on("mousemove.select2Event",function(Q){o.x=Q.pageX;
o.y=Q.pageY
});
return true
},opening:function(){var V=this.containerEventName,Q="scroll."+V,T="resize."+V,S="orientationchange."+V,R;
this.container.addClass("select2-dropdown-open").addClass("select2-container-active");
this.clearDropdownAlignmentPreference();
if(this.dropdown[0]!==this.body.children().last()[0]){this.dropdown.detach().appendTo(this.body)
}R=E("#select2-drop-mask");
if(R.length===0){R=E(document.createElement("div"));
R.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
R.hide();
R.appendTo(this.body);
R.on("mousedown touchstart click",function(X){p(R);
var Y=E("#select2-drop"),W;
if(Y.length>0){W=Y.data("select2");
if(W.opts.selectOnBlur){W.selectHighlighted({noFocus:true})
}W.close();
X.preventDefault();
X.stopPropagation()
}})
}if(this.dropdown.prev()[0]!==R[0]){this.dropdown.before(R)
}E("#select2-drop").removeAttr("id");
this.dropdown.attr("id","select2-drop");
R.show();
this.positionDropdown();
this.dropdown.show();
this.positionDropdown();
this.dropdown.addClass("select2-drop-active");
var U=this;
this.container.parents().add(window).each(function(){E(this).on(T+" "+Q+" "+S,function(W){if(U.opened()){U.positionDropdown()
}})
})
},close:function(){if(!this.opened()){return
}var T=this.containerEventName,Q="scroll."+T,S="resize."+T,R="orientationchange."+T;
this.container.parents().add(window).each(function(){E(this).off(Q).off(S).off(R)
});
this.clearDropdownAlignmentPreference();
E("#select2-drop-mask").hide();
this.dropdown.removeAttr("id");
this.dropdown.hide();
this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
this.results.empty();
w.off("mousemove.select2Event");
this.clearSearch();
this.search.removeClass("select2-active");
this.search.removeAttr("aria-activedescendant");
this.opts.element.trigger(E.Event("select2-close"))
},externalSearch:function(Q){this.open();
this.search.val(Q);
this.updateResults(false)
},clearSearch:function(){},prefillNextSearchTerm:function(){if(this.search.val()!==""){return false
}var Q=this.opts.nextSearchTerm(this.data(),this.lastSearchTerm);
if(Q!==m){this.search.val(Q);
this.search.select();
return true
}return false
},getMaximumSelectionSize:function(){return D(this.opts.maximumSelectionSize,this.opts.element)
},ensureHighlightVisible:function(){var T=this.results,S,W,R,V,Q,Y,X,U;
W=this.highlight();
if(W<0){return
}if(W==0){T.scrollTop(0);
return
}S=this.findHighlightableChoices().find(".select2-result-label");
R=E(S[W]);
U=(R.offset()||{}).top||0;
V=U+R.outerHeight(true);
if(W===S.length-1){X=T.find("li.select2-more-results");
if(X.length>0){V=X.offset().top+X.outerHeight(true)
}}Q=T.offset().top+T.outerHeight(false);
if(V>Q){T.scrollTop(T.scrollTop()+(V-Q))
}Y=U-T.offset().top;
if(Y<0&&R.css("display")!="none"){T.scrollTop(T.scrollTop()+Y)
}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
},moveHighlight:function(T){var S=this.findHighlightableChoices(),R=this.highlight();
while(R>-1&&R<S.length){R+=T;
var Q=E(S[R]);
if(Q.hasClass("select2-result-selectable")&&!Q.hasClass("select2-disabled")&&!Q.hasClass("select2-selected")){this.highlight(R);
break
}}},highlight:function(R){var T=this.findHighlightableChoices(),Q,S;
if(arguments.length===0){return r(T.filter(".select2-highlighted")[0],T.get())
}if(R>=T.length){R=T.length-1
}if(R<0){R=0
}this.removeHighlight();
Q=E(T[R]);
Q.addClass("select2-highlighted");
this.search.attr("aria-activedescendant",Q.find(".select2-result-label").attr("id"));
this.ensureHighlightVisible();
this.liveRegion.text(Q.text());
S=Q.data("select2-data");
if(S){this.opts.element.trigger({type:"select2-highlight",val:this.id(S),choice:S})
}},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")
},touchMoved:function(){this._touchMoved=true
},clearTouchMoved:function(){this._touchMoved=false
},countSelectableResults:function(){return this.findHighlightableChoices().length
},highlightUnderEvent:function(R){var Q=E(R.target).closest(".select2-result-selectable");
if(Q.length>0&&!Q.is(".select2-highlighted")){var S=this.findHighlightableChoices();
this.highlight(S.index(Q))
}else{if(Q.length==0){this.removeHighlight()
}}},loadMoreIfNeeded:function(){var U=this.results,T=U.find("li.select2-more-results"),W,V=this.resultsPage+1,Q=this,S=this.search.val(),R=this.context;
if(T.length===0){return
}W=T.offset().top-U.offset().top-U.height();
if(W<=this.opts.loadMorePadding){T.addClass("select2-active");
this.opts.query({element:this.opts.element,term:S,page:V,context:R,matcher:this.opts.matcher,callback:this.bind(function(X){if(!Q.opened()){return
}Q.opts.populateResults.call(this,U,X.results,{term:S,page:V,context:R});
Q.postprocessResults(X,false,false);
if(X.more===true){T.detach().appendTo(U).html(Q.opts.escapeMarkup(D(Q.opts.formatLoadMore,Q.opts.element,V+1)));
window.setTimeout(function(){Q.loadMoreIfNeeded()
},10)
}else{T.remove()
}Q.positionDropdown();
Q.resultsPage=V;
Q.context=X.context;
this.opts.element.trigger({type:"select2-loaded",items:X})
})})
}},tokenize:function(){},updateResults:function(Y){var ac=this.search,W=this.results,Q=this.opts,V,ab=this,Z,U=ac.val(),S=E.data(this.container,"select2-last-term"),aa;
if(Y!==true&&S&&u(U,S)){return
}E.data(this.container,"select2-last-term",U);
if(Y!==true&&(this.showSearchInput===false||!this.opened())){return
}function X(){ac.removeClass("select2-active");
ab.positionDropdown();
if(W.find(".select2-no-results,.select2-selection-limit,.select2-searching").length){ab.liveRegion.text(W.text())
}else{ab.liveRegion.text(ab.opts.formatMatches(W.find('.select2-result-selectable:not(".select2-selected")').length))
}}function R(ad){W.html(ad);
X()
}aa=++this.queryCount;
var T=this.getMaximumSelectionSize();
if(T>=1){V=this.data();
if(E.isArray(V)&&V.length>=T&&z(Q.formatSelectionTooBig,"formatSelectionTooBig")){R("<li class='select2-selection-limit'>"+D(Q.formatSelectionTooBig,Q.element,T)+"</li>");
return
}}if(ac.val().length<Q.minimumInputLength){if(z(Q.formatInputTooShort,"formatInputTooShort")){R("<li class='select2-no-results'>"+D(Q.formatInputTooShort,Q.element,ac.val(),Q.minimumInputLength)+"</li>")
}else{R("")
}if(Y&&this.showSearch){this.showSearch(true)
}return
}if(Q.maximumInputLength&&ac.val().length>Q.maximumInputLength){if(z(Q.formatInputTooLong,"formatInputTooLong")){R("<li class='select2-no-results'>"+D(Q.formatInputTooLong,Q.element,ac.val(),Q.maximumInputLength)+"</li>")
}else{R("")
}return
}if(Q.formatSearching&&this.findHighlightableChoices().length===0){R("<li class='select2-searching'>"+D(Q.formatSearching,Q.element)+"</li>")
}ac.addClass("select2-active");
this.removeHighlight();
Z=this.tokenize();
if(Z!=m&&Z!=null){ac.val(Z)
}this.resultsPage=1;
Q.query({element:Q.element,term:ac.val(),page:this.resultsPage,context:null,matcher:Q.matcher,callback:this.bind(function(ae){var ad;
if(aa!=this.queryCount){return
}if(!this.opened()){this.search.removeClass("select2-active");
return
}if(ae.hasError!==m&&z(Q.formatAjaxError,"formatAjaxError")){R("<li class='select2-ajax-error'>"+D(Q.formatAjaxError,Q.element,ae.jqXHR,ae.textStatus,ae.errorThrown)+"</li>");
return
}this.context=(ae.context===m)?null:ae.context;
if(this.opts.createSearchChoice&&ac.val()!==""){ad=this.opts.createSearchChoice.call(ab,ac.val(),ae.results);
if(ad!==m&&ad!==null&&ab.id(ad)!==m&&ab.id(ad)!==null){if(E(ae.results).filter(function(){return u(ab.id(this),ab.id(ad))
}).length===0){this.opts.createSearchChoicePosition(ae.results,ad)
}}}if(ae.results.length===0&&z(Q.formatNoMatches,"formatNoMatches")){R("<li class='select2-no-results'>"+D(Q.formatNoMatches,Q.element,ac.val())+"</li>");
if(this.showSearch){this.showSearch(ac.val())
}return
}W.empty();
ab.opts.populateResults.call(this,W,ae.results,{term:ac.val(),page:this.resultsPage,context:null});
if(ae.more===true&&z(Q.formatLoadMore,"formatLoadMore")){W.append("<li class='select2-more-results'>"+Q.escapeMarkup(D(Q.formatLoadMore,Q.element,this.resultsPage))+"</li>");
window.setTimeout(function(){ab.loadMoreIfNeeded()
},10)
}this.postprocessResults(ae,Y);
X();
this.opts.element.trigger({type:"select2-loaded",items:ae})
})})
},cancel:function(){this.close()
},blur:function(){if(this.opts.selectOnBlur){this.selectHighlighted({noFocus:true})
}this.close();
this.container.removeClass("select2-container-active");
if(this.search[0]===document.activeElement){this.search.blur()
}this.clearSearch();
this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
},focusSearch:function(){K(this.search)
},selectHighlighted:function(R){if(this._touchMoved){this.clearTouchMoved();
return
}var Q=this.highlight(),S=this.results.find(".select2-highlighted"),T=S.closest(".select2-result").data("select2-data");
if(T){this.highlight(Q);
this.onSelect(T,R)
}else{if(R&&R.noFocus){this.close()
}}},getPlaceholder:function(){var Q;
return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((Q=this.getPlaceholderOption())!==m?Q.text():m)
},getPlaceholderOption:function(){if(this.select){var Q=this.select.children("option").first();
if(this.opts.placeholderOption!==m){return(this.opts.placeholderOption==="first"&&Q)||(typeof this.opts.placeholderOption==="function"&&this.opts.placeholderOption(this.select))
}else{if(E.trim(Q.text())===""&&Q.val()===""){return Q
}}}},initContainerWidth:function(){function R(){var W,U,X,V,T,S;
if(this.opts.width==="off"){return null
}else{if(this.opts.width==="element"){return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"
}else{if(this.opts.width==="copy"||this.opts.width==="resolve"){W=this.opts.element.attr("style");
if(typeof(W)==="string"){U=W.split(";");
for(V=0,T=U.length;
V<T;
V=V+1){S=U[V].replace(/\s/g,"");
X=S.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
if(X!==null&&X.length>=1){return X[1]
}}}if(this.opts.width==="resolve"){W=this.opts.element.css("width");
if(W.indexOf("%")>0){return W
}return(this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px")
}return null
}else{if(E.isFunction(this.opts.width)){return this.opts.width()
}else{return this.opts.width
}}}}}var Q=R.call(this);
if(Q!==null){this.container.css("width",Q)
}}});
y=N(P,{createContainer:function(){var Q=E(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));
return Q
},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.focusser.prop("disabled",!this.isInterfaceEnabled())
}},opening:function(){var S,R,Q;
if(this.opts.minimumResultsForSearch>=0){this.showSearch(true)
}this.parent.opening.apply(this,arguments);
if(this.showSearchInput!==false){this.search.val(this.focusser.val())
}if(this.opts.shouldFocusInput(this)){this.search.focus();
S=this.search.get(0);
if(S.createTextRange){R=S.createTextRange();
R.collapse(false);
R.select()
}else{if(S.setSelectionRange){Q=this.search.val().length;
S.setSelectionRange(Q,Q)
}}}this.prefillNextSearchTerm();
this.focusser.prop("disabled",true).val("");
this.updateResults(true);
this.opts.element.trigger(E.Event("select2-open"))
},close:function(){if(!this.opened()){return
}this.parent.close.apply(this,arguments);
this.focusser.prop("disabled",false);
if(this.opts.shouldFocusInput(this)){this.focusser.focus()
}},focus:function(){if(this.opened()){this.close()
}else{this.focusser.prop("disabled",false);
if(this.opts.shouldFocusInput(this)){this.focusser.focus()
}}},isFocused:function(){return this.container.hasClass("select2-container-active")
},cancel:function(){this.parent.cancel.apply(this,arguments);
this.focusser.prop("disabled",false);
if(this.opts.shouldFocusInput(this)){this.focusser.focus()
}},destroy:function(){E("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id"));
this.parent.destroy.apply(this,arguments);
G.call(this,"selection","focusser")
},initContainer:function(){var T,Q=this.container,V=this.dropdown,U=a(),S;
if(this.opts.minimumResultsForSearch<0){this.showSearch(false)
}else{this.showSearch(true)
}this.selection=T=Q.find(".select2-choice");
this.focusser=Q.find(".select2-focusser");
T.find(".select2-chosen").attr("id","select2-chosen-"+U);
this.focusser.attr("aria-labelledby","select2-chosen-"+U);
this.results.attr("id","select2-results-"+U);
this.search.attr("aria-owns","select2-results-"+U);
this.focusser.attr("id","s2id_autogen"+U);
S=E("label[for='"+this.opts.element.attr("id")+"']");
this.opts.element.on("focus.select2",this.bind(function(){this.focus()
}));
this.focusser.prev().text(S.text()).attr("for",this.focusser.attr("id"));
var R=this.opts.element.attr("title");
this.opts.element.attr("title",(R||S.text()));
this.focusser.attr("tabindex",this.elementTabIndex);
this.search.attr("id",this.focusser.attr("id")+"_search");
this.search.prev().text(E("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id"));
this.search.on("keydown",this.bind(function(W){if(!this.isInterfaceEnabled()){return
}if(229==W.keyCode){return
}if(W.which===M.PAGE_UP||W.which===M.PAGE_DOWN){B(W);
return
}switch(W.which){case M.UP:case M.DOWN:this.moveHighlight((W.which===M.UP)?-1:1);
B(W);
return;
case M.ENTER:this.selectHighlighted();
B(W);
return;
case M.TAB:this.selectHighlighted({noFocus:true});
return;
case M.ESC:this.cancel(W);
B(W);
return
}}));
this.search.on("blur",this.bind(function(W){if(document.activeElement===this.body.get(0)){window.setTimeout(this.bind(function(){if(this.opened()&&this.results&&this.results.length>1){this.search.focus()
}}),0)
}}));
this.focusser.on("keydown",this.bind(function(W){if(!this.isInterfaceEnabled()){return
}if(W.which===M.TAB||M.isControl(W)||M.isFunctionKey(W)||W.which===M.ESC){return
}if(this.opts.openOnEnter===false&&W.which===M.ENTER){B(W);
return
}if(W.which==M.DOWN||W.which==M.UP||(W.which==M.ENTER&&this.opts.openOnEnter)){if(W.altKey||W.ctrlKey||W.shiftKey||W.metaKey){return
}this.open();
B(W);
return
}if(W.which==M.DELETE||W.which==M.BACKSPACE){if(this.opts.allowClear){this.clear()
}B(W);
return
}}));
H(this.focusser);
this.focusser.on("keyup-change input",this.bind(function(W){if(this.opts.minimumResultsForSearch>=0){W.stopPropagation();
if(this.opened()){return
}this.open()
}}));
T.on("mousedown touchstart","abbr",this.bind(function(W){if(!this.isInterfaceEnabled()){return
}this.clear();
b(W);
this.close();
if(this.selection){this.selection.focus()
}}));
T.on("mousedown touchstart",this.bind(function(W){p(T);
if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(E.Event("select2-focus"))
}if(this.opened()){this.close()
}else{if(this.isInterfaceEnabled()){this.open()
}}B(W)
}));
V.on("mousedown touchstart",this.bind(function(){if(this.opts.shouldFocusInput(this)){this.search.focus()
}}));
T.on("focus",this.bind(function(W){B(W)
}));
this.focusser.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(E.Event("select2-focus"))
}this.container.addClass("select2-container-active")
})).on("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active");
this.opts.element.trigger(E.Event("select2-blur"))
}}));
this.search.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(E.Event("select2-focus"))
}this.container.addClass("select2-container-active")
}));
this.initContainerWidth();
this.opts.element.hide();
this.setPlaceholder()
},clear:function(S){var T=this.selection.data("select2-data");
if(T){var R=E.Event("select2-clearing");
this.opts.element.trigger(R);
if(R.isDefaultPrevented()){return
}var Q=this.getPlaceholderOption();
this.opts.element.val(Q?Q.val():"");
this.selection.find(".select2-chosen").empty();
this.selection.removeData("select2-data");
this.setPlaceholder();
if(S!==false){this.opts.element.trigger({type:"select2-removed",val:this.id(T),choice:T});
this.triggerChange({removed:T})
}}},initSelection:function(){var R;
if(this.isPlaceholderOptionSelected()){this.updateSelection(null);
this.close();
this.setPlaceholder()
}else{var Q=this;
this.opts.initSelection.call(null,this.opts.element,function(S){if(S!==m&&S!==null){Q.updateSelection(S);
Q.close();
Q.setPlaceholder();
Q.lastSearchTerm=Q.search.val()
}})
}},isPlaceholderOptionSelected:function(){var Q;
if(this.getPlaceholder()===m){return false
}return((Q=this.getPlaceholderOption())!==m&&Q.prop("selected"))||(this.opts.element.val()==="")||(this.opts.element.val()===m)||(this.opts.element.val()===null)
},prepareOpts:function(){var R=this.parent.prepareOpts.apply(this,arguments),Q=this;
if(R.element.get(0).tagName.toLowerCase()==="select"){R.initSelection=function(S,U){var T=S.find("option").filter(function(){return this.selected&&!this.disabled
});
U(Q.optionToData(T))
}
}else{if("data" in R){R.initSelection=R.initSelection||function(T,V){var U=T.val();
var S=null;
R.query({matcher:function(W,Z,X){var Y=u(U,R.id(X));
if(Y){S=X
}return Y
},callback:!E.isFunction(V)?E.noop:function(){V(S)
}})
}
}}return R
},getPlaceholder:function(){if(this.select){if(this.getPlaceholderOption()===m){return m
}}return this.parent.getPlaceholder.apply(this,arguments)
},setPlaceholder:function(){var Q=this.getPlaceholder();
if(this.isPlaceholderOptionSelected()&&Q!==m){if(this.select&&this.getPlaceholderOption()===m){return
}this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(Q));
this.selection.addClass("select2-default");
this.container.removeClass("select2-allowclear")
}},postprocessResults:function(V,R,U){var T=0,Q=this,W=true;
this.findHighlightableChoices().each2(function(X,Y){if(u(Q.id(Y.data("select2-data")),Q.opts.element.val())){T=X;
return false
}});
if(U!==false){if(R===true&&T>=0){this.highlight(T)
}else{this.highlight(0)
}}if(R===true){var S=this.opts.minimumResultsForSearch;
if(S>=0){this.showSearch(s(V.results)>=S)
}}},showSearch:function(Q){if(this.showSearchInput===Q){return
}this.showSearchInput=Q;
this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!Q);
this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!Q);
E(this.dropdown,this.container).toggleClass("select2-with-searchbox",Q)
},onSelect:function(S,R){if(!this.triggerSelect(S)){return
}var Q=this.opts.element.val(),T=this.data();
this.opts.element.val(this.id(S));
this.updateSelection(S);
this.opts.element.trigger({type:"select2-selected",val:this.id(S),choice:S});
this.lastSearchTerm=this.search.val();
this.close();
if((!R||!R.noFocus)&&this.opts.shouldFocusInput(this)){this.focusser.focus()
}if(!u(Q,this.id(S))){this.triggerChange({added:S,removed:T})
}},updateSelection:function(T){var R=this.selection.find(".select2-chosen"),S,Q;
this.selection.data("select2-data",T);
R.empty();
if(T!==null){S=this.opts.formatSelection(T,R,this.opts.escapeMarkup)
}if(S!==m){R.append(S)
}Q=this.opts.formatSelectionCssClass(T,R);
if(Q!==m){R.addClass(Q)
}this.selection.removeClass("select2-default");
if(this.opts.allowClear&&this.getPlaceholder()!==m){this.container.addClass("select2-allowclear")
}},val:function(){var U,R=false,S=null,Q=this,T=this.data();
if(arguments.length===0){return this.opts.element.val()
}U=arguments[0];
if(arguments.length>1){R=arguments[1];
if(this.opts.debug&&console&&console.warn){console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')
}}if(this.select){if(this.opts.debug&&console&&console.warn){console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.')
}this.select.val(U).find("option").filter(function(){return this.selected
}).each2(function(V,W){S=Q.optionToData(W);
return false
});
this.updateSelection(S);
this.setPlaceholder();
if(R){this.triggerChange({added:S,removed:T})
}}else{if(!U&&U!==0){this.clear(R);
return
}if(this.opts.initSelection===m){throw new Error("cannot call val() if initSelection() is not defined")
}this.opts.element.val(U);
this.opts.initSelection(this.opts.element,function(V){Q.opts.element.val(!V?"":Q.id(V));
Q.updateSelection(V);
Q.setPlaceholder();
if(R){Q.triggerChange({added:V,removed:T})
}})
}},clearSearch:function(){this.search.val("");
this.focusser.val("")
},data:function(S){var R,Q=false;
if(arguments.length===0){R=this.selection.data("select2-data");
if(R==m){R=null
}return R
}else{if(this.opts.debug&&console&&console.warn){console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.')
}if(arguments.length>1){Q=arguments[1]
}if(!S){this.clear(Q)
}else{R=this.data();
this.opts.element.val(!S?"":this.id(S));
this.updateSelection(S);
if(Q){this.triggerChange({added:S,removed:R})
}}}}});
c=N(P,{createContainer:function(){var Q=E(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));
return Q
},prepareOpts:function(){var R=this.parent.prepareOpts.apply(this,arguments),Q=this;
if(R.element.get(0).tagName.toLowerCase()==="select"){R.initSelection=function(S,U){var T=[];
S.find("option").filter(function(){return this.selected&&!this.disabled
}).each2(function(V,W){T.push(Q.optionToData(W))
});
U(T)
}
}else{if("data" in R){R.initSelection=R.initSelection||function(S,V){var T=i(S.val(),R.separator,R.transformVal);
var U=[];
R.query({matcher:function(W,Z,X){var Y=E.grep(T,function(aa){return u(aa,R.id(X))
}).length;
if(Y){U.push(X)
}return Y
},callback:!E.isFunction(V)?E.noop:function(){var W=[];
for(var Z=0;
Z<T.length;
Z++){var aa=T[Z];
for(var Y=0;
Y<U.length;
Y++){var X=U[Y];
if(u(aa,R.id(X))){W.push(X);
U.splice(Y,1);
break
}}}V(W)
}})
}
}}return R
},selectChoice:function(Q){var R=this.container.find(".select2-search-choice-focus");
if(R.length&&Q&&Q[0]==R[0]){}else{if(R.length){this.opts.element.trigger("choice-deselected",R)
}R.removeClass("select2-search-choice-focus");
if(Q&&Q.length){this.close();
Q.addClass("select2-search-choice-focus");
this.opts.element.trigger("choice-selected",Q)
}}},destroy:function(){E("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id"));
this.parent.destroy.apply(this,arguments);
G.call(this,"searchContainer","selection")
},initContainer:function(){var Q=".select2-choices",R;
this.searchContainer=this.container.find(".select2-search-field");
this.selection=R=this.container.find(Q);
var S=this;
this.selection.on("click",".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)",function(T){S.search[0].focus();
S.selectChoice(E(this))
});
this.search.attr("id","s2id_autogen"+a());
this.search.prev().text(E("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id"));
this.opts.element.on("focus.select2",this.bind(function(){this.focus()
}));
this.search.on("input paste",this.bind(function(){if(this.search.attr("placeholder")&&this.search.val().length==0){return
}if(!this.isInterfaceEnabled()){return
}if(!this.opened()){this.open()
}}));
this.search.attr("tabindex",this.elementTabIndex);
this.keydowns=0;
this.search.on("keydown",this.bind(function(X){if(!this.isInterfaceEnabled()){return
}++this.keydowns;
var V=R.find(".select2-search-choice-focus");
var W=V.prev(".select2-search-choice:not(.select2-locked)");
var U=V.next(".select2-search-choice:not(.select2-locked)");
var Y=f(this.search);
if(V.length&&(X.which==M.LEFT||X.which==M.RIGHT||X.which==M.BACKSPACE||X.which==M.DELETE||X.which==M.ENTER)){var T=V;
if(X.which==M.LEFT&&W.length){T=W
}else{if(X.which==M.RIGHT){T=U.length?U:null
}else{if(X.which===M.BACKSPACE){if(this.unselect(V.first())){this.search.width(10);
T=W.length?W:U
}}else{if(X.which==M.DELETE){if(this.unselect(V.first())){this.search.width(10);
T=U.length?U:null
}}else{if(X.which==M.ENTER){T=null
}}}}}this.selectChoice(T);
B(X);
if(!T||!T.length){this.open()
}return
}else{if(((X.which===M.BACKSPACE&&this.keydowns==1)||X.which==M.LEFT)&&(Y.offset==0&&!Y.length)){this.selectChoice(R.find(".select2-search-choice:not(.select2-locked)").last());
B(X);
return
}else{this.selectChoice(null)
}}if(this.opened()){switch(X.which){case M.UP:case M.DOWN:this.moveHighlight((X.which===M.UP)?-1:1);
B(X);
return;
case M.ENTER:this.selectHighlighted();
B(X);
return;
case M.TAB:this.selectHighlighted({noFocus:true});
this.close();
return;
case M.ESC:this.cancel(X);
B(X);
return
}}if(X.which===M.TAB||M.isControl(X)||M.isFunctionKey(X)||X.which===M.BACKSPACE||X.which===M.ESC){return
}if(X.which===M.ENTER){if(this.opts.openOnEnter===false){return
}else{if(X.altKey||X.ctrlKey||X.shiftKey||X.metaKey){return
}}}this.open();
if(X.which===M.PAGE_UP||X.which===M.PAGE_DOWN){B(X)
}if(X.which===M.ENTER){B(X)
}}));
this.search.on("keyup",this.bind(function(T){this.keydowns=0;
this.resizeSearch()
}));
this.search.on("blur",this.bind(function(T){this.container.removeClass("select2-container-active");
this.search.removeClass("select2-focused");
this.selectChoice(null);
if(!this.opened()){this.clearSearch()
}T.stopImmediatePropagation();
this.opts.element.trigger(E.Event("select2-blur"))
}));
this.container.on("click",Q,this.bind(function(T){if(!this.isInterfaceEnabled()){return
}if(E(T.target).closest(".select2-search-choice").length>0){return
}this.selectChoice(null);
this.clearPlaceholder();
if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(E.Event("select2-focus"))
}this.open();
this.focusSearch();
T.preventDefault()
}));
this.container.on("focus",Q,this.bind(function(){if(!this.isInterfaceEnabled()){return
}if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(E.Event("select2-focus"))
}this.container.addClass("select2-container-active");
this.dropdown.addClass("select2-drop-active");
this.clearPlaceholder()
}));
this.initContainerWidth();
this.opts.element.hide();
this.clearSearch()
},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.search.prop("disabled",!this.isInterfaceEnabled())
}},initSelection:function(){var R;
if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([]);
this.close();
this.clearSearch()
}if(this.select||this.opts.element.val()!==""){var Q=this;
this.opts.initSelection.call(null,this.opts.element,function(S){if(S!==m&&S!==null){Q.updateSelection(S);
Q.close();
Q.clearSearch()
}})
}},clearSearch:function(){var R=this.getPlaceholder(),Q=this.getMaxSearchWidth();
if(R!==m&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(R).addClass("select2-default");
this.search.width(Q>0?Q:this.container.css("width"))
}else{this.search.val("").width(10)
}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default")
}},opening:function(){this.clearPlaceholder();
this.resizeSearch();
this.parent.opening.apply(this,arguments);
this.focusSearch();
this.prefillNextSearchTerm();
this.updateResults(true);
if(this.opts.shouldFocusInput(this)){this.search.focus()
}this.opts.element.trigger(E.Event("select2-open"))
},close:function(){if(!this.opened()){return
}this.parent.close.apply(this,arguments)
},focus:function(){this.close();
this.search.focus()
},isFocused:function(){return this.search.hasClass("select2-focused")
},updateSelection:function(T){var S={},R=[],Q=this;
E(T).each(function(){if(!(Q.id(this) in S)){S[Q.id(this)]=0;
R.push(this)
}});
this.selection.find(".select2-search-choice").remove();
this.addSelectedChoice(R);
Q.postprocessResults()
},tokenize:function(){var Q=this.search.val();
Q=this.opts.tokenizer.call(this,Q,this.data(),this.bind(this.onSelect),this.opts);
if(Q!=null&&Q!=m){this.search.val(Q);
if(Q.length>0){this.open()
}}},onSelect:function(R,Q){if(!this.triggerSelect(R)||R.text===""){return
}this.addSelectedChoice(R);
this.opts.element.trigger({type:"selected",val:this.id(R),choice:R});
this.lastSearchTerm=this.search.val();
this.clearSearch();
this.updateResults();
if(this.select||!this.opts.closeOnSelect){this.postprocessResults(R,false,this.opts.closeOnSelect===true)
}if(this.opts.closeOnSelect){this.close();
this.search.width(10)
}else{if(this.countSelectableResults()>0){this.search.width(10);
this.resizeSearch();
if(this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()){this.updateResults(true)
}else{if(this.prefillNextSearchTerm()){this.updateResults()
}}this.positionDropdown()
}else{this.close();
this.search.width(10)
}}this.triggerChange({added:R});
if(!Q||!Q.noFocus){this.focusSearch()
}},cancel:function(){this.close();
this.focusSearch()
},addSelectedChoice:function(R){var S=this.getVal(),Q=this;
E(R).each(function(){S.push(Q.createChoice(this))
});
this.setVal(S)
},createChoice:function(U){var S=!U.locked,X=E("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),W=E("<li class='select2-search-choice select2-locked'><div></div></li>");
var R=S?X:W,V=this.id(U),T,Q;
T=this.opts.formatSelection(U,R.find("div"),this.opts.escapeMarkup);
if(T!=m){R.find("div").replaceWith(E("<div></div>").html(T))
}Q=this.opts.formatSelectionCssClass(U,R.find("div"));
if(Q!=m){R.addClass(Q)
}if(S){R.find(".select2-search-choice-close").on("mousedown",B).on("click dblclick",this.bind(function(Y){if(!this.isInterfaceEnabled()){return
}this.unselect(E(Y.target));
this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
B(Y);
this.close();
this.focusSearch()
})).on("focus",this.bind(function(){if(!this.isInterfaceEnabled()){return
}this.container.addClass("select2-container-active");
this.dropdown.addClass("select2-drop-active")
}))
}R.data("select2-data",U);
R.insertBefore(this.searchContainer);
return V
},unselect:function(S){var U=this.getVal(),T,R;
S=S.closest(".select2-search-choice");
if(S.length===0){throw"Invalid argument: "+S+". Must be .select2-search-choice"
}T=S.data("select2-data");
if(!T){return
}var Q=E.Event("select2-removing");
Q.val=this.id(T);
Q.choice=T;
this.opts.element.trigger(Q);
if(Q.isDefaultPrevented()){return false
}while((R=r(this.id(T),U))>=0){U.splice(R,1);
this.setVal(U);
if(this.select){this.postprocessResults()
}}S.remove();
this.opts.element.trigger({type:"select2-removed",val:this.id(T),choice:T});
this.triggerChange({removed:T});
return true
},postprocessResults:function(U,R,T){var V=this.getVal(),W=this.results.find(".select2-result"),S=this.results.find(".select2-result-with-children"),Q=this;
W.each2(function(Y,X){var Z=Q.id(X.data("select2-data"));
if(r(Z,V)>=0){X.addClass("select2-selected");
X.find(".select2-result-selectable").addClass("select2-selected")
}});
S.each2(function(Y,X){if(!X.is(".select2-result-selectable")&&X.find(".select2-result-selectable:not(.select2-selected)").length===0){X.addClass("select2-selected")
}});
if(this.highlight()==-1&&T!==false&&this.opts.closeOnSelect===true){Q.highlight(0)
}if(!this.opts.createSearchChoice&&!W.filter(".select2-result:not(.select2-selected)").length>0){if(!U||U&&!U.more&&this.results.find(".select2-no-results").length===0){if(z(Q.opts.formatNoMatches,"formatNoMatches")){this.results.append("<li class='select2-no-results'>"+D(Q.opts.formatNoMatches,Q.opts.element,Q.search.val())+"</li>")
}}}},getMaxSearchWidth:function(){return this.selection.width()-h(this.search)
},resizeSearch:function(){var V,T,S,Q,R,U=h(this.search);
V=n(this.search)+10;
T=this.search.offset().left;
S=this.selection.width();
Q=this.selection.offset().left;
R=S-(T-Q)-U;
if(R<V){R=S-U
}if(R<40){R=S-U
}if(R<=0){R=V
}this.search.width(Math.floor(R))
},getVal:function(){var Q;
if(this.select){Q=this.select.val();
return Q===null?[]:Q
}else{Q=this.opts.element.val();
return i(Q,this.opts.separator,this.opts.transformVal)
}},setVal:function(S){if(this.select){this.select.val(S)
}else{var R=[],Q={};
E(S).each(function(){if(!(this in Q)){R.push(this);
Q[this]=0
}});
this.opts.element.val(R.length===0?"":R.join(this.opts.separator))
}},buildChangeDetails:function(Q,T){var T=T.slice(0),Q=Q.slice(0);
for(var S=0;
S<T.length;
S++){for(var R=0;
R<Q.length;
R++){if(u(this.opts.id(T[S]),this.opts.id(Q[R]))){T.splice(S,1);
S--;
Q.splice(R,1);
break
}}}return{added:T,removed:Q}
},val:function(T,R){var S,Q=this;
if(arguments.length===0){return this.getVal()
}S=this.data();
if(!S.length){S=[]
}if(!T&&T!==0){this.opts.element.val("");
this.updateSelection([]);
this.clearSearch();
if(R){this.triggerChange({added:this.data(),removed:S})
}return
}this.setVal(T);
if(this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection));
if(R){this.triggerChange(this.buildChangeDetails(S,this.data()))
}}else{if(this.opts.initSelection===m){throw new Error("val() cannot be called if initSelection() is not defined")
}this.opts.initSelection(this.opts.element,function(V){var U=E.map(V,Q.id);
Q.setVal(U);
Q.updateSelection(V);
Q.clearSearch();
if(R){Q.triggerChange(Q.buildChangeDetails(S,Q.data()))
}})
}this.clearSearch()
},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")
}this.search.width(0);
this.searchContainer.hide()
},onSortEnd:function(){var R=[],Q=this;
this.searchContainer.show();
this.searchContainer.appendTo(this.searchContainer.parent());
this.resizeSearch();
this.selection.find(".select2-search-choice").each(function(){R.push(Q.opts.id(E(this).data("select2-data")))
});
this.setVal(R);
this.triggerChange()
},data:function(S,T){var R=this,U,Q;
if(arguments.length===0){return this.selection.children(".select2-search-choice").map(function(){return E(this).data("select2-data")
}).get()
}else{Q=this.data();
if(!S){S=[]
}U=E.map(S,function(V){return R.opts.id(V)
});
this.setVal(U);
this.updateSelection(S);
this.clearSearch();
if(T){this.triggerChange(this.buildChangeDetails(Q,this.data()))
}}}});
E.fn.select2=function(){var V=Array.prototype.slice.call(arguments,0),R,U,Q,X,Z,Y=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],W=["opened","isFocused","container","dropdown"],S=["val","data"],T={search:"externalSearch"};
this.each(function(){if(V.length===0||typeof(V[0])==="object"){R=V.length===0?{}:E.extend({},V[0]);
R.element=E(this);
if(R.element.get(0).tagName.toLowerCase()==="select"){Z=R.element.prop("multiple")
}else{Z=R.multiple||false;
if("tags" in R){R.multiple=Z=true
}}U=Z?new window.Select2["class"].multi():new window.Select2["class"].single();
U.init(R)
}else{if(typeof(V[0])==="string"){if(r(V[0],Y)<0){throw"Unknown method: "+V[0]
}X=m;
U=E(this).data("select2");
if(U===m){return
}Q=V[0];
if(Q==="container"){X=U.container
}else{if(Q==="dropdown"){X=U.dropdown
}else{if(T[Q]){Q=T[Q]
}X=U[Q].apply(U,V.slice(1))
}}if(r(V[0],W)>=0||(r(V[0],S)>=0&&V.length==1)){return false
}}else{throw"Invalid arguments to select2 plugin: "+V
}}});
return(X===m)?this:X
};
E.fn.select2.defaults={debug:false,width:"copy",loadMorePadding:0,closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(R,S,U,Q){var T=[];
v(this.text(R),U.term,T,Q);
return T.join("")
},transformVal:function(Q){return E.trim(Q)
},formatSelection:function(S,R,Q){return S?Q(this.text(S)):m
},sortResults:function(R,Q,S){return R
},formatResultCssClass:function(Q){return Q.css
},formatSelectionCssClass:function(R,Q){return m
},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(Q){return Q==m?null:Q.id
},text:function(Q){if(Q&&this.data&&this.data.text){if(E.isFunction(this.data.text)){return this.data.text(Q)
}else{return Q[this.data.text]
}}else{return Q.text
}},matcher:function(Q,R){return e(""+R).toUpperCase().indexOf(e(""+Q).toUpperCase())>=0
},separator:",",tokenSeparators:[],tokenizer:g,escapeMarkup:I,blurOnChange:false,selectOnBlur:false,adaptContainerCssClass:function(Q){return Q
},adaptDropdownCssClass:function(Q){return null
},nextSearchTerm:function(Q,R){return m
},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(Q){var R=(("ontouchstart" in window)||(navigator.msMaxTouchPoints>0));
if(!R){return true
}if(Q.opts.minimumResultsForSearch<0){return false
}return true
}};
E.fn.select2.locales=[];
E.fn.select2.locales.en={formatMatches:function(Q){if(Q===1){return"One result is available, press enter to select it."
}return Q+" results are available, use up and down arrow keys to navigate."
},formatNoMatches:function(){return"No matches found"
},formatAjaxError:function(Q,S,R){return"Loading failed"
},formatInputTooShort:function(Q,R){var S=R-Q.length;
return"Please enter "+S+" or more character"+(S==1?"":"s")
},formatInputTooLong:function(R,Q){var S=R.length-Q;
return"Please delete "+S+" character"+(S==1?"":"s")
},formatSelectionTooBig:function(Q){return"You can only select "+Q+" item"+(Q==1?"":"s")
},formatLoadMore:function(Q){return"Loading more results…"
},formatSearching:function(){return"Searching…"
}};
E.extend(E.fn.select2.defaults,E.fn.select2.locales.en);
E.fn.select2.ajaxDefaults={transport:E.ajax,params:{type:"GET",cache:false,dataType:"json"}};
window.Select2={query:{ajax:F,local:J,tags:A},util:{debounce:k,markMatch:v,escapeMarkup:I,stripDiacritics:e},"class":{"abstract":P,single:y,multi:c}}
}(jQuery));
/*! nouislider - 8.0.2 - 2015-07-06 13:22:09 */
(function(b){if(typeof define==="function"&&define.amd){define([],b)
}else{if(typeof exports==="object"){var a=require("fs");
module.exports=b();
module.exports.css=function(){return a.readFileSync(__dirname+"/nouislider.min.css","utf8")
}
}else{window.noUiSlider=b()
}}}(function(){function d(W){return W.filter(function(X){return !this[X]?this[X]=true:false
},{})
}function u(W,X){return Math.round(W/X)*X
}function P(Y){var X=Y.getBoundingClientRect(),ab=Y.ownerDocument,aa=ab.defaultView||ab.parentWindow,W=ab.documentElement,Z=aa.pageXOffset;
if(/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)){Z=0
}return{top:X.top+aa.pageYOffset-W.clientTop,left:X.left+Z-W.clientLeft}
}function x(W){return typeof W==="number"&&!isNaN(W)&&isFinite(W)
}function v(W){var X=Math.pow(10,7);
return Number((Math.round(W*X)/X).toFixed(7))
}function H(W,X,Y){F(W,X);
setTimeout(function(){q(W,X)
},Y)
}function z(W){return Math.max(Math.min(W,100),0)
}function E(W){return Array.isArray(W)?W:[W]
}function J(X){var W=X.split(".");
return W.length>1?W[1].length:0
}function F(X,W){if(X.classList){X.classList.add(W)
}else{X.className+=" "+W
}}function q(X,W){if(X.classList){X.classList.remove(W)
}else{X.className=X.className.replace(new RegExp("(^|\\b)"+W.split(" ").join("|")+"(\\b|$)","gi")," ")
}}function Q(X,W){if(X.classList){X.classList.contains(W)
}else{new RegExp("(^| )"+W+"( |$)","gi").test(X.className)
}}var N=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},g=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];
function o(X,W){return(100/(W-X))
}function l(W,X){return(X*100)/(W[1]-W[0])
}function I(W,X){return l(W,W[0]<0?X+Math.abs(W[0]):X-W[0])
}function s(W,X){return((X*(W[1]-W[0]))/100)+W[0]
}function T(Y,W){var X=1;
while(Y>=W[X]){X+=1
}return X
}function D(ad,ab,ac){if(ac>=ad.slice(-1)[0]){return 100
}var W=T(ac,ad),aa,Z,Y,X;
aa=ad[W-1];
Z=ad[W];
Y=ab[W-1];
X=ab[W];
return Y+(I([aa,Z],ac)/o(Y,X))
}function r(ad,ab,ac){if(ac>=100){return ad.slice(-1)[0]
}var W=T(ac,ab),aa,Z,Y,X;
aa=ad[W-1];
Z=ad[W];
Y=ab[W-1];
X=ab[W];
return s([aa,Z],(ac-Y)*o(Y,X))
}function j(ab,Y,X,ac){if(ac===100){return ac
}var aa=T(ac,ab),Z,W;
if(X){Z=ab[aa-1];
W=ab[aa];
if((ac-Z)>((W-Z)/2)){return W
}return Z
}if(!Y[aa-1]){return ac
}return ab[aa-1]+u(ac-ab[aa-1],Y[aa-1])
}function n(X,Z,Y){var W;
if(typeof Z==="number"){Z=[Z]
}if(Object.prototype.toString.call(Z)!=="[object Array]"){throw new Error("noUiSlider: 'range' contains invalid value.")
}if(X==="min"){W=0
}else{if(X==="max"){W=100
}else{W=parseFloat(X)
}}if(!x(W)||!x(Z[0])){throw new Error("noUiSlider: 'range' value isn't numeric.")
}Y.xPct.push(W);
Y.xVal.push(Z[0]);
if(!W){if(!isNaN(Z[1])){Y.xSteps[0]=Z[1]
}}else{Y.xSteps.push(isNaN(Z[1])?false:Z[1])
}}function w(W,Y,X){if(!Y){return true
}X.xSteps[W]=l([X.xVal[W],X.xVal[W+1]],Y)/o(X.xPct[W],X.xPct[W+1])
}function S(aa,W,ab,Z){this.xPct=[];
this.xVal=[];
this.xSteps=[Z||false];
this.xNumSteps=[false];
this.snap=W;
this.direction=ab;
var Y,X=[];
for(Y in aa){if(aa.hasOwnProperty(Y)){X.push([aa[Y],Y])
}}X.sort(function(ad,ac){return ad[0]-ac[0]
});
for(Y=0;
Y<X.length;
Y++){n(X[Y][1],X[Y][0],this)
}this.xNumSteps=this.xSteps.slice(0);
for(Y=0;
Y<this.xNumSteps.length;
Y++){w(Y,this.xNumSteps[Y],this)
}}S.prototype.getMargin=function(W){return this.xPct.length===2?l(this.xVal,W):false
};
S.prototype.toStepping=function(W){W=D(this.xVal,this.xPct,W);
if(this.direction){W=100-W
}return W
};
S.prototype.fromStepping=function(W){if(this.direction){W=100-W
}return v(r(this.xVal,this.xPct,W))
};
S.prototype.getStep=function(W){if(this.direction){W=100-W
}W=j(this.xPct,this.xSteps,this.snap,W);
if(this.direction){W=100-W
}return W
};
S.prototype.getApplicableStep=function(X){var W=T(X,this.xPct),Y=X===100?2:1;
return[this.xNumSteps[W-2],this.xVal[W-Y],this.xNumSteps[W-Y]]
};
S.prototype.convert=function(W){return this.getStep(this.toStepping(W))
};
var e={to:function(W){return W.toFixed(2)
},from:Number};
function A(W,X){if(!x(X)){throw new Error("noUiSlider: 'step' is not numeric.")
}W.singleStep=X
}function C(W,X){if(typeof X!=="object"||Array.isArray(X)){throw new Error("noUiSlider: 'range' is not an object.")
}if(X.min===undefined||X.max===undefined){throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.")
}W.spectrum=new S(X,W.snap,W.dir,W.singleStep)
}function O(W,X){X=E(X);
if(!Array.isArray(X)||!X.length||X.length>2){throw new Error("noUiSlider: 'start' option is incorrect.")
}W.handles=X.length;
W.start=X
}function y(W,X){W.snap=X;
if(typeof X!=="boolean"){throw new Error("noUiSlider: 'snap' option must be a boolean.")
}}function G(W,X){W.animate=X;
if(typeof X!=="boolean"){throw new Error("noUiSlider: 'animate' option must be a boolean.")
}}function V(W,X){if(X==="lower"&&W.handles===1){W.connect=1
}else{if(X==="upper"&&W.handles===1){W.connect=2
}else{if(X===true&&W.handles===2){W.connect=3
}else{if(X===false){W.connect=0
}else{throw new Error("noUiSlider: 'connect' option doesn't match handle count.")
}}}}}function k(W,X){switch(X){case"horizontal":W.ort=0;
break;
case"vertical":W.ort=1;
break;
default:throw new Error("noUiSlider: 'orientation' option is invalid.")
}}function c(W,X){if(!x(X)){throw new Error("noUiSlider: 'margin' option must be numeric.")
}W.margin=W.spectrum.getMargin(X);
if(!W.margin){throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
}}function L(W,X){if(!x(X)){throw new Error("noUiSlider: 'limit' option must be numeric.")
}W.limit=W.spectrum.getMargin(X);
if(!W.limit){throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
}}function K(W,X){switch(X){case"ltr":W.dir=0;
break;
case"rtl":W.dir=1;
W.connect=[0,2,1,3][W.connect];
break;
default:throw new Error("noUiSlider: 'direction' option was not recognized.")
}}function U(Y,ab){if(typeof ab!=="string"){throw new Error("noUiSlider: 'behaviour' must be a string containing options.")
}var X=ab.indexOf("tap")>=0,Z=ab.indexOf("drag")>=0,aa=ab.indexOf("fixed")>=0,W=ab.indexOf("snap")>=0;
Y.events={tap:X||W,drag:Z,fixed:aa,snap:W}
}function B(W,X){W.format=X;
if(typeof X.to==="function"&&typeof X.from==="function"){return true
}throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
}function h(X){var W={margin:0,limit:0,animate:true,format:e},Y;
Y={step:{r:false,t:A},start:{r:true,t:O},connect:{r:true,t:V},direction:{r:true,t:K},snap:{r:false,t:y},animate:{r:false,t:G},range:{r:true,t:C},orientation:{r:false,t:k},margin:{r:false,t:c},limit:{r:false,t:L},behaviour:{r:true,t:U},format:{r:false,t:B}};
var Z={connect:false,direction:"ltr",behaviour:"tap",orientation:"horizontal"};
Object.keys(Z).forEach(function(aa){if(X[aa]===undefined){X[aa]=Z[aa]
}});
Object.keys(Y).forEach(function(aa){var ab=Y[aa];
if(X[aa]===undefined){if(ab.r){throw new Error("noUiSlider: '"+aa+"' is required.")
}return true
}ab.t(W,X[aa])
});
W.pips=X.pips;
W.style=W.ort?"top":"left";
return W
}function p(X,W,Y){var aa=X+W[0],Z=X+W[1];
if(Y){if(aa<0){Z+=Math.abs(aa)
}if(Z>100){aa-=(Z-100)
}return[z(aa),z(Z)]
}return[aa,Z]
}function R(Z){Z.preventDefault();
var ac=Z.type.indexOf("touch")===0,X=Z.type.indexOf("mouse")===0,aa=Z.type.indexOf("pointer")===0,W,ab,Y=Z;
if(Z.type.indexOf("MSPointer")===0){aa=true
}if(ac){W=Z.changedTouches[0].pageX;
ab=Z.changedTouches[0].pageY
}if(X||aa){W=Z.clientX+window.pageXOffset;
ab=Z.clientY+window.pageYOffset
}Y.points=[W,ab];
Y.cursor=X||aa;
return Y
}function m(aa,X){var W=document.createElement("div"),Z=document.createElement("div"),Y=["-lower","-upper"];
if(aa){Y.reverse()
}F(Z,g[3]);
F(Z,g[3]+Y[X]);
F(W,g[2]);
W.appendChild(Z);
return W
}function M(W,Y,X){switch(W){case 1:F(Y,g[7]);
F(X[0],g[6]);
break;
case 3:F(X[1],g[6]);
case 2:F(X[0],g[7]);
case 0:F(Y,g[6]);
break
}}function f(Y,aa,Z){var W,X=[];
for(W=0;
W<Y;
W+=1){X.push(Z.appendChild(m(aa,W)))
}return X
}function b(Y,W,X){F(X,g[0]);
F(X,g[8+Y]);
F(X,g[4+W]);
var Z=document.createElement("div");
F(Z,g[1]);
X.appendChild(Z);
return Z
}function a(az,ab){var af=az,Y=[-1,-1],ai,ao,ag=ab.spectrum,aj=[],ax={};
function au(aG,aC,aD){if(aG==="range"||aG==="steps"){return ag.xVal
}if(aG==="count"){var aF=(100/(aC-1)),aB,aE=0;
aC=[];
while((aB=aE++*aF)<=100){aC.push(aB)
}aG="positions"
}if(aG==="positions"){return aC.map(function(aH){return ag.fromStepping(aD?ag.getStep(aH):aH)
})
}if(aG==="values"){if(aD){return aC.map(function(aH){return ag.fromStepping(ag.getStep(ag.toStepping(aH)))
})
}return aC
}}function W(aH,aD,aI){var aJ=ag.direction,aF={},aC=ag.xVal[0],aB=ag.xVal[ag.xVal.length-1],aE=false,aG=false,aK=0;
ag.direction=0;
aI=d(aI.slice().sort(function(aM,aL){return aM-aL
}));
if(aI[0]!==aC){aI.unshift(aC);
aE=true
}if(aI[aI.length-1]!==aB){aI.push(aB);
aG=true
}aI.forEach(function(aU,aT){var aN,aR,aM,aW=aU,aP=aI[aT+1],aY,aL,aO,aV,aX,aQ,aS;
if(aD==="steps"){aN=ag.xNumSteps[aT]
}if(!aN){aN=aP-aW
}if(aW===false||aP===undefined){return
}for(aR=aW;
aR<=aP;
aR+=aN){aY=ag.toStepping(aR);
aL=aY-aK;
aX=aL/aH;
aQ=Math.round(aX);
aS=aL/aQ;
for(aM=1;
aM<=aQ;
aM+=1){aO=aK+(aM*aS);
aF[aO.toFixed(5)]=["x",0]
}aV=(aI.indexOf(aR)>-1)?1:(aD==="steps"?2:0);
if(!aT&&aE){aV=0
}if(!(aR===aP&&aG)){aF[aY.toFixed(5)]=[aR,aV]
}aK=aY
}});
ag.direction=aJ;
return aF
}function ac(aF,aH,aC){var aE=["horizontal","vertical"][ab.ort],aB=document.createElement("div");
F(aB,"noUi-pips");
F(aB,"noUi-pips-"+aE);
function aI(aJ){return["-normal","-large","-sub"][aJ]
}function aG(aL,aK,aJ){return'class="'+aK+" "+aK+"-"+aE+" "+aK+aI(aJ[1])+'" style="'+ab.style+": "+aL+'%"'
}function aD(aK,aJ){if(ag.direction){aK=100-aK
}aJ[1]=(aJ[1]&&aH)?aH(aJ[0],aJ[1]):aJ[1];
aB.innerHTML+="<div "+aG(aK,"noUi-marker",aJ)+"></div>";
if(aJ[1]){aB.innerHTML+="<div "+aG(aK,"noUi-value",aJ)+">"+aC.to(aJ[0])+"</div>"
}}Object.keys(aF).forEach(function(aJ){aD(aJ,aF[aJ])
});
return aB
}function ak(aB){var aD=aB.mode,aG=aB.density||1,aC=aB.filter||false,aI=aB.values||false,aJ=aB.stepped||false,aH=au(aD,aI,aJ),aE=W(aG,aD,aH),aF=aB.format||{to:Math.round};
return af.appendChild(ac(aE,aC,aF))
}function aw(){return ai["offset"+["Width","Height"][ab.ort]]
}function aA(aB,aC){if(aC!==undefined){aC=Math.abs(aC-ab.dir)
}Object.keys(ax).forEach(function(aE){var aD=aE.split(".")[0];
if(aB===aD){ax[aE].forEach(function(aF){aF(E(ah()),aC,ae(Array.prototype.slice.call(aj)))
})
}})
}function ae(aB){if(aB.length===1){return aB[0]
}if(ab.dir){return aB.reverse()
}return aB
}function at(aD,aC,aG,aE){var aF=function(aH){if(af.hasAttribute("disabled")){return false
}if(Q(af,g[14])){return false
}aH=R(aH);
if(aD===N.start&&aH.buttons!==undefined&&aH.buttons>1){return false
}aH.calcPoint=aH.points[ab.ort];
aG(aH,aE)
},aB=[];
aD.split(" ").forEach(function(aH){aC.addEventListener(aH,aF,false);
aB.push([aH,aF])
});
return aB
}function an(aF,aH){var aE=aH.handles||ao,aB,aG=false,aC=((aF.calcPoint-aH.start)*100)/aw(),aI=aE[0]===ao[0]?0:1,aD;
aB=p(aC,aH.positions,aE.length>1);
aG=am(aE[0],aB[aI],aE.length===1);
if(aE.length>1){aG=am(aE[1],aB[aI?0:1],false)||aG;
if(aG){for(aD=0;
aD<aH.handles.length;
aD++){aA("slide",aD)
}}}else{if(aG){aA("slide",aI)
}}}function aa(aB,aC){var aD=ai.getElementsByClassName(g[15]),aF=aC.handles[0]===ao[0]?0:1;
if(aD.length){q(aD[0],g[15])
}if(aB.cursor){document.body.style.cursor="";
document.body.removeEventListener("selectstart",document.body.noUiListener)
}var aE=document.documentElement;
aE.noUiListeners.forEach(function(aG){aE.removeEventListener(aG[0],aG[1])
});
q(af,g[12]);
aA("set",aF);
aA("change",aF)
}function ad(aB,aD){var aF=document.documentElement;
if(aD.handles.length===1){F(aD.handles[0].children[0],g[15]);
if(aD.handles[0].hasAttribute("disabled")){return false
}}aB.stopPropagation();
var aE=at(N.move,aF,an,{start:aB.calcPoint,handles:aD.handles,positions:[Y[0],Y[ao.length-1]]}),aG=at(N.end,aF,aa,{handles:aD.handles});
aF.noUiListeners=aE.concat(aG);
if(aB.cursor){document.body.style.cursor=getComputedStyle(aB.target).cursor;
if(ao.length>1){F(af,g[12])
}var aC=function(){return false
};
document.body.noUiListener=aC;
document.body.addEventListener("selectstart",aC,false)
}}function ar(aD){var aB=aD.calcPoint,aC=0,aF,aE;
aD.stopPropagation();
ao.forEach(function(aG){aC+=P(aG)[ab.style]
});
aF=(aB<aC/2||ao.length===1)?0:1;
aB-=P(ai)[ab.style];
aE=(aB*100)/aw();
if(!ab.events.snap){H(af,g[14],300)
}if(ao[aF].hasAttribute("disabled")){return false
}am(ao[aF],aE);
aA("slide",aF);
aA("set",aF);
aA("change",aF);
if(ab.events.snap){ad(aD,{handles:[ao[aC]]})
}}function X(aD){var aB,aC;
if(!aD.fixed){for(aB=0;
aB<ao.length;
aB+=1){at(N.start,ao[aB].children[0],ad,{handles:[ao[aB]]})
}}if(aD.tap){at(N.start,ai,ar,{handles:ao})
}if(aD.drag){aC=[ai.getElementsByClassName(g[7])[0]];
F(aC[0],g[10]);
if(aD.fixed){aC.push(ao[(aC[0]===ao[0]?1:0)].children[0])
}aC.forEach(function(aE){at(N.start,aE,ad,{handles:ao})
})
}}function am(aG,aI,aD){var aC=aG!==ao[0]?1:0,aH=Y[0]+ab.margin,aB=Y[1]-ab.margin,aF=Y[0]+ab.limit,aE=Y[1]-ab.limit;
if(ao.length>1){aI=aC?Math.max(aI,aH):Math.min(aI,aB)
}if(aD!==false&&ab.limit&&ao.length>1){aI=aC?Math.min(aI,aF):Math.max(aI,aE)
}aI=ag.getStep(aI);
aI=z(parseFloat(aI.toFixed(7)));
if(aI===Y[aC]){return false
}aG.style[ab.style]=aI+"%";
if(!aG.previousSibling){q(aG,g[17]);
if(aI>50){F(aG,g[17])
}}Y[aC]=aI;
aj[aC]=ag.fromStepping(aI);
aA("update",aC);
return true
}function aq(aE,aB){var aD,aC,aF;
if(ab.limit){aE+=1
}for(aD=0;
aD<aE;
aD+=1){aC=aD%2;
aF=aB[aC];
if(aF!==null&&aF!==false){if(typeof aF==="number"){aF=String(aF)
}aF=ab.format.from(aF);
if(aF===false||isNaN(aF)||am(ao[aC],ag.toStepping(aF),aD===(3-ab.dir))===false){aA("update",aC)
}}}}function ay(aC){var aE,aB=E(aC),aD;
if(ab.dir&&ab.handles>1){aB.reverse()
}if(ab.animate&&Y[0]!==-1){H(af,g[14],300)
}aE=ao.length>1?3:1;
if(aB.length===1){aE=1
}aq(aE,aB);
for(aD=0;
aD<ao.length;
aD++){aA("set",aD)
}}function ah(){var aB,aC=[];
for(aB=0;
aB<ab.handles;
aB+=1){aC[aB]=ab.format.to(aj[aB])
}return ae(aC)
}function av(){g.forEach(function(aB){if(!aB){return
}q(af,aB)
});
af.innerHTML="";
delete af.noUiSlider
}function al(){var aB=Y.map(function(aD,aE){var aG=ag.getApplicableStep(aD),aJ=J(String(aG[2])),aI=aj[aE],aC=aD===100?null:aG[2],aF=Number((aI-aG[2]).toFixed(aJ)),aH=aD===0?null:(aF>=aG[1])?aG[2]:(aG[0]||false);
return[aH,aC]
});
return ae(aB)
}function Z(aB,aC){ax[aB]=ax[aB]||[];
ax[aB].push(aC);
if(aB.split(".")[0]==="update"){ao.forEach(function(aD,aE){aA("update",aE)
})
}}function ap(aB){var aD=aB.split(".")[0],aC=aB.substring(aD.length);
Object.keys(ax).forEach(function(aG){var aF=aG.split(".")[0],aE=aG.substring(aF.length);
if((!aD||aD===aF)&&(!aC||aC===aE)){delete ax[aG]
}})
}if(af.noUiSlider){throw new Error("Slider was already initialized.")
}ai=b(ab.dir,ab.ort,af);
ao=f(ab.handles,ab.dir,ai);
M(ab.connect,af,ao);
X(ab.events);
if(ab.pips){ak(ab.pips)
}return{destroy:av,steps:al,on:Z,off:ap,get:ah,set:ay}
}function i(Y,Z){if(!Y.nodeName){throw new Error("noUiSlider.create requires a single element.")
}var W=h(Z,Y),X=a(Y,W);
X.set(W.start);
Y.noUiSlider=X
}return{create:i}
}));
function PointerEventsPolyfill(a){this.options={selector:"*",mouseEvents:["click","dblclick","mousedown","mouseup"],usePolyfillIf:function(){if(navigator.appName=="Microsoft Internet Explorer"){var d=navigator.userAgent;
if(d.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)!=null){var c=parseFloat(RegExp.$1);
if(c<11){return true
}}}return false
}};
if(a){var b=this;
$.each(a,function(d,c){b.options[d]=c
})
}if(this.options.usePolyfillIf()){this.register_mouse_events()
}}PointerEventsPolyfill.initialize=function(a){if(PointerEventsPolyfill.singleton==null){PointerEventsPolyfill.singleton=new PointerEventsPolyfill(a)
}return PointerEventsPolyfill.singleton
};
PointerEventsPolyfill.prototype.register_mouse_events=function(){$(document).on(this.options.mouseEvents.join(" "),this.options.selector,function(c){if($(this).css("pointer-events")=="none"){var b=$(this).css("display");
$(this).css("display","none");
var a=document.elementFromPoint(c.clientX,c.clientY);
if(b){$(this).css("display",b)
}else{$(this).css("display","")
}c.target=a;
$(a).trigger(c);
return false
}return true
})
};
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)
}else{a(jQuery)
}}(function(f){var z="1.6.12",p="left",o="right",e="up",y="down",c="in",B="out",m="none",s="auto",l="swipe",u="pinch",C="tap",j="doubletap",b="longtap",A="hold",F="horizontal",v="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,w=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,D="TouchSwipe";
var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};
f.fn.swipe=function(I){var H=f(this),G=H.data(D);
if(G&&typeof I==="string"){if(G[I]){return G[I].apply(this,Array.prototype.slice.call(arguments,1))
}else{f.error("Method "+I+" does not exist on jQuery.swipe")
}}else{if(G&&typeof I==="object"){G.option.apply(this,arguments)
}else{if(!G&&(typeof I==="object"||!I)){return x.apply(this,arguments)
}}}return H
};
f.fn.swipe.version=z;
f.fn.swipe.defaults=n;
f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};
f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:y,IN:c,OUT:B};
f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:F,VERTICAL:v,AUTO:s};
f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};
function x(G){if(G&&(G.allowPageScroll===undefined&&(G.swipe!==undefined||G.swipeStatus!==undefined))){G.allowPageScroll=m
}if(G.click!==undefined&&G.tap===undefined){G.tap=G.click
}if(!G){G={}
}G=f.extend({},f.fn.swipe.defaults,G);
return this.each(function(){var I=f(this);
var H=I.data(D);
if(!H){H=new E(this,G);
I.data(D,H)
}})
}function E(a5,av){var av=f.extend({},av);
var aA=(a||d||!av.fallbackToMouseEvents),L=aA?(d?(w?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=aA?(d?(w?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",W=aA?(d?(w?"MSPointerUp":"pointerup"):"touchend"):"mouseup",U=aA?null:"mouseleave",aE=(d?(w?"MSPointerCancel":"pointercancel"):"touchcancel");
var ah=0,aQ=null,ad=0,a2=0,a0=0,I=1,aq=0,aK=0,O=null;
var aS=f(a5);
var ab="start";
var Y=0;
var aR={};
var V=0,a3=0,a6=0,az=0,P=0;
var aX=null,ag=null;
try{aS.bind(L,aO);
aS.bind(aE,ba)
}catch(ak){f.error("events not supported "+L+","+aE+" on jQuery.swipe")
}this.enable=function(){aS.bind(L,aO);
aS.bind(aE,ba);
return aS
};
this.disable=function(){aL();
return aS
};
this.destroy=function(){aL();
aS.data(D,null);
aS=null
};
this.option=function(bd,bc){if(typeof bd==="object"){av=f.extend(av,bd)
}else{if(av[bd]!==undefined){if(bc===undefined){return av[bd]
}else{av[bd]=bc
}}else{if(!bd){return av
}else{f.error("Option "+bd+" does not exist on jQuery.swipe.options")
}}}return null
};
function aO(be){if(aC()){return
}if(f(be.target).closest(av.excludedElements,aS).length>0){return
}var bf=be.originalEvent?be.originalEvent:be;
var bd,bg=bf.touches,bc=bg?bg[0]:bf;
ab=g;
if(bg){Y=bg.length
}else{if(av.preventDefaultEvents!==false){be.preventDefault()
}}ah=0;
aQ=null;
aK=null;
ad=0;
a2=0;
a0=0;
I=1;
aq=0;
O=ac();
T();
aj(0,bc);
if(!bg||(Y===av.fingers||av.fingers===i)||aY()){V=at();
if(Y==2){aj(1,bg[1]);
a2=a0=au(aR[0].start,aR[1].start)
}if(av.swipeStatus||av.pinchStatus){bd=Q(bf,ab)
}}else{bd=false
}if(bd===false){ab=q;
Q(bf,ab);
return bd
}else{if(av.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);
if(av.hold){bd=av.hold.call(aS,bf,bf.target)
}},this),av.longTapThreshold)
}ao(true)
}return null
}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;
if(ab===h||ab===q||am()){return
}var be,bj=bi.touches,bd=bj?bj[0]:bi;
var bg=aI(bd);
a3=at();
if(bj){Y=bj.length
}if(av.hold){clearTimeout(ag)
}ab=k;
if(Y==2){if(a2==0){aj(1,bj[1]);
a2=a0=au(aR[0].start,aR[1].start)
}else{aI(bj[1]);
a0=au(aR[0].end,aR[1].end);
aK=ar(aR[0].end,aR[1].end)
}I=a8(a2,a0);
aq=Math.abs(a2-a0)
}if((Y===av.fingers||av.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);
al(bf,aQ);
ah=aT(bg.start,bg.end);
ad=aN();
aJ(aQ,ah);
if(av.swipeStatus||av.pinchStatus){be=Q(bi,ab)
}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bc=true;
if(av.triggerOnTouchLeave){var bh=aZ(this);
bc=G(bg.end,bh)
}if(!av.triggerOnTouchEnd&&bc){ab=aD(k)
}else{if(av.triggerOnTouchLeave&&!bc){ab=aD(h)
}}if(ab==q||ab==h){Q(bi,ab)
}}}else{ab=q;
Q(bi,ab)
}if(be===false){ab=q;
Q(bi,ab)
}}function N(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;
if(be){if(be.length&&!am()){H();
return true
}else{if(be.length&&am()){return true
}}}if(am()){Y=az
}a3=at();
ad=aN();
if(bb()||!an()){ab=q;
Q(bd,ab)
}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&ab===k)){if(av.preventDefaultEvents!==false){bc.preventDefault()
}ab=h;
Q(bd,ab)
}else{if(!av.triggerOnTouchEnd&&a7()){ab=h;
aG(bd,ab,C)
}else{if(ab===k){ab=q;
Q(bd,ab)
}}}}ao(false);
return null
}function ba(){Y=0;
a3=0;
V=0;
a2=0;
a0=0;
I=1;
T();
ao(false)
}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc;
if(av.triggerOnTouchLeave){ab=aD(h);
Q(bd,ab)
}}function aL(){aS.unbind(L,aO);
aS.unbind(aE,ba);
aS.unbind(ay,a4);
aS.unbind(W,N);
if(U){aS.unbind(U,M)
}ao(false)
}function aD(bg){var bf=bg;
var be=aB();
var bd=an();
var bc=bb();
if(!be||bc){bf=q
}else{if(bd&&bg==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){bf=h
}else{if(!bd&&bg==h&&av.triggerOnTouchLeave){bf=q
}}}return bf
}function Q(be,bc){var bd,bf=be.touches;
if((K()&&X())||(R()&&aY())){if(K()&&X()){bd=aG(be,bc,l)
}if((R()&&aY())&&bd!==false){bd=aG(be,bc,u)
}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)
}else{if(ap()&&bd!==false){bd=aG(be,bc,b)
}else{if(ai()&&bd!==false){bd=aG(be,bc,C)
}}}}if(bc===q){if(X()){bd=aG(be,bc,l)
}if(aY()){bd=aG(be,bc,u)
}ba(be)
}if(bc===h){if(bf){if(!bf.length){ba(be)
}}else{ba(be)
}}return bd
}function aG(bf,bc,be){var bd;
if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ad||0,Y,aR]);
if(av.swipeStatus){bd=av.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ad||0,Y,aR);
if(bd===false){return false
}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ad,Y,aR]);
if(av.swipe){bd=av.swipe.call(aS,bf,aQ,ah,ad,Y,aR);
if(bd===false){return false
}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ad,Y,aR]);
if(av.swipeLeft){bd=av.swipeLeft.call(aS,bf,aQ,ah,ad,Y,aR)
}break;
case o:aS.trigger("swipeRight",[aQ,ah,ad,Y,aR]);
if(av.swipeRight){bd=av.swipeRight.call(aS,bf,aQ,ah,ad,Y,aR)
}break;
case e:aS.trigger("swipeUp",[aQ,ah,ad,Y,aR]);
if(av.swipeUp){bd=av.swipeUp.call(aS,bf,aQ,ah,ad,Y,aR)
}break;
case y:aS.trigger("swipeDown",[aQ,ah,ad,Y,aR]);
if(av.swipeDown){bd=av.swipeDown.call(aS,bf,aQ,ah,ad,Y,aR)
}break
}}}if(be==u){aS.trigger("pinchStatus",[bc,aK||null,aq||0,ad||0,Y,I,aR]);
if(av.pinchStatus){bd=av.pinchStatus.call(aS,bf,bc,aK||null,aq||0,ad||0,Y,I,aR);
if(bd===false){return false
}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,aq||0,ad||0,Y,I,aR]);
if(av.pinchIn){bd=av.pinchIn.call(aS,bf,aK||null,aq||0,ad||0,Y,I,aR)
}break;
case B:aS.trigger("pinchOut",[aK||null,aq||0,ad||0,Y,I,aR]);
if(av.pinchOut){bd=av.pinchOut.call(aS,bf,aK||null,aq||0,ad||0,Y,I,aR)
}break
}}}if(be==C){if(bc===q||bc===h){clearTimeout(aX);
clearTimeout(ag);
if(aa()&&!J()){P=at();
aX=setTimeout(f.proxy(function(){P=null;
aS.trigger("tap",[bf.target]);
if(av.tap){bd=av.tap.call(aS,bf,bf.target)
}},this),av.doubleTapThreshold)
}else{P=null;
aS.trigger("tap",[bf.target]);
if(av.tap){bd=av.tap.call(aS,bf,bf.target)
}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);
P=null;
aS.trigger("doubletap",[bf.target]);
if(av.doubleTap){bd=av.doubleTap.call(aS,bf,bf.target)
}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);
P=null;
aS.trigger("longtap",[bf.target]);
if(av.longTap){bd=av.longTap.call(aS,bf,bf.target)
}}}}}return bd
}function an(){var bc=true;
if(av.threshold!==null){bc=ah>=av.threshold
}return bc
}function bb(){var bc=false;
if(av.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=av.cancelThreshold
}return bc
}function af(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold
}return true
}function aB(){var bc;
if(av.maxTimeThreshold){if(ad>=av.maxTimeThreshold){bc=false
}else{bc=true
}}else{bc=true
}return bc
}function al(bc,bd){if(av.preventDefaultEvents===false){return
}if(av.allowPageScroll===m){bc.preventDefault()
}else{var be=av.allowPageScroll===s;
switch(bd){case p:if((av.swipeLeft&&be)||(!be&&av.allowPageScroll!=F)){bc.preventDefault()
}break;
case o:if((av.swipeRight&&be)||(!be&&av.allowPageScroll!=F)){bc.preventDefault()
}break;
case e:if((av.swipeUp&&be)||(!be&&av.allowPageScroll!=v)){bc.preventDefault()
}break;
case y:if((av.swipeDown&&be)||(!be&&av.allowPageScroll!=v)){bc.preventDefault()
}break
}}}function a9(){var bd=aP();
var bc=Z();
var be=af();
return bd&&bc&&be
}function aY(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)
}function R(){return !!(a9()&&aY())
}function aW(){var bf=aB();
var bh=an();
var be=aP();
var bc=Z();
var bd=bb();
var bg=!bd&&bc&&be&&bh&&bf;
return bg
}function X(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)
}function K(){return !!(aW()&&X())
}function aP(){return((Y===av.fingers||av.fingers===i)||!a)
}function Z(){return aR[0].end.x!==0
}function a7(){return !!(av.tap)
}function aa(){return !!(av.doubleTap)
}function aV(){return !!(av.longTap)
}function S(){if(P==null){return false
}var bc=at();
return(aa()&&((bc-P)<=av.doubleTapThreshold))
}function J(){return S()
}function ax(){return((Y===1||!a)&&(isNaN(ah)||ah<av.threshold))
}function a1(){return((ad>av.longTapThreshold)&&(ah<r))
}function ai(){return !!(ax()&&a7())
}function aH(){return !!(S()&&aa())
}function ap(){return !!(a1()&&aV())
}function H(){a6=at();
az=event.touches.length+1
}function T(){a6=0;
az=0
}function am(){var bc=false;
if(a6){var bd=at()-a6;
if(bd<=av.fingerReleaseThreshold){bc=true
}}return bc
}function aC(){return !!(aS.data(D+"_intouch")===true)
}function ao(bc){if(bc===true){aS.bind(ay,a4);
aS.bind(W,N);
if(U){aS.bind(U,M)
}}else{aS.unbind(ay,a4,false);
aS.unbind(W,N,false);
if(U){aS.unbind(U,M,false)
}}aS.data(D+"_intouch",bc===true)
}function aj(be,bc){var bd={start:{x:0,y:0},end:{x:0,y:0}};
bd.start.x=bd.end.x=bc.pageX||bc.clientX;
bd.start.y=bd.end.y=bc.pageY||bc.clientY;
aR[be]=bd;
return bd
}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;
var bd=ae(be);
if(bd===null){bd=aj(be,bc)
}bd.end.x=bc.pageX||bc.clientX;
bd.end.y=bc.pageY||bc.clientY;
return bd
}function ae(bc){return aR[bc]||null
}function aJ(bc,bd){bd=Math.max(bd,aU(bc));
O[bc].distance=bd
}function aU(bc){if(O[bc]){return O[bc].distance
}return undefined
}function ac(){var bc={};
bc[p]=aw(p);
bc[o]=aw(o);
bc[e]=aw(e);
bc[y]=aw(y);
return bc
}function aw(bc){return{direction:bc,distance:0}
}function aN(){return a3-V
}function au(bf,be){var bd=Math.abs(bf.x-be.x);
var bc=Math.abs(bf.y-be.y);
return Math.round(Math.sqrt(bd*bd+bc*bc))
}function a8(bc,bd){var be=(bd/bc)*1;
return be.toFixed(2)
}function ar(){if(I<1){return B
}else{return c
}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))
}function aF(bf,bd){var bc=bf.x-bd.x;
var bh=bd.y-bf.y;
var be=Math.atan2(bh,bc);
var bg=Math.round(be*180/Math.PI);
if(bg<0){bg=360-Math.abs(bg)
}return bg
}function aM(bd,bc){var be=aF(bd,bc);
if((be<=45)&&(be>=0)){return p
}else{if((be<=360)&&(be>=315)){return p
}else{if((be>=135)&&(be<=225)){return o
}else{if((be>45)&&(be<135)){return y
}else{return e
}}}}}function at(){var bc=new Date();
return bc.getTime()
}function aZ(bc){bc=f(bc);
var be=bc.offset();
var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};
return bd
}function G(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)
}}}));
/*! Magnific Popup - v1.0.0 - 2015-09-17
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
;
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(window.jQuery||window.Zepto)
}}}(function(C){var y="Close",H="BeforeClose",w="AfterClose",N="BeforeAppend",f="MarkupParse",k="Open",h="Change",D="mfp",d="."+D,I="mfp-ready",K="mfp-removing",e="mfp-prevent-close";
var S,z=function(){},J=!!(window.jQuery),B,a=C(window),A,F,b,L;
var i=function(W,X){S.ev.on(D+W+d,X)
},n=function(aa,X,Y,W){var Z=document.createElement("div");
Z.className="mfp-"+aa;
if(Y){Z.innerHTML=Y
}if(!W){Z=C(Z);
if(X){Z.appendTo(X)
}}else{if(X){X.appendChild(Z)
}}return Z
},P=function(X,W){S.ev.triggerHandler(D+X,W);
if(S.st.callbacks){X=X.charAt(0).toLowerCase()+X.slice(1);
if(S.st.callbacks[X]){S.st.callbacks[X].apply(S,C.isArray(W)?W:[W])
}}},E=function(W){if(W!==L||!S.currTemplate.closeBtn){S.currTemplate.closeBtn=C(S.st.closeMarkup.replace("%title%",S.st.tClose));
L=W
}return S.currTemplate.closeBtn
},s=function(){if(!C.magnificPopup.instance){S=new z();
S.init();
C.magnificPopup.instance=S
}},V=function(){var X=document.createElement("p").style,W=["ms","O","Moz","Webkit"];
if(X.transition!==undefined){return true
}while(W.length){if(W.pop()+"Transition" in X){return true
}}return false
};
z.prototype={constructor:z,init:function(){var W=navigator.appVersion;
S.isIE7=W.indexOf("MSIE 7.")!==-1;
S.isIE8=W.indexOf("MSIE 8.")!==-1;
S.isLowIE=S.isIE7||S.isIE8;
S.isAndroid=(/android/gi).test(W);
S.isIOS=(/iphone|ipad|ipod/gi).test(W);
S.supportsTransition=V();
S.probablyMobile=(S.isAndroid||S.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
A=C(document);
S.popupsCache={}
},open:function(ab){var ac;
if(ab.isObj===false){S.items=ab.items.toArray();
S.index=0;
var ad=ab.items,ae;
for(ac=0;
ac<ad.length;
ac++){ae=ad[ac];
if(ae.parsed){ae=ae.el[0]
}if(ae===ab.el[0]){S.index=ac;
break
}}}else{S.items=C.isArray(ab.items)?ab.items:[ab.items];
S.index=ab.index||0
}if(S.isOpen){S.updateItemHTML();
return
}S.types=[];
b="";
if(ab.mainEl&&ab.mainEl.length){S.ev=ab.mainEl.eq(0)
}else{S.ev=A
}if(ab.key){if(!S.popupsCache[ab.key]){S.popupsCache[ab.key]={}
}S.currTemplate=S.popupsCache[ab.key]
}else{S.currTemplate={}
}S.st=C.extend(true,{},C.magnificPopup.defaults,ab);
S.fixedContentPos=S.st.fixedContentPos==="auto"?!S.probablyMobile:S.st.fixedContentPos;
if(S.st.modal){S.st.closeOnContentClick=false;
S.st.closeOnBgClick=false;
S.st.showCloseBtn=false;
S.st.enableEscapeKey=false
}if(!S.bgOverlay){S.bgOverlay=n("bg").on("click"+d,function(){S.close()
});
S.wrap=n("wrap").attr("tabindex",-1).on("click"+d,function(ag){if(S._checkIfClose(ag.target)){S.close()
}});
S.container=n("container",S.wrap)
}S.contentContainer=n("content");
if(S.st.preloader){S.preloader=n("preloader",S.container,S.st.tLoading)
}var aa=C.magnificPopup.modules;
for(ac=0;
ac<aa.length;
ac++){var Z=aa[ac];
Z=Z.charAt(0).toUpperCase()+Z.slice(1);
S["init"+Z].call(S)
}P("BeforeOpen");
if(S.st.showCloseBtn){if(!S.st.closeBtnInside){S.wrap.append(E())
}else{i(f,function(aj,ah,ag,ai){ag.close_replaceWith=E(ai.type)
});
b+=" mfp-close-btn-in"
}}if(S.st.alignTop){b+=" mfp-align-top"
}if(S.fixedContentPos){S.wrap.css({overflow:S.st.overflowY,overflowX:"hidden",overflowY:S.st.overflowY})
}else{S.wrap.css({top:a.scrollTop(),position:"absolute"})
}if(S.st.fixedBgPos===false||(S.st.fixedBgPos==="auto"&&!S.fixedContentPos)){S.bgOverlay.css({height:A.height(),position:"absolute"})
}if(S.st.enableEscapeKey){A.on("keyup"+d,function(ag){if(ag.keyCode===27){S.close()
}})
}a.on("resize"+d,function(){S.updateSize()
});
if(!S.st.closeOnContentClick){b+=" mfp-auto-cursor"
}if(b){S.wrap.addClass(b)
}var W=S.wH=a.height();
var Y={};
if(S.fixedContentPos){if(S._hasScrollBar(W)){var af=S._getScrollbarSize();
if(af){Y.marginRight=af
}}}if(S.fixedContentPos){if(!S.isIE7){Y.overflow="hidden"
}else{C("body, html").css("overflow","hidden")
}}var X=S.st.mainClass;
if(S.isIE7){X+=" mfp-ie7"
}if(X){S._addClassToMFP(X)
}S.updateItemHTML();
P("BuildControls");
C("html").css(Y);
S.bgOverlay.add(S.wrap).prependTo(S.st.prependTo||C(document.body));
S._lastFocusedEl=document.activeElement;
setTimeout(function(){if(S.content){S._addClassToMFP(I);
S._setFocus()
}else{S.bgOverlay.addClass(I)
}A.on("focusin"+d,S._onFocusIn)
},16);
S.isOpen=true;
S.updateSize(W);
P(k);
return ab
},close:function(){if(!S.isOpen){return
}P(H);
S.isOpen=false;
if(S.st.removalDelay&&!S.isLowIE&&S.supportsTransition){S._addClassToMFP(K);
setTimeout(function(){S._close()
},S.st.removalDelay)
}else{S._close()
}},_close:function(){P(y);
var W=K+" "+I+" ";
S.bgOverlay.detach();
S.wrap.detach();
S.container.empty();
if(S.st.mainClass){W+=S.st.mainClass+" "
}S._removeClassFromMFP(W);
if(S.fixedContentPos){var X={marginRight:""};
if(S.isIE7){C("body, html").css("overflow","")
}else{X.overflow=""
}C("html").css(X)
}A.off("keyup"+d+" focusin"+d);
S.ev.off(d);
S.wrap.attr("class","mfp-wrap").removeAttr("style");
S.bgOverlay.attr("class","mfp-bg");
S.container.attr("class","mfp-container");
if(S.st.showCloseBtn&&(!S.st.closeBtnInside||S.currTemplate[S.currItem.type]===true)){if(S.currTemplate.closeBtn){S.currTemplate.closeBtn.detach()
}}if(S._lastFocusedEl){C(S._lastFocusedEl).focus()
}S.currItem=null;
S.content=null;
S.currTemplate=null;
S.prevHeight=0;
P(w)
},updateSize:function(X){if(S.isIOS){var Y=document.documentElement.clientWidth/window.innerWidth;
var W=window.innerHeight*Y;
S.wrap.css("height",W);
S.wH=W
}else{S.wH=X||a.height()
}if(!S.fixedContentPos){S.wrap.css("height",S.wH)
}P("Resize")
},updateItemHTML:function(){var Z=S.items[S.index];
S.contentContainer.detach();
if(S.content){S.content.detach()
}if(!Z.parsed){Z=S.parseEl(S.index)
}var Y=Z.type;
P("BeforeChange",[S.currItem?S.currItem.type:"",Y]);
S.currItem=Z;
if(!S.currTemplate[Y]){var X=S.st[Y]?S.st[Y].markup:false;
P("FirstMarkupParse",X);
if(X){S.currTemplate[Y]=C(X)
}else{S.currTemplate[Y]=true
}}if(F&&F!==Z.type){S.container.removeClass("mfp-"+F+"-holder")
}var W=S["get"+Y.charAt(0).toUpperCase()+Y.slice(1)](Z,S.currTemplate[Y]);
S.appendContent(W,Y);
Z.preloaded=true;
P(h,Z);
F=Z.type;
S.container.prepend(S.contentContainer);
P("AfterChange")
},appendContent:function(W,X){S.content=W;
if(W){if(S.st.showCloseBtn&&S.st.closeBtnInside&&S.currTemplate[X]===true){if(!S.content.find(".mfp-close").length){S.content.append(E())
}}else{S.content=W
}}else{S.content=""
}P(N);
S.container.addClass("mfp-"+X+"-holder");
S.contentContainer.append(S.content)
},parseEl:function(W){var aa=S.items[W],Z;
if(aa.tagName){aa={el:C(aa)}
}else{Z=aa.type;
aa={data:aa,src:aa.src}
}if(aa.el){var Y=S.types;
for(var X=0;
X<Y.length;
X++){if(aa.el.hasClass("mfp-"+Y[X])){Z=Y[X];
break
}}aa.src=aa.el.attr("data-mfp-src");
if(!aa.src){aa.src=aa.el.attr("href")
}}aa.type=Z||S.st.type||"inline";
aa.index=W;
aa.parsed=true;
S.items[W]=aa;
P("ElementParse",aa);
return S.items[W]
},addGroup:function(Y,X){var Z=function(aa){aa.mfpEl=this;
S._openClick(aa,Y,X)
};
if(!X){X={}
}var W="click.magnificPopup";
X.mainEl=Y;
if(X.items){X.isObj=true;
Y.off(W).on(W,Z)
}else{X.isObj=false;
if(X.delegate){Y.off(W).on(W,X.delegate,Z)
}else{X.items=Y;
Y.off(W).on(W,Z)
}}},_openClick:function(aa,Y,W){var X=W.midClick!==undefined?W.midClick:C.magnificPopup.defaults.midClick;
if(!X&&(aa.which===2||aa.ctrlKey||aa.metaKey||aa.altKey||aa.shiftKey)){return
}var Z=W.disableOn!==undefined?W.disableOn:C.magnificPopup.defaults.disableOn;
if(Z){if(C.isFunction(Z)){if(!Z.call(S)){return true
}}else{if(a.width()<Z){return true
}}}if(aa.type){aa.preventDefault();
if(S.isOpen){aa.stopPropagation()
}}W.el=C(aa.mfpEl);
if(W.delegate){W.items=Y.find(W.delegate)
}S.open(W)
},updateStatus:function(W,Y){if(S.preloader){if(B!==W){S.container.removeClass("mfp-s-"+B)
}if(!Y&&W==="loading"){Y=S.st.tLoading
}var X={status:W,text:Y};
P("UpdateStatus",X);
W=X.status;
Y=X.text;
S.preloader.html(Y);
S.preloader.find("a").on("click",function(Z){Z.stopImmediatePropagation()
});
S.container.addClass("mfp-s-"+W);
B=W
}},_checkIfClose:function(Y){if(C(Y).hasClass(e)){return
}var W=S.st.closeOnContentClick;
var X=S.st.closeOnBgClick;
if(W&&X){return true
}else{if(!S.content||C(Y).hasClass("mfp-close")||(S.preloader&&Y===S.preloader[0])){return true
}if((Y!==S.content[0]&&!C.contains(S.content[0],Y))){if(X){if(C.contains(document,Y)){return true
}}}else{if(W){return true
}}}return false
},_addClassToMFP:function(W){S.bgOverlay.addClass(W);
S.wrap.addClass(W)
},_removeClassFromMFP:function(W){this.bgOverlay.removeClass(W);
S.wrap.removeClass(W)
},_hasScrollBar:function(W){return((S.isIE7?A.height():document.body.scrollHeight)>(W||a.height()))
},_setFocus:function(){(S.st.focus?S.content.find(S.st.focus).eq(0):S.wrap).focus()
},_onFocusIn:function(W){if(W.target!==S.wrap[0]&&!C.contains(S.wrap[0],W.target)){S._setFocus();
return false
}},_parseMarkup:function(Y,X,Z){var W;
if(Z.data){X=C.extend(Z.data,X)
}P(f,[Y,X,Z]);
C.each(X,function(ab,ad){if(ad===undefined||ad===false){return true
}W=ab.split("_");
if(W.length>1){var ac=Y.find(d+"-"+W[0]);
if(ac.length>0){var aa=W[1];
if(aa==="replaceWith"){if(ac[0]!==ad[0]){ac.replaceWith(ad)
}}else{if(aa==="img"){if(ac.is("img")){ac.attr("src",ad)
}else{ac.replaceWith('<img src="'+ad+'" class="'+ac.attr("class")+'" />')
}}else{ac.attr(W[1],ad)
}}}}else{Y.find(d+"-"+ab).html(ad)
}})
},_getScrollbarSize:function(){if(S.scrollbarSize===undefined){var W=document.createElement("div");
W.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
document.body.appendChild(W);
S.scrollbarSize=W.offsetWidth-W.clientWidth;
document.body.removeChild(W)
}return S.scrollbarSize
}};
C.magnificPopup={instance:null,proto:z.prototype,modules:[],open:function(X,W){s();
if(!X){X={}
}else{X=C.extend(true,{},X)
}X.isObj=true;
X.index=W||0;
return this.instance.open(X)
},close:function(){return C.magnificPopup.instance&&C.magnificPopup.instance.close()
},registerModule:function(W,X){if(X.options){C.magnificPopup.defaults[W]=X.options
}C.extend(this.proto,X.proto);
this.modules.push(W)
},defaults:{disableOn:0,key:null,midClick:false,mainClass:"",preloader:true,focus:"",closeOnContentClick:false,closeOnBgClick:true,closeBtnInside:true,showCloseBtn:true,enableEscapeKey:true,modal:false,alignTop:false,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}};
C.fn.magnificPopup=function(Y){s();
var Z=C(this);
if(typeof Y==="string"){if(Y==="open"){var W,aa=J?Z.data("magnificPopup"):Z[0].magnificPopup,X=parseInt(arguments[1],10)||0;
if(aa.items){W=aa.items[X]
}else{W=Z;
if(aa.delegate){W=W.find(aa.delegate)
}W=W.eq(X)
}S._openClick({mfpEl:W},Z,aa)
}else{if(S.isOpen){S[Y].apply(S,Array.prototype.slice.call(arguments,1))
}}}else{Y=C.extend(true,{},Y);
if(J){Z.data("magnificPopup",Y)
}else{Z[0].magnificPopup=Y
}S.addGroup(Z,Y)
}return Z
};
var G="inline",R,O,r,l=function(){if(r){O.after(r.addClass(R)).detach();
r=null
}};
C.magnificPopup.registerModule(G,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){S.types.push(G);
i(y+"."+G,function(){l()
})
},getInline:function(aa,Z){l();
if(aa.src){var W=S.st.inline,Y=C(aa.src);
if(Y.length){var X=Y[0].parentNode;
if(X&&X.tagName){if(!O){R=W.hiddenClass;
O=n(R);
R="mfp-"+R
}r=Y.after(O).detach().removeClass(R)
}S.updateStatus("ready")
}else{S.updateStatus("error",W.tNotFound);
Y=C("<div>")
}aa.inlineElement=Y;
return Y
}S.updateStatus("ready");
S._parseMarkup(Z,{},aa);
return Z
}}});
var u="ajax",U,v=function(){if(U){C(document.body).removeClass(U)
}},T=function(){v();
if(S.req){S.req.abort()
}};
C.magnificPopup.registerModule(u,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){S.types.push(u);
U=S.st.ajax.cursor;
i(y+"."+u,T);
i("BeforeChange."+u,T)
},getAjax:function(X){if(U){C(document.body).addClass(U)
}S.updateStatus("loading");
var W=C.extend({url:X.src,success:function(aa,ab,Z){var Y={data:aa,xhr:Z};
P("ParseAjax",Y);
S.appendContent(C(Y.data),u);
X.finished=true;
v();
S._setFocus();
setTimeout(function(){S.wrap.addClass(I)
},16);
S.updateStatus("ready");
P("AjaxContentAdded")
},error:function(){v();
X.finished=X.loadError=true;
S.updateStatus("error",S.st.ajax.tError.replace("%url%",X.src))
}},S.st.ajax.settings);
S.req=C.ajax(W);
return""
}}});
var g,c=function(W){if(W.data&&W.data.title!==undefined){return W.data.title
}var X=S.st.image.titleSrc;
if(X){if(C.isFunction(X)){return X.call(S,W)
}else{if(W.el){return W.el.attr(X)||""
}}}return""
};
C.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:true,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var X=S.st.image,W=".image";
S.types.push("image");
i(k+W,function(){if(S.currItem.type==="image"&&X.cursor){C(document.body).addClass(X.cursor)
}});
i(y+W,function(){if(X.cursor){C(document.body).removeClass(X.cursor)
}a.off("resize"+d)
});
i("Resize"+W,S.resizeImage);
if(S.isLowIE){i("AfterChange",S.resizeImage)
}},resizeImage:function(){var X=S.currItem;
if(!X||!X.img){return
}if(S.st.image.verticalFit){var W=0;
if(S.isLowIE){W=parseInt(X.img.css("padding-top"),10)+parseInt(X.img.css("padding-bottom"),10)
}X.img.css("max-height",S.wH-W)
}},_onImageHasSize:function(W){if(W.img){W.hasSize=true;
if(g){clearInterval(g)
}W.isCheckingImgSize=false;
P("ImageHasSize",W);
if(W.imgHidden){if(S.content){S.content.removeClass("mfp-loading")
}W.imgHidden=false
}}},findImageSize:function(Z){var W=0,X=Z.img[0],Y=function(aa){if(g){clearInterval(g)
}g=setInterval(function(){if(X.naturalWidth>0){S._onImageHasSize(Z);
return
}if(W>200){clearInterval(g)
}W++;
if(W===3){Y(10)
}else{if(W===40){Y(50)
}else{if(W===100){Y(500)
}}}},aa)
};
Y(1)
},getImage:function(ac,Z){var ab=0,ad=function(){if(ac){if(ac.img[0].complete){ac.img.off(".mfploader");
if(ac===S.currItem){S._onImageHasSize(ac);
S.updateStatus("ready")
}ac.hasSize=true;
ac.loaded=true;
P("ImageLoadComplete")
}else{ab++;
if(ab<200){setTimeout(ad,100)
}else{W()
}}}},W=function(){if(ac){ac.img.off(".mfploader");
if(ac===S.currItem){S._onImageHasSize(ac);
S.updateStatus("error",aa.tError.replace("%url%",ac.src))
}ac.hasSize=true;
ac.loaded=true;
ac.loadError=true
}},aa=S.st.image;
var Y=Z.find(".mfp-img");
if(Y.length){var X=document.createElement("img");
X.className="mfp-img";
if(ac.el&&ac.el.find("img").length){X.alt=ac.el.find("img").attr("alt")
}ac.img=C(X).on("load.mfploader",ad).on("error.mfploader",W);
X.src=ac.src;
if(Y.is("img")){ac.img=ac.img.clone()
}X=ac.img[0];
if(X.naturalWidth>0){ac.hasSize=true
}else{if(!X.width){ac.hasSize=false
}}}S._parseMarkup(Z,{title:c(ac),img_replaceWith:ac.img},ac);
S.resizeImage();
if(ac.hasSize){if(g){clearInterval(g)
}if(ac.loadError){Z.addClass("mfp-loading");
S.updateStatus("error",aa.tError.replace("%url%",ac.src))
}else{Z.removeClass("mfp-loading");
S.updateStatus("ready")
}return Z
}S.updateStatus("loading");
ac.loading=true;
if(!ac.hasSize){ac.imgHidden=true;
Z.addClass("mfp-loading");
S.findImageSize(ac)
}return Z
}}});
var j,M=function(){if(j===undefined){j=document.createElement("p").style.MozTransform!==undefined
}return j
};
C.magnificPopup.registerModule("zoom",{options:{enabled:false,easing:"ease-in-out",duration:300,opener:function(W){return W.is("img")?W:W.find("img")
}},proto:{initZoom:function(){var X=S.st.zoom,aa=".zoom",ad;
if(!X.enabled||!S.supportsTransition){return
}var ac=X.duration,ab=function(ag){var af=ag.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),ah="all "+(X.duration/1000)+"s "+X.easing,ai={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},ae="transition";
ai["-webkit-"+ae]=ai["-moz-"+ae]=ai["-o-"+ae]=ai[ae]=ah;
af.css(ai);
return af
},W=function(){S.content.css("visibility","visible")
},Y,Z;
i("BuildControls"+aa,function(){if(S._allowZoom()){clearTimeout(Y);
S.content.css("visibility","hidden");
ad=S._getItemToZoom();
if(!ad){W();
return
}Z=ab(ad);
Z.css(S._getOffset());
S.wrap.append(Z);
Y=setTimeout(function(){Z.css(S._getOffset(true));
Y=setTimeout(function(){W();
setTimeout(function(){Z.remove();
ad=Z=null;
P("ZoomAnimationEnded")
},16)
},ac)
},16)
}});
i(H+aa,function(){if(S._allowZoom()){clearTimeout(Y);
S.st.removalDelay=ac;
if(!ad){ad=S._getItemToZoom();
if(!ad){return
}Z=ab(ad)
}Z.css(S._getOffset(true));
S.wrap.append(Z);
S.content.css("visibility","hidden");
setTimeout(function(){Z.css(S._getOffset())
},16)
}});
i(y+aa,function(){if(S._allowZoom()){W();
if(Z){Z.remove()
}ad=null
}})
},_allowZoom:function(){return S.currItem.type==="image"
},_getItemToZoom:function(){if(S.currItem.hasSize){return S.currItem.img
}else{return false
}},_getOffset:function(Y){var W;
if(Y){W=S.currItem.img
}else{W=S.st.zoom.opener(S.currItem.el||S.currItem)
}var ab=W.offset();
var X=parseInt(W.css("padding-top"),10);
var aa=parseInt(W.css("padding-bottom"),10);
ab.top-=(C(window).scrollTop()-X);
var Z={width:W.width(),height:(J?W.innerHeight():W[0].offsetHeight)-aa-X};
if(M()){Z["-moz-transform"]=Z.transform="translate("+ab.left+"px,"+ab.top+"px)"
}else{Z.left=ab.left;
Z.top=ab.top
}return Z
}}});
var q="iframe",p="//about:blank",Q=function(W){if(S.currTemplate[q]){var X=S.currTemplate[q].find("iframe");
if(X.length){if(!W){X[0].src=p
}if(S.isIE8){X.css("display",W?"block":"none")
}}}};
C.magnificPopup.registerModule(q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){S.types.push(q);
i("BeforeChange",function(Y,W,X){if(W!==X){if(W===q){Q()
}else{if(X===q){Q(true)
}}}});
i(y+"."+q,function(){Q()
})
},getIframe:function(aa,Z){var W=aa.src;
var Y=S.st.iframe;
C.each(Y.patterns,function(){if(W.indexOf(this.index)>-1){if(this.id){if(typeof this.id==="string"){W=W.substr(W.lastIndexOf(this.id)+this.id.length,W.length)
}else{W=this.id.call(this,W)
}}W=this.src.replace("%id%",W);
return false
}});
var X={};
if(Y.srcAction){X[Y.srcAction]=W
}S._parseMarkup(Z,X,aa);
S.updateStatus("ready");
return Z
}}});
var x=function(W){var X=S.items.length;
if(W>X-1){return W-X
}else{if(W<0){return X+W
}}return W
},o=function(Y,X,W){return Y.replace(/%curr%/gi,X+1).replace(/%total%/gi,W)
};
C.magnificPopup.registerModule("gallery",{options:{enabled:false,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:true,arrows:true,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var W=S.st.gallery,Y=".mfp-gallery",X=Boolean(C.fn.mfpFastClick);
S.direction=true;
if(!W||!W.enabled){return false
}b+=" mfp-gallery";
i(k+Y,function(){if(W.navigateByImgClick){S.wrap.on("click"+Y,".mfp-img",function(){if(S.items.length>1){S.next();
return false
}})
}A.on("keydown"+Y,function(Z){if(Z.keyCode===37){S.prev()
}else{if(Z.keyCode===39){S.next()
}}})
});
i("UpdateStatus"+Y,function(aa,Z){if(Z.text){Z.text=o(Z.text,S.currItem.index,S.items.length)
}});
i(f+Y,function(ad,ab,aa,ac){var Z=S.items.length;
aa.counter=Z>1?o(W.tCounter,ac.index,Z):""
});
i("BuildControls"+Y,function(){if(S.items.length>1&&W.arrows&&!S.arrowLeft){var ab=W.arrowMarkup,ac=S.arrowLeft=C(ab.replace(/%title%/gi,W.tPrev).replace(/%dir%/gi,"left")).addClass(e),aa=S.arrowRight=C(ab.replace(/%title%/gi,W.tNext).replace(/%dir%/gi,"right")).addClass(e);
var Z=X?"mfpFastClick":"click";
ac[Z](function(){S.prev()
});
aa[Z](function(){S.next()
});
if(S.isIE7){n("b",ac[0],false,true);
n("a",ac[0],false,true);
n("b",aa[0],false,true);
n("a",aa[0],false,true)
}S.container.append(ac.add(aa))
}});
i(h+Y,function(){if(S._preloadTimeout){clearTimeout(S._preloadTimeout)
}S._preloadTimeout=setTimeout(function(){S.preloadNearbyImages();
S._preloadTimeout=null
},16)
});
i(y+Y,function(){A.off(Y);
S.wrap.off("click"+Y);
if(S.arrowLeft&&X){S.arrowLeft.add(S.arrowRight).destroyMfpFastClick()
}S.arrowRight=S.arrowLeft=null
})
},next:function(){S.direction=true;
S.index=x(S.index+1);
S.updateItemHTML()
},prev:function(){S.direction=false;
S.index=x(S.index-1);
S.updateItemHTML()
},goTo:function(W){S.direction=(W>=S.index);
S.index=W;
S.updateItemHTML()
},preloadNearbyImages:function(){var Z=S.st.gallery.preload,X=Math.min(Z[0],S.items.length),Y=Math.min(Z[1],S.items.length),W;
for(W=1;
W<=(S.direction?Y:X);
W++){S._preloadItem(S.index+W)
}for(W=1;
W<=(S.direction?X:Y);
W++){S._preloadItem(S.index-W)
}},_preloadItem:function(W){W=x(W);
if(S.items[W].preloaded){return
}var X=S.items[W];
if(!X.parsed){X=S.parseEl(W)
}P("LazyLoad",X);
if(X.type==="image"){X.img=C('<img class="mfp-img" />').on("load.mfploader",function(){X.hasSize=true
}).on("error.mfploader",function(){X.hasSize=true;
X.loadError=true;
P("LazyLoadError",X)
}).attr("src",X.src)
}X.preloaded=true
}}});
var m="retina";
C.magnificPopup.registerModule(m,{options:{replaceSrc:function(W){return W.src.replace(/\.\w+$/,function(X){return"@2x"+X
})
},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var W=S.st.retina,X=W.ratio;
X=!isNaN(X)?X:X();
if(X>1){i("ImageHasSize."+m,function(Z,Y){Y.img.css({"max-width":Y.img[0].naturalWidth/X,width:"100%"})
});
i("ElementParse."+m,function(Z,Y){Y.src=W.replaceSrc(Y,X)
})
}}}}});
(function(){var X=1000,Z="ontouchstart" in window,aa=function(){a.off("touchmove"+Y+" touchend"+Y)
},W="mfpFastClick",Y="."+W;
C.fn.mfpFastClick=function(ab){return C(this).each(function(){var ai=C(this),ah;
if(Z){var aj,ae,ad,ag,ac,af;
ai.on("touchstart"+Y,function(ak){ag=false;
af=1;
ac=ak.originalEvent?ak.originalEvent.touches[0]:ak.touches[0];
ae=ac.clientX;
ad=ac.clientY;
a.on("touchmove"+Y,function(al){ac=al.originalEvent?al.originalEvent.touches:al.touches;
af=ac.length;
ac=ac[0];
if(Math.abs(ac.clientX-ae)>10||Math.abs(ac.clientY-ad)>10){ag=true;
aa()
}}).on("touchend"+Y,function(al){aa();
if(ag||af>1){return
}ah=true;
al.preventDefault();
clearTimeout(aj);
aj=setTimeout(function(){ah=false
},X);
ab()
})
})
}ai.on("click"+Y,function(){if(!ah){ab()
}})
})
};
C.fn.destroyMfpFastClick=function(){C(this).off("touchstart"+Y+" click"+Y);
if(Z){a.off("touchmove"+Y+" touchend"+Y)
}}
})();
s()
}));
(function(j,d){if(j.fn.dotdotdot){return
}j.fn.dotdotdot=function(y){if(this.length==0){j.fn.dotdotdot.debug('No element found for "'+this.selector+'".');
return this
}if(this.length>1){return this.each(function(){j(this).dotdotdot(y)
})
}var u=this;
if(u.data("dotdotdot")){u.trigger("destroy.dot")
}u.data("dotdotdot-style",u.attr("style")||"");
u.css("word-wrap","break-word");
if(u.css("white-space")==="nowrap"){u.css("white-space","normal")
}u.bind_events=function(){u.bind("update.dot",function(B,D){B.preventDefault();
B.stopPropagation();
w.maxHeight=(typeof w.height=="number")?w.height:q(u);
w.maxHeight+=w.tolerance;
if(typeof D!="undefined"){if(typeof D=="string"||D instanceof HTMLElement){D=j("<div />").append(D).contents()
}if(D instanceof j){z=D
}}v=u.wrapInner('<div class="dotdotdot" />').children();
v.contents().detach().end().append(z.clone(true)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});
var C=false,A=false;
if(s.afterElement){C=s.afterElement.clone(true);
C.show();
s.afterElement.detach()
}if(m(v,w)){if(w.wrap=="children"){A=c(v,w,C)
}else{A=o(v,u,v,w,C)
}}v.replaceWith(v.contents());
v=null;
if(j.isFunction(w.callback)){w.callback.call(u[0],A,z)
}s.isTruncated=A;
return A
}).bind("isTruncated.dot",function(B,A){B.preventDefault();
B.stopPropagation();
if(typeof A=="function"){A.call(u[0],s.isTruncated)
}return s.isTruncated
}).bind("originalContent.dot",function(B,A){B.preventDefault();
B.stopPropagation();
if(typeof A=="function"){A.call(u[0],z)
}return z
}).bind("destroy.dot",function(A){A.preventDefault();
A.stopPropagation();
u.unwatch().unbind_events().contents().detach().end().append(z).attr("style",u.data("dotdotdot-style")||"").data("dotdotdot",false)
});
return u
};
u.unbind_events=function(){u.unbind(".dot");
return u
};
u.watch=function(){u.unwatch();
if(w.watch=="window"){var C=j(window),B=C.width(),A=C.height();
C.bind("resize.dot"+s.dotId,function(){if(B!=C.width()||A!=C.height()||!w.windowResizeFix){B=C.width();
A=C.height();
if(r){clearInterval(r)
}r=setTimeout(function(){u.trigger("update.dot")
},100)
}})
}else{x=l(u);
r=setInterval(function(){if(u.is(":visible")){var D=l(u);
if(x.width!=D.width||x.height!=D.height){u.trigger("update.dot");
x=D
}}},500)
}return u
};
u.unwatch=function(){j(window).unbind("resize.dot"+s.dotId);
if(r){clearInterval(r)
}return u
};
var z=u.contents(),w=j.extend(true,{},j.fn.dotdotdot.defaults,y),s={},x={},r=null,v=null;
if(!(w.lastCharacter.remove instanceof Array)){w.lastCharacter.remove=j.fn.dotdotdot.defaultArrays.lastCharacter.remove
}if(!(w.lastCharacter.noEllipsis instanceof Array)){w.lastCharacter.noEllipsis=j.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis
}s.afterElement=b(w.after,u);
s.isTruncated=false;
s.dotId=n++;
u.data("dotdotdot",true).bind_events().trigger("update.dot");
if(w.watch){u.watch()
}return u
};
j.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:true,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:false,windowResizeFix:true};
j.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","\u3000",",",";",".","!","?"],noEllipsis:[]}};
j.fn.dotdotdot.debug=function(r){};
var n=1;
function c(v,z,y){var x=v.children(),r=false;
v.empty();
for(var u=0,s=x.length;
u<s;
u++){var w=x.eq(u);
v.append(w);
if(y){v.append(y)
}if(m(v,z)){w.remove();
r=true;
break
}else{if(y){y.detach()
}}}return r
}function o(s,u,z,y,x){var r=false;
var w="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style";
var v="script, .dotdotdot-keep";
s.contents().detach().each(function(){var B=this,A=j(B);
if(typeof B=="undefined"||(B.nodeType==3&&j.trim(B.data).length==0)){return true
}else{if(A.is(v)){s.append(A)
}else{if(r){return true
}else{s.append(A);
if(x){s[s.is(w)?"after":"append"](x)
}if(m(z,y)){if(B.nodeType==3){r=e(A,u,z,y,x)
}else{r=o(A,u,z,y,x)
}if(!r){A.detach();
r=true
}}if(!r){if(x){x.detach()
}}}}}});
return r
}function e(u,w,H,x,s){var E=u[0];
if(!E){return false
}var A=i(E),r=(A.indexOf(" ")!==-1)?" ":"\u3000",C=(x.wrap=="letter")?"":r,F=A.split(C),B=-1,I=-1,D=0,v=F.length-1;
if(x.fallbackToLetter&&D==0&&v==0){C="";
F=A.split(C);
v=F.length-1
}while(D<=v&&!(D==0&&v==0)){var y=Math.floor((D+v)/2);
if(y==I){break
}I=y;
a(E,F.slice(0,I+1).join(C)+x.ellipsis);
if(!m(H,x)){B=I;
D=I
}else{v=I;
if(x.fallbackToLetter&&D==0&&v==0){C="";
F=F[0].split(C);
B=-1;
I=-1;
D=0;
v=F.length-1
}}}if(B!=-1&&!(F.length==1&&F[0].length==0)){A=g(F.slice(0,B+1).join(C),x);
a(E,A)
}else{var z=u.parent();
u.detach();
var G=(s&&s.closest(z).length)?s.length:0;
if(z.contents().length>G){E=f(z.contents().eq(-1-G),w)
}else{E=f(z,w,true);
if(!G){z.detach()
}}if(E){A=g(i(E),x);
a(E,A);
if(G&&s){j(E).parent().append(s)
}}}return true
}function m(s,r){return s.innerHeight()>r.maxHeight
}function g(r,s){while(j.inArray(r.slice(-1),s.lastCharacter.remove)>-1){r=r.slice(0,-1)
}if(j.inArray(r.slice(-1),s.lastCharacter.noEllipsis)<0){r+=s.ellipsis
}return r
}function l(r){return{width:r.innerWidth(),height:r.innerHeight()}
}function a(s,r){if(s.innerText){s.innerText=r
}else{if(s.nodeValue){s.nodeValue=r
}else{if(s.textContent){s.textContent=r
}}}}function i(r){if(r.innerText){return r.innerText
}else{if(r.nodeValue){return r.nodeValue
}else{if(r.textContent){return r.textContent
}else{return""
}}}}function k(r){do{r=r.previousSibling
}while(r&&r.nodeType!==1&&r.nodeType!==3);
return r
}function f(s,w,r){var v=s&&s[0],u;
if(v){if(!r){if(v.nodeType===3){return v
}if(j.trim(s.text())){return f(s.contents().last(),w)
}}u=k(v);
while(!u){s=s.parent();
if(s.is(w)||!s.length){return false
}u=k(s[0])
}if(u){return f(j(u),w)
}}return false
}function b(r,s){if(!r){return false
}if(typeof r==="string"){r=j(r,s);
return(r.length)?r:false
}return !r.jquery?false:r
}function q(v){var w=v.innerHeight(),u=["paddingTop","paddingBottom"];
for(var x=0,s=u.length;
x<s;
x++){var r=parseInt(v.css(u[x]),10);
if(isNaN(r)){r=0
}w-=r
}return w
}var p=j.fn.html;
j.fn.html=function(r){if(r!=d&&!j.isFunction(r)&&this.data("dotdotdot")){return this.trigger("update",[r])
}return p.apply(this,arguments)
};
var h=j.fn.text;
j.fn.text=function(r){if(r!=d&&!j.isFunction(r)&&this.data("dotdotdot")){r=j("<div />").text(r).html();
return this.trigger("update",[r])
}return h.apply(this,arguments)
}
})(jQuery);
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
;
var Handlebars=(function(){var a=(function(){var m;
function n(o){this.string=o
}n.prototype.toString=function(){return""+this.string
};
m=n;
return m
})();
var k=(function(w){var x={};
var p=w;
var y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var m=/[&<>"'`]/g;
var q=/[&<>"'`]/;
function z(A){return y[A]||"&amp;"
}function v(C,B){for(var A in B){if(Object.prototype.hasOwnProperty.call(B,A)){C[A]=B[A]
}}}x.extend=v;
var o=Object.prototype.toString;
x.toString=o;
var n=function(A){return typeof A==="function"
};
if(n(/x/)){n=function(A){return typeof A==="function"&&o.call(A)==="[object Function]"
}
}var n;
x.isFunction=n;
var u=Array.isArray||function(A){return(A&&typeof A==="object")?o.call(A)==="[object Array]":false
};
x.isArray=u;
function s(A){if(A instanceof p){return A.toString()
}else{if(!A&&A!==0){return""
}}A=""+A;
if(!q.test(A)){return A
}return A.replace(m,z)
}x.escapeExpression=s;
function r(A){if(!A&&A!==0){return true
}else{if(u(A)&&A.length===0){return true
}else{return false
}}}x.isEmpty=r;
return x
})(a);
var d=(function(){var n;
var o=["description","fileName","lineNumber","message","name","number","stack"];
function m(u,s){var q;
if(s&&s.firstLine){q=s.firstLine;
u+=" - "+q+":"+s.firstColumn
}var r=Error.prototype.constructor.call(this,u);
for(var p=0;
p<o.length;
p++){this[o[p]]=r[o[p]]
}if(q){this.lineNumber=q;
this.column=s.firstColumn
}}m.prototype=new Error();
n=m;
return n
})();
var i=(function(y,B){var A={};
var w=y;
var u=B;
var D="1.3.0";
A.VERSION=D;
var n=4;
A.COMPILER_REVISION=n;
var q={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};
A.REVISION_CHANGES=q;
var v=w.isArray,p=w.isFunction,o=w.toString,m="[object Object]";
function s(F,E){this.helpers=F||{};
this.partials=E||{};
x(this)
}A.HandlebarsEnvironment=s;
s.prototype={constructor:s,logger:z,log:r,registerHelper:function(F,G,E){if(o.call(F)===m){if(E||G){throw new u("Arg not supported with multiple helpers")
}w.extend(this.helpers,F)
}else{if(E){G.not=E
}this.helpers[F]=G
}},registerPartial:function(E,F){if(o.call(E)===m){w.extend(this.partials,E)
}else{this.partials[E]=F
}}};
function x(E){E.registerHelper("helperMissing",function(F){if(arguments.length===2){return undefined
}else{throw new u("Missing helper: '"+F+"'")
}});
E.registerHelper("blockHelperMissing",function(H,G){var F=G.inverse||function(){},I=G.fn;
if(p(H)){H=H.call(this)
}if(H===true){return I(this)
}else{if(H===false||H==null){return F(this)
}else{if(v(H)){if(H.length>0){return E.helpers.each(H,G)
}else{return F(this)
}}else{return I(H)
}}}});
E.registerHelper("grouped_each",function(K,J,H){var G="",F=[],I;
if(J&&J.length>0){for(I=0;
I<J.length;
I++){if(I==K){F.push(J[I])
}}G+=H.fn(F)
}return G
});
E.registerHelper("ifIsNthItem",function(G){var F=G.hash.index,H=G.hash.nth;
if(F%H===0){return G.fn(this)
}});
E.registerHelper("ifIsNthItem2",function(G){var F=G.hash.index,H=G.hash.nth;
if(F%H===2){return G.fn(this)
}});
E.registerHelper("ifIsNthItemCount",function(H){var G=H.hash.index,J=H.hash.last,I=H.hash.columns,F=H.hash.isStart;
if(F){if(G%I===0){return H.fn(this)
}}else{if(G%I===I-1||J){return H.fn(this)
}}});
E.registerHelper("toLowerCase",function(F){return F.toLowerCase()
});
E.registerHelper("linkifySocialText",function(K,I,H,G){var J,F;
H=(H)?H:"";
G=(G)?G:"";
I=I.toLowerCase();
switch(I){case"twitter":J="https://twitter.com/";
F="hashtag/";
break;
case"instagram":J="http://instagram.com/";
F="explore/tags/";
break;
case"facebook":J="http://facebook.com/";
F="hashtag/";
break
}K=$("<div>").html(K).text();
K=K.replace(/(>|<a[^<>]+href=['"])?(https?:\/\/([-a-z0-9]+\.)+[a-z]{2,5}(\/[-a-z0-9!#()\/?&.,]*[^ !#?().,])?)/gi,function(M,L,N){return(L?M:'<a href="'+N+'" target="_blank" >'+N+"</a>")
});
K=K.replace(/(:\/\/|>)?\b(([-a-z0-9]+\.)+[a-z]{2,5}(\/[-a-z0-9!#()\/?&.]*[^ !#?().,])?)/gi,function(M,L,N){return(L?M:'<a href="http://'+N+'" >'+N+"</a>")
});
if(J!=null){K=K.replace(/(:\/\/|>)?(@([_a-z0-9\-]+))/gi,function(M,L,O,N){return(L?M:'<a href="'+J+N+'" title="Follow '+N+'" target="_blank" >@'+N+"</a>")
});
K=K.replace(/(:\/\/[^ <]*|>)?(\#([_a-z0-9\-]+))/gi,function(M,L,O,N){return(L?M:'<a href="'+J+F+N+'" title="Search tag: '+N+'" target="_blank" >#'+N+"</a>")
})
}K=K.replace(/<a /g,"<a "+H+" ");
K=K.replace(/<a /g,"<a "+G+" ");
return K
});
E.registerHelper("compare",function(G,K,J){if(arguments.length<3){throw new Error("Handlerbars Helper 'compare' needs 2 parameters")
}var I=J.hash.operator||"==";
var H={"==":function(L,M){return L==M
},"===":function(L,M){return L===M
},"!=":function(L,M){return L!=M
},"<":function(L,M){return L<M
},">":function(L,M){return L>M
},"<=":function(L,M){return L<=M
},">=":function(L,M){return L>=M
},"||":function(L,M){return L||M
},"typeof":function(L,M){return typeof L==M
}};
if(!H[I]){throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+I)
}var F=H[I](G,K);
if(F){return J.fn(this)
}else{return J.inverse(this)
}});
E.registerHelper("each",function(F,N){var L=N.fn,H=N.inverse;
var J=0,K="",I;
if(p(F)){F=F.call(this)
}if(N.data){I=C(N.data)
}if(F&&typeof F==="object"){if(v(F)){for(var G=F.length;
J<G;
J++){if(I){I.index=J;
I.first=(J===0);
I.last=(J===(F.length-1))
}K=K+L(F[J],{data:I})
}}else{for(var M in F){if(F.hasOwnProperty(M)){if(I){I.key=M;
I.index=J;
I.first=(J===0)
}K=K+L(F[M],{data:I});
J++
}}}}if(J===0){K=H(this)
}return K
});
E.registerHelper("if",function(G,F){if(p(G)){G=G.call(this)
}if((!F.hash.includeZero&&!G)||w.isEmpty(G)){return F.inverse(this)
}else{return F.fn(this)
}});
E.registerHelper("unless",function(G,F){return E.helpers["if"].call(this,G,{fn:F.inverse,inverse:F.fn,hash:F.hash})
});
E.registerHelper("with",function(G,F){if(p(G)){G=G.call(this)
}if(!w.isEmpty(G)){return F.fn(G)
}});
E.registerHelper("log",function(G,F){var H=F.data&&F.data.level!=null?parseInt(F.data.level,10):1;
E.log(H,G)
})
}var z={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(G,E){if(z.level<=G){var F=z.methodMap[G];
if(typeof console!=="undefined"&&console[F]){console[F].call(console,E)
}}}};
A.logger=z;
function r(F,E){z.log(F,E)
}A.log=r;
var C=function(E){var F={};
w.extend(F,E);
return F
};
A.createFrame=C;
return A
})(k,d);
var g=(function(w,A,p){var y={};
var v=w;
var s=A;
var o=p.COMPILER_REVISION;
var r=p.REVISION_CHANGES;
function n(D){var C=D&&D[0]||1,F=o;
if(C!==F){if(C<F){var B=r[F],E=r[C];
throw new s("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+B+") or downgrade your runtime to an older version ("+E+").")
}else{throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+D[1]+").")
}}}y.checkRevision=n;
function x(B,E){if(!E){throw new s("No environment passed to template")
}var D=function(G,I,K,L,J,M){var F=E.VM.invokePartial.apply(this,arguments);
if(F!=null){return F
}if(E.compile){var H={helpers:L,partials:J,data:M};
J[I]=E.compile(G,{data:M!==undefined},E);
return J[I](K,H)
}else{throw new s("The partial "+I+" could not be compiled when running in runtime-only mode")
}};
var C={escapeExpression:v.escapeExpression,invokePartial:D,programs:[],program:function(G,H,I){var F=this.programs[G];
if(I){F=u(G,H,I)
}else{if(!F){F=this.programs[G]=u(G,H)
}}return F
},merge:function(H,G){var F=H||G;
if(H&&G&&(H!==G)){F={};
v.extend(F,G);
v.extend(F,H)
}return F
},programWithDepth:E.VM.programWithDepth,noop:E.VM.noop,compilerInfo:null};
return function(I,G){G=G||{};
var J=G.partial?G:E,K,H;
if(!G.partial){K=G.helpers;
H=G.partials
}var F=B.call(C,J,I,K,H,G.data);
if(!G.partial){E.VM.checkRevision(C.compilerInfo)
}return F
}
}y.template=x;
function q(C,D,E){var B=Array.prototype.slice.call(arguments,3);
var F=function(H,G){G=G||{};
return D.apply(this,[H,G.data||E].concat(B))
};
F.program=C;
F.depth=B.length;
return F
}y.programWithDepth=q;
function u(B,C,D){var E=function(G,F){F=F||{};
return C(G,F.data||D)
};
E.program=B;
E.depth=0;
return E
}y.program=u;
function m(B,D,F,G,E,H){var C={partial:true,helpers:G,partials:E,data:H};
if(B===undefined){throw new s("The partial "+D+" could not be found")
}else{if(B instanceof Function){return B(F,C)
}}}y.invokePartial=m;
function z(){return""
}y.noop=z;
return y
})(k,d,i);
var f=(function(x,z,o,s,w){var y;
var m=x;
var p=z;
var r=o;
var v=s;
var q=w;
var u=function(){var A=new m.HandlebarsEnvironment();
v.extend(A,m);
A.SafeString=p;
A.Exception=r;
A.Utils=v;
A.VM=q;
A.template=function(B){return q.template(B,A)
};
return A
};
var n=u();
n.create=u;
y=n;
return y
})(i,a,d,k,g);
var j=(function(q){var o;
var n=q;
function m(r){r=r||{};
this.firstLine=r.first_line;
this.firstColumn=r.first_column;
this.lastColumn=r.last_column;
this.lastLine=r.last_line
}var p={ProgramNode:function(u,w,s,v){var r,x;
if(arguments.length===3){v=s;
s=null
}else{if(arguments.length===2){v=w;
w=null
}}m.call(this,v);
this.type="program";
this.statements=u;
this.strip={};
if(s){x=s[0];
if(x){r={first_line:x.firstLine,last_line:x.lastLine,last_column:x.lastColumn,first_column:x.firstColumn};
this.inverse=new p.ProgramNode(s,w,r)
}else{this.inverse=new p.ProgramNode(s,w)
}this.strip.right=w.left
}else{if(w){this.strip.left=w.right
}}},MustacheNode:function(x,w,r,u,s){m.call(this,s);
this.type="mustache";
this.strip=u;
if(r!=null&&r.charAt){var v=r.charAt(3)||r.charAt(2);
this.escaped=v!=="{"&&v!=="&"
}else{this.escaped=!!r
}if(x instanceof p.SexprNode){this.sexpr=x
}else{this.sexpr=new p.SexprNode(x,w)
}this.sexpr.isRoot=true;
this.id=this.sexpr.id;
this.params=this.sexpr.params;
this.hash=this.sexpr.hash;
this.eligibleHelper=this.sexpr.eligibleHelper;
this.isHelper=this.sexpr.isHelper
},SexprNode:function(x,u,r){m.call(this,r);
this.type="sexpr";
this.hash=u;
var w=this.id=x[0];
var v=this.params=x.slice(1);
var s=this.eligibleHelper=w.isSimple;
this.isHelper=s&&(v.length||u)
},PartialNode:function(r,u,v,s){m.call(this,s);
this.type="partial";
this.partialName=r;
this.context=u;
this.strip=v
},BlockNode:function(v,s,r,w,u){m.call(this,u);
if(v.sexpr.id.original!==w.path.original){throw new n(v.sexpr.id.original+" doesn't match "+w.path.original,this)
}this.type="block";
this.mustache=v;
this.program=s;
this.inverse=r;
this.strip={left:v.strip.left,right:w.strip.right};
(s||r).strip.left=v.strip.right;
(r||s).strip.right=w.strip.left;
if(r&&!s){this.isInverse=true
}},ContentNode:function(r,s){m.call(this,s);
this.type="content";
this.string=r
},HashNode:function(s,r){m.call(this,r);
this.type="hash";
this.pairs=s
},IdNode:function(y,x){m.call(this,x);
this.type="ID";
var w="",u=[],z=0;
for(var v=0,r=y.length;
v<r;
v++){var s=y[v].part;
w+=(y[v].separator||"")+s;
if(s===".."||s==="."||s==="this"){if(u.length>0){throw new n("Invalid path: "+w,this)
}else{if(s===".."){z++
}else{this.isScoped=true
}}}else{u.push(s)
}}this.original=w;
this.parts=u;
this.string=u.join(".");
this.depth=z;
this.isSimple=y.length===1&&!this.isScoped&&z===0;
this.stringModeValue=this.string
},PartialNameNode:function(r,s){m.call(this,s);
this.type="PARTIAL_NAME";
this.name=r.original
},DataNode:function(s,r){m.call(this,r);
this.type="DATA";
this.id=s
},StringNode:function(r,s){m.call(this,s);
this.type="STRING";
this.original=this.string=this.stringModeValue=r
},IntegerNode:function(r,s){m.call(this,s);
this.type="INTEGER";
this.original=this.integer=r;
this.stringModeValue=Number(r)
},BooleanNode:function(r,s){m.call(this,s);
this.type="BOOLEAN";
this.bool=r;
this.stringModeValue=r==="true"
},CommentNode:function(s,r){m.call(this,r);
this.type="comment";
this.comment=s
}};
o=p;
return o
})(d);
var b=(function(){var n;
var m=(function(){var w={trace:function r(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function q(x,A,B,E,D,z,C){var y=z.length-1;
switch(D){case 1:return new E.ProgramNode(z[y-1],this._$);
break;
case 2:return new E.ProgramNode([],this._$);
break;
case 3:this.$=new E.ProgramNode([],z[y-1],z[y],this._$);
break;
case 4:this.$=new E.ProgramNode(z[y-2],z[y-1],z[y],this._$);
break;
case 5:this.$=new E.ProgramNode(z[y-1],z[y],[],this._$);
break;
case 6:this.$=new E.ProgramNode(z[y],this._$);
break;
case 7:this.$=new E.ProgramNode([],this._$);
break;
case 8:this.$=new E.ProgramNode([],this._$);
break;
case 9:this.$=[z[y]];
break;
case 10:z[y-1].push(z[y]);
this.$=z[y-1];
break;
case 11:this.$=new E.BlockNode(z[y-2],z[y-1].inverse,z[y-1],z[y],this._$);
break;
case 12:this.$=new E.BlockNode(z[y-2],z[y-1],z[y-1].inverse,z[y],this._$);
break;
case 13:this.$=z[y];
break;
case 14:this.$=z[y];
break;
case 15:this.$=new E.ContentNode(z[y],this._$);
break;
case 16:this.$=new E.CommentNode(z[y],this._$);
break;
case 17:this.$=new E.MustacheNode(z[y-1],null,z[y-2],o(z[y-2],z[y]),this._$);
break;
case 18:this.$=new E.MustacheNode(z[y-1],null,z[y-2],o(z[y-2],z[y]),this._$);
break;
case 19:this.$={path:z[y-1],strip:o(z[y-2],z[y])};
break;
case 20:this.$=new E.MustacheNode(z[y-1],null,z[y-2],o(z[y-2],z[y]),this._$);
break;
case 21:this.$=new E.MustacheNode(z[y-1],null,z[y-2],o(z[y-2],z[y]),this._$);
break;
case 22:this.$=new E.PartialNode(z[y-2],z[y-1],o(z[y-3],z[y]),this._$);
break;
case 23:this.$=o(z[y-1],z[y]);
break;
case 24:this.$=new E.SexprNode([z[y-2]].concat(z[y-1]),z[y],this._$);
break;
case 25:this.$=new E.SexprNode([z[y]],null,this._$);
break;
case 26:this.$=z[y];
break;
case 27:this.$=new E.StringNode(z[y],this._$);
break;
case 28:this.$=new E.IntegerNode(z[y],this._$);
break;
case 29:this.$=new E.BooleanNode(z[y],this._$);
break;
case 30:this.$=z[y];
break;
case 31:z[y-1].isHelper=true;
this.$=z[y-1];
break;
case 32:this.$=new E.HashNode(z[y],this._$);
break;
case 33:this.$=[z[y-2],z[y]];
break;
case 34:this.$=new E.PartialNameNode(z[y],this._$);
break;
case 35:this.$=new E.PartialNameNode(new E.StringNode(z[y],this._$),this._$);
break;
case 36:this.$=new E.PartialNameNode(new E.IntegerNode(z[y],this._$));
break;
case 37:this.$=new E.DataNode(z[y],this._$);
break;
case 38:this.$=new E.IdNode(z[y],this._$);
break;
case 39:z[y-2].push({part:z[y],separator:z[y-1]});
this.$=z[y-2];
break;
case 40:this.$=[{part:z[y]}];
break;
case 43:this.$=[];
break;
case 44:z[y-1].push(z[y]);
break;
case 47:this.$=[z[y]];
break;
case 48:z[y-1].push(z[y]);
break
}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function s(y,x){throw new Error(y)
},parse:function v(G){var N=this,D=[0],W=[null],I=[],X=this.table,y="",H=0,U=0,A=0,F=2,K=1;
this.lexer.setInput(G);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var z=this.lexer.yylloc;
I.push(z);
var B=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function M(Z){D.length=D.length-2*Z;
W.length=W.length-Z;
I.length=I.length-Z
}function L(){var Z;
Z=N.lexer.lex()||1;
if(typeof Z!=="number"){Z=N.symbols_[Z]||Z
}return Z
}var T,P,C,S,Y,J,R={},O,V,x,E;
while(true){C=D[D.length-1];
if(this.defaultActions[C]){S=this.defaultActions[C]
}else{if(T===null||typeof T=="undefined"){T=L()
}S=X[C]&&X[C][T]
}if(typeof S==="undefined"||!S.length||!S[0]){var Q="";
if(!A){E=[];
for(O in X[C]){if(this.terminals_[O]&&O>2){E.push("'"+this.terminals_[O]+"'")
}}if(this.lexer.showPosition){Q="Parse error on line "+(H+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[T]||T)+"'"
}else{Q="Parse error on line "+(H+1)+": Unexpected "+(T==1?"end of input":"'"+(this.terminals_[T]||T)+"'")
}this.parseError(Q,{text:this.lexer.match,token:this.terminals_[T]||T,line:this.lexer.yylineno,loc:z,expected:E})
}}if(S[0] instanceof Array&&S.length>1){throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+T)
}switch(S[0]){case 1:D.push(T);
W.push(this.lexer.yytext);
I.push(this.lexer.yylloc);
D.push(S[1]);
T=null;
if(!P){U=this.lexer.yyleng;
y=this.lexer.yytext;
H=this.lexer.yylineno;
z=this.lexer.yylloc;
if(A>0){A--
}}else{T=P;
P=null
}break;
case 2:V=this.productions_[S[1]][1];
R.$=W[W.length-V];
R._$={first_line:I[I.length-(V||1)].first_line,last_line:I[I.length-1].last_line,first_column:I[I.length-(V||1)].first_column,last_column:I[I.length-1].last_column};
if(B){R._$.range=[I[I.length-(V||1)].range[0],I[I.length-1].range[1]]
}J=this.performAction.call(R,y,U,H,this.yy,S[1],W,I);
if(typeof J!=="undefined"){return J
}if(V){D=D.slice(0,-1*V*2);
W=W.slice(0,-1*V);
I=I.slice(0,-1*V)
}D.push(this.productions_[S[1]][0]);
W.push(R.$);
I.push(R._$);
x=X[D[D.length-2]][D[D.length-1]];
D.push(x);
break;
case 3:return true
}}return true
}};
function o(x,y){return{left:x.charAt(2)==="~",right:y.charAt(0)==="~"||y.charAt(1)==="~"}
}var p=(function(){var A=({EOF:1,parseError:function C(F,E){if(this.yy.parser){this.yy.parser.parseError(F,E)
}else{throw new Error(F)
}},setInput:function(E){this._input=E;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function(){var F=this._input[0];
this.yytext+=F;
this.yyleng++;
this.offset++;
this.match+=F;
this.matched+=F;
var E=F.match(/(?:\r\n?|\n).*/g);
if(E){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return F
},unput:function(G){var E=G.length;
var F=G.split(/(?:\r\n?|\n)/g);
this._input=G+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-E-1);
this.offset-=E;
var I=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(F.length-1){this.yylineno-=F.length-1
}var H=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:F?(F.length===I.length?this.yylloc.first_column:0)+I[I.length-F.length].length-F[0].length:this.yylloc.first_column-E};
if(this.options.ranges){this.yylloc.range=[H[0],H[0]+this.yyleng-E]
}return this
},more:function(){this._more=true;
return this
},less:function(E){this.unput(this.match.slice(E))
},pastInput:function(){var E=this.matched.substr(0,this.matched.length-this.match.length);
return(E.length>20?"...":"")+E.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var E=this.match;
if(E.length<20){E+=this._input.substr(0,20-E.length)
}return(E.substr(0,20)+(E.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var E=this.pastInput();
var F=new Array(E.length+1).join("-");
return E+this.upcomingInput()+"\n"+F+"^"
},next:function(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var K,I,F,H,G,E;
if(!this._more){this.yytext="";
this.match=""
}var L=this._currentRules();
for(var J=0;
J<L.length;
J++){F=this._input.match(this.rules[L[J]]);
if(F&&(!I||F[0].length>I[0].length)){I=F;
H=J;
if(!this.options.flex){break
}}}if(I){E=I[0].match(/(?:\r\n?|\n).*/g);
if(E){this.yylineno+=E.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:E?E[E.length-1].length-E[E.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+I[0].length};
this.yytext+=I[0];
this.match+=I[0];
this.matches=I;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(I[0].length);
this.matched+=I[0];
K=this.performAction.call(this,this.yy,this,L[H],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(K){return K
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function x(){var E=this.next();
if(typeof E!=="undefined"){return E
}else{return this.lex()
}},begin:function y(E){this.conditionStack.push(E)
},popState:function D(){return this.conditionStack.pop()
},_currentRules:function B(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function y(E){this.begin(E)
}});
A.options={};
A.performAction=function z(J,F,I,E){function G(L,K){return F.yytext=F.yytext.substr(L,F.yyleng-K)
}var H=E;
switch(I){case 0:if(F.yytext.slice(-2)==="\\\\"){G(0,1);
this.begin("mu")
}else{if(F.yytext.slice(-1)==="\\"){G(0,1);
this.begin("emu")
}else{this.begin("mu")
}}if(F.yytext){return 14
}break;
case 1:return 14;
break;
case 2:this.popState();
return 14;
break;
case 3:G(0,4);
this.popState();
return 15;
break;
case 4:return 35;
break;
case 5:return 36;
break;
case 6:return 25;
break;
case 7:return 16;
break;
case 8:return 20;
break;
case 9:return 19;
break;
case 10:return 19;
break;
case 11:return 23;
break;
case 12:return 22;
break;
case 13:this.popState();
this.begin("com");
break;
case 14:G(3,5);
this.popState();
return 15;
break;
case 15:return 22;
break;
case 16:return 41;
break;
case 17:return 40;
break;
case 18:return 40;
break;
case 19:return 44;
break;
case 20:break;
case 21:this.popState();
return 24;
break;
case 22:this.popState();
return 18;
break;
case 23:F.yytext=G(1,2).replace(/\\"/g,'"');
return 32;
break;
case 24:F.yytext=G(1,2).replace(/\\'/g,"'");
return 32;
break;
case 25:return 42;
break;
case 26:return 34;
break;
case 27:return 34;
break;
case 28:return 33;
break;
case 29:return 40;
break;
case 30:F.yytext=G(1,2);
return 40;
break;
case 31:return"INVALID";
break;
case 32:return 5;
break
}};
A.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
A.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};
return A
})();
w.lexer=p;
function u(){this.yy={}
}u.prototype=w;
w.Parser=u;
return new u
})();
n=m;
return n
})();
var l=(function(q,m){var n={};
var r=q;
var o=m;
n.parser=r;
function p(s){if(s.constructor===o.ProgramNode){return s
}r.yy=o;
return r.parse(s)
}n.parse=p;
return n
})(b,j);
var e=(function(r){var q={};
var m=r;
function o(){}q.Compiler=o;
o.prototype={compiler:o,disassemble:function(){var y=this.opcodes,x,v=[],A,z;
for(var w=0,s=y.length;
w<s;
w++){x=y[w];
if(x.opcode==="DECLARE"){v.push("DECLARE "+x.name+"="+x.value)
}else{A=[];
for(var u=0;
u<x.args.length;
u++){z=x.args[u];
if(typeof z==="string"){z='"'+z.replace("\n","\\n")+'"'
}A.push(z)
}v.push(x.opcode+" "+A.join(" "))
}}return v.join("\n")
},equals:function(u){var s=this.opcodes.length;
if(u.opcodes.length!==s){return false
}for(var x=0;
x<s;
x++){var y=this.opcodes[x],v=u.opcodes[x];
if(y.opcode!==v.opcode||y.args.length!==v.args.length){return false
}for(var w=0;
w<y.args.length;
w++){if(y.args[w]!==v.args[w]){return false
}}}s=this.children.length;
if(u.children.length!==s){return false
}for(x=0;
x<s;
x++){if(!this.children[x].equals(u.children[x])){return false
}}return true
},guid:0,compile:function(s,v){this.opcodes=[];
this.children=[];
this.depths={list:[]};
this.options=v;
var w=this.options.knownHelpers;
this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};
if(w){for(var u in w){this.options.knownHelpers[u]=w[u]
}}return this.accept(s)
},accept:function(v){var u=v.strip||{},s;
if(u.left){this.opcode("strip")
}s=this[v.type](v);
if(u.right){this.opcode("strip")
}return s
},program:function(v){var u=v.statements;
for(var w=0,s=u.length;
w<s;
w++){this.accept(u[w])
}this.isSimple=s===1;
this.depths.list=this.depths.list.sort(function(y,x){return y-x
});
return this
},compileProgram:function(v){var s=new this.compiler().compile(v,this.options);
var w=this.guid++,y;
this.usePartial=this.usePartial||s.usePartial;
this.children[w]=s;
for(var x=0,u=s.depths.list.length;
x<u;
x++){y=s.depths.list[x];
if(y<2){continue
}else{this.addDepth(y-1)
}}return w
},block:function(y){var x=y.mustache,u=y.program,s=y.inverse;
if(u){u=this.compileProgram(u)
}if(s){s=this.compileProgram(s)
}var w=x.sexpr;
var v=this.classifySexpr(w);
if(v==="helper"){this.helperSexpr(w,u,s)
}else{if(v==="simple"){this.simpleSexpr(w);
this.opcode("pushProgram",u);
this.opcode("pushProgram",s);
this.opcode("emptyHash");
this.opcode("blockValue")
}else{this.ambiguousSexpr(w,u,s);
this.opcode("pushProgram",u);
this.opcode("pushProgram",s);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},hash:function(w){var v=w.pairs,y,x;
this.opcode("pushHash");
for(var u=0,s=v.length;
u<s;
u++){y=v[u];
x=y[1];
if(this.options.stringParams){if(x.depth){this.addDepth(x.depth)
}this.opcode("getContext",x.depth||0);
this.opcode("pushStringParam",x.stringModeValue,x.type);
if(x.type==="sexpr"){this.sexpr(x)
}}else{this.accept(x)
}this.opcode("assignToHash",y[0])
}this.opcode("popHash")
},partial:function(s){var u=s.partialName;
this.usePartial=true;
if(s.context){this.ID(s.context)
}else{this.opcode("push","depth0")
}this.opcode("invokePartial",u.name);
this.opcode("append")
},content:function(s){this.opcode("appendContent",s.string)
},mustache:function(s){this.sexpr(s.sexpr);
if(s.escaped&&!this.options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},ambiguousSexpr:function(x,v,u){var y=x.id,w=y.parts[0],s=v!=null||u!=null;
this.opcode("getContext",y.depth);
this.opcode("pushProgram",v);
this.opcode("pushProgram",u);
this.opcode("invokeAmbiguous",w,s)
},simpleSexpr:function(s){var u=s.id;
if(u.type==="DATA"){this.DATA(u)
}else{if(u.parts.length){this.ID(u)
}else{this.addDepth(u.depth);
this.opcode("getContext",u.depth);
this.opcode("pushContext")
}}this.opcode("resolvePossibleLambda")
},helperSexpr:function(w,u,s){var x=this.setupFullMustacheParams(w,u,s),v=w.id.parts[0];
if(this.options.knownHelpers[v]){this.opcode("invokeKnownHelper",x.length,v)
}else{if(this.options.knownHelpersOnly){throw new m("You specified knownHelpersOnly, but used the unknown helper "+v,w)
}else{this.opcode("invokeHelper",x.length,v,w.isRoot)
}}},sexpr:function(u){var s=this.classifySexpr(u);
if(s==="simple"){this.simpleSexpr(u)
}else{if(s==="helper"){this.helperSexpr(u)
}else{this.ambiguousSexpr(u)
}}},ID:function(w){this.addDepth(w.depth);
this.opcode("getContext",w.depth);
var u=w.parts[0];
if(!u){this.opcode("pushContext")
}else{this.opcode("lookupOnContext",w.parts[0])
}for(var v=1,s=w.parts.length;
v<s;
v++){this.opcode("lookup",w.parts[v])
}},DATA:function(v){this.options.data=true;
if(v.id.isScoped||v.id.depth){throw new m("Scoped data references are not supported: "+v.original,v)
}this.opcode("lookupData");
var w=v.id.parts;
for(var u=0,s=w.length;
u<s;
u++){this.opcode("lookup",w[u])
}},STRING:function(s){this.opcode("pushString",s.string)
},INTEGER:function(s){this.opcode("pushLiteral",s.integer)
},BOOLEAN:function(s){this.opcode("pushLiteral",s.bool)
},comment:function(){},opcode:function(s){this.opcodes.push({opcode:s,args:[].slice.call(arguments,1)})
},declare:function(s,u){this.opcodes.push({opcode:"DECLARE",name:s,value:u})
},addDepth:function(s){if(s===0){return
}if(!this.depths[s]){this.depths[s]=true;
this.depths.list.push(s)
}},classifySexpr:function(w){var v=w.isHelper;
var x=w.eligibleHelper;
var u=this.options;
if(x&&!v){var s=w.id.parts[0];
if(u.knownHelpers[s]){v=true
}else{if(u.knownHelpersOnly){x=false
}}}if(v){return"helper"
}else{if(x){return"ambiguous"
}else{return"simple"
}}},pushParams:function(v){var s=v.length,u;
while(s--){u=v[s];
if(this.options.stringParams){if(u.depth){this.addDepth(u.depth)
}this.opcode("getContext",u.depth||0);
this.opcode("pushStringParam",u.stringModeValue,u.type);
if(u.type==="sexpr"){this.sexpr(u)
}}else{this[u.type](u)
}}},setupFullMustacheParams:function(v,u,s){var w=v.params;
this.pushParams(w);
this.opcode("pushProgram",u);
this.opcode("pushProgram",s);
if(v.hash){this.hash(v.hash)
}else{this.opcode("emptyHash")
}return w
}};
function n(v,w,x){if(v==null||(typeof v!=="string"&&v.constructor!==x.AST.ProgramNode)){throw new m("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+v)
}w=w||{};
if(!("data" in w)){w.data=true
}var u=x.parse(v);
var s=new x.Compiler().compile(u,w);
return new x.JavaScriptCompiler().compile(s,w)
}q.precompile=n;
function p(s,u,v){if(s==null||(typeof s!=="string"&&s.constructor!==v.AST.ProgramNode)){throw new m("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+s)
}u=u||{};
if(!("data" in u)){u.data=true
}var x;
function w(){var A=v.parse(s);
var z=new v.Compiler().compile(A,u);
var y=new v.JavaScriptCompiler().compile(z,u,undefined,true);
return v.template(y)
}return function(z,y){if(!x){x=w()
}return x.call(this,z,y)
}
}q.compile=p;
return q
})(d);
var h=(function(v,y){var x;
var m=v.COMPILER_REVISION;
var q=v.REVISION_CHANGES;
var r=v.log;
var s=y;
function o(A){this.value=A
}function z(){}z.prototype={nameLookup:function(D,B){var C,A;
if(D.indexOf("depth")===0){C=true
}if(/^[0-9]+$/.test(B)){A=D+"["+B+"]"
}else{if(z.isValidJavaScriptVariableName(B)){A=D+"."+B
}else{A=D+"['"+B+"']"
}}if(C){return"("+D+" && "+A+")"
}else{return A
}},compilerInfo:function(){var B=m,A=q[B];
return"this.compilerInfo = ["+B+",'"+A+"'];\n"
},appendToBuffer:function(A){if(this.environment.isSimple){return"return "+A+";"
}else{return{appendToBuffer:true,content:A,toString:function(){return"buffer += "+A+";"
}}
}},initializeBuffer:function(){return this.quotedString("")
},namespace:"Handlebars",compile:function(A,C,E,D){this.environment=A;
this.options=C||{};
r("debug",this.environment.disassemble()+"\n\n");
this.name=this.environment.name;
this.isChild=!!E;
this.context=E||{programs:[],environments:[],aliases:{}};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.registers={list:[]};
this.hashes=[];
this.compileStack=[];
this.inlineStack=[];
this.compileChildren(A,C);
var G=A.opcodes,F;
this.i=0;
for(var B=G.length;
this.i<B;
this.i++){F=G[this.i];
if(F.opcode==="DECLARE"){this[F.name]=F.value
}else{this[F.opcode].apply(this,F.args)
}if(F.opcode!==this.stripNext){this.stripNext=false
}}this.pushSource("");
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new s("Compile completed with content left on stack")
}return this.createFunctionContext(D)
},preamble:function(){var A=[];
if(!this.isChild){var B=this.namespace;
var C="helpers = this.merge(helpers, "+B+".helpers);";
if(this.environment.usePartial){C=C+" partials = this.merge(partials, "+B+".partials);"
}if(this.options.data){C=C+" data = data || {};"
}A.push(C)
}else{A.push("")
}if(!this.environment.isSimple){A.push(", buffer = "+this.initializeBuffer())
}else{A.push("")
}this.lastContext=0;
this.source=A
},createFunctionContext:function(E){var G=this.stackVars.concat(this.registers.list);
if(G.length>0){this.source[1]=this.source[1]+", "+G.join(", ")
}if(!this.isChild){for(var D in this.context.aliases){if(this.context.aliases.hasOwnProperty(D)){this.source[1]=this.source[1]+", "+D+"="+this.context.aliases[D]
}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"
}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"
}if(!this.environment.isSimple){this.pushSource("return buffer;")
}var H=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];
for(var C=0,A=this.environment.depths.list.length;
C<A;
C++){H.push("depth"+this.environment.depths.list[C])
}var F=this.mergeSource();
if(!this.isChild){F=this.compilerInfo()+F
}if(E){H.push(F);
return Function.apply(this,H)
}else{var B="function "+(this.name||"")+"("+H.join(",")+") {\n  "+F+"}";
r("debug",B+"\n\n");
return B
}},mergeSource:function(){var E="",C;
for(var D=0,A=this.source.length;
D<A;
D++){var B=this.source[D];
if(B.appendToBuffer){if(C){C=C+"\n    + "+B.content
}else{C=B.content
}}else{if(C){E+="buffer += "+C+";\n  ";
C=undefined
}E+=B+"\n  "
}}return E
},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var A=["depth0"];
this.setupParams(0,A);
this.replaceStack(function(B){A.splice(1,0,B);
return"blockHelperMissing.call("+A.join(", ")+")"
})
},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var B=["depth0"];
this.setupParams(0,B);
var A=this.topStack();
B.splice(1,0,A);
this.pushSource("if (!"+this.lastHelper+") { "+A+" = blockHelperMissing.call("+B.join(", ")+"); }")
},appendContent:function(A){if(this.pendingContent){A=this.pendingContent+A
}if(this.stripNext){A=A.replace(/^\s+/,"")
}this.pendingContent=A
},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")
}this.stripNext="strip"
},append:function(){this.flushInline();
var A=this.popStack();
this.pushSource("if("+A+" || "+A+" === 0) { "+this.appendToBuffer(A)+" }");
if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")
}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";
this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))
},getContext:function(A){if(this.lastContext!==A){this.lastContext=A
}},lookupOnContext:function(A){this.push(this.nameLookup("depth"+this.lastContext,A,"context"))
},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)
},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';
this.replaceStack(function(A){return"typeof "+A+" === functionType ? "+A+".apply(depth0) : "+A
})
},lookup:function(A){this.replaceStack(function(B){return B+" == null || "+B+" === false ? "+B+" : "+this.nameLookup(B,A,"context")
})
},lookupData:function(){this.pushStackLiteral("data")
},pushStringParam:function(A,B){this.pushStackLiteral("depth"+this.lastContext);
this.pushString(B);
if(B!=="sexpr"){if(typeof A==="string"){this.pushString(A)
}else{this.pushStackLiteral(A)
}}},emptyHash:function(){this.pushStackLiteral("{}");
if(this.options.stringParams){this.push("{}");
this.push("{}")
}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)
}this.hash={values:[],types:[],contexts:[]}
},popHash:function(){var A=this.hash;
this.hash=this.hashes.pop();
if(this.options.stringParams){this.push("{"+A.contexts.join(",")+"}");
this.push("{"+A.types.join(",")+"}")
}this.push("{\n    "+A.values.join(",\n    ")+"\n  }")
},pushString:function(A){this.pushStackLiteral(this.quotedString(A))
},push:function(A){this.inlineStack.push(A);
return A
},pushLiteral:function(A){this.pushStackLiteral(A)
},pushProgram:function(A){if(A!=null){this.pushStackLiteral(this.programExpression(A))
}else{this.pushStackLiteral(null)
}},invokeHelper:function(E,B,A){this.context.aliases.helperMissing="helpers.helperMissing";
this.useRegister("helper");
var C=this.lastHelper=this.setupHelper(E,B,true);
var F=this.nameLookup("depth"+this.lastContext,B,"context");
var D="helper = "+C.name+" || "+F;
if(C.paramsInit){D+=","+C.paramsInit
}this.push("("+D+",helper ? helper.call("+C.callParams+") : helperMissing.call("+C.helperMissingParams+"))");
if(!A){this.flushInline()
}},invokeKnownHelper:function(C,A){var B=this.setupHelper(C,A);
this.push(B.name+".call("+B.callParams+")")
},invokeAmbiguous:function(A,E){this.context.aliases.functionType='"function"';
this.useRegister("helper");
this.emptyHash();
var B=this.setupHelper(0,A,E);
var C=this.lastHelper=this.nameLookup("helpers",A,"helper");
var F=this.nameLookup("depth"+this.lastContext,A,"context");
var D=this.nextStack();
if(B.paramsInit){this.pushSource(B.paramsInit)
}this.pushSource("if (helper = "+C+") { "+D+" = helper.call("+B.callParams+"); }");
this.pushSource("else { helper = "+F+"; "+D+" = typeof helper === functionType ? helper.call("+B.callParams+") : helper; }")
},invokePartial:function(A){var B=[this.nameLookup("partials",A,"partial"),"'"+A+"'",this.popStack(),"helpers","partials"];
if(this.options.data){B.push("data")
}this.context.aliases.self="this";
this.push("self.invokePartial("+B.join(", ")+")")
},assignToHash:function(B){var D=this.popStack(),A,C;
if(this.options.stringParams){C=this.popStack();
A=this.popStack()
}var E=this.hash;
if(A){E.contexts.push("'"+B+"': "+A)
}if(C){E.types.push("'"+B+"': "+C)
}E.values.push("'"+B+"': ("+D+")")
},compiler:z,compileChildren:function(A,D){var F=A.children,H,G;
for(var E=0,B=F.length;
E<B;
E++){H=F[E];
G=new this.compiler();
var C=this.matchExistingProgram(H);
if(C==null){this.context.programs.push("");
C=this.context.programs.length;
H.index=C;
H.name="program"+C;
this.context.programs[C]=G.compile(H,D,this.context);
this.context.environments[C]=H
}else{H.index=C;
H.name="program"+C
}}},matchExistingProgram:function(D){for(var C=0,B=this.context.environments.length;
C<B;
C++){var A=this.context.environments[C];
if(A&&A.equals(D)){return C
}}},programExpression:function(B){this.context.aliases.self="this";
if(B==null){return"self.noop"
}var G=this.environment.children[B],F=G.depths.list,E;
var D=[G.index,G.name,"data"];
for(var C=0,A=F.length;
C<A;
C++){E=F[C];
if(E===1){D.push("depth0")
}else{D.push("depth"+(E-1))
}}return(F.length===0?"self.program(":"self.programWithDepth(")+D.join(", ")+")"
},register:function(A,B){this.useRegister(A);
this.pushSource(A+" = "+B+";")
},useRegister:function(A){if(!this.registers[A]){this.registers[A]=true;
this.registers.list.push(A)
}},pushStackLiteral:function(A){return this.push(new o(A))
},pushSource:function(A){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
this.pendingContent=undefined
}if(A){this.source.push(A)
}},pushStack:function(B){this.flushInline();
var A=this.incrStack();
if(B){this.pushSource(A+" = "+B+";")
}this.compileStack.push(A);
return A
},replaceStack:function(H){var C="",D=this.isInline(),G,B,E;
if(D){var F=this.popStack(true);
if(F instanceof o){G=F.value;
E=true
}else{B=!this.stackSlot;
var A=!B?this.topStackName():this.incrStack();
C="("+this.push(A)+" = "+F+"),";
G=this.topStack()
}}else{G=this.topStack()
}var I=H.call(this,G);
if(D){if(!E){this.popStack()
}if(B){this.stackSlot--
}this.push("("+C+I+")")
}else{if(!/^stack/.test(G)){G=this.nextStack()
}this.pushSource(G+" = ("+C+I+");")
}return G
},nextStack:function(){return this.pushStack()
},incrStack:function(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var C=this.inlineStack;
if(C.length){this.inlineStack=[];
for(var B=0,A=C.length;
B<A;
B++){var D=C[B];
if(D instanceof o){this.compileStack.push(D)
}else{this.pushStack(D)
}}}},isInline:function(){return this.inlineStack.length
},popStack:function(A){var C=this.isInline(),B=(C?this.inlineStack:this.compileStack).pop();
if(!A&&(B instanceof o)){return B.value
}else{if(!C){if(!this.stackSlot){throw new s("Invalid stack pop")
}this.stackSlot--
}return B
}},topStack:function(B){var A=(this.isInline()?this.inlineStack:this.compileStack),C=A[A.length-1];
if(!B&&(C instanceof o)){return C.value
}else{return C
}},quotedString:function(A){return'"'+A.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},setupHelper:function(E,C,B){var D=[],F=this.setupParams(E,D,B);
var A=this.nameLookup("helpers",C,"helper");
return{params:D,paramsInit:F,name:A,callParams:["depth0"].concat(D).join(", "),helperMissingParams:B&&["depth0",this.quotedString(C)].concat(D).join(", ")}
},setupOptions:function(C,B){var I=[],F=[],H=[],A,D,G;
I.push("hash:"+this.popStack());
if(this.options.stringParams){I.push("hashTypes:"+this.popStack());
I.push("hashContexts:"+this.popStack())
}D=this.popStack();
G=this.popStack();
if(G||D){if(!G){this.context.aliases.self="this";
G="self.noop"
}if(!D){this.context.aliases.self="this";
D="self.noop"
}I.push("inverse:"+D);
I.push("fn:"+G)
}for(var E=0;
E<C;
E++){A=this.popStack();
B.push(A);
if(this.options.stringParams){H.push(this.popStack());
F.push(this.popStack())
}}if(this.options.stringParams){I.push("contexts:["+F.join(",")+"]");
I.push("types:["+H.join(",")+"]")
}if(this.options.data){I.push("data:data")
}return I
},setupParams:function(D,C,B){var A="{"+this.setupOptions(D,C).join(",")+"}";
if(B){this.useRegister("options");
C.push("options");
return"options="+A
}else{C.push(A);
return""
}}};
var n=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
var w=z.RESERVED_WORDS={};
for(var u=0,p=n.length;
u<p;
u++){w[n[u]]=true
}z.isValidJavaScriptVariableName=function(A){if(!z.RESERVED_WORDS[A]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(A)){return true
}return false
};
x=z;
return x
})(i,d);
var c=(function(w,B,n,r,v){var y;
var m=w;
var u=B;
var q=n.parser;
var p=n.parse;
var x=r.Compiler;
var A=r.compile;
var o=r.precompile;
var C=v;
var z=m.create;
var s=function(){var D=z();
D.compile=function(E,F){return A(E,F,D)
};
D.precompile=function(E,F){return o(E,F,D)
};
D.AST=u;
D.Compiler=x;
D.JavaScriptCompiler=C;
D.Parser=q;
D.parse=p;
return D
};
m=s();
m.create=s;
y=m;
return y
})(f,j,l,e,h);
return c
})();
(function(b,a){a.parallaxscroll=function(d){var e=Modernizr.touch,c=Modernizr.csstransforms3d;
if(c===true){b(".img-holder").imageScroll({holderClass:"parallaxHolder",coverRatio:0.5,container:b("#main-content"),parallax:c,touch:e})
}};
PointerEventsPolyfill.initialize({});
b(function(){a.parallaxscroll()
});
b(a).on("debouncedresize",function(){b(window).trigger("scroll")
});
b(a).load(function(){b(window).trigger("scroll")
});
Modernizr.addTest("workinghover",function(){return navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry/g)?false:true
});
b(".btn-bubble").on("click",function(d){b(this).addClass("is-touched");
var c=b(this);
setTimeout(function(){c.removeClass("is-touched")
},1000)
});
window.handlebarsConvertBracesOfTemplate=function(c){return b(c).html().replace(new RegExp("<%","g"),"{{").replace(new RegExp("%>","g"),"}}")
};
b.mlp={x:0,y:0};
b.fn.pointerEventToXY=function(d){var c={x:0,y:0};
if(d.type=="touchstart"||d.type=="touchmove"||d.type=="touchend"||d.type=="touchcancel"){var f=d.originalEvent.touches[0]||d.originalEvent.changedTouches[0];
c.x=f.pageX;
c.y=f.pageY
}else{if(d.type=="mousedown"||d.type=="mouseup"||d.type=="mousemove"||d.type=="mouseover"||d.type=="mouseout"||d.type=="mouseenter"||d.type=="mouseleave"){c.x=d.pageX;
c.y=d.pageY
}}return c
};
b.fn.ismouseover=function(){var c=false;
this.eq(0).each(function(){var d=b(this).is("iframe")?b(this).contents().find("body"):b(this);
var e=d.offset();
c=e.left<=b.mlp.x&&e.left+d.outerWidth()>b.mlp.x&&e.top<=b.mlp.y&&e.top+d.outerHeight()>b.mlp.y
});
return c
}
}($,this));
$(document).ready(function(){var g="div[data-aus-calendar]";
var f="form[data-aus-calendar-form]";
var e="a[data-aus-calendar-refresh]";
var d="div[data-aus-calendar-results]";
var b="div[data-aus-calendar-more]";
var c="p[data-aus-calendar-result-count]";
var a=8;
$(g).each(function(q,h){var o=1;
var y=$(h);
var p;
var i;
var x;
var s;
var j,u;
var B;
var A;
var w;
var l;
var m=y.attr("data-aus-calendar");
y.find(f).each(function(D,E){p=$(E);
p.find(e).each(function(F,G){x=$(G)
})
});
y.find(d).each(function(D,E){i=$(E);
i.find(b).each(function(F,G){s=$(G)
})
});
y.find(c).each(function(E,F){var D=$(F);
var G=D.text();
G=G.replace(/{}/g,"<span></span>");
D.html(G);
j=$(D.find("span")[0]);
u=$(D.find("span")[1])
});
function v(){w=p.find("select[name=state]").val();
A=p.find("select[name=category]").val();
l=p.find("select[name=month]").val()
}function r(){i.empty();
B=""
}function n(){r();
o=1;
preloadImage.displayPreloadAnimation(true);
v();
z(true)
}function z(G){s.off("click",k);
x.off("click",n);
if(B){s.show();
var I=$(B);
var F=I.first().attr("data-aus-calendar-total");
u.text(F);
I.first().remove();
I.hide();
i.append(I);
I.show();
I.find(".mosaic-item").mosaic();
var D=i.find(".mosaic-item").size();
j.text(D);
if(D==F){s.hide()
}document.customDocumentDispatchEvent("ta-eventscalendarpopulated")
}var H={page:o,limit:a,month:l,category:A,state:w};
var E=location.pathname.replace(".html","/"+m+".searchfragment.json");
var J=function(K){C(K);
if(G){z(false)
}};
$.get(E,H,J,"html")
}function C(D){preloadImage.displayPreloadAnimation(false);
B=D;
o+=1;
s.on("click",k);
x.on("click",n)
}function k(){z(false)
}v();
z(true)
})
});
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * API integration, templating for Livefyre Mosaic component.
 *
 */
;
(function(e,c,a,g){var d="livefyreMosaic",f={livefyreUid:"livefyre-uid",mosaicItemsContainer:".livefyre-mosaic--items",mosaicLoadMoreBtn:".livefyre-mosaic--load-more",mosaicTemplate1:"#livefyre-mosaic-1-template",mosaicTemplate4:"#livefyre-mosaic-4-template",mosaicSettings:".livefyre-mosaic--settings",contentApiUrlData:"content-api-url",layoutSequence:"mosaic-layout",shareUrlData:"share-url",generalAnalyticsData:"general-analytics"};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var i=this;
this.store={livefyreUid:"",contentApiUrl:"",contentItems:[],displayedItems:[],$mosaicItemsContainer:null,$mosaicLoadMoreBtn:null,mosaicTemplate1Compiled:null,mosaicTemplate4Compiled:null,articleId:"",currentOffset:0,layoutSequence:[],nextLayoutIndex:0,shareUrl:"",generalAnalytics:""};
var j=e(this.element);
this.store.livefyreUid=j.data(this.options.livefyreUid);
this.store.$mosaicItemsContainer=j.find(this.options.mosaicItemsContainer);
this.store.$mosaicLoadMoreBtn=j.find(this.options.mosaicLoadMoreBtn);
this.store.mosaicTemplate1Compiled=Handlebars.compile(e(this.options.mosaicTemplate1).html());
this.store.mosaicTemplate4Compiled=Handlebars.compile(e(this.options.mosaicTemplate4).html());
var h=j.parent().find(this.options.mosaicSettings);
this.store.contentApiUrl=h.data(this.options.contentApiUrlData);
this.store.layoutSequence=h.data(this.options.layoutSequence).split(",");
this.store.shareUrl=h.data(this.options.shareUrlData);
this.store.generalAnalytics=h.data(this.options.generalAnalyticsData);
j.find(this.options.mosaicLoadMoreBtn).click(function(){i.loadPage()
});
this.fetchItems()
};
b.prototype.fetchItems=function(){var h=this;
console.log("_self.store.contentApiUrl",h.store.contentApiUrl);
e.ajax({url:h.store.contentApiUrl,dataType:"json",success:function(i){console.log(i);
h.decorateResults(i);
h.store.contentItems=i.contentItems;
h.loadPage()
},error:function(){e(h.element).hide()
}})
};
b.prototype.loadPage=function(h){this.populateNextLayouts();
this.populateLightbox();
a.customDocumentDispatchEvent("verifyImagesLoaded");
this.setupLoadMore()
};
b.prototype.decorateResults=function(j){for(var h=0;
h<j.contentItems.length;
h++){j.contentItems[h].shareUrl=this.store.shareUrl+"#st"+h;
j.contentItems[h].analyticsData=this.store.generalAnalytics;
var k='data-ta-data-key="liveFyre" data-ta-data-layer=\'{"event":"liveFyreHashClick-v5", "liveFyreHashText": "", ';
k+='"liveFyreMediaType":"'+j.contentItems[h].mediaType+'",';
k+='"liveFyreAuthorName":"'+j.contentItems[h].authorNameHash+'",';
k+='"liveFyreSocialAppName":"'+j.contentItems[h].contentType+'",';
k+='"liveFyreMediaType":"'+j.contentItems[h].mediaType+'",';
k+='"liveFyreDatePosted":"'+j.contentItems[h].datePosted+'",';
k+=this.store.generalAnalytics+" }'";
j.contentItems[h].linkAnalyticsData=k
}};
b.prototype.setupLoadMore=function(){if(this.store.contentItems.length-this.store.currentOffset>0){e(this.options.mosaicLoadMoreBtn).show()
}else{e(this.options.mosaicLoadMoreBtn).hide()
}};
b.prototype.populateLightbox=function(){this.store.displayedItems=this.store.contentItems.slice(0,this.store.currentOffset);
a.customDocumentDispatchEvent("livefyre-mosaic-data-update-"+this.store.livefyreUid,this.store.displayedItems)
};
b.prototype.populateNextLayouts=function(){var j=this.store.layoutSequence[this.store.nextLayoutIndex].split("x");
this.store.nextLayoutIndex+=1;
if(this.store.nextLayoutIndex>=this.store.layoutSequence.length){this.store.nextLayoutIndex=0
}this.store.$mosaicItemsContainer.append('<div class="row">');
for(var h=0;
h<j.length;
h++){if(this.store.currentOffset<this.store.contentItems.length){if(j[h]==="1"){var k=this.store.contentItems.slice(this.store.currentOffset,this.store.currentOffset+1);
this.store.$mosaicItemsContainer.append(this.store.mosaicTemplate1Compiled(k));
this.store.currentOffset+=1
}else{if(j[h]==="4"){var k=this.store.contentItems.slice(this.store.currentOffset,this.store.currentOffset+4);
this.store.$mosaicItemsContainer.append(this.store.mosaicTemplate4Compiled(k));
this.store.currentOffset+=4
}}}}this.store.$mosaicItemsContainer.append("</div>")
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(a).ready(function(){e(".livefyre-mosaic--container").livefyreMosaic()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * API integration, templating for Livefyre Carousel component.
 *
 */
;
(function(e,c,a,g){var d="livefyreCarousel",f={livefyreUid:"livefyre-uid",livefyreCarouselId:"livefyre-carousel-id",carouselItemsContainer:".livefyre-carousel--item-container",itemTemplate:"#livefyre-carousel--item-template",carouselSettings:".livefyre-carousel--settings",contentApiUrlData:"content-api-url",articleIdData:"article-id",shareUrlData:"share-url",shouldAutorotateData:"should-autorotate",generalAnalyticsData:"general-analytics"};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var j=this;
this.store={livefyreUid:"",livefyreCarouselId:"",contentApiUrl:"",contentItems:[],$carouselItemsContainer:null,itemTemplateCompiled:null,shareUrl:"",shouldAutorotate:false,generalAnalytics:""};
var h=e(this.element);
this.store.livefyreUid=h.data(this.options.livefyreUid);
this.store.livefyreCarouselId=h.data(this.options.livefyreCarouselId);
this.store.$carouselItemsContainer=h.find(this.options.carouselItemsContainer);
this.store.itemTemplateCompiled=Handlebars.compile(e(this.options.itemTemplate).html());
var i=h.parent().find(this.options.carouselSettings);
this.store.contentApiUrl=i.data(this.options.contentApiUrlData);
this.store.shareUrl=i.data(this.options.shareUrlData);
this.store.generalAnalytics=i.data(this.options.generalAnalyticsData);
this.store.shouldAutorotate=i.data(this.options.shouldAutorotateData);
this.fetchItems()
};
b.prototype.fetchItems=function(){var h=this;
e.ajax({url:h.store.contentApiUrl,dataType:"json",success:function(i){console.log(i);
h.handleResponse(i)
},error:function(){e(h.element).hide()
}})
};
b.prototype.handleResponse=function(i){var h=this;
this.decorateResults(i);
this.store.contentItems=i.contentItems;
this.populateLayout();
a.customDocumentDispatchEvent("livefyre-carousel-init-owl",{id:this.store.livefyreCarouselId,shouldAutorotate:this.store.shouldAutorotate});
a.customDocumentDispatchEvent("livefyre-carousel-data-update-"+this.store.livefyreUid,this.store.contentItems);
a.customDocumentDispatchEvent("verifyImagesLoaded");
setTimeout(function(){h.setupAnalyticsOnCarouselNavigation()
},50)
};
b.prototype.decorateResults=function(j){for(var h=0;
h<j.contentItems.length;
h++){j.contentItems[h].shareUrl=this.store.shareUrl+"#st"+h;
j.contentItems[h].analyticsData=this.store.generalAnalytics;
var k='data-ta-data-key="liveFyre" data-ta-data-layer=\'{"event":"liveFyreHashClick-v5", "liveFyreHashText": "", ';
k+='"liveFyreMediaType":"'+j.contentItems[h].mediaType+'",';
k+='"liveFyreAuthorName":"'+j.contentItems[h].authorNameHash+'",';
k+='"liveFyreSocialAppName":"'+j.contentItems[h].contentType+'",';
k+='"liveFyreMediaType":"'+j.contentItems[h].mediaType+'",';
k+='"liveFyreDatePosted":"'+j.contentItems[h].datePosted+'",';
k+=this.store.generalAnalytics+" }'";
j.contentItems[h].linkAnalyticsData=k
}};
b.prototype.populateLayout=function(){var h=this;
var k="";
for(var j=0;
j<h.store.contentItems.length;
j++){k+='<div class="carousel-item">';
k+=h.store.itemTemplateCompiled(h.store.contentItems[j]);
k+="</div>"
}h.store.$carouselItemsContainer.html(k)
};
b.prototype.setupAnalyticsOnCarouselNavigation=function(){var h=this;
e(h.element).find("div.owl-page, div.owl-prev, div.owl-next").each(function(){e(h).attr("data-ta-data-key","liveFyre");
e(h).attr("data-ta-data-layer",'{"event": "liveFyreCarouselClick-v5", '+h.store.generalAnalytics+"}")
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(a).ready(function(){e(".livefyre-carousel--container").livefyreCarousel()
})
})(jQuery,window,document);
var utility=(function(){var a={};
a.settings={};
a.getViewPort=function(){var c=window;
var b="inner";
if(!("innerWidth" in window)){b="client";
c=document.documentElement||document.body
}return{width:c[b+"Width"],height:c[b+"Height"]}
};
a.isHandHeldDevice=function(){var b=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
return b
};
a.getMobileDeviceType=function(){var b=navigator.userAgent.toLowerCase();
var d=b.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera/i)?b.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera/i)[0]:false;
var c="other";
if(d){if(d==="android"){c="android"
}else{if(d==="iphone"||d==="ipad"||d==="ipod"){c="apple"
}}}return c
};
a.isIE9=function(){var b;
if(navigator.appName=="Microsoft Internet Explorer"){var c=navigator.userAgent;
var d=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
if(d.exec(c)!=null){b=parseFloat(RegExp.$1)
}}return(b>-1&&b<=9)
};
a.bindCustomDocumentEvent=function(){document.customDocumentDispatchEvent=function(b,d){var c=this.createEvent("CustomEvent");
c.initCustomEvent(b,true,true,d);
this.dispatchEvent(c)
}
};
a.bindFulfilRelationship=function(){document.fulfilRelationship=function(f,e){var b="ta-relationship-loaded-"+f;
var d="ta-relationship-ack-"+f;
$(window).on(d,function(){if(e){e()
}});
var c=0;
$(window).on(b,function(){c++;
if(c===2){document.customDocumentDispatchEvent(d)
}});
document.customDocumentDispatchEvent(b)
}
};
return a
})();
$(document).ready(function(){utility.bindCustomDocumentEvent();
utility.bindFulfilRelationship()
});
var bandwdithDetection=(function(){var a={};
a.settings={startTime:0,endTime:0,imageMobileUrl:"http://www.australia.com/content/australia/en/jcr:content/mainParsys/chasethesun/smallScreenImage.img.jpg",imageUrl:"http://www.australia.com/content/australia/en/jcr:content/mainParsys/chasethesun/pageEntryImgbg.img.jpg",downloadSize:251250,downloadMobileSize:30313,ctsBandWidthHdnField:".cts-bandwidthkbps-hdn-field",decimalRounding:2,mobileViewPort:479};
a.getBandwidth=function(){var c=new Image();
c.onload=function(){var e=0;
var d=$(a.settings.ctsBandWidthHdnField);
a.settings.endTime=(new Date()).getTime();
e=a.calculateBandWidth();
d.val(e)
};
a.settings.startTime=(new Date()).getTime();
var b="?timestamp="+a.settings.startTime;
c.src=((a.isMobile())?a.settings.imageMobileUrl:a.settings.imageUrl)+b
};
a.calculateBandWidth=function(){var c=(a.settings.endTime-a.settings.startTime)/1000;
var b=(a.isMobile())?(a.settings.downloadMobileSize*8):(a.settings.downloadSize*8);
var d=a.rounding((b/c),a.settings.decimalRounding);
return d
};
a.rounding=function(d,b){var c=Number(Math.round(d+"e"+b)+"e-"+b);
return c
};
a.isMobile=function(){var b=$(window);
return(b.width()<a.settings.mobileViewPort)
};
return{getInstance:function(){return a
}}
})();
$(document).ready(function(){var b=$(".cts-stage");
if(b.length>0){var a=bandwdithDetection.getInstance();
a.getBandwidth()
}});
$(window).load(function(){if(!utility.isHandHeldDevice()){var a=skrollr.init()
}});
var preloadImage=(function(){var a={};
a.settings={preloadAnimationDots:".preload-image-dots",preloadNoTransitionImage:".preload-no-transition-support-image",csstransitionElement:".no-csstransitions"};
a.displayPreloadAnimation=function(g,d){var i=d+" "+a.settings.preloadAnimationDots;
var e=d+" "+a.settings.preloadNoTransitionImage;
var b=d+" "+a.settings.csstransitionElement;
var j=$(i);
var c=$(e);
var f=$(b);
var h=(typeof(f)==="undefined")?true:false;
if(g){if(h){j.addClass("is-show-preload-animation")
}else{c.addClass("is-show-preload-animation")
}}else{if(h){j.removeClass("is-show-preload-animation")
}else{c.removeClass("is-show-preload-animation")
}}};
return a
})();
var pinterestCustom=(function(){var a={};
a.settings={pinterestContainer:".social-pinterest--container",componentWrapper:"data-pinterest-img-wrapper",image:"data-pinterest-img",pinterestUrl:"http://pinterest.com/pin/create/button/?",windowName:"Pinterest"};
a.initPinterestOnFullWidthImage=function(){var b=$(a.settings.pinterestContainer);
b.click(function(d){d.preventDefault();
var c=a.getPinterestUrl(this);
window.open(c,a.settings.windowName,"width=600, height=600, scrollbars=yes");
return true
})
};
a.onImageHover=function(){var b=$("["+a.settings.componentWrapper+"]");
b.hover(function(){var c=$(this).find(a.settings.pinterestContainer);
c.addClass("social-pinterest--visible")
},function(){var c=$(this).find(a.settings.pinterestContainer);
c.removeClass("social-pinterest--visible")
})
};
a.getPinterestUrl=function(g){var i=$(g).closest("["+a.settings.componentWrapper+"]");
var c=i.find("["+a.settings.image+"]");
var e=window.location.href;
var b=encodeURIComponent(e);
var d=a.getImageSrc(c);
var h=(typeof(c.data("alt"))==="undefined")?"":c.data("alt");
var f=a.settings.pinterestUrl;
f+="url=";
f+=b;
f+="&media=";
f+=d;
f+="&description=";
f+=h;
return f
};
a.getImageSrc=function(b){a.polyfillForIE();
var d=encodeURIComponent(window.location.origin);
var c=b.find("[data-media='(min-width: 769px)']").data("src");
if(!c||!c.trim()){c=b.css("background-image");
c=c.replace(window.location.origin,"").replace("url(","").replace(")","").replace(/"/g,"")
}c=d+c;
return c
};
a.polyfillForIE=function(){if(!window.location.origin){window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")
}};
return a
})();
$(window).load(function(){pinterestCustom.initPinterestOnFullWidthImage();
pinterestCustom.onImageHover()
});
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Flip Card Jquery Plugin
 *
 * explore_item : reference to the explore item container
 * explore_flip_btn : flip card button
 * explore_flip_back_btn : flip card back button
 * explore_card_front : front card
 * explore_card_back : back card
 */
;
(function(e,c,a,g){var d="flipcard",f={explore_item:".explore-item-container",explore_flip_btn:"#explore-flip-btn",explore_flip_back_btn:"#explore-flip-back-btn",explore_card_front:".explore-card-front",explore_card_back:".explore-card-back"};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.setupEvents(h)
};
b.prototype.setupEvents=function(i){var h="click";
e(i.element).find(i.options.explore_flip_btn).on(h,function(j){i.frontClicked(i,j)
});
e(i.element).find(i.options.explore_flip_back_btn).click(function(j){i.backClicked(i,j)
})
};
b.prototype.frontClicked=function(i,k){var h=e(k.currentTarget);
var j=e(h.parents(i.options.explore_item));
i.flipToBackCard(i,j);
k.preventDefault()
};
b.prototype.backClicked=function(i,k){var h=e(k.currentTarget);
var j=e(h.parents(i.options.explore_item));
i.flipToFrontCard(i,j);
k.preventDefault()
};
b.prototype.flipToFrontCard=function(h,i){i.removeClass("is-flip")
};
b.prototype.flipToBackCard=function(h,i){i.addClass("is-flip")
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).load(function(){e(".explore-item-container").flipcard()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Mosaic Jquery Plugin
 *
  * Flips tile when rolled over/off, sets to front view when clicked and reveals content
  * changes other tiles opacity
  * when clicked again or close btn clicked, retracts and resets all tiles opacity
 *
 * mosaic : ".mosaic", // reference to mosaic container
 * mosaic_item : ".mosaic-item",  // reference to the mosaic item container
 * mosaic_container: ".flip-container", // reference item that should trigger a click
 * mosaic_front: ".mosaic-column-front", // reference to front
 * mosaic_back: ".mosaic-column-back", // reference to back
 * mosaic_content: ".mosaic-item-detail-container", // reference to content
 * mosaic_grid2: ".mosaic-grid-2", // parent grid 2 row container
 * mosaic_grid2_content: ".mosaic-grid-2-content", // reference to content block for 2 grid
 * mosaic_detail_close_btn: ".mosaic-detail-close-btn", // close button on detail panel
 * mosaic_close_btn: "<span class='mosaic-close-icon'><a class='mosaic-detail-close-btn' href='#'><img src='imgs/icons/close_outline.png' alt=''/></a></span>" // html for button to close mosaic tile
 */
;
(function(e,i,j,a){var h="mosaic",d={mosaic:".mosaic",mosaic_item:".mosaic-item",mosaic_container:".flip-container",mosaic_front:".mosaic-column-front",mosaic_back:".mosaic-column-back",mosaic_content:".mosaic-item-detail-container",mosaic_grid2:".mosaic-grid-2",mosaic_grid2_content:".mosaic-grid-2-content",mosaic_detail_close_btn:".mosaic-detail-close-btn",mosaic_close_btn:"<span class='mosaic-close-icon'><a class='mosaic-detail-close-btn' href='#'><img src='imgs/icons/close_outline.png' alt=''/></a></span>",mosaic_content_navigatable:false,mosaic_transition_disabled:false,tabletBreakpoint:768};
function k(m,l){this.element=m;
this.elements={};
this.options=e.extend({},d,l);
this._defaults=d;
this._name=h;
this.interactiveType=e(this.element).attr("data-interactive-type");
if(this.interactiveType===a){this.interactiveType="fade"
}this.transitionType="is-"+this.interactiveType;
this.init()
}var b=0;
var f;
k.prototype.scrollfor_parallaxscroll=function(){e(i).scrollTop(e(i).scrollTop()+1)
};
k.prototype.clock_parallaxscroll=function(){e(i).trigger("scroll");
b++;
if(b==50){b=0;
i.clearInterval(f)
}};
k.prototype.init=function(){var l=this;
l.setupEvents(l);
if(l.options.mosaic_content_navigatable){l.initNavigation(l)
}};
k.prototype.setupEvents=function(p){var r=e(p.element);
p.elements.$mosaic_item=r;
var o=e(p.element).closest(p.options.mosaic);
p.elements.$mosaic=o;
var m=e(p.element).find(p.options.mosaic_container);
p.elements.$mosaic_container=m;
var q=e(p.element).find(p.options.mosaic_content);
p.elements.$mosaic_content=q;
var l=e(p.element).find(p.options.mosaic_detail_close_btn);
var n="click";
m.on(n,p,function(u){if(e(u.target).hasClass("outbound-link")||e(u.target).closest("a").hasClass("outbound-link")){return
}var v=e(this).data("override-url");
if(v){j.location=v;
return
}if(!e(this).hasClass("outbound-link")&&!g(p)&&!c(e(this))){if(p.viewport().width<=p.options.tabletBreakpoint){setTimeout(function(){var w=e("#nav-bar-top").outerHeight(),x=r.offset().top-w;
e("html, body").animate({scrollTop:x},200)
},100)
}o.find(p.options.mosaic_item).addClass("is-opacity");
r.removeClass("is-opacity");
var s=e(p.element).parents(p.options.mosaic_grid2).find(p.options.mosaic_grid2_content).find(p.options.mosaic_content);
p.setupGrid2Content(p,o,q,s);
if(r.hasClass("is-trigger-content")){p.removeClass(p,r,q,s);
o.find(p.options.mosaic_item).removeClass("is-opacity")
}else{p.disableTiles(p,r,q,s)
}p.removeTransition(r);
f=self.setInterval(p.clock_parallaxscroll,10);
u.preventDefault()
}});
m.mouseenter(function(s){p.addTransition(r);
s.preventDefault()
});
m.mouseleave(function(s){p.removeTransition(r);
s.preventDefault()
});
l.on(n,function(s){m.trigger(n);
s.preventDefault()
})
};
k.prototype.disableTiles=function(m,q,p,o){var l=m.elements.$mosaic;
var n=l.find(".is-trigger-content");
if(n.length){n.each(function(v,u){$mosaic_item1=e(u);
var r=$mosaic_item1.find(m.options.mosaic_content);
var s=$mosaic_item1.parents(m.options.mosaic_grid2).find(m.options.mosaic_grid2_content).find(m.options.mosaic_content);
m.removeClass(m,$mosaic_item1,r,s)
});
if(m.options.mosaic_transition_disabled){m.addClass(m,q,p,o)
}else{setTimeout(function(){m.addClass(m,q,p,o)
},100)
}}else{m.addClass(m,q,p,o)
}};
k.prototype.addClass=function(l,o,n,m){if(n.attr("isThis")){if(n.find(".type-anchor-title").attr("target")){i.open(n.find(".type-anchor-title").attr("href"),"_blank")
}else{i.location=n.find(".type-anchor-title").attr("href")
}}else{o.addClass("is-trigger-content");
n.addClass("active");
if(o.attr("data-interactive-type")!="video"){m.addClass("active");
if(l.options.mosaic_content_navigatable){m.closest(l.options.mosaic_grid2_content).addClass("active")
}}}};
k.prototype.removeClass=function(l,o,n,m){o.removeClass("is-trigger-content");
n.removeClass("active");
m.removeClass("active");
if(l.options.mosaic_content_navigatable){m.closest(l.options.mosaic_grid2_content).removeClass("active")
}};
k.prototype.addTransition=function(l){l.addClass(this.transitionType)
};
k.prototype.removeTransition=function(l){l.removeClass(this.transitionType)
};
k.prototype.closeAllTiles=function(m,l){var n=l.find(m.options.mosaic_item);
n.removeClass("is-opacity");
n.removeClass("is-trigger-content");
var p=l.find(m.options.mosaic_content);
p.removeClass("active");
var o=l.find(m.options.mosaic_grid2_content);
o.removeClass("active")
};
k.prototype.setupGrid2Content=function(n,m,p,o){if(o.length){o.html(p.html());
e(".bubble-colour-favourite").addDreamTrip();
var l=o.find(n.options.mosaic_detail_close_btn);
l.click(function(q){n.closeAllTiles(n,m);
f=self.setInterval(n.clock_parallaxscroll,10);
q.preventDefault()
})
}};
k.prototype.viewport=function(){var m=i,l="inner";
if(!("innerWidth" in i)){l="client";
m=j.documentElement||j.body
}return{width:m[l+"Width"],height:m[l+"Height"]}
};
k.prototype.initNavigation=function(q){var n=(q.elements.$mosaic).find("> .row").find("> .row");
var m=(q.elements.$mosaic).find(q.options.mosaic_grid2).eq(0).find(q.options.mosaic_item).length;
var o=(q.elements.$mosaic).find(q.options.mosaic_grid2).length;
var l=e(q.element).parents(q.options.mosaic_grid2).find(q.options.mosaic_grid2_content+" .mosaic-carousel-prev");
var r=e(q.element).parents(q.options.mosaic_grid2).find(q.options.mosaic_grid2_content+" .mosaic-carousel-next");
e(q.options.mosaic_grid2_content).addClass("mosaic-navigatable");
if(!l.hasClass("bound")){l.on("click",function(s){p(-1)
});
l.addClass("bound")
}if(!r.hasClass("bound")){r.on("click",function(s){p(1)
});
r.addClass("bound")
}function p(B){var A,s;
var z=e(i).scrollTop();
var y=e(q.options.mosaic_item+".is-trigger-content").parent("div").index();
var v=e(q.options.mosaic_item+".is-trigger-content").closest(q.options.mosaic_grid2).parent().closest(".row").index();
var x=y+B;
var u=(q.elements.$mosaic_item).outerHeight();
if(x<0){A=v-1;
if(A<0){A=o-1
}s=m-1
}else{if(x>=m){A=v+1;
if(A>=o){A=0
}s=0
}else{A=v;
s=x
}}var w=n.eq(A).find(q.options.mosaic_item).eq(s);
w.find(".flip-container").trigger("click");
if(v==A-1){e(i).scrollTop(z+u)
}else{if(v==A+1){e(i).scrollTop(z-u)
}else{if(v<A){e(i).scrollTop(z+(u*(o-1)))
}else{if(v>A){e(i).scrollTop(z-(u*(o-1)))
}}}}}};
function c(l){isListView=l.parents(".mosaic").parent().hasClass("mosaic-list-view")?true:false;
return isListView
}function g(o){var l=e(o.element);
var n=l.attr("data-interactive-type");
var m=(typeof(n)!=="undefined"&&n==="video");
return m
}e.fn[h]=function(l){return this.each(function(){if(!e.data(this,"plugin_"+h)){e.data(this,"plugin_"+h,new k(this,l))
}})
};
e(i).load(function(){e(".mosaic-item:not(.mosaic-custom-grid)").mosaic();
e(".mosaic-3column-item-option").mosaic({mosaic_item:".mosaic-3column-item-option",mosaic_container:".mosaic-3column-container",mosaic_front:".mosaic-3column-front",mosaic_back:".mosaic-3column-back",mosaic_content:".mosaic-item-detail-container"});
e(".mosaic-2column-item-option").mosaic({mosaic_item:".mosaic-2column-item-option",mosaic_container:".mosaic-2column-container",mosaic_content:".mosaic-item-detail-container"});
e(".mosaic-3column-item").mosaic({mosaic_item:".mosaic-3column-item",mosaic_grid2_content:".mosaic-grid-3-content",mosaic_content_navigatable:true,mosaic_transition_disabled:true});
e(".mosaic-4column-item").mosaic({mosaic_item:".mosaic-4column-item",mosaic_grid2_content:".mosaic-grid-4-content",mosaic_content_navigatable:true,mosaic_transition_disabled:true});
e(i).on("resize",function(){if(e(".btn-list-view.is-active").length){if(e(i).width()<768){e(".mosaic-list-view").removeClass("mosaic-list-view")
}else{e(".btn-list-view.is-active").closest(".search-results-counter-grid-more").find(".search-grid-container").addClass("mosaic-list-view")
}}});
e(i).on("ta-atdwresultspopulated",function(){var l=e(".mosaic.atdw-mosaic .is-atdw.is-trigger-content");
if(l.length){e(".mosaic.atdw-mosaic .mosaic-2column-item-option.is-atdw").addClass("is-opacity");
l.removeClass("is-opacity")
}})
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Search Jquery Plugin
 *
  * Handles showing list or grid view on search page
  * Default show list view, else cookie value dictates what is shown
  * Data is pulled from the #template-search-list-results and #template-search-grid-results and copied to .search-list-container or .search-grid-container
 *
 */
;
(function(d,g,h,b){var f="searchGeneral",c={search_localStorage_key:"ta_search_view",btn_list_view:".btn-list-view",btn_grid_view:".btn-grid-view",search_results_mosaic:".search-results-grid",search_grid_container:".search-grid-container",template_search_list_results:"#template-search-list-results",template_search_grid_results:"#template-search-grid-results"};
function i(k,j){this.element=k;
this.options=d.extend({},c,j);
this._defaults=c;
this._name=f;
this.init()
}i.prototype.init=function(){var j=this;
j.initVariables(j);
j.setupEvents(j);
j.setLayout(j)
};
i.prototype.initVariables=function(j){j.$el=d(j.element);
j.$btn_list_view=j.$el.find(j.options.btn_list_view);
j.$btn_grid_view=j.$el.find(j.options.btn_grid_view);
j.$search_grid_container=j.$el.find(j.options.search_grid_container)
};
i.prototype.setupEvents=function(j){j.$btn_list_view.click(function(k){a("list",j.options.search_localStorage_key);
j.setLayout(j);
k.preventDefault()
});
j.$btn_grid_view.click(function(k){a("grid",j.options.search_localStorage_key);
j.setLayout(j);
k.preventDefault()
})
};
i.prototype.setLayout=function(j){var k=e(j.options.search_localStorage_key);
if(k==b||k=="list"){j.setGridType(j,false)
}else{j.setGridType(j,true)
}};
i.prototype.setGridType=function(k,j){if(j){k.$btn_grid_view.addClass("is-active");
k.$btn_list_view.removeClass("is-active");
k.$search_grid_container.removeClass("mosaic-list-view")
}else{k.$btn_list_view.addClass("is-active");
k.$btn_grid_view.removeClass("is-active");
k.$search_grid_container.addClass("mosaic-list-view")
}};
function a(k,j){if(k){localStorage.setItem(j,JSON.stringify(k))
}else{localStorage.removeItem(j)
}}function e(j){if(localStorage.getItem(j)){return JSON.parse(localStorage.getItem(j))
}return null
}d.fn[f]=function(j){return this.each(function(){if(!d.data(this,"plugin_"+f)){d.data(this,"plugin_"+f,new i(this,j))
}})
};
d(g).ready(function(){d(".search-results-counter-grid-more").searchGeneral()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Search Input Jquery Plugin
 *
  * Handles search input field when changed
 *
 */
;
(function(e,c,a,g){var d="searchInput",f={search_input:".search-input",search_input_clear:".search-input-clear"};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.setupEvents(h)
};
b.prototype.setupEvents=function(i){var h=e(i.element);
var j=h.find(i.options.search_input);
var k=h.find(i.options.search_input_clear);
h.focusin(function(l){e(this).addClass("search-box-focus");
l.preventDefault()
});
h.focusout(function(l){e(this).removeClass("search-box-focus");
l.preventDefault()
});
j.keyup(function(){if(e(this).val()<=0){k.hide()
}else{k.show()
}});
k.click(function(){j.val("");
k.hide();
j.blur();
j.focus();
j.blur()
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).load(function(){e(".search-box").searchInput()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Search Input Jquery Plugin
 *
  * Handles search input field when changed
 *
 */
;
(function(e,c,a,g){var d="inputFocus",f={};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.setupEvents(h)
};
b.prototype.setupEvents=function(i){var h=e(i.element);
var j=h.find(i.options.search_input);
h.focusin(function(k){e(this).addClass("input-focus");
k.preventDefault()
});
h.focusout(function(k){e(this).removeClass("input-focus");
k.preventDefault()
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).load(function(){e(".inputFocus-wrapper").inputFocus()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * TA Mega Menu Helper...
 *
 * The TA navigation bar works mostly without the aid of javascript but this helper adds
 * in some required functionality and enhances the CSS only functionality.
 *
 */
;
(function(e,c,a,g){var d="megamenu",f={mm_mobile_breakpoint:750,mm_main_header_element:"#nav-main-header",mm_main_navigation_bar:"#nav-bar-top",mm_clone_navigation_bar_id:"nav-bar-top-clone",mm_notice_close_button:".notice-close",mm_mobile_open_main_nav:".nav-toggle-open",mm_mobile_close_main_nav:".nav-toggle-close",mm_all_toggle_panel_nav:".nav-toggle-panel",mm_map_panel_filters:".megamenu-map-filters",mm_toggle_search_panel:"#nav-main-panel-search",mm_heart_this_widget:"#nav-heart-this-widget"};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.options.navbarHeight=e(h.options.mm_main_navigation_bar).css("height");
h.options.mm_clone_navigation_bar=e(h.options.mm_main_navigation_bar).clone().height(h.options.navbarHeight).removeClass("bar-fixed-scroll").addClass("is-bar-cloned").attr("id",h.options.mm_clone_navigation_bar_id).insertBefore(e(h.options.mm_main_navigation_bar)).html("").hide();
var i="click";
e(c).resize(function(){h.initStickyNavBars(h);
h.initMapPanel(h,i)
});
h.initStickyNavBars(h);
h.initMapPanel(h,i);
h.noticeEvents(h,i);
h.mobileEvents(h,i);
h.desktopEvents(h,i);
h.options.searchToggle=e(h.options.mm_toggle_search_panel);
h.options.heartToggle;
h.initHeartThisWidget(h,i);
e(c).trigger("scroll resize")
};
b.prototype.initStickyNavBars=function(h){if(e(h.element).find(".bar-fixed-top").length<1){h.options.offsetTop=e(c).scrollTop();
h.options.heightAbove=e(h.options.mm_main_navigation_bar).offset().top;
h.options.navbarHeight=e(h.options.mm_main_navigation_bar).css("height");
e(h.options.mm_clone_navigation_bar).height(h.options.navbarHeight);
if(h.stickyNavBarsInited!==true){h.stickyNavBars(h);
h.stickyNavBarsInited=true
}}h.checkResponsive(h);
e(c).trigger("scroll")
};
b.prototype.checkResponsive=function(h){if(e(c).width()>h.options.mm_mobile_breakpoint){e(h.element).removeClass("is-open");
e("html, body").css({overflow:""});
if(e(c).scrollTop()<=h.options.heightAbove){e(".bar-fixed-scroll").removeClass("bar-fixed-top");
e(h.options.mm_clone_navigation_bar).hide()
}}};
b.prototype.stickyNavBars=function(h){e(c).on("scroll",function(){h.options.offsetTop=e(c).scrollTop();
if(h.options.offsetTop>h.options.heightAbove){h.stickNav(h)
}if(h.options.offsetTop<=h.options.heightAbove){h.unstickNav(h)
}})
};
b.prototype.stickNav=function(h){e(".bar-fixed-scroll").addClass("bar-fixed-top");
e(h.options.mm_clone_navigation_bar).show()
};
b.prototype.unstickNav=function(h){if(!e(h.element).hasClass("is-open")){e(".bar-fixed-scroll").removeClass("bar-fixed-top");
e(h.options.mm_clone_navigation_bar).hide()
}};
b.prototype.noticeEvents=function(h,i){e(h.element).find(h.options.mm_notice_close_button).on(i,function(j){j.preventDefault();
h.closeNotice(h,j)
})
};
b.prototype.mobileEvents=function(h,i){e(h.element).find(h.options.mm_mobile_open_main_nav).on(i,function(j){e(h.element).find(".is-open").removeClass("is-open");
j.preventDefault();
h.openMainNav(h)
});
e(h.element).find(h.options.mm_mobile_close_main_nav).on(i,function(j){j.preventDefault();
h.closeMainNav(h)
})
};
b.prototype.desktopEvents=function(h,i){e(a).on(i,function(k){var j=e(k.target);
h.closeNavPanels(h,j)
});
e(h.element).find(h.options.mm_all_toggle_panel_nav).on(i,function(k){k.preventDefault();
var j=e(k.currentTarget);
h.toggleNavPanel(h,j)
})
};
b.prototype.initHeartThisWidget=function(h,i){e(c).resize(function(){h.checkHeartThisSize(h)
});
setTimeout(function(){h.checkHeartThisSize(h)
},10)
};
b.prototype.checkHeartThisSize=function(h){if(e(c).width()<=h.options.mm_mobile_breakpoint){if(!e(h.element).hasClass("is-open")){e(h.options.searchToggle).find(".nav-toggle-panel").css({"margin-right":e(h.options.mm_heart_this_widget).find("a").outerWidth()+36})
}}else{e(h.options.searchToggle).find(".nav-toggle-panel").removeAttr("style")
}};
b.prototype.initMapPanel=function(h,i){e(h.element).find(h.options.mm_map_panel_filters).off(i);
if(e(c).width()>h.options.mm_mobile_breakpoint){e(h.element).find(h.options.mm_map_panel_filters).on(i,function(k){if(e(k.target).is(".megamenu-map-filter")){k.preventDefault()
}k.stopPropagation();
var j=e(k.currentTarget);
j.closest(".megamenu-panel").find(".is-active").removeClass("is-active");
j.addClass("is-active")
})
}};
b.prototype.closeNotice=function(i){var h=e(i.element).find(".notice-bar");
h.slideUp(function(){e(this).remove();
i.initStickyNavBars(i)
})
};
b.prototype.openMainNav=function(h){e(h.options.searchToggle).find(".nav-toggle-panel").removeAttr("style");
if(h.options.offsetTop<=h.options.heightAbove){e("html, body").animate({scrollTop:h.options.heightAbove+1},0,function(){e(h.element).addClass("is-open")
})
}else{e(h.element).addClass("is-open")
}};
b.prototype.forceRedraw=function(h){var i=function(){e("body").css("position","static");
e("body").css("position","relative")
};
setTimeout(i,100)
};
b.prototype.closeMainNav=function(h){e(h.element).removeClass("is-open");
h.checkHeartThisSize(h);
e(c).trigger("scroll")
};
b.prototype.closeNavPanels=function(h,i){if(e("#main-header .is-open").length){if(i.attr("class")=="main-nav-panel"){h.closeMainNav(h)
}else{if(i.closest(".main-nav-panel").length<1){e(h.element).find(".is-open").removeClass("is-open")
}}b.prototype.forceRedraw()
}};
b.prototype.toggleNavPanel=function(i,j){var h=e(j.closest(".nav-bar-panel-nav"));
if(j.closest(".has-children").is(".is-open")){j.closest(".has-children").removeClass("is-open").find(".has-children").removeClass("is-open")
}else{if(h.find(".has-children").length){h.find(".has-children").removeClass("is-open")
}else{e(i.element).find(".has-children").removeClass("is-open")
}j.closest(".has-children").addClass("is-open");
e("#s2id_nav-search-field input.select2-input")[0].focus()
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(a).ready(function(){e(".megamenu").megamenu()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 * data-image-vertical-alignment (bottom, top)
 *
 * Images bottom aligned are centered on large monitors over 1200
 *
 */
;
(function(e,c,a,g){var d="fullwidthbg",f={largeScreenCenter:1200};
function b(j,i){this.element=j;
this.options=e.extend({},f,i);
this._defaults=f;
this._name=d;
this.data_media_type=e(this.element).attr("data-media-type")?e(this.element).attr("data-media-type"):"img";
this.setupImage();
var h=this;
e(c).resize(function(){h.setupImage()
});
c.redrawFullWidthBg=function(){e(c).trigger("resize")
}
}b.prototype.setupImage=function(){var j=this;
var i=e(j.element).find("img").width();
var h=e(j.element).find("img").height();
j.imageFactor=i/h;
j.imageObject=e(j.element).find("img");
j.alignment=e(j.element).attr("data-image-vertical-alignment");
j.data_video=e(j.element).attr("data-video");
if(j.data_video!=""){j.data_videoObject=e(j.data_video)
}j.checkBgImages(j)
};
b.prototype.checkBgImages=function(l){l.containerWidth=e(l.element).width();
l.containerHeight=e(l.element).height();
l.imageObject.width(l.containerWidth);
l.imageHeight=l.imageObject.height();
l.checkImageAttributes(l);
if(l.data_videoObject.length){var i=l.imageObject.width();
var k=l.imageObject.height();
var m=l.imageObject.css("margin-left");
var j=l.imageObject.css("margin-top");
l.data_videoObject.width(i);
l.data_videoObject.css("margin-left",m);
l.data_videoObject.css("margin-top",j)
}};
b.prototype.checkImageAttributes=function(h){if(h.imageHeight<h.containerHeight){h.resizeBgImageHeight(h)
}else{if(h.alignment==="bottom"){h.setImageAlignmentBottom(h)
}else{h.setImageAlignment(h)
}h.imageObject.css("margin-left","0px")
}};
b.prototype.resizeBgImageHeight=function(j){var h=e(j.element).height();
var i=h*j.imageFactor;
j.imageObject.width(i);
var k=Math.abs(j.containerWidth-i)/2;
j.imageObject.css("margin-left",-k+"px");
j.imageObject.css("margin-top","0px")
};
b.prototype.setImageAlignmentBottom=function(h){var j=h.containerHeight-h.imageHeight;
var i=j;
if(h.containerWidth>h.options.largeScreenCenter){i=j/2
}h.imageObject.css("margin-top",-Math.abs(i)+"px")
};
b.prototype.setImageAlignment=function(h){var i=0;
h.imageObject.css("margin-top",i+"px")
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).load(function(){e(".fullwidth-bg").each(function(h,i){e(this).fullwidthbg()
})
})
})(jQuery,window,document);
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{b(a.jQuery)
}}(this,function(e){var a,k={image:null,imageAttribute:"image",holderClass:"imageHolder",container:e("body"),speed:0.2,coverRatio:0.75,holderMinHeight:200,extraHeight:0,mediaWidth:1600,mediaHeight:900,parallax:true,touch:false,dataIdForParallax:0,dataParallaxHeight:200},c={},s=document.documentElement,u="imageScrollModernizr",r=document.createElement(u),i=r.style,d="Webkit Moz O ms",w=d.split(" "),l=d.toLowerCase().split(" "),f={},n=e(window),j=0,p="",m,q=function(F,H,z,G){var y,E,B,C,x=document.createElement("div"),D=document.body,A=D||document.createElement("body");
if(parseInt(z,10)){while(z--){B=document.createElement("div");
B.id=G?G[z]:u+(z+1);
x.appendChild(B)
}}y=["&#173;",'<style id="s',u,'">',F,"</style>"].join("");
x.id=u;
(D?x:A).innerHTML+=y;
A.appendChild(x);
if(!D){A.style.background="";
A.style.overflow="hidden";
C=s.style.overflow;
s.style.overflow="hidden";
s.appendChild(A)
}E=H(x,F);
if(!D){A.parentNode.removeChild(A);
s.style.overflow=C
}else{x.parentNode.removeChild(x)
}return !!E
};
function g(y,x){return typeof y===x
}function h(y,x){return !!~(""+y).indexOf(x)
}function v(z,x){for(var y in z){var A=z[y];
if(!h(A,"-")&&i[A]!==undefined){return x=="pfx"?A:true
}}return false
}function o(y,B,A){for(var x in y){var z=B[y[x]];
if(z!==undefined){if(A===false){return y[x]
}if(g(z,"function")){return z.bind(A||B)
}return z
}}return false
}function b(B,x,A){var y=B.charAt(0).toUpperCase()+B.slice(1),z=(B+" "+w.join(y+" ")+y).split(" ");
if(g(x,"string")||g(x,"undefined")){return v(z,x)
}else{z=(B+" "+(l).join(y+" ")+y).split(" ");
return o(z,x,A)
}}f.csstransforms=function(){return !!b("transform")
};
f.csstransforms3d=function(){var x=!!b("perspective");
if(x&&"webkitPerspective" in s.style){q("@media (transform-3d),(-webkit-transform-3d){#imageScrollModernizr{left:9px;position:absolute;height:3px;}}",function(y,z){x=y.offsetLeft===9&&y.offsetHeight===3
})
}return x
};
c.prefixed=function(z,y,x){if(!y){return b(z,"pfx")
}else{return b(z,y,x)
}};
window.requestAnimationFrame=c.prefixed("requestAnimationFrame",window)||function(B,y){var x=new Date().getTime();
var z=Math.max(0,16-(x-j));
var A=window.setTimeout(function(){B(x+z)
},z);
j=x+z;
return A
};
if(f.csstransforms3d()){p="csstransforms3d"
}else{if(f.csstransforms()){p="csstransforms"
}}if(p!==""){m=c.prefixed("transform")
}a=function(y,x){return{init:function(){this.$imageHolder=e(y);
this.settings=e.extend({},k,x);
this.image=this.$imageHolder.next(".img-src").find("img").last().attr("src")||this.settings.image;
this.mediaWidth=this.$imageHolder.data("width")||this.settings.mediaWidth;
this.mediaHeight=this.$imageHolder.data("height")||this.settings.mediaHeight;
this.coverRatio=this.$imageHolder.data("cover-ratio")||this.settings.coverRatio;
this.extraHeight=parseFloat(this.$imageHolder.attr("data-extra-height"))||this.settings.extraHeight;
this.dataParallaxHeight=parseFloat(this.$imageHolder.attr("data-parallax-height"))||this.settings.dataParallaxHeight;
this.dataIdForParallax=this.$imageHolder.attr("data-id-for-parallax")||this.settings.dataIdForParallax;
this.ticking=false;
if(e("#"+this.dataIdForParallax).length<=0){if(this.image){this.$scrollingElement=e("<img/>",{src:this.image})
}else{throw new Error("You need to provide either a data-img attr or an image option")
}}else{this.$scrollingElement=e("#"+this.dataIdForParallax+" img")
}if(this.settings.touch===true){if(e("div[data-id-for-parallax="+this.dataIdForParallax+"] img").length<=0){this.$scrollingElement.css({maxWidth:"100%",width:"100%"}).prependTo(this.$imageHolder)
}}else{if(this.settings.parallax===true){if(e("#"+this.dataIdForParallax).length>0){this.$scrollerHolder=e("#"+this.dataIdForParallax)
}else{this.$scrollerHolder=e("<div/>",{html:this.$imageHolder.html()}).css(this._getCSSObject({transform:m,top:0,left:0,x:0,y:0,visibility:"hidden",position:"fixed",overflow:"hidden"})).addClass(this.settings.holderClass).prependTo(this.settings.container)
}this.$scrollerHolder.attr("id",this.dataIdForParallax);
this.$imageHolder.css("visibility","hidden").empty();
this.$scrollingElement.css({position:"absolute",visibility:"hidden",maxWidth:"none"}).prependTo(this.$scrollerHolder)
}else{this.$scrollerHolder=this.$imageHolder.css({overflow:"hidden"});
this.$scrollingElement.css({position:"relative",overflow:"hidden"}).prependTo(this.$imageHolder)
}}if(this.settings.touch===false){this._adjustImgHolderHeights();
if(this.settings.parallax===true){this._updatePositions()
}else{this._updateFallbackPositions()
}this._bindEvents()
}},_adjustImgHolderHeights:function(){var D=n.height(),B=n.width(),M=this.coverRatio*D,C,L,J,K,N,z,I,H,O,E,F,A;
var G=0;
M=(this.settings.holderMinHeight<M?Math.floor(M):this.settings.holderMinHeight)+this.extraHeight;
G=this.dataParallaxHeight-M;
M=M+G;
O=Math.floor(D-(D-M)*this.settings.speed);
I=Math.round(this.mediaWidth*(O/this.mediaHeight));
if(I>=B){H=O
}else{I=B;
H=Math.round(this.mediaHeight*(I/this.mediaWidth))
}E=(O-M)/2;
F=(H-O)/2;
A=(D-M)/2;
J=-((D/A)*E)-F;
K=((M/A)*E)-F;
N=K-J;
z=D+M;
C=-(E+F);
L=Math.round((I-B)*-0.5);
this.$scrollingElement.css({height:H,width:I});
this.$imageHolder.height(M);
this.$scrollerHolder.css({height:M,width:I});
this.scrollingState={winHeight:D,fromY:J,imgTopPos:C,imgLeftPos:L,imgHolderHeight:M,imgScrollingDistance:N,travelDistance:z,holderDistanceFromTop:this.$imageHolder.offset().top-n.scrollTop()}
},_bindEvents:function(){var z=this;
n.on("resize",function(A){z._adjustImgHolderHeights();
if(z.settings.parallax===true){z._requestTick()
}else{z._updateFallbackPositions()
}});
if(this.settings.parallax===true){n.on("scroll",function(A){z.scrollingState.holderDistanceFromTop=z.$imageHolder.offset().top-n.scrollTop();
z._requestTick()
})
}},_requestTick:function(){var z=this;
if(!this.ticking){this.ticking=true;
requestAnimationFrame(function(){z._updatePositions()
})
}},_updatePositions:function(){if(this.scrollingState.holderDistanceFromTop<=(this.scrollingState.winHeight)&&this.scrollingState.holderDistanceFromTop>=-this.scrollingState.imgHolderHeight){var B=this.scrollingState.holderDistanceFromTop+this.scrollingState.imgHolderHeight,A=B/this.scrollingState.travelDistance,z=Math.round(this.scrollingState.fromY+(this.scrollingState.imgScrollingDistance*(1-A)));
this.$scrollerHolder.css(this._getCSSObject({transform:m,x:Math.ceil(this.scrollingState.imgLeftPos),y:Math.round(this.scrollingState.holderDistanceFromTop),visibility:"visible"}));
this.$scrollingElement.css(this._getCSSObject({transform:m,x:0,y:z,visibility:"visible"}))
}else{this.$scrollerHolder.css({visibility:"hidden"});
this.$scrollingElement.css({visibility:"hidden"})
}this.ticking=false
},_updateFallbackPositions:function(){this.$scrollerHolder.css({width:"100%"});
this.$scrollingElement.css({top:this.scrollingState.imgTopPos,left:this.scrollingState.imgLeftPos})
},_getCSSObject:function(z){if(p==="csstransforms3d"){z.transform="translate3d("+z.x+"px, "+z.y+"px, 0)"
}else{if(p==="csstransforms"){z.transform="translate("+z.x+"px, "+z.y+"px)"
}else{z.top=z.y;
z.left=z.x
}}return z
}}
};
a.defaults=k;
e.fn.imageScroll=function(x){return this.each(function(){new a(this,x).init()
})
};
return a
}));
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * parallaxImages Jquery Plugin
 *
 */
;
(function(e,c,a,g){var d="parallaxImages",f={lastScrollPosition:0,parallaxInView:false,parallaxOffsetParcentage:20,parallaxSpeed:1,parallaxSpeedMultiplier:1};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.setupParallax(h)
};
b.prototype.setupParallax=function(h){h.setHeightOfWindow(h);
h.options.containerOffset=e(h.element).offset().top;
h.options.parallaxPosition=0;
h.options._parallaxSpeed=parseFloat(h.options.parallaxSpeed*h.options.parallaxSpeedMultiplier);
h.options.parallaxOffset=(e(h.element).find("img").height()-e(h.element).height())/2;
if(h.options.parallaxOffset>=150){h.options.parallaxSpeedMultiplier=8
}else{h.options.parallaxSpeedMultiplier=1
}if(c.addEventListener){c.addEventListener("scroll",function(){h.options.windowPositionTop=e(c).scrollTop();
if((h.options.containerOffset-h.options.heightOfWindow)>=h.options.windowPositionTop){e(h.element).find("img").css({transform:"translate3d(0px, -"+h.options.parallaxOffset+"px, 0px)","-moz-transform":"translate3d(0px, -"+h.options.parallaxOffset+"px, 0px)","-webkit-transform":"translate3d(0px, -"+h.options.parallaxOffset+"px, 0px)","-ms-transform":"translate3d(0px, -"+h.options.parallaxOffset+"px, 0px)","-o-transform":"translate3d(0px, -"+h.options.parallaxOffset+"px, 0px)"});
h.options.parallaxPosition=-h.options.parallaxOffset;
h.options.parallaxInView=false
}else{if((h.options.containerOffset+(h.options.heightOfWindow/2))<=h.options.windowPositionTop){h.options.parallaxInView=false
}else{if(h.options.containerOffset-(h.options.heightOfWindow/2)<=h.options.windowPositionTop){h.options.parallaxInView=true
}else{h.options.parallaxInView=false
}}}if(h.options.parallaxInView){if(h.options.lastScrollPosition<h.options.windowPositionTop){if(h.options.parallaxPosition<h.options.parallaxOffset){h.options.parallaxPosition+=h.options._parallaxSpeed
}e(h.element).find("img").css({transform:"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)","-webkit-transform":"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)","-moz-transform":"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)","-ms-transform":"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)","-o-transform":"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)"})
}else{if(h.options.parallaxPosition<-1&&h.options.parallaxPosition>-h.options.parallaxOffset){h.options.parallaxPosition-=h.options._parallaxSpeed
}e(h.element).find("img").css({transform:"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)","-webkit-transform":"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)","-moz-transform":"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)","-ms-transform":"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)","-o-transform":"translate3d(0px, "+h.options.parallaxPosition+"px, 0px)"})
}}h.options.lastScrollPosition=h.options.windowPositionTop
});
c.onresize=function(){h.setupParallax(h);
h.setHeightOfWindow(h)
};
c.addEventListener("orientationchange",function(){h.setupParallax(h);
h.setHeightOfWindow(h)
},false)
}};
b.prototype.setHeightOfWindow=function(h){h.options.heightOfWindow=e(c).height()
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).bind("load",function(){})
})(jQuery,window,document);
/*!
 * Responsive Image Height Helper
 * Responsive image helper to set the image container height based on current image height.
 */
;
var responsiveImageHelper={};
responsiveImageHelper.bindEvents=function(){if(!window.addEventListener){window.attachEvent("resize",responsiveImageHelper.setContainerHeight);
window.attachEvent("orientationchange",responsiveImageHelper.setContainerHeight)
}else{$(window).resize(function(){responsiveImageHelper.setContainerHeight()
});
window.addEventListener("orientationchange",function(){responsiveImageHelper.setContainerHeight();
$(window).trigger("resize")
},false)
}responsiveImageHelper.setContainerHeight()
};
responsiveImageHelper.setContainerHeight=function(){$(".largeimage-container").each(function(){var a=$(this).find("img").height()*parseFloat(20)/100,c=600,b=$(this).find("img").height()-a;
b=(b<=c)?b:c;
$(this).css("height",b);
$(this).find("img").css("margin-top",-($(this).find("img").height()/2))
})
};
$(window).bind("load",function(){responsiveImageHelper.bindEvents()
});
var navScroller=navScroller||{};
navScroller.sectionDistances={};
navScroller.sectionLinks=new Array();
navScroller.init=function(){$(".navScroller-section").each(function(b,c){if($("html").hasClass("lt-ie9")){}else{navScroller.sectionDistances[b]=$(this).offset().top
}var a=$(this).attr("data-section-name");
navScroller.sectionLinks.push($('ul.navScroller a[href="#'+a+'"]'))
});
navScroller._bindEvents()
};
function getPosition(a){var c=0;
var b=0;
while(a){c+=(a.offsetLeft-a.scrollLeft+a.clientLeft);
b+=(a.offsetTop-a.scrollTop+a.clientTop);
a=a.offsetParent
}return{x:c,y:b}
}navScroller._bindEvents=function(){$("a[href*=#]:not([href=#])",".navScroller").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);
a=a.length?a:$("[data-section-name="+this.hash.slice(1)+"]");
if(a.length){$("html,body").animate({scrollTop:a.offset().top-($("#nav-bar-top").height()+10)},1000);
return false
}}})
};
navScroller._updateActive=function(){var d,a;
var c;
var b=$(".navScroller-section").size();
$window=$(window);
$window.scroll(function(){$(".navScroller-section").each(function(e){d=navScroller.sectionDistances[e];
if(e<b-1){a=navScroller.sectionDistances[e+1];
if($window.scrollTop()>=d&&$window.scrollTop()<a){$("ul.navScroller li.active").removeClass("active");
$(navScroller.sectionLinks[e]).parent().addClass("active")
}}else{if($window.scrollTop()>=d){$("ul.navScroller li.active").removeClass("active");
$(navScroller.sectionLinks[e]).parent().addClass("active")
}}})
})
};
$(function(){navScroller.init()
});
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * TA Mega Menu Helper...
 *
 * The TA navigation bar works mostly without the aid of javascript but this helper adds
 * in some required functionality and enhances the CSS only functionality.
 *
 */
;
(function(e,c,a,g){var d="toggleemailsection",f={asp_search_agent_list_item:".asp-search-agent-list-item",asp_search_agent_list_item_btn_anchor:".asp-search-agent-list-item-btn a",asp_search_agent_list_item_form:".asp-search-agent-list-item-form",asp_search_agent_list_item_form_close_btn:".asp-search-agent-list-item-form-close-btn"};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
var i=((a.ontouchstart!==null)?"click":"touchstart");
h.setupEvents(h)
};
b.prototype.setupEvents=function(i){var h=e(i.element);
h.on("click",i.options.asp_search_agent_list_item_btn_anchor,function(j){var k=e(this).parents(i.options.asp_search_agent_list_item).find(i.options.asp_search_agent_list_item_form);
if(k.hasClass("is-open")){k.removeClass("is-open");
e(this).removeClass("active")
}else{k.addClass("is-open");
e(this).addClass("active")
}j.preventDefault()
});
h.on("click",i.options.asp_search_agent_list_item_form_close_btn,function(k){var l=e(this).parents(i.options.asp_search_agent_list_item).find(i.options.asp_search_agent_list_item_form);
var j=e(this).parents(i.options.asp_search_agent_list_item).find(i.options.asp_search_agent_list_item_btn_anchor);
l.removeClass("is-open");
j.removeClass("active");
k.preventDefault()
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).load(function(){e(".asp-search-agent-list").each(function(h,i){e(this).toggleemailsection()
})
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Input field Jquery Plugin
 *
 */
;
var inputfields=[];
(function(e,c,a,g){var d="inputfield",f={};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var i=this;
e(i.element).find(".input-field-input").focus(function(){e(i.element).addClass("input-field-focus")
});
e(i.element).find(".input-field-input").blur(function(){e(i.element).removeClass("input-field-focus")
});
e(i.element).find("input").blur(function(){i.validateField(i)
});
e(i.element).find("select").blur(function(){i.validateField(i)
});
e(i.element).find(".checkbox-input").blur(function(){i.validateField(i)
});
e(i.element).find("textarea").blur(function(){i.validateField(i)
});
var h=a.getElementById("verifymail")
};
b.prototype.initInputBoxes=function(h){e(h.element).find(".description-box-input-field").focus(function(){var i=e(h.element).parent();
var j=i.hasClass("description-box-outer");
if(!j){e(h.element).parent().addClass("input-field-focus")
}});
e(h.element).find(".description-box-input-field").blur(function(){e(h.element).parent().removeClass("input-field-focus")
})
};
b.prototype.validateField=function(r){var q=false;
var m=e(r.element);
var j=m.find(".input-field-input");
var n=j.val();
var l=j.attr("placeholder");
var p=m.find("select");
var k=m.find(".checkbox-input");
var h=m.find("textarea");
var o=h.val();
var i=h.attr("placeholder");
switch(e(r.element).attr("data-type")){case"text":q=r.isValidText(n,l);
break;
case"mail":q=r.isValidMail(n);
break;
case"verify-mail":q=r.isValidVerifyMail(n);
break;
case"select":q=r.isValidSelect(p);
break;
case"number":q=r.isValidPhoneNumber(n);
break;
case"checkbox":q=r.isValidCheckbox(k);
break;
case"textarea":q=r.isValidTextMessage(o,i);
break
}r.setValidation(r,q)
};
b.prototype.setValidation=function(i,k){var j=e(i.element).find(".input-field-validation-icon");
var h=e(i.element).find(".input-field-validation-alert");
var l=e(i.element);
if(k){j.removeClass("input-field-validation-icon-false");
j.addClass("input-field-validation-icon-true");
h.removeClass("input-field-validation-show");
h.addClass("input-field-validation-hide");
l.attr("data-isValid","true")
}else{j.removeClass("input-field-validation-icon-true");
j.addClass("input-field-validation-icon-false");
h.removeClass("input-field-validation-hide");
h.addClass("input-field-validation-show");
l.attr("data-isValid","false")
}};
b.prototype.isValidText=function(h,i){if(h!==""&&h!=i){return true
}else{return false
}};
b.prototype.isValidMail=function(h){var i=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
return i.test(h)
};
b.prototype.isValidVerifyMail=function(h){if(h===e("#mail").val()&&h!==""){return true
}else{return false
}};
b.prototype.isValidSelect=function(h){if(e(h).val()===null){return false
}else{return true
}};
b.prototype.isValidCheckbox=function(h){if(e(h).is(":checked")){return true
}else{return false
}};
b.prototype.isValidNumber=function(h){var i=/^[0-9-+]+$/;
return i.test(h)
};
b.prototype.isValidPhoneNumber=function(i){var j=/^\+?([0-9]{2})\)?[-. ]?([0-9]{1})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
var h=/^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
var k=/^\+?([0-9]{4})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
return j.test(i)||h.test(i)||k.test(i)
};
b.prototype.isValidTextMessage=function(h,j){var i=false;
if(h!==""){if(typeof(j)!=="undefined"){i=(h!==j)?true:false
}else{i=true
}}else{i=false
}return i
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
$(window).load(function(){initialiseInputFields();
$(".description-box").each(function(a,b){$(b).inputfield()
})
});
function initialiseInputFields(){$(".input-field").each(function(a,b){var c=$(b).inputfield();
inputfields.push(c)
})
}function validateForm(d){var b=$(d).parents("form");
$(inputfields).each(function(e,f){var g=b.find(f);
g.find("input").blur();
g.find("select").blur();
g.find("checkbox").blur();
g.find("textarea").blur();
g.blur()
});
var c=0;
var a=[];
$(inputfields).each(function(e,f){var g=b.find(f);
if(g.attr("data-isValid")!=undefined&&g.attr("data-isValid")!=="true"){a.push(f);
c++
}});
if(c>0){$("html, body").animate({scrollTop:$(a[0]).offset().top-100},500);
return false
}else{return true
}}
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @wma
 * Further changes, comments:
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Favourite
 *
 */
;
(function(e,c,a,g){var d="selectTriggerLink",f={url:""};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.setupEvents(h)
};
b.prototype.setupEvents=function(h){e(h.element).on("change",function(i){h.triggerLink(h,i)
})
};
b.prototype.triggerLink=function(i,j){j.preventDefault();
var h=e(i.element).val();
if(h){c.location.href=h
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).load(function(){e(".select-trigger-link").selectTriggerLink()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @wma
 * Further changes, comments:
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Favourite
 *
 */
;
(function(e,d,a,g){e(".dreamtrip-grid .search-close").hide();
var c=e.cookie("userFavoritesUserId");
var f=e("#nav-heart-this-widget > a").attr("href");

if(f&&f.indexOf("?")>=0){f=f.split("?")[0]
}if(c!=g&&c!=""){f=f+"?userFavoritesUserId="+c;
e("#nav-heart-this-widget > a").attr("href",f)
}var b=b||{};
b.Favourite=b.Favourite||{};
e.cookie("numberOfFavourites",{path:"/",secure:true});
b.Favourite.trigger=function(k){var i="click",j=false,h=e(this).data("button-type");
e("body").on(i,k,function(l){l.preventDefault();
if(h=="atdw-favourite"){j=e(this).hasClass("is-active")
}else{j=e(this).find(".btn-bubble").hasClass("is-active")
}if(!j){b.Favourite.add(e(this),l,h)
}})
};
b.Favourite.favouriteCounter=function(h){e.ajax({url:"/apps/tourismaustralia/favorites/list.json?userFavoritesUserId="+c,type:"GET",contentType:"application/json",dataType:"json",cache:false,success:function(j){var i=j.length;
if(i>0){e(h).find(".my-trip-count").text(i);
e(h).find(".icon-heart").addClass("icon-circle");
e(h).parent().removeClass("favourite-empty").addClass("favourite-added");
e(h).parent().parent().addClass("has-favourites");
e(d).trigger("resize");
e.cookie("numberOfFavourites",i)
}e(d).trigger("resize")
},error:function(){}})
};
b.Favourite.add=function(k,l){var h=k.attr("data-pagepath"),j=false,i=k.data("button-type");
if(i=="atdw-favourite"){j=k.hasClass("is-active")
}else{j=k.find(".btn-bubble").hasClass("is-active")
}if(!j){e.ajax({url:"/apps/tourismaustralia/favorites/add.json?page="+h,type:"POST",contentType:"application/json",dataType:"json",cache:false,success:function(q){var p=q.length;
var n=k.data("button-type");
if(n=="atdw-favourite"){k.closest(".is-atdw").find(".btn-bubble").addClass("is-active")
}else{k.find(".btn-bubble").addClass("is-active")
}e("#nav-heart-this-widget").find(".icon-heart").addClass("icon-circle");
e("#nav-heart-this-widget").find(".my-trip-count").text(p);
e("#nav-heart-this-widget").removeClass("favourite-empty").addClass("favourite-added");
e("#nav-heart-this-widget").parent().addClass("has-favourites");
e.cookie("numberOfFavourites",p);
e(d).trigger("resize");
var m=e.cookie("userFavoritesUserId");
var o=e("#nav-heart-this-widget > a").attr("href");
console.log("favUrl=="+o);
if(o.indexOf("?")>=0){o=o.split("?")[0]
}if(m!=g&&m!=""){o=o+"?userFavoritesUserId="+m;
e("#nav-heart-this-widget > a").attr("href",o)
}},error:function(){}})
}};
b.Favourite.GetParameterValues=function(l){var h=d.location.href.slice(d.location.href.indexOf("?")+1).split("&");
for(var j=0;
j<h.length;
j++){var k=h[j].split("=");
if(k[0]==l){return k[1]
}}};
e(d).load(function(){b.Favourite.trigger(".favourite, .bubble-colour-favourite");
b.Favourite.favouriteCounter("#nav-heart-this-widget a");
var h=b.Favourite.GetParameterValues("userFavoritesUserId");
if(c==null||c==""||h!=c){e(".dreamtrip-grid .search-close").hide()
}else{if(h==c){e(".dreamtrip-grid .search-close").show()
}}})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Add To dream trip Jquery Plugin
 *
  * Handles animating the ".icon-heart-animate" element when
  * .favourite-btn or .bubble-colour-favourite is clicked
 *
 */
;
(function(e,c,a,g){var d="addDreamTrip",f={animate_element:".icon-heart-animate"};
function b(i,h){if(this.isInit!==true){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.isInit=true;
this.init()
}}b.prototype.init=function(){var h=this;
h.setupEvents(h)
};
b.prototype.setupEvents=function(m){var l=e(m.element);
var k=e(m.options.animate_element);
var j="1px",n="1.4em",i,h;
l.click(function(o){if(m.animating==true){return
}m.animating=true;
if(e(c).width()<768){i="-14px";
h="3.1em"
}else{if(e(c).width()<992){i="-14px";
h="3.5em"
}else{i="-14px";
h="3.5em"
}}k.css({opacity:"1","font-size":n,left:j}).animate({opacity:0,fontSize:h,left:i},800,"linear",function(){m.animating=false
}).css({opacity:"1","font-size":n,left:j})
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).load(function(){e(".favourite-btn").addDreamTrip();
e(".bubble-colour-favourite").addDreamTrip()
});
e(c).on("ta-atdwresultspopulated",function(){e(".bubble-colour-favourite").addDreamTrip()
})
})(jQuery,window,document);
var atdwFilterLayout=(function(){var a={};
var b={filterContainer:".atdw-refresh-results-filter-container",upperContainer:".atdw-refresh-results-filter-upper",lowerContainer:".atdw-refresh-results-filter-lower",lessMoreControl:".atdw-refresh-dropdown-control",dropdownItem:".atdw-refresh-results-item",textInputItem:".atdw-refresh-results-input",locationInfo:".atdw-refresh-results-info",categorySelectDesktop:".desktop-cat-switch",categorySelectMobile:".mob-cat-switch",dataTrigger:"trigger",dataCurrentCategory:"data-trigger-show",messages:{more:$(".atdw-refresh-moreless-control.more").text(),less:$(".atdw-refresh-moreless-control.less").text()},doubleClass:"double",tripleClass:"triple",isActive:"is-active"};
a.initElement=function(){var e=$(b.lessMoreControl);
var c=$("[data-trigger]");
var d=$(b.categorySelectMobile);
e.click(function(){a.toggleLessOrMore(this)
});
c.click(function(g){g.preventDefault();
var f=$(this).data(b.dataTrigger);
a.setCategory(f)
});
d.change(function(){var f=$(this).val();
a.setCategory(f)
})
};
a.setFilterLayout=function(){var d=$(b.upperContainer);
var c=$(b.lowerContainer);
$.each(d,function(e,h){var i=$(h).find(b.dropdownItem).length,f=$(this).find(b.textInputItem),g=i%3;
if(g==2){f.addClass(b.doubleClass)
}else{if(g==1){f.addClass(b.tripleClass)
}}});
c.hide()
};
a.setCategory=function(j){var d=$(b.filterContainer);
var f="["+b.dataCurrentCategory+"='"+j+"']";
var e=$(f);
var i=e.find(b.lowerContainer);
var h=$("[data-trigger]");
var c=$("[data-trigger='"+j+"']");
var g=$(b.categorySelectMobile);
g.val(j);
h.removeClass(b.isActive);
c.addClass(b.isActive);
d.removeClass(b.isActive);
e.addClass(b.isActive);
i.addClass(b.isActive)
};
a.toggleLessOrMore=function(g){var d=$(g);
var c=$(b.locationInfo);
var h=$(b.lowerContainer);
var f=b.messages.less;
var e=b.messages.more;
h.slideToggle();
if(d.text()==e){d.text(f);
c.hide()
}else{d.text(e);
c.show()
}};
return a
})();
$(document).ready(function(){atdwFilterLayout.initElement();
atdwFilterLayout.setFilterLayout()
});
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @wma
 * Further changes, comments:
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Favourite
 *
 */
;
(function(e,c,a,g){var d="noticebar",f={currentPagePath:"",noticeCloseButton:".notice-close",noticebarClosed:e.cookie("noticebarClosed")};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
if(e.cookie("noticebarClosed")=="true"){e(h.element).remove()
}else{e.cookie("noticebarClosed","false",{path:"/",secure:true})
}h.setupEvents(h)
};
b.prototype.setupEvents=function(h){e(h.element).find(h.options.noticeCloseButton).click(function(i){i.preventDefault();
e.cookie("noticebarClosed","true")
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).load(function(){e(".noticeBar").noticebar()
})
})(jQuery,window,document);
/*!
 *
 * Original author: Wynne Ma
 *
 * ..............................................................................
 *
 * More Less Overflow
 *
 */
;
var moreLessOverflow=(function(){var a={};
a.settings={tabletViewport:768,desktopViewport:992,overflowElement:".mloverflow",textHidden:".mloverflow-hidden",textContainer:".mloverflow-text",textEllipsis:".mloverflow-ellipsis",viewMoreWrapper:".search-results-view-more",viewMoreBtn:".mloverflow-button",dataBtnTextMore:"data-mloverflow-more",dataBtnTextLess:"data-mloverflow-less",dataOverflowType:"data-mloverflow-type",dataLengthTablet:70,timeoutId:0,timeoutDuration:100,currentViewportWidth:0,asianFonts:{japanese:".ja_jp",chinese:".zh_hk",korean:".ko_kr"}};
a.initialise=function(){a.loadText();
a.onResize();
a.onOrientationChange();
a.onClickViewMore()
};
a.loadText=function(){var b=$(a.settings.overflowElement);
$.each(b,function(i,e){var l=$(e);
var g=l.find(a.settings.textContainer);
var d=a.getMaxWordCount(l);
var j=g.text();
if(j.length>d){var f=l.attr(a.settings.dataOverflowType);
var k=a.getText(l);
switch(f){case"multiline":g.html(k.slice(0,d)+'<span class="mloverflow-ellipsis">...</span><span class="mloverflow-hidden" style="display:none;">'+k.slice(d,k.length)+" </span>");
var h=l.find(a.settings.viewMoreWrapper);
if(h.length==0){g.after('<p class="search-results-view-more"><a href="#" class="mloverflow-button">'+l.data("mloverflow-more")+"</a></p>")
}break;
case"singleline":g.html(k.slice(0,d)+'<span class="mloverflow-ellipsis">...</span><span class="mloverflow-hidden" style="display:none;">'+k.slice(d,k.length)+" </span>");
var c=l.find(a.settings.viewMoreBtn);
if(c.length==0){g.append(' <a href="#" class="mloverflow-button">'+l.data("mloverflow-more")+"</a>")
}break;
case"nomoreless":g.html(k.slice(0,d)+'<span class="mloverflow-ellipsis">...</span><span class="mloverflow-hidden" style="display:none;">'+k.slice(d,k.length)+" </span>");
break
}}})
};
a.onClickViewMore=function(){var b=$(a.settings.viewMoreBtn);
b.on("click",function(g){g.preventDefault();
var d=$(this).parents(a.settings.overflowElement);
var f=d.attr(a.settings.dataBtnTextMore);
var c=d.attr(a.settings.dataBtnTextLess);
d.find(a.settings.textHidden).toggle();
d.find(a.settings.textEllipsis).toggle();
if($(this).text()==f){$(this).text(c)
}else{$(this).text(f)
}})
};
a.getText=function(d){var c=d.find(a.settings.textContainer);
var b=d.find(a.settings.hiddenTextContainer);
var e=c.text().replace("...","")+b.text();
return e
};
a.getMaxWordCount=function(c){var b=utility.getViewPort().width;
var d=c.data("length");
var e=d;
if(b>=a.settings.tabletViewport&&b<=a.settings.desktopViewport){e=a.settings.dataLengthTablet
}if(a.isAsianSite()){e=(e-(Math.floor(e/2.4)))-3
}return e
};
a.isAsianSite=function(){return $(a.settings.asianFonts.japanese).length||$(a.settings.asianFonts.chinese).length||$(a.settings.asianFonts.korean).length
};
a.onResize=function(){var c=$(window);
var b=$(window).width();
c.resize(function(){if(a.getViewPortWidth()!==a.settings.currentViewport){if($(window).width()!=b){b=$(window).width();
clearTimeout(a.settings.timeoutId);
a.settings.timeoutId=setTimeout(a.onResizeEnd,a.settings.timeoutDuration)
}}})
};
a.onOrientationChange=function(){var b=$(window);
b.on("orientationchange",function(){a.settings.currentWidth=a.getViewPortWidth();
a.loadText()
})
};
a.onResizeEnd=function(){a.settings.currentWidth=a.getViewPortWidth();
a.loadText()
};
a.getViewPortWidth=function(){var b=$(window);
return utility.getViewPort().width
};
return a
})();
$(window).load(function(){moreLessOverflow.initialise()
});
var dataLayer_Event={};
var dataLayer_PageLoad={};
(function(e,c,a,g){var d="taDataLayer",f={};
function b(i,h){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var i=this,h;
e(a).on("mouseup",function(j){if(j.ctrlKey||j.button==2){e(j.target).trigger("click")
}});
e(a)[0].addEventListener("click",function(k){e(k.target).filter(function(){var m=e(this);
h=m.closest("[data-ta-data-layer]");
if(h.length){h=i.collateData(i,m,h)
}return h
});
if(h.length){var j=i.isValidateFormRequired(h);
if(j){var l=i.isFormValid(h);
if(l){i.handleResult(i.key,i.data)
}}else{i.handleResult(i.key,i.data)
}}},true);
i.handleCustomEvents(i);
e(a).ready(function(){i.handlePageLoadEvents(i)
})
};
b.prototype.isFormValid=function(h){return h.find("[data-isvalid='false']").length<=0
};
b.prototype.isValidateFormRequired=function(h){var j=h.find("input[data-require-form-validation='true']");
var i=(j.length>0)?true:false;
return i
};
b.prototype.collateData=function(j,i,h){j.data=null;
j.key=h.data("taDataKey");
j.data=e.extend({},e.parseJSON(h.attr("data-ta-data-layer")));
j.getEvent(j,i);
j.collateDynamicElements(j);
j.collateDynamicData(j,h);
if(j.data.event===false){h=false
}return h
};
b.prototype.collateDynamicElements=function(m){var l=new RegExp("selector()");
var n=m.grepData(l,m.data);
if(typeof n!=="undefined"){for(var k=0;
k<n.length;
k++){var j=n[k];
var h=m.data[j].split("=")[1];
m.data[j]=m.formatString(e(h).text())
}}};
b.prototype.collateDynamicData=function(m,h){if(m.data.event!==false){var l=new RegExp("data()");
var o=m.grepData(l,m.data);
if(typeof o!=="undefined"){for(var k=0;
k<o.length;
k++){var j=o[k];
var n=m.data[j].split(".")[1];
m.data[j]=h.attr(n)
}}}};
b.prototype.getEvent=function(j,h){var i=h.closest("[data-ta-data-event]");
if(i.length){j.data.event=i.data("taDataEvent")
}};
b.prototype.handleCustomEvents=function(j){var i="intro";
var h="";
e(a).on("ctsEvent.state",function(m,l){i=l
});
e(a).on("ctsEvent.play",function(m,l){if(h!==i){h=i;
j.handleResult("chaseTheSun",{event:"chaseTheSunVideoStart-v5",chaseTheSunvideoName:i})
}else{j.handleResult("chaseTheSun",{event:"chaseTheSunVideoResume-v5",chaseTheSunvideoName:i,chaseTheSunVideoPercentWatched:l})
}});
e(a).on("ctsEvent.ended",function(l){j.handleResult("chaseTheSun",{event:"chaseTheSunVideoFinish-v5",chaseTheSunvideoName:i})
});
var k=0;
e(".hotornot-refresh-btn").on("click",function(l){k++
});
e(".category").on("click",function(n){var m=e(".hotornot-category:visible"),l=e(this).find(".hotornot-category");
j.handleResult("hotOrNot",{event:"hotOrNot-v5",hotOrNotCategory1:j.formatString(m.eq(0).text()),hotOrNotCategory2:j.formatString(m.eq(1).text()),hotOrNotResult:j.formatString(l.text()),hotOrNotRefreshCounter:k})
});
e(".search-result-count-copy").on("change",function(n){var l=e(this).text();
var m=e(".site-search .search-input").val();
j.handleResult("siteSearch",{event:"siteSearchResults-v5",siteSearchKeyword:m,siteSearchResultCount:l})
});
e(".shareicons").on("click",function(p){var r=e(p.target).closest("[data-ta-data-key]");
var m=r.attr("displaytext");
var q=r.attr("st_url");
var n=r.closest("[data-share-partner-lead]").attr("data-share-partner-lead");
var l=JSON.parse(n);
var o={};
o.shareThisApp=j.formatString(m);
o.shareThisUrl=j.formatString(q);
e.extend(l,o);
j.handleResult("shareThis",l)
});
e(c).on("nav-search-triggered",function(m){var l=m.originalEvent.detail.trim();
j.handleResult("siteSearch",{event:"siteSearch-v5",siteSearchKeyword:l})
});
e("#nav-main-panel-search .nav-popular-searches-link").click(function(){var l=e(this).text();
j.handleResult("siteSearch",{event:"siteSearch-v5",siteSearchKeyword:l})
});
e(".site-search").on("keypress",function(n){if(n.which==13){var l=e(".site-search .search-input");
var m="";
if(l.length>0){m=l.val().trim()
}j.handleResult("siteSearch",{event:"siteSearch-v5",siteSearchKeyword:m})
}});
e(a).on("brightcove.play",function(m,l){j.handleResult("brightcoveVideo",{event:"brightcoveVideoStart-v5",videoId:l.vid,videoName:l.videoTitle})
});
e(a).on("brightcove.ended",function(m,l){j.handleResult("brightcoveVideo",{event:"brightcoveVideoEnded-v5",videoId:l.vid,videoName:l.videoTitle})
});
e(c).on("message",function(m){if(m&&m.originalEvent&&m.originalEvent.data&&m.originalEvent.origin){var l=e(a.getElementById(m.originalEvent.data));
if(l&&l.context){l=l.context
}if(l&&l.src&&l.src.indexOf(m.originalEvent.origin)===0&&l.getAttribute("data-ta-data-key")&&l.getAttribute("data-ta-data-layer")){j.handleResult(l.getAttribute("data-ta-data-key"),e.parseJSON(l.getAttribute("data-ta-data-layer")))
}}});
e(".atdw-refresh-btn").on("atdw.search",function(m,l){e.extend(l,{event:"ATDWAtlasRefreshResultsClick-v5"});
j.handleResult("atdwAtlasModule",l)
});
e("#panoramicVideo").on("data.layer.event",function(m,l){j.handleResult("custKey",l)
});
e("#youkuplayer").on("data.layer.event",function(m,l){console.log("youku:"+l);
j.handleResult("custKey",l)
});
e("#weiboshare").on("data.layer.event",function(m,l){console.log("weibo:"+l);
j.handleResult("custKey",l)
});
e("#wechatshare").on("data.layer.event",function(m,l){console.log("wechat:"+l);
j.handleResult("custKey",l)
});
e("#panoramicCarousel").on("data.layer.event",function(m,l){j.handleResult("custKey",l)
});
e(".generic-event-tracking").on("data.layer.event",function(m,l){j.handleResult("custKey",l)
})
};
b.prototype.grepData=function(i,k){var h=[];
for(var j in k){if(k[j].match(i)){h.push(j)
}}return h.length<=0||h
};
b.prototype.formatString=function(h){if(typeof(h)!=="undefined"){return h.trim().toLowerCase()
}};
b.prototype.handleResult=function(h,i){dataLayer_Event={};
dataLayer_Event[h]=i;
if(typeof _satellite!=="undefined"){_satellite.track(i.event)
}};
b.prototype.handlePageLoadEvents=function(h){var i=h.getPageLoadData();
dataLayer_PageLoad.PAGE=h.getPageData(i,h);
dataLayer_PageLoad.ContentInfo=h.getContentData(i,h);
dataLayer_PageLoad.Attributes=h.getAttributes();
dataLayer_PageLoad.USER=h.getUserInfo()
};
b.prototype.getPageData=function(k,j){var i={};
var h=(typeof(k.PageInfo)!=="undefined")?k.PageInfo.template:"";
i.Server=location.hostname;
i.Template="Aus.com:"+h;
i.PageInfo=j.getPageInfoData(j);
return i
};
b.prototype.getPageInfoData=function(h){var i={};
i.pageTitle=e(a).attr("title");
i.breadcrumbs=h.getBreadcrumbs();
i.timeZone=h.getTimezone();
i.metakeywords=e("meta[name=keywords]").attr("content");
return i
};
b.prototype.getContentData=function(i){var h={};
h.title=(typeof(i.Hero)!=="undefined")?i.Hero.title:"";
h.author=(typeof(i.PageInfo)!=="undefined")?i.PageInfo.jcrCreatedBy:"";
h.contentType="";
h.tagCloud=(typeof(i.TagCloud)!=="undefined")?i.TagCloud.tagList:"";
h.publishDate=(typeof(i.PageInfo)!=="undefined")?i.PageInfo.jcrCreated:"";
h.modifiedDate=(typeof(i.PageInfo)!=="undefined")?i.PageInfo.lastModified:"";
return h
};
b.prototype.getAttributes=function(){var h={};
h.country=e(".dropdown-select-country :selected").text().trim();
h.language=e(".dropdown-select-language :selected").text().trim();
return h
};
b.prototype.getUserInfo=function(){var h={};
h.profileInfo={mID:"",userPreference:""};
h.social={twitterID:"",twitterInfo:"",faceookID:""};
return h
};
b.prototype.getBreadcrumbs=function(){var j=e(".breadcrumb li");
var i="";
var h=j.length;
if(j.length>0){e.each(j,function(k,l){i+=l.innerText;
if(!(k==h-1)){i+="|"
}})
}return i
};
b.prototype.getTimezone=function(){var i=new Date();
var m=(i.getTime()-i.getMilliseconds())/1000;
var k=new Date(m*1000);
var j=k.toTimeString();
var h=j.indexOf("GMT");
var l=k.toTimeString().substring(h,j.length);
return l
};
b.prototype.getPageLoadData=function(){var h=e(".footer-analytic-data").text();
var i=e.parseJSON(h);
return i
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */
;
(function(f,d,a,b){var e="seasonalWeather",g={propertyName:"value",tableSet:".seasonal-weather-table",toggleButton:".seasonal-weather-heading-container",isMobile:false,tableSetTotal:4,totalColPerTable:4,currentWidth:0};
function c(i,h){this.element=i;
this.options=f.extend({},g,h);
this._defaults=g;
this._name=e;
this.init()
}c.prototype.init=function(){var h=this;
h.trimPrototype();
h.currentWeatherIcon(h);
h.currentMonthHighlight(h);
h.viewportWidth(h);
f(d).on("resize",f.proxy(h.viewportWidth,h));
h.accordion(h);
h.miniTempCalc(h);
h.tempCalc(h);
h.hideRowOnNoData(h);
h.options.currentWidth=b.getViewPort().width
};
c.prototype.accordion=function(i){i=this;
var h=f(i.element).find(i.options.toggleButton);
h.on("click",function(l){var k=f(l.currentTarget);
var j=k.hasClass("is-open");
if(i.options.isMobile){if(j){k.removeClass("is-open").next().slideUp("fast")
}else{k.addClass("is-open").next().slideDown("fast")
}}else{return false
}})
};
c.prototype.viewportWidth=function(k){k=this;
if(k.options.currentWidth!==b.getViewPort().width){var i=f(k.options.tableSet),h=f(k.options.toggleButton);
var j=b.getViewPort().width,l=991;
if(j<=l){k.options.isMobile=true;
h.removeClass("is-open");
i.hide()
}else{k.options.isMobile=false;
h.removeClass("is-open");
i.show()
}}};
c.prototype.tempCalc=function(h){f("[data-temp-control]").on("click",function(k){var o=f("[data-temp-master]").data("temp-master");
var i=f(this).data("temp-control");
var m=f("[data-temp-master]");
var j=f(".seasonal-weather"),l=j.find(".centigrade"),n=j.find(".fahrenheit");
if(i=="centigrade"){n.hide();
l.show();
c.prototype.updateTempUnitStatus(j,"centigrade")
}else{l.hide();
n.show();
c.prototype.updateTempUnitStatus(j,"fahrenheit")
}})
};
c.prototype.updateTempUnitStatus=function(h,j){var i=h.find("[data-temp-control='"+j+"']");
if(j=="centigrade"){i.nextAll(".is-active").removeClass("is-active");
i.addClass("is-active")
}else{i.prevAll(".is-active").removeClass("is-active");
i.addClass("is-active")
}};
c.prototype.miniTempCalc=function(h){f("[data-weather-temp]").on("click",function(){var j=f(this),m=j.closest(".weather-content-wrapper");
var k=j.data("weather-temp"),l=m.find(".weather-is-fahrenheit"),i=m.find(".weather-is-celsius");
if(k=="is-fahrenheit"){i.removeClass("is-active");
l.addClass("is-active")
}else{l.removeClass("is-active");
i.addClass("is-active")
}f("[data-weather-temp]").removeClass("is-active");
j.addClass("is-active")
})
};
c.prototype.currentMonthHighlight=function(h){var j=new Date(),k=j.getMonth(),i=f("[data-month-number ='"+k+"']");
i.addClass("current-month")
};
c.prototype.currentWeatherIcon=function(p){p=this;
var j=["clear","sunny","clear","mostlysunny","cloudy","clear","hazy","clear","lightrain","windy","foggy","shower","rain","dusty","frost","snow","storm","lightshower","heavyshower","cyclone"];
var o=f(".weather-content-wrapper"),m=o.find("img"),i=m.data("weather-imgsrc"),n=m.data("weather-imgnumber"),l=".png";
try{if(typeof(imageSourceUrl)!=="undefined"){var h=(i.concat(j[n]).concat(l));
m.attr("src",h).attr("alt",j[n])
}}catch(k){console.log("error in js : "+k)
}};
c.prototype.hideRowOnNoData=function(m){m=this;
var n=f(m.element).find(m.options.tableSet);
for(var l=0;
l<n.get(0).rows.length;
l++){var o=true;
for(var k=0;
k<m.options.tableSetTotal;
k++){var h=n.get(k).rows[l];
o=o&m.isRowEmpty(m,h)
}if(o){for(var k=0;
k<m.options.tableSetTotal;
k++){f(n.get(k).rows[l]).slideUp()
}}}};
c.prototype.isRowEmpty=function(l,j){var h=true;
for(var k=1;
k<l.options.totalColPerTable;
k++){var m=f(j.cells[k]).text().trim();
h=h&(m.length<=0)
}return h
};
c.prototype.trimPrototype=function(){if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}};
f.fn[e]=function(h){return this.each(function(){if(!f.data(this,"plugin_"+e)){f.data(this,"plugin_"+e,new c(this,h))
}})
};
f(d).load(function(){f(".seasonal-weather").seasonalWeather();
var h=f("#seasonal-weather-locale").val();
if(h=="en_us"){f("[data-temp-control='fahrenheit']").trigger("click")
}})
})(jQuery,window,document,utility);
var accordion=(function(a){var b={};
b.settings={accordionHead:".accordion-head",accordionBody:".accordion-body",isCollapse:".is-accordion-collapse",isOpen:".is-accordion-open",isShow:"is-accordion-show",timeoutId:0,timeoutDuration:100,mobileViewPort:768,currentWidth:0};
b.init=function(){var d=$(window);
var c=$(b.settings.accordionHead);
b.settings.currentWidth=d.width();
c.click(function(f){f.preventDefault();
b.onAccordionClick($(this))
});
d.resize(function(){if(b.newViewPortSize()!==b.settings.currentWidth){clearTimeout(b.settings.timeoutId);
b.settings.timeoutId=setTimeout(b.onResizeEnd,b.settings.timeoutDuration)
}});
d.on("orientationchange",function(){var e=$(b.settings.accordionBody);
if(b.isMobile()){b.collapseAccordion(c);
e.hide()
}})
};
b.onAccordionClick=function(e){var c=e.is(":visible");
if(c){var d=e.hasClass(b.settings.isShow);
if(d){b.collapseAccordion(e)
}else{b.expandAccordion(e)
}}};
b.onResizeEnd=function(){var c=$(b.settings.accordionBody);
var d=c.prev();
b.settings.currentWidth=b.newViewPortSize();
if(!b.isMobile()){c.show()
}else{b.collapseAccordion(d)
}};
b.collapseAccordion=function(c){c.removeClass(b.settings.isShow);
c.next().slideUp();
c.find(b.settings.isOpen).removeClass(b.settings.isShow);
c.find(b.settings.isCollapse).addClass(b.settings.isShow)
};
b.expandAccordion=function(c){c.addClass(b.settings.isShow);
c.next().slideDown();
c.find(b.settings.isOpen).addClass(b.settings.isShow);
c.find(b.settings.isCollapse).removeClass(b.settings.isShow)
};
b.isMobile=function(){var c=$(window);
return(a.getViewPort().width<b.settings.mobileViewPort)
};
b.newViewPortSize=function(){var c=$(window);
return a.getViewPort().width
};
return b
})(utility);
$(window).load(function(){accordion.init()
});
var atdwMini=(function(){var a={};
a.settings={atdwSearchContainer:".atdw-search-results-main-wrapper",atdwMobileCat:".section-buttons-mobile",atdwDesktopCat:".section-buttons-desktop",atdwMini:".mini-atdw",atdwMiniAnchor:".mini-atdw--anchor",dataMiniAtdwCat:"miniatdw-category",dataMiniAtdwLink:"miniatdw-link",dataAtdwCat:"data-trigger"};
a.miniAtdwOnClick=function(){var b=$(a.settings.atdwMiniAnchor);
b.click(function(d){var c=$(a.settings.atdwSearchContainer);
if(c.length){a.anchorToAtdw();
a.populateAtdwResults(this)
}else{a.redirect(this)
}return true
})
};
a.anchorToAtdw=function(){var c=$(a.settings.atdwMini);
var b=$(a.settings.atdwSearchContainer);
if(b.length>0&&c.length>0){$("body, html").animate({scrollTop:b.offset().top-100})
}};
a.populateAtdwResults=function(d){var c=$(d);
var g=c.data(a.settings.dataMiniAtdwCat);
var f=$(a.settings.atdwMobileCat);
var b=$(a.settings.atdwDesktopCat);
if(f.is(":visible")){f.find("select option[value="+g+"]").prop("selected",true);
f.find("select").val(g).trigger("change")
}else{var e=b.find("["+a.settings.dataAtdwCat+"="+g+"]");
e.click()
}};
a.redirect=function(c){var b=$(c);
var d=b.data(a.settings.dataMiniAtdwLink);
window.location=d
};
return a
})();
$(window).load(function(){atdwMini.miniAtdwOnClick()
});
var taGoogleMaps=(function(){var a={};
var b={baseApiUrl:"https://maps.googleapis.com",webMapUrl:"https://maps.google.com",moduleContainer:".ta-googlemaps-container",moduleSettings:".ta-googlemaps-container .ta-googlemaps-settings",mapContainer:".ta-googlemaps-map-container",anchorsToModule:"a.ta-googlemaps-anchorto",dataStaticKey:"static-key",dataDynamicKey:"dynamic-key",dataLatLong:"latlong",dataAddress:"address",dataLocale:"locale",layoutBreakpoint:768,staticMapApiPath:"/maps/api/staticmap",staticMapSignerServlet:"/bin/fw/googlemaps/staticmapurlsigner",staticMapContainer:".ta-googlemaps-map-container .ta-googlemaps-map-static",staticMapSize:"384x384",staticMapStandardSize:"384x384",staticMapIE9FallbackSize:"640x237",dynamicMapApiPath:"/maps/api/js",dynamicMapContainer:".ta-googlemaps-map-container .ta-googlemaps-map-dynamic",dynamicMapLoaded:false,mapLabelLibPath:"/etc/designs/tourismaustralia/clientlibs/js/vendor/google-maps-utility-library-v3/maplabel.js",staticMapApiKey:"",dynamicMapApiKey:"",latLong:"",address:"",locale:"",currentViewportWidth:0};
a.init=function(){a.handleAnchorToMap();
var c=$(b.moduleSettings);
a.storeSetting(c,b.dataStaticKey,"staticMapApiKey");
a.storeSetting(c,b.dataDynamicKey,"dynamicMapApiKey");
a.storeSetting(c,b.dataLatLong,"latLong");
a.storeSetting(c,b.dataAddress,"address");
a.storeSetting(c,b.dataLocale,"locale");
if(!b.latLong){return
}b.currentViewportWidth=utility.getViewPort().width;
a.loadMap();
var d=null;
$(window).resize(function(){if(b.currentViewportWidth!==utility.getViewPort().width){b.currentViewportWidth=utility.getViewPort().width;
clearTimeout(d);
d=setTimeout(function(){a.loadMap()
},250)
}})
};
a.handleAnchorToMap=function(){var c=$(b.anchorsToModule);
var d=$(b.mapContainer);
if(c.length>0){c.click(function(f){f.preventDefault();
$("body, html").animate({scrollTop:d.offset().top-75})
})
}};
a.storeSetting=function(c,e,f){var d=c.data(e);
b[f]=(d&&d!=="")?d:""
};
a.loadMap=function(){var e=$(b.staticMapContainer);
var d=$(b.dynamicMapContainer);
if(b.currentViewportWidth<b.layoutBreakpoint||utility.isIE9()){if(utility.isIE9()){a.handleIE9Fallback(e)
}if(!e.is(":visible")){d.hide();
e.show()
}var c=e.find("img").attr("src");
if(typeof c==="undefined"||c===""){a.createStaticMap(b.staticMapSize)
}}else{if(b.currentViewportWidth>=b.layoutBreakpoint){if(!d.is(":visible")){e.hide();
d.show()
}if(!b.dynamicMapLoaded){a.loadDynamicMapLib()
}}}};
a.handleIE9Fallback=function(c){if(b.currentViewportWidth>=b.layoutBreakpoint&&c.hasClass("embed-responsive-1by1")){c.removeClass("embed-responsive-1by1").addClass("embed-responsive-27by10");
b.staticMapSize=b.staticMapIE9FallbackSize;
c.find("img").attr("src","")
}else{if(b.currentViewportWidth<b.layoutBreakpoint&&c.hasClass("embed-responsive-27by10")){c.removeClass("embed-responsive-27by10").addClass("embed-responsive-1by1");
b.staticMapSize=b.staticMapStandardSize;
c.find("img").attr("src","")
}}};
a.createStaticMap=function(d){var e={};
a.validateParamAndAppend(e,"markers",b.latLong);
a.validateParamAndAppend(e,"language",b.locale);
e.zoom="14";
e.size=d;
e.scale="2";
if(b.staticMapApiKey){e.key=b.staticMapApiKey
}var c=b.baseApiUrl+b.staticMapApiPath+"?"+$.param(e);
if(e.key){$.ajax({url:b.staticMapSignerServlet+"?"+$.param({url:c}),success:function(f){a.insertStaticMap(f)
}})
}else{a.insertStaticMap(c)
}};
a.validateParamAndAppend=function(e,c,d){if(d&&d!==""){e[c]=d
}};
a.insertStaticMap=function(d){var c=$(b.staticMapContainer);
c.find("img").attr("src",d);
c.find("a").attr("href",a.getUrlForStaticMapLink());
if(b.address){c.find("span").html(b.address)
}};
a.getUrlForStaticMapLink=function(){var d=utility.getMobileDeviceType();
if(d==="apple"){var c="maps://"+b.webMapUrl+"/maps?"+$.param({q:b.latLong})
}else{if(d==="android"){var c="geo:"+b.latLong+"?"+$.param({q:b.latLong+"("+b.address+")"})
}else{var c=b.webMapUrl+"?"+$.param({q:b.latLong})
}}return c
};
a.loadDynamicMapLib=function(){var c=document.createElement("script");
c.setAttribute("async","");
c.setAttribute("defer","");
var d={language:b.locale,callback:"taGoogleMaps.onLoadDynamicMapLib"};
if(b.dynamicMapApiKey){d.key=b.dynamicMapApiKey
}c.src=b.baseApiUrl+b.dynamicMapApiPath+"?"+$.param(d);
$(b.moduleContainer).append(c)
};
a.onLoadDynamicMapLib=function(){$.getScript(b.mapLabelLibPath,function(){a.createDynamicMap()
})
};
a.createDynamicMap=function(){var e=b.latLong.split(",");
var g={lat:Number(e[0]),lng:Number(e[1])};
var f=new google.maps.Map($(b.dynamicMapContainer).find("div").get(0),{center:g,zoom:15,scrollwheel:false});
var d=new google.maps.Marker({position:g,map:f});
var c=new MapLabel({text:b.address,position:new google.maps.LatLng(g.lat,g.lng),map:f,fontSize:12,fontColor:"#881216",strokeWeight:1,align:"left2"});
b.dynamicMapLoaded=true
};
return a
})();
$(document).ready(function(){taGoogleMaps.init()
});
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Dependencies: http://dotdotdot.frebsite.nl/
 * Using: js/dotdotdot/jquery.dotdotdot.min.js
 *
 * Convert any ".three-dots" element to have ellipsis, use "data-three-dots-read-more-button" attribute to include a read-more button which will be initially hidden then shown if the text is truncated.
 *
 * Attributes:  data-three-dots-read-more-button="#application-read-more-button" // target for read more button
 *              data-three-dots-number-lines="2" // use number of lines, over-rides max-height setting
 *              data-three-dots-min-height="true" // match the min-height and max-height (default true)
 *              data-three-dots-max-height="25px" // use max-height
 *
 * Example:
 * <div class="application-header-heading-copy three-dots" data-three-dots-read-more-button="#application-read-more-button" data-three-dots-max-height="25px">
 *     Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment. Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment. Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment. Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment. Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment. Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment. Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment. Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment. Smiling Mind is modern meditation for young people. It’s a simple tool that gives a sense of calm, clarify and contentment.</div>
 *     <a id="application-read-more-button" class="application-header-heading-copy-link font-icon-arrow-down three-dots-button-initially-hidden" href="#">Read more</a>
 *
 */
;
(function(d,f,h,a){var b="three-dots-read-more-button";
var k="three-dots-number-lines";
var j="three-dots-min-height";
var g="three-dots-max-height";
var e="three_dots",c={};
function i(m,l){this.element=m;
this.options=d.extend({},c,l);
this._defaults=c;
this._name=e;
this.init()
}i.prototype.init=function(){var l=this;
l.setupEvents(l)
};
i.prototype.setupEvents=function(o){var l=d(o.element);
var r=l.data(k);
if(r){var n=parseInt(l.css("line-height"),10);
var q=n*r;
l.css("min-height",q);
var p=l.data(j);
if(p!="false"){l.css("max-height",q)
}}else{var m=l.data(g);
if(m){l.css("max-height",m)
}}l.dotdotdot({watch:true,callback:o.dotdotdotCallback})
};
i.prototype.dotdotdotCallback=function(l,o){var m=d(this);
var n=d(m.data(b));
if(n){if(l){n.show();
n.click(function(p){m.trigger("destroy");
m.addClass("is-read-more");
d(p.currentTarget).hide()
})
}else{n.hide()
}}};
d.fn[e]=function(l){return this.each(function(){if(!d.data(this,"plugin_"+e)){d.data(this,"plugin_"+e,new i(this,l))
}})
};
d(f).on("ready",function(){d(".three-dots").three_dots()
})
})(jQuery,window,document);
$(document).ready(function(){var d="div[data-aus-atdw]";
var b="select[name=state]";
var e="select[name=region]";
var a="select[name=city]";
var c="a[data-aus-atdw-refresh]";
$(d).each(function(o,n){var v=$(n);
var f,l,j,h;
var q;
$.fn.outerHTML=function(){return $("<div />").append(this.eq(0).clone()).html()
};
s(r);
function s(w){q=atdwSearchStates;
v.find(b).each(function(x,y){f=$(y);
f.change(function(){i(f.val())
})
});
v.find(e).each(function(x,y){l=$(y);
l.change(function(){g(l.val())
})
});
v.find(a).each(function(x,y){j=$(y);
j.change(function(){g(j.val())
})
});
v.find(c).each(function(x,y){h=$(y);
h.click(p)
});
if(typeof w==="function"){w()
}}function r(){var w=[];
f.children().each(function(x,y){var z=$(y);
if(z.val()=="."){w.push(z.outerHTML())
}z.remove()
});
$.each(q,function(x,y){w.push('<option value="'+x+'">'+x+"</option>")
});
f.append(w.join(""));
u()
}function i(z){var y;
l.children().each(function(A,B){var C=$(B);
if(C.val()!="."){C.remove()
}else{y=C;
C.remove()
}});
var w=[];
if(y){w.push(y.outerHTML())
}var x=q[z];
if(x){$.each(x,function(A){w.push('<option value="'+A+'">'+A+"</option>")
})
}l.html(w.join(""));
l.val(".");
g(".")
}function g(C){var B;
j.children().each(function(E,F){var G=$(F);
if(G.val()!="."){G.remove()
}else{B=G;
G.remove()
}});
var x=[];
if(B){x.push(B.outerHTML())
}var A=f.val();
var y=q[A];
if(y){var w=y[C];
if(w){for(var z=0;
z<w.length;
z++){var D=w[z];
x.push('<option value="'+D+'">'+D+"</option>")
}}}j.html(x.join(""));
j.val(".")
}function p(){var y=document.location.pathname+"?";
var w=m();
w.state=f.val();
w.region=l.val();
w.city=j.val();
w.page=1;
if($(".atdw-refresh-results-item .btn-primary").attr("data-search-key")!=undefined){w.term=$(".atdw-refresh-results-item .btn-primary").attr("data-search-key");
w.q=$(".atdw-refresh-results-item .btn-primary").attr("data-search-key")
}var x=y+k(w);
window.location.href=x
}function m(){return $.url().param()
}function k(w){var x=[];
$.each(w,function(y,z){x.push(encodeURIComponent(y)+"="+encodeURIComponent(z))
});
return x.join("&")
}function u(){var x=m();
var w=x.state;
var A=q[w];
if(A){f.val(w);
i(w);
var y=x.region;
var z=A[y];
if(z){l.val(y);
g(y);
var B=x.city;
if(z.indexOf(B)>=0){j.val(B)
}}}}})
});
$(document).ready(function(){var e="div[data-aus-result-container]";
var d="div[data-aus-result-container-list]";
var a="div[data-aus-result-container-grid]";
var c="a[data-aus-load-results]";
var b=10;
$(e).each(function(l,i){var n=1;
var p=$(i);
var q=p.attr("data-aus-result-container");
var f;
var j;
var k;
var m;
var o;
p.find(c).each(function(r,s){f=$(s)
});
p.find(d).each(function(r,s){j=$(s)
});
p.find(a).each(function(r,s){k=$(s)
});
function h(s){f.off("click",h);
if(m){m.hide();
j.append(m);
m.show()
}if(o){o.hide();
k.append(o);
o.show()
}var u={page:n,limit:b,term:$.url().param("searchinput"),tagid:$.url().param("tagid")};
var r=q+".searchfragment.json";
var v=function(w){g(w);
if(s){h(false)
}};
$.get(r,u,v,"html")
}function g(u){var r=$(u);
var v=$(r.children()[0]).text();
var s=$(r.children()[1]).text();
if(s==0){f.remove()
}else{m=$(r.children()[3]).children().first();
o=$(r.children()[4]).children().first();
n+=1;
f.on("click",h)
}}h(true)
})
});
$(document).ready(function(){var a="a[data-aus-tab]";
var b="[data-aus-show-tab]";
var d="select[data-aus-select]";
$("[data-aus-tab-container]").each(function(g,h){var e=$(h);
var f=e.find(d);
f.change(function(){c(this.value,e)
});
e.find(a).each(function(i,j){var l=$(j);
var k=l.attr("data-aus-tab");
l.bind("click",function(){f.val(k);
f.change();
$(window).trigger("resize")
});
if(i===0){f.val(k);
f.change()
}})
});
function c(g,e){var f;
e.find(a).each(function(i,j){var h=$(j);
if(g===h.attr("data-aus-tab")){h.addClass("is-active");
f=h.find(".type-below-btn").text()
}else{h.removeClass("is-active")
}});
e.find(b).each(function(i,j){var h=$(j);
if(g===h.attr("data-aus-show-tab")){h.show()
}else{h.hide()
}})
}});
(function(a){if(typeof define==="function"&&define.amd){define(a)
}else{window.purl=a()
}})(function(){var h={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href",embed:"src",object:"data"},n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],c={anchor:"fragment"},a={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},f=/^[0-9]+$/;
function e(r,v){var x=decodeURI(r),u=a[v||false?"strict":"loose"].exec(x),w={attr:{},param:{},seg:{}},s=14;
while(s--){w.attr[n[s]]=u[s]||""
}w.param.query=i(w.attr.query);
w.param.fragment=i(w.attr.fragment);
w.seg.path=w.attr.path.replace(/^\/+|\/+$/g,"").split("/");
w.seg.fragment=w.attr.fragment.replace(/^\/+|\/+$/g,"").split("/");
w.attr.base=w.attr.host?(w.attr.protocol?w.attr.protocol+"://"+w.attr.host:w.attr.host)+(w.attr.port?":"+w.attr.port:""):"";
return w
}function b(s){var r=s.tagName;
if(typeof r!=="undefined"){return h[r.toLowerCase()]
}return r
}function q(v,u){if(v[u].length===0){return v[u]={}
}var s={};
for(var r in v[u]){s[r]=v[u][r]
}v[u]=s;
return s
}function d(w,u,s,x){var r=w.shift();
if(!r){if(g(u[s])){u[s].push(x)
}else{if("object"==typeof u[s]){u[s]=x
}else{if("undefined"==typeof u[s]){u[s]=x
}else{u[s]=[u[s],x]
}}}}else{var v=u[s]=u[s]||[];
if("]"==r){if(g(v)){if(""!==x){v.push(x)
}}else{if("object"==typeof v){v[p(v).length]=x
}else{v=u[s]=[u[s],x]
}}}else{if(~r.indexOf("]")){r=r.substr(0,r.length-1);
if(!f.test(r)&&g(v)){v=q(u,s)
}d(w,v,r,x)
}else{if(!f.test(r)&&g(v)){v=q(u,s)
}d(w,v,r,x)
}}}}function k(v,u,x){if(~u.indexOf("]")){var w=u.split("[");
d(w,v,"base",x)
}else{if(!f.test(u)&&g(v.base)){var s={};
for(var r in v.base){s[r]=v.base[r]
}v.base=s
}if(u!==""){l(v.base,u,x)
}}return v
}function i(r){return j(String(r).split(/&|;/),function(s,y){try{y=decodeURIComponent(y.replace(/\+/g," "))
}catch(v){}var z=y.indexOf("="),x=o(y),u=y.substr(0,x||z),w=y.substr(x||z,y.length);
w=w.substr(w.indexOf("=")+1,w.length);
if(u===""){u=y;
w=""
}return k(s,u,w)
},{base:{}}).base
}function l(u,s,w){var r=u[s];
if(typeof r==="undefined"){u[s]=w
}else{if(g(r)){r.push(w)
}else{u[s]=[r,w]
}}}function o(v){var r=v.length,u,w;
for(var s=0;
s<r;
++s){w=v[s];
if("]"==w){u=false
}if("["==w){u=true
}if("="==w&&!u){return s
}}}function j(w,s){var u=0,r=w.length>>0,v=arguments[2];
while(u<r){if(u in w){v=s.call(undefined,v,w[u],u,w)
}++u
}return v
}function g(r){return Object.prototype.toString.call(r)==="[object Array]"
}function p(s){var r=[];
for(var u in s){if(s.hasOwnProperty(u)){r.push(u)
}}return r
}function m(r,s){if(arguments.length===1&&r===true){s=true;
r=undefined
}s=s||false;
r=r||window.location.toString();
return{data:e(r,s),attr:function(u){u=c[u]||u;
return typeof u!=="undefined"?this.data.attr[u]:this.data.attr
},param:function(u){return typeof u!=="undefined"?this.data.param.query[u]:this.data.param.query
},fparam:function(u){return typeof u!=="undefined"?this.data.param.fragment[u]:this.data.param.fragment
},segment:function(u){if(typeof u==="undefined"){return this.data.seg.path
}else{u=u<0?this.data.seg.path.length+u:u-1;
return this.data.seg.path[u]
}},fsegment:function(u){if(typeof u==="undefined"){return this.data.seg.fragment
}else{u=u<0?this.data.seg.fragment.length+u:u-1;
return this.data.seg.fragment[u]
}}}
}m.jQuery=function(r){if(r!=null){r.fn.url=function(u){var s="";
if(this.length){s=r(this).attr(b(this[0]))||""
}return m(s,u)
};
r.url=m
}};
m.jQuery(window.jQuery);
return m
});
var mosiacViewMore=(function(){var a={};
a.settings={atdwMosaicContainer:".mosaic-item-detail-container",view_more_selector:".mosaic-item-container-view-more",maxTexLength:200};
a.initViewMore=function(){$(a.settings.atdwMosaicContainer).each(function(b,c){var d=$(c);
d.find(a.settings.view_more_selector).each(function(g,i){var k=$(i);
var f=k.prev();
var h=f.text();
if(h.length<=a.settings.maxTexLength){k.remove()
}else{var e=h.length;
var j=e-3;
if(h.substring(j,e).indexOf("...")<0){var l=h.substring(0,a.settings.maxTexLength)+"...";
f.text(l);
k.unbind("click").bind("click",function(){f.text(h);
k.remove()
})
}}})
})
};
return a
})();
$(window).load(function(){mosiacViewMore.initViewMore()
});
$(document).ready(function(){var c="div.search-results-copy-container";
var b="p.search-results-view-more";
var a=200;
$(c).each(function(d,e){var f=$(e);
f.find(b).each(function(h,j){var k=$(j);
var g=k.prev();
var i=g.text();
if(i.length<=a){k.remove()
}else{var l=i.substring(0,a)+"...";
g.text(l);
k.click(function(){g.text(i);
k.remove()
})
}})
})
});
var CQ=CQ||_g;
CQ.TA=CQ.TA||{};
CQ.TA.ViewUtils={viewmore:function(d,c,b,a){d.find(b).each(function(f,h){var i=$(h);
var e=i.prev();
var g=e.text();
if(g.length<=a){i.remove()
}else{var j=g.substring(0,a)+"...";
e.text(j);
i.click(function(){e.text(g);
i.remove()
})
}})
}};
$(document).ready(function(){var b="[data-aus-hotornot]";
var a="[data-aus-hotornot-category]";
var e="[data-aus-hotornot-refresh]";
var d="[data-aus-hotornot-results]";
var g="[data-aus-hotornot-results-close]";
var h="[data-aus-hotornot-results-show]";
var f="[data-aus-hotornot-results-hide]";
$(b).each(function(p,n){var q=$(n);
var u=q.find(".hotornot-selector");
var i=q.find(a);
var s=q.find(d);
var k=i.slice(0);
var v=[];
var o=c(0,9);
var m=c(0,9);
while(o===m){m=c(0,9)
}$(i[o]).show();
$(i[m]).show();
i.each(function(w,x){var y=$(this).attr("data-aus-hotornot-category");
$(this).click(function(C){C.preventDefault();
j(y);
l(this);
var B=i.filter(":visible")[0];
var A=$.inArray(B,k);
var z=c(0,k.length);
while(A===z){z=c(0,k.length)
}$(k[z]).show();
window.redrawFullWidthBg()
})
});
q.find(g).click(function(A){var z=$(this);
var w=(z.parents(d));
w.slideUp("slow");
var y=w.data("aus-hotornot-results");
var x=q.find("[data-aus-hotornot-category="+y+"]")[0];
r(x);
A.preventDefault()
});
q.find(e).click(function(z){z.preventDefault();
$(this).trigger("blur");
var C=i.filter(":visible");
var A=[];
for(var y=0;
y<C.length;
y++){var B=$.inArray(C[y],k);
if(B!=-1){A.push(B)
}}var x=c(0,k.length);
while($.inArray(x,A)!=-1){x=c(0,k.length)
}var w=c(0,k.length);
while($.inArray(w,A)!=-1||x==w){w=c(0,k.length)
}i.hide();
$(k[x]).show();
$(k[w]).show();
window.redrawFullWidthBg()
});
q.find(h).each(function(w,x){var y=$(x);
y.click(function(z){y.parents(d).addClass("is-expanded");
z.preventDefault()
})
});
q.find(f).each(function(x,y){var w=$(y);
w.click(function(z){w.parents(d).removeClass("is-expanded");
z.preventDefault()
})
});
function j(y){var x="[data-aus-hotornot-results="+y+"]";
var w=q.find(x);
w.insertAfter(u);
w.slideDown("slow")
}function l(x){var w=$.inArray(x,k);
if(w>-1){$(x).hide();
k.splice(w,1);
v.push(x);
if(v.length==5){u.hide();
window.redrawFullWidthBg()
}}}function r(x){var w=$.inArray(x,v);
if(w>-1){v.splice(w,1);
k.push(x);
if(v.length<5&&u.is(":hidden")){u.show();
q.find(e).trigger("click");
window.redrawFullWidthBg()
}}}});
function c(j,i){return Math.floor((Math.random()*i)+j)
}});
$(document).ready(function(){var e="div.asp-search-form";
var f="select[name=country]";
var b="select[name=state]";
var a="select[name=city]";
var d="a[data-aus-atdw-refresh]";
var c="p[data-asp-search-result-count]";
$(e).each(function(n,m){var u=$(m);
var r;
var g;
var j;
var h;
var p;
$.fn.outerHTML=function(){return $("<div />").append(this.eq(0).clone()).html()
};
$.getJSON("/bin/ta/asplocations.json",function(v){p=v;
u.find(f).each(function(w,x){r=$(x);
r.change(function(){q(r.find("option:selected").text())
})
});
u.find(b).each(function(w,x){g=$(x);
g.change(function(){i(g.val())
})
});
u.find(a).each(function(w,x){j=$(x)
});
u.find(d).each(function(w,x){h=$(x);
h.click(o)
});
s()
});
function q(x){var w;
g.children().each(function(z,A){var B=$(A);
if(B.val()){if(B.val()!="."){B.remove()
}else{w=B;
B.remove()
}}});
var v=[];
if(w){v.push(w.outerHTML())
}var y=p[x];
if(y){$.each(y,function(A){if(A&&A!=""&&A!="."&&A!="-"){var z=A.charAt(0).toUpperCase()+A.slice(1);
v.push('<option value="'+A+'">'+z+"</option>")
}})
}g.append(v.join(""));
g.val("");
i()
}function i(B){var A;
j.children().each(function(D,E){var F=$(E);
if(F.val()){if(F.val()!="."){F.remove()
}else{A=F;
F.remove()
}}});
var w=[];
if(A){w.push(A.outerHTML())
}var z=r.find("option:selected").text();
var x=p[z];
if(x&&B){var v=x[B];
if(v){for(var y=0;
y<v.length;
y++){var C=v[y];
w.push('<option value="'+C+'">'+C+"</option>")
}}}j.append(w.join(""));
j.val("")
}function o(){var x=document.location.pathname+"?";
var v=l();
v.state=r.find("option:selected").text();
v.region=g.val();
v.city=j.val();
v.page=1;
var w=x+k(v);
window.location.href=w
}function l(){return $.url().param()
}function k(v){var w=[];
$.each(v,function(x,y){w.push(encodeURIComponent(x)+"="+encodeURIComponent(y))
});
return w.join("&")
}function s(){var w=l();
var x=w.country;
var y=p[x];
if(y){r.find("option:text="+x+"").attr("selected","selected");
q(x);
var v=w.state;
var z=y[v];
if(z){g.val(v);
i(v);
var A=w.city;
if(z.indexOf(A)>=0){j.val(A)
}}}}})
});
(function(c,b,a,e){var d=(function(){var f={};
f.settings={dataWeatherDisclaimerAttribute:"data-weather-disclaimer-display",weatherDisclaimerModule:".weather-disclaimer-wrapper"};
f.displayWeatherDisclaimer=function(){var i=c("["+f.settings.dataWeatherDisclaimerAttribute+"]");
var h=i.length;
var j=false;
while(h--){if(i[h].getAttribute(f.settings.dataWeatherDisclaimerAttribute).toLowerCase()=="true"){j=true;
break
}}var g=c(f.settings.weatherDisclaimerModule);
if(j){g.show()
}else{g.hide()
}return j
};
return f
})();
c(b).load(function(){d.displayWeatherDisclaimer()
})
})(jQuery,window,document);
$(window).load(function(){var a=$(".print-btn--container");
var b=$(".print-btn");
if(utility.isHandHeldDevice()){a.hide()
}else{b.click(function(){window.print()
})
}});
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Create a read more link to show additional text for a certain element
 *
 * data attributes:
 * data-max-characters - the max number of characters to allow before adding ... to truncate string and turn on read more link
 *
 */
;
(function(e,c,a,g){var d="readMore",f={readMoreContent:".atdw-read-more-content",readMoreLink:".atdw-read-more-link"};
function b(i,h){if(this.isInit!==true){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.isInit=true;
this.init()
}}b.prototype.init=function(){var l=this,j=e(l.element),h=j.find(l.options.readMoreContent),k=j.find(l.options.readMoreLink),i=j.data("max-characters");
l.originalContent=h.text();
if(l.originalContent.length>i){h.text(l.originalContent.substr(0,i)+"...");
k.removeClass("hidden");
k.attr("aria-hidden","false");
j.find(l.options.readMoreLink).on("click",function(m){l.showContent(l);
e(m.currentTarget).addClass("hidden");
e(m.currentTarget).attr("aria-hidden","true");
m.preventDefault()
})
}};
b.prototype.showContent=function(i){var h=e(i.element);
h.find(i.options.readMoreContent).text(i.originalContent)
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).on("ta-atdwresultspopulated load",function(){e(".atdw-read-more").readMore()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Create a view number link to reveal a number for the text *
 *
 * Data attributes:
 *  data-view-number-length - pass in how many characters to show (default 10, 0 will show no number)
 */
;
(function(e,c,a,g){var d="viewNumber",f={viewNumberLength:10,viewNumberContent:".atdw-view-number-content",viewNumberLink:".atdw-view-number-link"};
function b(j,i){if(this.isInit!==true){this.element=j;
var h=e(this.element).data("view-number-length");
if(h>=0){f.viewNumberLength=h
}this.options=e.extend({},f,i);
this._defaults=f;
this._name=d;
this.isInit=true;
this.init()
}}b.prototype.init=function(){var l=this,i=e(l.element),h=i.find(l.options.viewNumberContent),k=i.find(l.options.viewNumberLink);
l.originalContent=h.text();
if(e(c).width()<768){k.remove();
h.removeClass("hide");
var j=i.attr("data-ta-data-layer");
if(j){i.attr("data-ta-data-layer",j.replace("ATDWAtlasPhoneOpen-v5","ATDWAtlasPhoneClick-v5"))
}}else{if(l.options.viewNumberLength==0){h.addClass("hide")
}else{h.text(l.originalContent.substr(0,l.options.viewNumberLength)+"...")
}i.on("click",function(m){if(i.find(l.options.viewNumberLink).length){l.showContent(l);
k.remove();
h.removeClass("hide");
m.preventDefault();
setTimeout(function(){var n=i.attr("data-ta-data-layer");
if(n){i.attr("data-ta-data-layer",n.replace("ATDWAtlasPhoneOpen-v5","ATDWAtlasPhoneClick-v5"))
}},10)
}})
}};
b.prototype.showContent=function(i){var h=e(i.element);
h.find(i.options.viewNumberContent).text(i.originalContent)
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).on("ta-atdwresultspopulated ready",function(){e(".atdw-view-number").viewNumber()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 *
 * Creates a book now button or the fallback visit website link if required
 * Uses the v3 DistributorToolkit
 * <script type="text/javascript" src="https://www.au.v3travel.com/CABS4/Services/ScriptService.jsws/DistributorToolkit?v=1&exl_dn=test_v3_offload&exl_bs=tourism_australia(template)"></script>
 *
 * data attributes:
 * data-providers - a list of comma separated providers
 * data-visit-url - the url for the visit website link
 */
;
(function(e,c,a,g){var d="v3bookNow",f={v3bookNowButton:".v3-booknow--button",v3bookNowVisit:".v3-booknow--visit-website"};
function b(i,h){if(this.isInit!==true){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.isInit=true;
this.init()
}}b.prototype.init=function(){var m=this,l=e(m.element),j=l.find(m.options.v3bookNowButton),i=l.find(m.options.v3bookNowVisit);
var n=l.data("providers")?l.data("providers").split(","):[];
var h=l.data("booking-link");
var k=l.data("product-website");
if(typeof DistributorToolkit==="undefined"){m.setBookingLinkOrWebsite(j,i,h,k)
}else{if(n.length){DistributorToolkit.checkProviderOptIn(n,function o(p){if(p.IsOptedIn){m.setHrefOrRemove(j,p.Url);
m.setHrefOrRemove(i,"")
}else{m.setHrefOrRemove(j,"");
m.setHrefOrRemove(i,k)
}})
}else{m.setBookingLinkOrWebsite(j,i,h,k)
}}l.removeClass("hidden")
};
b.prototype.setBookingLinkOrWebsite=function(j,i,h,k){var l=this;
if(h!=null&&h.length){l.setHrefOrRemove(j,h);
l.setHrefOrRemove(i,"")
}else{l.setHrefOrRemove(i,k)
}};
b.prototype.setHrefOrRemove=function(h,i){if(i!=null&&i.length){h.find("a").attr("href",i)
}else{h.remove()
}};
b.prototype.visitWebsite=function(i,h){var j=this;
if(h!=null&&h.length){i.find("a").attr("href",h)
}else{i.remove()
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).on("ta-atdwresultspopulated load",function(){e(".v3-booknow--container").v3bookNow()
})
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 *
 * ..............................................................................
 * Verify image loaded
 *
 * Check for presence of the image (404) and load a fallback if not present, will automatically load to img tag if present or background-image for div if not.
 * If no fallback image is given, the img element will be hidden.
 *
 * data attributes:
 * data-src - image to load
 * data-src-default - image to display on a failed load
 *
 * example usage:
 * <div class="taVerifyImageLoaded" data-src="http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-fail.jpg" data-src-error="http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat.jpg"></div>
 * <img src="" alt="" class="taVerifyImageLoaded" data-src="http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-fail.jpg" data-src-error="http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat.jpg" />
 *
 */
;
(function(e,c,a,g){var d="taVerifyImageLoaded",f={};
function b(i,h){if(this.isInit!==true){this.element=i;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.isInit=true;
this.init()
}}b.prototype.init=function(){var k=this,j=e(k.element),i=j[0].tagName,l=j.data("src"),h=j.data("src-error");
k.init=function(){if(l){var m=new Image();
m.onload=function(){k.loadImage(l)
};
m.onerror=function(){k.handleError(h)
};
m.src=l
}else{k.handleError(h)
}};
k.handleError=function(m){if(m){k.loadImage(m)
}else{j.hide()
}};
k.loadImage=function(m){if(i=="IMG"){j.attr("src",m)
}else{j.css("background-image","url("+m+")")
}img=g
};
k.init()
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
e(c).on("ta-atdwresultspopulated verifyImagesLoaded ready",function(){e(".taVerifyImageLoaded").taVerifyImageLoaded()
})
})(jQuery,window,document);
/*!
 *
 * Select/Multiselect
 *
 * controlls initialising the select2 single (.form-select-field-container) and multiple (.form-multiselect-field-container) selects
 *
 * Requires https://select2.github.io/ - Select2 (Version: 3.5.4)
 * data attributes:
 *
 */
;
(function(d,c,a,e){var b=(function(){var f={};
f.settings={};
f.init=function(g,h){d("#"+g).select2().select2(h)
};
return f
})();
d(a).ready(function(){d(".form-multiselect-field-container, .form-select-field-container").each(function(g,h){if(h.id.substr(0,5)!=="s2id_"){var f={placeholder:d(h).data("i18n-label")};
b.init(h.id,f)
}})
})
})(jQuery,window,document);
var multiSelectFormField=(function(){var a={};
a.settings={};
a.initSelect2=function(c,b){$("#"+c).select2().select2({placeholder:b})
};
return a
})();
$(document).ready(function(){var c=$("#e1").data("i18n-label");
var e=$("#e2").data("i18n-label");
var a=$("#e3").data("i18n-label");
var b=$("#e4").data("i18n-label");
var d=$("#e5").data("i18n-label");
multiSelectFormField.initSelect2("e1",c);
multiSelectFormField.initSelect2("e2",e);
multiSelectFormField.initSelect2("e3",a);
multiSelectFormField.initSelect2("e4",b);
multiSelectFormField.initSelect2("e5",d)
});
var taSearchSuggestions=(function(){var a={};
var c={select2ElementId:"#nav-search-field",select2InputElementId:"#s2id_nav-search-field input.select2-input",select2TextHolder:"div.select2-sizer",select2DropdownFirstItem:"#select2-drop .select2-results li:first-child",navSearchButton:".nav-search-button",searchDrop:"#select2-drop",searchDropMask:"#select2-drop-mask",settingsContainer:"#nav-search-settings",searchPathData:"search-path",searchSuggestionsUrlData:"suggestions-url"};
var b={searchPath:"",select2TextHolder:null};
a.init=function(){var e=$(c.settingsContainer);
b.searchPath=e.data(c.searchPathData);
var d=e.data(c.searchSuggestionsUrlData);
a.fetchData(d,function(f){a.createSelect2(f);
a.handleSearches()
})
};
a.fetchData=function(d,e){$.ajax({url:d,dataType:"text",success:function(f){e(a.parseResponse(f))
},error:function(){e([])
}})
};
a.parseResponse=function(e){var g=[];
var d=e.split(/\r?\n/);
for(var f=0;
f<d.length;
f++){var h=d[f].trim();
if(h!==""){g.push({text:h,id:a.encodeParam(h)})
}}return g
};
a.createSelect2=function(e){var f=$(c.select2ElementId);
var g=f.attr("data-locale");
var d=g;
f.select2({createSearchChoice:function(h,i){if(i&&i.length===0){$(c.searchDrop).addClass("no-results")
}else{$(c.searchDrop).removeClass("no-results")
}if($(i).filter(function(){return this.text.localeCompare(h)===0
}).length===0){return{text:h,id:a.encodeParam(h)}
}},placeholder:d,allowClear:false,multiple:true,dropdownCssClass:"searchdrop",minimumInputLength:1,data:e})
};
a.handleSearches=function(){var e=$(c.select2ElementId);
e.on("change",function(f){a.triggerSearch(f.added.id)
});
e.on("select2-loaded",function(){$(c.select2DropdownFirstItem).hide()
});
var d=$(c.navSearchButton);
d.click(function(){a.triggerSearchWithCurrentText()
});
e.on("select2-open",function(f){$(c.searchDropMask).on("mousemove",function(g){a.triggerHoverOnNavSearchButton(g)
});
$(c.searchDropMask).on("mousedown touchstart",function(g){a.triggerClickOnNavSearchButton(g)
});
$(c.select2InputElementId).on("keyup",function(g){if($(this).val().length<1){$(c.searchDrop).addClass("no-results")
}})
});
e.on("select2-close",function(f){$(c.searchDropMask).off("mousemove");
$(c.searchDropMask).off("mousedown touchstart");
$(c.select2InputElementId).off("keyup")
});
e.on("select2-highlight",function(){setTimeout(function(){$(window).trigger("resize")
},20)
})
};
a.triggerClickOnNavSearchButton=function(f){var d=$(c.navSearchButton);
$.mlp=d.pointerEventToXY(f);
if(d.ismouseover()){d.trigger("click")
}};
a.triggerHoverOnNavSearchButton=function(f){var d=$(c.navSearchButton);
$.mlp=d.pointerEventToXY(f);
if(d.ismouseover()){d.addClass("is-in")
}else{d.removeClass("is-in")
}};
a.triggerSearchWithCurrentText=function(){var d=a.getCurrentlyEnteredText();
if(d!==""){a.triggerSearch(a.encodeParam(d))
}};
a.triggerSearch=function(d){document.customDocumentDispatchEvent("nav-search-triggered",d);
window.location=b.searchPath+"?q="+d
};
a.getCurrentlyEnteredText=function(){var d=$(c.select2TextHolder);
return(d.length>0)?d.text():""
};
a.encodeParam=function(d){return encodeURIComponent(d).replace(/%20/g,"+")
};
return a
})();
$(document).ready(function(){taSearchSuggestions.init()
});
(function(a){var b="app";
a[b]=angular.module(b,["ngRoute"])
})((typeof exports==="undefined")?window:exports);
(function(a){(function(b){b.config(["$interpolateProvider",function(c){c.startSymbol("[[").endSymbol("]]")
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.config(["$routeProvider",function(c){c.when("/state/:stateId/ui/:uiId",{event:"routeEvent.type.ui"}).when("/state/:stateId",{event:"routeEvent.type.state"}).when("/ui/:uiId",{event:"routeEvent.type.ui"}).when("/intro/:uiId",{event:"routeEvent.type.intro"}).otherwise({redirect:"",event:"routeEvent.type.default"})
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.run(["$rootScope",function(c){c.safeApply=function(e){var d=this.$root.$$phase;
if(d=="$apply"||d=="$digest"){if(e&&(typeof(e)==="function")){e()
}}else{this.$apply(e)
}}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.factory("routeEvent",["$rootScope","$route","$routeParams","event",function(j,i,k,c){var m={ROUTE_ON_READY:"routeEvent.routeOnReady",ROUTE_UPDATE:"routeEvent.RouteUpdate",ROUTE_TYPE_UI:"routeEvent.type.ui",ROUTE_TYPE_STATE:"routeEvent.type.state",ROUTE_TYPE_DEFAULT:"routeEvent.type.default",ROUTE_TYPE_INTRO:"routeEvent.type.intro"};
var n=false;
var h=function h(p){var r=p.event;
var o=p.params;
var q={type:r,params:o};
return q
};
var f=function l(){if(!n){n=false;
e()
}};
var e=function e(){c.dispatch(m.ROUTE_ON_READY)
};
var d=function d(o){c.dispatch(m.ROUTE_UPDATE,o)
};
var g=function g(){j.$on("$routeChangeSuccess",function(o,q){var p=h(i.current);
d(p);
f()
})
};
g();
return{events:m}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.service("event",["$rootScope",function(c){var d=function d(e,f){return c.$broadcast(e,f)
};
return{dispatch:d}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.factory("ctsBrightcove",["$rootScope","event","$http","model",function(c,h,i,g){var d=function d(l,j){if(typeof l==="undefined"){return
}var k=e(l);
f(k,j)
};
var f=function f(k,j){i({method:"JSONP",url:"http://api.brightcove.com/services/library",params:k}).success(function(n,l,o,m){if(typeof j==="undefined"){return
}j(n)
}).error(function(n,l,o,m){if(typeof j==="undefined"){return
}j(n)
})
};
var e=function e(j){return params={command:"find_video_by_id",media_delivery:"http",token:g.getToken(),video_id:j,video_fields:"renditions",callback:"JSON_CALLBACK"}
};
return{getVideoById:d}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.factory("onResize",["$rootScope","$window","event","routeEvent",function(l,e,c,i){var n={ON_RESIZE_START:"onResize.start",ON_RESIZE_END:"onResize.end",SCREEN_TYPE_EXTRA_SMALL:"onResize.screen.type.extra.small",SCREEN_TYPE_SMALL:"onResize.screen.type.small",SCREEN_TYPE_MEDIUM:"onResize.screen.type.medium",SCREEN_TYPE_LARGE:"onResize.screen.type.large"};
var o=false,m=$(window),j=null;
var k=function k(){m.on("resize",function(p){f(700,h,g)
})
};
var f=function f(p,r,q){var p=p||700;
var q=q||function(){};
var r=r||function(){};
if(!o){r();
o=true
}if(j!=null){clearTimeout(j)
}j=setTimeout(function(){q()
},p)
};
var g=function g(){var p=m.width();
if(p>=0&&p<479){d(n.SCREEN_TYPE_EXTRA_SMALL)
}else{if(p>=480&&p<768){d(n.SCREEN_TYPE_SMALL)
}else{if(p>=768&&p<992){d(n.SCREEN_TYPE_MEDIUM)
}else{if(p>=992){d(n.SCREEN_TYPE_LARGE)
}}}}};
var h=function h(){c.dispatch(n.ON_RESIZE_START)
};
var d=function d(p){o=false;
c.dispatch(n.ON_RESIZE_END,{type:p})
};
l.$on(i.events.ROUTE_ON_READY,function(){k();
g()
});
return{events:n}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.factory("model",["$rootScope","event",function(o,e){var d={pagination:true,itemsMobile:[480,2],itemsTablet:[769,3]};
var n={token:"prXGhDJ7GPEOUAML55QxLNMyT0J1RAhmqqIm-UN4LXJCj_C-6Pjvqw.."};
var h={PAGE_TYPE_UI:"ui",PAGE_TYPE_LOADING:"loading",PAGE_TYPE_ENTRY:"entry",PAGE_TYPE_EXPLORE:"explore",PAGE_TYPE_ERROR:"error",PAGE_TYPE_BYLINE:"byline"};
var r={ON_STATE_SELECTION_UPDATE:"model.on.current.video.update"};
var m={VID_TYPE_STATE:"model.vid.type.state",VID_TYPE_DEFAULT:"model.vid.type.default"};
var g={};
var f;
var q=function q(){return n.token
};
var k=function k(u){var s={};
angular.forEach(i().locations,function(w,v){if(w.state===u){s=w
}});
return s
};
var j=function j(s){return i().pages[s]
};
var i=function i(){if(typeof(f)==="undefined"){var s=$(".cts-data").text();
f=$.parseJSON(s)
}return f
};
var l=function l(){return d
};
var p=function p(){return g
};
var c=function c(s){g=s
};
return{getToken:q,getCarouselProperties:l,getData:i,getDataByVideId:k,getPageData:j,setCurrentVideo:c,getCurrentVideo:p,pages:h,type:m,events:r}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.factory("servicePlayer",["event","ctsBrightcove","serviceRequestFrame","$timeout","model","utility","$interval",function(C,r,q,I,g,v,B){var d,e=true,i,A,u=[],H,w,x=0,n=8,c={PLAYER_ON_PAUSE:"player.on.pause",PLAYER_ON_PLAY:"player.on.play",PLAYER_ON_ENDED:"player.on.ended",PLAYER_ON_PROGRESS:"player.on.progress",PLAYER_ON_LOAD_START:"player.on.load.start",PLAYER_ON_VOLUME_CHANGE:"player.on.volume.change",PLAYER_DATA_REQUEST:"player.data.request",PLAYER_DATA_READY:"player.data.ready",PLAYER_ON_ERROR:"player.on.error"};
function D(J,K){i=J;
A=K
}function h(J){d=i();
d.mbr({autoSwitch:true});
d.src(J);
d.volume(0);
f(d);
I(function(){l()
})
}function G(){A()
}function f(J){if(typeof J==="undefined"){return
}J.on("playing",function(K){C.dispatch(c.PLAYER_ON_PLAY)
});
J.on("pause",function(){C.dispatch(c.PLAYER_ON_PAUSE)
});
J.on("ended",function(){C.dispatch(c.PLAYER_ON_ENDED)
});
J.on("loadstart",function(){E();
d.volume(0)
});
J.on("volumechange",function(){var K=J.muted();
C.dispatch(c.PLAYER_ON_VOLUME_CHANGE,{isMute:K})
})
}function l(){var J=0;
if(!v.isSvgSupport()){(function K(){var M=0;
if(d.currentTime()>0){M=(d.currentTime()/d.duration())
}if(J==2){C.dispatch(c.PLAYER_ON_PROGRESS,{percent:M});
J=0
}J++;
var L=q.startRequestAnimationFrame(K);
u.push(L)
})()
}}function E(){if(!v.isAutoplayDetect()){j()
}}function F(){if(typeof d==="undefined"){return
}d.play()
}function j(){if(typeof d==="undefined"){return
}d.pause();
$.each(u,function(J,K){q.cancelRequestAnimationFrame(K);
u.length=0
})
}function m(J){$.each(u,function(K,L){q.cancelRequestAnimationFrame(L);
u.length=0
});
C.dispatch(c.PLAYER_ON_LOAD_START,g.getDataByVideId(J));
I(function(){C.dispatch(c.PLAYER_DATA_REQUEST);
G();
bandwidthCheckInterval=setInterval(function(){p(J)
},1000)
},50)
}function p(K){var J=v.getBandwidth();
if(J.length>0||x>=n){clearInterval(bandwidthCheckInterval);
r.getVideoById(K,function(M){if(typeof(M)!=="undefined"&&!angular.isString(M.error)){var L=y(M.renditions,J);
h(L);
C.dispatch(c.PLAYER_DATA_READY)
}else{C.dispatch(c.PLAYER_ON_ERROR)
}});
x=0
}x=x+1
}function o(){e=!e;
if(e){d.volume(0);
return false
}else{d.volume(1);
return true
}}function y(L,M){var K=s(L,M);
var J=[];
J.push({src:K.url,type:"video/mp4"});
return J
}function z(J){J.sort(function(L,K){return parseFloat(L.encodingRate)-parseFloat(K.encodingRate)
})
}function s(K,L){var M=K.length;
var J=K[0];
J=k(K,L);
return J
}function k(J,L){z(J);
var N=J.length;
var M=J[0];
for(var K=0;
K<N;
K++){if(J[K].encodingRate>L){K=(K-1<0)?0:K-1;
M=J[K];
break
}if((K==N-1)&&J[K].encodingRate<L){M=J[K]
}}return M
}return{init:D,events:c,play:F,pause:j,load:m,volumeToggle:o}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.factory("serviceManager",["$rootScope","event","routeEvent","model","servicePlayer","$location",function(m,c,k,h,d,g){var p={ON_SHOW_UI:"service.manager.show.ui",ON_HIDE_UI:"service.manager.hide.ui",ON_CONTENT_UPDATE:"service.manager.content.update",ON_AUTOPLAY:"service.manager.on.autoplay",ON_INTRO:"service.manager.on.intro"};
var l={DATA_TYPE_DEFAULT:"data.type.default",DATA_TYPE_STATE:"data.type.state"};
m.$on(k.events.ROUTE_UPDATE,function(r,q){j(q);
o(q.params)
});
var j=function j(s){var r=s.type;
if(r==="routeEvent.type.default"){f()
}if(r==="routeEvent.type.state"){var u=s.params;
e(u)
}if(r=="routeEvent.type.intro"){var q=h.getPageData(h.pages.PAGE_TYPE_ENTRY);
i(q,l.DATA_TYPE_DEFAULT)
}if(r==="routeEvent.type.ui"){var v=h.getDataByVideId(s.params.stateId);
i(v,l.DATA_TYPE_STATE)
}};
var o=function o(r){var q=r.uiId;
switch(q){case"show":c.dispatch(p.ON_SHOW_UI);
d.pause();
break;
case"hide":c.dispatch(p.ON_HIDE_UI);
d.play();
break;
default:c.dispatch(p.ON_HIDE_UI)
}};
var f=function f(){var q=h.getPageData(h.pages.PAGE_TYPE_ENTRY);
n(q);
i(q,l.DATA_TYPE_DEFAULT)
};
var e=function e(r){if(typeof r==="undefined"){throw"Video params not defined"
}var q=r.stateId;
var s=h.getDataByVideId(q);
n(s);
i(s,l.DATA_TYPE_STATE)
};
var n=function n(q){h.setCurrentVideo(q);
d.load(q.video)
};
var i=function i(r,q){c.dispatch(p.ON_CONTENT_UPDATE,{type:q,data:r})
};
m.$on(d.events.PLAYER_ON_ENDED,function(){var q=h.getCurrentVideo();
if(typeof(q.state)==="undefined"){g.path("/intro/show")
}else{g.path("state/"+q.state+"/ui/show")
}});
return{events:p,dataType:l}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.factory("serviceRequestFrame",["$window","$rootScope",function(i,c){var f=0;
var h=i.requestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||i.webkitRequestAnimationFrame;
if(!h){h=function(m){var j=new Date().getTime();
var k=Math.max(0,16-(j-f));
var l=i.setTimeout(function(){m(j+k)
},k);
f=j+k;
return l
}
}var g=i.cancelAnimationFrame||i.mozCancelAnimationFrame||i.msCancelAnimationFrame||i.webkitCancelAnimationFrame;
var e=function(j){if(!g){g=function(k){clearTimeout(k)
}
}else{g(j)
}};
var d=function(j){return h(j)
};
return{startRequestAnimationFrame:d,cancelRequestAnimationFrame:e}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.factory("utility",["$window",function(e){var l={ctsBandwidthHdnField:".cts-bandwidthkbps-hdn-field"};
function k(){if(Modernizr.touch){return false
}else{return true
}}function m(){var n=(!i()||!d())?true:false;
return n
}function i(){var n=(Modernizr.svg)?true:false;
if(!n){$("svg").remove()
}return n
}function d(){var p=navigator.userAgent.toLowerCase();
var o=true;
if(p.toLowerCase().indexOf("android")>-1){var n=parseFloat(p.match(/Android\s+([\d\.]+)/));
o=(n>=-4.4)?true:false;
if(!o){$("svg").remove()
}}return o
}function f(){var n;
if(navigator.appName=="Microsoft Internet Explorer"){var o=navigator.userAgent;
var p=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
if(p.exec(o)!=null){n=parseFloat(RegExp.$1)
}}return(n>-1&&n<=9)
}function j(o){var n=(typeof(o)!=="undefined")?o:"";
if(n.toLowerCase()==="uluru"){n="Ulu<span class='cts-text-underline'>r</span>u"
}return n
}function h(){return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))?true:false
}function g(){var n=$(window);
return n.width()
}function c(){var n=$(l.ctsBandwidthHdnField);
var o=0;
if(n.length>0){o=n.val()
}return o
}return{isAutoplayDetect:k,isSvgSupport:m,isIE9:f,getUnderlineStateName:j,isHandHeldDevice:h,getCurrentViewPort:g,getBandwidth:c}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.factory("monotypeFont",["$timeout",function(d){var c=function c(){if(typeof(MonoTypeWebFonts)!=="undefined"){d(function(){MonoTypeWebFonts.RefreshFonts()
})
}};
return{refreshFont:c}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.directive("debug",["routeEvent","$location","ctsBrightcove","servicePlayer",function(d,f,c,e){return{restrict:"E",translcude:false,scope:{isActive:"="},controller:["$scope","$element","$attrs",function(i,h,g){i.showUI=function(){f.url("/state/nsw/ui/show")
};
i.hideUI=function(){f.url("/state/nsw/ui/hide")
};
i.playVideo=function(){e.play()
};
i.pauseVideo=function(){e.pause()
};
i.loadVideo=function(){var j="3645200054001";
e.load(j)
};
i.toggleVolume=function(){e.volumeToggle()
}
}],template:'<div class="debug" ng-class="{ \'is-active\' : isActive }"><button ng-click="playVideo()">Play Video</button></div>',replace:true}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.directive("cts",["serviceManager",function(c){return{restrict:"A",transclude:false,scope:false,controller:["$scope","$element","$attrs",function(f,e,d){}]}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.directive("ctsUi",["serviceManager","onResize","servicePlayer","$location","model",function(f,e,d,g,c){return{restrict:"A",transclude:false,scope:true,controller:["$scope","$element","$attrs",function(j,i,h){j.isActive=false;
j.isVideoActive=false;
j.isFocus=false;
j.isCloseButtonActive=true;
j.closeText=c.getPageData(c.pages.PAGE_TYPE_UI).close;
j.isShow=true;
j.$on(f.events.ON_SHOW_UI,function(){j.isActive=true
});
j.$on(f.events.ON_HIDE_UI,function(){j.isActive=false
});
j.$on(c.events.ON_STATE_SELECTION_UPDATE,function(){j.isCloseButtonActive=true
});
j.$on(d.events.PLAYER_ON_ERROR,function(){j.isShow=false
});
j.$on(d.events.PLAYER_ON_PLAY,function(){j.isVideoActive=true
});
j.$on(d.events.PLAYER_ON_PAUSE,function(){j.isVideoActive=false
});
j.$on(d.events.PLAYER_ON_ENDED,function(){j.isVideoActive=false
});
j.$on(d.events.PLAYER_ON_ERROR,function(){j.isVideoActive=false
});
j.onClose=function(){var k=c.getCurrentVideo().state;
if(typeof k==="undefined"){g.url("intro/hide")
}else{g.url("state/"+k+"/ui/hide")
}};
j.$on("ctsUIContent.onMouseOver",function(){j.isFocus=true
});
j.$on("ctsUIContent.onMouseLeave",function(){j.isFocus=false
})
}]}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.directive("ctsSun",["serviceManager","onResize","ctsBrightcove","servicePlayer","$timeout","utility","model",function(i,h,e,g,f,d,c){return{restrict:"A",transclude:false,scope:false,controller:["$scope","$element","$attrs",function(o,p,n){var j=c.getPageData(c.pages.PAGE_TYPE_UI);
var l=null;
o.slideModel=0;
o.isActive=false;
o.isFocus=false;
o.isResize=false;
o.isVideoActive=false;
o.isIE9=false;
o.textSunrise=j.sunrise;
o.textSunset=j.sunset;
this.init=function q(s){k(s);
m()
};
var k=function k(u){l=new PathAnimator(u);
l.start(s,true,100,function(){});
function s(v,w){r(v)
}};
var r=function r(s){var u=p.find(".cts-sun-element");
if(!d.isIE9()){u.css({"-webkit-transform":"translate3d("+s.x+"px, "+s.y+"px, 0)","-moz-transform":"translate3d("+s.x+"px, "+s.y+"px, 0)","-o-transform":"translate3d("+s.x+"px, "+s.y+"px, 0)","-ms-transform":"translate3d("+s.x+"px, "+s.y+"px, 0)",transform:"translate3d("+s.x+"px, "+s.y+"px, 0)"})
}else{u.css({"-ms-transform":"translate("+s.x+"px, "+s.y+"px)",transform:"translate("+s.x+"px, "+s.y+"px)"})
}};
var m=function m(s){if(typeof l==="undefined"){return false
}var s=s||0;
l.render(s)
};
o.$on(i.events.ON_SHOW_UI,function(){o.isActive=true
});
o.$on(i.events.ON_HIDE_UI,function(){o.isActive=false
});
o.$on(g.events.PLAYER_ON_PLAY,function(){o.safeApply(function(){f(function(){o.isVideoActive=true
},10)
})
});
o.$on(g.events.PLAYER_ON_LOAD_START,function(){o.safeApply(function(){o.isIE9=d.isIE9();
o.isVideoActive=false;
m(0)
})
});
o.$on(g.events.PLAYER_ON_ENDED,function(){o.safeApply(function(){o.isVideoActive=false;
m(0)
})
});
o.$on(g.events.PLAYER_ON_PROGRESS,function(w,s){var u=s.percent*100;
m(u)
});
o.$on(g.events.PLAYER_ON_PAUSE,function(){o.isVideoActive=false
});
o.$on(h.events.ON_RESIZE_START,function(){o.safeApply(function(){o.isResize=true
})
});
o.$on(h.events.ON_RESIZE_END,function(){o.safeApply(function(){o.isResize=false
})
});
o.$on("ctsUIContent.onMouseOver",function(){o.isFocus=true
});
o.$on("ctsUIContent.onMouseLeave",function(){o.isFocus=false
})
}],link:function(m,k,j,l){var n=k.find("path");
l.init(n[0])
}}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.directive("ctsVideo",["servicePlayer","utility",function(d,c){return{restrict:"A",transclude:false,scope:true,controller:["$scope","$element","$attrs",function(j,h,g){j.isActive=false;
var l;
d.init(f,k);
function f(){l=e(i());
return l
}function e(m,n){return videojs(m[0],{controls:false,autoplay:true,preload:"auto"})
}function i(){var m=angular.element("<video></video>");
h.find(".cts-video-inner").append(m);
return m
}function k(){if(typeof l==="undefined"){return
}l.dispose();
l=undefined
}j.$on(d.events.PLAYER_ON_LOAD_START,function(){j.isActive=false
});
j.$on(d.events.PLAYER_ON_PLAY,function(){j.isActive=true
});
j.$on(d.events.PLAYER_ON_PAUSE,function(){if(!c.isAutoplayDetect()){j.isActive=false
}});
j.$on(d.events.PLAYER_ON_ENDED,function(){if(!c.isAutoplayDetect()){j.isActive=false
}})
}]}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.directive("ctsState",["serviceManager","ctsBrightcove","$location","event","model","$sce","utility",function(h,f,i,g,e,c,d){return{restrict:"A",transclude:false,scope:false,controller:["$scope","$element","$attrs",function(l,k,j){l.isActive=false;
l.isSelected=false;
l.isUseSvgFallBack=false;
var n={STATE_ON_FOCUS:"ctsState.state.on.focus",STATE_ON_MOUSE_OVER:"ctsState.state.on.mouse.over",STATE_ON_MOUSE_LEAVE:"ctsState.state.on.mouse.leave"};
l.textState=c.trustAsHtml(d.getUnderlineStateName(l.item.name));
l.playVideo=function(q){var p=this.item.state;
m(p);
q.preventDefault();
q.stopPropagation()
};
l.onMouseOver=function(){g.dispatch(n.STATE_ON_MOUSE_OVER,{state:this.item.state,data:this.item})
};
l.onMouseLeave=function(){g.dispatch(n.STATE_ON_MOUSE_LEAVE,{state:this.item.state,data:this.item})
};
l.onFocus=function(){g.dispatch(n.STATE_ON_FOCUS,{state:this.item.state,data:this.item})
};
l.$on(h.events.ON_CONTENT_UPDATE,function(q,p){o(p.data)
});
var o=function o(p){if(l.item.state===p.state){l.isSelected=true
}else{l.isSelected=false
}};
var m=function m(q){var p="/state/"+q;
i.url(p)
};
l.$on(h.events.ON_SHOW_UI,function(){l.isActive=true;
l.isUseSvgFallBack=d.isSvgSupport()
});
l.$on(h.events.ON_HIDE_UI,function(){l.isActive=false
})
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("ctsStateCollection",["serviceManager","onResize","model",function(e,d,c){return{restrict:"A",transclude:false,scope:false,controller:["$scope","$element","$attrs",function(h,g,f){h.isActive=false;
h.isResize=false;
h.data=c.getData();
h.$on(e.events.ON_SHOW_UI,function(){h.isActive=true
});
h.$on(e.events.ON_HIDE_UI,function(){h.isActive=false
});
h.$on(d.events.ON_RESIZE_START,function(){h.safeApply(function(){h.isResize=true
})
});
h.$on(d.events.ON_RESIZE_END,function(){h.safeApply(function(){h.isResize=false
})
})
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("ctsCarousel",["onResize","model","utility","routeEvent",function(f,d,c,e){return{restrict:"A",transclude:false,scope:true,controller:["$scope","$element","$attrs",function(j,i,g){var k;
j.isActive=false;
var l=function l(m){if(!j.isActive){k=i.owlCarousel(m).data("owlCarousel");
j.isActive=true
}};
var h=function h(){if(!k){return false
}k.destroy();
k=null;
j.isActive=false
};
j.$on(f.events.ON_RESIZE_START,function(m){});
j.$on(f.events.ON_RESIZE_END,function(m,n){switch(n.type){case f.events.SCREEN_TYPE_EXTRA_SMALL:case f.events.SCREEN_TYPE_SMALL:l(d.getCarouselProperties());
break;
default:if(!c.isSvgSupport()){h()
}}});
j.$on(e.events.ROUTE_ON_READY,function(){if(c.isSvgSupport()){l(d.getCarouselProperties())
}})
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("ctsPreload",["servicePlayer","serviceManager","$timeout","utility","model","onResize",function(h,g,e,d,c,f){return{restrict:"A",scope:false,controller:["$scope","$element","$attrs",function(k,j,i){var l=c.getPageData(c.pages.PAGE_TYPE_LOADING);
k.textLoading=l.loading||"";
k.isActive=false;
k.bgImageLocation;
k.imageAltText;
k.ctsLoading=true;
k.isSmallScreen=false;
k.currentContent;
k.$on(g.events.ON_CONTENT_UPDATE,function(o,n){e(function(){k.currentContent=n;
m(n);
k.isActive=true;
k.ctsLoading=false
},10)
});
k.$on(f.events.ON_RESIZE_END,function(n,p){var o=p.type;
switch(o){case f.events.SCREEN_TYPE_EXTRA_SMALL:case f.events.SCREEN_TYPE_SMALL:k.isSmallScreen=true;
break;
default:k.isSmallScreen=false
}if(typeof(k.currentContent)!=="undefined"){m(k.currentContent)
}});
k.$on(h.events.PLAYER_DATA_REQUEST,function(){k.ctsLoading=true
});
k.$on(h.events.PLAYER_DATA_READY,function(){k.ctsLoading=false
});
k.$on(h.events.PLAYER_ON_LOAD_START,function(){e(function(){k.isActive=true
})
});
k.$on(h.events.PLAYER_ON_PLAY,function(){e(function(){k.isActive=false
},10)
});
k.$on(h.events.PLAYER_ON_ENDED,function(){e(function(){k.isActive=true
})
});
k.$on(h.events.PLAYER_ON_ERROR,function(){k.ctsLoading=false
});
k.$on(g.events.ON_SHOW_UI,function(){k.ctsLoading=false
});
k.$on(h.events.PLAYER_ON_PAUSE,function(){if(!d.isAutoplayDetect()){e(function(){k.isActive=true
})
}});
var m=function m(n){k.bgImageLocation=n.data.imgbg;
k.imageAltText=n.data.imgAltText;
if(k.isSmallScreen&&n.data.imgmobilebg!==""){k.bgImageLocation=n.data.imgmobilebg
}}
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("ctsImagePreload",[function(){return{restrict:"A",scope:false,controller:["$scope","$element","$attrs","onResize","$timeout",function(e,d,c,f){e.preloadStyle={background:""};
d.find("img")[0].onload=function(i,h){var g=e.bgImageLocation;
e.bgImageLocation="";
e.safeApply(function(){e.preloadStyle={background:"url("+g+") no-repeat center center","background-size":"cover"}
})
}
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("ctsAustralia",["model","onResize","serviceManager","$timeout",function(c,f,e,d){return{restrict:"A",scope:false,controller:["$scope","$element","$attrs",function(i,h,g){i.data=c.getData();
i.isResize=false;
i.isActive=false;
i.isPinHoverActive=false;
i.isPinSelectedActive=false;
i.pinPosHover={top:"0px",left:"0px"};
i.pinPosSelected={top:"0px",left:"0px"};
i.$on(f.events.ON_RESIZE_START,function(){i.safeApply(function(){i.isResize=true
})
});
i.$on(f.events.ON_RESIZE_END,function(){i.safeApply(function(){i.isResize=false
})
});
i.$on(e.events.ON_HIDE_UI,function(){i.isActive=false
});
i.$on(e.events.ON_SHOW_UI,function(){i.isActive=true
});
i.$on(e.events.ON_CONTENT_UPDATE,function(k,l){var m=l.data.pin;
if(typeof m==="undefined"){return
}j(m,i.pinPosSelected);
i.isPinSelectedActive=true
});
i.$on("ctsState.state.on.mouse.over",function(k,l){var m=l.data.pin;
j(m,i.pinPosHover);
i.isPinHoverActive=true
});
i.$on("ctsState.state.on.mouse.leave",function(k,l){i.isPinHoverActive=false
});
var j=function j(l,k){if(typeof l==="undefined"){return
}k.top=l.y;
k.left=l.x
}
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("ctsAustraliaState",["serviceManager",function(c){return{restrict:"A",scope:false,controller:["$scope","$element","$attrs",function(f,e,d){f.isActive=false;
f.isSelected=false;
f.$on("ctsState.state.on.mouse.over",function(h,i){g(i.data,function(){f.isActive=true
},function(){f.isActive=false
})
});
f.$on("ctsState.state.on.mouse.leave",function(h,i){g(i.data,function(){f.isActive=false
})
});
f.$on(c.events.ON_CONTENT_UPDATE,function(h,i){g(i.data,function(){f.isSelected=true
},function(){f.isSelected=false
})
});
var g=function g(j,i,h){if(typeof i==="undefined"){return
}if(f.item.state===j.state){i()
}else{if(typeof h==="undefined"){return
}h()
}}
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("ctsUiContent",["servicePlayer","$location","event","serviceManager","$rootScope","model","onResize","$sce","utility","monotypeFont","$timeout",function(f,g,d,h,l,i,c,k,m,j,e){return{restrict:"A",transclude:false,scope:true,controller:["$scope","$element","$attrs",function(q,p,o){var r=i.getPageData(i.pages.PAGE_TYPE_UI),n;
q.isActive=true;
q.isFocus=false;
q.isAutoplay=false;
q.isVideoActive=false;
q.isDiscoverTextActive=false;
q.isFavouriteButtonActive=false;
q.isFavouriteAdded=false;
q.isIntroState=true;
q.data={};
q.textTitleName="";
q.textNameFontSize="";
q.textTitleDescription="";
q.textDescFontSize="";
q.textTitleSubheading="";
q.textTitleHeading="";
q.textExplore=r.explore;
q.textDiscover=r.discover;
q.textDiscoverUrl="#";
q.videoPercentageWatched=0;
q.$on(f.events.PLAYER_DATA_REQUEST,function(){q.isAutoplay=false
});
q.$on(f.events.PLAYER_DATA_READY,function(){l.safeApply(function(){q.isAutoplay=!m.isAutoplayDetect()
})
});
q.$on(f.events.PLAYER_ON_PLAY,function(){q.isAutoplay=false;
q.isVideoActive=true;
p.trigger("ctsEvent.play",q.videoPercentageWatched)
});
q.$on(f.events.PLAYER_ON_PAUSE,function(){q.isAutoplay=!m.isAutoplayDetect();
q.isVideoActive=false
});
q.$on(f.events.PLAYER_ON_ENDED,function(){q.isAutoplay=!m.isAutoplayDetect();
q.isVideoActive=false;
p.trigger("ctsEvent.ended")
});
q.$on(f.events.PLAYER_ON_ERROR,function(){q.isActive=false;
q.isVideoActive=false
});
q.$on(h.events.ON_HIDE_UI,function(){q.isActive=true
});
q.$on(h.events.ON_SHOW_UI,function(){q.isActive=false
});
q.$on(h.events.ON_CONTENT_UPDATE,function(x,s){q.data=s.data;
q.textTitleName=k.trustAsHtml(m.getUnderlineStateName(q.data.name));
q.textNameFontSize=q.data.nameFontSize||"";
q.textTitleDescription=k.trustAsHtml(q.data.desc);
q.textDescFontSize=q.data.descFontSize||"";
q.textTitleSubheading=k.trustAsHtml(q.data.subheading);
q.textTitleHeading=k.trustAsHtml(q.data.heading);
q.textDiscoverUrl=q.data.discoverurl;
var u;
if(typeof(q.textDiscoverUrl)!=="undefined"){u=q.data.discoverurl.indexOf(".htm");
q.textFavouriteUrl=q.data.discoverurl.substring(0,u)
}q.isAutoplay=!m.isAutoplayDetect();
if(h.dataType.DATA_TYPE_STATE===s.type){q.isDiscoverTextActive=true;
q.isFavouriteButtonActive=true;
q.isIntroState=false;
q.isFavouriteAdded=(typeof(q.data.isfavourited)!=="undefined")?q.data.isfavourited:false;
var w=p.find(".cts-ui-content-inner");
if(w.length>0){w.attr("data-ta-data-state",q.data.state);
p.trigger("ctsEvent.state",q.data.state)
}}if(h.dataType.DATA_TYPE_DEFAULT===s.type){q.isIntroState=true;
q.isDiscoverTextActive=false;
q.isFavouriteButtonActive=false
}j.refreshFont()
});
q.$on(f.events.PLAYER_ON_PROGRESS,function(x,s){var u=s.percent*100;
var w=p.find(".cts-ui-content-inner");
if(w.length>0&&typeof(u)!=="undefined"&&parseInt(u)%5===0){w.attr("data-ta-data-percent",parseInt(u));
q.videoPercentageWatched=parseInt(u)
}});
q.onExplore=function(u){var s=q.data.state;
if(typeof s==="undefined"){g.url("/intro/show")
}else{g.url("state/"+s+"/ui/show")
}u.preventDefault()
};
q.onAddToFavourite=function(u){var s=q.data.isfavourited;
if(typeof s!=="undefined"&&!s){q.data.isfavourited=true;
q.isFavouriteAdded=true
}u.preventDefault()
};
q.onPlay=function(s){f.play();
s.preventDefault()
};
if(!Modernizr.touch){q.onMouseOver=function(){q.isFocus=true;
d.dispatch("ctsUIContent.onMouseOver")
};
q.onMouseLeave=function(){q.isFocus=false;
d.dispatch("ctsUIContent.onMouseLeave")
}
}}]}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.directive("ctsVolumeControl",["servicePlayer","onResize","utility","serviceManager","$timeout",function(g,f,c,e,d){return{restrict:"A",scope:false,controller:["$scope","$element","$attrs",function(j,i,h){j.isVolumeActive=false;
j.isActive=false;
j.isVolumeVisible=c.isAutoplayDetect();
j.toggleVolume=function(){d(function(){j.isVolumeActive=g.volumeToggle()
})
};
j.$on(g.events.PLAYER_ON_LOAD_START,function(){j.isVolumeActive=false
});
j.$on(e.events.ON_HIDE_UI,function(){j.isActive=true
});
j.$on(e.events.ON_SHOW_UI,function(){j.isActive=false
});
j.$on(f.events.ON_RESIZE_END,function(k,m){var l=m.type;
switch(l){case f.events.SCREEN_TYPE_EXTRA_SMALL:case f.events.SCREEN_TYPE_SMALL:j.isVolumeVisible=false;
break;
default:j.isVolumeVisible=c.isAutoplayDetect()&&j.isActive
}})
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("ctsError",["model","servicePlayer","$location","$window",function(c,d,f,e){return{restrict:"A",transclude:false,scope:true,controller:["$scope",function(g){var h=c.getPageData(c.pages.PAGE_TYPE_ERROR);
g.isActive=false;
g.textHeading=h.heading||"";
g.textMessage=h.message||"";
g.textRrrReason=h.errReason||"";
g.textBtnRefresh=h.btnRefresh||"";
g.textBtnView=h.btnView||"";
g.$on(d.events.PLAYER_ON_ERROR,function(){g.isActive=true
});
g.onReload=function(i){e.location.reload(true)
};
g.onViewMore=function(i){e.location.reload(true);
f.url("/intro/show")
}
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("taDataLayerInit",[function(){return{restrict:"A",link:function(e,d,c){d.taDataLayer()
}}
}])
})((typeof a==="undefined")?window:a)
})(app);
(function(a){(function(b){b.directive("ctsSentence",["model","$sce",function(d,c){return{restrict:"A",transclude:false,scope:true,controller:["$scope",function(f){var e=d.getPageData(d.pages.PAGE_TYPE_BYLINE);
f.bylineText=c.trustAsHtml(e.sentence)
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
(function(a){(function(b){b.directive("atdwSmartFilters",["$timeout",function(c){return{restrict:"A",transclude:false,scope:true,link:function(f,e,d){},controller:["$scope","$element","$attrs",function(f,e,d){f.showSmartFilters=false;
f.locationId=e.data("location-id");
f.locationDisableInput=true;
f.categoryChange=false;
f.changeLocation=function(){f.locationDisableInput=!f.locationDisableInput;
$(f.locationId).select2("data",f.currentLocation)
};
f.updateLocation=function(){var g=$(f.locationId).select2("data");
f.currentLocation=g;
f.currentLocationName=g.name;
f.locationDisableInput=true
};
f.cancelLocation=function(g){f.locationDisableInput=true
};
f.$on("atdw-current-location-change",function(g,h){c(function(){f.updateLocation()
},1)
});
f.revealSmartFilters=function(h){var g;
if(h){setTimeout(function(){document.customDocumentDispatchEvent("atwd-match-filters")
});
var g=$(".atdw-smart-filters-hide")
}else{var g=$(".atdw-smart-filters-show")
}f.showSmartFilters=h;
setTimeout(function(){g.focus()
})
};
f.refreshResults=function(g){if(!f.categoryChange){f.showSmartFilters=false;
document.customDocumentDispatchEvent("atwd-refresh-filters")
}};
$(window).on("atwd-swap-categories",function(g){f.categoryChange=true;
document.customDocumentDispatchEvent("atwd-match-filters");
f.showSmartFilters=false;
c(function(){f.categoryChange=false
},10)
});
f.clearAllFilters=function(i){var h=$(i.currentTarget).closest("fieldset");
h.find("input").removeAttr("checked");
h.find("fieldset").each(function(n,o){if($(o).find("input[type=radio]").length){$($(o).find("input[type=radio]")[0]).prop("checked",true)
}});
var k=$(i.currentTarget).parents(".atdw-smart-filters-wrapper").find(".atdw-smart-filter-keyword:enabled");
if(k.length){k.val("")
}var l=h.find("div[data-slider]");
if(l.length){var j=l.attr("min-initial");
var g=l.attr("max-initial");
l[0].noUiSlider.set([j,g])
}var m=h.find("select");
if(m.length){m.select2("data","")
}};
f.clearFieldset=function(g){$(g.currentTarget).closest("fieldset").find("input").removeAttr("checked")
};
f.clearAllSelectFilters=function(g){var i=$(g.currentTarget).parents("fieldset").parents("fieldset");
if(i.find("select").length){i.find("select").select2("data","")
}var h=$(g.currentTarget).parents("fieldset").parents("fieldset").find("fieldset").not($(g.currentTarget).parents("fieldset"));
if(h.find("input").length){h.find("input[type=radio]").prop("checked",function(){return(this.getAttribute("checked")=="checked"||this.getAttribute("checked")=="")
})
}}
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
/*!
 *
 * Multi Select Directive
 *
 * Requires select2.github.io
 * data attributes:
 * data-src-id - reference to script id to retrieve data from on page
 * data-init-selection - initial value to set the select to
 * data-container-class - class to add to select2 wrapper container
 * data-drop-down-class - class to add to select2 drop down wrapper container
 * data-minimum-input-length - min number of characters required before showing select list
 * data-minimum-input-string - string to display before minimum number of characters are entered
 */
(function(a){(function(b){b.directive("taMultiSelectData",[function(){return{restrict:"A",transclude:false,scope:true,link:function(e,d,c){},controller:["$scope","$element","$attrs",function(j,k,i){var g=k.data("src-id");
if(g){j.countries=$.parseJSON($("#"+g).text()).data;
var e=k.data("init-selection");
var l=k.data("container-class");
var h=k.data("drop-down-class");
var m=k.data("minimum-input-length")?Number(k.data("minimum-input-length")):0;
var c=k.data("minimum-input-string");
var f={placeholder:"Search Stuff",multiple:false,containerCssClass:l,dropdownCssClass:h,data:{results:j.countries,text:"name"}};
if(m){var d="";
if(c){d=c
}else{d="Please enter "+m+" or more characters"
}f.minimumInputLength=m;
f.formatInputTooShort=function(){return d
}
}k.select2(f);
if(e){k.select2("data",e)
}j.broadcastChange=function(){j.$emit("atdw-current-location-change")
};
j.broadcastChange()
}else{console.log("Please provide a data-src attribute")
}}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
/*!
 *
 * Slider (multi handle)
 *
 * http://refreshless.com/nouislider/
 * data attributes:
 * min-val - minimum value of slider
 * max-val - maximum value of slider
 * step - number of steps
 * slider-label-single - single text to add to the label (star)
 * slider-label-multiple - multiple text to add to the label (stars)
 * slider-label-prepend - text to add before the label
 * slider-label-max-append - text to add after the maximum label (+)
 * data-slider - class which styles the slider bar
 */
(function(a){(function(b){b.directive("taSlider",["$timeout",function(c){return{restrict:"A",transclude:false,scope:true,link:function(f,e,d){},controller:["$scope","$element","$attrs",function(f,e,d){var g={labelLower:".slider-label-lower",inputLower:".slider-from",labelUpper:".slider-label-upper",inputUpper:".slider-to"};
f.options=$.extend({},g,d);
f.options.$labelLower=e.parent().find(f.options.labelLower);
f.options.$labelUpper=e.parent().find(f.options.labelUpper);
f.options.$inputLower=e.parent().find(f.options.inputLower);
f.options.$inputUpper=e.parent().find(f.options.inputUpper);
f.createSlider=function(l,h,i,k,j){noUiSlider.create(e[0],{start:[l,i],connect:false,step:j,range:{min:h,max:k}})
};
f.updateSlider=function(h,i){f.options.$inputLower.val(Number(h[0]));
f.options.$inputUpper.val(Number(h[1]))
};
f.connectSlider=function(h){var j=document.createElement("div"),i=h.getElementsByClassName("noUi-base")[0],k=h.getElementsByClassName("noUi-origin");
j.className+="connect";
i.appendChild(j);
h.noUiSlider.on("update",function(l,n){var m=n?"right":"left",o=(k[n].style.left).slice(0,-1);
if(n===1){o=100-o
}j.style[m]=o+"%"
});
h.noUiSlider.on("update",f.updateSlider)
};
f.options.minVal=Number(f.options.minVal);
f.options.minInitial=f.options.minInitial?Number(f.options.minInitial):0;
f.options.maxVal=Number(f.options.maxVal);
f.options.maxInitial=f.options.maxInitial?Number(f.options.maxInitial):100;
f.options.step=Number(f.options.step);
if(f.options.minVal>=f.options.maxVal||!(f.options.step>0)){console.log("Please pass in correct values for min, max and step")
}else{f.createSlider(f.options.minInitial,f.options.minVal,f.options.maxInitial,f.options.maxVal,f.options.step);
f.connectSlider(e[0]);
e[0].noUiSlider.on("update",function(k,m){var j=Number(k[0]),h=Number(k[1]),n="",l="",i="";
if(f.options.sliderLabelSingle&&j==1){n=" "+f.options.sliderLabelSingle
}else{if(f.options.sliderLabelMultiple){n=" "+f.options.sliderLabelMultiple
}}if(f.options.sliderLabelSingle&&h==1){l=" "+f.options.sliderLabelSingle
}else{if(f.options.sliderLabelMultiple){l=" "+f.options.sliderLabelMultiple
}}if(f.options.sliderLabelPrepend){i=f.options.sliderLabelPrepend
}if(f.options.sliderLabelMaxAppend&&h==f.options.maxVal){l=l+f.options.sliderLabelMaxAppend
}f.options.$labelLower.text(i+j+n);
f.options.$labelUpper.text(i+h+l)
})
}}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
/*!
 *
 * ATDW Smart Filters Selected
 *
 * data attributes:
 * selection-target - target seelection for data
 * selection-type - type of data, radio, checkbox, text, slider, etc
 * multiple-text - text to use if more than 1 item, also add the number (+x) afterwards
 * additional-label - additional text to add to label (such as Price range $0 - $1000)
 */
(function(a){(function(b){b.directive("taSmartFiltersSelected",["$timeout",function(c){return{restrict:"A",transclude:false,scope:{selectionTarget:"@",selectionType:"@",multipleText:"@",additionalLabel:"@",currencySymbol:"@"},controller:["$scope","$element","$attrs",function(f,e,d){var g;
e.addClass("hide");
c(function(){var h=false;
if(f.selectionType=="text"){$selection=$("input[name="+f.selectionTarget+"]:enabled:not('.hidden')");
if($selection.length==0){h=true
}}if(h){e.addClass("disabled");
e.on("click",function(i){i.preventDefault();
i.stopPropagation()
})
}else{e.on("click",function(i){f.resetFilters();
i.preventDefault();
i.stopPropagation()
})
}},10);
$(window).on("atwd-refresh-filters",function(h){if(f.checkIfActiveCategory()){f.updateFiltersSelected()
}});
$(window).on("atwd-match-filters",function(h){if(f.checkIfActiveCategory()){f.resetFilters(true);
f.updateInputsFromSelectedFilters()
}});
$(window).on("atwd-update-keyword",function(j){switch(f.selectionType){case"text":var h=$("input[name="+f.selectionTarget+"]");
var i=(h.is(":disabled")||h.hasClass("hide")||h.hasClass("hidden")||h.hasClass("lock")||h.attr("ng-disabled")=="true"||h.attr("ng-disabled")=="disabled")?true:false;
if(!i){f.matchingSelections=j.originalEvent.detail
}break
}});
f.checkIfActiveCategory=function(){var h;
switch(f.selectionType){case"checkbox":h=$("fieldset[name="+f.selectionTarget+"]");
break;
case"multi-slider":h=$(f.selectionTarget);
break;
case"multi-select":h=$("select[name="+f.selectionTarget+"]");
break;
case"text":h=$("input[name="+f.selectionTarget+"]");
break;
case"radio":h=$("fieldset[name="+f.selectionTarget+"]");
break
}var i=h.parents(".atdw-refresh-results-filter-container.is-active");
if(i.length){return true
}else{return false
}};
f.resetFilters=function(j){if(j!==true){f.matchingSelections=[]
}switch(f.selectionType){case"checkbox":g=$("fieldset[name="+f.selectionTarget+"] input[type="+f.selectionType+"]");
g.removeAttr("checked");
break;
case"multi-slider":$selection=$(f.selectionTarget);
var i=Number($selection.attr("min-initial"));
var h=Number($selection.attr("max-initial"));
$selection[0].noUiSlider.set([i,h]);
break;
case"multi-select":$selection=$("select[name="+f.selectionTarget+"]");
$selection.select2("data","");
break;
case"text":$selection=$("input[name="+f.selectionTarget+"]:enabled:not('.hidden')");
if($selection){$selection.val("")
}break;
case"radio":g=$("fieldset[name="+f.selectionTarget+"] input[type="+f.selectionType+"]");
$(g[0]).trigger("click");
if(j!==true){document.customDocumentDispatchEvent("atwd-refresh-filters")
}break
}if(j!==true){e.addClass("hide");
e.find(".label-copy").text("");
$(".atdw-refresh-btn").trigger("click")
}};
f.updateFiltersSelected=function(){var k,p,j=[];
f.matchingSelections=[];
switch(f.selectionType){case"checkbox":p=$("fieldset[name="+f.selectionTarget+"] input[type="+f.selectionType+"]");
p.each(function(){var s=(this.checked?$(this).val():"");
if(s){j.push(this.name);
f.matchingSelections.push(this)
}});
break;
case"multi-slider":k=$(f.selectionTarget);
var r=k[0].noUiSlider.get();
f.matchingSelections=r;
if(r){var i=Number(k.attr("min-initial"));
var o=Number(k.attr("max-initial"));
var q=Math.round(Number(r[0]));
var n=Math.round(Number(r[1]));
if(q>i||n<o){if(n==o){n=n+"+"
}j.push(f.additionalLabel+" "+f.currencySymbol+q+" - "+f.currencySymbol+n)
}}break;
case"multi-select":k=$("select[name="+f.selectionTarget+"]");
var l=k.select2("data");
f.matchingSelections=l;
if(l){var m="";
if(l.length){j=$.map(l,function(u,s){return u.text
})
}else{if(l.length!=0){j.push(l.text)
}}}break;
case"text":k=$("input[name="+f.selectionTarget+"]");
var h=k.hasClass("hide");
if(!h){var r=k.val();
if(r){j.push(r);
f.matchingSelections=r
}}break;
case"radio":p=$("fieldset[name="+f.selectionTarget+"] input[type="+f.selectionType+"]");
p.each(function(){var s=(this.checked?$(this).val():"");
if(s){var u=$(this).parent().find(".form-radio-label-copy").text();
j.push(u);
f.matchingSelections.push(this)
}});
break
}if(j.length>1){j=[f.multipleText+" (+"+j.length+")"]
}if(j.length==0){e.addClass("hide")
}else{e.removeClass("hide");
e.find(".label-copy").text(j[0])
}};
f.updateInputsFromSelectedFilters=function(){if(f.matchingSelections){switch(f.selectionType){case"checkbox":$.each(f.matchingSelections,function(j,h){$(h).prop("checked",true)
});
break;
case"multi-slider":$selection=$(f.selectionTarget);
$selection[0].noUiSlider.set(f.matchingSelections);
break;
case"multi-select":$selection=$("select[name="+f.selectionTarget+"]");
$selection.select2("data",f.matchingSelections);
break;
case"text":$selection=$("input[name="+f.selectionTarget+"]");
$selection.val(f.matchingSelections);
break;
case"radio":$.each(f.matchingSelections,function(j,h){$(h).prop("checked",true);
$(h).trigger("click")
});
break
}}}
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
/*!
 *
 * Gallery Directive
 *
 * livefyre data is loaded and gallery tiles rendered
 * the tile events and lightbox data is updated document.customDocumentDispatchEvent("livefyre-mosaic-data-update");
 * when a tile is clicked we open the lightbox
 *
 * Requires http://dimsemenov.com/plugins/magnific-popup/
 * data attributes:
 * data-gallery-data - optional data to use to render lightbox, if using data-gallery-html-template then we run the data through the template to generate lightbox format data
 * data-gallery-data-event - optional name of event that contains data to render lightbox
 * data-gallery-html-template - html template to use for lightbox data
 * data-gallery-key - unique name of gallery
 * data-gallery-close-element - reference to selector for elements that trigger gallery close
 * data-gallery-item - reference to lightbox item (used to block click events from closing lightbox, allows other buttons to trigger events)
 * data-gallery-class - class to add to lightbox element
 *
 * events:
 * event specified by 'data-gallery-data-event' attribute can be called to initialise click events which opens lightbox gallery
 */
(function(a){(function(b){b.directive("taGallery",[function(){return{restrict:"A",transclude:false,scope:{galleryKey:"@",galleryData:"@",galleryDataEvent:"@",galleryHtmlTemplate:"@",galleryCloseElement:"@",galleryPrevElement:"@",galleryNextElement:"@",galleryItem:"@",galleryClass:"@"},link:function(e,d,c){},controller:["$scope","$element","$attrs","$timeout",function(e,d,c,f){f(function(){if(e.galleryData){e.dataItems=document[e.galleryData]
}e.parseLivefyreDataForLightbox();
e.initEvents()
},10);
if(e.galleryDataEvent){$(window).on(e.galleryDataEvent,function(g){e.dataItems=g.originalEvent.detail;
e.parseLivefyreDataForLightbox();
e.initEvents()
})
}$(window).on("resize lightbox-open",function(){if(e.$lightbox){if($(window).width()<768){e.$lightbox.addClass("mfp-align-top")
}else{e.$lightbox.removeClass("mfp-align-top")
}}});
e.parseLivefyreDataForLightbox=function(){if(e.dataItems&&e.dataItems.length){e.lighboxData=[];
var h=$(e.galleryHtmlTemplate).html();
var g=Handlebars.compile(h);
$.each(e.dataItems,function(j,k){var l=g(k);
e.lighboxData.push({src:l,type:"inline"})
})
}};
e.initEvents=function(){$.each(d.find("a"),function(g,h){$(h).off("click");
$(h).on("click",function(i){e.buildLightbox(g);
i.preventDefault()
})
})
};
e.buildLightbox=function(i){var h;
var g={key:e.galleryKey,items:e.lighboxData,type:"image",mainClass:e.galleryClass,overflowY:"auto",fixedContentPos:true,showCloseBtn:false,closeOnContentClick:false,gallery:{enabled:false},callbacks:{open:function(){h=this;
e.$lightbox=$(".mfp-wrap."+e.galleryClass);
$("body").addClass("l-disableScroll");
$(window).trigger("lightbox-open");
e.$lightbox.find(".mfp-container").swipe({swipeLeft:function(j){h.next()
},swipeRight:function(j){h.prev()
}})
},change:function(){setTimeout(function(){document.customDocumentDispatchEvent("verifyImagesLoaded");
stButtons.locateElements();
e.$lightbox.find(".mfp-counter").text((h.index+1)+" of "+h.items.length);
e.$lightbox.find(e.galleryItem).on("click",function(j){j.stopPropagation()
});
e.$lightbox.find(e.galleryCloseElement).off("click");
e.$lightbox.find(e.galleryCloseElement).on("click",function(j){h.close()
});
e.$lightbox.find(e.galleryPrevElement).off("click");
e.$lightbox.find(e.galleryPrevElement).on("click",function(j){h.prev()
});
e.$lightbox.find(e.galleryNextElement).off("click");
e.$lightbox.find(e.galleryNextElement).on("click",function(j){h.next()
})
},10)
},close:function(){$("body").removeClass("l-disableScroll");
$(window).trigger("lightbox-close");
var j=$(window).scrollTop();
setTimeout(function(){$(window).scrollTop(j)
},10)
},resize:function(){}}};
$.magnificPopup.open(g,i)
}
}]}
}])
}((typeof a==="undefined")?window:a))
}(app));
$(function(){var f=$(".dreamtrip-grid");
var e=$(".dreamtrip-cta");
if(c()>0){d(f);
e.hide()
}else{a(f);
e.show()
}$(".dreamtrip-grid .search-close").click(function(j){j.preventDefault();
var i=$(this).data("path");
var h=$(this).parents(".search-results-list").children().length-1;
var g=$(this).closest(".dreamtrip-grid");
if(h>=1){d(g);
e.hide()
}else{if(h<=0){a(g);
g.remove();
if(b()<=0){e.show()
}}}$.ajax({type:"POST",url:"/apps/tourismaustralia/favorites/remove.json?page="+i,success:function(l){var k=parseInt($.cookie("numberOfFavourites"));
if(k){k-=1;
if(k>0){$("#nav-heart-this-widget").find("span.my-trip-count").text(k);
$.cookie("numberOfFavourites",k)
}else{$("#nav-heart-this-widget").find("span.my-trip-count").empty();
$("#nav-heart-this-widget").find(".icon-heart").removeClass("icon-circle");
$("#nav-heart-this-widget").addClass("favourite-empty").removeClass("favourite-added");
$("#nav-heart-this-widget").parent().removeClass("has-favourites");
$.cookie("numberOfFavourites",0)
}$(window).trigger("resize")
}moreLessOverflow.initialise()
}});
$(this).parents(".row.search-result-row-spacing").remove()
});
function b(){var h=$(".dreamtrip-grid");
var g=(typeof(h)!=="undefined")?h.length:0;
return g
}function c(){var g=$(".dreamtrip-grid .search-results-list");
var h=0;
if(typeof(g)!=="undefined"){h=g.children().length
}return h
}function a(g){g.find("h2").hide();
g.find(".search-results-list").hide()
}function d(g){g.find("h2").show();
g.find(".search-results-list").show()
}});
$(function(){var e=decodeURIComponent(a("q"));
var b=decodeURIComponent(a("tagid"));
var d="";
var g="";
if(e&&e.length>0&&e!="null"){d=e
}if(b&&b.length>0&&b!="null"){g=b
}if(d||g){c(d,g)
}$(".search-component form").submit(function(h){d=$(this).find(".search-input").val();
c(d,"");
$(".search-results-view-more").find("a").each(function(){$this=$(this);
var i=$this.attr("href")+"";
if(i.indexOf("term=")!=-1){i=f(i,"term",d)
}else{i=i.concat("&term=",d)
}$this.attr("href",i)
})
});
function c(i,j){var h=$(".search-atdw-highlights").data("search-url");
if(typeof(h)!=="undefined"){$.getJSON(h+"?q="+encodeURIComponent(i)+"&tagid="+encodeURIComponent(j),function(l){var k=Handlebars.compile($("#atdwSearchTemplate").html());
Handlebars.registerHelper("moduloIf",function(m,n,o){if((parseInt(m)+1)%(n)===0){return o.fn(this)
}});
Handlebars.registerHelper("if_or",function(n,m,o){if(Handlebars.Utils.isEmpty(n)&&Handlebars.Utils.isEmpty(m)){return o.inverse(this)
}else{return o.fn(this)
}});
$(".search-atdw-mosaic > .mosaic").empty();
$(".search-atdw-mosaic > .mosaic").append(k(l));
if(l.totalResultCount>0){$(".search-atdw-highlights").show();
$(".mosaic-3column-item-option").mosaic({mosaic:".mosaic",mosaic_item:".mosaic-3column-item-option",mosaic_container:".mosaic-3column-container",mosaic_front:".mosaic-3column-front",mosaic_back:".mosaic-3column-back",mosaic_content:".mosaic-item-detail-container"})
}else{$(".search-atdw-highlights").hide()
}})
}}function a(h){var i=new RegExp("[?&]"+h+"=([^&#]*)").exec(window.location.href);
if(i==null){return null
}else{return i[1]||0
}}function f(i,k,j){var h=new RegExp("("+k+"=)[a-z]+","ig");
return i.replace(h,"$1"+j)
}});
$(function(){$('form[name="contactUs"]').submit(function(a){a.preventDefault();
$this=$(this);
var c={userName:$this.find('input[name="userName"]').val(),userEmail:$this.find('input[name="userEmail"]').val(),message:$this.find('input[name="message"]').val(),defaultRecipient:"admin@tourism.australia.com"};
var b=$(this).attr("action");
$.ajax({type:"POST",url:b.replace(".contactus.",".contactemail."),data:c,success:function(){alert("Email Sent!")
},error:function(){alert("error")
}})
})
});
(function(f,d,b,h){var e="searchComponent",g={mm_mobile_breakpoint:750,btn_list_view:"#btn-list-view",btn_grid_view:"#btn-grid-view",search_grid_container:".search-grid-container",siteSearchComponent:".search-component",siteSearchPreloadAniStatusFld:".site-search-preload-is-loading",atdwSearchPreloadAniStatusFld:".atdw-search-preload-is-loading",atdwKeywordField:".atdw-refresh-results-filter-container .filter_keyword",atdwRefreshResultBtn:".atdw-refresh-btn"};
function c(k,j){this.element=k;
this.$element=f(k);
this.resultsSection=this.$element.find(".search-results-counter-grid-more");
this.resultsContainer=this.$element.find(".results-holder");
this.loadMoreButton=f(this.$element.find(".load-more"));
this.searchButton=f(this.$element.find(".search-input-go"));
this.searchInputField=f(this.$element.find(".search-input"));
this.toggleButtons=this.$element.find(".search-toggle-buttons");
this.resultCountText=this.$element.find(".search-result-count");
this._defaults=g;
this._name=e;
this.searchUrl=this.$element.data("search-url");
this.page=1;
this.count=0;
this.onLoadCount=5;
this.countText=f(this.$element.find(".search-result-count-copy"));
this.options=f.extend({},g,j);
this.options=f.extend({},g,j);
this.btnListView=f(this.$element.find(this.options.btn_list_view));
this.btnGridView=f(this.$element.find(this.options.btn_grid_view));
this.searchGridContainer=f(this.$element.find(this.options.search_grid_container));
$plugin=this;
this.loadMoreButton.click(function(n){n.preventDefault();
$plugin.page+=1;
$plugin.onLoadCount=10;
$plugin.search()
});
this.searchInputField.keyup(function(){if(f(this).val()==""){$plugin.searchButton.prop("disabled",true)
}else{$plugin.searchButton.prop("disabled",false)
}});
this.$element.find("form").submit(function(n){n.preventDefault();
$plugin.count=0;
$plugin.onLoadCount=5;
$plugin.page=1;
$plugin.searchValue=f(this).find(".search-input").val();
$plugin.resultsContainer.empty();
$plugin.search()
});
if(f(d).width()<this.options.mm_mobile_breakpoint){this.setGridType(true)
}else{this.setGridType(false)
}this.setupHandlebars();
var m=decodeURIComponent(a("q"));
if((m&&m.length>0&&m!="null")){var l=this.$element.find("form");
this.searchValue=l.find(".search-input").val()
}var i=decodeURIComponent(a("tagid"));
if((i&&i.length>0&&i!="null")){this.tagValue=i
}if(this.searchValue||this.tagValue){this.search()
}}c.prototype.setupHandlebars=function(){Handlebars.registerPartial("mosaic_item",f("#mosaicItem").html());
this.searchTemplate=Handlebars.compile(f("#searchTemplate").html());
this.onLoadSearchTemplate=Handlebars.compile(f("#onLoadSearchTemplate").html());
Handlebars.registerHelper("eachsublist",function(n,o,m,k){var j="";
if(o<n.length&&o>=0&&m<=n.length&&o<=m){for(var l=o;
l<=m;
l++){j=j+k.fn(n[l])
}}return j
})
};
c.prototype.setGridType=function(i){$plugin=this;
if(i){$plugin.btnGridView.addClass("is-active");
$plugin.btnListView.removeClass("is-active");
$plugin.searchGridContainer.removeClass("mosaic-list-view")
}else{$plugin.btnListView.addClass("is-active");
$plugin.btnGridView.removeClass("is-active");
$plugin.searchGridContainer.addClass("mosaic-list-view")
}};
c.prototype.search=function(){$plugin=this;
page=$plugin.page;
onLoadCount=$plugin.onLoadCount;
$plugin.displayPreloadAnimation(true);
$plugin.enableATDWSearch(decodeURIComponent($plugin.searchValue));
preloadImage.displayPreloadAnimation(true);
f.getJSON($plugin.searchUrl+"?q="+encodeURIComponent($plugin.searchValue)+"&tagid="+encodeURIComponent($plugin.tagValue)+"&page="+page+"&count="+onLoadCount,function(j){$plugin.displayPreloadAnimation(false);
$plugin.count+=j.content.length;
if($plugin.count>=j.totalResultCount){$plugin.count=j.totalResultCount;
$plugin.loadMoreButton.hide()
}else{$plugin.loadMoreButton.show()
}if(j.totalResultCount>0){$plugin.toggleButtons.show();
$plugin.resultCountText.show()
}else{$plugin.toggleButtons.hide();
if($plugin.resultsSection.parent().parent().siblings(".atdwSearchPreview").length){$plugin.resultCountText.hide()
}}var i=$plugin.countText.attr("data-copy");
i=i.replace("{0}",$plugin.count);
i=i.replace("{1}",j.totalResultCount);
$plugin.countText.html(i);
$plugin.countText.trigger("change");
if($plugin.onLoadCount==5){$plugin.resultsContainer.append($plugin.onLoadSearchTemplate(j))
}else{$plugin.resultsContainer.append($plugin.searchTemplate(j))
}$plugin.resultsSection.show();
if(!typeof f(".mosaic-item")==="undefined"&&!typeof f(".mosaic-item").mosaic()==="undefined"){f(".mosaic-item").mosaic()
}TA.MoreLessOverflow.initialise()
})
};
c.prototype.isAtdwPreloadAnimationInProgress=function(){var j=f($plugin.options.atdwSearchPreloadAniStatusFld);
var i=(j.length>0&&j.val()=="true")?true:false;
return i
};
c.prototype.displayPreloadAnimation=function(l){var j=$plugin.options.siteSearchComponent;
var i=f($plugin.options.siteSearchPreloadAniStatusFld);
var k=$plugin.isAtdwPreloadAnimationInProgress();
if(k&&l){l=false
}preloadImage.displayPreloadAnimation(l,j);
i.val(l)
};
c.prototype.enableATDWSearch=function(j){var i=f($plugin.options.atdwKeywordField);
var k=f($plugin.options.atdwRefreshResultBtn);
if(k.length>0){i.val(j);
k.click()
}};
f.fn[e]=function(i){return this.each(function(){if(!f.data(this,"plugin_"+e)){f.data(this,"plugin_"+e,new c(this,i))
}})
};
f(d).load(function(){f(".search-component").searchComponent()
});
function a(i){var j=new RegExp("[?&]"+i+"=([^&#]*)").exec(d.location.href);
if(j==null){return null
}else{return j[1]||0
}}})(jQuery,window,document,undefined);
(function(f,d,b,h){var e="searchComponent",g={mm_mobile_breakpoint:750,btn_list_view:"#btn-list-view",btn_grid_view:"#btn-grid-view",search_grid_container:".search-grid-container",siteSearchComponent:".search-component",siteSearchPreloadAniStatusFld:".site-search-preload-is-loading",atdwSearchPreloadAniStatusFld:".atdw-search-preload-is-loading",atdwKeywordField:".atdw-smart-filter-wrapper .filter_keyword",atdwRefreshResultBtn:".atdw-refresh-btn"};
function c(k,j){this.element=k;
this.$element=f(k);
this.resultsSection=this.$element.find(".search-results-counter-grid-more");
this.resultsContainer=this.$element.find(".results-holder");
this.loadMoreButton=f(this.$element.find(".load-more"));
this.searchButton=f(this.$element.find(".search-input-go"));
this.searchInputField=f(this.$element.find(".search-input"));
this.toggleButtons=this.$element.find(".search-toggle-buttons");
this.resultCountText=this.$element.find(".search-result-count");
this._defaults=g;
this._name=e;
this.searchUrl=this.$element.data("search-url");
this.page=1;
this.count=0;
this.onLoadCount=5;
this.countText=f(this.$element.find(".search-result-count-copy"));
this.atdwModuleLoaded=false;
this.options=f.extend({},g,j);
this.options=f.extend({},g,j);
this.btnListView=f(this.$element.find(this.options.btn_list_view));
this.btnGridView=f(this.$element.find(this.options.btn_grid_view));
this.searchGridContainer=f(this.$element.find(this.options.search_grid_container));
$plugin=this;
this.loadMoreButton.click(function(n){n.preventDefault();
$plugin.page+=1;
$plugin.onLoadCount=10;
$plugin.search()
});
this.searchInputField.keyup(function(){if(f(this).val()==""){$plugin.searchButton.prop("disabled",true)
}else{$plugin.searchButton.prop("disabled",false)
}});
this.$element.find("form").submit(function(n){n.preventDefault();
$plugin.count=0;
$plugin.onLoadCount=5;
$plugin.page=1;
$plugin.searchValue=f(this).find(".search-input").val();
$plugin.resultsContainer.empty();
$plugin.search();
if($plugin.atdwModuleLoaded){$plugin.enableATDWSearch(decodeURIComponent($plugin.searchValue))
}});
if(f(d).width()<this.options.mm_mobile_breakpoint){this.setGridType(true)
}else{this.setGridType(false)
}this.setupHandlebars();
var m=decodeURIComponent(a("q"));
if((m&&m.length>0&&m!="null")){var l=this.$element.find("form");
this.searchValue=l.find(".search-input").val()
}var i=decodeURIComponent(a("tagid"));
if((i&&i.length>0&&i!="null")){this.tagValue=i
}if(this.searchValue||this.tagValue){this.search()
}b.fulfilRelationship("search",function(){$plugin.atdwModuleLoaded=true;
$plugin.enableATDWSearch(decodeURIComponent($plugin.searchValue))
})
}c.prototype.setupHandlebars=function(){Handlebars.registerPartial("mosaic_item",f("#mosaicItem").html());
this.searchTemplate=Handlebars.compile(f("#searchTemplate").html());
this.onLoadSearchTemplate=Handlebars.compile(f("#onLoadSearchTemplate").html())
};
c.prototype.registerHandlebarsHelpers=function(){Handlebars.registerHelper("eachsublist",function(n,p,m,k){var j="";
if(p<n.length&&p>=0&&m<=n.length&&p<=m){for(var l=p;
l<=m;
l++){var o=n[l];
if(o.responsiveImageMap&&k.hash.responsiveImageType){o.selectedResponsiveImage=o.responsiveImageMap[k.hash.responsiveImageType]
}j=j+k.fn(o)
}}return j
});
Handlebars.registerHelper("ifCondMulti",function(m,i,l,k,j){if(this.responsiveImageMap&&j.hash.responsiveImageType){this.selectedResponsiveImage=this.responsiveImageMap[j.hash.responsiveImageType]
}switch(i){case"==&":return(m==l&&m==k)?j.fn(this):j.inverse(this);
case"==||":return(m==l||m==k)?j.fn(this):j.inverse(this);
default:return j.inverse(this)
}})
};
c.prototype.setGridType=function(i){$plugin=this;
if(i){$plugin.btnGridView.addClass("is-active");
$plugin.btnListView.removeClass("is-active");
$plugin.searchGridContainer.removeClass("mosaic-list-view")
}else{$plugin.btnListView.addClass("is-active");
$plugin.btnGridView.removeClass("is-active");
$plugin.searchGridContainer.addClass("mosaic-list-view")
}};
c.prototype.insertResponsiveImageMap=function(k){var l=k.responsiveImageMap;
if(l){for(var j=0;
j<k.content.length;
j++){k.content[j].responsiveImageMap=l
}}};
c.prototype.search=function(){$plugin=this;
page=$plugin.page;
onLoadCount=$plugin.onLoadCount;
$plugin.displayPreloadAnimation(true);
preloadImage.displayPreloadAnimation(true);
f.getJSON($plugin.searchUrl+"?q="+encodeURIComponent($plugin.searchValue)+"&tagid="+encodeURIComponent($plugin.tagValue)+"&page="+page+"&count="+onLoadCount,function(j){$plugin.displayPreloadAnimation(false);
$plugin.count+=j.content.length;
if($plugin.count>=j.totalResultCount){$plugin.count=j.totalResultCount;
$plugin.loadMoreButton.hide()
}else{$plugin.loadMoreButton.show()
}if(j.totalResultCount>0){$plugin.toggleButtons.show();
$plugin.resultCountText.show()
}else{$plugin.toggleButtons.hide();
if($plugin.resultsSection.parent().parent().siblings(".atdwSearchPreview").length){$plugin.resultCountText.hide()
}}$plugin.insertResponsiveImageMap(j);
var i=$plugin.countText.attr("data-copy");
i=i.replace("{0}",$plugin.count);
i=i.replace("{1}",j.totalResultCount);
$plugin.countText.html(i);
$plugin.countText.trigger("change");
$plugin.registerHandlebarsHelpers();
if($plugin.onLoadCount==5){if(j!=null&&j.length<5){onLoadCount=j.length
}$plugin.resultsContainer.append($plugin.onLoadSearchTemplate(j))
}else{$plugin.resultsContainer.append($plugin.searchTemplate(j))
}$plugin.resultsSection.show();
b.customDocumentDispatchEvent("ta-searchresultspopulated");
if(!typeof f(".mosaic-item")==="undefined"&&!typeof f(".mosaic-item").mosaic()==="undefined"){f(".mosaic-item").mosaic()
}moreLessOverflow.initialise()
})
};
c.prototype.isAtdwPreloadAnimationInProgress=function(){var j=f($plugin.options.atdwSearchPreloadAniStatusFld);
var i=(j.length>0&&j.val()=="true")?true:false;
return i
};
c.prototype.displayPreloadAnimation=function(l){var j=$plugin.options.siteSearchComponent;
var i=f($plugin.options.siteSearchPreloadAniStatusFld);
var k=$plugin.isAtdwPreloadAnimationInProgress();
if(k&&l){l=false
}preloadImage.displayPreloadAnimation(l,j);
i.val(l)
};
c.prototype.enableATDWSearch=function(i){if(typeof i!=="undefined"&&i!==null&&i!==""&&i!=="undefined"){var j=f($plugin.options.atdwKeywordField+":enabled");
i=i.replace(/\+/g," ");
j.val(decodeURIComponent(i))
}b.customDocumentDispatchEvent("ta-trigger-atdw-search")
};
f.fn[e]=function(i){return this.each(function(){if(!f.data(this,"plugin_"+e)){f.data(this,"plugin_"+e,new c(this,i))
}})
};
f(d).load(function(){f(".search-component").searchComponent()
});
function a(i){var j=new RegExp("[?&]"+i+"=([^&#]*)").exec(d.location.href);
if(j==null){return null
}else{return j[1]||0
}}})(jQuery,window,document,undefined);
if(!Array.prototype.hasOwnProperty("shuffle")){Array.prototype.shuffle=function(){var c=this.length,b,a;
while(--c>0){b=Math.floor(Math.random()*(c+1));
a=this[b];
this[b]=this[c];
this[c]=a
}return this
}
}CQ_Analytics.ClientContextMgr.addListener("storesinitialize",function(g){var i="div.agent-description-container";
var f="p.agent-search-view-more";
var c=200;
var a=3;
var d=$(".asp-search-form-item select[name=country]");
var b=$(".asp-search-form-item input[name=postcode]");
var h="";
$("select[name=country]").find("option").each(function(j,e){if(e.value.toUpperCase()===h.toUpperCase()){$(e).attr("selected","selected");
$("select[name=country]").trigger("change");
return false
}});
d.change(function(){});
$(".aspSearchHolder").each(function(){var l=$(this);
var k=1;
var j=".aspSearchHolder";
var e=50;
limit=l.data("limit")?l.data("limit"):a;
l.find('form[name="aspSearch"]').submit(function(p){preloadImage.displayPreloadAnimation(true,j);
p.preventDefault();
k=1;
var o={country:l.find('select[name="country"] option:selected').text(),state:l.find('select[name="state"] option:selected').val(),city:l.find('select[name="city"] option:selected').val(),postcode:l.find('input[name="postcode"]').val(),page:k,limit:limit};
var n=$(this).attr("action");
var m="";
$.getJSON("/apps/tourismaustralia/favorites/share/guid",function(q){m=q.shareId
});
$(".asp-search-agent-list-view-more").hide();
$.getJSON(n,o,function(v){if(v==null||v.length<=0){$(".asp-search-results").find(".search-result-count-copy").text("No results found")
}var r=l.find(".results");
var u=$("#agent-template").html();
var s=Handlebars.compile(u);
var q=0;
r.empty();
var w=Math.min(v.length,e);
var y=v.splice(0,w);
y.shuffle();
var x=function(z){switch(z){case"PREMIER":return 10;
case"SPECIALIST":return 5;
default:return -1
}};
y.sort(function(A,z){var C=x(A.category),B=x(z.category);
if(C<B){return 1
}if(C>B){return -1
}return 0
});
v=y.concat(v);
preloadImage.displayPreloadAnimation(false,j);
$.each(v,function(C,A){var z=s(A);
var B=$(z);
B.append(F);
var F=B.find("form");
F.submit(function(H){H.preventDefault();
var G={userName:F.find('input[name="yourname"]').val(),userEmail:F.find('input[name="youremail"]').val(),userPhone:F.find('input[name="userPhone"]').val(),privacy:F.find('input[name="privacy"]').prop("checked"),emailAdmin:F.find('input[name="receive-email-copy"]').prop("checked"),dreamTrip:F.find('input[name="include-dream-trip"]').prop("checked"),message:F.find('textarea[name="message"]').val(),adminEmail:$(".cc-email-address").val(),agentName:A.personName,agentEmail:A.email,shareUrl:$(".share-url").val()+"?id="+m};
$.ajax({type:"POST",url:n.replace(".aspsearch.",".agentemail."),data:G,success:function(){F.find(".status-message").text(F.find(".status-message").attr("data-successful-msg")).removeClass("status-message-error").addClass("status-message-success");
$(".status-message").show()
},error:function(){F.find(".status-message").text(F.find(".status-message").attr("data-unsuccessful-msg")).removeClass("status-message-success").addClass("status-message-error");
$(".status-message").show()
}});
F.parent(".asp-search-agent-list-item-form").addClass("is-submitted")
});
$(".asp-search-agent-list").toggleemailsection();
r.append(B);
q+=1;
if(q>limit){B.hide()
}var D=limit;
if(v.length<=limit){$(".asp-search-agent-list-view-more").hide();
D=v.length
}else{$(".asp-search-agent-list-view-more").show()
}var E=$(".asp-search-results").find(".search-result-count-copy").attr("data-copy");
E=E.replace("{0}",D);
E=E.replace("{1}",v.length);
$(".asp-search-results").find(".search-result-count-copy").text(E);
$(".asp-search-results").show()
});
initialiseInputFields();
moreLessOverflow.initialise()
})
});
l.find("form").submit();
l.find('div[name="viewMore"]').click(function(r){k+=1;
var o=k*limit;
var n=$(".asp-search-agent-list").find(".results");
var q=n.children().length;
var m=1;
while(m<=limit){if(n.children().eq(o-m)!=undefined){n.children().eq(o-m).css("display","")
}m++
}if(o>q){o=q
}if(o==q){$(".asp-search-agent-list-view-more").hide()
}var p=$(".asp-search-results").find(".search-result-count-copy").attr("data-copy");
p=p.replace("{0}",o);
p=p.replace("{1}",q);
$(".asp-search-results").find(".search-result-count-copy").text(p)
})
})
});
CQ_Analytics.ClientContextMgr.addListener("storesinitialize",function(c){var d="";
var a=false;
var b=false;
$(".dropdown-select-country").find("option").each(function(f,e){if(e.value.toUpperCase()===d.toUpperCase()){$(e).attr("selected","selected");
a=true
}});
$(".dropdown-select-country").change(function(){var e=$(this).val();
if(e!="none"){$.cookie("aus_country",e,{path:"/",expires:5*365});
window.location.reload()
}});
$(".dropdown-select-language").change(function(){$this=$(this);
var e=$this.val();
var f=$this.find("option:selected").data("lang");
$.cookie("aus_language",f,{path:"/",expires:5*365});
if(e){if(e.indexOf("/")==0){window.location.href=e
}else{window.open(e,"_blank")
}}});
$(".footer-social-list").each(function(){$this=$(this);
var e=$this.data("country");
if(e&&e.toUpperCase()==d.toUpperCase()){$this.show();
b=true
}});
if(a==false){$(".dropdown-select-country option[value='none']").attr("selected","selected")
}if(b==false){$(".default-social-list").show()
}});
var shareId="";
$.getJSON("/apps/tourismaustralia/favorites/share/guid",function(a){shareId=a.shareId
});
CQ_Analytics.ClientContextMgr.addListener("storesinitialize",function(c){var d="";
$(".shareThisHolder").each(function(){$this=$(this);
var g=$this.attr("data-shareUrl");
if(g.indexOf("favourites.html")>0){g=g+"?id="+shareId
}var e=$this.attr("data-type");
var h=$this.attr("data-accountId");
var j=$.parseJSON(sharethis_json);
var i=false;
var f=$this.find(".shareicons ul");
if(f.find("*").size()>0){return
}if(j&&j.shareThis){$.each(j.shareThis,function(k,l){if(l.country==d){i=true;
b(f,l,g,page_title,page_desc,e,logo_path);
return false
}})
}if(!i){b(f,j.defaultConfig,g,page_title,page_desc,e,logo_path)
}});
function b(h,g,e,k,j,f,i){if(f=="share"){$.getJSON("/apps/tourismaustralia/favorites/share/guid",function(l){a(h,g,e.concat("?id=").concat(l.shareId),k,j,i)
}).fail(function(){console.log("Error retrieving ID in buildUrlForShareButtons function in shareThis.js");
$(".shareicons").hide()
})
}else{a(h,g,e,k,j,i)
}}function a(m,l,f,k,h,g){var j=l.socialNetwork1.toString().toLowerCase();
var i=l.socialNetwork2.toString().toLowerCase();
var e="";
if($(m).data("ta-hide-mobile")===true){e=" hidden-xs"
}if($(m).data("ta-show-share")===true){$(m).append("<li class='btn-bubble btn-scale'><span class='btn-bubble-button st_sharethis_large' displayText='ShareThis' st_url='"+f+"' st_title='"+k+"' st_image='"+g+"' st_summary='"+h+"' data-ta-data-key='shareThis' tabindex='0' title='share'></span></li>")
}if($(m).data("ta-show-print")===true){$(m).append("<li class='btn-bubble print-btn-container btn-scale"+e+"'><a class='btn-bubble-button print-btn' data-ta-data-key='printButton' data-ta-data-layer='{\"event\": \"printThisPage-v5\"}' tabindex='0' title='print this page'></a></li>")
}if(j=="twitter"||i=="twitter"){$(".st_twitter_large").attr("st_via","Australia")
}}});
var pageCount=1;
var bigTileAlignment="";
function tagResults(a){pageCount+=1;
var e=$(a).parents(".category-results-mosaic").find(".results-holder");
var d=$(a).find("#pagePath").val();
var f=$(a).find("#varient").val();
var b=$(a).find("#tagid").val();
var c=$(a).find("#sortOnPageRank").val();
if(c==""){c="false"
}if(bigTileAlignment==""){bigTileAlignment=$(a).find("#bigTileAlignment").val()
}if(bigTileAlignment=="left"){bigTileAlignment="right"
}else{bigTileAlignment="left"
}$.ajax({url:"/bin/fw/tagResult."+pageCount+"."+bigTileAlignment+"."+f+"."+b+"."+c+".json"+d,success:function(h){if(h==null){$(".search-results-view-more").hide()
}Handlebars.registerHelper("ifCond",function(k,j,i){if(k===j){return i.fn(this)
}return i.inverse(this)
});
Handlebars.registerHelper("eachsublist",function(n,o,m,k){var j="";
if(o<n.length&&o>=0&&m<=n.length&&o<=m){for(var l=o;
l<=m;
l++){j=j+k.fn(n[l])
}}return j
});
var g=Handlebars.compile($("#searchTemplate").html());
$("#tagResultsDisplay").append(g(h))
}})
}var pageCount=1;
var bigTileAlignment="";
function tagResults(a){pageCount+=1;
var e=$(a).parents(".category-results-mosaic").find(".results-holder");
var d=$(a).find("#pagePath").val();
var f=$(a).find("#varient").val();
var b=$(a).find("#tagid").val();
var c=$(a).find("#sortOnPageRank").val();
if(c==""){c="false"
}if(bigTileAlignment==""){bigTileAlignment=$(a).find("#bigTileAlignment").val()
}if(bigTileAlignment=="left"){bigTileAlignment="right"
}else{bigTileAlignment="left"
}$.ajax({url:"/bin/fw/tagResult."+pageCount+"."+bigTileAlignment+"."+f+"."+b+"."+c+".json"+d,success:function(h){if(h==null){$(".search-results-view-more").hide()
}Handlebars.registerHelper("ifCond",function(k,j,i){if(k===j){return i.fn(this)
}return i.inverse(this)
});
Handlebars.registerHelper("eachsublist",function(n,o,m,k){var j="";
if(o<n.length&&o>=0&&m<=n.length&&o<=m){for(var l=o;
l<=m;
l++){j=j+k.fn(n[l])
}}return j
});
var g=Handlebars.compile($("#searchTemplate").html());
$("#tagResultsDisplay").append(g(h))
}})
}$(".site-search").find(".search-input-go").click(function(b){var a=$(".atdw-search").data("search-url");
searchValue=$(".search-input").val();
$(".atdw-refresh-results-wrapper").find("select").each(function(){$(this).val(".")
});
$.ajax({url:a+"?term="+searchValue,success:function(d){console.log(d);
Handlebars.registerHelper("ifCond",function(g,f,e){if(g===f){return e.fn(this)
}return e.inverse(this)
});
Handlebars.registerHelper("eachsublist",function(j,k,h,f){var e="";
if(k<j.length&&k>=0&&h<=j.length&&k<=h){for(var g=k;
g<=h;
g++){e=e+f.fn(j[g])
}}return e
});
var c=Handlebars.compile($("#atdwSiteSearchTemplate").html());
$(".atdwresult").html(c(d));
reWriteCategories(searchValue);
$(".mosaic-3column-item-option").mosaic({mosaic:".mosaic",mosaic_item:".mosaic-3column-item-option",mosaic_container:".mosaic-3column-container",mosaic_front:".mosaic-3column-front",mosaic_back:".mosaic-3column-back",mosaic_content:".mosaic-item-detail-container"})
}})
});
function reWriteCategories(b){var a=0;
$(".section-buttons-desktop").find("a").each(function(){var f=$(this).attr("href").split("?");
var d=f[0]+"?";
var h=f[1];
var c=h.split("&");
for(var e=0;
e<c.length;
e++){var g=c[e].split("=");
if(g[0]==="q"||g[0]==="term"){if(e==c.length){d+=c[e]
}else{d+=g[0]+"="+b+"&"
}}else{if(e==c.length){d+=c[e]
}else{d+=c[e]+"&"
}}}$(this).attr("href",d);
$(".atdw-refresh-results-item .btn-primary").attr("data-search-key",b)
})
}$(document).ready(function(){var a=$("#weather-today-locale").val();
var b=$("#locationId").val();
if(b!=undefined&&b!=""){$.ajax({url:"/bin/fw/weatherForecastServlet.json"+b,success:function(c){if(c!=null&&c!=""&&!(c.currentMaxTempValueInCelsius=="-"&&c.currentMinTempValueInCelsius=="-")){$(".weather-content-wrapper").show();
var k=Handlebars.compile($("#weatherTodayTemplate").html());
$(".weather-content-copy-wrapper").html(k(c));
var f=["clear","sunny","clear","mostlysunny","cloudy","clear","hazy","clear","lightrain","windy","foggy","shower","rain","dusty","frost","snow","storm","lightshower","heavyshower","cyclone"];
var j=$(".weather-content-wrapper"),h=j.find("img"),e=h.data("weather-imgsrc"),i=h.data("weather-imgnumber"),g=".png";
var d=(e.concat(f[i]).concat(g));
h.attr("src",d).attr("alt",f[i]);
$("[data-weather-temp]").on("click",function(){var m=$(this),p=m.closest(".weather-content-wrapper");
var n=m.data("weather-temp"),o=p.find(".weather-is-fahrenheit"),l=p.find(".weather-is-celsius");
if(n=="is-fahrenheit"){l.removeClass("is-active");
o.addClass("is-active")
}else{o.removeClass("is-active");
l.addClass("is-active")
}$("[data-weather-temp]").removeClass("is-active");
m.addClass("is-active")
});
if(a=="en_us"){$("[data-weather-temp='is-fahrenheit']").trigger("click")
}}else{$(".weather-content-wrapper").hide()
}}})
}});
var atdwSearch=(function(c,b,d){var e={};
var a={atdwEntireContainer:".atdwSearchComplex",atdwWrapper:".atdw-search-results-main-wrapper",filterContainer:".atdw-refresh-results-filter-container",customFilters:".atdw-custom-select-filter",categorySelectMobile:".mob-cat-switch",categorySelectDesktop:".desk-cat-switch",category:"#category",categorySectionDesktop:".section-buttons .section-buttons-desktop",categorySectionMobile:".section-buttons .section-buttons-mobile",refreshBtn:".atdw-refresh-btn",viewMoreBtn:".atdw-search-results-view-more .btn-primary",resultsAtdwMosaic:".atdw-mosaic",resultsContainer:".atdwSearchComplexDisplay",resultsCountSearchTemplate:"#atdwResultCountComplexSearchTemplate",resultsSearchTemplate:"#atdwComplexSearchTemplate",siteSearchComponent:".search-component",siteSearchPreloadFld:".site-search-preload-is-loading",atdwSearchPreloadFld:".atdw-search-preload-is-loading",mosaicOuterWrapper:".mosaic-2column-item-option",mosaicInnerContainer:".mosaic-2column-container",mosiac:".mosaic",mosaicContent:".mosaic-item-detail-container",analyticSelector:".atdw-refresh-results-item[data-ta-data-key='atdwModule']",filterKeyword:".filter_keyword",filterHiddenClass:"hidden",moreFiltersSelector:".atdw-refresh-toggle-container",currentLocationFldId:"#currentLocation",filterLocationUpdateBtn:".atdw-smart-filter--location-update-btn",allStates:"#allStates",allRegions:"#allRegions",allCities:"#allCities",locationJsonUrl:"/bin/fw/atlas-prepopulatelocations.json",searchUrl:"/bin/fw/atdwComplexSearch",eventsJsonUrl:"/bin/fw/atlas-prepopulateevents.json",dataTrigger:"trigger",page:0,resultCountContainer:".atdwSearchComplexDisplay .search-result-count-copy",orderContainer:".atdw-search-smart-dropdown",selectedOrders:{},searchMode:"#searchMode",geoLatLong:"#geoLatLong",geoRadius:"#geoRadius",polygonLatLong:"#polygonLatLong",searchOnLoad:"#searchOnLoad",componentPath:"#componentPath",extension:"json",defaultSelector:".find.",noCacheSelector:"atdwonclick.",cacheSelector:"atdwonload.",skipSelector:"na"};
e.initCategorySelector=function(){var g=$(a.categorySelectDesktop);
var i=$(a.categorySelectMobile);
var f=$(a.refreshBtn);
var h=$(a.currentCategory);
g.click(function(){var j=$(this).data(a.dataTrigger);
h.val(j);
e.clearStoredSelectedOrderOption(j);
document.customDocumentDispatchEvent("atwd-swap-categories");
f.trigger("click")
});
i.change(function(){var j=$(this).val();
h.val(j);
e.clearStoredSelectedOrderOption(j);
document.customDocumentDispatchEvent("atwd-swap-categories");
f.trigger("click")
})
};
e.initFilters=function(){var f=$(a.filterKeyword);
var g=$(a.customFilters);
g.change(function(){var l=$(this);
var n=l.val().indexOf("|")>0;
var m=(n)?$("option:selected",l).text():l.val();
var i=l.data(a.filterOrder);
var j=".atdw-select-filter-hdnfld[data-atdw-filter-order='"+i+"']";
var h=".atdw-refresh-results-filter-container.is-active "+j;
var k=$(h);
k.val(m)
})
};
e.initResultButtons=function(){var g=$(a.refreshBtn);
var f=$(a.viewMoreBtn);
var h=$(a.filterLocationUpdateBtn);
g.click(function(j){var i=$(this).closest(".atdw-refresh-results-filter-container.is-active");
if(i.length&&e.loadingData!==true){$(a.resultsContainer).empty();
f.hide();
a.page=1;
e.getSearchResults(false)
}});
f.click(function(i){a.page=parseInt(a.page)+1;
e.getSearchResults(false)
});
h.click(function(){$activeRefreshBtn=$(".is-active .atdw-refresh-btn");
$activeRefreshBtn.trigger("click")
})
};
e.addAnalyticsDataToResults=function(f){var g=(f.page-1)*f.pageSize+f.results.length;
$.each(f.results,function(i,h){$.extend(h,{filters:f.analyticsMap})
})
};
e.updateResultCount=function(f){var h=$(a.resultCountContainer);
var i=h.data("copy");
var g=(f.page-1)*f.pageSize+f.results.length;
i=i.replace("{0}",g);
i=i.replace("{1}",f.totalResultCount);
h.html(i)
};
e.initOrderOptions=function(f,h){var g=e.getOrderOptionsForCategory(f);
if(a.selectedOrders[f]){g.val(a.selectedOrders[f].val)
}if(h>0){$(a.orderContainer).show();
g.show().siblings().hide()
}else{$(a.orderContainer).hide()
}g.unbind("change");
g.change(function(){e.storeSelectedOrderOption(g,f);
$(a.resultsContainer).empty();
a.page=1;
e.getSearchResults(false)
})
};
e.getOrderOptionsForCategory=function(f){return $(a.orderContainer+" select[data-category="+f+"]")
};
e.storeSelectedOrderOption=function(g,h){var f=g.find(":selected");
if(f.length){a.selectedOrders[h]={val:f.val(),paramKey:f.data("param-key"),paramVal:f.data("param-val")}
}};
e.clearStoredSelectedOrderOption=function(f){a.selectedOrders[f]=null
};
e.handleFilterChange=function(f){$.ajax({url:a.locationJsonUrl,success:function(h){var g=JSON.stringify(h);
e.changeFilter(f,JSON.parse(g))
}})
};
e.updateAllKeywordField=function(g){var h=$(g);
var f=h.val();
var i=$(a.filterKeyword+":enabled:not('.hidden')");
i.val(f)
};
e.populateEventCalendar=function(){var f=new Date();
for(var g=0;
g<24;
g++){$("[name=Events_month]").append($("<option>").val(g+"M|"+(g+1)+"M").html($("#month_"+f.getMonth()).val()+" "+f.getFullYear()));
f.setMonth(f.getMonth()+1)
}};
e.compileSearchParameters=function(f){var g={};
g.page=a.page;
e.compileCommonParameters(g,f);
e.compileGeoSearchParameters(g);
e.compileCustomParameters(g,f);
e.compileOrderParameter(g,f);
return g
};
e.compileCommonParameters=function(j,i){e.validateParamAndAppend($("#atlas-locale"),j,"locale");
e.validateParamAndAppend($("[name="+i+"_keyword]"),j,"term");
var h=$(a.currentLocationFldId);
var g=h.val();
var f=JSON.parse(g);
if(typeof(f)!=="undefined"){j.location=f.id;
j.location_name=f.name
}};
e.compileCustomParameters=function(i,h){var f=h;
var g=h.length;
if(f.substring(g-1)==="s"){f=f.substring(0,g-1)
}i.category=f;
switch(h){case"Accommodation":e.getCheckboxValue("[name=Accommodation_verticalClassifications]",i,"verticalClassifications");
e.getCheckboxValue("[name=Accommodation_starRating]",i,"ratingAAA");
e.getSliderValue($("[name=Accommodation_price_from]"),i,"price_from");
e.getSliderValue($("[name=Accommodation_price_to]"),i,"price_to");
break;
case"AttractionAndTour":e.getRadioButtonValue("[name=AttractionsAndTours_subCategory]",i,"subCategory");
e.getMultiSelectValue($("[name=Tours_activity]"),i,"activity");
e.getMultiSelectValue($("[name=Tours_verticalClassifications]"),i,"verticalClassifications");
break;
case"Restaurants":e.getRadioButtonValue("[name=Restaurant_verticalClassifications]",i,"verticalClassifications");
e.getRadioButtonValue("[name=Restaurant_priceRange]",i,"restprice");
e.getRadioButtonValue("[name=Restaurant_byoLicence]",i,"byolicence");
e.getMultiSelectValue("[name=Restaurant_cuisine]",i,"cuisine");
e.getMultiSelectValue("[name=Restaurant_facilities]",i,"entityfac");
break;
case"TransportAndHire":e.getMultiSelectValue("[name=Hire_verticalClassifications]",i,"verticalClassifications");
e.getMultiSelectValue($("[name=Transport_modeOfTransportType]"),i,"verticalClassifications");
e.getRadioButtonValue($("[name=TransportAndHire_subCategory]"),i,"subCategory");
break
}};
e.compileOrderParameter=function(g,f){var h=a.selectedOrders[f];
if(h){g[h.paramKey]=h.paramVal
}};
e.compileFiltersForAnalytics=function(g){var f="";
f=(typeof(g.term)!=="undefined")?g.term:"n/a";
f=f+"|"+((typeof(g.state)!=="undefined")?g.state:"n/a");
f=f+"|"+((typeof(g.region)!=="undefined")?g.region:"n/a");
f=f+"|"+((typeof(g.city)!=="undefined")?g.city:"n/a");
f=f+e.getCustomFiltersForAnalytics();
return f
};
e.setAnalyticsAttributes=function(g){var f=e.compileFiltersForAnalytics(g);
var h='{"event": "ATDWfilter2-v5", "atdwCategory" : "'+g.category+'", "atdwFilter":"'+f+'" }';
$(a.analyticSelector).attr("data-ta-data-layer",h)
};
e.getSearchResults=function(h){var g=e.getCurrentCategory();
var f=$(a.viewMoreBtn);
var k=f.is(":visible");
var j=e.compileSearchParameters(g);
e.setAnalyticsAttributes(j);
f.hide();
e.showPreloadAnimation(true);
e.loadingData=true;
$(".atdw-error").removeClass("is-error");
var i=e.createSearchRequest($(a.componentPath).val(),j,h);
$(a.orderContainer).hide();
$.ajax({url:i.servletPath,data:i.data,success:function(n){console.log(n);
var m=$.parseJSON("{"+n.analyticsMap+"}");
$(a.refreshBtn).first().trigger("atdw.search",m);
if(n.category&&e.getCurrentCategory().search(n.category)>=0){e.addAnalyticsDataToResults(n);
var l=e.populateResultTemplate(n);
e.initMosaicTiles(l);
e.updateResultCount(n);
e.initOrderOptions(g,n.totalResultCount);
e.compilePagination(n)
}e.showPreloadAnimation(false);
e.anchorToAtdw();
document.customDocumentDispatchEvent("ta-atdwresultspopulated");
e.loadingData=false
},error:function(){e.showPreloadAnimation(false);
$(".atdw-error").addClass("is-error");
if(k){f.show()
}e.loadingData=false
}})
};
e.anchorToAtdw=function(){var g=$(a.atdwWrapper);
var f=e.urlParam("ct");
if(g.length>0&&!(f==null||f=="")){$("body, html").animate({scrollTop:g.offset().top-100})
}};
e.setDefaultLayout=function(){var j=e.getDefaultCategory();
var m=e.urlParam("ct");
var g=decodeURIComponent(e.urlParam("q"));
var h=false;
var l=false;
if(typeof g!=="undefined"&&g!==null&&g!==""&&g!==0&&g!=="undefined"&&g!=="null"){var k=$(a.filterKeyword+":enabled:not('.hidden')");
g=g.replace(/\+/g," ");
document.customDocumentDispatchEvent("atwd-update-keyword",g)
}if(m!==""&&m!==null&&m!==undefined){$(a.categorySectionDesktop).find("a").each(function(){if($(this).attr("data-trigger")==m){return h=true
}});
$(a.categorySectionMobile).find("option").each(function(){if($(this).attr("value")==m){return l=true
}});
if(h===true&&l===true){j=m
}}$(a.category).val(j);
b.setCategory(j);
var i=$(a.searchOnLoad).val();
var f=$(a.siteSearchComponent).length;
if(f<=0&&i==="true"){$(a.currentCategory).val(j);
$(a.resultsContainer).empty();
a.page=1;
e.getSearchResults(true)
}else{if(f>=1){$(c).on("ta-trigger-atdw-search",function(){$(a.resultsContainer).empty();
a.page=1;
e.getSearchResults(false)
})
}}};
e.showPreloadAnimation=function(g){var f=$(a.atdwSearchPreloadFld);
f.val(g);
d.displayPreloadAnimation(g,a.atdwEntireContainer)
};
e.isMobileView=function(){var f=$(a.categorySectionMobile);
var g=f.is(":visible");
return g
};
e.getCurrentCategory=function(){var g="";
if(e.isMobileView()){g=$(a.categorySelectMobile).val()
}else{var f=a.categorySelectDesktop+".is-active";
g=$(f).data(a.dataTrigger)
}return g
};
e.getDefaultCategory=function(){var f="";
if(e.isMobileView()){f=$(a.categorySelectMobile).val()
}else{var g=$(a.categorySelectDesktop+":first");
f=g.data(a.dataTrigger)
}return f
};
e.validateParamAndAppend=function(f,h,g){var i=f.val();
if(i&&i!==""&&i!=="."){h[g]=i
}};
e.eventsCompileDate=function(f){var i=$("[name=Events_month] option:selected").val();
var h=$("[name=Events_month] option:selected").text();
if(i&&i!==""&&i!=="."){var g=i.split("|");
f.frequencyStartDate=g[0];
f.frequencyEndDate=g[1]
}if(h&&h!==""&&h!=="."){f.month=h
}};
e.compileGeoSearchParameters=function(j){var i=$(a.searchMode).val();
j.searchMode=i;
switch(i){case"geo":var f=$(a.geoLatLong).val();
var g=$(a.geoRadius).val();
j.latlong=f;
j.dist=g;
break;
case"polygon":var h=$(a.polygonLatLong).val();
j.ply="POLYGON(("+h+"))";
break
}};
e.getCustomFiltersForAnalytics=function(){var f=a.filterContainer+".is-active ";
var g="";
return g
};
e.populateResultTemplate=function(h){Handlebars.registerHelper("ifCond",function(k,j,i){if(k===j){return i.fn(this)
}return i.inverse(this)
});
Handlebars.registerHelper("eachsublist",function(n,o,m,k){var j="";
if(o<n.length&&o>=0&&m<=n.length&&o<=m){for(var l=o;
l<=m;
l++){j=j+k.fn(n[l])
}}return j
});
Handlebars.registerHelper("lengthMinusOne",function(){return this.length-1
});
Handlebars.registerHelper("join",function(j,i){if(j==null){return null
}return[].concat(j).join(i)
});
var g=Handlebars.compile($(a.resultsCountSearchTemplate).html());
var f=Handlebars.compile($(a.resultsSearchTemplate).html());
$(a.resultsContainer).append(g(h));
$(a.resultsAtdwMosaic).append(f(h));
return f
};
e.initMosaicTiles=function(){$(a.mosaicOuterWrapper).mosaic({mosaic:a.mosaic,mosaic_item:a.mosaicOuterWrapper,mosaic_container:a.mosaicInnerContainer,mosaic_front:a.mosaicFront,mosaic_back:a.mosaicBack,mosaic_content:a.mosaicContent})
};
e.compilePagination=function(g){var f=$(a.viewMoreBtn);
if(g.page===g.lastPage||g.totalResultCount<1){f.hide()
}else{f.show()
}if(typeof(mosiacViewMore)!=="undefined"){mosiacViewMore.initViewMore()
}};
e.createSearchRequest=function(h,k,g){var j={};
var i=h+a.defaultSelector;
if(g){var f=decodeURIComponent(e.urlParam("q"));
if(f!==null&&f!=="null"&&f!==""){j.servletPath=i+a.noCacheSelector+a.extension;
j.data=k
}else{i+=a.cacheSelector;
i+=e.createSelector(k.category?k.category:a.skipSelector);
i+=a.extension;
j.data={};
j.servletPath=i
}}else{j.servletPath=i+a.noCacheSelector+a.extension;
j.data=k
}return j
};
e.createSelector=function(f){return f.replace(/\s/g,"_")+"."
};
e.urlParam=function(f){var g=new RegExp("[?&]"+f+"=([^&#]*)").exec(c.location.href);
if(g==null){return null
}else{return g[1]||0
}};
e.getCheckboxValue=function(g,j,i){var k=$(g);
var h=k.find('input[type="checkbox"]');
var f=[];
$.each(h,function(m,l){var n=$(l).is(":checked");
if(n){f.push(l.value)
}});
return j[i]=f.toString()
};
e.getSliderValue=function(f,h,g){var i=f.val();
if(i!="0"&&i!="1000"){if(i&&i!==""&&i!=="."){h[g]=i
}}};
e.getRadioButtonValue=function(f,i,g){var j=$(f);
var h=j.find("input[type='radio']:checked");
if(h.val()){return i[g]=h.val()
}};
e.getMultiSelectValue=function(g,i,h){var f=$(g).select2("data");
var j="";
if(f){if(f.length){j=$.map(f,function(l,k){return l.id
});
j=j.toString()
}else{if(f.length!=0){j=f.id
}}}if(j.length){return i[h]=j
}};
return e
})(this,atdwFilterLayout,preloadImage);
$(document).ready(function(){var a=setInterval(function(){var b=$("#currentLocation");
if(typeof(b)!=="undefined"&&b.val()!==""){clearInterval(a);
atdwSearch.initCategorySelector();
atdwSearch.initFilters();
atdwSearch.initResultButtons();
atdwSearch.populateEventCalendar();
atdwSearch.setDefaultLayout();
document.fulfilRelationship("search")
}},500)
});
function getDefaultDialog(e,b,i){var g=e.getValue();
var d=e.findParentByType("dialog");
var c=d.find("name","./defaultLink")[0];
var h=window.location.pathname;
var f="";
if(h.indexOf("/")>=0){var a=h.split("/");
if(a!=null&&a.length>=4){f="/content/australia/"+a[3]+"/search"
}}if(g==""||g=="undefined"){c.setValue(f)
}}function getDefaultLinkField(f,c,j){var h=f.getValue();
var e=f.findParentByType("dialog");
var d=e.find("name","./defaultLink")[0];
var b=e.find("name","./defaultSearchKeyword")[0];
var i=window.location.pathname;
var g="";
if(i.indexOf("/")>=0){var a=i.split("/");
if(a!=null&&a.length>=4){g="/content/australia/"+a[3]
}}if(h==""||h=="undefined"){if(f.xtype=="textfield"){f.setValue(b.getValue())
}else{if(f.xtype=="pathfield"){if(f.name=="./category1/link"){f.setValue(g+"/planning/find-accommodation")
}else{if(f.name=="./category2/link"){f.setValue(g+"/planning/find-tours")
}else{f.setValue(d.getValue())
}}}}}};