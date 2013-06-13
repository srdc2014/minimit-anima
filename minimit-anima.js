/*
 * Minimit Anima 1.0
 * Copyright (C) 2012 by Riccardo Caroli http://www.minimit.com
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

/* Modernizr 2.6.2 http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
   ----------------------------------------------------------------------- */
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransforms=function(){return!!E("transform")},p.csstransforms3d=function(){var a=!!E("perspective");return a&&"webkitPerspective"in f.style&&v("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},p.csstransitions=function(){return E("transition")};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e.prefixed=function(a,b,c){return b?E(a,b,c):E(a,"pfx")},e}(this,this.document);

/* Bez http://github.com/rdallasgray/bez
 * Copyright 2011 Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
   ----------------------------------------------------------------------- */
jQuery.extend({bez:function(a){var b="bez_"+$.makeArray(arguments).join("_").replace(".","p");if(typeof jQuery.easing[b]!="function"){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){var b=a,c=0,d;while(++c<14){d=f(b,0)-a;if(Math.abs(d)<.001)break;b-=d/g(b)}return b};return function(a){return f(h(a),1)}};jQuery.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}});

/* Transform https://github.com/louisremi/jquery.transform.js
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
   ----------------------------------------------------------------------- */
(function(j,H,s,k,I){function w(a){var a=a.split(")"),b=j.trim,f=-1,e=a.length-1,d,h,g=x?new Float32Array(6):[],c=x?new Float32Array(6):[],i=x?new Float32Array(6):[1,0,0,1,0,0];g[0]=g[3]=i[0]=i[3]=1;for(g[1]=g[2]=g[4]=g[5]=0;++f<e;){d=a[f].split("(");h=b(d[0]);d=d[1];c[0]=c[3]=1;c[1]=c[2]=c[4]=c[5]=0;switch(h){case p+"X":c[4]=parseInt(d,10);break;case p+"Y":c[5]=parseInt(d,10);break;case p:d=d.split(",");c[4]=parseInt(d[0],10);c[5]=parseInt(d[1]||0,10);break;case t:d=u(d);c[0]=k.cos(d);c[1]=k.sin(d);
c[2]=-k.sin(d);c[3]=k.cos(d);break;case m+"X":c[0]=+d;break;case m+"Y":c[3]=d;break;case m:d=d.split(",");c[0]=d[0];c[3]=1<d.length?d[1]:d[0];break;case q+"X":c[2]=k.tan(u(d));break;case q+"Y":c[1]=k.tan(u(d));break;case v:d=d.split(","),c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],c[4]=parseInt(d[4],10),c[5]=parseInt(d[5],10)}i[0]=g[0]*c[0]+g[2]*c[1];i[1]=g[1]*c[0]+g[3]*c[1];i[2]=g[0]*c[2]+g[2]*c[3];i[3]=g[1]*c[2]+g[3]*c[3];i[4]=g[0]*c[4]+g[2]*c[5]+g[4];i[5]=g[1]*c[4]+g[3]*c[5]+g[5];g=[i[0],i[1],i[2],
i[3],i[4],i[5]]}return i}function y(a){var b,f,e,d=a[0],h=a[1],g=a[2],c=a[3];d*c-h*g?(b=k.sqrt(d*d+h*h),d/=b,h/=b,e=d*g+h*c,g-=d*e,c-=h*e,f=k.sqrt(g*g+c*c),e/=f,d*(c/f)<h*(g/f)&&(d=-d,h=-h,e=-e,b=-b)):b=f=e=0;return[[p,[+a[4],+a[5]]],[t,k.atan2(h,d)],[q+"X",k.atan(e)],[m,[b,f]]]}function J(a,b){var f={start:[],end:[]},e=-1,d,h,g,c;("none"==a||E.test(a))&&(a="");("none"==b||E.test(b))&&(b="");a&&(b&&!b.indexOf("matrix")&&z(a).join()==z(b.split(")")[0]).join())&&(f.origin=a,a="",b=b.slice(b.indexOf(")")+
1));if(a||b){if(!a||!b||a.replace(/(?:\([^)]*\))|\s/g,"")==b.replace(/(?:\([^)]*\))|\s/g,"")){a&&(a=a.split(")"))&&(d=a.length);for(b&&(b=b.split(")"))&&(d=b.length);++e<d-1;){a[e]&&(h=a[e].split("("));b[e]&&(g=b[e].split("("));c=j.trim((h||g)[0]);for(var i=f.start,k=F(c,h?h[1]:0),l=void 0;l=k.shift();)i.push(l);i=f.end;c=F(c,g?g[1]:0);for(k=void 0;k=c.shift();)i.push(k)}}else f.start=y(w(a)),f.end=y(w(b));return f}}function F(a,b){var f=+!a.indexOf(m),e,d=a.replace(/e[XY]/,"e");switch(a){case p+
"Y":case m+"Y":b=[f,b?parseFloat(b):f];break;case p+"X":case p:case m+"X":e=1;case m:b=b?(b=b.split(","))&&[parseFloat(b[0]),parseFloat(1<b.length?b[1]:a==m?e||b[0]:f+"")]:[f,f];break;case q+"X":case q+"Y":case t:b=b?u(b):0;break;case v:return y(b?z(b):[1,0,0,1,0,0])}return[[d,b]]}function u(a){return~a.indexOf("deg")?parseInt(a,10)*(2*k.PI/360):~a.indexOf("grad")?parseInt(a,10)*(k.PI/200):parseFloat(a)}function z(a){a=/([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(a);return[a[1],
a[2],a[3],a[4],a[5],a[6]]}var s=s.createElement("div").style,A=["OTransform","msTransform","WebkitTransform","MozTransform"],B=A.length,l,C,x="Float32Array"in H,n,G,D=/Matrix([^)]*)/,E=/^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,p="translate",t="rotate",m="scale",q="skew",v="matrix";for(;B--;)A[B]in s&&(j.support.transform=l=A[B],j.support.transformOrigin=l+"Origin");l||(j.support.matrixFilter=C=""===s.filter);j.cssNumber.transform=j.cssNumber.transformOrigin=!0;l&&"transform"!=
l?(j.cssProps.transform=l,j.cssProps.transformOrigin=l+"Origin","MozTransform"==l?n={get:function(a,b){return b?j.css(a,l).split("px").join(""):a.style[l]},set:function(a,b){a.style[l]=/matrix\([^)p]*\)/.test(b)?b.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,v+"$1$2px,$3px"):b}}:/^1\.[0-5](?:\.|$)/.test(j.fn.jquery)&&(n={get:function(a,b){return b?j.css(a,l.replace(/^ms/,"Ms")):a.style[l]}})):C&&(n={get:function(a,b,f){var e=b&&a.currentStyle?a.currentStyle:a.style;e&&D.test(e.filter)?(b=RegExp.$1.split(","),
b=[b[0].split("=")[1],b[2].split("=")[1],b[1].split("=")[1],b[3].split("=")[1]]):b=[1,0,0,1];j.cssHooks.transformOrigin?(a=j._data(a,"transformTranslate",I),b[4]=a?a[0]:0,b[5]=a?a[1]:0):(b[4]=e?parseInt(e.left,10)||0:0,b[5]=e?parseInt(e.top,10)||0:0);return f?b:v+"("+b+")"},set:function(a,b,f){var e=a.style,d,h;f||(e.zoom=1);b=w(b);f=["Matrix(M11="+b[0],"M12="+b[2],"M21="+b[1],"M22="+b[3],"SizingMethod='auto expand'"].join();h=(d=a.currentStyle)&&d.filter||e.filter||"";e.filter=D.test(h)?h.replace(D,
f):h+" progid:DXImageTransform.Microsoft."+f+")";if(j.cssHooks.transformOrigin)j.cssHooks.transformOrigin.set(a,b);else{if(d=j.transform.centerOrigin)e["margin"==d?"marginLeft":"left"]=-(a.offsetWidth/2)+a.clientWidth/2+"px",e["margin"==d?"marginTop":"top"]=-(a.offsetHeight/2)+a.clientHeight/2+"px";e.left=b[4]+"px";e.top=b[5]+"px"}}});n&&(j.cssHooks.transform=n);G=n&&n.get||j.css;j.fx.step.transform=function(a){var b=a.elem,f=a.start,e=a.end,d=a.pos,h="",g,c,i,r;if(!f||"string"===typeof f)f||(f=G(b,
l)),C&&(b.style.zoom=1),e=e.split("+=").join(f),j.extend(a,J(f,e)),f=a.start,e=a.end;for(g=f.length;g--;)switch(c=f[g],i=e[g],r=0,c[0]){case p:r="px";case m:r||(r="");h=c[0]+"("+k.round(1E5*(c[1][0]+(i[1][0]-c[1][0])*d))/1E5+r+","+k.round(1E5*(c[1][1]+(i[1][1]-c[1][1])*d))/1E5+r+")"+h;break;case q+"X":case q+"Y":case t:h=c[0]+"("+k.round(1E5*(c[1]+(i[1]-c[1])*d))/1E5+"rad)"+h}a.origin&&(h=a.origin+h);n&&n.set?n.set(b,h,1):b.style[l]=h};j.transform={centerOrigin:"margin"}})(jQuery,window,document,
Math);

/* ==========================================================================
                                Anima
========================================================================== */

/* 
 * Minimit Anima
 * @function anima(properties:object, duration:number, easing:string, options:object)
 *  @param properties.property:stringORnumber - property to animate
 *      can be any css (use string if it's not a valid javascript variable like {"margin-top":500}) or transform like x, y, z, skew, skewX, skewY, scale, scaleX, scaleY, scaleZ, rotate, rotateX, rotateY, rotateZ, perspective
 *  @param duration:number [Default:0] - duration of the animation
 *  @param easing:string [Default:"ease"] - bezier easing of the animation
 *      can be a custom bezier or a preset like linear, ease, easeIn, easeOut, easeInOut, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInBack, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutBack, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutBack
 *  @param options.complete:function - function to execute on complete animation
 *  @param options.skipNoSupport:boolean [Default:false] - if you want to skip the animation on browser without transform support
 *  @param options.skipPartialSupport:boolean [Default:false] - if you want to skip the animation on browser without transform3d or transition support
 *  @param options.backfaceVisibility:boolean [Default:false] - if you want to have backfaceVisibility true or false (default false to fix some browser bugs)
 */
 
/* 
 * Usage examples
 *  $(".mydivs").anima({x:100}); // instant animation of transformX
 *  $(".mydivs").anima({scale:0.8}, 800, ".19,1,.22,1"); // animation of scale with duration and custom easing
 *  $(".mydivs").anima({"margin-top":500}, 200, ".19,1,.22,1", {complete:function(){$(this).css("display","none");}}); // example with css property animation and complete function
 *  $(".mydivs").anima3d({x:200}, 800).anima2d({x:100}, 800); // different animations based on browser support of transition and transform3d
 *  $(".mydivs").anima({x:200}, 800, "linear", {skipNoSupport:true}); // skip the animation on browser without transform support
 */

(function($){

    /* Settings
       ----------------------------------------------------------------------- */
    $.anima = {
        partialSupport: null,
        noSupport: null,
        uniquePrefixIndex: 0,
        transformProps: [],
        transformProps1: ["x", "y", "z"],
        transformProps2: ["scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "rotate", "rotateX", "rotateY"],
        transformProps3: ["scaleZ", "rotateZ", "perspective"],
        cssEase: {
            "linear":".25,.25,.75,.75",
            "ease":".25,.1,.25,1",
            "easeIn":".42,0,1,1",
            "easeOut":"0,0,.58,1",
            "easeInOut":".42,0,.58,10",
            "easeInQuad":".55,.085,.68,.53",
            "easeInCubic":".55,.055,.675,.19",
            "easeInQuart":".895,.03,.685,.22",
            "easeInQuint":".755,.05,.855,.06",
            "easeInSine":".470,0,.745,.715",
            "easeInExpo":".95,.05,.795,.035",
            "easeInCirc":".6,.04,.98,.335",
            "easeInBack":".6,-0.28,.735,.045",
            "easeOutQuad":".25,.46,.45,.94",
            "easeOutCubic":".215,.61,.355,1",
            "easeOutQuart":".165,.84,.44,1",
            "easeOutQuint":".23,1,.32,1",
            "easeOutSine":".39,.575,.565,1",
            "easeOutExpo":".19,1,.22,1",
            "easeOutCirc":".075,.82,.165,1",
            "easeOutBack":".175,.885,.32,1.275",
            "easeInOutQuad":".455,.03,.515,.955",
            "easeInOutCubic":".645,.045,.355,1",
            "easeInOutQuart":".77,0,.175,1",
            "easeInOutQuint":".86,0,.07,10",
            "easeInOutSine":".445,.05,.55,.95",
            "easeInOutExpo":"1,0,0,1",
            "easeInOutCirc":".785,.135,.15,.86",
            "easeInOutBack":".68,-0.55,.265,1.55"
        }
    };
    $.anima.transformProps = $.anima.transformProps1.concat($.anima.transformProps2, $.anima.transformProps3);

    /* Get css3 transition and transform prefixes
       ----------------------------------------------------------------------- */
    var gotTransforms = window.Modernizr.csstransforms;
    var gotTransform3d = window.Modernizr.csstransforms3d;
    var gotTransitions = window.Modernizr.csstransitions;
    function getCss(str){
        if(str){
            return str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
        }else{
            return false;
        }
    }
    var transitionJs = Modernizr.prefixed('transition');
    var transformJs = Modernizr.prefixed('transform');
    var perspectiveJs = Modernizr.prefixed('perspective');
    var transitionCss = getCss(transitionJs);
    var transformCss = getCss(transformJs);
    var perspectiveCss = getCss(perspectiveJs);

    /* Support detection
       ----------------------------------------------------------------------- */
    // disables 3D and transitions animations
    $.anima.partialSupport = !transitionJs || !perspectiveJs;
    // disables animations
    $.anima.noSupport = false;
    // when we havent transforms support
    if(!gotTransforms){$.anima.noSupport = true;}
    
    /* Anima
       ----------------------------------------------------------------------- */
    function isset(prop){
        return typeof prop != 'undefined';
    }
    $.fn.anima2d = function(properties, duration, easing, options){
        return $(this).anima(properties, duration, easing, options, "anima2d");
    };
    $.fn.anima3d = function(properties, duration, easing, options){
        return $(this).anima(properties, duration, easing, options, "anima3d");
    };
    $.fn.anima = function(properties, duration, easing, options, type){
        // defaults
        if(!isset(type)){type = "anima";}
        if(!isset(duration)){duration = 0;}
        if(!isset(easing)){easing = "ease";}
        if($.anima.cssEase[easing]){easing = $.anima.cssEase[easing];}
        var backfaceVisibility = isset(options) && isset(options.backfaceVisibility) ? options.backfaceVisibility : false;
        if(!backfaceVisibility){$(this).css("backface-visibility", "hidden");} // fix for chrome 1 pixel shift
        if(typeof duration === 'function'){
          options = duration;
          duration = undefined;
        }
        options = isset(options) ? options : {};
        options.skipNoSupport = isset(options) && isset(options.skipNoSupport) ? options.skipNoSupport : false;
        options.skipPartialSupport = isset(options) && isset(options.skipPartialSupport) ? options.skipPartialSupport : false;
        options.complete = isset(options) && isset(options.complete) ? options.complete : null;
        //
        return $(this).each(function(){
            var path = $(this);
            // assign uniquePrefix, don't use uniquePrefix variable or it bugs
            if(!path.data("uniquePrefix")){
                path.data("uniquePrefix", 'animaPrefix'+(++$.anima.uniquePrefixIndex));
            }
            if(!$.anima[path.data("uniquePrefix")]){
                $.anima[path.data("uniquePrefix")] = {};
            }
            // call animate function
            if(!$.anima.noSupport){
                path.delay(0, type).dequeue(type); // autostart the queue
                path.queue(type, function(next){
                    $(this).goAnima(properties, duration, easing, options, type);
                    $(this).dequeue();
                });
            }else{
                path.goAnima(properties, duration, easing, options, type);
            }
        });
    };
    $.fn.goAnima = function(properties, duration, easing, options, type){
        var self = this;
        var path = $(this);
        var easingA = $.bez(easing.split(","));
        var easingB = "cubic-bezier("+easing+")";
        var durationS = duration/1000;
        // completes
        if(options.complete){
            path.animate(
                {fake:0},
                {queue:false, duration:duration, specialEasing:{fake:easingA}, complete:function(){
                    options.complete.apply(self);
                }}
            );
        }
        // animations
        if(!$.anima.noSupport){
            // transforms 2d
            var transformArr = [];
            var transitionArr = [];
            var transformProps = $.anima.transformProps;
            var transformProps1 = $.anima.transformProps1;
            var transformProps2 = $.anima.transformProps2;
            var transformProps3 = $.anima.transformProps3;
            //
            if(!$.anima.partialSupport && !(type == "anima2d")){
                // here we save the css animations to be able to stop them
                var appliedCss = $.anima[path.data("uniquePrefix")];
                // translate
                if(isset(properties.x)){
                    transformArr.push("translateX("+properties.x+"px)");
                }
                if(isset(properties.y)){
                    transformArr.push("translateY("+properties.y+"px)");
                }
                if(isset(properties.z)){
                    transformArr.push("translateZ("+properties.z+"px)");
                }
                // transforms 2d
                for(i=0; i<transformProps2.length; i++){
                    if(isset(properties[transformProps2[i]])){
                        transformArr.push(transformProps2[i]+"("+properties[transformProps2[i]]+")");
                    }
                }
                // transforms 3d
                for(i=0; i<transformProps3.length; i++){
                    if(isset(properties[transformProps3[i]])){
                        transformArr.unshift(transformProps3[i]+"("+properties[transformProps3[i]]+")");
                    }
                }
                // transforms apply
                if(transformArr.length > 0){
                    path.css(transformCss, transformArr.join(" "));
                    appliedCss[transformCss] = true;
                    transitionArr.push(transformCss+" "+durationS+"s "+easingB);
                }
                // other properties
                for(var prop in properties){
                    if($.inArray(prop, transformProps) == -1){
                        path.css(prop, properties[prop]);
                        appliedCss[prop] = true;
                        transitionArr.push(prop+" "+durationS+"s "+easingB);
                    }
                }
                // update transitions with old ones
                // it keeps not stopped transitions going
                if(path.data("animOld")){
                    var oldTransitions = path.data("animOld");
                    var newTransitions = [];
                    for(i=0; i<oldTransitions.length; i++){
                        var it = oldTransitions[i].slice(0, oldTransitions[i].indexOf(" "));
                        for(z=0; z<transitionArr.length; z++){
                            var zt = transitionArr[z].slice(0, transitionArr[z].indexOf(" "));
                            if(it == zt){
                                break;
                            }else if(z == transitionArr.length-1){
                                newTransitions.push(oldTransitions[i]);
                            }
                        }
                    }
                    transitionArr = transitionArr.concat(newTransitions);
                }
                path.data("animOld", transitionArr);
                // transition
                if(transitionArr.length > 0){path.css(transitionCss, transitionArr.join(", "));}
            }else if(!options.skipPartialSupport && $.anima.partialSupport && !(type == "anima3d")){
                // translate
                if(isset(properties.x)){
                    transformArr.push("translateX("+properties.x+"px)");
                }
                if(isset(properties.y)){
                    transformArr.push("translateY("+properties.y+"px)");
                }
                // transforms 2d
                for(i=0; i<transformProps2.length; i++){
                    if(isset(properties[transformProps2[i]])){
                        transformArr.push(transformProps2[i]+"("+properties[transformProps2[i]]+")");
                    }
                }
                // transforms apply
                if(transformArr.length > 0){
                    path.animate(
                        {transform:transformArr.join(", ")},
                        {queue:false, duration:duration, specialEasing:
                            {transform:easingA}
                        }
                    );
                }
                // other properties
                for(var prop in properties){
                    if($.inArray(prop, transformProps) == -1){
                        var obj0 = {};
                        obj0[prop] = properties[prop];
                        var obj1 = {};
                        obj1[prop] = easingA;
                        path.animate(
                            obj0,
                            {queue:false, duration:duration, specialEasing:obj1}
                        );
                    }
                }
            }
        }else if(!options.skipNoSupport && !(type == "anima3d")){
            // translate
            if(isset(properties.x)){
                path.css("marginLeft", properties.x);
            }
            if(isset(properties.y)){
                path.css("marginTop", properties.x);
            }
            // other properties
            for(var prop in properties){
                if($.inArray(prop, transformProps) == -1){
                    path.css(prop, properties[prop]);
                }
            }
            // instant complete
            duration = 0;
        }
    };
    $.fn.delayAnima2d = function(time){
        return $(this).each(function(){
            if(!$.anima.noSupport){
                $(this).delay(time, "anima2d");
            }
        });
    };
    $.fn.delayAnima3d = function(time){
        return $(this).each(function(){
            if(!$.anima.noSupport){
                $(this).delay(time, "anima3d");
            }
        });
    };
    $.fn.delayAnima = function(time, type){
        return $(this).each(function(){
            if(!$.anima.noSupport){
                var path = $(this);
                if(!isset(type)){
                    path.delay(time, "anima");
                    path.delay(time, "anima2d");
                    path.delay(time, "anima3d");
                }else{
                    path.delay(time, type);
                }
            }
        });
    };
    $.fn.clearAnima2d = function(){
        return $(this).each(function(){
            if(!$.anima.noSupport){
                $(this).clearQueue("anima2d");
            }
        });
    };
    $.fn.clearAnima3d = function(){
        return $(this).each(function(){
            if(!$.anima.noSupport){
                $(this).clearQueue("anima3d");
            }
        });
    };
    $.fn.clearAnima = function(type){
        return $(this).each(function(){
            if(!$.anima.noSupport){
                var path = $(this);
                if(!isset(type)){
                    path.clearQueue("anima");
                    path.clearQueue("anima2d");
                    path.clearQueue("anima3d");
                }else{
                    path.clearQueue(type);
                }
            }
        });
    };
    $.fn.stopAnima2d = function(clearQueue, jumpToEnd){
        return $(this).each(function(){
            if(!$.anima.noSupport){
                $(this).stopAnima("anima2d", clearQueue, jumpToEnd);
            }
        });
    };
    $.fn.stopAnima3d = function(){
        return $(this).each(function(clearQueue, jumpToEnd){
            if(!$.anima.noSupport){
                $(this).stopAnima("anima3d", clearQueue, jumpToEnd);
            }
        });
    };
    $.fn.stopAnima = function(type, clearQueue, jumpToEnd){
        // defaults
        if(!isset(clearQueue)){clearQueue = false;}
        if(!isset(jumpToEnd)){jumpToEnd = false;}
        if(typeof type !== "string"){
            jumpToEnd = clearQueue;
            clearQueue = type;
            type = undefined;
        }
        //
        return $(this).each(function(){
            if(!$.anima.noSupport){
                var path = $(this);
                // clear animations
                if(clearQueue){
                    path.clearAnima(type);
                }
                if(!$.anima.partialSupport){
                    path.data("animOld", "");
                    // if jumpToEnd isn't set the animation keep going
                    if(jumpToEnd){
                        // jump to end instantly
                        path.css(transitionCss, "none");
                    }else{
                        // set appliedCss to current value
                        var appliedCss = $.anima[path.data("uniquePrefix")];
                        if(appliedCss){
                            for(var prop in appliedCss){
                                path.css(prop, path.css(prop));
                            }
                        }
                        // and apply instant transition
                        path.css(transitionCss, "all 0s");
                    }
                    // reset the appliedCss
                    $.anima[path.data("uniquePrefix")] = {};
                    // clear completes
                    path.stop(false, jumpToEnd);
                }else{
                    path.stop(false, jumpToEnd);
                }
            }
        });
    };

})(jQuery);
