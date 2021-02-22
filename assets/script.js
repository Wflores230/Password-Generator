function generate() {
  var password = "";

  var length = document.getElementById("characterAmountNumber").value;

  var SymbolElement = document.getElementById("includeSymbols").checked;
  var UppercaseElement = document.getElementById("includeUppercase").checked;
  var LowercaseElement = document.getElementById("includeLowercase").checked;
  var NumbersElement = document.getElementById("includeNumbers").checked;

  //could delete if I wanted to but I left it here to see if everything was working fine
  console.log(password)
  console.log(length)
  console.log(SymbolElement)
  console.log(UppercaseElement)
  console.log(LowercaseElement)
  console.log(NumbersElement)


  if (LowercaseElement + UppercaseElement + NumbersElement + SymbolElement <= 0)
      return;

  for (var i = 0; i < length; i++) {
    
    const r = generater(0,3)
    if (LowercaseElement && r === 0) {
      password += generateRandomLowerCase();
    } 
    else if (UppercaseElement && r === 1) {
      password += generateRandomUpperCase();
    }
    else if (SymbolElement && r === 2) {
      password += generateRandomSymbolCase();
    }
    else if (NumbersElement && r === 3) {
      password += generater(0, 9);
    }
    else {
      i--;
    }
  }

  document.getElementById("password").value = password;
}

generate();

function generateRandomLowerCase() {
  return String.fromCharCode(generater(97, 122))
}
function generateRandomUpperCase() {
  return String.fromCharCode(generater(65, 90))
}
function generateRandomSymbolCase() {
  const symbols = "@#$%^&*!()_+><";
  return symbols[generater(0, symbols.length - 1)];
}
function generater(min = 8, max = 128) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function passwordGen() {
  var x = document.getElementById("choicebox");
  if (x.style.display !== "none") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
  }

  var password = "";

  document.getElementById("password").textContent = password;
}
