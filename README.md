# Special Zee QUEST

A cute little pixel-art mini-game made for Zee.

The goal is simple: help the puppy complete a bunch of tiny quests, grow the flower garden, restore Zee's mood, and unlock a little love letter at the end.

Basically, I made a whole game instead of just saying "feel better."

---

## About

**Special Zee QUEST** is a browser-based pixel-art mini-game built with vanilla HTML, CSS, and JavaScript.

The game includes:

- A customizable puppy with a name chosen by the player
- Pixel-art visuals and animations
- Puppy dialogue
- Multiple interactive quests
- A pink pixel collar for the puppy
- Growing flowers throughout the game
- A mood/progress system
- Pixel-art UI
- Sound effects using the Web Audio API
- Particle effects
- Screen animations
- A final completion screen
- A personal love letter at the end
- Mobile responsive design

---

## The Game

At the beginning, Zee gets to name the puppy.

Then the puppy takes her through a series of little quests.

The quests include things like:

1. Meeting the puppy
2. Feeding the puppy
3. Giving the puppy another snack
4. Giving the puppy water
5. Watering a flower
6. Growing the garden
7. Petting the puppy
8. Putting a bow on the puppy
9. Choosing a flower
10. Giving the puppy one final hug

Each completed quest increases the overall progress.

Once everything is completed, the game reaches:

> MOOD RESTORED

The player can then unlock the final love letter.

---

## Features

### Puppy Naming

The player gets to choose the puppy's name before starting the game.

The chosen name is then used throughout the puppy's dialogue and speech box.

### Pixel-Art Puppy

The puppy is created entirely with HTML and CSS.

No image assets are required for the main puppy.

The puppy includes:

- Body
- Head
- Ears
- Eyes
- Nose
- Mouth
- Tail
- Legs
- Pink collar
- Collar tag

The puppy also has idle, jumping, walking, blinking, and tail-wagging animations.

### Quest System

The game uses a JavaScript quest array to control the different stages of the game.

Each quest contains:

- A title
- A description
- Puppy dialogue
- Status text

The interface updates automatically as the player progresses.

### Flower Garden

Flowers appear as the player progresses through the quests.

Each flower grows using a CSS animation.

The garden gradually becomes fuller as the game continues.

### Sound Effects

The game uses the browser's Web Audio API to create simple sound effects without requiring audio files.

Sounds are triggered for things like:

- Button clicks
- Quest completion
- Game completion
- Final screen

### Particle Effects

Small pixel particles appear during important interactions and celebrations.

### Responsive Design

The game is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile

The layout adjusts automatically for smaller screens.

### Reduced Motion

The game respects the user's system preference for reduced motion through:

```css
@media (prefers-reduced-motion: reduce)
````

---

## Tech Stack

This project uses:

* HTML5
* CSS3
* JavaScript
* Web Audio API
* CSS Animations
* Google Fonts

Fonts used:

* Press Start 2P
* VT323

No framework is required.

---

## Project Structure

```text
special-zee-quest/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Running the Game

No build tools are required.

Simply open:

```text
index.html
```

in a browser.

For development, you can also use a local server such as VS Code Live Server.

---

## Design

The game uses a pixel-art style inspired by classic games.

### Main Colors

The main visual identity is pink.

Primary colors include:

* Pink
* Hot pink
* Light pink
* Soft pink
* Cream

Secondary accents include:

* Orange
* Yellow
* Blue
* Purple
* Green

The pink palette is used throughout the interface, flowers, buttons, progress bars, screens, and puppy collar.

---

## Why I Made This

This wasn't made to be a serious game.

It's basically an unnecessarily complicated way of saying:

**I love you and I wanted to make you smile.**

Instead of sending a normal message, I made a whole mini-game where a little puppy tries to help restore Zee's mood.

---

## Final Message

After completing the quests, the player unlocks a personal message.

The final screen includes:

* A pixel flower
* A love letter
* A signature
* An option to exit the quest

The love letter is intentionally kept simple and personal.

---

## Future Ideas

Possible future additions:

* More puppy animations
* More quests
* Different puppy outfits
* More flower types
* Puppy accessories
* Multiple garden areas
* More sound effects
* Save game progress
* Different endings
* A secret easter egg
* More interactive objects
* A proper start menu
* More pixel-art environments

---

## Credits

Made with HTML, CSS, JavaScript, and a lot of unnecessary effort.

Made specifically for Zee.

---

## License

This is a personal project and was created as a gift.

Feel free to use the code as inspiration for your own projects, but the personal messages and content are not intended for reuse.
