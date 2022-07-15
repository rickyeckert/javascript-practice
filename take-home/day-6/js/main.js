fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    if (data.status.verified = true) {
        alert(`${data.text}`);
    };
});

