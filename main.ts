input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
	
})
let Player: game.LedSprite = null
basic.showIcon(IconNames.No)
game.setScore(0)
Player = game.createSprite(4, 2)
let Player_2 = game.createSprite(4, 2)
basic.forever(function () {
    if (Player.isTouching(Player_2)) {
        basic.showIcon(IconNames.Heart)
    }
})
