(function(){
	angular.module('Madlibs')
        .factory('StoryGenerator', storyGenerator);

		function storyGenerator(){

			//local variables
				var story = {
					Christmas:"Every Christmas we  verb  to a   adjective   tree farm far away. This is not just any   adjective   tree farm. My dad and I    verb   onto the   noun   to    verb   for the perfect   noun  .  Some people like them   adjective  , but I prefer them   adjective  . After  searching for hours I usually   adverb   exclaim Dad! The perfect tree is over   there! Off we    verb   to get the tree. The problem is we always forget the  noun  and the  noun  . But at the end of the day we    adverb   get the tree and head home    adverb  . I wish it was Christmas all year round  I    adverb  think to myself.",
					Shopping: "Today I went shopping. When I arrived at the store I saw a   adjective     noun  , who upon noticing me    adverb   said I need to   verb  . Well,   that was   adjective  I thought to myself and walked in the store. The store had rearranged it\s inventory, so I felt    adverb   lost. I   walked up to store clerk and said    adverb   I am looking for a   adjective     noun   that doesn’t    verb   as often as the last one I had. The store clerk    looked at me with a   adjective   look in his eye and said, What you are looking for can be found by the   noun  , if you see a   noun   that    adverb   can    verb  , then you've gone too far. As I tried to understand his directions, I thought to myself, I should have just ordered it    on amazon.com, Their products seem to    verb   the perfect amount.",
					Brainstorm: "Many say that brainstorming is   adjective   and does not   verb  . However, with the combination of the right computer and   noun   anyone  can lead a good    verb  . When you have    adverb   pulled together a   adjective      group of   noun   in a big room with lots of TV\s then  magical things will happen. In the past we have    adverb   suggested  participants work together to find the most   adjective   solution. The   most difficult part is many   adjective     noun   like to   verb . This has proved to be    adverb   problematic.  But in the end the most important   noun   usually is brought to light.  Typically we try to encourage ideas to    verb  , and never shut ideas  down. This concludes our instructions. Thanks for    adverb   listening!"
				};

				var wordsAutomated={
		            adjectives: ['round','flat','edgy'],
					verbs: ['run','sit','stand'],
		            nouns: ['dog','homework','cookie'],
					adverbs: ['noisily','irritably','cheerfully'],
			        };

				var  wordsCombined = {  //this wasn't working when i tried to console log entered words because i didn't have the vm.
		            adjectives: [],
		            verbs: [],
		            nouns: [],
		            adverbs: []
			        };

				var returnObj = {
					//variables
					// possiblestories: possiblestories,
					story: story,
					wordsAutomated:  wordsAutomated,

					// wordsCombined:  wordsCombined,

					//functions
					generateStory: generateStory

				};
				//return object
				return returnObj;


				//define functions
				function shuffle(o){
		            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
					return o;
				}

				function combineEnteredAndAuto (wordsEntered, wordsAutomated) {

					var tempWordsCombined = wordsEntered.split(',').concat(wordsAutomated);
					// console.log(tempWordsCombined);
					if (tempWordsCombined.length>4){
						tempWordsCombined.splice(4,100);
					}
					return tempWordsCombined;
				}

				function generateStory(wordsEntered, pickedStory){
					storyWithReplacedWords = story[pickedStory];

					console.log("20", storyWithReplacedWords);




					 wordsCombined.adjectives = combineEnteredAndAuto(wordsEntered.adjectives, wordsAutomated.adjectives);
					 wordsCombined.adverbs= combineEnteredAndAuto(wordsEntered.adverbs, wordsAutomated.adverbs);
					 wordsCombined.nouns = combineEnteredAndAuto(wordsEntered.nouns, wordsAutomated.nouns);
					 wordsCombined.verbs = combineEnteredAndAuto(wordsEntered.verbs, wordsAutomated.verbs);

					shuffle(wordsCombined.adjectives);
					shuffle(wordsCombined.adverbs);
					shuffle(wordsCombined.nouns);
					shuffle(wordsCombined.verbs);

					replaceWordsInStory(pickedStory, wordsCombined);

					function replaceWordsInStory (pickedStory, wordsCombined) {

						// var storyWithReplacedWords = story[pickedStory];
						loopThroughComboArrays("adjective", wordsCombined.adjectives);
						loopThroughComboArrays( "adverb", wordsCombined.adverbs);
						loopThroughComboArrays("noun", wordsCombined.nouns);
						loopThroughComboArrays("verb", wordsCombined.verbs);

						function loopThroughComboArrays (wordType, wordsCombined) {
							// console.log(wordType, wordsCombined, storyWithReplacedWords);
							for (var i = 0; i < wordsCombined.length; i++) {
								storyWithReplacedWords = storyWithReplacedWords.replace(wordType, wordsCombined[i]);
							}
						}
						// console.log(storyWithReplacedWords);

					} var returnObj2 = {
						storyWithReplacedWords: storyWithReplacedWords
					};
					return returnObj2;
			}
		}
	}

)();

// function shuffler(){
// 	var returnObj = {
// 	};
// 	return returnObj;
// }
//
// function generateStory(){}

// function enteredWordGetter(){
// 	var wordsEntered={
//         adjectives: [],
//         adverbs: [],
//         nouns: [],
//         verbs: []
// 	};
// 	var returnOjb = {
// 		wordsEntered: wordsEntered
// 	};
// }

// function wordShuffler(){
//     var wordsAutomated={
//         adjectives: [
//             'round',
//             'flat',
//             'edgy'
//         ],
//         adverbs: [
//             'noisily',
//             'irritably',
//             'cheerfully'
//         ],
//         nouns: [
//             'dog',
//             'homework',
//             'cookie'
//         ],
//         verbs: [
//             'run',
//             'sit',
//             'stand'
//         ],
//     };

	// var returnObj = {
	// 	comboArray: comboArray
	// };
	// return returnObj;


// }


// function shuffler(){
// 	// var _number = 1;
// 	var returnObj = {
// 		// number: getNumber,
// 		// setNumber: setNumber,
// 		// randomnumber: randomnumber
// 	};
// 	return returnObj;
//
// 	// function getNumber () {
// 	// 	return _number;
// 	// }
// 	// function setNumber (whatever) {
// 	// 	_number = whatever;
// 	// }

// vm.wordsEntered.adjectives = vm.wordsEntered.adjectives.split(',');
// vm.wordsEntered.verbs = vm.wordsEntered.verbs.split(',');
// vm.wordsEntered.adverbs = vm.wordsEntered.adverbs.split(',');
// vm.wordsEntered.nouns = vm.wordsEntered.nouns.split(',');
//
//
// vm.wordsCombined.adjectives = vm.wordsEntered.adjectives.concat(vm.wordsAutomated.adjectives);
// 	if (vm.wordsCombined.adjectives.length>4) {
// 		vm.wordsCombined.adjectives.splice(4,100);
// 	}
// vm.wordsCombined.adverbs = vm.wordsEntered.adverbs.concat(vm.wordsAutomated.adverbs);
// 	if (vm.wordsCombined.adverbs.length>4) {
// 		vm.wordsCombined.adverbs.splice(4,100);
// 	}
// vm.wordsCombined.nouns = vm.wordsEntered.nouns.concat(vm.wordsAutomated.nouns);
// 	if (vm.wordsCombined.nouns.length>4) {
// 		vm.wordsCombined.nouns.splice(4,100);
// 	}
// vm.wordsCombined.verbs = vm.wordsEntered.verbs.concat(vm.wordsAutomated.verbs);
// 	if (vm.wordsCombined.verbs.length>4) {
// 		vm.wordsCombined.verbs.splice(4,100);
// 	}
// if (formData.Christmas.checked){
// 	replaceWordsInStory(formData.Christmas, wordType, wordsCombined);
// } else if (formData.Shopping.checked) {
// 	replaceWordsInStory(formData.Shopping, wordType, wordsCombined);
// } else if (formData.Brainstorming.checked) {
// 	replaceWordsInStory(formData.Brainstorming, wordType, wordsCombined);
// }
