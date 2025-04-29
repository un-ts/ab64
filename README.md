# ab64

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/un-ts/ab64/ci.yml?branch=main)](https://github.com/un-ts/ab64/actions/workflows/ci.yml?query=branch%3Amain)
[![Codecov](https://img.shields.io/codecov/c/github/un-ts/ab64.svg)](https://codecov.io/gh/un-ts/ab64)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fun-ts%2Fab64%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/un-ts/ab64)](https://coderabbit.ai)
[![npm](https://img.shields.io/npm/v/ab64.svg)](https://www.npmjs.com/package/ab64)
[![GitHub Release](https://img.shields.io/github/release/un-ts/ab64)](https://github.com/un-ts/ab64/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/changesets/changesets)

The smallest and fastest Base64 implementation in JavaScript based on `atob` and `btoa` from browser native or `Buffer` from node

## TOC <!-- omit in toc -->

- [Usage](#usage)
  - [Install](#install)
  - [API](#api)
    - [Basic](#basic)
    - [Polyfill](#polyfill)
    - [Ponyfill](#ponyfill)
    - [MiniApp (WeChat)](#miniapp-wechat)
- [Sponsors and Backers](#sponsors-and-backers)
  - [Sponsors](#sponsors)
  - [Backers](#backers)
- [Changelog](#changelog)
- [License](#license)

## Usage

### Install

```sh
# pnpm
pnpm add ab64

# yarn
yarn add ab64

# npm
npm i ab64
```

### API

#### Basic

```js
import { decode, decodeUrl, encode, encodeUrl } from 'ab64'

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
```

#### Polyfill

If you're running on a non Node environment where `atob` and `btoa` could be unavailable, you may want to include the `polyfill` manually

```js
import 'ab64/polyfill'

// same as above then
```

#### Ponyfill

`atob` and `btoa` are also available exported as `ab64/ponyfill` which does not polyfill by default

```js
import { atob, btoa } from 'ab64/ponyfill'

// same as browser native
```

#### MiniApp (WeChat)

Since mini app (from wechat) does not support global polyfill, so you have to use the separate `mini-app` entry instead which uses the above ponyfill inside

```js
import { decode, decodeUrl, encode, encodeUrl } from 'ab64/mini-app'
```

Or you should add an alias mapping `ab64` to `ab64/mini-app` in your `rollup`/`vite`/`webpack` configuration

## Sponsors and Backers

[![Sponsors](https://raw.githubusercontent.com/1stG/static/master/sponsors.svg)](https://github.com/sponsors/JounQin)

### Sponsors

| 1stG                                                                                                                   | RxTS                                                                                                                   | UnTS                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

### Backers

| 1stG                                                                                                                | RxTS                                                                                                                | UnTS                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
