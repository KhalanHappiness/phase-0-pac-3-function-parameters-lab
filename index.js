function introduction(name){
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "Javascript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`

}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introduction("Happiness"))
console.log(introductionWithLanguage("Happiness", "JavaScript"))
//console.log(introductionWithLanguageOptional("Mwita"))
console.log(introductionWithLanguageOptional("Gracie", "Python"))