import{j as e}from"./index-BRRviwSl.js";function i(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"ab64"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/un-ts/ab64/actions/workflows/ci.yml?query=branch%3Amain",children:e.jsx(s.img,{src:"https://img.shields.io/github/actions/workflow/status/un-ts/ab64/ci.yml?branch=main",alt:"GitHub Actions Workflow Status"})}),`
`,e.jsx(s.a,{href:"https://codecov.io/gh/un-ts/ab64",children:e.jsx(s.img,{src:"https://img.shields.io/codecov/c/github/un-ts/ab64.svg",alt:"Codecov"})}),`
`,e.jsx(s.a,{href:"https://github.com/plantain-00/type-coverage",children:e.jsx(s.img,{src:"https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%25&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fun-ts%2Fab64%2Fmain%2Fpackage.json",alt:"type-coverage"})}),`
`,e.jsx(s.a,{href:"https://coderabbit.ai",children:e.jsx(s.img,{src:"https://img.shields.io/coderabbit/prs/github/un-ts/ab64",alt:"CodeRabbit Pull Request Reviews"})}),`
`,e.jsx(s.a,{href:"https://www.npmjs.com/package/ab64",children:e.jsx(s.img,{src:"https://img.shields.io/npm/v/ab64.svg",alt:"npm"})}),`
`,e.jsx(s.a,{href:"https://github.com/un-ts/ab64/releases",children:e.jsx(s.img,{src:"https://img.shields.io/github/release/un-ts/ab64",alt:"GitHub Release"})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://conventionalcommits.org",children:e.jsx(s.img,{src:"https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg",alt:"Conventional Commits"})}),`
`,e.jsx(s.a,{href:"https://renovatebot.com",children:e.jsx(s.img,{src:"https://img.shields.io/badge/renovate-enabled-brightgreen.svg",alt:"Renovate enabled"})}),`
`,e.jsx(s.a,{href:"https://standardjs.com",children:e.jsx(s.img,{src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg",alt:"JavaScript Style Guide"})}),`
`,e.jsx(s.a,{href:"https://github.com/prettier/prettier",children:e.jsx(s.img,{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg",alt:"Code Style: Prettier"})}),`
`,e.jsx(s.a,{href:"https://github.com/changesets/changesets",children:e.jsx(s.img,{src:"https://img.shields.io/badge/maintained%20with-changesets-176de3.svg",alt:"changesets"})})]}),`
`,e.jsxs(s.p,{children:["The smallest and fastest Base64 implementation in JavaScript based on ",e.jsx(s.code,{children:"atob"})," and ",e.jsx(s.code,{children:"btoa"})," from browser native or ",e.jsx(s.code,{children:"Buffer"})," from node"]}),`
`,e.jsx(s.h2,{children:"TOC "}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#usage",children:"Usage"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#install",children:"Install"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#api",children:"API"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#basic",children:"Basic"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#polyfill",children:"Polyfill"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#ponyfill",children:"Ponyfill"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#miniapp-wechat",children:"MiniApp (WeChat)"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#sponsors-and-backers",children:"Sponsors and Backers"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sponsors",children:"Sponsors"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#backers",children:"Backers"})}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#changelog",children:"Changelog"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#license",children:"License"})}),`
`]}),`
`,e.jsx(s.h2,{children:"Usage"}),`
`,e.jsx(s.h3,{children:"Install"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`# pnpm
pnpm add ab64

# yarn
yarn add ab64

# npm
npm i ab64
`})}),`
`,e.jsx(s.h3,{children:"API"}),`
`,e.jsx(s.h4,{children:"Basic"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { decode, decodeUrl, encode, encodeUrl } from 'ab64'

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
`,e.jsx(s.h4,{children:"Polyfill"}),`
`,e.jsxs(s.p,{children:["If you're running on a non Node environment where ",e.jsx(s.code,{children:"atob"})," and ",e.jsx(s.code,{children:"btoa"})," could be unavailable, you may want to include the ",e.jsx(s.code,{children:"polyfill"})," manually"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import 'ab64/polyfill'

// same as above then
`})}),`
`,e.jsx(s.h4,{children:"Ponyfill"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"atob"})," and ",e.jsx(s.code,{children:"btoa"})," are also available exported as ",e.jsx(s.code,{children:"ab64/ponyfill"})," which does not polyfill by default"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { atob, btoa } from 'ab64/ponyfill'

// same as browser native
`})}),`
`,e.jsx(s.h4,{children:"MiniApp (WeChat)"}),`
`,e.jsxs(s.p,{children:["Since mini app (from wechat) does not support global polyfill, so you have to use the separate ",e.jsx(s.code,{children:"mini-app"})," entry instead which uses the above ponyfill inside"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { decode, decodeUrl, encode, encodeUrl } from 'ab64/mini-app'
`})}),`
`,e.jsxs(s.p,{children:["Or you should add an alias mapping ",e.jsx(s.code,{children:"ab64"})," to ",e.jsx(s.code,{children:"ab64/mini-app"})," in your ",e.jsx(s.code,{children:"rollup"}),"/",e.jsx(s.code,{children:"vite"}),"/",e.jsx(s.code,{children:"webpack"})," configuration"]}),`
`,e.jsx(s.h2,{children:"Sponsors and Backers"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/sponsors/JounQin",children:e.jsx(s.img,{src:"https://raw.githubusercontent.com/1stG/static/master/sponsors.svg",alt:"Sponsors"})})}),`
`,e.jsx(s.h3,{children:"Sponsors"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"1stG"}),e.jsx(s.th,{children:"RxTS"}),e.jsx(s.th,{children:"UnTS"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.a,{href:"https://opencollective.com/1stG",children:e.jsx(s.img,{src:"https://opencollective.com/1stG/organizations.svg",alt:"1stG Open Collective sponsors"})})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://opencollective.com/rxts",children:e.jsx(s.img,{src:"https://opencollective.com/rxts/organizations.svg",alt:"RxTS Open Collective sponsors"})})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://opencollective.com/unts",children:e.jsx(s.img,{src:"https://opencollective.com/unts/organizations.svg",alt:"UnTS Open Collective sponsors"})})})]})})]}),`
`,e.jsx(s.h3,{children:"Backers"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"1stG"}),e.jsx(s.th,{children:"RxTS"}),e.jsx(s.th,{children:"UnTS"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.a,{href:"https://opencollective.com/1stG",children:e.jsx(s.img,{src:"https://opencollective.com/1stG/individuals.svg",alt:"1stG Open Collective backers"})})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://opencollective.com/rxts",children:e.jsx(s.img,{src:"https://opencollective.com/rxts/individuals.svg",alt:"RxTS Open Collective backers"})})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://opencollective.com/unts",children:e.jsx(s.img,{src:"https://opencollective.com/unts/individuals.svg",alt:"UnTS Open Collective backers"})})})]})})]}),`
`,e.jsx(s.h2,{children:"Changelog"}),`
`,e.jsxs(s.p,{children:["Detailed changes for each release are documented in ",e.jsx(s.a,{href:"./CHANGELOG.md",children:"CHANGELOG.md"}),"."]}),`
`,e.jsx(s.h2,{children:"License"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"http://opensource.org/licenses/MIT",children:"MIT"})," © ",e.jsx(s.a,{href:"https://GitHub.com/JounQin",children:"JounQin"}),"@",e.jsx(s.a,{href:"https://www.1stg.me",children:"1stG.me"})]})]})}function t(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{t as default};
