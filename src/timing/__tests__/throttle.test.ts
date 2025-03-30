import { throttle } from "../throttle"

describe('throttle', () => {
    test('should execute the original function 1 time', () => {
        const fn = vi.fn() //mock
        const throttledFn = throttle(fn, 200)
        //hago click en el boton 3 veces
        throttledFn()
        throttledFn()
        throttledFn()
        
        //expect(fn).toHaveBeenCalledTimes(1) //esperamos que fn sea llamado una sola vez
        expect(fn).toHaveBeenCalledOnce()
    
        vi.advanceTimersByTime(210)
        throttledFn()
        throttledFn()

        expect(fn).toHaveBeenCalledTimes(2)
    })
})