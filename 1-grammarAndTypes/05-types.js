let happyGuy = {
    str: "string",
    num: 15,
    bool: true,
    object: {
        food:"apples",
        happy:"face"
    }
}

console.log(typeof happyGuy.str);
console.log(typeof happyGuy.object);
console.log(happyGuy.string);

let type = typeof happyGuy.bool;
if(type ==="string"){
    console.log(`${type} is a string!`);
} else if(type ==="number"){
    console.log(`${type} is a number!`);
} else if(type ==="boolean"){
    console.log(`${type} this is a boolean!`)
} else if(type === "object"){
    console.log(`${type} this is an object!`)
}else {
    console.log("What even are you!?")
}
