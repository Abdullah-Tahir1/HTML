function convertFtoC() {
  const fahrenheit = parseInt(document.getElementById("input").value);
  const celsius = (fahrenheit - 32) * 0.5556;
  document.getElementById("celsius").innerText = celsius;
}
function convertCtoF() {
  const fahrenheit = parseInt(document.getElementById("input").value);
  const celsius = fahrenheit * 0.5556 + 32;
  document.getElementById("fahrenheit").innerText = celsius;
}
