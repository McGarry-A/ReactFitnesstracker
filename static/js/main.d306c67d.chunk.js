(this["webpackJsonpfitness-tracker"]=this["webpackJsonpfitness-tracker"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n,s,r,i,c,o,l,d,b=a(2),j=a.n(b),u=a(22),x=a.n(u),h=a(10),O=a(30),f=a(7),g=a(8),p=g.a.div(n||(n=Object(f.a)(["\nheight: 300px;\nwidth: 300px;\ntext-align: center;\n"]))),v=a(4),y=function(e){var t=e.goal,a=e.currentMax,n=e.lift,s={labels:["Left to achieve goal","Current lifts"],datasets:[{data:[t-a,a],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)"]}]};return Object(v.jsxs)(p,{children:[Object(v.jsx)("h3",{children:n}),Object(v.jsx)(O.a,{data:s})]})},m=(a(109),g.a.div(s||(s=Object(f.a)(["\nheight: 500px;\nwidth: 50vw;\nmin-width: 500px;\n"])))),S=function(e){var t=e.benchDataset,a=e.squatDataset,n=e.deadliftDataset,s={datasets:[{label:"Overhead Press",data:e.ohpDataset,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",borderWidth:3},{label:"BenchPress",data:t,backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgba(255, 159, 64)",borderWidth:3},{label:"Squat",data:a,backgroundColor:"rgba(255, 205, 86, 0.2)",borderColor:"rgba(255, 205, 86)",borderWidth:3},{label:"Deadlift",data:n,backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192",borderWidth:3}],options:{plugins:{title:{display:!0,text:"1 REP Max Over Time"}},scales:{x:{type:"time",time:{unit:"day"}}}}};return Object(v.jsx)(m,{children:Object(v.jsx)(O.b,{data:s})})},k=(g.a.div(r||(r=Object(f.a)(["\ndisplay: block;\nwidth: 1200px;\nmargin: 0 auto;\n"]))),g.a.div(i||(i=Object(f.a)(["\ndisplay: flex;"])))),C=a(9),w=function(e){var t=e.title,a=e.index,n=e.state,s=e.setState,r=Object(b.useState)(""),i=Object(h.a)(r,2),c=i[0],o=i[1],l=function(e,t){var a=Object(C.a)({},n);a.goals[e]=t,console.log(a),s(a),o("")};return Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:t}),Object(v.jsx)("input",{type:"number",onChange:function(e){return function(e){o(e.target.value)}(e)}}),Object(v.jsx)("button",{onClick:function(){!function(){switch(a){case"1":l("bench",c);break;case"2":l("squat",c);break;case"3":l("deadlift",c);break;case"4":l("overheadpress",c);break;default:console.log("Error in switch statement")}}()},children:"Update"})]})},q=g.a.div(c||(c=Object(f.a)(["\ndisplay: flex;\nflex-direction:column;\nmargin: 5em 5em;\nwidth:25em;\nheight:20em;\nborder: 1px solid black;\njustify-content:center;\npadding: 1em;\n"]))),D=function(e){var t=e.state,a=e.setState;return Object(v.jsxs)(q,{children:[Object(v.jsx)("h2",{children:"Set New Goals"}),Object(v.jsx)(w,{title:"Bench: ",index:"1",state:t,setState:a}),Object(v.jsx)(w,{title:"Squat: ",index:"2",state:t,setState:a}),Object(v.jsx)(w,{title:"Deadlift: ",index:"3",state:t,setState:a}),Object(v.jsx)(w,{title:"Overhead Press: ",index:"4",state:t,setState:a})]})},L={previousLifts:{squat:[{x:"2021-06-25",y:61},{x:"2021-06-27",y:85},{x:"2021-06-28",y:95},{x:"2021-07-01",y:100},{x:"2021-07-02",y:115}],deadlift:[{x:"2021-06-25",y:80},{x:"2021-06-27",y:95},{x:"2021-06-28",y:110},{x:"2021-07-01",y:120},{x:"2021-07-02",y:130}],bench:[{x:"2021-06-25",y:55},{x:"2021-06-27",y:65},{x:"2021-06-28",y:70},{x:"2021-07-01",y:78.5},{x:"2021-07-02",y:82.5}],overheadpress:[{x:"2021-06-25",y:20},{x:"2021-06-27",y:22},{x:"2021-06-28",y:28},{x:"2021-07-01",y:29},{x:"2021-07-02",y:31}]},currentMaxes:{squat:115,deadlift:130,bench:82.5,overheadpress:31},goals:{squat:120,deadlift:140,bench:100,overheadpress:60}},M=a(5),E=a(6),P=a(52),B=a.n(P),W=(a(70),g.a.div(o||(o=Object(f.a)(["\ndisplay: flex;\nflex-direction:column;\nmargin: 5em 5em;\nwidth:20em;\nborder: 1px solid black;\njustify-content:center;\npadding: 2em;\n"])))),R=function(e){var t=e.state,a=e.setState,n=Object(b.useState)(new Date),s=Object(h.a)(n,2),r=s[0],i=s[1],c=Object(b.useState)(""),o=Object(h.a)(c,2),l=o[0],d=o[1],j=Object(b.useState)(""),u=Object(h.a)(j,2),x=u[0],O=u[1],f=Object(b.useState)(""),g=Object(h.a)(f,2),p=g[0],y=g[1];return Object(v.jsxs)(W,{children:[Object(v.jsx)(B.a,{selected:r,onChange:function(e){return function(e){i(e),d(r.toISOString().split("T")[0])}(e)},format:"dd-mm-yyyy"}),Object(v.jsx)("label",{children:"Exercise Name"}),Object(v.jsx)("input",{list:"lifts",id:"newLifts",name:"newLifts",onChange:function(e){return function(e){return O(e.target.value.toLowerCase())}(e)}}),Object(v.jsxs)("datalist",{id:"lifts",children:[Object(v.jsx)("option",{value:"Bench"}),Object(v.jsx)("option",{value:"Squat"}),Object(v.jsx)("option",{value:"Deadlift"}),Object(v.jsx)("option",{value:"Overheadpress"})]}),Object(v.jsx)("label",{children:"Weight Lifted"}),Object(v.jsx)("input",{type:"number",onChange:function(e){return function(e){return y(e.target.value)}(e)}}),Object(v.jsx)("button",{onClick:function(){if("overhead press"===x){var e=x.split(" ").join("");O(e),console.log(x)}var n=Object(C.a)({},t);n=Object(C.a)(Object(C.a)({},n),{},{previousLifts:Object(C.a)(Object(C.a)({},n.previousLifts),{},Object(M.a)({},x,[].concat(Object(E.a)(n.previousLifts[x]),[{x:l,y:p}])))}),console.log(n),a(n)},children:"Submit Entry"})]})},T=g.a.div(l||(l=Object(f.a)(["\ndisplay: flex;\nmargin: 10em 15em;"]))),A=g.a.div(d||(d=Object(f.a)(["\ndisplay: flex;\nmargin: 10em 15em;"])));var G=function(){var e=Object(b.useState)(L),t=Object(h.a)(e,2),a=t[0],n=t[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"1 REP MAX TRACKER"}),Object(v.jsxs)(T,{children:[Object(v.jsx)(S,{benchDataset:a.previousLifts.bench,squatDataset:a.previousLifts.squat,deadliftDataset:a.previousLifts.deadlift,ohpDataset:a.previousLifts.overheadpress}),Object(v.jsx)(R,{state:a,setState:n})]}),Object(v.jsxs)(A,{children:[Object(v.jsxs)(k,{children:[Object(v.jsx)(y,{goal:a.goals.bench,currentMax:a.currentMaxes.bench,lift:"BenchPress"}),Object(v.jsx)(y,{goal:a.goals.squat,currentMax:a.currentMaxes.squat,lift:"Squat"}),Object(v.jsx)(y,{goal:a.goals.deadlift,currentMax:a.currentMaxes.deadlift,lift:"Deadlift"}),Object(v.jsx)(y,{goal:a.goals.overheadpress,currentMax:a.currentMaxes.overheadpress,lift:"Overhead Press"})]}),Object(v.jsx)(D,{title:"Update Goals",goals:a.goals,state:a,setState:n})]})]})};x.a.render(Object(v.jsx)(j.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.d306c67d.chunk.js.map