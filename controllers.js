(function(){

    angular.module('Madlibs')
    .controller('Madlibs', madlibsCtrl);

    function madlibsCtrl(StoryGenerator) {
        //local variables
        var vm = this;

        //public vairables
        vm.pickedStory = '';
        vm.wordsEntered = {  //this wasn't working when i tried to console log entered words because i didn't have the vm.
            adjectives: '',
            adverbs: '',
            nouns: '',
            verbs: ''
        };

        vm.generateStory = generateStory;

        function generateStory() {
            // console.log(vm.pickedStory);
            vm.newStory = StoryGenerator.generateStory(vm.wordsEntered, vm.pickedStory);
            return vm.newStory;
            // console.log("10", vm.newStory);
            // console.log("StoryGenerator: ", StoryGenerator);
        }
    }
})();




// vm.wordsEntered.adjectives = vm.wordsEntered.adjectives.split(',');
// vm.wordsEntered.verbs = vm.wordsEntered.verbs.split(',');
// vm.wordsEntered.adverbs = vm.wordsEntered.adverbs.split(',');
// vm.wordsEntered.nouns = vm.wordsEntered.nouns.split(',');
//
//
// vm.wordsCombined.adjectives = vm.wordsEntered.adjectives.concat(vm.wordsAutomated.adjectives);
//     if (vm.wordsCombined.adjectives.length>4) {
//         vm.wordsCombined.adjectives.splice(4,100);
//     }
// vm.wordsCombined.adverbs = vm.wordsEntered.adverbs.concat(vm.wordsAutomated.adverbs);
//     if (vm.wordsCombined.adverbs.length>4) {
//         vm.wordsCombined.adverbs.splice(4,100);
//     }
// vm.wordsCombined.nouns = vm.wordsEntered.nouns.concat(vm.wordsAutomated.nouns);
//     if (vm.wordsCombined.nouns.length>4) {
//         vm.wordsCombined.nouns.splice(4,100);
//     }
// vm.wordsCombined.verbs = vm.wordsEntered.verbs.concat(vm.wordsAutomated.verbs);
//     if (vm.wordsCombined.verbs.length>4) {
//         vm.wordsCombined.verbs.splice(4,100);
//     }
// vm.number = StoryGenerator.number;
// function goBack () {
//     vm.number--;
//     StoryGenerator.setNumber(vm.number);
// }
