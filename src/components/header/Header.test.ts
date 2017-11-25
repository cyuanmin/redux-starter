import * as Chai from 'chai';
const expect = Chai.expect;

// A unit test using Chai framework.
describe("Test Header", function () {
    it("Check Header", function () {
        const a: number = 3;
        expect(a).to.eq(1 + 2);
    });

    it("Object assign", function () {
        const state: any = {
            role: "admin",
            age: 44
        };

        const changedState = Object.assign({}, state, {role: "client"});
        expect(state).to.not.eq(changedState);
        expect(changedState.age).to.eq(44);  
        expect(changedState.role).to.eq("client");  
    });
});