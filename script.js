let student1 = 33
let student2 = 42
let maxPoints = 100

let student1Name = "John"
let student2Name = "Jane"

console.log(student1Name + " has " + ((student1*100)/maxPoints) + " %, " + student2Name + " has " + student2 + " points")
console.log("The maximum points are " + maxPoints)

// 26. Moderní JavaScript - Funkce a výzva: kontrola věku

let adultChecker = (age) => {
    if (age >= 18) {
        return "dospělý"
    } else {
        return "dítě"
    }
}

if (adultChecker(1) === "dospělý") {
    console.log("Je to dospělý")
    console.log("Můžeš vstoupit")
} else {
    console.log("Je to dítě")
    console.log("NeMůžeš vstoupit")
}