function canVote(vote) {
    if(vote < 18) {
        return false;
    }
    else {
        return true;
    }
}

var age = canVote(19);
if(age == true) {
    console.log("Can Vote");
}
else {
    console.log("Can't Vote");
    
}