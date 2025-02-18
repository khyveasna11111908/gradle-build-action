import * as cacheUtils from '../src/cache-utils'
import * as path from 'path'

describe('cacheUtils-utils', () => {
    describe('can hash', () => {
        it('a string', async () => {
            const hash = cacheUtils.hashStrings(['foo'])
            expect(hash).toBe('acbd18db4cc2f85cedef654fccc4a4d8')
        })
        it('multiple strings', async () => {
            const hash = cacheUtils.hashStrings(['foo', 'bar', 'baz'])
            expect(hash).toBe('6df23dc03f9b54cc38a0fc1483df6e21')
        })
    })
})
