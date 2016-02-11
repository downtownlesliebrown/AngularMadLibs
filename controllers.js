(function(){

    angular.module('Madlibs')
    .controller('Madlibs', madlibsCtrl);

    function madlibsCtrl(Shuffler, StoryPicker){
        console.log("it's working, yo!");
        var self = this;
        self.stories = StoryPicker.possiblestories;
        console.log(self.stories);
    }

    var wordsEntered = {
        adjectives: [],
        adverbs: [],
        nouns: [],
        verbs: []
    };



})();
