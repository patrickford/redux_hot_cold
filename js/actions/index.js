// generate a random number
var GEN_NUMBER = 'GEN_NUMBER';
var genNumber = function() {
	return {
		type: GEN_NUMBER
	}
};
// guess a number
var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess) {
	return {
		type: GUESS_NUMBER,
		guess: guess
	}
};
// check if guessed number has been guessed
var COMPARE_GUESSES = 'COMPARE_GUESSES';
var compareGuesses = function() {
	return {
		type: COMPARE_GUESSES
	}
};
// check if the number is correct
var CHECK_CORRECT = 'CHECK_CORRECT';
var checkCorrect = function() {
	return {
		type: CHECK_CORRECT
	}
};
// evaluate how close number is if not correct
var EVAL_GUESS = 'EVAL_GUESS';
var evalGuess = function() {
	return {
		type: EVAL_GUESS,
		// result: result
	}
};
//count and display how many guesses
var COUNT_GUESS = 'COUNT_GUESS';
var countGuess = function() {
	return {
		type: COUNT_GUESS
	}
}
// reset number guess and guesses in game.
var RESET_GAME = 'RESET_GAME';
var resetGame = function() {
	return {
		type: RESET_GAME
	}
}
// // get fewest guesses info.
// var FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
// var fetchFewestGuesses = function() {
// 	return {
// 		type: FETCH_FEWEST_GUESSES
// 	}
// }
// // save fewest guesses info.
// var SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
// var saveFewestGuesses = function() {
// 	return {
// 		type: SAVE_FEWEST_GUESSES
// 	}
// }
// require('isomorphic-fetch');

// var fetchGuesses = function() {
//     return function(dispatch) {
//         var url = '/fewest-guesses';
//         return fetch(url).then(function(response) {
// 			data
//         })
//     }
// };

// exports.fetchDescription = fetchDescription;

// exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
// exports.fetchFewestGuesses = fetchFewestGuesses;
// exports.SAVE_FEWEST_GUESSES = SAVE_FEWEST_GUESSES;
// exports.saveFewestGuesses = saveFewestGuesses;
exports.GEN_NUMBER = GEN_NUMBER;
exports.genNumber = genNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.COMPARE_GUESSES = COMPARE_GUESSES;
exports.compareGuesses = compareGuesses;
exports.CHECK_CORRECT = CHECK_CORRECT;
exports.checkCorrect = checkCorrect;
exports.EVAL_GUESS = EVAL_GUESS;
exports.evalGuess = evalGuess;
exports.RESET_GAME = RESET_GAME;
exports.resetGame = resetGame;
exports.COUNT_GUESS = COUNT_GUESS;
exports.countGuess = countGuess;