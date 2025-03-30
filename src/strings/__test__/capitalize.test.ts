import { capitalize } from "../capitalize"

describe('capitalize', () => {
    it.each([
        {tested: 4, expected: 4, label:'4'},
        {tested: null, expected: null, label:'null'},
        {tested: {}, expected: {}, label:'{}'},
        {tested: 'LEVEL UP', expected: 'Level Up', label:'LEVEL UP'},
        {tested: '', expected: '', label:''},
        {tested: 'level up', expected: 'Level Up', label:'level up'}
    ])('capitalize ($label) should be $expected', ({tested, expected}) => {
        //@ts-expect-error we should test not string param case
        expect(capitalize(tested)).toStrictEqual(expected)
    })
})