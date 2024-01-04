"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[757],{8201:function(e,n,t){var r=t(5294),i=t(1502),a=r.Z.create({baseURL:i.Z.BASE_URL});a.defaults.headers.common={Authorization:"Bearer ".concat(i.Z.AUTH_TOKEN)},n.Z=a},1502:function(e,n){var t=Object.freeze({BASE_URL:"https://api.themoviedb.org/3",AUTH_TOKEN:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTU2NjY2YTM4MDg5YTViYWJkZTYxMDY0M2Q5ZjFiMiIsInN1YiI6IjY1MTZkODJmOWI4NjE2MDBjNWNhODViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z7svSSg1PRCQecW87TtoFDZ2Q6FReUtt3L8XvXbN6c4",ENDPOINT:Object.freeze({TRENDING:"/trending/movie/day",SEARCH_MOVIE:"/search/movie",MOVIE_DETAILS:"/movie",CREDITS:"/credits",REVIEWS:"/reviews"}),IMAGE_SRC:"https://image.tmdb.org/t/p/w500",QUERY:Object.freeze({LANGUAGE:"language=en-US"})});n.Z=t},1196:function(e,n,t){t.d(n,{Z:function(){return h}});var r,i,a,c=t(7689),o=t(1502),s=t(3830),u=t(1087),p=t(168),d=t(5867),f=d.ZP.li(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  padding: 14px;\n  border: 2px solid #fafafa;\n  border-radius: 10px;\n  max-width: 278px;\n\n  -webkit-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);\n  -moz-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);\n  box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);\n"]))),x=d.ZP.h3(i||(i=(0,p.Z)(["\n  margin-top: 16px;\n  text-align: center;\n"]))),l=t(184),E=function(e){var n=e.location,t=e.id,r=e.imageSrc,i=e.title;return(0,l.jsx)(f,{children:(0,l.jsxs)(u.rU,{to:"/movies/".concat(t),state:{from:n},children:[(0,l.jsx)("img",{src:r,alt:i,width:"250"}),(0,l.jsx)(x,{children:i})]})})},Z=d.ZP.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 32px;\n"]))),h=function(e){var n=e.movies,t=(0,c.TH)();return(0,l.jsx)(Z,{children:n.map((function(e){var n=e.id,r=e.title,i=e.poster_path,a=i?o.Z.IMAGE_SRC+i:s;return(0,l.jsx)(E,{location:t,id:n,imageSrc:a,title:r},n)}))})}},3554:function(e,n,t){var r=t(1686);n.Z=function(e,n){return!e&&(r.Notify.failure(n),!0)}},2033:function(e,n){var t=Object.freeze({IDDLE:"iddle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"});n.Z=t},9757:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,i=t(5861),a=t(9439),c=t(7757),o=t.n(c),s=t(2791),u=t(8201),p=t(1502),d=function(){var e=(0,i.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p.Z.ENDPOINT.TRENDING,"?").concat(p.Z.QUERY.LANGUAGE));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=d,x=t(3554),l=t(2033),E=t(168),Z=t(5867).ZP.section(r||(r=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),h=t(630),v=t(1196),m=t(184),g=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,s.useState)(l.Z.IDDLE),u=(0,a.Z)(c,2),p=u[0],d=u[1],E=(0,s.useRef)(!1);return(0,s.useEffect)((function(){d(l.Z.PENDING);var e=function(){var e=(0,i.Z)(o().mark((function e(){var n,t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:n=e.sent,t=n.results,r(t),d(l.Z.RESOLVED),t.length||d(l.Z.REJECTED),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),i=e.t0.message,E.current=(0,x.Z)(E.current,i),d(l.Z.REJECTED);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsxs)(Z,{children:[(0,m.jsx)("h1",{children:"Trending Today"}),p===l.Z.PENDING&&(0,m.jsx)(h.Z,{}),p===l.Z.RESOLVED&&(0,m.jsx)(v.Z,{movies:t}),p===l.Z.REJECTED&&(0,m.jsx)("p",{children:"We don't have any movies ternding"})]})}},3830:function(e,n,t){e.exports=t.p+"static/media/stopper_cat_poster.cd12e55746d58e158704.jpg"}}]);
//# sourceMappingURL=757.5aa9b04b.chunk.js.map