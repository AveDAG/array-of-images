let count = 0
let character_images = [img`
. . . . 2 2 2 2 2 e . . . . . . 
. . . 2 2 2 2 d 2 2 e . . . . . 
. . e 2 2 2 2 2 2 2 e . . . . . 
. . e 2 2 2 2 2 2 2 e . . . . . 
. . e 2 2 2 2 2 e f f c c . . . 
. . e e 2 2 e f f f f b c . . . 
. e e e f e 2 b f f f d c . . . 
e e 2 2 d f 2 1 1 1 1 b c . . . 
e e 2 2 d f e e c c c . . . . . 
b 1 1 d e 2 2 e e c . . . . . . 
. f f e 2 2 2 2 e . . . . . . . 
. . f f d d 2 2 f f d d . . . . 
. . f f d d e e f f d d . . . . 
. . . f f f f . . . . . . . . . 
. . e e e f f f . . . . . . . . 
. . e e e e f f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 e . . . . 
. . . . . 2 2 2 2 d 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 e f f c c . 
. . . . e e 2 2 e f f f f b c . 
. . . e e e f e 2 b f f f d c . 
. . e e 2 2 d f 2 1 1 1 1 b c . 
. . e e 2 2 d f e e c c c . . . 
. . b 1 1 d e 2 e e c . . . . . 
. . f f f f d d f . . . . . . . 
f f f f f f d d . . . . . . . . 
f f f . f f f e . . . . . . . . 
f f . . . . e e e . . . . . . . 
. . . . . . e e e e . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 e . . . . 
. . . . . 2 2 2 2 d 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 e f f c c . 
. . . . e e 2 2 e f f f f b c . 
. . e e e f e 2 2 b f f f d c . 
. e e 2 2 d f e 2 1 1 1 1 b c . 
. e e 2 2 d f e e e c c c . . . 
. b 1 1 e e 2 2 e e c . . . . . 
. . f d d 2 2 2 f f f d d . . . 
e e f d d e e e . f f d d . . . 
e e e f f f f f . . . . . . . . 
e e . . . . f f f . . . . . . . 
. . . . . . f f f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 e . . . 
. . . . . . 2 2 2 2 d 2 2 e . . 
. . . . . e 2 2 2 2 2 2 2 e . . 
. . . . . e 2 2 2 2 2 2 2 e . . 
. . . . . e 2 2 2 2 2 e f f c c 
. . . . . e e 2 2 e f f f f b c 
. . . e e e f e 2 2 b f f f d c 
. . e e 2 2 d f e 2 1 1 1 1 b c 
. . e e 2 2 d f e e e c c c . . 
. . b 1 1 d e 2 2 e e c . . . . 
. . . f f f d d 2 2 f d d . . . 
. . . . f f d d e e f d d . . . 
. . . . . f f f f f . . . . . . 
. . . . e e e f f . . . . . . . 
. . . . e e e e f f . . . . . . 
`, img`
. . . . 2 2 2 2 2 e . . . . . . 
. . . 2 2 2 2 d 2 2 e . . . . . 
. . e 2 2 2 2 2 2 2 e . . . . . 
. . e 2 2 2 2 2 2 2 e . . . . . 
. . e 2 2 2 2 2 e f f c c . . . 
. . e e 2 2 e f f f f b c . . . 
. e e e f e 2 b f f f d c . . . 
e e 2 2 d f 2 1 1 1 1 b c . . . 
e e 2 2 d f e e c c c . . . . . 
b 1 1 d e 2 2 e e c . . . . . . 
. f f e 2 2 2 2 e . . . . . . . 
. . f f d d 2 2 f f d d . . . . 
. . f f d d e e f f d d . . . . 
. . . f f f f . . . . . . . . . 
. . e e e f f f . . . . . . . . 
. . e e e e f f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 e . . . . 
. . . . . 2 2 2 2 d 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 e f f c c . 
. . . . e e 2 2 e f f f f b c . 
. . . e e e f e 2 b f f f d c . 
. . e e 2 2 d f 2 1 1 1 1 b c . 
. . e e 2 2 d f e e c c c . . . 
. . b 1 1 d e 2 e e c . . . . . 
. . f f f f d d f . . . . . . . 
f f f f f f d d . . . . . . . . 
f f f . f f f e . . . . . . . . 
f f . . . . e e e . . . . . . . 
. . . . . . e e e e . . . . . . 
`]
let football_player = sprites.create(character_images[0], SpriteKind.Player)
game.onUpdate(function () {
    football_player.setImage(character_images[count % character_images.length])
    count += 1
})
