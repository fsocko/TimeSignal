//Run with: npm run test (--watch shows logs.)

var ts = require("./timeSignal.js");


test('Pips do not ring less than 5 seconds apart', () => {

    var intervals = {
        intervalS:4,
        intervalM:0
    }
    //Interval set to < 5

    var date = new Date();
    date.setSeconds(7);
    lastPipSecond = date.getSeconds();

    expect(ts.evaluatePip(date, intervals)).toBe(true);

    date.setSeconds(11);
    expect(ts.evaluatePip(date, intervals)).toBe(false);

});



test('Seconds evaluate correctly', () => {
    
    var intervals = {
        intervalS:30,
        intervalM:0
    }

    var date = new Date();
    
    date.setSeconds(27);
    expect(ts.evaluatePip(date, intervals)).toBe(false);
    
    date.setSeconds(25);
    date.setMinutes(0);
    expect(ts.evaluatePip(date, intervals)).toBe(true);
    
    date.setSeconds(55);
    date.setMinutes(0);
    expect(ts.evaluatePip(date, intervals)).toBe(true);

});






//TODO: 
//Test where inerval > 60s / 60m
// test('Pips ring every 15 minutes', () => {
// test('With no intervals set, intervals are set to every hour.'





