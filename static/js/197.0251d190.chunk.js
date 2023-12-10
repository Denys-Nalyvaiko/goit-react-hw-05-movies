"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[197],{201:function(e,n,r){var t=r(591),i=r(502),c=t.Z.create({baseURL:i.Z.BASE_URL});c.defaults.headers.common={Authorization:"Bearer ".concat(i.Z.AUTH_TOKEN)},n.Z=c},502:function(e,n){var r=Object.freeze({BASE_URL:"https://api.themoviedb.org/3",AUTH_TOKEN:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTU2NjY2YTM4MDg5YTViYWJkZTYxMDY0M2Q5ZjFiMiIsInN1YiI6IjY1MTZkODJmOWI4NjE2MDBjNWNhODViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z7svSSg1PRCQecW87TtoFDZ2Q6FReUtt3L8XvXbN6c4",ENDPOINT:Object.freeze({TRENDING:"/trending/movie/day",SEARCH_MOVIE:"/search/movie",MOVIE_DETAILS:"/movie",CREDITS:"/credits",REVIEWS:"/reviews"}),IMAGE_SRC:"https://image.tmdb.org/t/p/w500",QUERY:Object.freeze({LANGUAGE:"language=en-US"})});n.Z=r},554:function(e,n,r){var t=r(686);n.Z=function(e,n){return!e&&(t.Notify.failure(n),!0)}},33:function(e,n){var r=Object.freeze({IDDLE:"iddle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"});n.Z=r},197:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t=r(861),i=r(439),c=r(757),s=r.n(c),a=r(791),o=r(689),u=r(87),d=r(201),l=r(502),v=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("".concat(l.Z.BASE_URL).concat(l.Z.ENDPOINT.MOVIE_DETAILS,"/").concat(n,"?").concat(l.Z.QUERY.LANGUAGE));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=v,E=r(554),f=r(33),p=r(830),j=r(184),x=function(e){var n=e.movie,r=n.title,t=n.vote_average,i=n.overview,c=n.genres,s=n.poster_path,a=s?l.Z.IMAGE_SRC+s:p;return(0,j.jsxs)("div",{style:{display:"flex"},children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{src:a,alt:r,height:"400"})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{children:r}),(0,j.jsxs)("p",{children:["User score: ",Math.round(10*t),"%"]}),(0,j.jsx)("p",{children:"Overview"}),(0,j.jsx)("p",{children:i}),(0,j.jsx)("p",{children:"Genres"}),(0,j.jsx)("ul",{children:null===c||void 0===c?void 0:c.map((function(e){var n=e.id,r=e.name;return(0,j.jsx)("li",{children:(0,j.jsx)("p",{children:r})},n)}))})]})]})},Z=function(){var e,n,r=(0,a.useState)(!1),c=(0,i.Z)(r,2),d=c[0],l=c[1],v=(0,a.useState)(f.Z.IDDLE),p=(0,i.Z)(v,2),Z=p[0],I=p[1],m=(0,o.UO)().movieId,D=(0,o.TH)(),N=(0,a.useRef)(null!==(e=null===(n=D.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),R=(0,a.useRef)(!1);return(0,a.useEffect)((function(){I(f.Z.PENDING);var e=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(m);case 3:n=e.sent,l(n),I(f.Z.RESOLVED),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),r=e.t0.message,R.current=(0,E.Z)(R.current,r),I(f.Z.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u.Link,{to:N.current,children:"Go back"}),Z===f.Z.PENDING&&(0,j.jsx)("p",{children:"Loading..."}),Z===f.Z.RESOLVED&&(0,j.jsxs)("div",{children:[(0,j.jsx)(x,{movie:d}),(0,j.jsx)(u.Link,{to:"cast",children:"Cast"}),(0,j.jsx)(u.Link,{to:"reviews",children:"Reviews"}),(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)("p",{children:"Loading..."}),children:(0,j.jsx)(o.j3,{})})]}),Z===f.Z.REJECTED&&(0,j.jsx)("p",{children:"We don't have movie details"})]})}},830:function(e,n,r){e.exports=r.p+"static/media/stopper_cat_poster.cd12e55746d58e158704.jpg"}}]);
//# sourceMappingURL=197.0251d190.chunk.js.map