(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),c=n.n(r),a=n(5),u=n.n(a),o=(n(11),n(12),n(2)),s="notStarted",l="running",d="won",f="lost",h=[{id:0,text:"Beginner",height:10,width:10,minesCount:10},{id:1,text:"Intermediate",height:16,width:16,minesCount:44},{id:2,text:"Expert",height:30,width:30,minesCount:100}];n(13);function g(e){var t=""+e.value;return Object(i.jsx)("div",{className:"digital-counter",children:t.padStart(3,"0")})}function v(e){return Object(i.jsxs)("div",{className:"scoreboard",children:[Object(i.jsx)(g,{value:e.minesLeft}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"select-wrap",children:Object(i.jsx)("select",{onChange:function(t){return e.levelChangeHandler(t.target.value)},value:e.level,children:h.map((function(e){return Object(i.jsxs)("option",{value:e.id,children:[" ",e.text," "]},e.id)}))})}),Object(i.jsx)(j,{status:e.gameStatus,onClickHandler:e.resetHandler,isClicking:e.isClicking})]}),Object(i.jsx)(g,{value:e.timer})]})}function j(e){return Object(i.jsx)("button",{className:"reset",onClick:e.onClickHandler,children:e.isClicking?"\ud83d\ude32":(t=e.status,t===f?"\ud83d\ude1e":t===d?"\ud83d\ude0e":"\ud83d\ude0a")});var t}n(14),n(15);var b=n(3);var m=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.shouldPreventDefault,c=void 0===i||i,a=n.delay,u=void 0===a?300:a,s=Object(r.useState)(!1),l=Object(o.a)(s,2),d=l[0],f=l[1],h=Object(r.useRef)(),g=Object(r.useRef)(),v=Object(r.useCallback)((function(t){c&&t.target&&(t.target.addEventListener("touchend",m,{passive:!1}),g.current=t.target),h.current=setTimeout((function(){e(t),f(!0)}),u)}),[e,u,c]),j=Object(r.useCallback)((function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];h.current&&clearTimeout(h.current),n&&!d&&t(),f(!1),c&&g.current&&g.current.removeEventListener("touchend",m)}),[c,t,d]);return{onClick:function(e){return j(e)},onContextMenu:function(t){t.preventDefault(),e()},onTouchStart:function(e){return v(e)},onTouchEnd:function(e){return j(e)}}};function C(e){var t=e.data.isCovered?"cell":"uncovered-cell",n=e.data.isCovered||e.isMine?"":"cell-".concat(e.data.neighboringMines),r=!e.data.isCovered&&e.isMine?"cell-mine":"",c=e.data.isCovered?e.data.flagged?"\ud83d\udea9":"":e.data.isMine?"\ud83d\udca3":e.data.neighboringMines>0?e.data.neighboringMines:"",a=e.data.clickedMine?"clicked-mine":"",u=O((function(){return e.handleRightClick(e.data)}),(function(){return e.handleLeftClick(e.data)}));return Object(i.jsx)("button",Object(b.a)(Object(b.a)({className:"".concat(t," ").concat(n," ").concat(r," ").concat(a)},u),{},{children:c}))}function M(e){var t=Object(r.useState)(e.grid),n=Object(o.a)(t,2),c=n[0],a=n[1],u=Object(r.useState)(e.refresh),s=Object(o.a)(u,2),l=s[0],h=s[1];function g(t){e.cellGotClicked();var n=[t.x,t.y],i=n[0],r=n[1];if(c[i][r].isCovered&&!e.gameOver){var u=c.map((function(e){return e.map((function(e){return Object(b.a)({},e)}))}));u[i][r].flagged=!u[i][r].flagged,v(u)&&e.setGameEnd(d),a(u),e.cellGotFlagged(u[i][r].flagged)}}l!==e.refresh&&(h(e.refresh),a(e.grid));var v=function(e){return e.reduce((function(e,t){return e&&t.reduce((function(e,t){return e&&(t.isMine||!t.isCovered)}),!0)}),!0)};function j(t){var n=[t.x,t.y],i=n[0],r=n[1];if(e.cellGotClicked(),c[i][r].isCovered&&!c[i][r].flagged&&!e.gameOver)if(c[i][r].isMine){var u=c.map((function(e){return e.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{isCovered:!e.isMine&&e.isCovered})}))}));u[i][r].clickedMine=!0,a(u),e.setGameEnd(f)}else{var s=c.map((function(e){return e.map((function(e){return Object(b.a)({},e)}))}));if(s[i][r].isCovered=!1,0===c[i][r].neighboringMines?function(e,t){var n=[[t.x,t.y]],i=0,r=e.length,c=e[0].length;for(;n.length>0;){for(var u=n.length,s=0;s<u;s++)for(var l=n.shift(),d=Object(o.a)(l,2),f=d[0],h=d[1],g=Math.max(0,f-1);g<Math.min(r,f+2);++g)for(var v=Math.max(0,h-1);v<Math.min(c,h+2);++v)e[g][v].isMine||!e[g][v].isCovered||e[g][v].flagged||(e[g][v].isCovered=!1,0===e[g][v].neighboringMines&&n.push([g,v]));setTimeout((function(e){a(e)}),50*i++,e)}}(s,t):a(s),v(s)){var l=s.map((function(e){return e.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{flagged:e.isMine})}))}));a(l),e.setGameEnd(d)}}}return c.map((function(e,t){return Object(i.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(i.jsx)(C,{data:e,handleLeftClick:j,handleRightClick:g},t)}))},t)}))}function x(e,t,n){return function(e){function t(t,n){for(var i=0,r=Math.max(0,t-1);r<Math.min(e.length,t+2);++r)for(var c=Math.max(0,n-1);c<Math.min(e[r].length,n+2);++c)e[r][c].isMine&&i++;return i}for(var n=0;n<e.length;++n)for(var i=0;i<e[n].length;++i)e[n][i].neighboringMines=t(n,i);return e}(function(e){for(var t=e.length,n=e[0].length,i=0;i<t;++i)for(var r=0;r<n;++r){var c=Math.floor(Math.random()*t*n),a=Math.floor(c/n),u=c%n,o=[e[a][u],e[i][r]];e[i][r]=o[0],e[a][u]=o[1]}return e}(function(e,t){for(var n=0;n<e.length&&t;++n)for(var i=0;i<e[n].length&&t;++i,--t)e[n][i]={isMine:!0};return e}(function(e,t){for(var n=[],i=0;i<e;i++){n[i]=[];for(var r=0;r<t;r++)n[i][r]={isMine:!1}}return n}(e,t),n))).map((function(e,t){return e.map((function(e,n){return{isCovered:!0,isMine:e.isMine,neighboringMines:e.neighboringMines,x:t,y:n}}))}))}var p=function(){var e=Object(r.useState)(h[0]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(n.minesCount),u=Object(o.a)(a,2),g=u[0],j=u[1],b=Object(r.useState)(s),m=Object(o.a)(b,2),O=m[0],C=m[1],p=Object(r.useState)(x(n.height,n.width,n.minesCount)),k=Object(o.a)(p,2),S=k[0],w=k[1],E=Object(r.useState)(!1),T=Object(o.a)(E,2),G=T[0],L=T[1],N=Object(r.useState)(!1),y=Object(o.a)(N,2),D=y[0],F=y[1],H=function(e,t){var n=Object(r.useState)(0),i=Object(o.a)(n,2),c=i[0],a=i[1];return Object(r.useEffect)((function(){var n=null;return e&&!n?n=setTimeout((function(){a((function(e){return e+1}))}),1e3):n&&clearTimeout(n),t&&a(0),function(){return clearTimeout(n)}}),[c,e,t]),c}(O===l,O===s);function R(){C(s),j(n.minesCount),w(x(n.height,n.width,n.minesCount)),L((function(e){return!e}))}return Object(r.useEffect)(R,[n]),Object(i.jsxs)("div",{className:"minesweeper",children:[Object(i.jsx)(v,{minesLeft:g,timer:H,gameStatus:O,level:n.id,levelChangeHandler:function(e){e!==n&&c(h[e])},isClicking:D,resetHandler:R}),Object(i.jsx)("div",{className:"grid",onMouseDown:function(){return F(!0)},onMouseUp:function(){return F(!1)},onMouseLeave:function(){return F(!1)},children:Object(i.jsx)(M,{refresh:G,grid:S,gameOver:O===d||O===f,cellGotFlagged:function(e){j(e?g-1:g+1)},cellGotClicked:function(){O===s&&C(l)},setGameEnd:function(e){C(e),e===d&&j(0)}})})]})};var k=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(p,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};u.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),S(console.log)}],[[16,1,2]]]);
//# sourceMappingURL=main.9e60f8aa.chunk.js.map