"use strict";(self["webpackChunktirc_official_web"]=self["webpackChunktirc_official_web"]||[]).push([[792],{9208:function(i,e,l){l.r(e),l.d(e,{default:function(){return H}});var s=l(3396),t=l(7139);const o={class:"spotDescription"},n={class:"textColumn"},a={class:"myH3"},c=["innerHTML"],u={class:"setImgBlock"},d=["src"],r={key:0,class:"ratio ratio-16x9 videoStyle"},p=["src"],m=["onClick"];function g(i,e,l,g,v,b){const w=(0,s.up)("CIcon");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",n,[(0,s._)("div",a,(0,t.zw)(i.$t("spot")),1),(0,s._)("div",{class:"myH5",innerHTML:i.$t("spotC1")},null,8,c),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.spotTable,(i=>((0,s.wg)(),(0,s.iD)("div",{class:"setTable",key:i.id},[(0,s._)("div",u,[(0,s._)("img",{class:"setImg",src:i.img},null,8,d)])])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.videoJson[1].video,(i=>((0,s.wg)(),(0,s.iD)("div",{class:"videoBlock",key:i},["wlkCQXHEgjA"===i.id?((0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("iframe",{src:i.video,class:"embed-responsive-item",loading:"lazy",allow:"autoplay;",allowfullscreen:""},null,8,p),(0,s._)("div",{class:"overlay",onClick:e=>g.previewImgClick(i,e)},[(0,s.Wm)(w,{icon:g.cilMediaPlay,class:"setIcon"},null,8,["icon"]),(0,s._)("div",{class:"thumbnail",style:(0,t.j5)(`\n            background-image: url('${i.thumbnail}');`)},null,4)],8,m)])):(0,s.kq)("",!0)])))),128))])])}var v=l(4870),b=l(4434),w=l(3116),f=l(7411),k=l(6265),y=l.n(k),h=l(7387),_={setup(){const i=(0,v.qj)(b),e=[{img:l(6441)},{img:l(2575)}],s=()=>{let e=i[1].video,l=`https://www.googleapis.com/youtube/v3/videos?id=${e[5].id}&key=AIzaSyBXCxbE2nHTvZ7oQgVfiVT48HnDLR19sKI&part=snippet`;console.log("request url: "+l),y()(l).then((function(i){console.log(i),null!=i.data.items[0].snippet.thumbnails.maxres?e[5].thumbnail=i.data.items[0].snippet.thumbnails.maxres.url:e[5].thumbnail=i.data.items[0].snippet.thumbnails.high.url})).catch((function(i){console.log(`youtube api request failed! id = ${e[5].id}`,i)}))};s();const t=(i,e)=>{var l=e.target;h(l).hide(),console.log("clickedElement",l),i.video=`https://www.youtube.com/embed/${i.id}?autoplay=1`};return{spotTable:e,videoJson:i,previewImgClick:t,CIcon:w.m,cilMediaPlay:f.B}}},C=l(89);const I=(0,C.Z)(_,[["render",g],["__scopeId","data-v-6918a3d3"]]);var H=I},6441:function(i,e,l){i.exports=l.p+"img/spotImg1.5ec9a7cd.webp"},2575:function(i,e,l){i.exports=l.p+"img/spotImg2.b0087835.webp"}}]);
//# sourceMappingURL=SpotDescription.d0c20826.js.map