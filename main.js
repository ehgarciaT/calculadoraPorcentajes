let calculateButton = document.getElementById("calculateButton")
calculateButton.addEventListener("click", calculate)

function calculate (){
    
    let valorOriginal = document.getElementById("valorOriginal").value
    let valorComprimido = document.getElementById("valorComprimido").value
    let percentage = ((valorComprimido/valorOriginal)*100)
    let totalCompress = (100 - percentage).toFixed(2)
    let putValue = document.getElementById("totalPercentage")
    putValue.innerHTML ="<p>Se comprimio el archivo un </p>"+""+totalCompress+"%"
}
