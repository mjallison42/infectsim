(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.lH(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.fR(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={fz:function fz(){},
iV:function(a,b,c){if(b.i("t<0>").b(a))return new H.cm(a,b.i("@<0>").B(c).i("cm<1,2>"))
return new H.aY(a,b.i("@<0>").B(c).i("aY<1,2>"))},
cd:function(a,b,c,d){P.ap(b,"start")
if(c!=null){P.ap(c,"end")
if(b>c)H.a9(P.ad(b,0,c,"start",null))}return new H.cc(a,b,c,d.i("cc<0>"))},
hA:function(a,b,c){var t="count"
if(u.X.b(a)){P.bc(b,t,u.S)
P.ap(b,t)
return new H.bk(a,b,c.i("bk<0>"))}P.bc(b,t,u.S)
P.ap(b,t)
return new H.ay(a,b,c.i("ay<0>"))},
hn:function(){return new P.ar("No element")},
jb:function(){return new P.ar("Too many elements")},
ja:function(){return new P.ar("Too few elements")},
aN:function aN(){},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
aY:function aY(a,b){this.a=a
this.$ti=b},
cm:function cm(a,b){this.a=a
this.$ti=b},
ch:function ch(){},
bR:function bR(a,b){this.a=a
this.$ti=b},
t:function t(){},
R:function R(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
c6:function c6(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c){this.a=a
this.b=b
this.$ti=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(a,b,c){this.a=a
this.b=b
this.$ti=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
ca:function ca(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(a){this.$ti=a},
bW:function bW(a){this.$ti=a},
cH:function cH(){},
ir:function(a){var t,s=H.iq(a)
if(typeof s=="string")return s
t="minified:"+a
return t},
lw:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.aU.b(a)},
b:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bb(a)
if(typeof t!="string")throw H.c(H.bH(a))
return t},
br:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
jj:function(a,b){var t,s,r,q,p,o=null,n=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(n==null)return o
if(3>=n.length)return H.d(n,3)
t=H.v(n[3])
if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",o))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=n[1]
for(q=r.length,p=0;p<q;++p)if((C.c.am(r,p)|32)>s)return o}return parseInt(a,b)},
eB:function(a){var t=H.ji(a)
return t},
ji:function(a){var t,s,r
if(a instanceof P.C)return H.af(H.ah(a),null)
if(J.aT(a)===C.a2||u.ak.b(a)){t=C.B(a)
if(H.hv(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.hv(r))return r}}return H.af(H.ah(a),null)},
hv:function(a){var t=a!=="Object"&&a!==""
return t},
fC:function(a){var t
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.c4(t,10))>>>0,56320|t&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
i:function(a){throw H.c(H.bH(a))},
d:function(a,b){if(a==null)J.a4(a)
throw H.c(H.ba(a,b))},
ba:function(a,b){var t,s,r="index"
if(!H.fc(b))return new P.ab(!0,b,r,null)
t=H.I(J.a4(a))
if(!(b<0)){if(typeof t!=="number")return H.i(t)
s=b>=t}else s=!0
if(s)return P.bm(b,a,r,null,t)
return P.eC(b,r)},
bH:function(a){return new P.ab(!0,a,null,null)},
fQ:function(a){if(typeof a!="number")throw H.c(H.bH(a))
return a},
c:function(a){var t
if(a==null)a=new P.d1()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ip})
t.name=""}else t.toString=H.ip
return t},
ip:function(){return J.bb(this.dartException)},
a9:function(a){throw H.c(a)},
N:function(a){throw H.c(P.b0(a))},
az:function(a){var t,s,r,q,p,o
a=H.il(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.l([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.eG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
eH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
hC:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
hu:function(a,b){return new H.d0(a,b==null?null:b.method)},
fA:function(a,b){var t=b==null,s=t?null:b.method
return new H.cZ(a,s,t?null:b.receiver)},
aa:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.fm(a)
if(a==null)return f
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.c4(s,16)&8191)===10)switch(r){case 438:return e.$1(H.fA(H.b(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.hu(H.b(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.iv()
p=$.iw()
o=$.ix()
n=$.iy()
m=$.iB()
l=$.iC()
k=$.iA()
$.iz()
j=$.iE()
i=$.iD()
h=q.U(t)
if(h!=null)return e.$1(H.fA(H.v(t),h))
else{h=p.U(t)
if(h!=null){h.method="call"
return e.$1(H.fA(H.v(t),h))}else{h=o.U(t)
if(h==null){h=n.U(t)
if(h==null){h=m.U(t)
if(h==null){h=l.U(t)
if(h==null){h=k.U(t)
if(h==null){h=n.U(t)
if(h==null){h=j.U(t)
if(h==null){h=i.U(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return e.$1(H.hu(H.v(t),h))}}return e.$1(new H.dh(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.cb()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.ab(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.cb()
return a},
at:function(a){var t
if(a==null)return new H.cz(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cz(a)},
lh:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.A(0,a[t],a[s])}return b},
lv:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.I(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(new P.eP("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lv)
a.$identity=t
return t},
j_:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.dc().constructor.prototype):Object.create(new H.be(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.av
if(typeof s!=="number")return s.p()
$.av=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.ha(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.iW(d,e,f)
i.$S=q
i[j]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ha(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return t},
iW:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ie,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
t=c?H.iS:H.iR
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.c("Error in functionType of tearoff")},
iX:function(a,b,c,d){var t=H.h8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ha:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.iZ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.iX(s,!q,t,b)
if(s===0){q=$.av
if(typeof q!=="number")return q.p()
$.av=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.bP
return new Function(q+H.b(p==null?$.bP=H.dZ("self"):p)+";return "+o+"."+H.b(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.av
if(typeof q!=="number")return q.p()
$.av=q+1
n+=q
q="return function("+n+"){return this."
p=$.bP
return new Function(q+H.b(p==null?$.bP=H.dZ("self"):p)+"."+H.b(t)+"("+n+");}")()},
iY:function(a,b,c,d){var t=H.h8,s=H.iT
switch(b?-1:a){case 0:throw H.c(H.jn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
iZ:function(a,b){var t,s,r,q,p,o,n,m=$.bP
if(m==null)m=$.bP=H.dZ("self")
t=$.h7
if(t==null)t=$.h7=H.dZ("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.iY(r,!p,s,b)
if(r===1){m="return function(){return this."+H.b(m)+"."+H.b(s)+"(this."+H.b(t)+");"
t=$.av
if(typeof t!=="number")return t.p()
$.av=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.b(m)+"."+H.b(s)+"(this."+H.b(t)+", "+n+");"
t=$.av
if(typeof t!=="number")return t.p()
$.av=t+1
return new Function(m+t+"}")()},
fR:function(a,b,c,d,e,f,g){return H.j_(a,b,c,d,!!e,!!f,g)},
iR:function(a,b){return H.dL(v.typeUniverse,H.ah(a.a),b)},
iS:function(a,b){return H.dL(v.typeUniverse,H.ah(a.c),b)},
h8:function(a){return a.a},
iT:function(a){return a.c},
dZ:function(a){var t,s,r,q=new H.be("self","target","receiver","name"),p=J.fy(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
ag:function(a){if(a==null)H.kJ("boolean expression must not be null")
return a},
kJ:function(a){throw H.c(new H.dl(a))},
lH:function(a){throw H.c(new P.cR(a))},
jn:function(a){return new H.d7(a)},
ib:function(a){return v.getIsolateTag(a)},
l:function(a,b){a[v.arrayRti]=b
return a},
ic:function(a){if(a==null)return null
return a.$ti},
mh:function(a,b,c){return H.io(a["$a"+H.b(c)],H.ic(b))},
io:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
mf:function(a,b,c){return a.apply(b,H.io(J.aT(b)["$a"+H.b(c)],H.ic(b)))},
mg:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lz:function(a){var t,s,r,q,p=H.v($.id.$1(a)),o=$.fe[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.fi[p]
if(t!=null)return t
s=v.interceptorsByTag[p]
if(s==null){p=H.v($.i2.$2(a,p))
if(p!=null){o=$.fe[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.fi[p]
if(t!=null)return t
s=v.interceptorsByTag[p]}}if(s==null)return null
t=s.prototype
r=p[0]
if(r==="!"){o=H.fk(t)
$.fe[p]=o
Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(r==="~"){$.fi[p]=t
return t}if(r==="-"){q=H.fk(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}if(r==="+")return H.ij(a,t)
if(r==="*")throw H.c(P.fG(p))
if(v.leafTags[p]===true){q=H.fk(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}else return H.ij(a,t)},
ij:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.fX(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
fk:function(a){return J.fX(a,!1,null,!!a.$ibo)},
lA:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.fk(t)
else return J.fX(t,c,null,null)},
lr:function(){if(!0===$.fU)return
$.fU=!0
H.ls()},
ls:function(){var t,s,r,q,p,o,n,m
$.fe=Object.create(null)
$.fi=Object.create(null)
H.lq()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ik.$1(p)
if(o!=null){n=H.lA(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
lq:function(){var t,s,r,q,p,o,n=C.T()
n=H.bG(C.U,H.bG(C.V,H.bG(C.C,H.bG(C.C,H.bG(C.W,H.bG(C.X,H.bG(C.Y(C.B),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.id=new H.ff(q)
$.i2=new H.fg(p)
$.ik=new H.fh(o)},
bG:function(a,b){return a(b)||b},
lE:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
lg:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
il:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lF:function(a,b,c){var t=H.lG(a,b,c)
return t},
lG:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.il(b),'g'),H.lg(c))},
eG:function eG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d0:function d0(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a){this.a=a},
fm:function fm(a){this.a=a},
cz:function cz(a){this.a=a
this.b=null},
b_:function b_(){},
df:function df(){},
dc:function dc(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a){this.a=a},
dl:function dl(a){this.a=a},
b4:function b4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eq:function eq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c1:function c1(a,b){this.a=a
this.$ti=b},
c2:function c2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
jm:function(a,b){var t=b.c
return t==null?b.c=H.fL(a,b.z,!0):t},
hx:function(a,b){var t=b.c
return t==null?b.c=H.cE(a,"bY",[b.z]):t},
hy:function(a){var t=a.y
if(t===6||t===7||t===8)return H.hy(a.z)
return t===11||t===12},
jl:function(a){return a.cy},
dR:function(a){return H.fM(v.typeUniverse,a,!1)},
aS:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.aS(a,t,c,a0)
if(s===t)return b
return H.hO(a,s,!0)
case 7:t=b.z
s=H.aS(a,t,c,a0)
if(s===t)return b
return H.fL(a,s,!0)
case 8:t=b.z
s=H.aS(a,t,c,a0)
if(s===t)return b
return H.hN(a,s,!0)
case 9:r=b.Q
q=H.cL(a,r,c,a0)
if(q===r)return b
return H.cE(a,b.z,q)
case 10:p=b.z
o=H.aS(a,p,c,a0)
n=b.Q
m=H.cL(a,n,c,a0)
if(o===p&&m===n)return b
return H.fJ(a,o,m)
case 11:l=b.z
k=H.aS(a,l,c,a0)
j=b.Q
i=H.ke(a,j,c,a0)
if(k===l&&i===j)return b
return H.hM(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.cL(a,h,c,a0)
p=b.z
o=H.aS(a,p,c,a0)
if(g===h&&o===p)return b
return H.fK(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.c(P.dX("Attempted to substitute unexpected RTI kind "+d))}},
cL:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.aS(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
kf:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.aS(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
ke:function(a,b,c,d){var t,s=b.a,r=H.cL(a,s,c,d),q=b.b,p=H.cL(a,q,c,d),o=b.c,n=H.kf(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.du()
t.a=r
t.b=p
t.c=n
return t},
kO:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.ie(t)
return a.$S()}return null},
ig:function(a,b){var t
if(H.hy(b))if(a instanceof H.b_){t=H.kO(a)
if(t!=null)return t}return H.ah(a)},
ah:function(a){var t
if(a instanceof P.C){t=a.$ti
return t!=null?t:H.fN(a)}if(Array.isArray(a))return H.P(a)
return H.fN(J.aT(a))},
P:function(a){var t=a[v.arrayRti],s=u.cO
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
n:function(a){var t=a.$ti
return t!=null?t:H.fN(a)},
fN:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.k0(a,t)},
k0:function(a,b){var t=a instanceof H.b_?a.__proto__.__proto__.constructor:b,s=H.jT(v.typeUniverse,t.name)
b.$ccache=s
return s},
ie:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.fM(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
k_:function(a){var t=this,s=H.jZ,r=u.K
if(t===r){s=H.k2
t.a=H.jU}else if(H.aU(t)||t===r){s=H.k5
t.a=H.jV}else if(t===u.S)s=H.fc
else if(t===u.gR)s=H.hW
else if(t===u.di)s=H.hW
else if(t===u.N)s=H.k3
else if(t===u.y)s=H.hU
else if(t.y===9){r=t.z
if(t.Q.every(H.lx)){t.r="$i"+r
s=H.k4}}t.b=s
return t.b(a)},
jZ:function(a){var t=this
return H.M(v.typeUniverse,H.ig(a,t),null,t,null)},
k4:function(a){var t=this,s=t.r
if(a instanceof P.C)return!!a[s]
return!!J.aT(a)[s]},
jY:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.c(H.jJ(H.hE(a,H.ig(a,t),H.af(t,null))))},
hE:function(a,b,c){var t=P.cU(a),s=H.af(b==null?H.ah(a):b,null)
return t+": type '"+H.b(s)+"' is not a subtype of type '"+H.b(c)+"'"},
jJ:function(a){return new H.cD("TypeError: "+a)},
dJ:function(a,b){return new H.cD("TypeError: "+H.hE(a,null,b))},
k2:function(a){return!0},
jU:function(a){return a},
k5:function(a){return!0},
jV:function(a){return a},
hU:function(a){return!0===a||!1===a},
dP:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.c(H.dJ(a,"bool"))},
x:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.dJ(a,"double"))},
fc:function(a){return typeof a=="number"&&Math.floor(a)===a},
I:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.dJ(a,"int"))},
hW:function(a){return typeof a=="number"},
y:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.dJ(a,"num"))},
k3:function(a){return typeof a=="string"},
v:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.dJ(a,"String"))},
kb:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.p(s,H.af(a[r],b))
return t},
hT:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
if(a3!=null){t=a3.length
if(a2==null){a2=H.l([],u.s)
s=null}else s=a2.length
r=a2.length
for(q=t;q>0;--q)C.a.l(a2,"T"+(r+q))
for(p=u.K,o="<",n="",q=0;q<t;++q,n=a0){o+=n
m=a2.length
l=m-1-q
if(l<0)return H.d(a2,l)
o=C.c.p(o,a2[l])
k=a3[q]
if(!(H.aU(k)||k===p))m=!(k===p)
else m=!1
if(m)o+=C.c.p(" extends ",H.af(k,a2))}o+=">"}else{o=""
s=null}p=a1.z
j=a1.Q
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=H.af(p,a2)
for(b="",a="",q=0;q<h;++q,a=a0)b+=C.c.p(a,H.af(i[q],a2))
if(f>0){b+=a+"["
for(a="",q=0;q<f;++q,a=a0)b+=C.c.p(a,H.af(g[q],a2))
b+="]"}if(d>0){b+=a+"{"
for(a="",q=0;q<d;q+=2,a=a0)b+=C.c.p(a,H.af(e[q+1],a2))+" "+e[q]
b+="}"}if(s!=null)a2.length=s
return o+"("+b+") => "+H.b(c)},
af:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.af(a.z,b)
return t}if(m===7){s=a.z
t=H.af(s,b)
r=s.y
return J.bJ(r===11||r===12?C.c.p("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.b(H.af(a.z,b))+">"
if(m===9){q=H.kg(a.z)
p=a.Q
return p.length!==0?q+("<"+H.kb(p,b)+">"):q}if(m===11)return H.hT(a,b,null)
if(m===12)return H.hT(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.d(b,o)
return b[o]}return"?"},
kg:function(a){var t,s=H.iq(a)
if(s!=null)return s
t="minified:"+a
return t},
hQ:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
jT:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.fM(a,b,!1)
else if(typeof n=="number"){t=n
s=H.cF(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.cE(a,b,r)
o[b]=p
return p}else return n},
jR:function(a,b){return H.hR(a.tR,b)},
jQ:function(a,b){return H.hR(a.eT,b)},
fM:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.hP(a,null,b,c)
s.set(b,t)
return t},
dL:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.hP(a,b,c,!0)
r.set(c,s)
return s},
jS:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.fJ(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
hP:function(a,b,c,d){var t=H.jF(H.jB(a,b,c,d))
if(t!=null)return t
throw H.c(P.fG('_Universe._parseRecipe("'+H.b(c)+'")'))},
aQ:function(a,b){b.a=H.jY
b.b=H.k_
return b},
cF:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.ae(null,null)
t.y=b
t.cy=c
s=H.aQ(a,t)
a.eC.set(c,s)
return s},
hO:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.jO(a,b,s,c)
a.eC.set(s,t)
return t},
jO:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.aU(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.ae(null,null)
s.y=6
s.z=b
s.cy=c
return H.aQ(a,s)},
fL:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.jN(a,b,s,c)
a.eC.set(s,t)
return t},
jN:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.aU(b))if(!(b===u.P))if(t!==7)s=t===8&&H.fj(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.fj(r.z))return r
else return H.jm(a,b)}}p=new H.ae(null,null)
p.y=7
p.z=b
p.cy=c
return H.aQ(a,p)},
hN:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.jL(a,b,s,c)
a.eC.set(s,t)
return t},
jL:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.aU(b)||b===u.K||b===u.K)return b
else if(t===1)return H.cE(a,"bY",[b])
else if(b===u.P)return u.aQ}s=new H.ae(null,null)
s.y=8
s.z=b
s.cy=c
return H.aQ(a,s)},
jP:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.ae(null,null)
t.y=13
t.z=b
t.cy=r
s=H.aQ(a,t)
a.eC.set(r,s)
return s},
dK:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
jK:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
cE:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.dK(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.ae(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.aQ(a,s)
a.eC.set(q,r)
return r},
fJ:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.dK(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.ae(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.aQ(a,p)
a.eC.set(r,o)
return o},
hM:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.dK(o)
if(l>0)i+=(n>0?",":"")+"["+H.dK(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.jK(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.ae(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.aQ(a,r)
a.eC.set(t,q)
return q},
fK:function(a,b,c,d){var t,s=b.cy+"<"+H.dK(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.jM(a,b,c,s,d)
a.eC.set(s,t)
return t},
jM:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.aS(a,b,s,0)
n=H.cL(a,c,s,0)
return H.fK(a,o,n,c!==n)}}m=new H.ae(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.aQ(a,m)},
jB:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jF:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.jC(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.hJ(a,s,h,g,!1)
else if(r===46)s=H.hJ(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.aP(a.u,a.e,g.pop()))
break
case 94:g.push(H.jP(a.u,g.pop()))
break
case 35:g.push(H.cF(a.u,5,"#"))
break
case 64:g.push(H.cF(a.u,2,"@"))
break
case 126:g.push(H.cF(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.fI(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.cE(q,o,p))
else{n=H.aP(q,a.e,o)
switch(n.y){case 11:g.push(H.fK(q,n,p,a.n))
break
default:g.push(H.fJ(q,n,p))
break}}break
case 38:H.jD(a,g)
break
case 42:m=a.u
g.push(H.hO(m,H.aP(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.fL(m,H.aP(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.hN(m,H.aP(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.du()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.fI(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.hM(q,H.aP(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.fI(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.jG(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.aP(a.u,a.e,i)},
jC:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
hJ:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.hQ(t,p.z)[q]
if(o==null)H.a9('No "'+q+'" in "'+H.jl(p)+'"')
d.push(H.dL(t,p,o))}else d.push(q)
return n},
jD:function(a,b){var t=b.pop()
if(0===t){b.push(H.cF(a.u,1,"0&"))
return}if(1===t){b.push(H.cF(a.u,4,"1&"))
return}throw H.c(P.dX("Unexpected extended operation "+H.b(t)))},
aP:function(a,b,c){if(typeof c=="string")return H.cE(a,c,a.sEA)
else if(typeof c=="number")return H.jE(a,b,c)
else return c},
fI:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.aP(a,b,c[t])},
jG:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.aP(a,b,c[t])},
jE:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.c(P.dX("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.c(P.dX("Bad index "+c+" for "+b.j(0)))},
M:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(H.aU(d)||d===u.K)return!0
t=b.y
if(t===4)return!0
if(H.aU(b))return!1
if(b===u.P)return!0
s=t===13
if(s)if(H.M(a,c[b.z],c,d,e))return!0
r=d.y
if(t===6)return H.M(a,b.z,c,d,e)
if(r===6){q=d.z
return H.M(a,b,c,q,e)}if(t===8){if(!H.M(a,b.z,c,d,e))return!1
return H.M(a,H.hx(a,b),c,d,e)}if(t===7){q=H.M(a,b.z,c,d,e)
return q}if(r===8){if(H.M(a,b,c,d.z,e))return!0
return H.M(a,b,c,H.hx(a,d),e)}if(r===7){q=H.M(a,b,c,d.z,e)
return q}if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(q=u.av,m=0;m<n;++m){l=p[m]
k=o[m]
q.a(l)
q.a(k)
if(!H.M(a,l,c,k,e)||!H.M(a,k,e,l,c))return!1}return H.hV(a,b.z,c,d.z,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return H.hV(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.k1(a,b,c,d,e)}return!1},
hV:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(!H.M(a0,a1.z,a2,a3.z,a4))return!1
t=a1.Q
s=a3.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.M(a0,q[i],a4,h,a2))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.M(a0,q[p+i],a4,h,a2))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.M(a0,l[i],a4,h,a2))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(i=0,c=0;c<d;c+=2){b=f[c]
do{if(i>=e)return!1
a=g[i]
i+=2}while(a<b)
if(b<a)return!1
h=g[i-1]
if(!H.M(a0,f[c+1],a4,h,a2))return!1}return!0},
k1:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.M(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.hQ(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.M(a,H.dL(a,b,m[q]),c,s[q],e))return!1
return!0},
fj:function(a){var t,s=a.y
if(!(a===u.P))if(!H.aU(a))if(s!==7)if(!(s===6&&H.fj(a.z)))t=s===8&&H.fj(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
lx:function(a){return H.aU(a)||a===u.K},
aU:function(a){var t,s=a.y,r=s
if(r!==2)if(r!==3)if(r!==4)if(r!==5){t=u.K
if(!(a===t))s=s===7&&a.z===t
else s=!0}else s=!0
else s=!0
else s=!0
else s=!0
return s},
hR:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
ae:function ae(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
du:function du(){this.c=this.b=this.a=null},
dt:function dt(){},
cD:function cD(a){this.a=a},
iq:function(a){return v.mangledGlobalNames[a]},
lD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
fX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dS:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.fU==null){H.lr()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.c(P.fG("Return interceptor for "+H.b(t(a,p))))}r=a.constructor
q=r==null?null:r[$.fZ()]
if(q!=null)return q
q=H.lz(a)
if(q!=null)return q
if(typeof a=="function")return C.a3
t=Object.getPrototypeOf(a)
if(t==null)return C.I
if(t===Object.prototype)return C.I
if(typeof r=="function"){Object.defineProperty(r,$.fZ(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
jc:function(a,b){if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.jd(new Array(a),b)},
jd:function(a,b){return J.fy(H.l(a,b.i("w<0>")))},
fy:function(a){a.fixed$length=Array
return a},
aT:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bn.prototype
return J.c0.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.cY.prototype
if(typeof a=="boolean")return J.c_.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.C)return a
return J.dS(a)},
ll:function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.C)return a
return J.dS(a)},
K:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.C)return a
return J.dS(a)},
cM:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.C)return a
return J.dS(a)},
ia:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bn.prototype
return J.aw.prototype}if(a==null)return a
if(!(a instanceof P.C))return J.aA.prototype
return a},
as:function(a){if(typeof a=="number")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aA.prototype
return a},
lm:function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aA.prototype
return a},
ln:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aA.prototype
return a},
aF:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.C)return a
return J.dS(a)},
bJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ll(a).p(a,b)},
a2:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aT(a).G(a,b)},
bK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.as(a).W(a,b)},
fp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lm(a).q(a,b)},
fq:function(a,b){return J.as(a).a7(a,b)},
f:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lw(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.K(a).h(a,b)},
iI:function(a,b,c,d){return J.aF(a).d6(a,b,c,d)},
iJ:function(a,b,c,d){return J.aF(a).dZ(a,b,c,d)},
fr:function(a,b,c){return J.K(a).eG(a,b,c)},
cN:function(a,b){return J.cM(a).C(a,b)},
iK:function(a){return J.aF(a).ger(a)},
h1:function(a){return J.aF(a).gcg(a)},
iL:function(a){return J.cM(a).gaF(a)},
a3:function(a){return J.aT(a).gv(a)},
h2:function(a){return J.as(a).gat(a)},
aV:function(a){return J.cM(a).gw(a)},
a4:function(a){return J.K(a).gk(a)},
iM:function(a){return J.aF(a).gcu(a)},
h3:function(a){return J.cM(a).bn(a)},
dU:function(a){return J.as(a).E(a)},
h4:function(a,b){return J.cM(a).S(a,b)},
iN:function(a){return J.as(a).f9(a)},
h5:function(a){return J.as(a).a5(a)},
iO:function(a){return J.cM(a).a6(a)},
iP:function(a){return J.ln(a).fa(a)},
bb:function(a){return J.aT(a).j(a)},
H:function H(){},
c_:function c_(){},
cY:function cY(){},
aK:function aK(){},
d4:function d4(){},
aA:function aA(){},
ao:function ao(){},
w:function w(a){this.$ti=a},
en:function en(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aw:function aw(){},
bn:function bn(){},
c0:function c0(){},
ax:function ax(){}},P={
js:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.kK()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bI(new P.eL(r),1)).observe(t,{childList:true})
return new P.eK(r,t,s)}else if(self.setImmediate!=null)return P.kL()
return P.kM()},
jt:function(a){self.scheduleImmediate(H.bI(new P.eM(u.M.a(a)),0))},
ju:function(a){self.setImmediate(H.bI(new P.eN(u.M.a(a)),0))},
jv:function(a){P.fF(C.a0,u.M.a(a))},
fF:function(a,b){var t=C.b.u(a.a,1000)
return P.jI(t<0?0:t,b)},
jI:function(a,b){var t=new P.f9()
t.d4(a,b)
return t},
j4:function(a,b,c){var t=new P.T($.D,c.i("T<0>"))
P.jp(a,new P.ej(b,t))
return t},
jx:function(a,b){var t,s,r
b.a=1
try{a.cF(new P.eR(b),new P.eS(b),u.P)}catch(r){t=H.aa(r)
s=H.at(r)
P.im(new P.eT(b,t,s))}},
hF:function(a,b){var t,s,r
for(t=u._;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.b5()
b.a=a.a
b.c=a.c
P.cq(b,r)}else{r=u.x.a(b.c)
b.a=2
b.c=a
a.c0(r)}},
cq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d={},c=d.a=a
for(t=u.n,s=u.x,r=u.c;!0;){q={}
p=c.a===8
if(b==null){if(p){o=t.a(c.c)
P.cK(e,e,c.b,o.a,o.b)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cq(d.a,b)}c=d.a
m=c.c
q.a=p
q.b=m
l=!p
if(l){k=b.c
k=(k&1)!==0||(k&15)===8}else k=!0
if(k){k=b.b
j=k.b
if(p){i=c.b===j
i=!(i||i)}else i=!1
if(i){t.a(m)
P.cK(e,e,c.b,m.a,m.b)
return}h=$.D
if(h!==j)$.D=j
else h=e
c=b.c
if((c&15)===8)new P.eX(d,q,b,p).$0()
else if(l){if((c&1)!==0)new P.eW(q,b,m).$0()}else if((c&2)!==0)new P.eV(d,q,b).$0()
if(h!=null)$.D=h
c=q.b
if(r.b(c)){if(c.a>=4){g=s.a(k.c)
k.c=null
b=k.aB(g)
k.a=c.a
k.c=c.c
d.a=c
continue}else P.hF(c,k)
return}}f=b.b
g=s.a(f.c)
f.c=null
b=f.aB(g)
c=q.a
l=q.b
if(!c){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}d.a=f
c=f}},
k9:function(a,b){var t
if(u.p.b(a))return b.cw(a,u.z,u.K,u.l)
t=u.v
if(t.b(a))return t.a(a)
throw H.c(P.fs(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k7:function(){var t,s
for(;t=$.bF,t!=null;){$.cJ=null
s=t.b
$.bF=s
if(s==null)$.cI=null
t.a.$0()}},
kd:function(){$.fO=!0
try{P.k7()}finally{$.cJ=null
$.fO=!1
if($.bF!=null)$.h_().$1(P.i6())}},
i0:function(a){var t=new P.dm(a)
if($.bF==null){$.bF=$.cI=t
if(!$.fO)$.h_().$1(P.i6())}else $.cI=$.cI.b=t},
kc:function(a){var t,s,r=$.bF
if(r==null){P.i0(a)
$.cJ=$.cI
return}t=new P.dm(a)
s=$.cJ
if(s==null){t.b=r
$.bF=$.cJ=t}else{t.b=s.b
$.cJ=s.b=t
if(t.b==null)$.cI=t}},
im:function(a){var t=null,s=$.D
if(C.f===s){P.dQ(t,t,C.f,a)
return}P.dQ(t,t,s,u.M.a(s.ba(a)))},
fE:function(a,b,c){return new P.cC(null,a,c.i("cC<0>"))},
i_:function(a){var t,s,r
if(a==null)return
try{a.$0()}catch(r){t=H.aa(r)
s=H.at(r)
P.cK(null,null,$.D,t,u.l.a(s))}},
hX:function(a,b){P.cK(null,null,$.D,a,b)},
k8:function(){},
jp:function(a,b){var t=$.D
if(t===C.f)return P.fF(a,u.M.a(b))
return P.fF(a,u.M.a(t.ba(b)))},
dY:function(a,b){var t=b==null?P.h6(a):b
P.bc(a,"error",u.K)
return new P.bO(a,t)},
h6:function(a){var t
if(u.T.b(a)){t=a.gav()
if(t!=null)return t}return C.a_},
cK:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.ab(!1,null,"error","Must not be null")
t.b=P.jo()}P.kc(new P.fd(t))},
hY:function(a,b,c,d,e){var t,s=$.D
if(s===c)return d.$0()
$.D=c
t=s
try{s=d.$0()
return s}finally{$.D=t}},
hZ:function(a,b,c,d,e,f,g){var t,s=$.D
if(s===c)return d.$1(e)
$.D=c
t=s
try{s=d.$1(e)
return s}finally{$.D=t}},
ka:function(a,b,c,d,e,f,g,h,i){var t,s=$.D
if(s===c)return d.$2(e,f)
$.D=c
t=s
try{s=d.$2(e,f)
return s}finally{$.D=t}},
dQ:function(a,b,c,d){var t
u.M.a(d)
t=C.f!==c
if(t)d=!(!t||!1)?c.ba(d):c.es(d,u.o)
P.i0(d)},
eL:function eL(a){this.a=a},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
f9:function f9(){},
fa:function fa(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
this.$ti=b},
aD:function aD(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
b7:function b7(){},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
f7:function f7(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
T:function T(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a){this.a=a},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(a){this.a=a
this.b=null},
aL:function aL(){},
eE:function eE(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
a_:function a_(){},
bx:function bx(){},
cj:function cj(){},
aE:function aE(){},
bC:function bC(){},
dr:function dr(){},
ck:function ck(a,b){this.b=a
this.a=null
this.$ti=b},
cv:function cv(){},
f0:function f0(a,b){this.a=a
this.b=b},
cA:function cA(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
by:function by(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
bO:function bO(a,b){this.a=a
this.b=b},
dM:function dM(){},
fd:function fd(a){this.a=a},
dE:function dE(){},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
p:function(a,b,c){return b.i("@<0>").B(c).i("ho<1,2>").a(H.lh(a,new H.b4(b.i("@<0>").B(c).i("b4<1,2>"))))},
er:function(a,b){return new H.b4(a.i("@<0>").B(b).i("b4<1,2>"))},
es:function(a){return new P.cs(a.i("cs<0>"))},
fH:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
jA:function(a,b,c){var t=new P.b9(a,b,c.i("b9<0>"))
t.c=a.e
return t},
j9:function(a,b,c){var t,s
if(P.fP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.l([],u.s)
C.a.l($.a8,a)
try{P.k6(a,t)}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}s=P.hB(b,u.hf.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
fx:function(a,b,c){var t,s
if(P.fP(a))return b+"..."+c
t=new P.b6(b)
C.a.l($.a8,a)
try{s=t
s.a=P.hB(s.a,a,", ")}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
fP:function(a){var t,s
for(t=$.a8.length,s=0;s<t;++s)if(a===$.a8[s])return!0
return!1},
k6:function(a,b){var t,s,r,q,p,o,n,m=a.gw(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.n())return
t=H.b(m.gt())
C.a.l(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return H.d(b,-1)
s=b.pop()
if(0>=b.length)return H.d(b,-1)
r=b.pop()}else{q=m.gt();++k
if(!m.n()){if(k<=4){C.a.l(b,H.b(q))
return}s=H.b(q)
if(0>=b.length)return H.d(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gt();++k
for(;m.n();q=p,p=o){o=m.gt();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.d(b,-1)
l-=b.pop().length+2;--k}C.a.l(b,"...")
return}}r=H.b(q)
s=H.b(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.l(b,n)
C.a.l(b,r)
C.a.l(b,s)},
hp:function(a,b){var t,s,r=P.es(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.N)(a),++s)r.l(0,b.a(a[s]))
return r},
hs:function(a){var t,s={}
if(P.fP(a))return"{...}"
t=new P.b6("")
try{C.a.l($.a8,a)
t.a+="{"
s.a=!0
a.as(0,new P.et(s,t))
t.a+="}"}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
cs:function cs(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dz:function dz(a){this.a=a
this.b=null},
b9:function b9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bZ:function bZ(){},
c3:function c3(){},
q:function q(){},
c4:function c4(){},
et:function et(a,b){this.a=a
this.b=b},
Z:function Z(){},
cx:function cx(){},
ct:function ct(){},
fV:function(a,b){var t=H.jj(a,b)
if(t!=null)return t
throw H.c(P.aI(a,null))},
j3:function(a){if(a instanceof H.b_)return a.j(0)
return"Instance of '"+H.b(H.eB(a))+"'"},
hq:function(a,b,c,d){var t,s
if(c){if(a<0)H.a9(P.dW("Length must be a non-negative integer: "+a))
t=H.l(new Array(a),d.i("w<0>"))}else t=J.jc(a,d)
if(a!==0&&!0)for(s=0;s<t.length;++s)C.a.A(t,s,b)
return t},
hr:function(a,b,c){var t,s=H.l([],c.i("w<0>"))
for(t=a.gw(a);t.n();)C.a.l(s,c.a(t.gt()))
if(b)return s
return c.i("r<0>").a(J.fy(s))},
hB:function(a,b,c){var t=J.aV(b)
if(!t.n())return a
if(c.length===0){do a+=H.b(t.gt())
while(t.n())}else{a+=H.b(t.gt())
for(;t.n();)a=a+c+H.b(t.gt())}return a},
jo:function(){var t,s
if(H.ag($.iG()))return H.at(new Error())
try{throw H.c("")}catch(s){H.aa(s)
t=H.at(s)
return t}},
cU:function(a){if(typeof a=="number"||H.hU(a)||null==a)return J.bb(a)
if(typeof a=="string")return JSON.stringify(a)
return P.j3(a)},
dX:function(a){return new P.bN(a)},
dW:function(a){return new P.ab(!1,null,null,a)},
fs:function(a,b,c){return new P.ab(!0,a,b,c)},
iQ:function(a){return new P.ab(!1,null,a,"Must not be null")},
bc:function(a,b,c){if(a==null)throw H.c(P.iQ(b))
return a},
hw:function(a){var t=null
return new P.bs(t,t,!1,t,t,a)},
eC:function(a,b){return new P.bs(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
jk:function(a,b,c,d){if(a<b||a>c)throw H.c(P.ad(a,b,c,d,null))
return a},
d6:function(a,b,c){if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",null))
if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",null))
return b},
ap:function(a,b){if(typeof a!=="number")return a.ai()
if(a<0)throw H.c(P.ad(a,0,null,b,null))
return a},
bm:function(a,b,c,d,e){var t=H.I(e==null?J.a4(b):e)
return new P.cX(t,!0,a,c,"Index out of range")},
a0:function(a){return new P.di(a)},
fG:function(a){return new P.dg(a)},
db:function(a){return new P.ar(a)},
b0:function(a){return new P.cQ(a)},
aI:function(a,b){return new P.ei(a,b)},
F:function F(){},
Y:function Y(){},
ac:function ac(a){this.a=a},
ec:function ec(){},
ed:function ed(){},
B:function B(){},
bN:function bN(a){this.a=a},
d1:function d1(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cX:function cX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
di:function di(a){this.a=a},
dg:function dg(a){this.a=a},
ar:function ar(a){this.a=a},
cQ:function cQ(a){this.a=a},
d3:function d3(){},
cb:function cb(){},
cR:function cR(a){this.a=a},
eP:function eP(a){this.a=a},
ei:function ei(a,b){this.a=a
this.b=b},
em:function em(){},
an:function an(){},
a1:function a1(){},
m:function m(){},
E:function E(){},
r:function r(){},
aj:function aj(){},
G:function G(){},
z:function z(){},
C:function C(){},
a7:function a7(){},
dG:function dG(){},
o:function o(){},
b6:function b6(a){this.a=a},
hf:function(){var t=$.he
return t==null?$.he=J.fr(window.navigator.userAgent,"Opera",0):t},
j0:function(){var t,s=$.hb
if(s!=null)return s
t=$.hc
if(t==null?$.hc=J.fr(window.navigator.userAgent,"Firefox",0):t)s="-moz-"
else{t=$.hd
if(t==null)t=$.hd=!H.ag(P.hf())&&J.fr(window.navigator.userAgent,"Trident/",0)
if(t)s="-ms-"
else s=H.ag(P.hf())?"-o-":"-webkit-"}return $.hb=s},
cV:function cV(a,b){this.a=a
this.b=b},
eg:function eg(){},
eh:function eh(){},
fW:function(a){return Math.log(a)},
lC:function(a,b){H.fQ(b)
return Math.pow(a,b)},
jH:function(a){var t=new P.dC()
t.d2(a)
return t},
cr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dy:function dy(){},
dC:function dC(){this.b=this.a=0},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
dD:function dD(){},
aq:function aq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c7:function c7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bt:function bt(){},
h:function h(){}},W={
ft:function(){var t=document.createElement("canvas")
return t},
j1:function(a,b,c){var t=document.body,s=(t&&C.x).T(t,a,b,c)
s.toString
t=u.ac
t=new H.aB(new W.O(s),t.i("F(q.E)").a(new W.ee()),t.i("aB<q.E>"))
return u.h.a(t.gab(t))},
bU:function(a){var t,s,r="element tag unavailable"
try{t=J.aF(a)
if(typeof t.gcE(a)=="string")r=t.gcE(a)}catch(s){H.aa(s)}return r},
eZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hI:function(a,b,c,d){var t=W.eZ(W.eZ(W.eZ(W.eZ(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
bB:function(a,b,c,d,e){var t=W.i1(new W.eO(c),u.E),s=t!=null
if(s&&!0){u.U.a(t)
if(s)J.iI(a,b,t,d)}return new W.co(a,b,t,d,e.i("co<0>"))},
hG:function(a){var t=document.createElement("a"),s=new W.dF(t,window.location)
s=new W.b8(s)
s.d1(a)
return s},
jy:function(a,b,c,d){u.h.a(a)
H.v(b)
H.v(c)
u.L.a(d)
return!0},
jz:function(a,b,c,d){var t,s,r
u.h.a(a)
H.v(b)
H.v(c)
t=u.L.a(d).a
s=t.a
s.href=c
r=s.hostname
t=t.b
if(!(r==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
hL:function(){var t=u.N,s=P.hp(C.H,t),r=u.Q.a(new W.f8()),q=H.l(["TEMPLATE"],u.s)
t=new W.dI(s,P.es(t),P.es(t),P.es(t),null)
t.d3(null,new H.a6(C.H,r,u.dv),q,null)
return t},
hS:function(a){var t
if(a==null)return null
if("postMessage" in a){t=W.jw(a)
return t}else return u.aS.a(a)},
jw:function(a){if(a===window)return u.ci.a(a)
else return new W.dq()},
i1:function(a,b){var t=$.D
if(t===C.f)return a
return t.eu(a,b)},
k:function k(){},
bM:function bM(){},
cO:function cO(){},
bd:function bd(){},
aW:function aW(){},
aX:function aX(){},
aG:function aG(){},
am:function am(){},
bh:function bh(){},
e6:function e6(){},
b2:function b2(){},
eb:function eb(){},
bT:function bT(){},
ci:function ci(a,b){this.a=a
this.b=b},
u:function u(){},
ee:function ee(){},
e:function e(){},
A:function A(){},
cW:function cW(){},
aJ:function aJ(){},
bl:function bl(){},
d_:function d_(){},
S:function S(){},
O:function O(a){this.a=a},
j:function j(){},
c8:function c8(){},
d8:function d8(){},
ce:function ce(){},
dd:function dd(){},
de:function de(){},
bu:function bu(){},
ak:function ak(){},
bv:function bv(){},
bw:function bw(){},
cl:function cl(){},
cu:function cu(){},
dn:function dn(){},
ds:function ds(a){this.a=a},
fw:function fw(a,b){this.a=a
this.$ti=b},
cn:function cn(){},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
co:function co(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eO:function eO(a){this.a=a},
b8:function b8(a){this.a=a},
a5:function a5(){},
c9:function c9(a){this.a=a},
ew:function ew(a){this.a=a},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(){},
f4:function f4(){},
f5:function f5(){},
dI:function dI(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
f8:function f8(){},
dH:function dH(){},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dq:function dq(){},
W:function W(){},
dF:function dF(a,b){this.a=a
this.b=b},
cG:function cG(a){this.a=a
this.b=!1},
fb:function fb(a){this.a=a},
dp:function dp(){},
dw:function dw(){},
dx:function dx(){},
dA:function dA(){},
dB:function dB(){},
dN:function dN(){},
dO:function dO(){}},T={
hl:function(){var t=$.hk
return t},
hm:function(a,b,c){var t,s,r
if(a==null){if(T.hl()==null)$.hk="en_US"
return T.hm(T.hl(),b,c)}if(H.ag(b.$1(a)))return a
for(t=[T.j7(a),T.j8(a),"fallback"],s=0;s<3;++s){r=t[s]
if(H.ag(b.$1(r)))return r}return c.$1(a)},
j6:function(a){throw H.c(P.dW('Invalid locale "'+a+'"'))},
j8:function(a){if(a.length<2)return a
return C.c.a0(a,0,2).toLowerCase()},
j7:function(a){var t,s
if(a==="C")return"en_ISO"
if(a.length<5)return a
t=a[2]
if(t!=="-"&&t!=="_")return a
s=C.c.ak(a,3)
if(s.length<=3)s=s.toUpperCase()
return a[0]+a[1]+"_"+s},
jg:function(){var t,s=T.hm(null,T.lu(),T.lt()),r=new T.d2(s,new P.b6(""))
s=r.k1=$.h0().h(0,s)
t=C.c.am(s.e,0)
r.r2=t
r.rx=t-48
r.a=s.r
t=s.dx
r.k2=t
r.e8(new T.eA().$1(s))
return r},
jh:function(a){if(a==null)return!1
return $.h0().eH(a)},
d2:function d2(a,b){var _=this
_.a="-"
_.d=_.c=_.b=""
_.f=_.e=3
_.z=_.y=_.x=_.r=!1
_.ch=40
_.cx=1
_.cy=3
_.dx=_.db=0
_.fx=1
_.fy=0
_.go=null
_.id=a
_.k4=_.k3=_.k2=_.k1=null
_.r1=b
_.rx=_.r2=0},
eA:function eA(){},
f_:function f_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=!1
_.f=-1
_.y=_.x=_.r=0
_.z=-1},
f6:function f6(a){this.a=a},
cB:function cB(a){this.a=a
this.b=0
this.c=null},
da:function da(){},
cf:function cf(a){this.b=a},
d9:function d9(){}},B={
a:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new B.bq(i,c,f,k,p,n,h,e,m,g,j,b,d)},
bq:function bq(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.dx=m},
d5:function d5(){},
cT:function cT(){}},Y={
jW:function(a){return a},
jX:function(a){return H.b(a)},
aR:function aR(a,b){this.a=a
this.b=b},
bA:function bA(){},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(){},
e2:function e2(){},
e3:function e3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bE:function bE(){},
X:function X(){var _=this
_.r=_.e=_.d=_.c=_.b=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null},
bp:function bp(a,b,c){var _=this
_.ag=_.ar=_.co=_.bh=_.J=_.Z=_.R=_.af=_.a9=_.bg=_.bf=_.aE=_.a4=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=null
_.a=0
_.b=null
_.c=a
_.y=_.x=_.r=_.f=_.e=_.d=null
_.Q=_.z=-1
_.cx=_.ch=null
_.cy=b
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=null
_.k4=c},
ep:function ep(a){this.a=a},
eo:function eo(a){this.a=a}},G={
bj:function(a,b){var t=new G.Q()
t.cW(a,b)
return t},
fu:function(a){var t=new G.e7()
t.cX(a)
return t},
bi:function bi(){},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
Q:function Q(){this.b=this.a=this.c=null},
V:function V(a){this.c=a
this.b=this.a=null},
U:function U(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
J:function J(){},
bS:function bS(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(a){this.a=a},
e9:function e9(a){this.a=a},
ea:function ea(a){this.a=a}},X={
li:function(a){var t,s,r,q,p,o,n
for(t=a.c,t=new G.U(t,t.a.length,H.n(t).i("U<J.E>")),s=-1/0;t.n();){r=t.d
for(q=a.b,q=new G.U(q,q.a.length,H.n(q).i("U<J.E>"));q.n();){p=q.d.a
o=r.c
n=(o&&C.a).h(o,r.a8(p))
if(typeof n=="number"){if(typeof s!=="number")return H.i(s)
p=n>s}else p=!1
if(p)s=H.x(n)}}return s},
lj:function(a){var t,s,r,q,p,o,n
for(t=a.c,t=new G.U(t,t.a.length,H.n(t).i("U<J.E>")),s=1/0;t.n();){r=t.d
for(q=a.b,q=new G.U(q,q.a.length,H.n(q).i("U<J.E>"));q.n();){p=q.d.a
o=r.c
n=(o&&C.a).h(o,r.a8(p))
if(typeof n=="number"){if(typeof s!=="number")return H.i(s)
p=n<s}else p=!1
if(p)s=H.x(n)}}return s},
i7:function(a,b,c){var t,s,r,q
a.font=b
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.N)(c),++r){q=a.measureText(c[r]).width
if(typeof q!=="number")return H.i(q)
if(s<q)s=q}return s},
i9:function(a){var t
if(typeof a!=="number")return a.X()
if(C.e.X(a,1)===0)return 0
t=(H.b(a)+".0").split(".")
if(1>=t.length)return H.d(t,1)
return J.a4(t[1])},
dT:function(a,b){var t,s
if(b==null)return a
t=u.z
s=P.er(t,t)
t=new X.fl(s)
if(a!=null)a.as(0,t)
b.as(0,t)
return s},
fl:function fl(a){this.a=a},
aM:function aM(a){this.a=a}},L={
jf:function(a,b,c,d){var t,s,r=P.jH(c),q=Math.sqrt(d),p=new L.ez(r),o=H.l([],u.a)
for(t=a/2|0,s=0;s<t;++s)C.a.H(o,p.$0())
if(C.b.X(a,2)===1)C.a.l(o,J.iL(p.$0()))
return new H.a6(o,u.f1.a(new L.ey(q,b)),u.eu).a6(0)},
ez:function ez(a){this.a=a},
ey:function ey(a,b){this.a=a
this.b=b},
hi:function(a){var t=new L.bX()
$.hj=$.hj+1
t.ch=-1
switch(a.N(2)){case 0:t.b=C.v
break
case 2:t.b=C.N
break
default:t.b=C.w
break}return t},
j2:function(a,b,c){var t,s,r=H.l([],u.u)
for(t=0;t<a;++t)C.a.l(r,L.hi(c))
for(t=0;t<b;++t){s=L.hi(c)
s.c=!0
C.a.l(r,s)}return r},
bL:function bL(a){this.b=a},
bX:function bX(){var _=this
_.b=null
_.d=_.c=!1
_.e=0
_.r=_.f=!1
_.ch=_.Q=_.z=_.y=_.x=null}},S={
ht:function(){var t,s,r,q,p,o,n,m
if(C.h.V()<0.5){t=C.h.N(72)
if(t<0||t>=72)return H.d(C.F,t)
s=C.F[t]
if(C.c.aw(s," ")&&C.h.V()<0.1)s="'s"+s}else s=""
if(s.length===0||C.h.V()<0.25){r=C.h.N(21)
if(r<0||r>=21)return H.d(C.G,r)
q=C.G[r]}else q=""
p=C.h.N(92)
if(p<0||p>=92)return H.d(C.E,p)
o=C.E[p]
n=q.length
if(n===0||C.c.be(q," ")||C.c.be(q,"-"))o=C.c.a0(o,0,1).toUpperCase()+C.c.ak(o,1)
m=C.h.V()
if(C.c.be(q," ")&&C.c.aw(s," ")&&m<0.5)return C.c.a0(q,0,n-1)+s
else return q+o+s},
e4:function e4(){this.c=this.b=this.a=null}},O={
cP:function(a,b){var t,s,r=new O.bf(H.l([],u.u))
r.b=b
t=a.b
s=C.c.aG(t,".")
r.c=C.c.a0(t,s+1,s+2)
return r},
j5:function(a,b){var t=new O.ek()
t.cY(a,b)
return t},
iU:function(a){var t=u.I
t=new O.e0(H.l([],t),H.l([],t),H.l([],t),H.l([],t),H.l([],t),H.l([],t),H.l([],t),H.l([],t))
t.cV(a)
return t},
al:function al(a){this.b=a},
bf:function bf(a){this.b=null
this.c="?"
this.d=a},
ef:function ef(){},
ek:function ek(){this.c=this.b=this.a=null},
e0:function e0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ly:function(a){return H.x(a)},
l3:function(a){H.x(a)
if(typeof a!=="number")return a.q()
return a*a},
lc:function(a){H.x(a)
if(typeof a!=="number")return H.i(a)
return a*(2-a)},
l_:function(a){H.x(a)
if(typeof a!=="number")return a.q()
a*=2
if(a<1)return 0.5*a*a;--a
return 0.5*(1-a*(a-2))},
kR:function(a){H.x(a)
if(typeof a!=="number")return a.q()
return a*a*a},
l9:function(a){H.x(a)
if(typeof a!=="number")return a.m();--a
return a*a*a+1},
kX:function(a){H.x(a)
if(typeof a!=="number")return a.q()
a*=2
if(a<1)return 0.5*a*a*a
a-=2
return 0.5*(a*a*a+2)},
l4:function(a){H.x(a)
if(typeof a!=="number")return a.q()
return a*a*a*a},
ld:function(a){H.x(a)
if(typeof a!=="number")return a.m();--a
return 1-a*a*a*a},
l0:function(a){H.x(a)
if(typeof a!=="number")return a.q()
a*=2
if(a<1)return 0.5*a*a*a*a
a-=2
return 0.5*(2-a*a*a*a)},
l5:function(a){H.x(a)
if(typeof a!=="number")return a.q()
return a*a*a*a*a},
le:function(a){H.x(a)
if(typeof a!=="number")return a.m();--a
return a*a*a*a*a+1},
l1:function(a){H.x(a)
if(typeof a!=="number")return a.q()
a*=2
if(a<1)return 0.5*a*a*a*a*a
a-=2
return 0.5*(a*a*a*a*a+2)},
l6:function(a){H.x(a)
if(typeof a!=="number")return a.q()
return 1-Math.cos(a*3.141592653589793/2)},
lf:function(a){H.x(a)
if(typeof a!=="number")return a.q()
return Math.sin(a*3.141592653589793/2)},
l2:function(a){H.x(a)
if(typeof a!=="number")return H.i(a)
return 0.5*(1-Math.cos(3.141592653589793*a))},
kT:function(a){var t
H.x(a)
if(a===0)t=1
else{if(typeof a!=="number")return a.m()
t=Math.pow(2,10*(a-1))}return t},
lb:function(a){var t
H.x(a)
if(a===1)t=1
else{if(typeof a!=="number")return H.i(a)
t=1-Math.pow(2,-10*a)}return t},
kZ:function(a){H.x(a)
if(a===0)return 0
if(a===1)return 1
if(typeof a!=="number")return a.q()
a*=2
if(a<1)return 0.5*Math.pow(2,10*(a-1))
return 0.5*(-Math.pow(2,-10*(a-1))+2)},
kQ:function(a){H.x(a)
if(typeof a!=="number")return a.cG()
if(a>=1)return a
return 1-Math.sqrt(1-a*a)},
l8:function(a){H.x(a)
if(typeof a!=="number")return a.m();--a
return Math.sqrt(1-a*a)},
kW:function(a){H.x(a)
if(typeof a!=="number")return a.q()
a*=2
if(a<1)return-0.5*(Math.sqrt(1-a*a)-1)
a-=2
return 0.5*(Math.sqrt(1-a*a)+1)},
kS:function(a){var t
H.x(a)
if(a===0)return 0
if(a===1)return 1
t=Math.asin(1)
if(typeof a!=="number")return a.m();--a
return-(Math.pow(2,10*a)*Math.sin((a-0.0477464829275686*t)*6.283185307179586/0.3))},
la:function(a){var t
H.x(a)
if(a===0)return 0
if(a===1)return 1
t=Math.asin(1)
if(typeof a!=="number")return H.i(a)
return Math.pow(2,-10*a)*Math.sin((a-0.0477464829275686*t)*6.283185307179586/0.3)+1},
kY:function(a){var t
H.x(a)
if(a===0)return 0
if(a===1)return 1
t=0.07161972439135289*Math.asin(1)
if(typeof a!=="number")return H.i(a)
a=2*a-1
if(a<0)return-0.5*(Math.pow(2,10*a)*Math.sin((a-t)*6.283185307179586/0.44999999999999996))
return Math.pow(2,-10*a)*Math.sin((a-t)*6.283185307179586/0.44999999999999996)*0.5+1},
kP:function(a){H.x(a)
if(typeof a!=="number")return a.q()
return a*a*(2.70158*a-1.70158)},
l7:function(a){H.x(a)
if(typeof a!=="number")return a.m();--a
return a*a*(2.70158*a+1.70158)+1},
kU:function(a){H.x(a)
if(typeof a!=="number")return a.q()
a*=2
if(a<1)return 0.5*(a*a*(3.5949095*a-2.5949095))
a-=2
return 0.5*(a*a*(3.5949095*a+2.5949095)+2)},
fS:function(a){H.x(a)
if(typeof a!=="number")return a.ai()
if(a<0.36363636363636365)return 7.5625*a*a
else if(a<0.7272727272727273){a-=0.5454545454545454
return 7.5625*a*a+0.75}else if(a<0.9090909090909091){a-=0.8181818181818182
return 7.5625*a*a+0.9375}else{a-=0.9545454545454546
return 7.5625*a*a+0.984375}},
kV:function(a){H.x(a)
if(typeof a!=="number")return a.ai()
if(a<0.5)return(1-O.fS(1-a*2))*0.5
return O.fS(a*2-1)*0.5+0.5},
lk:function(a){if(u.b.b(a))return a
switch(a){case"linear":return O.kI()
case"easeInQuad":return O.kv()
case"easeOutQuad":return O.kF()
case"easeInOutQuad":return O.kr()
case"easeInCubic":return O.ki()
case"easeOutCubic":return O.kC()
case"easeInOutCubic":return O.ko()
case"easeInQuart":return O.kw()
case"easeOutQuart":return O.kG()
case"easeInOutQuart":return O.ks()
case"easeInQuint":return O.kx()
case"easeOutQuint":return O.i4()
case"easeInOutQuint":return O.kt()
case"easeInSine":return O.ky()
case"easeOutSine":return O.kH()
case"easeInOutSine":return O.ku()
case"easeInExpo":return O.kk()
case"easeOutExpo":return O.kE()
case"easeInOutExpo":return O.kq()
case"easeInCirc":return O.kh()
case"easeOutCirc":return O.kB()
case"easeInOutCirc":return O.kn()
case"easeInElastic":return O.kj()
case"easeOutElastic":return O.kD()
case"easeInOutElastic":return O.kp()
case"easeInBack":return O.i3()
case"easeOutBack":return O.kz()
case"easeInOutBack":return O.kl()
case"easeInBounce":return O.i3()
case"easeOutBounce":return O.kA()
case"easeInOutBounce":return O.km()
default:throw H.c(P.fs(a,"name",null))}}},F={
jr:function(a){var t=new F.dk()
t.d_(a)
return t},
ih:function(){var t,s,r,q,p,o=new Z.eu()
o.a=0.15
o.b=0.02
o.c=21
o.d=0.1
t=L.j2(7500,1,C.h)
s=new S.e4()
s.a=S.ht()
s.b=O.j5(50,50)
s.c=O.iU(7500)
r=new F.dj()
r.cZ(s,o,t,new B.cT(),F.jr(s))
q=r.ch=N.e1("#btn_play","btn_play_dis.png","btn_play.png","btn_play_on.png")
q.r=!1
q.f.src=q.d
q=r.db=N.e1("#btn_pause","btn_pause_dis.png","btn_pause.png","btn_pause_on.png")
q.r=!0
q.f.src=q.c
r.db.y=r.gex()
q=r.cy=N.e1("#btn_stop","btn_stop_dis.png","btn_stop.png","btn_stop_on.png")
q.r=!0
q.f.src=q.c
r.cy.y=r.geD()
q=r.cx=N.e1("#btn_single","btn_fw_chap_dis.png","btn_fw_chap.png","btn_fw_chap_on.png")
q.r=!1
q.f.src=q.d
q=J.iM(document.querySelector("#city_name"))
p=q.$ti
W.bB(q.a,q.b,p.i("~(1)").a(r.geT()),!0,p.c)
r.z=0
r.Q=2000
r.cQ(0,0)
r.ch.y=r.geB()
r.cx.y=r.gez()},
dk:function dk(){var _=this
_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=_.a=null
_.cx=0
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=null},
eI:function eI(a){this.a=a},
dj:function dj(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.fr=_.dy=_.dx=!1
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null}},Z={eu:function eu(){var _=this
_.d=_.c=_.b=_.a=null}},D={ex:function ex(a,b){this.a=a
this.b=b
this.c=null}},N={
ai:function(a,b,c,d){var t=new N.e5()
t.a=a
t.b=b
t.c=c
t.d=d
return t},
e1:function(a,b,c,d){var t,s=new N.bg()
s.c="graphics/"+b
s.d="graphics/"+c
s.e="graphics/"+d
t=u.fS.a(document.querySelector(a))
s.f=t
t.toString
W.bB(t,"click",u.a6.a(s.gev(s)),!0,u.V)
return s},
e5:function e5(){var _=this
_.d=_.c=_.b=_.a=null},
bg:function bg(){var _=this
_.f=_.e=_.d=_.c=null
_.r=!1
_.y=null},
dV:function dV(){},
el:function el(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.z=_.x=null},
e_:function e_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.z=_.x=null}}
var w=[C,H,J,P,W,T,B,Y,G,X,L,S,O,F,Z,D,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fz.prototype={}
J.H.prototype={
G:function(a,b){return a===b},
gv:function(a){return H.br(a)},
j:function(a){return"Instance of '"+H.b(H.eB(a))+"'"}}
J.c_.prototype={
j:function(a){return String(a)},
bq:function(a,b){return b||a},
gv:function(a){return a?519018:218159},
$iF:1}
J.cY.prototype={
G:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
$iG:1}
J.aK.prototype={
gv:function(a){return 0},
j:function(a){return String(a)}}
J.d4.prototype={}
J.aA.prototype={}
J.ao.prototype={
j:function(a){var t=a[$.it()]
if(t==null)return this.cP(a)
return"JavaScript function for "+H.b(J.bb(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ian:1}
J.w.prototype={
l:function(a,b){H.P(a).c.a(b)
if(!!a.fixed$length)H.a9(P.a0("add"))
a.push(b)},
aH:function(a,b,c){var t,s
H.P(a).i("m<1>").a(c)
if(!!a.fixed$length)H.a9(P.a0("insertAll"))
P.jk(b,0,a.length,"index")
if(!u.X.b(c))c=J.iO(c)
t=J.a4(c)
this.sk(a,a.length+t)
s=b+t
this.bu(a,s,a.length,a,b)
this.aj(a,b,s,c)},
L:function(a,b){var t
if(!!a.fixed$length)H.a9(P.a0("remove"))
for(t=0;t<a.length;++t)if(J.a2(a[t],b)){a.splice(t,1)
return!0}return!1},
H:function(a,b){var t
H.P(a).i("m<1>").a(b)
if(!!a.fixed$length)H.a9(P.a0("addAll"))
for(t=J.aV(b);t.n();)a.push(t.gt())},
eP:function(a,b){var t,s=new Array(a.length)
s.fixed$length=Array
for(t=0;t<a.length;++t)this.A(s,t,H.b(a[t]))
return s.join(b)},
S:function(a,b){return H.cd(a,b,null,H.P(a).c)},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
by:function(a,b,c){var t=a.length
if(b>t)throw H.c(P.ad(b,0,t,"start",null))
if(c<b||c>t)throw H.c(P.ad(c,b,t,"end",null))
if(b===c)return H.l([],H.P(a))
return H.l(a.slice(b,c),H.P(a))},
gaF:function(a){if(a.length>0)return a[0]
throw H.c(H.hn())},
cz:function(a,b,c){if(!!a.fixed$length)H.a9(P.a0("removeRange"))
P.d6(b,c,a.length)
a.splice(b,c-b)},
bu:function(a,b,c,d,e){var t,s,r,q,p=H.P(a)
p.i("m<1>").a(d)
if(!!a.immutable$list)H.a9(P.a0("setRange"))
P.d6(b,c,a.length)
t=c-b
if(t===0)return
P.ap(e,"skipCount")
if(u.j.b(d)){p.i("r<1>").a(d)
s=e
r=d}else{r=J.h4(d,e).a_(0,!1)
s=0}p=J.K(r)
if(s+t>p.gk(r))throw H.c(H.ja())
if(s<b)for(q=t-1;q>=0;--q)a[b+q]=p.h(r,s+q)
else for(q=0;q<t;++q)a[b+q]=p.h(r,s+q)},
aj:function(a,b,c,d){return this.bu(a,b,c,d,0)},
cc:function(a,b){var t,s
H.P(a).i("F(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.ag(b.$1(a[s])))return!0
if(a.length!==t)throw H.c(P.b0(a))}return!1},
I:function(a,b){var t
for(t=0;t<a.length;++t)if(J.a2(a[t],b))return!0
return!1},
j:function(a){return P.fx(a,"[","]")},
a_:function(a,b){var t=H.l(a.slice(0),H.P(a))
return t},
a6:function(a){return this.a_(a,!0)},
gw:function(a){return new J.au(a,a.length,H.P(a).i("au<1>"))},
gv:function(a){return H.br(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.a9(P.a0("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.I(b)
if(!H.fc(b))throw H.c(H.ba(a,b))
if(b>=a.length||b<0)throw H.c(H.ba(a,b))
return a[b]},
A:function(a,b,c){H.P(a).c.a(c)
if(!!a.immutable$list)H.a9(P.a0("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ba(a,b))
a[b]=c},
p:function(a,b){var t,s=H.P(a)
s.i("r<1>").a(b)
t=C.b.p(a.length,b.gk(b))
s=H.l([],s)
this.sk(s,t)
this.aj(s,0,a.length,a)
this.aj(s,a.length,t,b)
return s},
$it:1,
$im:1,
$ir:1}
J.en.prototype={}
J.au.prototype={
gt:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.c(H.N(r))
t=s.c
if(t>=q){s.sbO(null)
return!1}s.sbO(r[t]);++s.c
return!0},
sbO:function(a){this.d=this.$ti.c.a(a)},
$iE:1}
J.aw.prototype={
gat:function(a){return a===0?1/a<0:a<0},
f4:function(a,b){return a%b},
aD:function(a){return Math.abs(a)},
a5:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.c(P.a0(""+a+".toInt()"))},
cf:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.a0(""+a+".ceil()"))},
bj:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.a0(""+a+".floor()"))},
E:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.a0(""+a+".round()"))},
f9:function(a){return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
p:function(a,b){H.y(b)
if(typeof b!="number")throw H.c(H.bH(b))
return a+b},
m:function(a,b){H.y(b)
if(typeof b!="number")throw H.c(H.bH(b))
return a-b},
q:function(a,b){if(typeof b!="number")throw H.c(H.bH(b))
return a*b},
X:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
a7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c5(a,b)},
u:function(a,b){return(a|0)===a?a/b|0:this.c5(a,b)},
c5:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.a0("Result of truncating division is "+H.b(t)+": "+H.b(a)+" ~/ "+b))},
c4:function(a,b){var t
if(a>0)t=this.ea(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ea:function(a,b){return b>31?0:a>>>b},
W:function(a,b){if(typeof b!="number")throw H.c(H.bH(b))
return a>b},
$iY:1,
$iz:1}
J.bn.prototype={
aD:function(a){return Math.abs(a)},
$ia1:1}
J.c0.prototype={}
J.ax.prototype={
eF:function(a,b){if(b<0)throw H.c(H.ba(a,b))
if(b>=a.length)H.a9(H.ba(a,b))
return a.charCodeAt(b)},
am:function(a,b){if(b>=a.length)throw H.c(H.ba(a,b))
return a.charCodeAt(b)},
p:function(a,b){H.v(b)
if(typeof b!="string")throw H.c(P.fs(b,null,null))
return a+b},
be:function(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.ak(a,s-t)},
aw:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
a0:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eC(b,null))
if(b>c)throw H.c(P.eC(b,null))
if(c>a.length)throw H.c(P.eC(c,null))
return a.substring(b,c)},
ak:function(a,b){return this.a0(a,b,null)},
fa:function(a){return a.toLowerCase()},
q:function(a,b){var t,s
H.I(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Z)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
cv:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.q(c,t)+a},
aG:function(a,b){var t=a.indexOf(b,0)
return t},
eG:function(a,b,c){var t=a.length
if(c>t)throw H.c(P.ad(c,0,t,null,null))
return H.lE(a,b,c)},
j:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gk:function(a){return a.length},
h:function(a,b){H.I(b)
if(b>=a.length||!1)throw H.c(H.ba(a,b))
return a[b]},
$ifB:1,
$io:1}
H.aN.prototype={
gw:function(a){var t=H.n(this)
return new H.bQ(J.aV(this.gad()),t.i("@<1>").B(t.Q[1]).i("bQ<1,2>"))},
gk:function(a){return J.a4(this.gad())},
S:function(a,b){var t=H.n(this)
return H.iV(J.h4(this.gad(),b),t.c,t.Q[1])},
C:function(a,b){return H.n(this).Q[1].a(J.cN(this.gad(),b))},
j:function(a){return J.bb(this.gad())}}
H.bQ.prototype={
n:function(){return this.a.n()},
gt:function(){return this.$ti.Q[1].a(this.a.gt())},
$iE:1}
H.aY.prototype={
gad:function(){return this.a}}
H.cm.prototype={$it:1}
H.ch.prototype={
h:function(a,b){return this.$ti.Q[1].a(J.f(this.a,H.I(b)))},
$it:1,
$ir:1}
H.bR.prototype={
gad:function(){return this.a}}
H.t.prototype={}
H.R.prototype={
gw:function(a){var t=this
return new H.b5(t,t.gk(t),H.n(t).i("b5<R.E>"))},
aJ:function(a,b){return this.cO(0,H.n(this).i("F(R.E)").a(b))},
eR:function(a,b,c){var t=H.n(this)
return new H.a6(this,t.B(c).i("1(R.E)").a(b),t.i("@<R.E>").B(c).i("a6<1,2>"))},
S:function(a,b){return H.cd(this,b,null,H.n(this).i("R.E"))},
a_:function(a,b){var t,s=this,r=H.l([],H.n(s).i("w<R.E>"))
C.a.sk(r,s.gk(s))
for(t=0;t<s.gk(s);++t)C.a.A(r,t,s.C(0,t))
return r},
a6:function(a){return this.a_(a,!0)}}
H.cc.prototype={
gdu:function(){var t=J.a4(this.a),s=this.c
if(s==null||s>t)return t
return s},
gec:function(){var t=J.a4(this.a),s=this.b
if(s>t)return t
return s},
gk:function(a){var t,s=J.a4(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.m()
return t-r},
C:function(a,b){var t,s=this,r=s.gec()+b
if(b>=0){t=s.gdu()
if(typeof t!=="number")return H.i(t)
t=r>=t}else t=!0
if(t)throw H.c(P.bm(b,s,"index",null,null))
return J.cN(s.a,r)},
S:function(a,b){var t,s,r=this
P.ap(b,"count")
t=r.b+b
s=r.c
if(s!=null&&t>=s)return new H.bV(r.$ti.i("bV<1>"))
return H.cd(r.a,t,s,r.$ti.c)},
a_:function(a,b){var t,s,r,q,p=this,o=p.b,n=p.a,m=J.K(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
if(typeof l!=="number")return l.m()
t=l-o
if(t<0)t=0
s=new Array(t)
s.fixed$length=Array
r=H.l(s,p.$ti.i("w<1>"))
for(q=0;q<t;++q){C.a.A(r,q,m.C(n,o+q))
if(m.gk(n)<l)throw H.c(P.b0(p))}return r}}
H.b5.prototype={
gt:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=J.K(r),p=q.gk(r)
if(s.b!==p)throw H.c(P.b0(r))
t=s.c
if(t>=p){s.sal(null)
return!1}s.sal(q.C(r,t));++s.c
return!0},
sal:function(a){this.d=this.$ti.c.a(a)},
$iE:1}
H.c5.prototype={
gw:function(a){var t=H.n(this)
return new H.c6(J.aV(this.a),this.b,t.i("@<1>").B(t.Q[1]).i("c6<1,2>"))},
gk:function(a){return J.a4(this.a)},
C:function(a,b){return this.b.$1(J.cN(this.a,b))}}
H.c6.prototype={
n:function(){var t=this,s=t.b
if(s.n()){t.sal(t.c.$1(s.gt()))
return!0}t.sal(null)
return!1},
gt:function(){return this.a},
sal:function(a){this.a=this.$ti.Q[1].a(a)}}
H.a6.prototype={
gk:function(a){return J.a4(this.a)},
C:function(a,b){return this.b.$1(J.cN(this.a,b))}}
H.aB.prototype={
gw:function(a){return new H.cg(J.aV(this.a),this.b,this.$ti.i("cg<1>"))}}
H.cg.prototype={
n:function(){var t,s
for(t=this.a,s=this.b;t.n();)if(H.ag(s.$1(t.gt())))return!0
return!1},
gt:function(){return this.a.gt()}}
H.ay.prototype={
S:function(a,b){P.bc(b,"count",u.S)
P.ap(b,"count")
return new H.ay(this.a,this.b+b,H.n(this).i("ay<1>"))},
gw:function(a){return new H.ca(J.aV(this.a),this.b,H.n(this).i("ca<1>"))}}
H.bk.prototype={
gk:function(a){var t=J.a4(this.a)-this.b
if(t>=0)return t
return 0},
S:function(a,b){P.bc(b,"count",u.S)
P.ap(b,"count")
return new H.bk(this.a,this.b+b,this.$ti)},
$it:1}
H.ca.prototype={
n:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.n()
this.b=0
return t.n()},
gt:function(){return this.a.gt()}}
H.bV.prototype={
gw:function(a){return C.S},
gk:function(a){return 0},
C:function(a,b){throw H.c(P.ad(b,0,0,"index",null))},
S:function(a,b){P.ap(b,"count")
return this}}
H.bW.prototype={
n:function(){return!1},
gt:function(){return null},
$iE:1}
H.cH.prototype={}
H.eG.prototype={
U:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.d0.prototype={
j:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.cZ.prototype={
j:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.b(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.b(s.a)+")"
return r+q+"' on '"+t+"' ("+H.b(s.a)+")"}}
H.dh.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.fm.prototype={
$1:function(a){if(u.T.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:12}
H.cz.prototype={
j:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$ia7:1}
H.b_.prototype={
j:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.ir(s==null?"unknown":s)+"'"},
$ian:1,
gfc:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.df.prototype={}
H.dc.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.ir(t)+"'"}}
H.be.prototype={
G:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.be))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gv:function(a){var t,s=this.c
if(s==null)t=H.br(this.a)
else t=typeof s!=="object"?J.a3(s):H.br(s)
return(t^H.br(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.eB(t))+"'")}}
H.d7.prototype={
j:function(a){return"RuntimeError: "+H.b(this.a)}}
H.dl.prototype={
j:function(a){return"Assertion failed: "+P.cU(this.a)}}
H.b4.prototype={
gk:function(a){return this.a},
gaa:function(){return new H.c1(this,H.n(this).i("c1<1>"))},
eH:function(a){var t=this.b
if(t==null)return!1
return this.dg(t,a)},
h:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.ay(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.ay(q,b)
r=s==null?o:s.b
return r}else return p.eO(b)},
eO:function(a){var t,s,r=this.d
if(r==null)return null
t=this.bW(r,J.a3(a)&0x3ffffff)
s=this.cq(t,a)
if(s<0)return null
return t[s].b},
A:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.n(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.bB(t==null?n.b=n.b_():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.bB(s==null?n.c=n.b_():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.b_()
q=J.a3(b)&0x3ffffff
p=n.bW(r,q)
if(p==null)n.b6(r,q,[n.b0(b,c)])
else{o=n.cq(p,b)
if(o>=0)p[o].b=c
else p.push(n.b0(b,c))}}},
as:function(a,b){var t,s,r=this
H.n(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.c(P.b0(r))
t=t.c}},
bB:function(a,b,c){var t,s=this,r=H.n(s)
r.c.a(b)
r.Q[1].a(c)
t=s.ay(a,b)
if(t==null)s.b6(a,b,s.b0(b,c))
else t.b=c},
dR:function(){this.r=this.r+1&67108863},
b0:function(a,b){var t,s=this,r=H.n(s),q=new H.eq(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{t=s.f
q.d=t
s.f=t.c=q}++s.a
s.dR()
return q},
cq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a2(a[s].a,b))return s
return-1},
j:function(a){return P.hs(this)},
ay:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
b6:function(a,b,c){a[b]=c},
dm:function(a,b){delete a[b]},
dg:function(a,b){return this.ay(a,b)!=null},
b_:function(){var t="<non-identifier-key>",s=Object.create(null)
this.b6(s,t,s)
this.dm(s,t)
return s},
$iho:1}
H.eq.prototype={}
H.c1.prototype={
gk:function(a){return this.a.a},
gw:function(a){var t=this.a,s=new H.c2(t,t.r,this.$ti.i("c2<1>"))
s.c=t.e
return s}}
H.c2.prototype={
gt:function(){return this.d},
n:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.c(P.b0(s))
else{s=t.c
if(s==null){t.sbA(null)
return!1}else{t.sbA(s.a)
t.c=t.c.c
return!0}}},
sbA:function(a){this.d=this.$ti.c.a(a)},
$iE:1}
H.ff.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.fg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.fh.prototype={
$1:function(a){return this.a(H.v(a))},
$S:31}
H.ae.prototype={
i:function(a){return H.dL(v.typeUniverse,this,a)},
B:function(a){return H.jS(v.typeUniverse,this,a)}}
H.du.prototype={}
H.dt.prototype={
j:function(a){return this.a}}
H.cD.prototype={}
P.eL.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:9}
P.eK.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:33}
P.eM.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eN.prototype={
$0:function(){this.a.$0()},
$S:1}
P.f9.prototype={
d4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bI(new P.fa(this,b),0),a)
else throw H.c(P.a0("`setTimeout()` not found."))}}
P.fa.prototype={
$0:function(){this.b.$0()},
$S:2}
P.aC.prototype={}
P.aD.prototype={
b1:function(){},
b2:function(){},
sao:function(a){this.dy=this.$ti.a(a)},
saA:function(a){this.fr=this.$ti.a(a)}}
P.b7.prototype={
gaZ:function(){return this.c<4},
c1:function(a){var t,s
H.n(this).i("aD<1>").a(a)
t=a.fr
s=a.dy
if(t==null)this.sbS(s)
else t.sao(s)
if(s==null)this.sbY(t)
else s.saA(t)
a.saA(a)
a.sao(a)},
ed:function(a,b,c,d){var t,s,r,q,p,o=this,n=H.n(o)
n.i("~(1)").a(a)
u.M.a(c)
if((o.c&4)!==0){if(c==null)c=P.i5()
n=new P.by($.D,c,n.i("by<1>"))
n.e3()
return n}t=$.D
s=d?1:0
r=n.i("aD<1>")
q=new P.aD(o,t,s,r)
q.d0(a,b,c,d,n.c)
q.saA(q)
q.sao(q)
r.a(q)
q.dx=o.c&1
p=o.e
o.sbY(q)
q.sao(null)
q.saA(p)
if(p==null)o.sbS(q)
else p.sao(q)
if(o.d==o.e)P.i_(o.a)
return q},
dY:function(a){var t=this,s=H.n(t)
a=s.i("aD<1>").a(s.i("a_<1>").a(a))
if(a.dy===a)return null
s=a.dx
if((s&2)!==0)a.dx=s|4
else{t.c1(a)
if((t.c&2)===0&&t.d==null)t.aP()}return null},
aO:function(){if((this.c&4)!==0)return new P.ar("Cannot add new events after calling close")
return new P.ar("Cannot add new events while doing an addStream")},
l:function(a,b){var t=this
H.n(t).c.a(b)
if(!t.gaZ())throw H.c(t.aO())
t.aC(b)},
dz:function(a){var t,s,r,q,p=this
H.n(p).i("~(aE<1>)").a(a)
t=p.c
if((t&2)!==0)throw H.c(P.db("Cannot fire new event. Controller is already firing an event"))
s=p.d
if(s==null)return
r=t&1
p.c=t^3
for(;s!=null;){t=s.dx
if((t&1)===r){s.dx=t|2
a.$1(s)
t=s.dx^=1
q=s.dy
if((t&4)!==0)p.c1(s)
s.dx&=4294967293
s=q}else s=s.dy}p.c&=4294967293
if(p.d==null)p.aP()},
aP:function(){if((this.c&4)!==0&&null.gff())null.fe(null)
P.i_(this.b)},
sbS:function(a){this.d=H.n(this).i("aD<1>").a(a)},
sbY:function(a){this.e=H.n(this).i("aD<1>").a(a)},
$ieD:1,
$ihK:1,
$iaO:1}
P.cC.prototype={
gaZ:function(){return P.b7.prototype.gaZ.call(this)&&(this.c&2)===0},
aO:function(){if((this.c&2)!==0)return new P.ar("Cannot fire new event. Controller is already firing an event")
return this.cR()},
aC:function(a){var t,s=this
s.$ti.c.a(a)
t=s.d
if(t==null)return
if(t===s.e){s.c|=2
t.bD(a)
s.c&=4294967293
if(s.d==null)s.aP()
return}s.dz(new P.f7(s,a))}}
P.f7.prototype={
$1:function(a){this.a.$ti.i("aE<1>").a(a).bD(this.b)},
$S:function(){return this.a.$ti.i("G(aE<1>)")}}
P.ej.prototype={
$0:function(){var t,s,r,q,p
try{this.b.aS(this.a.$0())}catch(r){t=H.aa(r)
s=H.at(r)
q=t
p=s
if(p==null)p=P.h6(q)
this.b.an(q,p)}},
$S:1}
P.cp.prototype={
eS:function(a){if((this.c&15)!==6)return!0
return this.b.b.bo(u.al.a(this.d),a.a,u.y,u.K)},
eN:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.p.b(t))return q.a(p.f7(t,a.a,a.b,s,r,u.l))
else return q.a(p.bo(u.v.a(t),a.a,s,r))}}
P.T.prototype={
cF:function(a,b,c){var t,s,r,q=this.$ti
q.B(c).i("1/(2)").a(a)
t=$.D
if(t!==C.f){c.i("@<0/>").B(q.c).i("1(2)").a(a)
if(b!=null)b=P.k9(b,t)}s=new P.T($.D,c.i("T<0>"))
r=b==null?1:3
this.bC(new P.cp(s,r,a,b,q.i("@<1>").B(c).i("cp<1,2>")))
return s},
f8:function(a,b){return this.cF(a,null,b)},
e9:function(a){this.$ti.c.a(a)
this.a=4
this.c=a},
bC:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.x.a(s.c)
s.c=a}else{if(r===2){t=u._.a(s.c)
r=t.a
if(r<4){t.bC(a)
return}s.a=r
s.c=t.c}P.dQ(null,null,s.b,u.M.a(new P.eQ(s,a)))}},
c0:function(a){var t,s,r,q,p,o=this,n={}
n.a=a
if(a==null)return
t=o.a
if(t<=1){s=u.x.a(o.c)
r=o.c=a
if(s!=null){for(;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=u._.a(o.c)
t=p.a
if(t<4){p.c0(a)
return}o.a=t
o.c=p.c}n.a=o.aB(a)
P.dQ(null,null,o.b,u.M.a(new P.eU(n,o)))}},
b5:function(){var t=u.x.a(this.c)
this.c=null
return this.aB(t)},
aB:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aS:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("bY<1>").b(a))if(r.b(a))P.hF(a,s)
else P.jx(a,s)
else{t=s.b5()
r.c.a(a)
s.a=4
s.c=a
P.cq(s,t)}},
an:function(a,b){var t,s,r=this
u.l.a(b)
t=r.b5()
s=P.dY(a,b)
r.a=8
r.c=s
P.cq(r,t)},
de:function(a){return this.an(a,null)},
$ibY:1}
P.eQ.prototype={
$0:function(){P.cq(this.a,this.b)},
$S:1}
P.eU.prototype={
$0:function(){P.cq(this.b,this.a.a)},
$S:1}
P.eR.prototype={
$1:function(a){var t=this.a
t.a=0
t.aS(a)},
$S:9}
P.eS.prototype={
$2:function(a,b){u.l.a(b)
this.a.an(a,b)},
$1:function(a){return this.$2(a,null)},
$S:23}
P.eT.prototype={
$0:function(){this.a.an(this.b,this.c)},
$S:1}
P.eX.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.c
m=r.b.b.cB(u.fO.a(r.d),u.z)}catch(q){t=H.aa(q)
s=H.at(q)
if(n.d){r=u.n.a(n.a.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.b
if(r)p.b=u.n.a(n.a.a.c)
else p.b=P.dY(t,s)
p.a=!0
return}if(u.c.b(m)){if(m instanceof P.T&&m.a>=4){if(m.a===8){r=n.b
r.b=u.n.a(m.c)
r.a=!0}return}o=n.a.a
r=n.b
r.b=m.f8(new P.eY(o),u.z)
r.a=!1}},
$S:2}
P.eY.prototype={
$1:function(a){return this.a},
$S:22}
P.eW.prototype={
$0:function(){var t,s,r,q,p,o,n,m=this
try{r=m.b
q=r.$ti
p=q.c
o=p.a(m.c)
m.a.b=r.b.b.bo(q.i("2/(1)").a(r.d),o,q.i("2/"),p)}catch(n){t=H.aa(n)
s=H.at(n)
r=m.a
r.b=P.dY(t,s)
r.a=!0}},
$S:2}
P.eV.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.c
if(H.ag(q.eS(t))&&q.e!=null){p=l.b
p.b=q.eN(t)
p.a=!1}}catch(o){s=H.aa(o)
r=H.at(o)
q=u.n.a(l.a.a.c)
p=q.a
n=s
m=l.b
if(p==null?n==null:p===n)m.b=q
else m.b=P.dY(s,r)
m.a=!0}},
$S:2}
P.dm.prototype={}
P.aL.prototype={
gk:function(a){var t={},s=new P.T($.D,u.fJ)
t.a=0
this.bm(new P.eE(t,this),!0,new P.eF(t,s),s.gdd())
return s}}
P.eE.prototype={
$1:function(a){H.n(this.b).c.a(a);++this.a.a},
$S:function(){return H.n(this.b).i("G(1)")}}
P.eF.prototype={
$0:function(){this.b.aS(this.a.a)},
$S:1}
P.a_.prototype={}
P.bx.prototype={
gv:function(a){return(H.br(this.a)^892482866)>>>0},
G:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.bx&&b.a===this.a}}
P.cj.prototype={
c_:function(){return this.x.dY(this)},
b1:function(){H.n(this.x).i("a_<1>").a(this)},
b2:function(){H.n(this.x).i("a_<1>").a(this)}}
P.aE.prototype={
d0:function(a,b,c,d,e){var t,s=this,r=H.n(s)
r.i("~(1)").a(a)
s.sdU(u.gu.B(r.c).i("1(2)").a(a))
t=b==null?P.kN():b
if(u.da.b(t))s.d.cw(t,u.z,u.K,u.l)
else if(u.d5.b(t))u.v.a(t)
else H.a9(P.dW("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
r=u.M
r.a(c)
s.sdV(r.a(c==null?P.i5():c))},
aq:function(){var t,s=this,r=s.e&=4294967279
if((r&8)===0){r=s.e=r|8
if((r&64)!==0){t=s.r
if(t.a===1)t.a=3}if((r&32)===0)s.sb4(null)
s.f=s.c_()}r=$.fY()
return r},
bD:function(a){var t,s=this,r=H.n(s)
r.c.a(a)
t=s.e
if((t&8)!==0)return
if(t<32)s.aC(a)
else s.d7(new P.ck(a,r.i("ck<1>")))},
b1:function(){},
b2:function(){},
c_:function(){return null},
d7:function(a){var t=this,s=H.n(t).i("cA<1>"),r=s.a(t.r)
if(r==null){r=new P.cA(s)
t.sb4(r)}s=r.c
if(s==null)r.b=r.c=a
else r.c=s.a=a
s=t.e
if((s&64)===0){s|=64
t.e=s
if(s<128)t.r.bs(t)}},
aC:function(a){var t,s=this,r=H.n(s).c
r.a(a)
t=s.e
s.e=t|32
s.d.cD(s.a,a,r)
s.e&=4294967263
s.da((t&4)!==0)},
da:function(a){var t,s,r=this,q=r.e
if((q&64)!==0&&r.r.c==null){q=r.e=q&4294967231
if((q&4)!==0)if(q<128){t=r.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){q&=4294967291
r.e=q}}for(;!0;a=s){if((q&8)!==0){r.sb4(null)
return}s=(q&4)!==0
if(a===s)break
r.e=q^32
if(s)r.b1()
else r.b2()
q=r.e&=4294967263}if((q&64)!==0&&q<128)r.r.bs(r)},
sdU:function(a){this.a=H.n(this).i("~(1)").a(a)},
sdV:function(a){u.M.a(a)},
sb4:function(a){this.r=H.n(this).i("cv<1>").a(a)},
$ia_:1,
$iaO:1}
P.bC.prototype={
bm:function(a,b,c,d){var t=this.$ti
t.i("~(1)").a(a)
u.M.a(c)
return this.a.ed(t.i("~(1)").a(a),d,c,!0===b)},
bl:function(a){return this.bm(a,null,null,null)}}
P.dr.prototype={}
P.ck.prototype={}
P.cv.prototype={
bs:function(a){var t,s=this
s.$ti.i("aO<1>").a(a)
t=s.a
if(t===1)return
if(t>=1){s.a=1
return}P.im(new P.f0(s,a))
s.a=1}}
P.f0.prototype={
$0:function(){var t,s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
t=q.$ti.i("aO<1>").a(this.b)
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
H.n(s).i("aO<1>").a(t).aC(s.b)},
$S:1}
P.cA.prototype={}
P.by.prototype={
e3:function(){var t=this
if((t.b&2)!==0)return
P.dQ(null,null,t.a,u.M.a(t.ge4()))
t.b|=2},
aq:function(){return $.fY()},
e5:function(){var t=this,s=t.b&=4294967293
if(s>=4)return
t.b=s|1
t.a.cC(t.c)},
$ia_:1}
P.bO.prototype={
j:function(a){return H.b(this.a)},
$iB:1,
gav:function(){return this.b}}
P.dM.prototype={$ihD:1}
P.fd.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.c(s.a)
t=H.c(s.a)
t.stack=r.j(0)
throw t},
$S:1}
P.dE.prototype={
cC:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.f===$.D){a.$0()
return}P.hY(q,q,this,a,u.o)}catch(r){t=H.aa(r)
s=H.at(r)
P.cK(q,q,this,t,u.l.a(s))}},
cD:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.f===$.D){a.$1(b)
return}P.hZ(q,q,this,a,b,u.o,c)}catch(r){t=H.aa(r)
s=H.at(r)
P.cK(q,q,this,t,u.l.a(s))}},
es:function(a,b){return new P.f2(this,b.i("0()").a(a),b)},
ba:function(a){return new P.f1(this,u.M.a(a))},
eu:function(a,b){return new P.f3(this,b.i("~(0)").a(a),b)},
h:function(a,b){return null},
cB:function(a,b){b.i("0()").a(a)
if($.D===C.f)return a.$0()
return P.hY(null,null,this,a,b)},
bo:function(a,b,c,d){c.i("@<0>").B(d).i("1(2)").a(a)
d.a(b)
if($.D===C.f)return a.$1(b)
return P.hZ(null,null,this,a,b,c,d)},
f7:function(a,b,c,d,e,f){d.i("@<0>").B(e).B(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.D===C.f)return a.$2(b,c)
return P.ka(null,null,this,a,b,c,d,e,f)},
cw:function(a,b,c,d){return b.i("@<0>").B(c).B(d).i("1(2,3)").a(a)}}
P.f2.prototype={
$0:function(){return this.a.cB(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.f1.prototype={
$0:function(){return this.a.cC(this.b)},
$S:2}
P.f3.prototype={
$1:function(a){var t=this.c
return this.a.cD(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.cs.prototype={
gw:function(a){var t=this,s=new P.b9(t,t.r,H.n(t).i("b9<1>"))
s.c=t.e
return s},
gk:function(a){return this.a},
I:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.J.a(t[b])!=null}else{s=this.df(b)
return s}},
df:function(a){var t=this.d
if(t==null)return!1
return this.bR(t[this.bJ(a)],a)>=0},
l:function(a,b){var t,s,r=this
H.n(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.bG(t==null?r.b=P.fH():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.bG(s==null?r.c=P.fH():s,b)}else return r.d5(b)},
d5:function(a){var t,s,r,q=this
H.n(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.fH()
s=q.bJ(a)
r=t[s]
if(r==null)t[s]=[q.aR(a)]
else{if(q.bR(r,a)>=0)return!1
r.push(q.aR(a))}return!0},
bG:function(a,b){H.n(this).c.a(b)
if(u.J.a(a[b])!=null)return!1
a[b]=this.aR(b)
return!0},
aR:function(a){var t=this,s=new P.dz(H.n(t).c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=1073741823&t.r+1
return s},
bJ:function(a){return J.a3(a)&1073741823},
bR:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a2(a[s].a,b))return s
return-1}}
P.dz.prototype={}
P.b9.prototype={
gt:function(){return this.d},
n:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.c(P.b0(s))
else{s=t.c
if(s==null){t.sbH(null)
return!1}else{t.sbH(t.$ti.c.a(s.a))
t.c=t.c.b
return!0}}},
sbH:function(a){this.d=this.$ti.c.a(a)},
$iE:1}
P.bZ.prototype={}
P.c3.prototype={$it:1,$im:1,$ir:1}
P.q.prototype={
gw:function(a){return new H.b5(a,this.gk(a),H.ah(a).i("b5<q.E>"))},
C:function(a,b){return this.h(a,b)},
S:function(a,b){return H.cd(a,b,null,H.ah(a).i("q.E"))},
a_:function(a,b){var t,s=H.l([],H.ah(a).i("w<q.E>"))
C.a.sk(s,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.A(s,t,this.h(a,t))
return s},
a6:function(a){return this.a_(a,!0)},
p:function(a,b){var t,s=H.ah(a)
s.i("r<q.E>").a(b)
t=H.l([],s.i("w<q.E>"))
C.a.sk(t,C.b.p(this.gk(a),b.gk(b)))
C.a.aj(t,0,this.gk(a),a)
C.a.aj(t,this.gk(a),t.length,b)
return t},
by:function(a,b,c){var t,s,r,q=this.gk(a)
P.d6(b,c,q)
t=c-b
s=H.l([],H.ah(a).i("w<q.E>"))
C.a.sk(s,t)
for(r=0;r<t;++r)C.a.A(s,r,this.h(a,b+r))
return s},
aG:function(a,b){var t
for(t=0;t<this.gk(a);++t)if(J.a2(this.h(a,t),b))return t
return-1},
j:function(a){return P.fx(a,"[","]")}}
P.c4.prototype={}
P.et.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.b(a)
s.a=t+": "
s.a+=H.b(b)},
$S:11}
P.Z.prototype={
as:function(a,b){var t,s
H.n(this).i("~(Z.K,Z.V)").a(b)
for(t=J.aV(this.gaa());t.n();){s=t.gt()
b.$2(s,this.h(0,s))}},
gk:function(a){return J.a4(this.gaa())},
j:function(a){return P.hs(this)},
$iaj:1}
P.cx.prototype={
H:function(a,b){var t
for(t=J.aV(H.n(this).i("m<1>").a(b));t.n();)this.l(0,t.gt())},
j:function(a){return P.fx(this,"{","}")},
S:function(a,b){return H.hA(this,b,H.n(this).c)},
C:function(a,b){var t,s,r,q=this,p="index"
P.bc(b,p,u.S)
P.ap(b,p)
for(t=P.jA(q,q.r,H.n(q).c),s=0;t.n();){r=t.d
if(b===s)return r;++s}throw H.c(P.bm(b,q,p,null,s))},
$it:1,
$im:1,
$ihz:1}
P.ct.prototype={}
P.F.prototype={}
P.Y.prototype={}
P.ac.prototype={
p:function(a,b){return new P.ac(C.b.p(this.a,u.d.a(b).gds()))},
m:function(a,b){return new P.ac(this.a-u.d.a(b).a)},
q:function(a,b){return new P.ac(C.e.E(this.a*b))},
a7:function(a,b){if(b===0)throw H.c(new P.em())
return new P.ac(C.b.a7(this.a,b))},
W:function(a,b){return C.b.W(this.a,u.d.a(b).gds())},
G:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a},
gv:function(a){return C.b.gv(this.a)},
j:function(a){var t,s,r,q=new P.ed(),p=this.a
if(p<0)return"-"+new P.ac(0-p).j(0)
t=q.$1(C.b.u(p,6e7)%60)
s=q.$1(C.b.u(p,1e6)%60)
r=new P.ec().$1(p%1e6)
return""+C.b.u(p,36e8)+":"+H.b(t)+":"+H.b(s)+"."+H.b(r)},
gat:function(a){return this.a<0},
aD:function(a){return new P.ac(Math.abs(this.a))}}
P.ec.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.ed.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.B.prototype={
gav:function(){return H.at(this.$thrownJsError)}}
P.bN.prototype={
j:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.cU(t)
return"Assertion failed"}}
P.d1.prototype={
j:function(a){return"Throw of null."}}
P.ab.prototype={
gaW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaV:function(){return""},
j:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+o
s=p.gaW()+n+t
if(!p.a)return s
r=p.gaV()
q=P.cU(p.b)
return s+r+": "+q}}
P.bs.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.b(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.b(r)
else if(s>r)t=": Not in range "+H.b(r)+".."+H.b(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.b(r)}return t}}
P.cX.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var t,s=H.I(this.b)
if(typeof s!=="number")return s.ai()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.b(t)},
gk:function(a){return this.f}}
P.di.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.dg.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ar.prototype={
j:function(a){return"Bad state: "+this.a}}
P.cQ.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cU(t)+"."}}
P.d3.prototype={
j:function(a){return"Out of Memory"},
gav:function(){return null},
$iB:1}
P.cb.prototype={
j:function(a){return"Stack Overflow"},
gav:function(){return null},
$iB:1}
P.cR.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.eP.prototype={
j:function(a){return"Exception: "+this.a}}
P.ei.prototype={
j:function(a){var t,s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){t=q.length>78?C.c.a0(q,0,75)+"...":q
return r+"\n"+t}else return r}}
P.em.prototype={
j:function(a){return"IntegerDivisionByZeroException"}}
P.an.prototype={}
P.a1.prototype={}
P.m.prototype={
aJ:function(a,b){var t=H.n(this)
return new H.aB(this,t.i("F(m.E)").a(b),t.i("aB<m.E>"))},
a_:function(a,b){return P.hr(this,b,H.n(this).i("m.E"))},
a6:function(a){return this.a_(a,!0)},
gk:function(a){var t,s=this.gw(this)
for(t=0;s.n();)++t
return t},
S:function(a,b){return H.hA(this,b,H.n(this).i("m.E"))},
gab:function(a){var t,s=this.gw(this)
if(!s.n())throw H.c(H.hn())
t=s.gt()
if(s.n())throw H.c(H.jb())
return t},
C:function(a,b){var t,s,r,q="index"
P.bc(b,q,u.S)
P.ap(b,q)
for(t=this.gw(this),s=0;t.n();){r=t.gt()
if(b===s)return r;++s}throw H.c(P.bm(b,this,q,null,s))},
j:function(a){return P.j9(this,"(",")")}}
P.E.prototype={}
P.r.prototype={$it:1,$im:1}
P.aj.prototype={}
P.G.prototype={
gv:function(a){return P.C.prototype.gv.call(this,this)},
j:function(a){return"null"}}
P.z.prototype={}
P.C.prototype={constructor:P.C,$iC:1,
G:function(a,b){return this===b},
gv:function(a){return H.br(this)},
j:function(a){return"Instance of '"+H.b(H.eB(this))+"'"},
toString:function(){return this.j(this)}}
P.a7.prototype={}
P.dG.prototype={
j:function(a){return""},
$ia7:1}
P.o.prototype={$ifB:1}
P.b6.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.k.prototype={}
W.bM.prototype={
j:function(a){return String(a)},
$ibM:1}
W.cO.prototype={
j:function(a){return String(a)}}
W.bd.prototype={$ibd:1}
W.aW.prototype={$iaW:1}
W.aX.prototype={
aK:function(a,b){return a.getContext(b)},
$iaX:1}
W.aG.prototype={
bi:function(a,b,c,d){a.fillText(b,c,d)},
$iaG:1}
W.am.prototype={
gk:function(a){return a.length}}
W.bh.prototype={
O:function(a,b){var t=$.is(),s=t[b]
if(typeof s=="string")return s
s=this.ee(a,b)
t[b]=s
return s},
ee:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.j0()+b
if(t in a)return t
return b},
Y:function(a,b,c,d){a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.e6.prototype={}
W.b2.prototype={$ib2:1}
W.eb.prototype={
j:function(a){return String(a)}}
W.bT.prototype={
j:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.aF(b)
t=a.left==t.gK(b)&&a.top==t.gF(b)&&a.width==t.gM(b)&&a.height==t.gD(b)}else t=!1
return t},
gv:function(a){return W.hI(J.a3(a.left),J.a3(a.top),J.a3(a.width),J.a3(a.height))},
gce:function(a){return a.bottom},
gD:function(a){return a.height},
gK:function(a){return a.left},
gcA:function(a){return a.right},
gF:function(a){return a.top},
gM:function(a){return a.width},
$iaq:1}
W.ci.prototype={
gk:function(a){return this.b.length},
h:function(a,b){var t
H.I(b)
t=this.b
if(b<0||b>=t.length)return H.d(t,b)
return u.h.a(t[b])},
gw:function(a){var t=this.a6(this)
return new J.au(t,t.length,H.P(t).i("au<1>"))},
gaF:function(a){var t=this.a.firstElementChild
if(t==null)throw H.c(P.db("No elements"))
return t}}
W.u.prototype={
ger:function(a){return new W.ds(a)},
gcg:function(a){return new W.ci(a,a.children)},
j:function(a){return a.localName},
T:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.hh
if(t==null){t=H.l([],u.i)
s=new W.c9(t)
C.a.l(t,W.hG(null))
C.a.l(t,W.hL())
$.hh=s
d=s}else d=t
t=$.hg
if(t==null){t=new W.cG(d)
$.hg=t
c=t}else{t.a=d
c=t}}if($.aH==null){t=document
s=t.implementation.createHTMLDocument("")
$.aH=s
$.fv=s.createRange()
s=$.aH.createElement("base")
u.cR.a(s)
s.href=t.baseURI
$.aH.head.appendChild(s)}t=$.aH
if(t.body==null){s=t.createElement("body")
t.body=u.t.a(s)}t=$.aH
if(u.t.b(a))r=t.body
else{r=t.createElement(a.tagName)
$.aH.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.I(C.a5,a.tagName)){$.fv.selectNodeContents(r)
q=$.fv.createContextualFragment(b)}else{r.innerHTML=b
q=$.aH.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}t=$.aH.body
if(r==null?t!=null:r!==t)J.h3(r)
c.br(q)
document.adoptNode(q)
return q},
eI:function(a,b,c){return this.T(a,b,c,null)},
aL:function(a,b){a.textContent=null
a.appendChild(this.T(a,b,null,null))},
gcE:function(a){return a.tagName},
gcu:function(a){return new W.bz(a,"click",!1,u.C)},
$iu:1}
W.ee.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:13}
W.e.prototype={$ie:1}
W.A.prototype={
d6:function(a,b,c,d){return a.addEventListener(b,H.bI(u.U.a(c),1),d)},
dZ:function(a,b,c,d){return a.removeEventListener(b,H.bI(u.U.a(c),1),d)},
$iA:1}
W.cW.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={
gk:function(a){return a.length},
h:function(a,b){H.I(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.bm(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ibo:1,
$im:1,
$ir:1,
$iaJ:1}
W.bl.prototype={$ibl:1}
W.d_.prototype={
j:function(a){return String(a)},
$id_:1}
W.S.prototype={$iS:1}
W.O.prototype={
gab:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.c(P.db("No elements"))
if(s>1)throw H.c(P.db("More than one element"))
return t.firstChild},
H:function(a,b){var t,s,r,q
u.eh.a(b)
if(b instanceof W.O){t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return}for(t=b.gw(b),s=this.a;t.n();)s.appendChild(t.gt())},
gw:function(a){var t=this.a.childNodes
return new W.b3(t,t.length,H.ah(t).i("b3<a5.E>"))},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var t
H.I(b)
t=this.a.childNodes
if(b<0||b>=t.length)return H.d(t,b)
return t[b]}}
W.j.prototype={
bn:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
j:function(a){var t=a.nodeValue
return t==null?this.cN(a):t},
$ij:1}
W.c8.prototype={
gk:function(a){return a.length},
h:function(a,b){H.I(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.bm(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ibo:1,
$im:1,
$ir:1}
W.d8.prototype={
gk:function(a){return a.length}}
W.ce.prototype={
T:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=W.j1("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.O(s).H(0,new W.O(t))
return s}}
W.dd.prototype={
T:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.T(t.createElement("table"),b,c,d)
t.toString
t=new W.O(t)
r=t.gab(t)
r.toString
t=new W.O(r)
q=t.gab(t)
s.toString
q.toString
new W.O(s).H(0,new W.O(q))
return s}}
W.de.prototype={
T:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.T(t.createElement("table"),b,c,d)
t.toString
t=new W.O(t)
r=t.gab(t)
s.toString
r.toString
new W.O(s).H(0,new W.O(r))
return s}}
W.bu.prototype={$ibu:1}
W.ak.prototype={}
W.bv.prototype={
ah:function(a,b){u.c4.a(b)
this.bQ(a)
return this.e_(a,W.i1(b,u.di))},
e_:function(a,b){return a.requestAnimationFrame(H.bI(u.c4.a(b),1))},
bQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ieJ:1}
W.bw.prototype={$ibw:1}
W.cl.prototype={
j:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.aF(b)
t=a.left==t.gK(b)&&a.top==t.gF(b)&&a.width==t.gM(b)&&a.height==t.gD(b)}else t=!1
return t},
gv:function(a){return W.hI(J.a3(a.left),J.a3(a.top),J.a3(a.width),J.a3(a.height))},
gD:function(a){return a.height},
gM:function(a){return a.width}}
W.cu.prototype={
gk:function(a){return a.length},
h:function(a,b){H.I(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.bm(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ibo:1,
$im:1,
$ir:1}
W.dn.prototype={
as:function(a,b){var t,s,r,q,p
u.eA.a(b)
for(t=this.gaa(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.N)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gaa:function(){var t,s,r,q,p=this.a.attributes,o=H.l([],u.s)
for(t=p.length,s=u.h9,r=0;r<t;++r){if(r>=p.length)return H.d(p,r)
q=s.a(p[r])
if(q.namespaceURI==null)C.a.l(o,q.name)}return o}}
W.ds.prototype={
h:function(a,b){return this.a.getAttribute(H.v(b))},
gk:function(a){return this.gaa().length}}
W.fw.prototype={}
W.cn.prototype={
bm:function(a,b,c,d){var t=this.$ti
t.i("~(1)").a(a)
u.M.a(c)
return W.bB(this.a,this.b,a,!1,t.c)}}
W.bz.prototype={}
W.co.prototype={
aq:function(){var t,s,r=this,q=r.b
if(q==null)return null
t=r.d
s=t!=null
if(s){u.U.a(t)
if(s)J.iJ(q,r.c,t,r.e)}r.b=null
r.sdF(null)
return null},
sdF:function(a){this.d=u.U.a(a)}}
W.eO.prototype={
$1:function(a){return this.a.$1(u.E.a(a))},
$S:21}
W.b8.prototype={
d1:function(a){var t
if($.dv.a===0){for(t=0;t<262;++t)$.dv.A(0,C.a4[t],W.lo())
for(t=0;t<12;++t)$.dv.A(0,C.r[t],W.lp())}},
ae:function(a){return $.iF().I(0,W.bU(a))},
a3:function(a,b,c){var t=$.dv.h(0,H.b(W.bU(a))+"::"+b)
if(t==null)t=$.dv.h(0,"*::"+b)
if(t==null)return!1
return H.dP(t.$4(a,b,c,this))},
$iW:1}
W.a5.prototype={
gw:function(a){return new W.b3(a,this.gk(a),H.ah(a).i("b3<a5.E>"))}}
W.c9.prototype={
ae:function(a){return C.a.cc(this.a,new W.ew(a))},
a3:function(a,b,c){return C.a.cc(this.a,new W.ev(a,b,c))},
$iW:1}
W.ew.prototype={
$1:function(a){return u.e.a(a).ae(this.a)},
$S:15}
W.ev.prototype={
$1:function(a){return u.e.a(a).a3(this.a,this.b,this.c)},
$S:15}
W.cy.prototype={
d3:function(a,b,c,d){var t,s,r
this.a.H(0,c)
t=b.aJ(0,new W.f4())
s=b.aJ(0,new W.f5())
this.b.H(0,t)
r=this.c
r.H(0,C.a6)
r.H(0,s)},
ae:function(a){return this.a.I(0,W.bU(a))},
a3:function(a,b,c){var t=this,s=W.bU(a),r=t.c
if(r.I(0,H.b(s)+"::"+b))return t.d.ep(c)
else if(r.I(0,"*::"+b))return t.d.ep(c)
else{r=t.b
if(r.I(0,H.b(s)+"::"+b))return!0
else if(r.I(0,"*::"+b))return!0
else if(r.I(0,H.b(s)+"::*"))return!0
else if(r.I(0,"*::*"))return!0}return!1},
$iW:1}
W.f4.prototype={
$1:function(a){return!C.a.I(C.r,H.v(a))},
$S:16}
W.f5.prototype={
$1:function(a){return C.a.I(C.r,H.v(a))},
$S:16}
W.dI.prototype={
a3:function(a,b,c){if(this.cT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.I(0,b)
return!1}}
W.f8.prototype={
$1:function(a){return"TEMPLATE::"+H.b(H.v(a))},
$S:6}
W.dH.prototype={
ae:function(a){var t
if(u.ew.b(a))return!1
t=u.g7.b(a)
if(t&&W.bU(a)==="foreignObject")return!1
if(t)return!0
return!1},
a3:function(a,b,c){if(b==="is"||C.c.aw(b,"on"))return!1
return this.ae(a)},
$iW:1}
W.b3.prototype={
n:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.sbX(J.f(t.a,s))
t.c=s
return!0}t.sbX(null)
t.c=r
return!1},
gt:function(){return this.d},
sbX:function(a){this.d=this.$ti.c.a(a)},
$iE:1}
W.dq.prototype={$iA:1,$ieJ:1}
W.W.prototype={}
W.dF.prototype={$ijq:1}
W.cG.prototype={
br:function(a){var t=this,s=new W.fb(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
ap:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.h3(a)
else b.removeChild(a)},
e2:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.iK(a)
m=n.a.getAttribute("is")
u.h.a(a)
t=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='previousSibling'||i.name=='previousSibling'||i.id=='children'||i.name=='children')return true}return false}(a)
o=H.ag(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.aa(q)}s="element unprintable"
try{s=J.bb(a)}catch(q){H.aa(q)}try{r=W.bU(a)
this.e1(u.h.a(a),b,o,s,r,u.f.a(n),H.v(m))}catch(q){if(H.aa(q) instanceof P.ab)throw q
else{this.ap(a,b)
window
p="Removing corrupted element "+H.b(s)
if(typeof console!="undefined")window.console.warn(p)}}},
e1:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.ap(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.ae(a)){n.ap(a,b)
window
t="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.a3(a,"is",g)){n.ap(a,b)
window
t="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gaa()
s=H.l(t.slice(0),H.P(t).i("w<1>"))
for(r=f.gaa().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
p=n.a
o=J.iP(q)
H.v(q)
if(!p.a3(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.b(e)+" "+q+'="'+H.b(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.aW.b(a))n.br(a.content)},
$ije:1}
W.fb.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.e2(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.ap(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.db("Corrupt HTML")
throw H.c(q)}}catch(o){H.aa(o)
q=r.a(t)
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:35}
W.dp.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dN.prototype={}
W.dO.prototype={}
P.cV.prototype={
gaY:function(){var t=this.b,s=H.n(t)
return new H.c5(new H.aB(t,s.i("F(q.E)").a(new P.eg()),s.i("aB<q.E>")),s.i("u(q.E)").a(new P.eh()),s.i("c5<q.E,u>"))},
gk:function(a){return J.a4(this.gaY().a)},
h:function(a,b){var t
H.I(b)
t=this.gaY()
return t.b.$1(J.cN(t.a,b))},
gw:function(a){var t=P.hr(this.gaY(),!1,u.h)
return new J.au(t,t.length,H.P(t).i("au<1>"))}}
P.eg.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:13}
P.eh.prototype={
$1:function(a){return u.h.a(u.A.a(a))},
$S:19}
P.dy.prototype={
N:function(a){if(a<=0||a>4294967296)throw H.c(P.hw("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
V:function(){return Math.random()},
$ifD:1}
P.dC.prototype={
d2:function(a){var t,s,r,q,p,o,n,m=this,l=4294967296,k=a<0?-1:0
do{t=(a&4294967295)>>>0
a=C.b.u(a-t,l)
s=(a&4294967295)>>>0
a=C.b.u(a-s,l)
r=((~t&4294967295)>>>0)+(t<<21>>>0)
q=(r&4294967295)>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.b.u(r-q,l)&4294967295
r=((q^(q>>>24|s<<8))>>>0)*265
t=(r&4294967295)>>>0
s=((s^s>>>24)>>>0)*265+C.b.u(r-t,l)&4294967295
r=((t^(t>>>14|s<<18))>>>0)*21
t=(r&4294967295)>>>0
s=((s^s>>>14)>>>0)*21+C.b.u(r-t,l)&4294967295
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=(r&4294967295)>>>0
p=C.b.u(r-q,l)
r=m.a*1037
o=m.a=(r&4294967295)>>>0
n=(m.b*1037+C.b.u(r-o,l)&4294967295)>>>0
m.b=n
o=(o^q)>>>0
m.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p&4294967295)>>>0
m.b=p}while(a!==k)
if(p===0&&o===0)m.a=23063
m.a2()
m.a2()
m.a2()
m.a2()},
a2:function(){var t=this,s=t.a,r=4294901760*s,q=(r&4294967295)>>>0,p=55905*s,o=(p&4294967295)>>>0,n=o+q+t.b
s=(n&4294967295)>>>0
t.a=s
t.b=(C.b.u(p-o+(r-q)+(n-s),4294967296)&4294967295)>>>0},
N:function(a){var t,s,r,q=this
if(a<=0||a>4294967296)throw H.c(P.hw("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){q.a2()
return(q.a&t)>>>0}do{q.a2()
s=q.a
r=s%a}while(s-r+a>=4294967296)
return r},
V:function(){var t,s=this
s.a2()
t=s.a
s.a2()
return((t&67108863)*134217728+(s.a&134217727))/9007199254740992},
$ifD:1}
P.L.prototype={
j:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
G:function(a,b){if(b==null)return!1
return b instanceof P.L&&this.a==b.a&&this.b==b.b},
gv:function(a){var t=J.a3(this.a),s=J.a3(this.b)
return P.hH(P.cr(P.cr(0,t),s))},
p:function(a,b){var t,s,r,q,p=this.$ti
p.a(b)
t=this.a
s=b.a
if(typeof t!=="number")return t.p()
if(typeof s!=="number")return H.i(s)
r=this.b
q=b.b
if(typeof r!=="number")return r.p()
if(typeof q!=="number")return H.i(q)
return new P.L(t+s,r+q,p)},
m:function(a,b){var t,s,r,q,p=this.$ti
p.a(b)
t=this.a
s=b.a
if(typeof t!=="number")return t.m()
if(typeof s!=="number")return H.i(s)
r=this.b
q=b.b
if(typeof r!=="number")return r.m()
if(typeof q!=="number")return H.i(q)
return new P.L(t-s,r-q,p)},
q:function(a,b){var t,s,r,q=this.a
if(typeof q!=="number")return q.q()
if(typeof b!=="number")return H.i(b)
t=this.$ti
s=t.c
q=s.a(q*b)
r=this.b
if(typeof r!=="number")return r.q()
return new P.L(q,s.a(r*b),t)},
cm:function(a){var t,s,r,q
this.$ti.a(a)
t=this.a
s=a.a
if(typeof t!=="number")return t.m()
if(typeof s!=="number")return H.i(s)
r=t-s
s=this.b
t=a.b
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.i(t)
q=s-t
return Math.sqrt(r*r+q*q)}}
P.dD.prototype={
gcA:function(a){var t=this
return t.gK(t)+t.gM(t)},
gce:function(a){var t=this
return t.gF(t)+t.gD(t)},
j:function(a){var t=this
return"Rectangle ("+t.gK(t)+", "+t.gF(t)+") "+t.gM(t)+" x "+t.gD(t)},
G:function(a,b){var t,s=this
if(b==null)return!1
if(u.q.b(b)){t=J.aF(b)
t=s.gK(s)===t.gK(b)&&s.gF(s)===t.gF(b)&&s.gK(s)+s.gM(s)===t.gcA(b)&&s.gF(s)+s.gD(s)===t.gce(b)}else t=!1
return t},
gv:function(a){var t=this,s=C.b.gv(t.gK(t)),r=C.b.gv(t.gF(t)),q=C.b.gv(t.gK(t)+t.gM(t)),p=C.b.gv(t.gF(t)+t.gD(t))
return P.hH(P.cr(P.cr(P.cr(P.cr(0,s),r),q),p))}}
P.aq.prototype={
gK:function(a){return this.a},
gF:function(a){return this.b},
gM:function(a){return this.c},
gD:function(a){return this.d}}
P.c7.prototype={
gM:function(a){return this.c},
sM:function(a,b){var t=this.$ti.c
t.a(b)
this.sem(0,b<0?t.a(-b*0):b)},
gD:function(a){return this.d},
sD:function(a,b){var t=this.$ti.c
t.a(b)
this.sdE(0,b<0?t.a(-b*0):b)},
sK:function(a,b){this.a=this.$ti.c.a(b)},
sF:function(a,b){this.b=this.$ti.c.a(b)},
sem:function(a,b){this.c=this.$ti.c.a(b)},
sdE:function(a,b){this.d=this.$ti.c.a(b)},
$iaq:1,
gK:function(a){return this.a},
gF:function(a){return this.b}}
P.bt.prototype={$ibt:1}
P.h.prototype={
gcg:function(a){return new P.cV(a,new W.O(a))},
T:function(a,b,c,d){var t,s,r,q,p,o=H.l([],u.i)
C.a.l(o,W.hG(null))
C.a.l(o,W.hL())
C.a.l(o,new W.dH())
c=new W.cG(new W.c9(o))
t='<svg version="1.1">'+b+"</svg>"
o=document
s=o.body
r=(s&&C.x).eI(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.O(r)
p=o.gab(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
gcu:function(a){return new W.bz(a,"click",!1,u.C)},
$ih:1}
T.d2.prototype={
sbZ:function(a){var t,s
this.fx=a
t=Math.log(a)
s=$.fn()
if(typeof s!=="number")return H.i(s)
this.fy=C.i.E(t/s)},
eK:function(a){var t,s,r=this,q=typeof a=="number"
if(q&&isNaN(a))return r.k1.Q
if(q)q=a==1/0||a==-1/0
else q=!1
if(q){q=J.h2(a)?r.a:r.b
return q+r.k1.z}q=J.ia(a)
t=q.gat(a)?r.a:r.b
s=r.r1
s.a+=t
t=q.aD(a)
if(r.z)r.dA(H.y(t))
else r.aX(t)
t=s.a+=q.gat(a)?r.c:r.d
s.a=""
return t.charCodeAt(0)==0?t:t},
dA:function(a){var t,s,r,q,p=this
if(a===0){p.aX(a)
p.bU(0)
return}t=Math.log(a)
s=$.fn()
if(typeof s!=="number")return H.i(s)
r=C.i.bj(t/s)
q=a/Math.pow(10,r)
t=p.ch
if(t>1&&t>p.cx)for(;C.b.X(r,t)!==0;){q*=10;--r}else{t=p.cx
if(t<1){++r
q/=10}else{--t
r-=t
q*=Math.pow(10,t)}}p.aX(q)
p.bU(r)},
bU:function(a){var t=this,s=t.k1,r=t.r1,q=r.a+=s.x
if(a<0){a=-a
r.a=q+s.r}else if(t.y)r.a=q+s.f
s=t.dx
q=C.b.j(a)
if(t.rx===0)r.a+=C.c.cv(q,s,"0")
else t.eb(s,q)},
bT:function(a){var t=J.ia(a)
if(t.gat(a)&&!J.h2(t.aD(a)))throw H.c(P.dW("Internal error: expected positive number, got "+H.b(a)))
return typeof a=="number"?t.bj(a):t.a7(a,1)},
e0:function(a){var t,s
if(typeof a=="number")if(a==1/0||a==-1/0)return $.fo()
else return C.e.E(a)
else{t=J.as(a)
if(t.f4(a,1)===0)return a
else{s=C.e.E(J.iN(t.m(a,this.bT(a))))
return s===0?a:t.p(a,s)}}},
aX:function(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.cy
if(typeof a0=="number")t=a0==1/0||a0==-1/0
else t=!1
s=J.as(a0)
if(t){r=s.a5(a0)
q=0
p=0
o=0}else{r=b.bT(a0)
n=s.m(a0,r)
if(J.h5(n)!==0){r=a0
n=0}H.fQ(a)
o=H.I(Math.pow(10,a))
m=o*b.fx
l=J.h5(b.e0(J.fp(n,m)))
if(l>=m){r=J.bJ(r,1)
l-=m}p=C.b.a7(l,o)
q=C.b.X(l,o)}if(typeof r=="number"&&r>$.fo()){t=Math.log(r)
s=$.fn()
if(typeof s!=="number")return H.i(s)
s=C.i.cf(t/s)
t=$.iu()
if(typeof t!=="number")return H.i(t)
k=s-t
j=C.e.E(Math.pow(10,k))
if(j===0)j=Math.pow(10,k)
i=C.c.q("0",C.b.a5(k))
r=C.i.a5(r/j)}else i=""
h=p===0?"":C.b.j(p)
g=b.dQ(r)
f=g+(g.length===0?h:C.c.cv(h,b.fy,"0"))+i
e=f.length
if(typeof a!=="number")return a.W()
if(a>0){t=b.db
if(typeof t!=="number")return t.W()
d=t>0||q>0}else d=!1
if(e!==0||b.cx>0){f=C.c.q("0",b.cx-e)+f
e=f.length
for(t=b.r1,c=0;c<e;++c){t.a+=H.fC(C.c.am(f,c)+b.rx)
b.dD(e,c)}}else if(!d)b.r1.a+=b.k1.e
if(b.x||d)b.r1.a+=b.k1.b
b.dB(C.b.j(q+o))},
dQ:function(a){var t,s=J.aT(a)
if(s.G(a,0))return""
t=s.j(a)
return C.c.aw(t,"-")?C.c.ak(t,1):t},
dB:function(a){var t,s,r,q=a.length,p=this.db
while(!0){t=q-1
if(C.c.eF(a,t)===48){if(typeof p!=="number")return p.p()
s=q>p+1}else s=!1
if(!s)break
q=t}for(p=this.r1,r=1;r<q;++r)p.a+=H.fC(C.c.am(a,r)+this.rx)},
eb:function(a,b){var t,s,r,q
for(t=b.length,s=a-t,r=this.r1,q=0;q<s;++q)r.a+=this.k1.e
for(q=0;q<t;++q)r.a+=H.fC(C.c.am(b,q)+this.rx)},
dD:function(a,b){var t,s=this,r=a-b
if(r<=1||s.e<=0)return
t=s.f
if(r===t+1)s.r1.a+=s.k1.c
else if(r>t&&C.b.X(r-t,s.e)===1)s.r1.a+=s.k1.c},
e8:function(a){var t,s,r=this
if(a==null)return
r.go=H.lF(a," ","\xa0")
t=r.k3
if(t==null)t=r.k2
s=new T.cB(a)
s.n()
new T.f_(r,s,t).eZ()
t=r.k4
s=t==null
if(!s||!1){if(s){t=$.i8.h(0,r.k2.toUpperCase())
t=r.k4=t==null?$.i8.h(0,"DEFAULT"):t}r.cy=r.db=t}},
j:function(a){return"NumberFormat("+H.b(this.id)+", "+H.b(this.go)+")"},
sdw:function(a){this.f=H.I(a)}}
T.eA.prototype={
$1:function(a){return a.ch},
$S:20}
T.f_.prototype={
eZ:function(){var t,s,r,q,p,o=this,n=o.a
n.b=o.az()
t=o.dW()
s=o.az()
n.d=s
r=o.b
if(r.c===";"){r.n()
n.a=o.az()
s=new T.cB(t)
for(;s.n();){q=s.c
p=r.c
if(p!=q&&p!=null)throw H.c(P.aI("Positive and negative trunks must be the same",t))
r.n()}n.c=o.az()}else{n.a=n.a+n.b
n.c=s+n.c}},
az:function(){var t=new P.b6(""),s=this.e=!1,r=this.b
while(!0)if(!(this.f_(t)?r.n():s))break
s=t.a
return s.charCodeAt(0)==0?s:s},
f_:function(a){var t,s,r=this,q="Too many percent/permill",p=r.b,o=p.c
if(o==null)return!1
if(o==="'"){t=p.b
s=p.a
if((t>=s.length?null:s[t])==="'"){p.n()
a.a+="'"}else r.e=!r.e
return!0}if(r.e)a.a+=o
else switch(o){case"#":case"0":case",":case".":case";":return!1
case"\xa4":a.a+=r.c
break
case"%":p=r.a
t=p.fx
if(t!==1&&t!==100)throw H.c(P.aI(q,p))
p.sbZ(100)
a.a+=p.k1.d
break
case"\u2030":p=r.a
t=p.fx
if(t!==1&&t!==1000)throw H.c(P.aI(q,p))
p.sbZ(1000)
a.a+=p.k1.y
break
default:a.a+=o}return!0},
dW:function(){var t,s,r,q,p,o,n,m=this,l=new P.b6(""),k=m.b,j=!0
while(!0){if(!(k.c!=null&&j))break
j=m.f0(l)}t=m.x
if(t===0&&m.r>0&&m.f>=0){s=m.f
if(s===0)s=1
m.y=m.r-s
m.r=s-1
t=m.x=1}r=m.f
if(!(r<0&&m.y>0)){if(r>=0){q=m.r
q=r<q||r>q+t}else q=!1
q=q||m.z===0}else q=!0
if(q)throw H.c(P.aI('Malformed pattern "'+k.a+'"',null))
k=m.r
t=k+t
p=t+m.y
q=m.a
o=r>=0
n=o?p-r:0
q.cy=n
if(o){t-=r
q.db=t
if(t<0)q.db=0}t=q.cx=(o?r:p)-k
if(q.z){q.ch=k+t
if(n===0&&t===0)q.cx=1}q.sdw(Math.max(0,m.z))
if(!q.r)q.e=q.f
k=m.f
q.x=k===0||k===p
k=l.a
return k.charCodeAt(0)==0?k:k},
f0:function(a){var t,s,r,q=this,p=null,o=q.b,n=o.c
switch(n){case"#":if(q.x>0)++q.y
else ++q.r
t=q.z
if(t>=0&&q.f<0)q.z=t+1
break
case"0":if(q.y>0)throw H.c(P.aI('Unexpected "0" in pattern "'+o.a,p));++q.x
t=q.z
if(t>=0&&q.f<0)q.z=t+1
break
case",":t=q.z
if(t>0){s=q.a
s.r=!0
s.e=t}q.z=0
break
case".":if(q.f>=0)throw H.c(P.aI('Multiple decimal separators in pattern "'+o.j(0)+'"',p))
q.f=q.r+q.x+q.y
break
case"E":a.a+=H.b(n)
t=q.a
if(t.z)throw H.c(P.aI('Multiple exponential symbols in pattern "'+o.j(0)+'"',p))
t.z=!0
t.dx=0
o.n()
r=o.c
if(r==="+"){a.a+=H.b(r)
o.n()
t.y=!0}for(;s=o.c,s==="0";){a.a+=H.b(s)
o.n();++t.dx}if(q.r+q.x<1||t.dx<1)throw H.c(P.aI('Malformed exponential pattern "'+o.j(0)+'"',p))
return!1
default:return!1}a.a+=H.b(n)
o.n()
return!0}}
T.f6.prototype={
gw:function(a){return this.a}}
T.cB.prototype={
gt:function(){return this.c},
n:function(){var t=this,s=t.b,r=t.a
if(s>=r.length){t.c=null
return!1}t.b=s+1
t.c=r[s]
return!0},
$iE:1}
B.bq.prototype={
j:function(a){return this.a}}
Y.aR.prototype={
j:function(a){return this.b}}
Y.bA.prototype={
cH:function(a){},
seL:function(a){this.d=H.v(a)}}
Y.cw.prototype={
cp:function(a,b){var t,s
if(b==null)b=this.d.length
for(t=this.d,s=t.length;a<b;){if(a<0||a>=s)return H.d(t,a)
t[a].toString;++a}},
eM:function(a){return this.cp(a,null)}}
Y.aZ.prototype={
aQ:function(a,b){var t,s,r,q,p,o,n,m,l=H.b(a)+H.b(b),k=$.h9.h(0,l)
if(k==null){this.go.fillStyle=a
a=H.v(this.go.fillStyle)
t=a.length
if(0>=t)return H.d(a,0)
if(a[0]==="#"){s=C.b.u(t,3)
r=1+s
q=r+s
p=P.fV(C.c.a0(a,1,r),16)
o=P.fV(C.c.a0(a,r,q),16)
n=P.fV(C.c.ak(a,q),16)
if(s===1){if(typeof p!=="number")return p.bv()
p+=p<<4>>>0
if(typeof o!=="number")return o.bv()
o+=o<<4>>>0
if(typeof n!=="number")return n.bv()
n+=n<<4>>>0}k="rgba("+H.b(p)+", "+H.b(o)+", "+H.b(n)+", "+H.b(b)+")"}else{m=H.l(a.split(","),u.s)
C.a.A(m,m.length-1,H.b(b)+")")
k=C.a.eP(m,",")}$.h9.A(0,l,k)}return k},
P:function(a){return H.b(a.h(0,"fontStyle"))+" "+H.b(a.h(0,"fontSize"))+"px "+H.b(a.h(0,"fontFamily"))},
d8:function(){var t,s,r,q,p,o,n,m
this.b=null
for(t=this.k2,s=t.length,r=0;r<t.length;t.length===s||(0,H.N)(t),++r)for(q=t[r].d,p=q.length,o=0;o<q.length;q.length===p||(0,H.N)(q),++o){n=q[o]
n.x=n.db
n.y=n.dx
n.scs(n.cx)
n.sct(n.cy)
n.ch=n.dy
J.aF(n).cS(n)}m=J.f(this.r.h(0,"animation"),"onEnd")
if(m!=null)m.$0()},
a1:function(){var t,s,r,q,p,o,n=this,m="position",l=n.r.h(0,"title"),k=J.K(l),j=!J.a2(k.h(l,m),"none")&&k.h(l,"text")!=null?H.I(J.bJ(J.f(k.h(l,"style"),"fontSize"),12)):0,i=n.y
if(typeof i!=="number")return i.m()
i-=24
t=n.x
if(typeof t!=="number")return t.m()
t-=24
if(i<0)i=-i*0
if(t<0)t=-t*0
n.se6(new P.c7(12,12,i,t,u.m))
if(j>0){switch(k.h(l,m)){case"above":i=n.fx
t=j+12
i.sF(0,i.b+t)
i=n.fx
i.sD(0,i.d-t)
s=12
break
case"middle":i=n.x
if(typeof i!=="number")return i.m()
s=C.b.u(i-j,2)
break
case"below":i=n.x
if(typeof i!=="number")return i.m()
s=i-j-12
i=n.fx
i.sD(0,i.d-(j+12))
break
default:s=0}n.go.font=n.P(u.f.a(k.h(l,"style")))
r=J.dU(n.go.measureText(H.v(k.h(l,"text"))).width)+12
k=n.y
if(typeof k!=="number")return k.m()
q=C.b.u(k-r-12,2)}else{q=0
s=0
r=0}k=r<0?-r*0:r
i=j<0?-j*0:j
n.sef(new P.aq(q,s,k,i,u.G))
k=n.cx
if(k!=null){p=C.e.E(k.offsetWidth)+12
o=C.e.E(k.offsetHeight)+12
switch(J.f(n.r.h(0,"legend"),m)){case"right":k=n.fx
k.sM(0,k.c-p)
break
case"bottom":k=n.fx
k.sD(0,k.d-o)
break
case"left":k=n.fx
k.sK(0,k.a+p)
k=n.fx
k.sM(0,k.c-p)
break
case"top":k=n.fx
k.sF(0,k.b+o)
k=n.fx
k.sD(0,k.d-o)
break}}},
bK:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k=this,j=H.l([],u.au)
for(t=a+1;b<c;){s=k.d.c.a
if(b<0||b>=s.length)return H.d(s,b)
s=s[b]
r=s.c
q=(r&&C.a).h(r,s.a8(t))
s=k.r2
r=k.a4
if(typeof r!=="number")return r.q()
if(typeof s!=="number")return s.p()
p=s+r*b
o=k.r1
n=new Y.X()
n.e=b
H.y(q)
n.r=q
s=q!=null
n.seL(s?k.ch.$1(q):null)
n.b=d
n.c=e
n.x=p
n.y=o
n.ch=9
n.db=p
r=k.r1
if(s){s=k.J
if(typeof s!=="number")return H.i(s)
m=k.bh
if(typeof m!=="number")return H.i(m)
l=k.ry
if(typeof l!=="number")return H.i(l)
if(typeof r!=="number")return r.m()
l=r-(q-s)/m*l
s=l}else s=r
n.dx=s
n.dy=H.y(J.f(J.f(k.r.h(0,"series"),"markers"),"size"))
C.a.l(j,n);++b}return j},
bL:function(a,b){var t,s,r,q,p,o,n,m=this,l=H.l([],u.dm),k=m.d.c.a.length
for(t=u.j;a<b;a=s){s=a+1
r=m.d.b.a
if(s<0||s>=r.length)return H.d(r,s)
q=r[s].c
p=t.a(m.r.h(0,"colors"))
r=J.K(p)
o=H.v(r.h(p,C.b.X(a,r.gk(p))))
n=m.aQ(o,0.5)
C.a.l(l,new Y.cw(q,o,n,m.bK(a,0,k,o,n)))}return l},
aT:function(a){var t,s
if(a.gcj().cG(0,1)){if(this.ch!=null){a.gcr(a)
t=!0}else t=!1
if(t){t=a.gcr(a)
s=this.ch.$1(t)}else s=null
t=this.k2
t=C.a.h((t&&C.a).h(t,a.gcj().m(0,1)).d,a.gfg(a))
t.r=a.gcr(a)
t.d=s}},
dl:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=this
u.D.a(a)
i.a1()
t=i.d.c.a.length
s=a.a
r=a.c
q=s+r
p=a.b
o=s+p
for(p=p>0,r=r>0,n=0;m=i.k2,n<m.length;++n){l=m[n]
if(r){l.cp(s,q)
m=l.d
if(!!m.fixed$length)H.a9(P.a0("removeRange"))
P.d6(s,q,m.length)
m.splice(s,q-s)}if(p){k=i.bK(n,s,o,l.b,l.c)
m=l.d
C.a.aH(m,s,k)
for(j=o;j<t;++j){if(j<0||j>=m.length)return H.d(m,j)
m[j].e=j}}}},
dj:function(a){var t,s,r,q,p,o,n,m,l,k=this
u.D.a(a)
k.a1()
t=a.a-1
s=a.c
r=a.b
q=s>0
if(q){p=k.k3;(p&&C.a).cz(p,t,t+s)}p=r>0
if(p){o=P.hq(r,C.n,!1,u.W)
n=k.k3;(n&&C.a).aH(n,t,o)}if(q){m=t+s
for(l=t;l<m;++l){s=k.k2
if(l<0||l>=s.length)return H.d(s,l)
s[l].eM(0)}s=k.k2;(s&&C.a).cz(s,t,m)}if(p){o=k.bL(t,t+r)
s=k.k2;(s&&C.a).aH(s,t,o)}k.c7()},
ax:function(a){var t,s,r,q,p=this
H.y(a)
t=J.f(p.r.h(0,"animation"),"duration")
if(p.b==null)p.b=a
if(J.bK(t,0)&&a!=null){s=p.b
if(typeof s!=="number")return H.i(s)
r=(a-s)/H.y(t)}else r=1
if(r>=1){for(q=p.k3.length-1;q>=0;--q){s=p.k3
if(q>=s.length)return H.d(s,q)
if(J.a2(s[q],C.n)){s=p.k3;(s&&C.a).A(s,q,C.u)}else{s=p.k3
if(q>=s.length)return H.d(s,q)
if(J.a2(s[q],C.m)){s=p.k3;(s&&C.a).A(s,q,C.l)}}}r=1}p.go.fillStyle=p.r.h(0,"backgroundColor")
p.go.fillRect(0,0,p.y,p.x)
p.k1.clearRect(0,0,p.y,p.x)
p.dq(p.e.$1(r))
p.go.drawImage(p.id.canvas,0,0,p.y,p.x)
p.go.drawImage(p.k1.canvas,0,0,p.y,p.x)
p.dr()
if(r<1)p.a=C.j.ah(window,p.gaU())
else if(a!=null)p.d8()},
dr:function(){var t,s,r,q,p=this,o=p.r.h(0,"title"),n=J.K(o)
if(n.h(o,"text")==null)return
t=p.fy
s=t.a
r=C.b.u(s+(s+t.c),2)
s=t.b
t=t.d
q=p.go
q.font=p.P(u.f.a(n.h(o,"style")))
q.fillStyle=J.f(n.h(o,"style"),"color")
q.textAlign="center"
C.q.bi(q,H.v(n.h(o,"text")),r,s+t-6)},
dG:function(){var t,s=this
s.se7(P.hq(s.bV().length,C.n,!0,u.W))
t=s.cx
if(t!=null){C.k.bn(t)
s.cx=null}if(J.a2(J.f(s.r.h(0,"legend"),"position"),"none"))return
t=s.bM(u.f.a(J.f(s.r.h(0,"legend"),"style")))
s.cx=t
t=t.style
t.lineHeight="180%"
s.c7()
s.k4.appendChild(s.cx)},
dX:function(){var t,s=this,r="position",q="50%",p="translateY(-50%)",o="transform",n="translateX(-50%)",m=s.cx
if(m==null)return
t=m.style
switch(J.f(s.r.h(0,"legend"),r)){case"right":t.right="12px"
t.top=q
C.d.Y(t,C.d.O(t,o),p,"")
break
case"bottom":m=""+(J.a2(J.f(s.r.h(0,"title"),r),"below")&&s.fy.d>0?12+s.fy.d:12)+"px"
t.bottom=m
t.left=q
C.d.Y(t,C.d.O(t,o),n,"")
break
case"left":t.left="12px"
t.top=q
C.d.Y(t,C.d.O(t,o),p,"")
break
case"top":m=""+(J.a2(J.f(s.r.h(0,"title"),r),"above")&&s.fy.d>0?12+s.fy.d:12)+"px"
t.top=m
t.left=q
C.d.Y(t,C.d.O(t,o),n,"")
break}},
c7:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.bV(),a=J.f(c.r.h(0,"legend"),"labelFormatter")
if(a==null)a=Y.ii()
t=c.cy
t.bb(0)
s=c.cx
s.toString
C.k.aL(s,"")
for(s=u.C,r=c.gdJ(),q=s.i("~(1)"),p=u.M,s=s.c,t=t.a,o=c.gdN(),n=c.gdL(),m=u.j,l=0;l<b.length;++l){k=b[l]
j=a.$1(k)
i=m.a(c.r.h(0,"colors"))
h=J.K(i)
h=H.v(h.h(i,C.b.X(l,h.gk(i))))
H.v(j)
g=c.bN(h,j)
if(k!=j)g.title=k
h=g.style
h.cursor="pointer"
h=g.style
h.toString
f=C.d.O(h,"user-select")
h.setProperty(f,"none","")
q.a(r)
p.a(null)
C.a.l(t,W.bB(g,"click",r,!1,s))
C.a.l(t,W.bB(g,"mouseover",q.a(o),!1,s))
C.a.l(t,W.bB(g,"mouseout",q.a(n),!1,s))
h=c.k3
if(l>=h.length)return H.d(h,l)
e=h[l]
if(e===C.l||e===C.m){h=g.style
h.toString
f=C.d.O(h,"opacity")
h.setProperty(f,".4","")}d=J.f(c.r.h(0,"legend"),"position")
h=J.aT(d)
if(h.G(d,"top")||h.G(d,"bottom")){h=g.style
h.display="inline-block"}c.cx.appendChild(g)}},
bV:function(){var t,s=this.d.b
s.toString
s=H.cd(s,1,null,H.n(s).i("q.E"))
t=s.$ti
return new H.a6(s,t.i("o(R.E)").a(new Y.e2()),t.i("a6<R.E,o>")).a6(0)},
dK:function(a){var t,s,r,q,p,o=this
u.V.a(a)
if(!(o.b==null&&o.k2!=null))return
t=u.h.a(W.hS(a.currentTarget))
s=J.h1(t.parentElement)
r=s.aG(s,t)
s=o.k3
if(r<0||r>=s.length)return H.d(s,r)
s=J.a2(s[r],C.u)
q=o.k3
p=q&&C.a
if(s){p.A(q,r,C.m)
s=t.style
s.toString
C.d.Y(s,C.d.O(s,"opacity"),".4","")}else{p.A(q,r,C.n)
s=t.style
s.toString
C.d.Y(s,C.d.O(s,"opacity"),"","")}o.c8(r)
o.bE()
o.a=C.j.ah(window,o.gaU())},
dO:function(a){var t,s,r=this
u.V.a(a)
if(!(r.b==null&&r.k2!=null))return
t=u.h.a(W.hS(a.currentTarget))
s=J.h1(t.parentElement)
r.Q=s.aG(s,t)
r.ax(null)},
dM:function(a){var t=this
u.V.a(a)
if(!(t.b==null&&t.k2!=null))return
t.Q=-1
t.ax(null)},
dT:function(a){var t,s,r,q,p,o,n,m,l,k,j=this
u.V.a(a)
if(!(j.b==null&&j.k2!=null)||a.buttons!==0)return
t=j.go.canvas.getBoundingClientRect()
s=a.clientX
r=a.clientY
q=t.left
if(typeof s!=="number")return s.m()
if(typeof q!=="number")return H.i(q)
p=t.top
if(typeof r!=="number")return r.m()
if(typeof p!=="number")return H.i(p)
o=j.dC(s-q,r-p)
if(o!==j.z){j.z=o
j.ax(null)
if(o>=0){j.el()
j.dx.hidden=!1
s=j.b8(j.z)
r=j.co
if(typeof r!=="number")return H.i(r)
n=s+r
s=j.r1
q=j.ry
if(typeof s!=="number")return s.m()
if(typeof q!=="number")return H.i(q)
p=j.ag
m=j.z
if(m<0||m>=p.length)return H.d(p,m)
m=p[m]
p=j.dx
l=C.b.u(C.e.E(p.offsetHeight),2)
if(typeof m!=="number")return m.m()
k=Math.max(s-q,m-l)
s=C.e.E(p.offsetWidth)
q=j.y
if(typeof q!=="number")return H.i(q)
if(n+s>q)n=Math.max(n-(C.e.E(p.offsetWidth)+2*r),H.fQ(j.r2))
s=p.style
r="translate("+H.b(n)+"px, "+H.b(k)+"px)"
s.toString
C.d.Y(s,C.d.O(s,"transform"),r,"")}else j.dx.hidden=!0}},
dH:function(){var t,s,r,q=this,p=q.dx
if(p!=null){C.k.bn(p)
q.dx=null}t=q.r.h(0,"tooltip")
p=J.K(t)
if(!H.ag(H.dP(p.h(t,"enabled"))))return
s=p.h(t,"labelFormatter")
if(s==null)s=Y.ii()
q.sei(u.Q.a(s))
s=p.h(t,"valueFormatter")
if(s==null)s=Y.lB()
q.sc6(u.w.a(s))
p=q.bM(u.f.a(p.h(t,"style")))
p.hidden=!0
s=p.style
s.left="0"
s=p.style
s.top="0"
s=p.style
s.toString
C.d.Y(s,C.d.O(s,"box-shadow"),"4px 4px 4px rgba(0,0,0,.25)","")
s=p.style
s.toString
C.d.Y(s,C.d.O(s,"transition"),"transform .4s cubic-bezier(.4,1,.4,1)","")
q.dx=p
s=q.k4
s.appendChild(p)
p=q.db
if(p!=null)p.aq()
p=u.C
r=p.i("~(1)").a(q.gdS())
u.M.a(null)
q.db=W.bB(s,"mousemove",r,!1,p.c)},
el:function(){var t,s,r,q,p,o,n,m,l,k=this,j=k.d,i=j.b.a.length
j=j.c
t=k.z
j=j.a
if(t<0||t>=j.length)return H.d(j,t)
s=j[t]
t=k.dx
t.toString
C.k.aL(t,"")
t=k.dx
j=document.createElement("div")
r=s.c
j.textContent=H.v((r&&C.a).h(r,s.a8(0)))
r=j.style
r.padding="4px 12px"
r=j.style
r.fontWeight="bold"
t.appendChild(j)
for(q=1;q<i;++q){j=k.k3
t=q-1
if(t>=j.length)return H.d(j,t)
p=j[t]
if(p===C.l)continue
if(p===C.m)continue
j=k.k2
if(t>=j.length)return H.d(j,t)
o=j[t]
t=s.c
n=(t&&C.a).h(t,s.a8(q))
if(n==null)continue
n=k.fr.$1(n)
j=o.a
m=k.dy.$1(j)
l=k.bN(o.b,H.b(m)+": <strong>"+H.b(n)+"</strong>")
k.dx.appendChild(l)}},
bM:function(a){var t=document.createElement("div"),s=t.style,r=H.v(a.h(0,"backgroundColor"))
s.toString
s.backgroundColor=r==null?"":r
s=t.style
r=H.v(a.h(0,"borderColor"))
s.toString
s.borderColor=r==null?"":r
s=t.style
s.borderStyle="solid"
s=t.style
r=H.b(a.h(0,"borderWidth"))+"px"
s.borderWidth=r
s=t.style
r=H.v(a.h(0,"color"))
s.toString
s.color=r==null?"":r
s=t.style
r=H.v(a.h(0,"fontFamily"))
s.toString
s.fontFamily=r==null?"":r
s=t.style
r=H.b(a.h(0,"fontSize"))+"px"
s.fontSize=r
s=t.style
r=H.v(a.h(0,"fontStyle"))
s.toString
s.fontStyle=r==null?"":r
s=t.style
s.position="absolute"
return t},
bN:function(a,b){var t,s=document.createElement("div")
C.k.aL(s,"<span></span> "+H.b(b))
t=s.style
t.padding="4px 12px"
t=new W.ci(s,s.children)
t=t.gaF(t).style
t.toString
t.backgroundColor=a==null?"":a
t.display="inline-block"
t.width="12px"
t.height="12px"
return s},
aN:function(a){var t,s=this,r=s.k4
r.toString
if(window.getComputedStyle(r,"").position==="static"){t=r.style
t.position="relative"}t=u.ar
s.go=t.a(C.p.aK(W.ft(),"2d"))
s.id=t.a(C.p.aK(W.ft(),"2d"))
s.k1=t.a(C.p.aK(W.ft(),"2d"))
r.appendChild(s.go.canvas)},
bc:function(a,b){var t,s=this
s.sc3(null)
t=s.db
if(t!=null)t.aq()
s.db=null
t=s.c
t.bb(0)
s.cy.bb(0)
s.d=a
t=t.a
C.a.l(t,a.geW().bl(s.gdh()))
C.a.l(t,a.geX().bl(s.gdi()))
C.a.l(t,a.geY().bl(s.gdk()))
t=X.dT(s.f,b)
s.r=t
s.sdt(O.lk(J.f(t.h(0,"animation"),"easing")))
s.dG()
s.dH()
s.f5(0,!0)},
f5:function(a,b){var t,s,r,q=this,p=q.k4,o=p.clientWidth,n=p.clientHeight
if(o===0||n===0)return
if(o!=q.y||n!=q.x){q.y=o
q.x=n
t=window.devicePixelRatio
if(typeof o!=="number")return o.q()
if(typeof t!=="number")return H.i(t)
s=C.e.E(o*t)
if(typeof n!=="number")return n.q()
p=new Y.e3(o,n,s,C.e.E(n*t),t)
p.$1(q.go)
p.$1(q.id)
p.$1(q.k1)}q.b=null
p=q.a
if(p!==0){r=window
C.j.bQ(r)
r.cancelAnimationFrame(p)
q.a=0}q.a1()
q.sc3(q.bL(0,q.d.b.a.length-1))
q.dX()
q.aI()},
fb:function(a){var t=this
if(t.y===0||t.x===0)return
t.a1()
t.ek()
t.id.clearRect(0,0,t.y,t.x)
t.dn()
t.a=C.j.ah(window,t.gaU())},
sdt:function(a){this.e=u.b.a(a)},
sdv:function(a){this.ch=u.w.a(a)},
sei:function(a){this.dy=u.Q.a(a)},
sc6:function(a){this.fr=u.w.a(a)},
se6:function(a){this.fx=u.m.a(a)},
sef:function(a){this.fy=u.G.a(a)},
sc3:function(a){this.k2=u.cM.a(a)},
se7:function(a){this.k3=u.eV.a(a)}}
Y.e2.prototype={
$1:function(a){return u.gT.a(a).c},
$S:24}
Y.e3.prototype={
$1:function(a){var t=this,s=a.canvas,r=s.style,q=""+t.a+"px"
r.width=q
r=s.style
q=""+t.b+"px"
r.height=q
s.width=t.c
s.height=t.d
s=t.e
a.setTransform(s,0,0,s,0,0)},
$S:25}
Y.bE.prototype={
b8:function(a){var t=this.r2,s=this.a4
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return t.p()
return t+s*a},
a1:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="yAxis",b5="labels",b6="style",b7="xAxis",b8="text",b9="fontSize"
b3.cJ()
t=J.f(b3.r.h(0,b4),"maxValue")
t=H.y(t==null?-1/0:t)
b3.Z=t
t=Math.max(t,X.li(b3.d))
b3.Z=t
if(t===-1/0)b3.Z=0
t=J.f(b3.r.h(0,b4),"minValue")
t=H.y(t==null?1/0:t)
b3.J=t
t=Math.min(t,X.lj(b3.d))
b3.J=t
if(t===1/0)b3.J=0
b3.R=H.y(J.f(b3.r.h(0,b4),"interval"))
s=J.f(b3.r.h(0,b4),"minInterval")
t=b3.R
if(t==null){t=b3.J
r=b3.Z
if(t==r){if(t===0){b3.R=b3.Z=1
t=1}else if(t===1){b3.J=0
b3.R=1
t=1}else{if(typeof t!=="number")return t.q()
q=b3.R=t*0.25
b3.J=t-q
if(typeof r!=="number")return r.p()
b3.Z=r+q
t=q}if(s!=null){t=Math.max(t,H.y(s))
b3.R=t}}else{if(typeof r!=="number")return r.m()
if(typeof t!=="number")return H.i(t)
H.y(s)
p=(r-t)/5
o=Math.pow(10,C.i.bj(Math.log(p)/2.302585092994046))
if(s!=null)o=Math.max(o,s)
n=C.i.E(p/o)
if(n>5)n=10
else if(n>2)n=5
else if(n===0)n=1
t=n*o
b3.R=t}}r=b3.J
if(typeof r!=="number")return r.au()
t=Math.floor(r/t)
r=b3.R
if(typeof r!=="number")return H.i(r)
b3.J=t*r
t=b3.Z
if(typeof t!=="number")return t.au()
r=Math.ceil(t/r)
t=b3.R
if(typeof t!=="number")return H.i(t)
t=r*t
b3.Z=t
r=b3.J
if(typeof r!=="number")return H.i(r)
b3.bh=t-r
r=u.s
b3.seo(H.l([],r))
t=u.w
b3.sca(t.a(J.f(J.f(b3.r.h(0,b4),b5),"formatter")))
if(b3.ar==null){m=Math.max(X.i9(b3.R),X.i9(b3.J))
l=T.jg()
l.db=l.cy=m
b3.sca(l.geJ())}k=b3.J
while(!0){q=b3.Z
if(typeof k!=="number")return k.fd()
if(typeof q!=="number")return H.i(q)
if(!(k<=q))break
q=b3.af;(q&&C.a).l(q,b3.ar.$1(k))
q=b3.R
if(typeof q!=="number")return H.i(q)
k+=q}q=u.f
b3.x2=J.dU(X.i7(b3.go,b3.P(q.a(J.f(J.f(b3.r.h(0,b4),b5),b6))),b3.af))
b3.sdv(b3.ar)
j=J.f(b3.r.h(0,"tooltip"),"valueFormatter")
b3.sc6(t.a(j==null?b3.ar:j))
i=J.f(b3.r.h(0,b7),"title")
t=J.K(i)
if(t.h(i,b8)!=null){b3.go.font=b3.P(q.a(t.h(i,b6)))
h=J.dU(b3.go.measureText(H.v(t.h(i,b8))).width)+12
g=H.I(J.bJ(J.f(t.h(i,b6),b9),12))
t=b3.fx
f=t.b+t.gD(t)-g}else{f=0
h=0
g=0}e=J.f(b3.r.h(0,b4),"title")
t=J.K(e)
if(t.h(e,b8)!=null){b3.go.font=b3.P(q.a(t.h(e,b6)))
d=J.dU(b3.go.measureText(H.v(t.h(e,b8))).width)+12
c=H.I(J.bJ(J.f(t.h(e,b6),b9),12))
b=b3.fx.a}else{b=0
c=0
d=0}t=b3.fx
j=t.a
a=b3.x2
if(typeof a!=="number")return H.i(a)
a=b3.r2=j+a+12
if(c>0)b3.r2=a+(c+12)
else b3.r2=a+12
t=t.gM(t)
a=b3.r2
if(typeof a!=="number")return H.i(a)
b3.rx=j+t-a
a=b3.fx
a=b3.r1=a.b+a.gD(a)
t=g>0
b3.r1=(t?b3.r1=a-(g+12):b3.r1=a-12)-12
a0=b3.d.c.a.length
b3.sen(H.l([],r))
for(a1=0;a1<a0;++a1){r=b3.a9
j=b3.d.c.a
if(a1>=j.length)return H.d(j,a1)
j=j[a1]
a=j.c;(r&&C.a).l(r,J.bb((a&&C.a).h(a,j.a8(0))))}b3.x1=X.i7(b3.go,b3.P(q.a(J.f(J.f(b3.r.h(0,b7),b5),b6))),b3.a9)
r=b3.rx
if(a0>1){if(typeof r!=="number")return r.au()
b3.a4=r/(a0-1)}else b3.a4=r
b3.y1=0
a2=J.f(J.f(J.f(b3.r.h(0,b7),b5),b6),b9)
a3=J.f(J.f(b3.r.h(0,b7),b5),"maxRotation")
a4=J.f(J.f(b3.r.h(0,b7),b5),"minRotation")
$label0$1:for(a5=1;a5<=a0;++a5){r=b3.a4
if(typeof r!=="number")return H.i(r)
a6=a5*r
a7=Math.max(0.1*a6,10)
for(a8=0;a8<5;++a8){a9=C.a7[a8]
H.y(a3)
if(typeof a3!=="number")return H.i(a3)
if(a9>a3)continue
H.y(a4)
if(typeof a4!=="number")return H.i(a4)
if(a9<a4)continue
b0=Math.abs(a9*3.141592653589793/180)
if(a9===0){r=b3.x1
if(typeof r!=="number")return H.i(r)
b1=a6-r}else{r=Math.sin(b0)
H.y(a2)
if(typeof a2!=="number")return H.i(a2)
b1=a6*r-a2}if(b1<a7)continue
b3.y1=a9
b3.y2=a5
r=b3.r1
q=b3.x1
j=Math.sin(b0)
if(typeof q!=="number")return q.q()
a=H.y(J.fp(a2,Math.cos(b0)))
if(typeof r!=="number")return r.m()
b3.r1=r-(q*j+a)
break $label0$1}}r=b3.r1
q=b3.fx.b
if(typeof r!=="number")return r.m()
q=b3.ry=r-q-H.y(J.fq(J.f(J.f(J.f(b3.r.h(0,b4),b5),b6),b9),2))
b3.aE=q/(b3.af.length-1)
r=b3.r2
j=b3.rx
if(typeof j!=="number")return j.m()
j=C.e.u(j-h,2)
if(typeof r!=="number")return r.p()
b2=H.I(r+j)
j=b3.fx.b
q=C.e.u(q-d,2)
if(t)b3.sc9(new P.L(b2+C.b.u(h,2),f+C.b.u(g,2),u.H))
else b3.sc9(null)
if(d>0)b3.scb(new P.L(b+C.b.u(c,2),j+q+C.b.u(d,2),u.H))
else b3.scb(null)},
aT:function(a){u.B.a(a)
a.gcj()
this.cK(a)},
dn:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="xAxis",e="style",d="color",c="center",b="middle",a="yAxis",a0="labels",a1="fontSize",a2="gridLineWidth",a3="gridLineColor",a4="lineWidth",a5="lineColor"
if(g.bf!=null){t=J.f(g.r.h(0,f),"title")
s=g.id
r=J.K(t)
s.fillStyle=J.f(r.h(t,e),d)
s.font=g.P(u.f.a(r.h(t,e)))
s.textAlign=c
s.textBaseline=b
r=H.v(r.h(t,"text"))
q=g.bf
C.q.bi(s,r,q.a,q.b)}if(g.bg!=null){t=J.f(g.r.h(0,a),"title")
s=g.id
s.save()
r=J.K(t)
s.fillStyle=J.f(r.h(t,e),d)
s.font=g.P(u.f.a(r.h(t,e)))
q=g.bg
s.translate(q.a,q.b)
s.rotate(-1.5707963267948966)
s.textAlign=c
s.textBaseline=b
C.q.bi(s,H.v(r.h(t,"text")),0,0)
s.restore()}t=J.f(g.r.h(0,f),a0)
s=J.K(t)
g.id.fillStyle=J.f(s.h(t,e),d)
r=u.f
g.id.font=g.P(r.a(s.h(t,e)))
p=g.b8(0)
q=g.r1
if(typeof q!=="number")return q.p()
o=H.y(J.f(s.h(t,e),a1))
if(typeof o!=="number")return H.i(o)
n=q+12+o
o=g.y2
q=g.a4
if(typeof o!=="number")return o.q()
if(typeof q!=="number")return H.i(q)
m=o*q
q=g.y1
o=g.id
if(q===0){o.textAlign=c
g.id.textBaseline="alphabetic"
l=0
while(s=g.a9,q=s.length,l<q){o=g.id
if(l<0)return H.d(s,l)
o.fillText(s[l],p,n)
p+=m
s=g.y2
if(typeof s!=="number")return H.i(s)
l+=s}}else{if(typeof q!=="number")return q.ai()
o.textAlign=q<0?"right":"left"
g.id.textBaseline=b
q=g.y1
if(q===90){q.toString
if(q>0)q=1
else if(q<0)q=-1
p+=q*H.y(J.fq(J.f(s.h(t,e),a1),8))}s=g.y1
if(typeof s!=="number")return s.q()
k=s*3.141592653589793/180
l=0
while(l<g.a9.length){s=g.id
s.save()
s.translate(p,n)
s.rotate(k)
q=g.a9
if(l<0||l>=q.length)return H.d(q,l)
s.fillText(q[l],0,0)
s.restore()
p+=m
s=g.y2
if(typeof s!=="number")return H.i(s)
l+=s}}s=g.id
s.fillStyle=J.f(J.f(J.f(g.r.h(0,a),a0),e),d)
s.font=g.P(r.a(J.f(J.f(g.r.h(0,a),a0),e)))
s.textAlign="right"
s.textBaseline=b
s=g.r2
if(typeof s!=="number")return s.m()
p=s-12
s=g.r1
r=H.y(J.fq(J.f(J.f(J.f(g.r.h(0,a),a0),e),a1),8))
if(typeof s!=="number")return s.m()
n=s-r
for(s=g.af,r=s.length,j=0;j<s.length;s.length===r||(0,H.N)(s),++j){i=s[j]
g.id.fillText(i,p,n)
q=g.aE
if(typeof q!=="number")return H.i(q)
n-=q}if(J.bK(J.f(g.r.h(0,f),a2),0)){s=g.id
s.lineWidth=H.y(J.f(g.r.h(0,f),a2))
s.strokeStyle=J.f(g.r.h(0,f),a3)
s.beginPath()
s=g.r1
r=g.aE
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
n=s-r
for(l=g.af.length-1;l>=1;--l){g.id.moveTo(g.r2,n)
s=g.id
r=g.r2
q=g.rx
if(typeof r!=="number")return r.p()
if(typeof q!=="number")return H.i(q)
s.lineTo(r+q,n)
q=g.aE
if(typeof q!=="number")return H.i(q)
n-=q}g.id.stroke()}h=J.f(g.r.h(0,a),a2)
p=g.r2
s=g.y2
if(typeof s!=="number")return s.W()
if(s>1)p=g.b8(0)
s=J.bK(h,0)
r=g.r1
if(s){s=g.ry
if(typeof r!=="number")return r.m()
if(typeof s!=="number")return H.i(s)
n=r-s}else{if(typeof r!=="number")return r.p()
n=r+12
h=1}s=g.id
s.lineWidth=H.y(h)
s.strokeStyle=J.f(g.r.h(0,a),a3)
s.beginPath()
l=0
while(l<g.a9.length){g.id.moveTo(p,n)
g.id.lineTo(p,g.r1)
if(typeof p!=="number")return p.p()
p+=m
s=g.y2
if(typeof s!=="number")return H.i(s)
l+=s}g.id.stroke()
if(J.bK(J.f(g.r.h(0,f),a4),0)){s=g.id
s.lineWidth=H.y(J.f(g.r.h(0,f),a4))
s.strokeStyle=J.f(g.r.h(0,f),a5)
s.beginPath()
s.moveTo(g.r2,g.r1)
r=g.r2
q=g.rx
if(typeof r!=="number")return r.p()
if(typeof q!=="number")return H.i(q)
s.lineTo(r+q,g.r1)
s.stroke()}if(J.bK(J.f(g.r.h(0,a),a4),0)){s=g.id
s.lineWidth=H.y(J.f(g.r.h(0,a),a4))
s.strokeStyle=J.f(g.r.h(0,a),a5)
s.beginPath()
r=g.r2
q=g.r1
o=g.ry
if(typeof q!=="number")return q.m()
if(typeof o!=="number")return H.i(o)
s.moveTo(r,q-o)
s.lineTo(g.r2,g.r1)
s.stroke()}},
dC:function(a,b){var t,s,r,q=this,p=q.r2
if(typeof p!=="number")return H.i(p)
t=a-p
p=q.r1
s=q.ry
if(typeof p!=="number")return p.m()
if(typeof s!=="number")return H.i(s)
if(b>p-s)if(b<p)if(t>0){p=q.rx
if(typeof p!=="number")return H.i(p)
p=t<p}else p=!1
else p=!1
else p=!1
if(p){p=q.a4
if(typeof p!=="number")return H.i(p)
r=C.i.E(t/p-0)
p=q.ag
if(r<0||r>=p.length)return H.d(p,r)
if(p[r]!=null)return r}return-1},
aI:function(){this.cL(null)
this.bE()},
sc9:function(a){this.bf=u.H.a(a)},
scb:function(a){this.bg=u.H.a(a)},
sen:function(a){this.a9=u.k.a(a)},
seo:function(a){this.af=u.k.a(a)},
sca:function(a){this.ar=u.w.a(a)},
sd9:function(a){this.ag=u.O.a(a)}}
Y.X.prototype={
cn:function(a,b,c){var t,s,r,q=this,p=q.x,o=q.db
if(typeof o!=="number")return o.m()
if(typeof p!=="number")return H.i(p)
t=p+(o-p)*b
p=q.y
o=q.dx
if(typeof o!=="number")return o.m()
if(typeof p!=="number")return H.i(p)
s=p+(o-p)*b
p=q.ch
o=q.dy
if(typeof o!=="number")return o.m()
if(typeof p!=="number")return H.i(p)
r=p+(o-p)*b
if(c){a.fillStyle=q.c
a.beginPath()
a.arc(t,s,2*r,0,6.283185307179586,!1)
a.fill()}a.beginPath()
a.arc(t,s,r,0,6.283185307179586,!1)
a.fill()
a.stroke()},
scs:function(a){this.z=u.H.a(a)},
sct:function(a){this.Q=u.H.a(a)},
sck:function(a){this.cx=u.H.a(a)},
scl:function(a){this.cy=u.H.a(a)}}
Y.bp.prototype={
bE:function(){var t,s,r,q,p,o,n,m,l,k,j=this
if(!H.ag(H.dP(J.f(j.r.h(0,"tooltip"),"enabled"))))return
t=j.d.c.a.length
if(j.ag==null)j.sd9(H.l([],u.a))
s=j.ag;(s&&C.a).sk(s,t)
for(s=u.R,r=0;r<t;++r){for(q=j.k2,p=q.length-1,o=j.k3,n=0,m=0;p>=0;--p){if(p>=o.length)return H.d(o,p)
if(o[p].a<=1)continue
l=q[p].d
if(r>=l.length)return H.d(l,r)
k=s.a(l[r])
if(k.r!=null){l=k.dx
if(typeof l!=="number")return H.i(l)
n+=l;++m}}q=j.ag
o=m>0?n/m:null;(q&&C.a).A(q,r,o)}},
a1:function(){this.cU()
this.co=H.y(J.bJ(J.fp(J.f(J.f(this.r.h(0,"series"),"markers"),"size"),2),5))},
dP:function(a,b){var t
u.cL.a(a)
t=a.$ti
return new H.a6(a,t.i("X(q.E)").a(new Y.ep(b)),t.i("a6<q.E,X>")).a6(0)},
dq:function(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a="series",a0="lineWidth",a1=new Y.eo(b),a2=b.k2.length,a3=b.d.c.a.length,a4=J.f(b.r.h(0,a),"fillOpacity"),a5=J.f(b.r.h(0,a),a0),a6=J.f(b.r.h(0,a),"markers"),a7=J.K(a6),a8=a7.h(a6,"size")
for(t=J.as(a8),s=J.as(a5),r=J.as(a4),q=0;q<a2;++q){p=b.k3
if(q>=p.length)return H.d(p,q)
if(J.a2(p[q],C.l))continue
p=b.k2
if(q>=p.length)return H.d(p,q)
o=p[q]
p=o.d
n=b.dP(new H.bR(p,H.P(p).i("bR<1,X>")),a9)
m=q!==b.Q?1:2
b.k1.lineJoin="round"
if(r.W(a4,0)){l=b.aQ(o.b,H.y(a4))
b.k1.fillStyle=l
b.k1.strokeStyle=l
for(k=0;!0;){p=n.length
while(!0){if(k<a3){if(k<0||k>=p)return H.d(n,k)
j=n[k].r==null}else j=!1
if(!j)break;++k}if(k===a3)break
if(k<0||k>=p)return H.d(n,k)
i=n[k]
p=b.k1
p.beginPath()
p.moveTo(i.db,b.r1)
p.lineTo(i.db,i.dx)
h=i
g=1
while(!0){++k
if(k<a3){if(k>=n.length)return H.d(n,k)
p=n[k].r!=null}else p=!1
if(!p)break
if(k>=n.length)return H.d(n,k)
i=n[k]
a1.$3(h.cy,i.cx,i);++g
h=i}if(g>=2){p=b.k1
p.lineTo(h.db,b.r1)
p.closePath()
p.fill()}}}if(s.W(a5,0)){h=new Y.X()
p=b.k1
p.lineWidth=m*H.y(a5)
p.strokeStyle=o.b
p.beginPath()
for(p=n.length,f=0;f<n.length;n.length===p||(0,H.N)(n),++f,h=i){i=n[f]
if(i.r!=null)if(h.r!=null)a1.$3(h.cy,i.cx,i)
else b.k1.moveTo(i.db,i.dx)}b.k1.stroke()}if(t.W(a8,0)){e=a7.h(a6,"fillColor")
if(e==null)e=o.b
d=a7.h(a6,"strokeColor")
if(d==null)d=o.b
p=b.k1
p.fillStyle=e
j=H.y(a7.h(a6,a0))
if(typeof j!=="number")return H.i(j)
p.lineWidth=m*j
p.strokeStyle=d
for(p=n.length,f=0;f<n.length;n.length===p||(0,H.N)(n),++f){i=n[f]
if(i.r!=null)if(H.ag(H.dP(a7.h(a6,"enabled"))))i.cn(b.k1,1,i.e===b.z)
else if(i.e===b.z)i.cn(b.k1,1,!0)}}}c=J.f(b.r.h(0,a),"labels")
if(a9===1&&H.ag(H.dP(J.f(c,"enabled")))){a7=b.k1
t=J.K(c)
a7.fillStyle=J.f(t.h(c,"style"),"color")
a7.font=b.P(u.f.a(t.h(c,"style")))
a7.textAlign="center"
a7.textBaseline="alphabetic"
for(a7=u.R,q=0;q<a2;++q){t=b.k3
if(q>=t.length)return H.d(t,q)
if(!J.a2(t[q],C.u))continue
t=b.k2
if(q>=t.length)return H.d(t,q)
n=t[q].d
for(t=n.length,f=0;f<n.length;n.length===t||(0,H.N)(n),++f){i=a7.a(n[f])
if(i.r!=null){s=i.dx
H.y(a8)
if(typeof s!=="number")return s.m()
if(typeof a8!=="number")return H.i(a8)
b.k1.fillText(i.d,i.db,s-a8-5)}}}}return!1},
c8:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=a8.d.c.a.length,b0=J.f(J.f(a8.r.h(0,"series"),"markers"),"size"),b1=J.f(a8.r.h(0,"series"),"curveTension"),b2=J.bK(b1,0)&&a9>2,b3=b6==null,b4=b3?0:b6,b5=b3?a8.k2.length:b6+1
for(b3=u.H,t=u.R,s=!b2,r=u.j,q=b4;q<b5;++q){p=a8.k3
if(q<0||q>=p.length)return H.d(p,q)
o=p[q].a>=2
p=a8.k2
if(q>=p.length)return H.d(p,q)
n=p[q]
m=n.d
l=r.a(a8.r.h(0,"colors"))
p=J.K(l)
k=H.v(p.h(l,C.b.X(q,p.gk(l))))
j=a8.aQ(k,0.5)
n.b=k
n.c=j
for(i=0;i<a9;++i){if(i>=m.length)return H.d(m,i)
h=t.a(m[i])
h.e=i
h.b=k
h.c=j
p=a8.r2
g=a8.a4
if(typeof g!=="number")return g.q()
if(typeof p!=="number")return p.p()
h.db=p+g*i
if(o){p=h.r
g=a8.r1
if(p!=null){f=a8.J
if(typeof f!=="number")return H.i(f)
e=a8.bh
if(typeof e!=="number")return H.i(e)
d=a8.ry
if(typeof d!=="number")return H.i(d)
if(typeof g!=="number")return g.m()
d=g-(p-f)/e*d
p=d}else p=g}else p=a8.r1
h.dx=p
h.dy=H.y(o?b0:0)}if(s)continue
p=m.length
if(0>=p)return H.d(m,0)
c=t.a(m[0])
if(1>=p)return H.d(m,1)
b=t.a(m[1])
for(i=2;i<a9;++i,c=b,b=a){if(i>=m.length)return H.d(m,i)
a=t.a(m[i])
if(c.r==null)continue
if(b.r==null)continue
if(a.r==null)continue
p=c.db
g=c.dx
f=b3.a(new P.L(p,g,b3))
e=b.db
d=b.dx
a0=new P.L(e,d,b3)
a1=a.db
a2=a.dx
H.y(b1)
a3=a0.cm(f)
a4=a0.cm(new P.L(a1,a2,b3))
a0=a3+a4
a5=b1*a3/a0
a6=b1*a4/a0
if(typeof a1!=="number")return a1.m()
if(typeof p!=="number")return H.i(p)
p=a1-p
if(typeof a2!=="number")return a2.m()
if(typeof g!=="number")return H.i(g)
g=a2-g
a2=p*a5
a1=g*a5
b3.a(new P.L(a2,a1,b3))
if(typeof e!=="number")return e.m()
if(typeof d!=="number")return d.m()
p*=a6
g*=a6
b3.a(new P.L(p,g,b3))
a7=[new P.L(e-a2,d-a1,b3),new P.L(e+p,d+g,b3)]
b.sck(a7[0])
b.scl(a7[1])
if(b.z==null)b.scs(new P.L(b.cx.a,a8.r1,b3))
if(b.Q==null)b.sct(new P.L(b.cy.a,a8.r1,b3))}}},
ek:function(){return this.c8(null)}}
Y.ep.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l
u.R.a(a)
t=a.x
s=a.db
r=this.a
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.i(t)
if(typeof r!=="number")return H.i(r)
q=a.y
p=a.dx
if(typeof p!=="number")return p.m()
if(typeof q!=="number")return H.i(q)
o=a.cx
if(o!=null){n=a.z
m=n.p(0,o.m(0,n).q(0,r))}else m=null
o=a.cy
if(o!=null){n=a.Q
l=n.p(0,o.m(0,n).q(0,r))}else l=null
o=new Y.X()
o.e=a.e
o.r=a.r
o.b=a.b
o.c=a.c
o.ch=a.ch
o.x=a.x
o.y=a.y
o.dy=a.dy
o.db=t+(s-t)*r
o.dx=q+(p-q)*r
r=u.H
o.sck(r.a(m))
o.scl(r.a(l))
return o},
$S:27}
Y.eo.prototype={
$3:function(a,b,c){var t,s,r,q,p=u.H
p.a(a)
p.a(b)
p=b==null
if(p&&a==null)this.a.k1.lineTo(c.db,c.dx)
else if(p)this.a.k1.quadraticCurveTo(a.a,a.b,c.db,c.dx)
else{p=b.a
t=b.b
s=c.db
r=c.dx
q=this.a.k1
if(a==null)q.quadraticCurveTo(p,t,s,r)
else q.bezierCurveTo(a.a,a.b,p,t,s,r)}}}
G.bi.prototype={}
G.b1.prototype={
j:function(a){return"DataCollectionChangeRecord { index: "+this.a+", added: "+this.b+", removed: "+this.c+"}"}}
G.bD.prototype={}
G.Q.prototype={
a8:function(a){if(H.fc(a))return a
return this.b.a.h(0,a)},
cW:function(a,b){var t,s,r,q,p
this.b=a
t=a.b.a.length
s=J.K(b)
r=s.gk(b)
q=r>t?t:r
this.c=s.by(b,0,q)
for(p=q;p<t;++p){s=this.c;(s&&C.a).l(s,null)}},
h:function(a,b){var t=this.c
return(t&&C.a).h(t,this.a8(b))}}
G.V.prototype={}
G.U.prototype={
gt:function(){return this.d},
n:function(){var t=this,s=t.a,r=s.a,q=r.length
if(t.b!==q)throw H.c(P.b0(s))
s=t.c
if(s>=q){t.sbP(null)
return!1}if(s<0)return H.d(r,s)
t.sbP(r[s]);++t.c
return!0},
sbP:function(a){this.d=this.$ti.c.a(a)},
$iE:1}
G.J.prototype={
b7:function(a){var t,s,r=this.a,q=r.length
for(;a<q;a=s){if(a<0)return H.d(r,a)
t=r[a]
t.b=this.b
s=a+1
t.a=a}},
gw:function(a){return new G.U(this,this.a.length,H.n(this).i("U<J.E>"))},
gk:function(a){return this.a.length},
h:function(a,b){var t
H.I(b)
t=this.a
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
l:function(a,b){var t,s,r=this
H.n(r).i("J.E").a(b)
t=r.a
s=t.length
C.a.l(t,b)
r.b7(s)
r.b.b3(r,s,1)},
H:function(a,b){var t,s,r=this
H.n(r).i("m<J.E>").a(b)
t=r.a
s=t.length
C.a.H(t,b)
r.b7(s)
r.b.b3(r,s,b.gk(b))},
C:function(a,b){var t=this.a
if(b<0||b>=t.length)return H.d(t,b)
return t[b]}}
G.bS.prototype={
eh:function(a){return a instanceof G.Q?a:G.bj(this.b,u.j.a(a))}}
G.cS.prototype={}
G.e7.prototype={
b3:function(a,b,c){var t,s=this,r=new G.b1(b,c,0)
if(u.br.a(a)===s.b){s.dI(b,c)
s.ej(b)
t=s.e
if(t!=null)t.l(0,r)}else{t=s.f
if(t!=null)t.l(0,r)}},
dI:function(a,b){var t,s,r
for(t=this.c,t=new G.U(t,t.a.length,H.n(t).i("U<J.E>"));t.n();){s=t.d.c
r=new Array(b)
r.fixed$length=Array;(s&&C.a).aH(s,a,r)}},
ej:function(a){var t,s,r,q=this.b.a.length
for(;a<q;a=r){t=this.a
s=this.b.a
if(a<0||a>=s.length)return H.d(s,a)
r=a+1
t.A(0,s[a].c,a)}},
cX:function(a){var t,s,r,q,p,o,n,m,l=this
l.sdc(P.er(u.N,u.S))
l.c=new G.bS(H.l([],u.bg),l)
l.b=new G.cS(H.l([],u.b8),l)
t=C.a.gaF(a).length
for(s=0;s<t;++s){r=a[0]
if(s>=r.length)return H.d(r,s)
q=r[s]
for(p=1;!1;++p){if(p>=1)return H.d(a,p)
r=a[p]
if(s>=r.length)return H.d(r,s)
if(r[s]==null)continue
break}r=l.b
H.v(q)
r.toString
o=H.n(r).i("J.E").a(new G.V(q))
n=r.a
m=n.length
C.a.l(n,o)
r.b7(m)
r.b.b3(r,m,1)}r=l.c
P.d6(1,1,1)
r.cM(0,H.cd(a,1,1,H.P(a).c).eR(0,r.geg(),u.cZ))},
geW:function(){var t,s=this
if(s.d==null)s.sbF(P.fE(new G.e8(s),!0,u.B))
t=s.d
t.toString
return new P.aC(t,H.n(t).i("aC<1>"))},
geX:function(){var t,s=this
if(s.e==null)s.sbI(P.fE(new G.e9(s),!0,u.D))
t=s.e
t.toString
return new P.aC(t,H.n(t).i("aC<1>"))},
geY:function(){var t,s=this
if(s.f==null)s.sc2(P.fE(new G.ea(s),!0,u.D))
t=s.f
t.toString
return new P.aC(t,H.n(t).i("aC<1>"))},
sdc:function(a){this.a=u.g6.a(a)},
sbF:function(a){this.d=u.fq.a(a)},
sbI:function(a){this.e=u.F.a(a)},
sc2:function(a){this.f=u.F.a(a)}}
G.e8.prototype={
$0:function(){this.a.sbF(null)},
$S:1}
G.e9.prototype={
$0:function(){this.a.sbI(null)},
$S:1}
G.ea.prototype={
$0:function(){this.a.sc2(null)},
$S:1}
X.fl.prototype={
$2:function(a,b){var t=this.a,s=u.f
t.A(0,a,s.b(b)?X.dT(s.a(t.h(0,a)),b):b)},
$S:11}
X.aM.prototype={
bb:function(a){var t,s,r
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.N)(t),++r)t[r].aq()
C.a.sk(t,0)}}
L.ez.prototype={
$0:function(){var t=this.a,s=t.V(),r=t.V(),q=Math.sqrt(-2*Math.log(s)),p=6.283185307179586*r
return H.l([q*Math.cos(p),q*Math.sin(p)],u.a)},
$S:29}
L.ey.prototype={
$1:function(a){H.y(a)
if(typeof a!=="number")return a.q()
return a*this.a+this.b},
$S:30}
S.e4.prototype={}
L.bL.prototype={
j:function(a){return this.b}}
L.bX.prototype={}
O.al.prototype={
j:function(a){return this.b}}
O.bf.prototype={}
O.ef.prototype={}
O.ek.prototype={
cY:function(a,b){var t,s,r,q,p,o=this
o.a=a
o.b=b
t=new Array(b)
t.fixed$length=Array
o.sf6(H.l(t,u.ct))
for(t=u.I,s=0;s<b;++s){r=o.c
q=new Array(a)
q.fixed$length=Array;(r&&C.a).A(r,s,H.l(q,t))
for(p=0;p<a;++p){r=o.c
if(s>=r.length)return H.d(r,s)
r=r[s];(r&&C.a).A(r,p,O.cP(C.O,-1))}}},
f2:function(a,b){var t,s,r,q,p,o,n=this
u.r.a(a)
for(t=0,s=0;s<n.b;++s)for(r=0;r<n.a;++r,t=q){q=t+1
if(t<0||t>=a.length)return H.d(a,t)
p=a[t]
o=n.c
if(s>=o.length)return H.d(o,s)
o=o[s]
if(r>=o.length)return H.d(o,r)
C.a.l(o[r].d,p)
p.z=p.x=r
p.Q=p.y=s
if(q>=a.length)return}for(;t<a.length;t=q){r=b.N(n.a)
s=b.N(n.b)
q=t+1
if(t<0||t>=a.length)return H.d(a,t)
p=a[t]
o=n.c
if(s<0||s>=o.length)return H.d(o,s)
o=o[s]
if(r<0||r>=o.length)return H.d(o,r)
C.a.l(o[r].d,p)
p.z=p.x=r
p.Q=p.y=s}},
bk:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j=this
for(t=0;t<j.b;++t)for(s=0;s<j.a;++s){r=j.c
if(t>=r.length)return H.d(r,t)
r=r[t]
if(s>=r.length)return H.d(r,s)
r=r[s].d
q=r.length
p=!1
o=0
for(;o<r.length;r.length===q||(0,H.N)(r),++o)p=C.D.bq(p,r[o].c)
if(!p)continue
n=[]
r=j.c
if(t>=r.length)return H.d(r,t)
r=r[t]
if(s>=r.length)return H.d(r,s)
r=r[s].d
q=r.length
o=0
for(;o<r.length;r.length===q||(0,H.N)(r),++o){m=r[o]
a.cd(b,m,d)
if(m.f){n.push(m)
l=j.c
l=(l&&C.a).h(l,m.y)
C.a.L((l&&C.a).h(l,m.x).d,m)}}for(r=n.length,o=0;o<n.length;n.length===r||(0,H.N)(n),++o){k=n[o]
q=j.c
if(t>=q.length)return H.d(q,t)
q=q[t]
if(s>=q.length)return H.d(q,s)
C.a.L(q[s].d,k)}}},
sf6:function(a){this.c=u.cA.a(a)}}
O.e0.prototype={
cV:function(a){var t,s,r,q,p,o,n,m,l,k,j=this,i=C.i.u(a/3,200)+1,h=C.b.u(a,1e5)+1,g=C.b.u(a,1000)+1,f=C.b.u(a,200)
if(f<16)f=16
t=C.b.u(f-i-h-g,4)
for(s=j.a,r=j.f,q=j.c,p=j.d;o=s.length,o<f;g=k,h=l,i=n){n=i-1
if(i>0){m=O.cP(C.R,o)
C.a.l(s,m)
C.a.l(r,m)}l=h-1
if(h>0){m=O.cP(C.P,s.length)
C.a.l(s,m)
C.a.l(q,m)}k=g-1
if(g>0){m=O.cP(C.Q,s.length)
C.a.l(s,m)
C.a.l(p,m)}j.eQ(t,f)}},
eQ:function(a,b){var t,s=this,r=s.a,q=s.x,p=s.r,o=s.e,n=s.b,m=C.o,l=0
while(!0){if(!(l<a&&r.length<b))break
t=O.cP(m,r.length)
C.a.l(r,t)
switch(m){case C.o:C.a.l(n,t)
m=C.y
break
case C.y:C.a.l(o,t)
m=C.z
break
case C.z:C.a.l(p,t)
m=C.A
break
case C.A:C.a.l(q,t)
m=C.o
break
default:H.lD("Error picking next BuildingType "+m.j(0))}++l}},
bk:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.N)(t),++r){for(q=t[r].d,p=q.length,o=!1,n=0;m=q.length,n<m;q.length===p||(0,H.N)(q),++n)o=C.D.bq(o,q[n].c)
if(!o)continue
l=[]
for(n=0;n<q.length;q.length===m||(0,H.N)(q),++n){k=q[n]
a.cd(b,k,d)
if(k.f)l.push(k)}for(q=l.length,n=0;n<l.length;l.length===q||(0,H.N)(l),++n){j=l[n]
p=j.ch
if(p>=0){if(p>=t.length)return H.d(t,p)
C.a.L(t[p].d,j)
j.ch=-1}}}}}
F.dk.prototype={
d_:function(a){var t,s,r,q,p=this,o=document,n=u.gA
p.c=n.a(o.querySelector("#envcanvas"))
t=o.querySelector("#mapContainer")
p.d=t
s=p.c
r=new N.el(N.ai(255,255,255,255),N.ai(0,0,0,255),N.ai(240,240,240,255),N.ai(255,0,0,255),N.ai(255,255,0,255),N.ai(0,255,0,255))
r.bz(s,t)
p.e=r
q=n.a(o.querySelector("#mainstreet"))
n=p.d
r=new N.e_(N.ai(255,255,255,255),N.ai(0,0,0,255),N.ai(240,240,240,255),N.ai(255,0,0,255),N.ai(255,255,0,255),N.ai(0,255,0,255))
r.bz(q,n)
p.f=r
p.a=o.querySelector("#timestep")
p.b=o.querySelector("#infected")
P.j4(C.a1,new F.eI(p),u.P)},
bw:function(a,b,c,d){var t,s,r,q,p=this
if(b===0)document.querySelector("#city_name").textContent=a.a
p.e.bd(a.b)
p.f.bd(a.c)
b.toString
if(b-C.e.a5(b)===0&&b>0){t=u.a
s=H.l([b,c],t)
r=p.y.c
q=G.bj(r.b,s)
r.ac(0,q)
r=p.cx
p.cx=c
s=H.l([b,c-r],t)
r=p.cy.c
q=G.bj(r.b,s)
r.ac(0,q)
s=H.l([b,d],t)
t=p.fr.c
r=G.bj(t.b,s)
t.ac(0,r)
p.z.aI()
p.db.aI()
p.fx.aI()}p.a.textContent=C.e.j(b)
p.b.textContent=C.b.j(c)}}
F.eI.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=document,g=u.gn
i.x=g.a(h.querySelector("#infectedChart"))
t=u.gP
i.y=G.fu(H.l([["Categories","Infected"]],t))
s=i.x
r=u.db
q=new Y.bp(new X.aM(H.l([],r)),new X.aM(H.l([],r)),s)
q.aN(s)
s=$.iH()
q.f=X.dT($.fT,s)
i.z=q
q=u.N
p=u.y
o=u.K
n=u.s
m=u.S
i.Q=P.p(["series",P.p(["fillOpacity",0.25,"labels",P.p(["enabled",!1],q,p),"markers",P.p(["enabled",!1],q,p)],q,o),"colors",H.l(["#ff0000"],n),"animation",P.p(["duration",0,"onEnd",null],q,m),"yAxis",P.p(["minInterval",10],q,m),"title",P.p(["text","Total infected"],q,q),"legend",P.p(["position","none"],q,q)],q,o)
i.ch=g.a(h.querySelector("#dailyNewChart"))
i.cy=G.fu(H.l([["Categories","New cases"]],t))
l=i.ch
k=new Y.bp(new X.aM(H.l([],r)),new X.aM(H.l([],r)),l)
k.aN(l)
k.f=X.dT($.fT,s)
i.db=k
i.dx=P.p(["series",P.p(["fillOpacity",0.25,"labels",P.p(["enabled",!1],q,p),"markers",P.p(["enabled",!1],q,p)],q,o),"colors",H.l(["#00ff00"],n),"animation",P.p(["duration",0,"onEnd",null],q,m),"yAxis",P.p(["minInterval",10],q,m),"title",P.p(["text","Daily new cases"],q,q),"legend",P.p(["position","none"],q,q)],q,o)
i.dy=g.a(h.querySelector("#deceasedChart"))
i.fr=G.fu(H.l([["Categories","RIP"]],t))
t=i.dy
r=new Y.bp(new X.aM(H.l([],r)),new X.aM(H.l([],r)),t)
r.aN(t)
r.f=X.dT($.fT,s)
i.fx=r
i.fy=P.p(["series",P.p(["fillOpacity",0.25,"labels",P.p(["enabled",!1],q,p),"markers",P.p(["enabled",!1],q,p)],q,o),"colors",H.l(["#000000"],n),"animation",P.p(["duration",0,"onEnd",null],q,m),"yAxis",P.p(["minInterval",10],q,m),"title",P.p(["text","Deceased"],q,q),"legend",P.p(["position","none"],q,q)],q,o)
j=H.l([0,0],u.Y)
o=i.y.c
h=G.bj(o.b,j)
o.ac(0,h)
i.z.bc(i.y,i.Q)
h=i.cy.c
g=G.bj(h.b,j)
h.ac(0,g)
i.db.bc(i.cy,i.dx)
h=i.fr.c
g=G.bj(h.b,j)
h.ac(0,g)
i.fx.bc(i.fr,i.fy)},
$S:1}
F.dj.prototype={
eU:function(a){u.V.a(a)
this.d.a=S.ht()
document.querySelector("#city_name").textContent=this.d.a},
eq:function(a){var t,s,r,q=this
H.y(a)
if(q.dx||q.dy)return
t=q.z
if(typeof t!=="number")return t.p()
t=q.z=t+0.25
s=q.Q
if(typeof s!=="number")return H.i(s)
if(t>=s)return
r=q.bx(0,t)
if(q.fr){q.fr=!1
t=q.cx
t.f.src=t.d
t=q.cx
t.r=!1
t.f.src=t.d
t=q.cy
t.r=!1
t.f.src=t.d}else if(r<q.f.length){q.fr=!1
C.j.ah(window,q.gb9())}},
eC:function(a,b){var t,s=this
if(!s.dx){s.fr=s.dy=!1
t=s.cy
t.r=!1
t.f.src=t.d
t=s.db
t.r=!1
t.f.src=t.d
C.j.ah(window,s.gb9())}},
eA:function(a,b){var t=this
if(!t.dx&&!t.fr){t.dy=!1
t.fr=!0
C.j.ah(window,t.gb9())}},
ey:function(a,b){var t,s=this
s.dy=!0
t=s.db
t.f.src=t.e
t=s.ch
t.r=!1
t.f.src=t.d
t=s.cy
t.r=!1
t.f.src=t.d},
eE:function(a,b){var t,s=this
s.dx=!0
t=s.ch
t.r=!0
t.f.src=t.c
t=s.db
t.r=!0
t.f.src=t.c
t=s.cy
t.r=!0
t.f.src=t.c
t=s.cx
t.r=!0
t.f.src=t.c}}
Z.eu.prototype={
cd:function(a,b,c){var t,s,r=this
if(b.f)return
t=c.bp()
s=r.d
if(!b.c&&t+s<=r.a){b.c=!0
b.e=a
b.d=!0}t=b.e
if(typeof a!=="number")return a.m()
if(typeof t!=="number")return H.i(t)
if(a-t>r.c)if(c.bp()<r.b)b.f=!0
else{b.c=!1
b.e=0
b.r=!0}}}
D.ex.prototype={
bp:function(){var t,s,r,q=this,p=q.a
do{t=q.b
if(t>=2000){q.seV(L.jf(2000,0.5,p.N(1e6),0.03))
t=q.b=0}s=q.c
q.b=t+1
if(t>=s.length)return H.d(s,t)
r=H.x(s[t])
if(typeof r!=="number")return r.ai()}while(r<0||r>=1)
return r},
seV:function(a){this.c=u.O.a(a)}}
B.d5.prototype={}
B.cT.prototype={}
T.da.prototype={}
T.cf.prototype={
j:function(a){return this.b}}
T.d9.prototype={
cZ:function(a,b,c,d,e){var t=this
t.b=C.h
t.c=new D.ex(C.h,2000)
t.d=a
t.e=b
t.sf3(c)
t.r=c.length
t.x=e
t.d.b.f2(t.f,t.b)},
f1:function(a){var t
a.toString
t=a-C.e.a5(a)
if(t<0.5)return C.K
else if(t<0.75)return C.L
else return C.M},
bx:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.f1(b)
for(t=i.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.N)(t),++r){q=t[r]
if(q.f)continue
p=i.b
switch(h){case C.K:o=q.b
if(o===C.v&&i.d.c.f.length>0){o=i.d.b.c
o=(o&&C.a).h(o,q.y)
C.a.L((o&&C.a).h(o,q.x).d,q)
o=i.d.c
n=q.ch
if(n>=0){o=o.a
if(n>=o.length)return H.d(o,n)
C.a.L(o[n].d,q)
q.ch=-1}m=p.N(i.d.c.f.length)
o=i.d.c
n=o.f
if(m<0||m>=n.length)return H.d(n,m)
n=n[m].b
o=o.a
if(n<0||n>=o.length)return H.d(o,n)
C.a.l(o[n].d,q)
q.ch=n}else if(o===C.w&&p.V()<0.5){o=i.d.b.c
o=(o&&C.a).h(o,q.y)
C.a.L((o&&C.a).h(o,q.x).d,q)
o=i.d.c
n=q.ch
if(n>=0){o=o.a
if(n>=o.length)return H.d(o,n)
C.a.L(o[n].d,q)
q.ch=-1}m=p.N(i.d.c.a.length)
o=i.d.c.a
if(m<0||m>=o.length)return H.d(o,m)
C.a.l(o[m].d,q)
q.ch=m}else if(p.V()<0.3){o=i.d.b.c
o=(o&&C.a).h(o,q.y)
C.a.L((o&&C.a).h(o,q.x).d,q)
o=i.d.c
n=q.ch
if(n>=0){o=o.a
if(n>=o.length)return H.d(o,n)
C.a.L(o[n].d,q)
q.ch=-1}m=p.N(i.d.c.a.length)
o=i.d.c.a
if(m<0||m>=o.length)return H.d(o,m)
C.a.l(o[m].d,q)
q.ch=m}break
case C.L:if(p.V()<0.5){o=i.d.b.c
o=(o&&C.a).h(o,q.y)
C.a.L((o&&C.a).h(o,q.x).d,q)
o=i.d.c
n=q.ch
if(n>=0){o=o.a
if(n>=o.length)return H.d(o,n)
C.a.L(o[n].d,q)
q.ch=-1}m=p.N(i.d.c.a.length)
o=i.d.c.a
if(m<0||m>=o.length)return H.d(o,m)
C.a.l(o[m].d,q)
q.ch=m}break
case C.M:default:o=q.ch
n=i.d
if(o>=0){n=n.c.a
l=n.length
if(o>=l)return H.d(n,o)
C.a.L(n[o].d,q)
q.ch=-1}else{o=n.b.c
o=(o&&C.a).h(o,q.y)
C.a.L((o&&C.a).h(o,q.x).d,q)}o=i.d.b.c
o=(o&&C.a).h(o,q.Q)
C.a.l((o&&C.a).h(o,q.z).d,q)}}i.d.b.bk(i.e,b,i.b,i.c)
i.d.c.bk(i.e,b,i.b,i.c)
for(t=i.f,s=t.length,k=0,j=0,r=0;r<s;++r){q=t[r]
if(q.d)++k
if(q.f)++j}i.x.bw(i.d,b,k,j)
return k},
cI:function(a,b){var t,s,r,q,p,o,n,m=this
for(t=m.f,s=t.length,r=0,q=0,p=0;p<s;++p){o=t[p]
if(o.d)++r
if(o.f)++q}m.x.bw(m.d,a,r,q)
for(n=a;n<b;++n)if(m.bx(0,n)>=m.r)break},
sf3:function(a){this.f=u.r.a(a)}}
N.e5.prototype={}
N.bg.prototype={
ew:function(a,b){var t=this
u.V.a(b)
if(!t.r){t.f.src=t.e
t.y.$2(t,b)}}}
N.dV.prototype={
bz:function(a,b){this.x=a
this.z=a.getContext("2d")},
bt:function(a){var t=this.z,s=a.a,r=a.b,q=a.c,p=a.d
t.toString
t.fillStyle="rgba("+s+", "+r+", "+q+", "+p+")"},
ci:function(a){var t,s,r,q,p=this,o=a.d,n=o.length
if(n===0)return p.c
else{for(t=0,s=0,r=0;r<n;++r){q=o[r]
if(q.c)++t
if(q.r)++s}if(t===0&&s===0)return p.f
else if(t>0)return p.d
else return p.e}}}
N.el.prototype={
bd:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.bt(f.a)
t=f.x
s=t.width
r=t.height
f.z.fillRect(0,0,s,r)
t=a.a
if(typeof s!=="number")return s.au()
q=s/t
t=a.b
if(typeof r!=="number")return r.au()
p=r/t
o=q-1
n=p-1
for(m=0;m<a.b;++m)for(l=m*p,k=0;k<a.a;++k){t=a.c
if(m>=t.length)return H.d(t,m)
t=t[m]
if(k>=t.length)return H.d(t,k)
t=f.ci(t[k])
j=f.z
i=t.a
h=t.b
g=t.c
t=t.d
j.toString
j.fillStyle="rgba("+i+", "+h+", "+g+", "+t+")"
f.z.fillRect(k*q,l,o,n)}}}
N.e_.prototype={
bd:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
b.bt(b.a)
t=b.x
s=t.width
r=t.height
b.z.fillRect(0,0,s,r)
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.i(r)
t=a.a
q=C.b.a7(r,C.e.a5(Math.sqrt(s*r/t.length)))+1
p=C.b.a7(r,q)
o=C.i.a5(t.length/q)
n=p-1
m=r-p
l=p-12
for(k=0,j=0,i=0;i<t.length;++i){h=b.ci(t[i])
g=b.z
f=h.a
e=h.b
d=h.c
h=h.d
g.toString
g.fillStyle="rgba("+f+", "+e+", "+d+", "+h+")"
b.z.fillRect(k,m,n,n)
if(i>=t.length)return H.d(t,i)
c=t[i].c
b.z.strokeText(c,k+l,m+12)
k+=p;++j
if(j>o){m-=p
k=0
j=0}}}};(function aliases(){var t=J.H.prototype
t.cN=t.j
t=J.aK.prototype
t.cP=t.j
t=P.b7.prototype
t.cR=t.aO
t=P.m.prototype
t.cO=t.aJ
t=W.u.prototype
t.aM=t.T
t=W.cy.prototype
t.cT=t.a3
t=Y.bA.prototype
t.cS=t.cH
t=Y.aZ.prototype
t.cJ=t.a1
t.cK=t.aT
t.cL=t.fb
t=Y.bE.prototype
t.cU=t.a1
t=G.J.prototype
t.ac=t.l
t.cM=t.H
t=T.d9.prototype
t.cQ=t.cI})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_1i
t(P,"kK","jt",5)
t(P,"kL","ju",5)
t(P,"kM","jv",5)
s(P,"i6","kd",2)
r(P,"kN",1,null,["$2","$1"],["hX",function(a){return P.hX(a,null)}],8,0)
s(P,"i5","k8",2)
q(P.T.prototype,"gdd",0,1,null,["$2","$1"],["an","de"],8,0)
p(P.by.prototype,"ge4","e5",2)
r(W,"lo",4,null,["$4"],["jy"],7,0)
r(W,"lp",4,null,["$4"],["jz"],7,0)
t(T,"lt","j6",6)
t(T,"lu","jh",34)
o(T.d2.prototype,"geJ","eK",18)
t(Y,"ii","jW",6)
t(Y,"lB","jX",18)
var l
o(l=Y.aZ.prototype,"gdk","dl",14)
o(l,"gdi","dj",14)
o(l,"gaU","ax",10)
o(l,"gdJ","dK",3)
o(l,"gdN","dO",3)
o(l,"gdL","dM",3)
o(l,"gdS","dT",3)
o(Y.bE.prototype,"gdh","aT",26)
o(G.bS.prototype,"geg","eh",28)
o(l=F.dj.prototype,"geT","eU",3)
o(l,"gb9","eq",10)
n(l,"geB","eC",4)
n(l,"gez","eA",4)
n(l,"gex","ey",4)
n(l,"geD","eE",4)
m(N.bg.prototype,"gev","ew",3)
t(O,"kI","ly",0)
t(O,"kv","l3",0)
t(O,"kF","lc",0)
t(O,"kr","l_",0)
t(O,"ki","kR",0)
t(O,"kC","l9",0)
t(O,"ko","kX",0)
t(O,"kw","l4",0)
t(O,"kG","ld",0)
t(O,"ks","l0",0)
t(O,"kx","l5",0)
t(O,"i4","le",0)
t(O,"kt","l1",0)
t(O,"ky","l6",0)
t(O,"kH","lf",0)
t(O,"ku","l2",0)
t(O,"kk","kT",0)
t(O,"kE","lb",0)
t(O,"kq","kZ",0)
t(O,"kh","kQ",0)
t(O,"kB","l8",0)
t(O,"kn","kW",0)
t(O,"kj","kS",0)
t(O,"kD","la",0)
t(O,"kp","kY",0)
t(O,"i3","kP",0)
t(O,"kz","l7",0)
t(O,"kl","kU",0)
t(O,"kA","fS",0)
t(O,"km","kV",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.C,null)
r(P.C,[H.fz,J.H,J.au,P.m,H.bQ,H.b5,P.E,H.bW,H.eG,P.B,H.b_,H.cz,P.Z,H.eq,H.c2,H.ae,H.du,P.f9,P.aL,P.aE,P.b7,P.cp,P.T,P.dm,P.a_,P.dr,P.cv,P.by,P.bO,P.dM,P.cx,P.dz,P.b9,P.ct,P.q,P.F,P.z,P.ac,P.d3,P.cb,P.eP,P.ei,P.em,P.an,P.r,P.aj,P.G,P.a7,P.dG,P.o,P.b6,W.e6,W.fw,W.b8,W.a5,W.c9,W.cy,W.dH,W.b3,W.dq,W.W,W.dF,W.cG,P.dy,P.dC,P.L,P.dD,T.d2,T.f_,T.cB,B.bq,Y.aR,Y.bA,Y.cw,Y.aZ,G.bi,G.b1,G.bD,G.U,G.e7,X.aM,S.e4,L.bL,L.bX,O.al,O.bf,O.ef,T.da,T.d9,Z.eu,D.ex,B.d5,T.cf,N.e5,N.bg,N.dV])
r(J.H,[J.c_,J.cY,J.aK,J.w,J.aw,J.ax,W.A,W.aG,W.dp,W.eb,W.bT,W.e,W.dw,W.d_,W.dA,W.dN])
r(J.aK,[J.d4,J.aA,J.ao])
s(J.en,J.w)
r(J.aw,[J.bn,J.c0])
r(P.m,[H.aN,H.t,H.c5,H.aB,H.ay,P.bZ])
r(H.aN,[H.aY,H.cH])
s(H.cm,H.aY)
s(H.ch,H.cH)
s(H.bR,H.ch)
r(H.t,[H.R,H.bV,H.c1])
r(H.R,[H.cc,H.a6])
r(P.E,[H.c6,H.cg,H.ca])
s(H.bk,H.ay)
r(P.B,[H.d0,H.cZ,H.dh,H.d7,P.bN,H.dt,P.d1,P.ab,P.di,P.dg,P.ar,P.cQ,P.cR])
r(H.b_,[H.fm,H.df,H.ff,H.fg,H.fh,P.eL,P.eK,P.eM,P.eN,P.fa,P.f7,P.ej,P.eQ,P.eU,P.eR,P.eS,P.eT,P.eX,P.eY,P.eW,P.eV,P.eE,P.eF,P.f0,P.fd,P.f2,P.f1,P.f3,P.et,P.ec,P.ed,W.ee,W.eO,W.ew,W.ev,W.f4,W.f5,W.f8,W.fb,P.eg,P.eh,T.eA,Y.e2,Y.e3,Y.ep,Y.eo,G.e8,G.e9,G.ea,X.fl,L.ez,L.ey,F.eI])
r(H.df,[H.dc,H.be])
s(H.dl,P.bN)
s(P.c4,P.Z)
r(P.c4,[H.b4,W.dn])
s(H.cD,H.dt)
r(P.aL,[P.bC,W.cn])
s(P.bx,P.bC)
s(P.aC,P.bx)
s(P.cj,P.aE)
s(P.aD,P.cj)
s(P.cC,P.b7)
s(P.ck,P.dr)
s(P.cA,P.cv)
s(P.dE,P.dM)
s(P.cs,P.cx)
s(P.c3,P.ct)
r(P.z,[P.Y,P.a1])
r(P.ab,[P.bs,P.cX])
r(W.A,[W.j,W.bv])
r(W.j,[W.u,W.am,W.bw])
r(W.u,[W.k,P.h])
r(W.k,[W.bM,W.cO,W.bd,W.aW,W.aX,W.b2,W.cW,W.bl,W.d8,W.ce,W.dd,W.de,W.bu])
s(W.bh,W.dp)
r(P.c3,[W.ci,W.O,P.cV,G.J])
s(W.dx,W.dw)
s(W.aJ,W.dx)
s(W.ak,W.e)
s(W.S,W.ak)
s(W.dB,W.dA)
s(W.c8,W.dB)
s(W.cl,W.bT)
s(W.dO,W.dN)
s(W.cu,W.dO)
s(W.ds,W.dn)
s(W.bz,W.cn)
s(W.co,P.a_)
s(W.dI,W.cy)
r(P.dD,[P.aq,P.c7])
s(P.bt,P.h)
s(T.f6,P.bZ)
s(Y.bE,Y.aZ)
s(Y.X,Y.bA)
s(Y.bp,Y.bE)
r(G.bD,[G.Q,G.V])
r(G.J,[G.bS,G.cS])
r(O.ef,[O.ek,O.e0])
s(F.dk,T.da)
s(F.dj,T.d9)
s(B.cT,B.d5)
r(N.dV,[N.el,N.e_])
t(H.cH,P.q)
t(P.ct,P.q)
t(W.dp,W.e6)
t(W.dw,P.q)
t(W.dx,W.a5)
t(W.dA,P.q)
t(W.dB,W.a5)
t(W.dN,P.q)
t(W.dO,W.a5)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a1:"int",Y:"double",z:"num",o:"String",F:"bool",G:"Null",r:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["Y(Y)","G()","~()","~(S)","~(bg,S)","~(~())","o(o)","F(u,o,o,b8)","~(C[a7])","G(@)","~(z)","G(@,@)","@(@)","F(j)","~(b1)","F(W)","F(o)","o(a1)","o(@)","u(j)","o(bq)","@(e)","T<@>(@)","G(@[a7])","o(V)","~(aG)","~(bi)","X(X)","Q(@)","r<z>()","z(z)","@(o)","@(@,o)","G(~())","F(@)","~(j,j)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.jR(v.typeUniverse,JSON.parse('{"ao":"aK","d4":"aK","aA":"aK","lJ":"e","lQ":"e","lI":"h","lS":"h","lK":"k","lW":"k","lT":"j","lP":"j","m_":"S","lM":"ak","lL":"am","m0":"am","lU":"aJ","c_":{"F":[]},"cY":{"G":[]},"aK":{"an":[]},"w":{"r":["1"],"t":["1"],"m":["1"]},"en":{"w":["1"],"r":["1"],"t":["1"],"m":["1"]},"au":{"E":["1"]},"aw":{"Y":[],"z":[]},"bn":{"a1":[],"Y":[],"z":[]},"c0":{"Y":[],"z":[]},"ax":{"o":[],"fB":[]},"aN":{"m":["2"]},"bQ":{"E":["2"]},"aY":{"aN":["1","2"],"m":["2"],"m.E":"2"},"cm":{"aY":["1","2"],"t":["2"],"aN":["1","2"],"m":["2"],"m.E":"2"},"ch":{"q":["2"],"r":["2"],"aN":["1","2"],"t":["2"],"m":["2"]},"bR":{"ch":["1","2"],"q":["2"],"r":["2"],"aN":["1","2"],"t":["2"],"m":["2"],"q.E":"2","m.E":"2"},"t":{"m":["1"]},"R":{"t":["1"],"m":["1"]},"cc":{"R":["1"],"t":["1"],"m":["1"],"R.E":"1","m.E":"1"},"b5":{"E":["1"]},"c5":{"m":["2"],"m.E":"2"},"c6":{"E":["2"]},"a6":{"R":["2"],"t":["2"],"m":["2"],"R.E":"2","m.E":"2"},"aB":{"m":["1"],"m.E":"1"},"cg":{"E":["1"]},"ay":{"m":["1"],"m.E":"1"},"bk":{"ay":["1"],"t":["1"],"m":["1"],"m.E":"1"},"ca":{"E":["1"]},"bV":{"t":["1"],"m":["1"],"m.E":"1"},"bW":{"E":["1"]},"d0":{"B":[]},"cZ":{"B":[]},"dh":{"B":[]},"cz":{"a7":[]},"b_":{"an":[]},"df":{"an":[]},"dc":{"an":[]},"be":{"an":[]},"d7":{"B":[]},"dl":{"B":[]},"b4":{"ho":["1","2"],"Z":["1","2"],"aj":["1","2"],"Z.K":"1","Z.V":"2"},"c1":{"t":["1"],"m":["1"],"m.E":"1"},"c2":{"E":["1"]},"dt":{"B":[]},"cD":{"B":[]},"aC":{"bx":["1"],"bC":["1"],"aL":["1"]},"aD":{"cj":["1"],"aE":["1"],"aO":["1"],"a_":["1"]},"b7":{"eD":["1"],"aO":["1"],"hK":["1"]},"cC":{"b7":["1"],"eD":["1"],"aO":["1"],"hK":["1"]},"T":{"bY":["1"]},"bx":{"bC":["1"],"aL":["1"]},"cj":{"aE":["1"],"aO":["1"],"a_":["1"]},"aE":{"aO":["1"],"a_":["1"]},"bC":{"aL":["1"]},"ck":{"dr":["1"]},"cA":{"cv":["1"]},"by":{"a_":["1"]},"bO":{"B":[]},"dM":{"hD":[]},"dE":{"hD":[]},"cs":{"cx":["1"],"hz":["1"],"t":["1"],"m":["1"]},"b9":{"E":["1"]},"bZ":{"m":["1"]},"c3":{"q":["1"],"r":["1"],"t":["1"],"m":["1"]},"c4":{"Z":["1","2"],"aj":["1","2"]},"Z":{"aj":["1","2"]},"cx":{"hz":["1"],"t":["1"],"m":["1"]},"Y":{"z":[]},"bN":{"B":[]},"d1":{"B":[]},"ab":{"B":[]},"bs":{"B":[]},"cX":{"B":[]},"di":{"B":[]},"dg":{"B":[]},"ar":{"B":[]},"cQ":{"B":[]},"d3":{"B":[]},"cb":{"B":[]},"cR":{"B":[]},"a1":{"z":[]},"r":{"t":["1"],"m":["1"]},"dG":{"a7":[]},"o":{"fB":[]},"k":{"u":[],"j":[],"A":[]},"bM":{"u":[],"j":[],"A":[]},"cO":{"u":[],"j":[],"A":[]},"bd":{"u":[],"j":[],"A":[]},"aW":{"u":[],"j":[],"A":[]},"aX":{"u":[],"j":[],"A":[]},"am":{"j":[],"A":[]},"b2":{"u":[],"j":[],"A":[]},"bT":{"aq":["z"]},"ci":{"q":["u"],"r":["u"],"t":["u"],"m":["u"],"q.E":"u"},"u":{"j":[],"A":[]},"cW":{"u":[],"j":[],"A":[]},"aJ":{"a5":["j"],"q":["j"],"r":["j"],"bo":["j"],"t":["j"],"m":["j"],"q.E":"j","a5.E":"j"},"bl":{"u":[],"j":[],"A":[]},"S":{"e":[]},"O":{"q":["j"],"r":["j"],"t":["j"],"m":["j"],"q.E":"j"},"j":{"A":[]},"c8":{"a5":["j"],"q":["j"],"r":["j"],"bo":["j"],"t":["j"],"m":["j"],"q.E":"j","a5.E":"j"},"d8":{"u":[],"j":[],"A":[]},"ce":{"u":[],"j":[],"A":[]},"dd":{"u":[],"j":[],"A":[]},"de":{"u":[],"j":[],"A":[]},"bu":{"u":[],"j":[],"A":[]},"ak":{"e":[]},"bv":{"eJ":[],"A":[]},"bw":{"j":[],"A":[]},"cl":{"aq":["z"]},"cu":{"a5":["j"],"q":["j"],"r":["j"],"bo":["j"],"t":["j"],"m":["j"],"q.E":"j","a5.E":"j"},"dn":{"Z":["o","o"],"aj":["o","o"]},"ds":{"Z":["o","o"],"aj":["o","o"],"Z.K":"o","Z.V":"o"},"cn":{"aL":["1"]},"bz":{"cn":["1"],"aL":["1"]},"co":{"a_":["1"]},"b8":{"W":[]},"c9":{"W":[]},"cy":{"W":[]},"dI":{"W":[]},"dH":{"W":[]},"b3":{"E":["1"]},"dq":{"eJ":[],"A":[]},"dF":{"jq":[]},"cG":{"je":[]},"cV":{"q":["u"],"r":["u"],"t":["u"],"m":["u"],"q.E":"u"},"dy":{"fD":[]},"dC":{"fD":[]},"c7":{"aq":["1"]},"bt":{"h":[],"u":[],"j":[],"A":[]},"h":{"u":[],"j":[],"A":[]},"f6":{"m":["o"],"m.E":"o"},"cB":{"E":["o"]},"bE":{"aZ":[]},"X":{"bA":[]},"bp":{"aZ":[]},"Q":{"bD":[]},"V":{"bD":[]},"U":{"E":["1"]},"J":{"q":["1"],"r":["1"],"t":["1"],"m":["1"]},"bS":{"J":["Q"],"q":["Q"],"r":["Q"],"t":["Q"],"m":["Q"],"q.E":"Q","J.E":"Q"},"cS":{"J":["V"],"q":["V"],"r":["V"],"t":["V"],"m":["V"],"q.E":"V","J.E":"V"},"dk":{"da":[]},"cT":{"d5":[]}}'))
H.jQ(v.typeUniverse,JSON.parse('{"cH":2,"bZ":1,"c3":1,"c4":2,"ct":1,"dD":1}'))
var u=(function rtii(){var t=H.dR
return{gu:t("@<@>"),n:t("bO"),cR:t("bd"),t:t("aW"),gA:t("aX"),ar:t("aG"),B:t("bi"),br:t("J<bD>"),D:t("b1"),gT:t("V"),cZ:t("Q"),gn:t("b2"),d:t("ac"),X:t("t<@>"),h:t("u"),T:t("B"),E:t("e"),aS:t("A"),Z:t("an"),aQ:t("bY<G>"),c:t("bY<@>"),fS:t("bl"),eh:t("m<j>"),hf:t("m<@>"),I:t("w<bf>"),b8:t("w<V>"),bg:t("w<Q>"),u:t("w<bX>"),ct:t("w<r<bf>>"),gP:t("w<r<@>>"),i:t("w<W>"),db:t("w<a_<@>>"),s:t("w<o>"),au:t("w<bA>"),dm:t("w<cw>"),cO:t("w<@>"),Y:t("w<a1>"),a:t("w<z>"),g:t("ao"),aU:t("bo<@>"),r:t("r<bX>"),cA:t("r<r<bf>>"),k:t("r<o>"),cL:t("r<X>"),cM:t("r<cw>"),eV:t("r<aR>"),j:t("r<@>"),O:t("r<z>"),g6:t("aj<o,a1>"),f:t("aj<@,@>"),dv:t("a6<o,o>"),eu:t("a6<z,z>"),V:t("S"),m:t("c7<a1>"),A:t("j"),e:t("W"),P:t("G"),K:t("C"),H:t("L<z>"),G:t("aq<a1>"),q:t("aq<z>"),av:t("ae"),ew:t("bt"),l:t("a7"),fq:t("eD<bi>"),F:t("eD<b1>"),N:t("o"),Q:t("o(o)"),w:t("o(@)"),g7:t("h"),aW:t("bu"),ak:t("aA"),ci:t("eJ"),h9:t("bw"),ac:t("O"),C:t("bz<S>"),x:t("cp<@,@>"),_:t("T<@>"),fJ:t("T<a1>"),L:t("b8"),J:t("dz"),R:t("X"),W:t("aR"),y:t("F"),al:t("F(C)"),gR:t("Y"),b:t("Y(Y)"),z:t("@"),fO:t("@()"),U:t("@(e)"),v:t("@(C)"),p:t("@(C,a7)"),S:t("a1"),di:t("z"),f1:t("z(z)"),o:t("~"),M:t("~()"),a6:t("~(S)"),d5:t("~(C)"),da:t("~(C,a7)"),eA:t("~(o,o)"),c4:t("~(z)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.x=W.aW.prototype
C.p=W.aX.prototype
C.q=W.aG.prototype
C.d=W.bh.prototype
C.k=W.b2.prototype
C.a2=J.H.prototype
C.a=J.w.prototype
C.D=J.c_.prototype
C.i=J.c0.prototype
C.b=J.bn.prototype
C.e=J.aw.prototype
C.c=J.ax.prototype
C.a3=J.ao.prototype
C.I=J.d4.prototype
C.J=W.ce.prototype
C.t=J.aA.prototype
C.j=W.bv.prototype
C.v=new L.bL("AgeGroup.young")
C.w=new L.bL("AgeGroup.midlife")
C.N=new L.bL("AgeGroup.retired")
C.O=new O.al("BuildingType.home")
C.o=new O.al("BuildingType.community")
C.P=new O.al("BuildingType.hospital")
C.Q=new O.al("BuildingType.medical")
C.y=new O.al("BuildingType.restaurant")
C.R=new O.al("BuildingType.school")
C.z=new O.al("BuildingType.shop")
C.A=new O.al("BuildingType.theater")
C.S=new H.bW(H.dR("bW<G>"))
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.T=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.Y=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.U=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.V=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.X=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.W=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.C=function(hooks) { return hooks; }

C.Z=new P.d3()
C.h=new P.dy()
C.f=new P.dE()
C.a_=new P.dG()
C.a0=new P.ac(0)
C.a1=new P.ac(1000)
C.a4=H.l(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.s)
C.E=H.l(t(["beaver","river","clerp","pleasant","plain","spunt","spung","twang","null","modus","mung","hack","fox","bear","hawk","ball","dodge","crab","spider","meep","keel","gunge","sping","nerp","soot","kek","blint","dimp","fehj","eagle","swan","duck","desert","rock","copper","silver","gold","apple","orange","john","mary","smith","adam","eve","thor","loki","anthony","ignatio","charles","avery","zelda","luke","vader","solo","sam","merry","narr","buckle","belt","potter","cobble","cooper","zipper","button","poont","zow","glerge","shrike","clang","turtle","vaca","astra","bang","ting","ooch","swarf","wort","sparge","bug","palp","cap","bar","poole","ween","kek","bool","knuth","wirth","tur","ada","babbage","hopper"]),u.s)
C.F=H.l(t(["ton"," City","field","tor","dor","ta","more"," Village"," Township"," Falls"," Plains"," Springs"," Ditch"," Creek"," Lake"," Canyon"," Bay"," Harbor"," Shores"," Vista"," View"," by the Sea"," Town","dale"," Bridge"," Grove","ville","land"," Landing"," Oaks"," Woods"," Valley"," Flat"," Peak"," Rapids"," Cut"," Basin"," Pass"," Point"," Grove"," Bend"," Haven"," Beach"," Pairie"," Park"," Shore"," Point"," Cove"," Hill"," Bluff"," Crossing"," Falls"," Junction"," Hollow"," Rest"," Knoll"," Cave"," Gate"," Ridge"," Fen"," Beach","mont","ly","burg","ham","wold","ford","son","well","wick","land","don"]),u.s)
C.a5=H.l(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.s)
C.a6=H.l(t([]),u.s)
C.G=H.l(t(["New ","Old ","St. ","Ban-","Tri-","Mor","Grand ","Mt. ","Mar ","North ","East ","West ","South ","Port ","Fort ","Red ","Green ","Blue ","Big ","Ben ","Main "]),u.s)
C.H=H.l(t(["bind","if","ref","repeat","syntax"]),u.s)
C.r=H.l(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.s)
C.a7=H.l(t([0,-45,45,-90,90]),u.Y)
C.K=new T.cf("TimePeriod.day")
C.L=new T.cf("TimePeriod.evening")
C.M=new T.cf("TimePeriod.night")
C.l=new Y.aR(0,"_VisibilityState.hidden")
C.m=new Y.aR(1,"_VisibilityState.hiding")
C.n=new Y.aR(2,"_VisibilityState.showing")
C.u=new Y.aR(3,"_VisibilityState.shown")})();(function staticFields(){$.av=0
$.bP=null
$.h7=null
$.id=null
$.i2=null
$.ik=null
$.fe=null
$.fi=null
$.fU=null
$.bF=null
$.cI=null
$.cJ=null
$.fO=!1
$.D=C.f
$.a8=[]
$.aH=null
$.fv=null
$.hh=null
$.hg=null
$.dv=P.er(u.N,u.Z)
$.he=null
$.hd=null
$.hc=null
$.hb=null
$.hk=null
$.i8=P.p(["ADP",0,"AFN",0,"ALL",0,"AMD",2,"BHD",3,"BIF",0,"BYN",2,"BYR",0,"CAD",2,"CHF",2,"CLF",4,"CLP",0,"COP",2,"CRC",2,"CZK",2,"DEFAULT",2,"DJF",0,"DKK",2,"ESP",0,"GNF",0,"GYD",2,"HUF",2,"IDR",2,"IQD",0,"IRR",0,"ISK",0,"ITL",0,"JOD",3,"JPY",0,"KMF",0,"KPW",0,"KRW",0,"KWD",3,"LAK",0,"LBP",0,"LUF",0,"LYD",3,"MGA",0,"MGF",0,"MMK",0,"MNT",2,"MRO",0,"MUR",2,"NOK",2,"OMR",3,"PKR",2,"PYG",0,"RSD",0,"RWF",0,"SEK",2,"SLL",0,"SOS",0,"STD",0,"SYP",0,"TMM",0,"TND",3,"TRL",0,"TWD",2,"TZS",2,"UGX",0,"UYI",0,"UYW",4,"UZS",2,"VEF",2,"VND",0,"VUV",0,"XAF",0,"XOF",0,"XPF",0,"YER",0,"ZMK",0,"ZWD",0],u.N,u.S)
$.fT=function(){var t='"Segoe UI", "Open Sans", Verdana, Arial',s=u.N,r=u.K
return P.p(["animation",P.p(["duration",800,"easing",O.i4(),"onEnd",null],s,r),"backgroundColor","white","colors",H.l(["#7cb5ec","#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#8085e8","#8d4653","#91e8e1"],u.s),"legend",P.p(["labelFormatter",null,"position","right","style",P.p(["backgroundColor","transparent","borderColor","#212121","borderWidth",0,"color","#212121","fontFamily",t,"fontSize",13,"fontStyle","normal"],s,r)],s,r),"title",P.p(["position","above","style",P.p(["color","#212121","fontFamily",t,"fontSize",20,"fontStyle","normal"],s,r),"text",null],s,r),"tooltip",P.p(["enabled",!0,"labelFormatter",null,"style",P.p(["backgroundColor","white","borderColor","#212121","borderWidth",2,"color","#212121","fontFamily",t,"fontSize",13,"fontStyle","normal"],s,r),"valueFormatter",null],s,r)],s,r)}()
$.h9=function(){var t=u.N
return P.er(t,t)}()
$.hj=0})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"lO","it",function(){return H.ib("_$dart_dartClosure")})
t($,"lV","fZ",function(){return H.ib("_$dart_js")})
t($,"m1","iv",function(){return H.az(H.eH({
toString:function(){return"$receiver$"}}))})
t($,"m2","iw",function(){return H.az(H.eH({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"m3","ix",function(){return H.az(H.eH(null))})
t($,"m4","iy",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"m7","iB",function(){return H.az(H.eH(void 0))})
t($,"m8","iC",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"m6","iA",function(){return H.az(H.hC(null))})
t($,"m5","iz",function(){return H.az(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"ma","iE",function(){return H.az(H.hC(void 0))})
t($,"m9","iD",function(){return H.az(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"mb","h_",function(){return P.js()})
t($,"lR","fY",function(){var s=new P.T(C.f,H.dR("T<G>"))
s.e9(null)
return s})
t($,"md","iG",function(){return new Error().stack!=void 0})
t($,"lN","is",function(){return{}})
t($,"mc","iF",function(){return P.hp(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"lX","fn",function(){return P.fW(10)})
t($,"lZ","fo",function(){var s=P.lC(2,52)
return s})
t($,"lY","iu",function(){return C.i.cf(P.fW($.fo())/P.fW(10))})
t($,"mi","h0",function(){var s=",",r="\xa0",q="%",p="0",o="+",n="-",m="E",l="\u2030",k="\u221e",j="NaN",i="#,##0.###",h="#E0",g="#,##0%",f="\xa4#,##0.00",e=".",d="\u200e+",c="\u200e-",b="\u0644\u064a\u0633\xa0\u0631\u0642\u0645\u064b\u0627",a="\xa4\xa0#,##0.00",a0="#,##0.00\xa0\xa4",a1="#,##0\xa0%",a2="#,##,##0.###",a3="EUR",a4="USD",a5="\xa4\xa0#,##0.00;\xa4-#,##0.00",a6="CHF",a7="#,##,##0%",a8="\xa4\xa0#,##,##0.00",a9="INR",b0="\u2212",b1="\xd710^",b2="[#E0]",b3="\xa4#,##,##0.00",b4="\u200f#,##0.00\xa0\xa4;\u200f-#,##0.00\xa0\xa4"
return P.p(["af",B.a(f,i,s,"ZAR",m,r,k,n,"af",j,q,g,l,o,h,p),"am",B.a(f,i,e,"ETB",m,s,k,n,"am",j,q,g,l,o,h,p),"ar",B.a(a,i,e,"EGP",m,s,k,c,"ar",b,"\u200e%\u200e",g,l,d,h,p),"ar_DZ",B.a(a,i,s,"DZD",m,e,k,c,"ar_DZ",b,"\u200e%\u200e",g,l,d,h,p),"ar_EG",B.a(a0,i,"\u066b","EGP","\u0627\u0633","\u066c",k,"\u061c-","ar_EG","\u0644\u064a\u0633\xa0\u0631\u0642\u0645","\u066a\u061c",g,"\u0609","\u061c+",h,"\u0660"),"az",B.a(a0,i,s,"AZN",m,e,k,n,"az",j,q,g,l,o,h,p),"be",B.a(a0,i,s,"BYN",m,r,k,n,"be",j,q,a1,l,o,h,p),"bg",B.a("0.00\xa0\xa4",i,s,"BGN",m,r,k,n,"bg",j,q,g,l,o,h,p),"bn",B.a("#,##,##0.00\xa4",a2,e,"BDT",m,s,k,n,"bn",j,q,g,l,o,h,"\u09e6"),"br",B.a(a0,i,s,a3,m,r,k,n,"br",j,q,a1,l,o,h,p),"bs",B.a(a0,i,s,"BAM",m,e,k,n,"bs",j,q,a1,l,o,h,p),"ca",B.a(a0,i,s,a3,m,e,k,n,"ca",j,q,g,l,o,h,p),"chr",B.a(f,i,e,a4,m,s,k,n,"chr",j,q,g,l,o,h,p),"cs",B.a(a0,i,s,"CZK",m,r,k,n,"cs",j,q,a1,l,o,h,p),"cy",B.a(f,i,e,"GBP",m,s,k,n,"cy",j,q,g,l,o,h,p),"da",B.a(a0,i,s,"DKK",m,e,k,n,"da",j,q,a1,l,o,h,p),"de",B.a(a0,i,s,a3,m,e,k,n,"de",j,q,a1,l,o,h,p),"de_AT",B.a(a,i,s,a3,m,r,k,n,"de_AT",j,q,a1,l,o,h,p),"de_CH",B.a(a5,i,e,a6,m,"\u2019",k,n,"de_CH",j,q,g,l,o,h,p),"el",B.a(a0,i,s,a3,"e",e,k,n,"el",j,q,g,l,o,h,p),"en",B.a(f,i,e,a4,m,s,k,n,"en",j,q,g,l,o,h,p),"en_AU",B.a(f,i,e,"AUD","e",s,k,n,"en_AU",j,q,g,l,o,h,p),"en_CA",B.a(f,i,e,"CAD","e",s,k,n,"en_CA",j,q,g,l,o,h,p),"en_GB",B.a(f,i,e,"GBP",m,s,k,n,"en_GB",j,q,g,l,o,h,p),"en_IE",B.a(f,i,e,a3,m,s,k,n,"en_IE",j,q,g,l,o,h,p),"en_IN",B.a(a8,a2,e,a9,m,s,k,n,"en_IN",j,q,a7,l,o,h,p),"en_MY",B.a(f,i,e,"MYR",m,s,k,n,"en_MY",j,q,g,l,o,h,p),"en_SG",B.a(f,i,e,"SGD",m,s,k,n,"en_SG",j,q,g,l,o,h,p),"en_US",B.a(f,i,e,a4,m,s,k,n,"en_US",j,q,g,l,o,h,p),"en_ZA",B.a(f,i,s,"ZAR",m,r,k,n,"en_ZA",j,q,g,l,o,h,p),"es",B.a(a0,i,s,a3,m,e,k,n,"es",j,q,a1,l,o,h,p),"es_419",B.a(f,i,e,"MXN",m,s,k,n,"es_419",j,q,a1,l,o,h,p),"es_ES",B.a(a0,i,s,a3,m,e,k,n,"es_ES",j,q,a1,l,o,h,p),"es_MX",B.a(f,i,e,"MXN",m,s,k,n,"es_MX",j,q,a1,l,o,h,p),"es_US",B.a(f,i,e,a4,m,s,k,n,"es_US",j,q,a1,l,o,h,p),"et",B.a(a0,i,s,a3,b1,r,k,b0,"et",j,q,g,l,o,h,p),"eu",B.a(a0,i,s,a3,m,e,k,b0,"eu",j,q,"%\xa0#,##0",l,o,h,p),"fa",B.a("\u200e\xa4#,##0.00",i,"\u066b","IRR","\xd7\u06f1\u06f0^","\u066c",k,"\u200e\u2212","fa","\u0646\u0627\u0639\u062f\u062f","\u066a",g,"\u0609",d,h,"\u06f0"),"fi",B.a(a0,i,s,a3,m,r,k,b0,"fi","ep\xe4luku",q,a1,l,o,h,p),"fil",B.a(f,i,e,"PHP",m,s,k,n,"fil",j,q,g,l,o,h,p),"fr",B.a(a0,i,s,a3,m,"\u202f",k,n,"fr",j,q,a1,l,o,h,p),"fr_CA",B.a(a0,i,s,"CAD",m,r,k,n,"fr_CA",j,q,a1,l,o,h,p),"fr_CH",B.a(a0,i,s,a6,m,"\u202f",k,n,"fr_CH",j,q,g,l,o,h,p),"ga",B.a(f,i,e,a3,m,s,k,n,"ga",j,q,g,l,o,h,p),"gl",B.a(a0,i,s,a3,m,e,k,n,"gl",j,q,a1,l,o,h,p),"gsw",B.a(a0,i,e,a6,m,"\u2019",k,b0,"gsw",j,q,a1,l,o,h,p),"gu",B.a(b3,a2,e,a9,m,s,k,n,"gu",j,q,a7,l,o,b2,p),"haw",B.a(f,i,e,a4,m,s,k,n,"haw",j,q,g,l,o,h,p),"he",B.a(b4,i,e,"ILS",m,s,k,c,"he",j,q,g,l,d,h,p),"hi",B.a(b3,a2,e,a9,m,s,k,n,"hi",j,q,a7,l,o,b2,p),"hr",B.a(a0,i,s,"HRK",m,e,k,n,"hr",j,q,a1,l,o,h,p),"hu",B.a(a0,i,s,"HUF",m,r,k,n,"hu",j,q,g,l,o,h,p),"hy",B.a(a0,i,s,"AMD",m,r,k,n,"hy","\u0548\u0579\u0539",q,g,l,o,h,p),"id",B.a(f,i,s,"IDR",m,e,k,n,"id",j,q,g,l,o,h,p),"in",B.a(f,i,s,"IDR",m,e,k,n,"in",j,q,g,l,o,h,p),"is",B.a(a0,i,s,"ISK",m,e,k,n,"is",j,q,g,l,o,h,p),"it",B.a(a0,i,s,a3,m,e,k,n,"it",j,q,g,l,o,h,p),"it_CH",B.a(a5,i,e,a6,m,"\u2019",k,n,"it_CH",j,q,g,l,o,h,p),"iw",B.a(b4,i,e,"ILS",m,s,k,c,"iw",j,q,g,l,d,h,p),"ja",B.a(f,i,e,"JPY",m,s,k,n,"ja",j,q,g,l,o,h,p),"ka",B.a(a0,i,s,"GEL",m,r,k,n,"ka","\u10d0\u10e0\xa0\u10d0\u10e0\u10d8\u10e1\xa0\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8",q,g,l,o,h,p),"kk",B.a(a0,i,s,"KZT",m,r,k,n,"kk","\u0441\u0430\u043d\xa0\u0435\u043c\u0435\u0441",q,g,l,o,h,p),"km",B.a("#,##0.00\xa4",i,s,"KHR",m,e,k,n,"km",j,q,g,l,o,h,p),"kn",B.a(f,i,e,a9,m,s,k,n,"kn",j,q,g,l,o,h,p),"ko",B.a(f,i,e,"KRW",m,s,k,n,"ko",j,q,g,l,o,h,p),"ky",B.a(a0,i,s,"KGS",m,r,k,n,"ky","\u0441\u0430\u043d\xa0\u044d\u043c\u0435\u0441",q,g,l,o,h,p),"ln",B.a(a0,i,s,"CDF",m,e,k,n,"ln",j,q,g,l,o,h,p),"lo",B.a("\xa4#,##0.00;\xa4-#,##0.00",i,s,"LAK",m,e,k,n,"lo","\u0e9a\u0ecd\u0ec8\u200b\u0ec1\u0ea1\u0ec8\u0e99\u200b\u0ec2\u0e95\u200b\u0ec0\u0ea5\u0e81",q,g,l,o,"#",p),"lt",B.a(a0,i,s,a3,b1,r,k,b0,"lt",j,q,a1,l,o,h,p),"lv",B.a(a0,i,s,a3,m,r,k,n,"lv","NS",q,g,l,o,h,p),"mk",B.a(a0,i,s,"MKD",m,e,k,n,"mk",j,q,g,l,o,h,p),"ml",B.a(f,a2,e,a9,m,s,k,n,"ml",j,q,g,l,o,h,p),"mn",B.a(a,i,e,"MNT",m,s,k,n,"mn",j,q,g,l,o,h,p),"mr",B.a(f,a2,e,a9,m,s,k,n,"mr",j,q,g,l,o,b2,"\u0966"),"ms",B.a(f,i,e,"MYR",m,s,k,n,"ms",j,q,g,l,o,h,p),"mt",B.a(f,i,e,a3,m,s,k,n,"mt",j,q,g,l,o,h,p),"my",B.a(a0,i,e,"MMK",m,s,k,n,"my","\u1002\u100f\u1014\u103a\u1038\u1019\u101f\u102f\u1010\u103a\u101e\u1031\u102c",q,g,l,o,h,"\u1040"),"nb",B.a(a,i,s,"NOK",m,r,k,b0,"nb",j,q,a1,l,o,h,p),"ne",B.a(a,i,e,"NPR",m,s,k,n,"ne",j,q,g,l,o,h,"\u0966"),"nl",B.a("\xa4\xa0#,##0.00;\xa4\xa0-#,##0.00",i,s,a3,m,e,k,n,"nl",j,q,g,l,o,h,p),"no",B.a(a,i,s,"NOK",m,r,k,b0,"no",j,q,a1,l,o,h,p),"no_NO",B.a(a,i,s,"NOK",m,r,k,b0,"no_NO",j,q,a1,l,o,h,p),"or",B.a(f,a2,e,a9,m,s,k,n,"or",j,q,g,l,o,h,p),"pa",B.a(a8,a2,e,a9,m,s,k,n,"pa",j,q,a7,l,o,b2,p),"pl",B.a(a0,i,s,"PLN",m,r,k,n,"pl",j,q,g,l,o,h,p),"ps",B.a(a0,i,"\u066b","AFN","\xd7\u06f1\u06f0^","\u066c",k,"\u200e-\u200e","ps",j,"\u066a",g,"\u0609","\u200e+\u200e",h,"\u06f0"),"pt",B.a(a,i,s,"BRL",m,e,k,n,"pt",j,q,g,l,o,h,p),"pt_BR",B.a(a,i,s,"BRL",m,e,k,n,"pt_BR",j,q,g,l,o,h,p),"pt_PT",B.a(a0,i,s,a3,m,r,k,n,"pt_PT",j,q,g,l,o,h,p),"ro",B.a(a0,i,s,"RON",m,e,k,n,"ro",j,q,a1,l,o,h,p),"ru",B.a(a0,i,s,"RUB",m,r,k,n,"ru","\u043d\u0435\xa0\u0447\u0438\u0441\u043b\u043e",q,a1,l,o,h,p),"si",B.a(f,i,e,"LKR",m,s,k,n,"si",j,q,g,l,o,"#",p),"sk",B.a(a0,i,s,a3,"e",r,k,n,"sk",j,q,a1,l,o,h,p),"sl",B.a(a0,i,s,a3,"e",e,k,b0,"sl",j,q,a1,l,o,h,p),"sq",B.a(a0,i,s,"ALL",m,r,k,n,"sq",j,q,g,l,o,h,p),"sr",B.a(a0,i,s,"RSD",m,e,k,n,"sr",j,q,g,l,o,h,p),"sr_Latn",B.a(a0,i,s,"RSD",m,e,k,n,"sr_Latn",j,q,g,l,o,h,p),"sv",B.a(a0,i,s,"SEK",b1,r,k,b0,"sv",j,q,a1,l,o,h,p),"sw",B.a(a,i,e,"TZS",m,s,k,n,"sw",j,q,g,l,o,h,p),"ta",B.a(a8,a2,e,a9,m,s,k,n,"ta",j,q,a7,l,o,h,p),"te",B.a(b3,a2,e,a9,m,s,k,n,"te",j,q,g,l,o,h,p),"th",B.a(f,i,e,"THB",m,s,k,n,"th",j,q,g,l,o,h,p),"tl",B.a(f,i,e,"PHP",m,s,k,n,"tl",j,q,g,l,o,h,p),"tr",B.a(f,i,s,"TRY",m,e,k,n,"tr",j,q,"%#,##0",l,o,h,p),"uk",B.a(a0,i,s,"UAH","\u0415",r,k,n,"uk",j,q,g,l,o,h,p),"ur",B.a(a,i,e,"PKR",m,s,k,c,"ur",j,q,g,l,d,h,p),"uz",B.a(a0,i,s,"UZS",m,r,k,n,"uz","son\xa0emas",q,g,l,o,h,p),"vi",B.a(a0,i,s,"VND",m,e,k,n,"vi",j,q,g,l,o,h,p),"zh",B.a(f,i,e,"CNY",m,s,k,n,"zh",j,q,g,l,o,h,p),"zh_CN",B.a(f,i,e,"CNY",m,s,k,n,"zh_CN",j,q,g,l,o,h,p),"zh_HK",B.a(f,i,e,"HKD",m,s,k,n,"zh_HK","\u975e\u6578\u503c",q,g,l,o,h,p),"zh_TW",B.a(f,i,e,"TWD",m,s,k,n,"zh_TW","\u975e\u6578\u503c",q,g,l,o,h,p),"zu",B.a(f,i,e,"ZAR",m,s,k,n,"zu",j,q,g,l,o,h,p)],u.N,H.dR("bq"))})
t($,"me","iH",function(){var s='"Segoe UI", "Open Sans", Verdana, Arial',r=u.N,q=u.K,p=H.dR("aj<o,C>")
return P.p(["series",P.p(["curveTension",0.4,"fillOpacity",0.25,"lineWidth",2,"labels",P.p(["enabled",!1,"style",P.p(["color","#212121","fontFamily",s,"fontSize",13,"fontStyle","normal"],r,q)],r,q),"markers",P.p(["enabled",!0,"fillColor",null,"lineWidth",1,"strokeColor","white","size",4],r,q)],r,q),"xAxis",P.p(["gridLineColor","#c0c0c0","gridLineWidth",1,"lineColor","#c0c0c0","lineWidth",1,"labels",P.p(["maxRotation",0,"minRotation",-90,"style",P.p(["color","#212121","fontFamily",s,"fontSize",13,"fontStyle","normal"],r,q)],r,q),"position","bottom","title",P.p(["style",P.p(["color","#212121","fontFamily",s,"fontSize",15,"fontStyle","normal"],r,q),"text",null],r,p)],r,q),"yAxis",P.p(["gridLineColor","#c0c0c0","gridLineWidth",0,"lineColor","#c0c0c0","lineWidth",0,"interval",null,"labels",P.p(["formatter",null,"style",P.p(["color","#212121","fontFamily",s,"fontSize",13,"fontStyle","normal"],r,q)],r,p),"maxValue",null,"minInterval",null,"minValue",null,"position","left","title",P.p(["style",P.p(["color","#212121","fontFamily",s,"fontSize",15,"fontStyle","normal"],r,q),"text",null],r,p)],r,q)],r,p)})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.H,CanvasPattern:J.H,DOMError:J.H,DOMImplementation:J.H,MediaError:J.H,Navigator:J.H,NavigatorConcurrentHardware:J.H,NavigatorUserMediaError:J.H,OverconstrainedError:J.H,PositionError:J.H,Range:J.H,TextMetrics:J.H,WebGLRenderingContext:J.H,WebGL2RenderingContext:J.H,SQLError:J.H,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.bM,HTMLAreaElement:W.cO,HTMLBaseElement:W.bd,HTMLBodyElement:W.aW,HTMLCanvasElement:W.aX,CanvasRenderingContext2D:W.aG,CDATASection:W.am,CharacterData:W.am,Comment:W.am,ProcessingInstruction:W.am,Text:W.am,CSSStyleDeclaration:W.bh,MSStyleCSSProperties:W.bh,CSS2Properties:W.bh,HTMLDivElement:W.b2,DOMException:W.eb,DOMRectReadOnly:W.bT,Element:W.u,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,SubmitEvent:W.e,EventTarget:W.A,HTMLFormElement:W.cW,HTMLCollection:W.aJ,HTMLFormControlsCollection:W.aJ,HTMLOptionsCollection:W.aJ,HTMLImageElement:W.bl,Location:W.d_,MouseEvent:W.S,DragEvent:W.S,PointerEvent:W.S,WheelEvent:W.S,Document:W.j,DocumentFragment:W.j,HTMLDocument:W.j,ShadowRoot:W.j,XMLDocument:W.j,DocumentType:W.j,Node:W.j,NodeList:W.c8,RadioNodeList:W.c8,HTMLSelectElement:W.d8,HTMLTableElement:W.ce,HTMLTableRowElement:W.dd,HTMLTableSectionElement:W.de,HTMLTemplateElement:W.bu,CompositionEvent:W.ak,FocusEvent:W.ak,KeyboardEvent:W.ak,TextEvent:W.ak,TouchEvent:W.ak,UIEvent:W.ak,Window:W.bv,DOMWindow:W.bv,Attr:W.bw,ClientRect:W.cl,DOMRect:W.cl,NamedNodeMap:W.cu,MozNamedAttrMap:W.cu,SVGScriptElement:P.bt,SVGAElement:P.h,SVGAnimateElement:P.h,SVGAnimateMotionElement:P.h,SVGAnimateTransformElement:P.h,SVGAnimationElement:P.h,SVGCircleElement:P.h,SVGClipPathElement:P.h,SVGDefsElement:P.h,SVGDescElement:P.h,SVGDiscardElement:P.h,SVGEllipseElement:P.h,SVGFEBlendElement:P.h,SVGFEColorMatrixElement:P.h,SVGFEComponentTransferElement:P.h,SVGFECompositeElement:P.h,SVGFEConvolveMatrixElement:P.h,SVGFEDiffuseLightingElement:P.h,SVGFEDisplacementMapElement:P.h,SVGFEDistantLightElement:P.h,SVGFEFloodElement:P.h,SVGFEFuncAElement:P.h,SVGFEFuncBElement:P.h,SVGFEFuncGElement:P.h,SVGFEFuncRElement:P.h,SVGFEGaussianBlurElement:P.h,SVGFEImageElement:P.h,SVGFEMergeElement:P.h,SVGFEMergeNodeElement:P.h,SVGFEMorphologyElement:P.h,SVGFEOffsetElement:P.h,SVGFEPointLightElement:P.h,SVGFESpecularLightingElement:P.h,SVGFESpotLightElement:P.h,SVGFETileElement:P.h,SVGFETurbulenceElement:P.h,SVGFilterElement:P.h,SVGForeignObjectElement:P.h,SVGGElement:P.h,SVGGeometryElement:P.h,SVGGraphicsElement:P.h,SVGImageElement:P.h,SVGLineElement:P.h,SVGLinearGradientElement:P.h,SVGMarkerElement:P.h,SVGMaskElement:P.h,SVGMetadataElement:P.h,SVGPathElement:P.h,SVGPatternElement:P.h,SVGPolygonElement:P.h,SVGPolylineElement:P.h,SVGRadialGradientElement:P.h,SVGRectElement:P.h,SVGSetElement:P.h,SVGStopElement:P.h,SVGStyleElement:P.h,SVGSVGElement:P.h,SVGSwitchElement:P.h,SVGSymbolElement:P.h,SVGTSpanElement:P.h,SVGTextContentElement:P.h,SVGTextElement:P.h,SVGTextPathElement:P.h,SVGTextPositioningElement:P.h,SVGTitleElement:P.h,SVGUseElement:P.h,SVGViewElement:P.h,SVGGradientElement:P.h,SVGComponentTransferFunctionElement:P.h,SVGFEDropShadowElement:P.h,SVGMPathElement:P.h,SVGElement:P.h})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,TextMetrics:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLImageElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ih,[])
else F.ih([])})})()
//# sourceMappingURL=main.dart.js.map
