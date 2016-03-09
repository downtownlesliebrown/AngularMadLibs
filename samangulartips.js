//angular tips

var self = this;
// LOCAL VARIABLES
var names = ['sam','nMW2'];

// BOUND FUNCTIONS
self.dothis = dothis;
// functions that my view has access to/calls, and then those are implemented below in bound function implementations


// BOUND VALUES
self.stuff = 7;
self.thing = "word";
//things that the view populates


// BOUND FUNCTION IMPLEMENTATIONS
function dothis(){
   console.log("this");
   toggle(self.visible);
   self.visible = !self.visible;
   //these functions are just calling the helper functions
   //these send through the bound values as parameters into the helper functions in services file
}

// HELPER FUNCTIONS
function removeFromList(list,elem){
   //loop through list and remove element

   function shuffle(o){
   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
   }
   shuffle(nounAutoArray);
   shuffle(verbAutoArray);
   shuffle(adjectiveAutoArray);
   shuffle(adverbAutoArray);




}
