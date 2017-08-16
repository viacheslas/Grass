/**
 * Created by viacheslas on 10.08.17.
 */

/**Lesson1**/

// function myclick () {
//
//
//     let testfunction = function () {
//         return 22;
//     };
//
//     console.log(6);
//
//     let myArray = [1, 2, 3];
//     console.log(myArray);
//
//     let myObject = {
//         height: 200,
//         width: 500,
//         color: 'red'
//     };
//     console.log(myObject);
//     console.log(testfunction());
//
//     (function(){
//         console.log('unanimous');
//     })();
// }

    /**Lesson2 **/

;(function (){
    // tmp();
    age = 30;

    function tmp() {
        let myName = "viacheslas";
        console.log(myName);
    }

    console.log(this.age);

    let myMenu = document.getElementById('menu');
    console.log(myMenu);
    // myMenu.

    let testArray =[
        {
            age: 22,
            occup: 'manager'
        },
        {
            age: 30,
            occup: 'driver'
        },
        {
            age: 55.5,
            occup: 'manager'
        }
    ];

    let arrayOne = [];
    let arrayTwo = [];

    testArray.forEach(function (element, index, array) {
        if (element.hasOwnProperty('age')){
            if (element.age <= 35) {
                arrayOne.push(element);
            }
        }
        if (element.hasOwnProperty('occup')){
            if (element.occup === 'manager'){
                arrayTwo.push(element);
            }
        }

    });

    console.log(arrayOne);
    console.log(arrayTwo);


})();
