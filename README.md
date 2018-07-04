This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a React version of the game Yahtzee. It is in the early stages of development, and this README will be updated to reflect new additions as and when they are made.

Currently the dice can be rolled, any dice which the player wants to retain across rolls can be selected and the turn can be advanced after 3 rolls. Scores are calculated according to the results of each roll and added to the player's score card. The player can choose which category to mark the score under and a running total of the score is calculated after each turn. Bonuses for multiple Yahtzees are still to be added.

The game can be played by up to six people, with a minimum of one. After scoring play moves on to the next player in sequence when the "Next Turn" button is pressed. Unlike some games there are no balancing issues caused by increasing the number of players, so future versions may allow the user to add as many players as they want. Currently there is no win condition being checked, and this is the next feature to be added. Play won't continue indefinitely though; once a player has filled all the boxes on their scoresheet it will be impossible to update the "scored" boolean for their current turn and so the "Next Turn" button will be locked out.

Styling is handled using react-bootstrap, although is still very basic at this point.

