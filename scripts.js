function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function updateHouseholdIncome() {
    let income = document.getElementById("income").value;
    document.getElementById('income-value').innerHTML = income
  
    setProportunityValue()
    setBankValue()
  }
  
  function updateSavings() {
    let savings = document.getElementById("savings").value;
    document.getElementById('savings-value').innerHTML = savings
  
    setProportunityValue()
    setBankValue()
  }
  
  function setProportunityValue() {
    document.getElementById('proportunity-value').innerHTML = randomInteger(200, 999)
  }
  
  function setBankValue() {
    let proportunityValue = parseInt(document.getElementById("proportunity-value").textContent);
    document.getElementById('bank-value').innerHTML = randomInteger(0, proportunityValue)
  }
  