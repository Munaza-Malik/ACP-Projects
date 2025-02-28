let myPromise = new Promise(function(myResolve, myReject) {
    let a = Math.random();
    if (a < 0.5) {
        myReject("No random no for you today"); // when error
    } else {
        myResolve("random no is " + a); // when successful
    }
});
