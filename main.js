const FLTyping = {
    currentLanguageCode : 'fr', //fr language by default
    currentWord : '',
    userInput : '',
    currentList : [],
    score : 0,

    stringToArray: function(languageCode) {
        let list = data[languageCode].split(', ');
        return list;
    },

    shuffle: function(array) {
        let shuffledList = array.sort((a, b) => 0.5 - Math.random());
        return shuffledList;
    },

    startGame: function() {
        //debugger;
        if (this.currentWord == '') {
            //if the game has not yet started or it is over, start
        
            //first we need a shuffled list
            this.currentList = this.stringToArray(this.currentLanguageCode);
            
            currentList_shuffled = this.shuffle(this.currentList);
            
            //new word iterates along array
            for (let i = 0; i < currentList_shuffled.length; i++) {
                this.currentWord = currentList_shuffled[i];
                this.userInput = prompt(this.currentWord);
                if ( this.userInput != this.currentWord ) {
                    console.log('WRONG!');
                    currentList_shuffled.push(currentList_shuffled[i]);
                    this.score -= 2;
                        
                } else {
                    console.log('RIGHT!');
                    ++this.score;
                }
            }
            console.log('Your score = ' + this.score);
            this.currentWord = '';
            }
            console.log('quieres seguir?');
    }


};

const view = {
    displayWord: function() {
        //display word that user must type
    },

    displayScore: function() {
        //display live score
    },

    setUpEventListeners: function() {
        let app = document.getElementById('app');
        
        app.addEventListener('click', function(event) {
            let element = event.target;
        }
        // wip

    //eventListener for entering word
    //eventlistener for language change
        )
    }
};


const data = {
    fr : "mysère, derrière, est-ce, être, règles, j'imagine, j'écoute, chèvre, ça, où, là, père, été, très content, même, pas encore, à Saint-Étienne, à Aix-en-Provence, à Nîmes, à Oléans, c'est le même, déjà, très grand, très petit, aprés nous, c'est déjà pas mal",
    ru : "уборная, открыто, Закрыто"
};



/*
let currentLanguageCode = 'fr'; //fr language by default
let currentWord = '';
let userInput = '';
let currentList = [];
let score = 0;


function stringToArray(languageCode) {
    let list = data[languageCode].split(', ');
    return list;
};


//returns shuffled array
function shuffle(array) {
    let shuffledList = array.sort((a, b) => 0.5 - Math.random());
    return shuffledList;
};
*/

/*
//play the array, then shuffle again if we reach the end
function startGame() {
    //debugger;
    if (currentWord == '') {
    //if the game has not yet started or it is over, start

    //first we need a shuffled list
    currentList = stringToArray(currentLanguageCode);
    
    currentList_shuffled = shuffle(currentList);
    
    //new word iterates along array
    for (let i = 0; i < currentList_shuffled.length; i++) {
        currentWord = currentList_shuffled[i];
        userInput = prompt(currentWord);
        if ( userInput != currentWord ) {
            console.log('WRONG!');
            currentList_shuffled.push(currentList_shuffled[i]);
            score -= 2;
                
        } else {
            console.log('RIGHT!');
            ++score;
        }
    }
    console.log('Your score = ' + score);
    currentWord = '';
    }
    console.log('quieres seguir');
};*/


/*function FLTyping() {
    if ( userInput == currentWord ) {
        ++score;
        currentWord
    }
}*/

/*
function wordRandomPick(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
    //the maximum is exclusive and the minimum is inclusive
};
*/

/*
let data;
let request = new XMLHttpRequest();
request.open('GET', 'words.yaml');
request.onload = function() {
    data = request.response;
};
request.send();
*/
