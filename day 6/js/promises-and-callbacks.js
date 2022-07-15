// callbacks

function outer(callback) {
    console.log(callback);
    callback(1 + 1);
}

outer(function(test) {
    console.log(test);
});

setTimeout(function() {
    console.log('this is the future');
}, 5000);

function orderPizza(callback) {
    setTimeout(function() {
        callback('pizza')
    }, 4000);
}

orderPizza(function(text){
    console.log('save my ' + text + 'for pickup');
});

const pizzaPromise = new Promise(function(resolve, reject){
    orderPizza(function(text){
        resolve(text);
    });
    reject('pizza fell on floor');
});

pizzaPromise
.then(function(answer){
    console.log(answer);
})
.catch(function(err){
    console.log('error', err);
});