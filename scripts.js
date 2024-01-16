
const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".select-rigth")


function convertValues() { //Converte o valor das moedas
  const inputValue = document.querySelector(".input-value").value  // Valor capturado do input
  const ValueOfTheCurrencyToConvert = document.querySelector(".value-to-convert") //Valor a converter
  const currencyValueConverted = document.querySelector(".converted-value") // Resulado da conversão
  
  const dolarToday = 4.89 // Valor do Dólar
  const euroToday = 5.32 // Valor do Euro
  const yenToday = 0.03  // libra esterlina



  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor da moeda, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValue / dolarToday)
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue / euroToday)
  }

  if (currencySelect.value == "yen") {
   currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
     style: "currency",
     currency: "JPY"
   }).format(inputValue / yenToday)
 }


  ValueOfTheCurrencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputValue)


}

// Mudança do select e Troca de nome no HTML

function changeCurrency(){ 
  const convertName = document.querySelector(".convertion-to")
  console.log("trocou")
  
  if(currencySelect.value == "dolar"){
    convertName.innerHTML = "Convertido para : Dólar Americano"
  }
  if(currencySelect.value == "euro"){
    convertName.innerHTML = "Convertido para : Euro"
  }
  if(currencySelect.value == "yen"){
    convertName.innerHTML = "Convertido para : Yen Japones"

  }

  convertValues()
}

// Ouvinte de eventos
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
