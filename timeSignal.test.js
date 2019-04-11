//Run with: npm run test (--watch shows logs.)

var ts = require("./timeSignal.js");

// test('Seconds evaluate correctly', () => {
    
//     var intervals = {
//         intervalS:30,
//         intervalM:0
//     }

//     var date = new Date();
    
//     date.setSeconds(27);
//     expect(ts.evaluatePip(date, intervals)).toBe(false);
    
//     date.setSeconds(25);
//     date.setMinutes(0);
//     expect(ts.evaluatePip(date, intervals)).toBe(true);
    
//     date.setSeconds(55);
//     date.setMinutes(0);
//     expect(ts.evaluatePip(date, intervals)).toBe(true);

// });



test('Pips do not ring less than 5 seconds apart', () => {

    var intervals = {
        intervalS:4,
        intervalM:0
    }
    //Interval set to < 5

    var date = new Date();
    date.setSeconds(7);
    expect(ts.evaluatePip(date, intervals)).toBe(true);

    date.setSeconds(7);
    expect(ts.evaluatePip(date, intervals)).toBe(false);
});





//TODO: Test where inerval > 60s / 60m


// test('Pips ring every 15 minutes', () => {

//     var intervals = {
//         intervalS:0,
//         intervalM:15
//     }

//     var date = new Date();
//         date.setSeconds(55);
//         date.setMinutes(59);
//         expect(ts.evaluatePip(date, intervals)).toBe(true);
        
//         date.setSeconds(55);
//         date.setMinutes(14);
//         expect(ts.evaluatePip(date, intervals)).toBe(true);
    
//         date.setSeconds(55);
//         date.setMinutes(29);
//         expect(ts.evaluatePip(date, intervals)).toBe(true);

//         date.setSeconds(55);
//         date.setMinutes(44);
//         expect(ts.evaluatePip(date, intervals)).toBe(true);
// });


//         //TODO:
// test('With no intervals set, intervals are set to every hour.', () => {

//     var intervals = {
//         intervalS:0,
//         intervalM:60
//     }

//     var date = new Date();
//         date.setSeconds(55);
//         date.setMinutes(59);


//         // expect(ts.evaluatePip(date)).toBe(true);
        
// });





