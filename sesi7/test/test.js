var assert = require("assert");

var expect = require("chai").expect;

function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function search(arr, val) {
    return arr.indexOf(val);
}

describe("Test Tambah", function () {
    // Positive Test
    it("1 + 1 = 2", function () {
        assert.equal(tambah(1, 1), 2);
    });

    // Negative Test
    it("1 + 1 != 3", function () {
        assert.notEqual(tambah(1, 1), 3);
    });
});

describe("Test Kurang", function () {
    // Positive Test
    it("1 - 1 = 0", function () {
        expect(kurang(1, 1)).to.equal(0);
    });

    // Negative Test
    it("1 - 1 != 1", function () {
        expect(kurang(1, 1)).to.not.equal(1);
    });
});

describe("Array", function () {
    describe("#indexOf()", function () {
        it("should return -1 when the value is not present", function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });

    // describe("find()", function () {
    //     ")
    // })
});

// Language: javascript
