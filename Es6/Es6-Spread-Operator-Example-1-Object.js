let person = {
    name: "Eddy",
    age: 24,
    github: "https://github.com/EddyArellanes"
}
console.log(ageNextYear( person ))

function ageNextYear(...person){        
    return {
        ... person,            
}