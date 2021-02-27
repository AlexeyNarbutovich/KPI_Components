const Calc = require('./calc');
const assert = require('assert');



describe('Taylor series', function(){
    t = Calc.Taylor(1);
    it('should have a Taylor function defined', function(){
        assert.strictEqual(typeof Calc.Taylor, "function");
    });

    it('has to be equal to 10', function(){
        assert.strictEqual(Calc.Taylor(1), 10);
    });
});
