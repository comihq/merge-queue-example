import { describe, it } from 'node:test';
import assert from "node:assert";

describe('A test suite', () => {
    it('should work', () => {
        assert.strictEqual(10, 10);
    });

    it('should fail', () => {
        assert.strictEqual(1, 42);
    });
});
