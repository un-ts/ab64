"use strict";(globalThis.webpackChunkab64=globalThis.webpackChunkab64||[]).push([[84],{84:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});var l=n(527);function i(e){const s=Object.assign({h1:"h1",p:"p",a:"a",img:"img",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"ab64"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"https://github.com/un-ts/ab64/actions/workflows/ci.yml",children:(0,l.jsx)(s.img,{src:"https://github.com/un-ts/ab64/workflows/CI/badge.svg",alt:"GitHub Actions"})}),"\n",(0,l.jsx)(s.a,{href:"https://codecov.io/gh/un-ts/ab64",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/codecov/c/github/un-ts/ab64.svg",alt:"Codecov"})}),"\n",(0,l.jsx)(s.a,{href:"https://lgtm.com/projects/g/un-ts/ab64/context:javascript",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/lgtm/grade/javascript/g/un-ts/ab64.svg?logo=lgtm&logoWidth=18",alt:"Language grade: JavaScript"})}),"\n",(0,l.jsx)(s.a,{href:"https://github.com/plantain-00/type-coverage",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%25&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fun-ts%2Fab64%2Fmain%2Fpackage.json",alt:"type-coverage"})}),"\n",(0,l.jsx)(s.a,{href:"https://www.npmjs.com/package/ab64",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/npm/v/ab64.svg",alt:"npm"})}),"\n",(0,l.jsx)(s.a,{href:"https://github.com/un-ts/ab64/releases",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/github/release/un-ts/ab64",alt:"GitHub Release"})})]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"https://conventionalcommits.org",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg",alt:"Conventional Commits"})}),"\n",(0,l.jsx)(s.a,{href:"https://renovatebot.com",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/renovate-enabled-brightgreen.svg",alt:"Renovate enabled"})}),"\n",(0,l.jsx)(s.a,{href:"https://standardjs.com",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg",alt:"JavaScript Style Guide"})}),"\n",(0,l.jsx)(s.a,{href:"https://github.com/prettier/prettier",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg",alt:"Code Style: Prettier"})}),"\n",(0,l.jsx)(s.a,{href:"https://github.com/changesets/changesets",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/maintained%20with-changesets-176de3.svg",alt:"changesets"})})]}),"\n",(0,l.jsxs)(s.p,{children:["The smallest and fastest Base64 implementation in JavaScript based on ",(0,l.jsx)(s.code,{children:"atob"})," and ",(0,l.jsx)(s.code,{children:"btoa"})," from browser native or ",(0,l.jsx)(s.code,{children:"Buffer"})," from node"]}),"\n",(0,l.jsx)(s.h2,{children:"TOC "}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"#usage",children:"Usage"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"#install",children:"Install"})}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"#api",children:"API"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"#basic",children:"Basic"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"#polyfill",children:"Polyfill"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"#ponyfill",children:"Ponyfill"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"#sponsors",children:"Sponsors"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"#backers",children:"Backers"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"#changelog",children:"Changelog"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"#license",children:"License"})}),"\n"]}),"\n",(0,l.jsx)(s.h2,{children:"Usage"}),"\n",(0,l.jsx)(s.h3,{children:"Install"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:"# pnpm\npnpm add ab64\n\n# yarn\nyarn add ab64\n\n# npm\nnpm i ab64\n"})}),"\n",(0,l.jsx)(s.h3,{children:"API"}),"\n",(0,l.jsx)(s.h4,{children:"Basic"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"import { decode, decodeUrl, encode, encodeUrl } from 'ab64'\n\nencode('Hello World!') // SGVsbG8gV29ybGQh\n\nencode('dankogai') // ZGFua29nYWk=\nencodeUrl('dankogai') // ZGFua29nYWk\n\nencode('小飼弾') // 5bCP6aO85by+\nencodeUrl('小飼弾') // 5bCP6aO85by-\n\ndecode('SGVsbG8gV29ybGQh') // Hello World!\n\ndecode('ZGFua29nYWk=') // dankogai\ndecodeUrl('ZGFua29nYWk') // dankogai\n\ndecode('5bCP6aO85by+') // 小飼弾\ndecodeUrl('5bCP6aO85by-') // 小飼弾\n"})}),"\n",(0,l.jsx)(s.h4,{children:"Polyfill"}),"\n",(0,l.jsxs)(s.p,{children:["If you're running on a non Node environment where ",(0,l.jsx)(s.code,{children:"atob"})," and ",(0,l.jsx)(s.code,{children:"btoa"})," could be unavailable, you may want to include the ",(0,l.jsx)(s.code,{children:"polyfill"})," manually"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"import 'ab64/polyfill'\n\n// same as above then\n"})}),"\n",(0,l.jsx)(s.h4,{children:"Ponyfill"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"atob"})," and ",(0,l.jsx)(s.code,{children:"btoa"})," are also available exported as ",(0,l.jsx)(s.code,{children:"ab64/ponyfill"})," which does not polyfill by default"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"import { atob, btoa } from 'ab64/ponyfill'\n\n// same as browser native\n"})}),"\n",(0,l.jsx)(s.h2,{children:"Sponsors"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"1stG"}),(0,l.jsx)(s.th,{children:"RxTS"}),(0,l.jsx)(s.th,{children:"UnTS"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.a,{href:"https://opencollective.com/1stG",children:(0,l.jsx)(s.img,{src:"https://opencollective.com/1stG/organizations.svg",alt:"1stG Open Collective backers and sponsors"})})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.a,{href:"https://opencollective.com/rxts",children:(0,l.jsx)(s.img,{src:"https://opencollective.com/rxts/organizations.svg",alt:"RxTS Open Collective backers and sponsors"})})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.a,{href:"https://opencollective.com/unts",children:(0,l.jsx)(s.img,{src:"https://opencollective.com/unts/organizations.svg",alt:"UnTS Open Collective backers and sponsors"})})})]})})]}),"\n",(0,l.jsx)(s.h2,{children:"Backers"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"1stG"}),(0,l.jsx)(s.th,{children:"RxTS"}),(0,l.jsx)(s.th,{children:"UnTS"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.a,{href:"https://opencollective.com/1stG",children:(0,l.jsx)(s.img,{src:"https://opencollective.com/1stG/individuals.svg",alt:"1stG Open Collective backers and sponsors"})})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.a,{href:"https://opencollective.com/rxts",children:(0,l.jsx)(s.img,{src:"https://opencollective.com/rxts/individuals.svg",alt:"RxTS Open Collective backers and sponsors"})})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.a,{href:"https://opencollective.com/unts",children:(0,l.jsx)(s.img,{src:"https://opencollective.com/unts/individuals.svg",alt:"UnTS Open Collective backers and sponsors"})})})]})})]}),"\n",(0,l.jsx)(s.h2,{children:"Changelog"}),"\n",(0,l.jsxs)(s.p,{children:["Detailed changes for each release are documented in ",(0,l.jsx)(s.a,{href:"./CHANGELOG.md",children:"CHANGELOG.md"}),"."]}),"\n",(0,l.jsx)(s.h2,{children:"License"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"http://opensource.org/licenses/MIT",children:"MIT"})," © ",(0,l.jsx)(s.a,{href:"https://GitHub.com/JounQin",children:"JounQin"}),"@",(0,l.jsx)(s.a,{href:"https://www.1stg.me",children:"1stG.me"})]})]})}const t=function(e={}){const{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}]);