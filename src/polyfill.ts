import { atob, btoa } from './ponyfill.js'

globalThis.atob = globalThis.atob || atob
globalThis.btoa = globalThis.btoa || btoa
