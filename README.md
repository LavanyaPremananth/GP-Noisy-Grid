# Noisy Grid

The **Noisy Grid** project is a creative coding sketch created using p5.js, which generates a grid of visual elements based on Perlin noise patterns. The sketch incorporates two main components: a colored grid and a compass-like rotating grid, both affected by Perlin noise.

## Project Overview

The Noisy Grid project features the following functionalities:

- **Color Grid**:
  - A grid of rectangles where the color of each rectangle is determined by Perlin noise.
  - The color transitions smoothly between two predefined colors (blue and white) based on the noise value.
  - The appearance of the grid changes over time as the noise values evolve.

- **Compass Grid**:
  - Another grid of elements resembling compass needles, each affected by Perlin noise.
  - The rotation angle of each element varies based on the noise value, creating a dynamic visual effect.
  - The speed of rotation is controlled by the horizontal position of the mouse, allowing for interactive manipulation.

## Implementation Details

The sketch is implemented using the p5.js library for creative coding:

- **Setup**:
  - Initializes the canvas with a size of 500x500 pixels.
  - Defines color variables for blue, green, red, white, and black.

- **Draw Function**:
  - Invoked repeatedly to update the canvas and render the visual elements.
  - Clears the background and fills it with a grayscale color (RGB: 125) to create a subtle contrast with the colorful grid.

- **Color Grid Function (`colorGrid()`)**:
  - Uses nested loops to iterate through a grid of rectangles.
  - Calculates noise values (`n`) based on the grid position and frame count.
  - Maps the noise value to interpolate between two colors (blue and white) using `lerpColor()`.
  - Draws filled rectangles with interpolated colors.

- **Compass Grid Function (`compassGrid()`)**:
  - Similar to `colorGrid()`, iterates through a grid of ellipse elements.
  - Utilizes Perlin noise to determine the rotation angle (`a`) and color (`c`) of each ellipse.
  - Maps noise values to control the rotation angle and color intensity.
  - Draws rotated ellipses centered at grid positions.

## Usage

To run the Noisy Grid sketch:

1. Download the p5.js library or include it from a CDN in your HTML file.
2. Copy the provided JavaScript code into a new sketch file.
3. Open the HTML file in a web browser to view the interactive grid visualization.
4. Move the mouse horizontally across the canvas to manipulate the rotation speed of the compass-like grid.

## Conclusion

The Noisy Grid project demonstrates the creative potential of Perlin noise in generating dynamic and visually appealing patterns within a grid-based layout. The combination of color interpolation and rotational effects adds an engaging and interactive element to the visualization.

For further exploration, I will consider experimenting with different colors, grid sizes, noise parameters, or interactive features to customize and extend the project.
