var money = 0
var clickValue = 1
var autoValue = 0
var toggle = 0
var used = 0
var asd = 1


clickPowerPrice = 20
autoPrice = 30
ethCoinPrice = 100
btcCoinPrice = 500

function autoIncrement() {
    if (money >= autoPrice) {
        money = money - autoPrice
        autoValue = autoValue + 1
        used += 1
        document.getElementById("number").innerHTML = "You have earned: <strong>" + money + "</strong> coins!"
        document.getElementById("autodisplay").innerHTML = "Passive Coin: <strong>" + autoValue + "</strong>"
    } else {
        document.getElementById("alertx").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>NOT ENOUGH COINS!</strong> The price of passive coin costs 30.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    }
}


function clickingPower() {
    if (money >= clickPowerPrice) {
        money = money - clickPowerPrice
        clickValue = clickValue + 1
        document.getElementById("clickdisplay").innerHTML = "Clicking Power: <strong>" + clickValue + "</strong>"
    } else {
        document.getElementById("alertx").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>NOT ENOUGH COINS!</strong> The price of coin upgrade costs 20.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    }
}

function ethCoin() {
    if (money >= ethCoinPrice) {
        bought = console.log("Bought ETH coin")
        money = money - ethCoinPrice
        document.getElementById("cryptocoin").src = "https://blogger.googleusercontent.com/img/a/AVvXsEh59sc_1YtijdYM9Eui6W8gtmknXsVG3kN0llbAHrLt0o5PcaBW3ouXGJbTvQfNRrc6Re3LmyD95M6dLOJc7vP7781meM2XDsd3Vk83MZ3LVK2PC1Nll4hmPmcn3e8Y-RvwNTaxhKK4GLwyUHBP5oxIdxvByZyTdAxWhIuISQdBeBLE9B8JMWQp2M9M=w0"
        clickValue = clickValue + 10
        document.getElementById("clickdisplay").innerHTML = "Clicking Power: <strong>" + clickValue + "</strong>"
        document.getElementById("eth").style.display = "none"
    }
}

function btcCoin() {
    if (money >= btcCoinPrice) {
        bought = console.log("Bought BTC coin")
        money = money - btcCoinPrice
        document.getElementById("cryptocoin").src = "https://cdn-icons-png.flaticon.com/512/1490/1490849.png"
        clickValue = clickValue + 55
        document.getElementById("clickdisplay").innerHTML = "Clicking Power: <strong>" + clickValue + "</strong>"
        document.getElementById("btc").style.display = "none"
    }
}

if (toggle == 0) {
    toggle++

    setInterval(function () {
        money = money + autoValue
        document.getElementById("number").innerHTML = "You have earned: <strong>" + money + "</strong> coins!"
        document.getElementById("auto").innerHTML = "Purchase Passive Coin (" + autoPrice + ")"

    }, 1000);
}


function moneyIncrement() {
    money = money + clickValue
    document.getElementById("number").innerHTML = "You have earned: <strong>" + money + "</strong> coins!"
    document.getElementById("autodisplay").innerHTML = "Passive Coin: <strong>" + autoValue + "</strong>"
    document.getElementById("auto").innerHTML = "Purchase Passive Coin (" + autoPrice + ")"
}


$(document).ready(function () {
    initializeGame()
})

$(document).ready(function () {
    initializeGame2()
})

function initializeGame() {
    setInterval(function () {
        if (money >= 30) {
            document.getElementById("auto").style.display = $('#auto').removeClass('btn btn-secondary').addClass('btn btn-primary')
        } else {
            document.getElementById("auto").style.display = $('#auto').addClass('btn btn-secondary')


        } if (money >= clickPowerPrice) {
            document.getElementById("clickPower").style.display = $('#clickPower').removeClass('btn btn-secondary').addClass('btn btn-primary')
        } else {
            document.getElementById("clickPower").style.display = $('#clickPower').removeClass('btn btn-secondary').addClass('btn btn-secondary')


        } if (money >= ethCoinPrice) {
            document.getElementById("eth").style.display = $('#eth').removeClass('btn btn-secondary').addClass('btn btn-info')

        } if (money >= btcCoinPrice) {
            document.getElementById("btc").style.display = $('#btc').removeClass('btn btn-secondary').addClass('btn btn-warning')
        }
    }, 100);

    function initializeGame2() {
        setInterval(function () {
        }, 100);
    }
}