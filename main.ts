let num1 = 0
let num2 = 0
let result = 0
function GetRandom () {
    return randint(0, 10)
}
input.onButtonPressed(Button.A, function () {
    Roll_Dice()
})
// Pick two random numbers, add them together, send them back.
function Roll_Dice () {
    num1 = GetRandom()
    num2 = GetRandom()
    result = num1 + num2
    basic.showNumber(result)
}
basic.forever(function () {
	
})
