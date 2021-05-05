const game = require('./Gametest');                                                               //Importing the program file using the require keyword

describe ("card value", () => {                                                              //Describe is used as a main function to contain all the process
    test("Should return empty card ",() => {                                                 //test statement is called as test and following is the desciption and an arrow function
      const card="";
      const expectedvalue= "";
      const result=game.generatedeck(card);
      expect(result).toBe(expectedvalue)                                                     //expect is used to express the result and toBe is used for the expectedvalue
    })

    test("Should return 11 if face equal to 'A'",() => {
        const val='A';
        const face='A';
        const expectedvalue=11;
        const result=game.valnana(val,face);
        expect(result).toBe(expectedvalue)
    })
   
    test("Should return 10 if face equal to 'k'",() => {
        const val='A';
        const face='k';
        const expectedvalue=10;
        const result=game.valnank(face,val);
        expect(result).toBe(expectedvalue)
    })
   
})

describe ("tie", () => {                                           
    test("The game is tie", () => {                                                                    //This test is done to check for tie
    const dealerTotal=21;                       
    const playerTotal=21;
    const expectedvalue='t' ;
    const result= game.deal_tie(dealerTotal,playerTotal);
    expect(result).toBe(expectedvalue)
    })
    test("Dealer Wins", () => {                                                                          //This test is done to check for dealer win
        const dealerTotal=21;
        const expectedvalue='d' ;
        const result= game.dealer_win(dealerTotal);
        expect(result).toBe(expectedvalue)
        })

    test("Player Wins", () => {                                                                         // //This test is done to check for dealer win
        const dealerTotal=21;
        const playerTotal=21;
        const expectedvalue='p' ;
        const result= game.player_win(playerTotal);
        expect(result).toBe(expectedvalue)
        })
})

