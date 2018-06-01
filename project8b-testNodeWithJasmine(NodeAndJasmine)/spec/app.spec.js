var Add = require("../app")

describe("Add functionality1", () => {
    it("calculates x + y = z", () => {
        expect(Add(10, 5)).toEqual(15);
    });
    it("calculate x + y != z", () => {
        expect(Add(10, 5)).not.toEqual(14);
    });

});

