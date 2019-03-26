var chance = 2;
var status = "Waiting...";
var fail = true;
var falhas = 0;
var resourceCount = 0;
var isEnglish = true;
function simulate() {
    // se já deu sucesso, não simula mais.
    if (!fail) {
        return;
    }    
    const n1 = Math.floor((Math.random() * 100) + 1);
    const n2 = Math.floor((Math.random() * 99) + 0);
    var randomNumber = Number.parseFloat(n1 + '.' + n2);
    console.log(randomNumber)
    if (randomNumber > chance) {
        fail = true;
        status = isEnglish ? "Failed!" : "Falhou!";
        chance += 0.2;
        falhas++;
    } else {
        fail = false;
        status = isEnglish ? "Success!" :  "Sucesso!"
    }
    resourceCount++;
    sChance = Number.parseFloat(chance).toFixed(2);
    document.getElementById("chance").innerHTML = sChance + "%";
    document.getElementById("status").innerHTML = status;
    document.getElementById("falhas").innerHTML = falhas;
    document.getElementById("recurso").innerHTML = resourceCount;
}

function reset() {
    fail = true;
    chance = 2;
    falhas = 0;
    status = isEnglish ? "Waiting..." : "Aguardando...";
    document.getElementById("chance").innerHTML = chance + "%";
    document.getElementById("status").innerHTML = status;
    document.getElementById("falhas").innerHTML = falhas;
    document.getElementById("recurso").innerHTML = resourceCount;
}

function resetResources() {
    resourceCount = 0;
    reset();
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function toEnglish() {
    isEnglish = true;
    document.getElementById("title").innerHTML = "+14 Reblath FailStack Simulator";
    document.getElementById("status").innerHTML = status.startsWith("F") ? "Failed!" : status.startsWith("S") ? "Success!" : "Waiting...";
    document.getElementById("failed-label").innerHTML = "Failed";
    document.getElementById("btnEnhance").innerHTML = "Enhance";
    document.getElementById("btnNewItem").innerHTML = "New Item";
    document.getElementById("btnReset").innerHTML = "Reset";
}

function toPortuguese() {
    isEnglish = false;
    document.getElementById("title").innerHTML = "Simulador +14 Reblath FailStack";
    document.getElementById("status").innerHTML = status.startsWith("F") ? "Falhou!" : status.startsWith("S") ? "Sucesso!" : "Aguardando...";
    document.getElementById("failed-label").innerHTML = "Falhou";
    document.getElementById("btnEnhance").innerHTML = "Aprimorar";
    document.getElementById("btnNewItem").innerHTML = "Novo Item";
    document.getElementById("btnReset").innerHTML = "Reset";
}