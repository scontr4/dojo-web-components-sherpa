import{a as s}from"./chunk-UF5KYJZF.js";import"./chunk-7WKN7RHO.js";import"./chunk-SOKYLR33.js";import{e as t}from"./chunk-BJLKKKAO.js";var o=class extends s{getCurrentPosition(i){return t(this,null,function*(){return new Promise((n,a)=>{navigator.geolocation.getCurrentPosition(e=>{n(e)},e=>{a(e)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},i))})})}watchPosition(i,n){return t(this,null,function*(){return`${navigator.geolocation.watchPosition(e=>{n(e)},e=>{n(null,e)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},i))}`})}clearWatch(i){return t(this,null,function*(){window.navigator.geolocation.clearWatch(parseInt(i.id,10))})}checkPermissions(){return t(this,null,function*(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");let i=yield window.navigator.permissions.query({name:"geolocation"});return{location:i.state,coarseLocation:i.state}})}requestPermissions(){return t(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}},l=new o;export{l as Geolocation,o as GeolocationWeb};
