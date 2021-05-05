module.exports = {                                                                 //It is the export property to the test file
    generatedeck : function(cards) {                                                //It is used to test generatedeck function
        return cards;
    },

    valnana : function(val,face) {                                                                      //This is to check for card value to be 11
        if (isNaN(val)) {
            val = face === 'A' ? 11 : 10;                                                               //Ternary operator 
          }
          return val;
    },

    valnank : function(face,val) {                                                                      //This is to check for card value to be 10 if condition is not met
        if (isNaN(val)) {
            val = face === 'A' ? 11 : 10;                                                               //Ternary operator 
          }
          return val;
    },
    

    deal_tie : function(dealerTotal,playerTotal) {
        if (dealerTotal === 21 && playerTotal === 21) {                                                  //displays draw and blackjack stores the value as t
        return blackjack = 't';

        }
    },

    dealer_win : function(dealerTotal) {
        if (dealerTotal === 21 ) {                                                                       //displays dealer win stores the value as d
        return blackjack = 'd';

        }
    },

    player_win : function(playerTotal) {
        if (playerTotal === 21 ) {                                                                         //displays player win stores the value as p
        return blackjack = 'p';

        }
    }
    
} 