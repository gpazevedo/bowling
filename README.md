# Bowling Game Scoring

Rules:

* Each game, or "line" of bowling, includes ten turns, or "frames" for the bowler.
* In each frame, the bowler gets up to two tries to knock down all the pins.
* If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
* If in two tries he knocks them all down, this is called a "spare" and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
* If on his first try in the frame he knocks down all the pins, this is called a "strike". His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
 * If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
* The game score is the total of all frame scores.

## PROBLEM

Calculate the correct score for a gamer.

## DESIGN

I used a Domain-Driven Design as a starting point.

#### Infra-structure

The system depends on NODEJS for its execution. JEST supports testing all the components.

## Installation

This system uses NODEJS and one node package manager. YARN is recommended.
As a preparation for the installation of this system:

1. Install nodejs (https://nodejs.org/en/download/)
2. Install yarn (https://classic.yarnpkg.com/en/docs/install/#debian-stable)

```
$ yarn   # Install all dependencies
```

## Testing

```
$ yarn test filetobetested # TDD with Unit Tests
$ yarn test                # TDD with all Unit Tests
$ yarn test:coverage       # TDD with all Unit Tests
```
