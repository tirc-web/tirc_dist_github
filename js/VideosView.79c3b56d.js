"use strict";(self["webpackChunktirc_official_web"]=self["webpackChunktirc_official_web"]||[]).push([[676],{530:function(i,l,e){e.r(l),e.d(l,{default:function(){return H}});var t=e(3396),a=e(7139);const o={class:"textColumn"},r={class:"myH3"},c={class:"h3",style:{display:"flex","text-align":"center",color:"var(--bs-dark)","align-items":"center"}},s={class:"setTitle"},n={class:"ratio ratio-16x9 videoStyle"},u=["src"],d=["onClick"];function m(i,l,e,m,p,y){const v=(0,t.up)("CIcon");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",r,(0,a.zw)(i.$t("videos")),1),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(m.videoJson,(l=>((0,t.wg)(),(0,t.iD)("div",{key:l},[(0,t._)("div",c,[(0,t.Wm)(v,{icon:m.cilFeaturedPlaylist,class:"playlistIcon"},null,8,["icon"]),(0,t.Uk)(" "+(0,a.zw)(i.$t(l.channel)),1)]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.video,(i=>((0,t.wg)(),(0,t.iD)("div",{class:"myH5",key:i.id,style:{margin:"20px auto 50px auto"}},[(0,t._)("div",s,(0,a.zw)(i.title),1),(0,t._)("div",n,[(0,t._)("iframe",{src:i.video,class:"embed-responsive-item",loading:"lazy",allow:"autoplay;",allowfullscreen:""},null,8,u),(0,t._)("div",{class:"overlay",onClick:l=>m.previewImgClick(i,l)},[(0,t.Wm)(v,{icon:m.cilMediaPlay,class:"setIcon"},null,8,["icon"]),(0,t._)("div",{class:"thumbnail",style:(0,a.j5)(`\n              background-image: url('${i.thumbnail}');`)},null,4)],8,d)])])))),128))])))),128))])}var p=e(4870),y=e(4434),v=e(3116),h=e(1574),g=e(7411);const w=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M464,72H48a32.036,32.036,0,0,0-32,32V408a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V104A32.036,32.036,0,0,0,464,72Zm0,336H48V104H464l.02,304Z' class='ci-primary'/><rect width='184' height='32' x='232' y='184' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='240' height='32' x='176' y='256' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='240' height='32' x='176' y='328' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='88.923 144 88.923 272.923 188.095 203.503 88.923 144' class='ci-primary'/>"];var f=e(6265),b=e.n(f),k=e(7387),C={setup(){const i=(0,p.qj)(y),l=()=>{for(let l=0;l<i.length;l++){let e=i[l].video;for(let i=0;i<e.length;i++){let l=`https://www.googleapis.com/youtube/v3/videos?id=${e[i].id}&key=AIzaSyBXCxbE2nHTvZ7oQgVfiVT48HnDLR19sKI&part=snippet`;console.log("request url: "+l),b()(l).then((function(l){console.log(l),null!=l.data.items[0].snippet.thumbnails.maxres?e[i].thumbnail=l.data.items[0].snippet.thumbnails.maxres.url:e[i].thumbnail=l.data.items[0].snippet.thumbnails.high.url})).catch((function(l){console.log(`youtube api request failed! id = ${e[i].id}`,l)}))}}};l();const e=(i,l)=>{var e=l.target;k(e).hide(),console.log("clickedElement",e),i.video=`https://www.youtube.com/embed/${i.id}?autoplay=1`};return{videoJson:i,previewImgClick:e,CIcon:v.m,cilList:h.A,cilMediaPlay:g.B,cilFeaturedPlaylist:w}}},_=e(89);const x=(0,_.Z)(C,[["render",m],["__scopeId","data-v-1be84b8d"]]);var H=x}}]);
//# sourceMappingURL=VideosView.79c3b56d.js.map