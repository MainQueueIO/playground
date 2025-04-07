import { describe, expect, it } from "bun:test";

import { helloMessage } from './index'

describe('index.ts test cases', () => {
    it('should return default if param is not passed', () => {
        const result = helloMessage()
        expect(result).toBe('Hello from MainQueue Library')
    })

    it('should return default if param is empty', () => {
        const result = helloMessage('')
        expect(result).toBe('Hello from MainQueue Library')
    })

    it('should return default if param is null', () => {
        const result = helloMessage(null)
        expect(result).toBe('Hello from MainQueue Library')
    })

    it('should return message if param is passed', () => {
        const result = helloMessage('Test')
        expect(result).toBe('Hello Test')
    })
})