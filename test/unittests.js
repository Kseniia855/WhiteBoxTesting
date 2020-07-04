const expect = require('chai').expect;
const math = require('../functions/utilities');

/*describe('CheckSum statement coverage suite', function () {
    it('check checkSum method 6/7 coverage', function () {
        expect(math.checkSum(10,7)).to.equal(14);
    });
    it('check checkSum method 6/7 coverage', function () {
        expect(math.checkSum(1,2)).to.equal(26);
    });
 });

describe('CheckSum branch coverage suite', function () {
    it('check checkSum method 1/4 coverage', function () {
        expect(math.checkSum(1,1)).to.equal(24);
    });
    it('check checkSum method 2/4 coverage', function () {
        expect(math.checkSum(10,10)).to.equal(20);
    });
});

describe('CheckSum path coverage suite', function () {
    it('check checkSum method 1/4 coverage', function () {
        expect(math.checkSum(10,8)).to.equal(16);
    });
    it('check checkSum method 2/4 coverage', function () {
        expect(math.checkSum(3,4)).to.equal(14);
    });
    it('check checkSum method 2/4 coverage', function () {
        expect(math.checkSum(1,3)).to.equal(28);
    });
});*/

describe('statement coverage testing', function () {
    it('statement coverage 7/9', function () {
        expect(math.qEquation(1,4,4)).to.eql([-2,-2]);
    });
    it('statement coverage 4/9', function () {
        expect(math.qEquation(2,4,5)).to.equal('real roots do not exist');
    });
    it('statement coverage 3/9', function () {
        expect(math.qEquation(0,1,1)).to.equal('its not a quadratic equation');
    });

});

describe('statement coverage testing', function () {
    it('statement coverage 7/9', function () {
        expect(math.qEquation(1,4,4)).to.eql([-2,-2]);
    });
    it('statement coverage 4/9', function () {
        expect(math.qEquation(2,4,5)).to.equal('real roots do not exist');
    });
    it('statement coverage 3/9', function () {
        expect(math.qEquation(0,1,1)).to.equal('its not a quadratic equation');
    });

});