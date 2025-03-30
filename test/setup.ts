import { afterEach, beforeEach, vi } from "vitest";

/*
AfterEach: Cualquier cosa que querramos ejecutar despues de cada test
beforeEach: Se ejecuta antes de empezar un test
*/

beforeEach(() => {
    vi.useFakeTimers()
})

afterEach(() => {
    vi.resetAllMocks()
})