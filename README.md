# Neon Cursor Trail Effect

A small interactive web effect where your mouse or touch leaves a glowing neon trail across the screen.

## Demo
Open `index.html` in any modern browser and move your cursor (or use touch) to see the trail.

## Project Structure
```
neon_cursor_trail_effect/
├── index.html   # markup linking to CSS & JS
├── style.css    # layout & visual styles
├── script.js    # effect logic
└── README.md    # this file
```

## How It Works
* **Canvas** is resized to fill the viewport.
* Mouse / touch positions are captured and stored in a `trail` array with fading alpha values.
* `requestAnimationFrame` draws successive line segments between trail points, producing a smooth neon line that gradually fades.

## Customization
* Change `strokeStyle` in `script.js` to alter the neon color.
* Adjust `lineWidth`, `trail.length` or fade speed (`alpha -= 0.02`) for different visual results.

## Setup
No build tools needed. Simply clone/download and open `index.html`.
