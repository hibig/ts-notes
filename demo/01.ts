import { parse, stringify } from 'fastjson'

const str = '{ "key": "value" }'
const obj = parse(str)
console.log(obj)

const obj2 = { key: 'value' }
const str2 = stringify(obj2)
console.log(str2)
