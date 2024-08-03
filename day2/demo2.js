fetch('https://dummyjson.com/recipes')
    .then(r => {
        if(r.status == 200) {
            return r.json();
        } else {
            throw new Error("Status: " + r.status);
        }
        
    })
    .then(body => {
        for(let recipe of body.recipes) {
            console.log(recipe.name);
        }
    })
    .catch(err => console.error("Oh no: " + err))