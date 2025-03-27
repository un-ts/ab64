import{j as e}from"./index-8TzIVTw0.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"ab64"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/un-ts/ab64/actions/workflows/ci.yml",children:e.jsx(n.img,{src:"https://github.com/un-ts/ab64/workflows/CI/badge.svg",alt:"GitHub Actions"})}),`
`,e.jsx(n.a,{href:"https://codecov.io/gh/un-ts/ab64",children:e.jsx(n.img,{src:"https://img.shields.io/codecov/c/github/un-ts/ab64.svg",alt:"Codecov"})}),`
`,e.jsx(n.a,{href:"https://github.com/plantain-00/type-coverage",children:e.jsx(n.img,{src:"https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%25&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fun-ts%2Fab64%2Fmain%2Fpackage.json",alt:"type-coverage"})}),`
`,e.jsx(n.a,{href:"https://www.npmjs.com/package/ab64",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/ab64.svg",alt:"npm"})}),`
`,e.jsx(n.a,{href:"https://github.com/un-ts/ab64/releases",children:e.jsx(n.img,{src:"https://img.shields.io/github/release/un-ts/ab64",alt:"GitHub Release"})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://conventionalcommits.org",children:e.jsx(n.img,{src:"https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg",alt:"Conventional Commits"})}),`
`,e.jsx(n.a,{href:"https://renovatebot.com",children:e.jsx(n.img,{src:"https://img.shields.io/badge/renovate-enabled-brightgreen.svg",alt:"Renovate enabled"})}),`
`,e.jsx(n.a,{href:"https://standardjs.com",children:e.jsx(n.img,{src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg",alt:"JavaScript Style Guide"})}),`
`,e.jsx(n.a,{href:"https://github.com/prettier/prettier",children:e.jsx(n.img,{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg",alt:"Code Style: Prettier"})}),`
`,e.jsx(n.a,{href:"https://github.com/changesets/changesets",children:e.jsx(n.img,{src:"https://img.shields.io/badge/maintained%20with-changesets-176de3.svg",alt:"changesets"})})]}),`
`,e.jsxs(n.p,{children:["The smallest and fastest Base64 implementation in JavaScript based on ",e.jsx(n.code,{children:"atob"})," and ",e.jsx(n.code,{children:"btoa"})," from browser native or ",e.jsx(n.code,{children:"Buffer"})," from node"]}),`
`,e.jsx(n.h2,{children:"TOC "}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#usage",children:"Usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#install",children:"Install"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#basic",children:"Basic"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#polyfill",children:"Polyfill"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#ponyfill",children:"Ponyfill"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#miniapp-wechat",children:"MiniApp (WeChat)"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sponsors",children:"Sponsors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#backers",children:"Backers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#changelog",children:"Changelog"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#license",children:"License"})}),`
`]}),`
`,e.jsx(n.h2,{children:"Usage"}),`
`,e.jsx(n.h3,{children:"Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# pnpm
pnpm add ab64

# yarn
yarn add ab64

# npm
npm i ab64
`})}),`
`,e.jsx(n.h3,{children:"API"}),`
`,e.jsx(n.h4,{children:"Basic"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { decode, decodeUrl, encode, encodeUrl } from 'ab64'

encode('Hello World!') // SGVsbG8gV29ybGQh

encode('dankogai') // ZGFua29nYWk=
encodeUrl('dankogai') // ZGFua29nYWk

encode('小飼弾') // 5bCP6aO85by+
encodeUrl('小飼弾') // 5bCP6aO85by-

decode('SGVsbG8gV29ybGQh') // Hello World!

decode('ZGFua29nYWk=') // dankogai
decodeUrl('ZGFua29nYWk') // dankogai

decode('5bCP6aO85by+') // 小飼弾
decodeUrl('5bCP6aO85by-') // 小飼弾
`})}),`
`,e.jsx(n.h4,{children:"Polyfill"}),`
`,e.jsxs(n.p,{children:["If you're running on a non Node environment where ",e.jsx(n.code,{children:"atob"})," and ",e.jsx(n.code,{children:"btoa"})," could be unavailable, you may want to include the ",e.jsx(n.code,{children:"polyfill"})," manually"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import 'ab64/polyfill'

// same as above then
`})}),`
`,e.jsx(n.h4,{children:"Ponyfill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"atob"})," and ",e.jsx(n.code,{children:"btoa"})," are also available exported as ",e.jsx(n.code,{children:"ab64/ponyfill"})," which does not polyfill by default"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { atob, btoa } from 'ab64/ponyfill'

// same as browser native
`})}),`
`,e.jsx(n.h4,{children:"MiniApp (WeChat)"}),`
`,e.jsxs(n.p,{children:["Since mini app (from wechat) does not support global polyfill, so you have to use the separate ",e.jsx(n.code,{children:"mini-app"})," entry instead which uses the above ponyfill inside"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { decode, decodeUrl, encode, encodeUrl } from 'ab64/mini-app'
`})}),`
`,e.jsxs(n.p,{children:["Or you should add an alias mapping ",e.jsx(n.code,{children:"ab64"})," to ",e.jsx(n.code,{children:"ab64/mini-app"})," in your ",e.jsx(n.code,{children:"rollup"}),"/",e.jsx(n.code,{children:"vite"}),"/",e.jsx(n.code,{children:"webpack"})," configuration"]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/sponsors/JounQin",children:e.jsx(n.img,{src:"https://raw.githubusercontent.com/1stG/static/master/sponsors.svg",alt:"Sponsors"})})}),`
`,e.jsx(n.h2,{children:"Sponsors"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"1stG"}),e.jsx(n.th,{children:"RxTS"}),e.jsx(n.th,{children:"UnTS"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"https://opencollective.com/1stG",children:e.jsx(n.img,{src:"https://opencollective.com/1stG/organizations.svg",alt:"1stG Open Collective sponsors"})})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://opencollective.com/rxts",children:e.jsx(n.img,{src:"https://opencollective.com/rxts/organizations.svg",alt:"RxTS Open Collective sponsors"})})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://opencollective.com/unts",children:e.jsx(n.img,{src:"https://opencollective.com/unts/organizations.svg",alt:"UnTS Open Collective sponsors"})})})]})})]}),`
`,e.jsx(n.h2,{children:"Backers"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"1stG"}),e.jsx(n.th,{children:"RxTS"}),e.jsx(n.th,{children:"UnTS"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"https://opencollective.com/1stG",children:e.jsx(n.img,{src:"https://opencollective.com/1stG/individuals.svg",alt:"1stG Open Collective backers"})})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://opencollective.com/rxts",children:e.jsx(n.img,{src:"https://opencollective.com/rxts/individuals.svg",alt:"RxTS Open Collective backers"})})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://opencollective.com/unts",children:e.jsx(n.img,{src:"https://opencollective.com/unts/individuals.svg",alt:"UnTS Open Collective backers"})})})]})})]}),`
`,e.jsx(n.h2,{children:"Changelog"}),`
`,e.jsxs(n.p,{children:["Detailed changes for each release are documented in ",e.jsx(n.a,{href:"./CHANGELOG.md",children:"CHANGELOG.md"}),"."]}),`
`,e.jsx(n.h2,{children:"License"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"http://opensource.org/licenses/MIT",children:"MIT"})," © ",e.jsx(n.a,{href:"https://GitHub.com/JounQin",children:"JounQin"}),"@",e.jsx(n.a,{href:"https://www.1stg.me",children:"1stG.me"})]})]})}function t(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{t as default};
