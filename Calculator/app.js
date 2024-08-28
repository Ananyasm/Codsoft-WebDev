
// (function() {
//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');
//     let operationDone = false;  // Flag to track if the last action was an operation
    
//     buttons.forEach(function(button) {
//         button.addEventListener('click', function(e) {
//             let value = e.target.dataset.num;
//             if (value !== undefined) {
//                 if (operationDone) {
//                     screen.value = value;  // Start a new operation
//                     operationDone = false;
//                 } else {
//                     screen.value += value;
//                 }
//             }
//         });
//     });

//     equal.addEventListener('click', function(e) {
//         if (screen.value === '') {
//             screen.value = "Please enter";
//         } else {
//             try {
//                 let answer = eval(screen.value);
//                 screen.value = answer;
//                 operationDone = true;  // Set the flag to true after an operation
//             } catch (error) {
//                 screen.value = "Error";
//             }
//         }
//     });

//     clear.addEventListener('click', function(e) {
//         screen.value = "";
//         operationDone = false;  // Reset the flag when cleared
//     });
// })();
(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    let lastInputWasError = false; // Track if the last input resulted in an error

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;

            // If the last input was an error, clear the screen before adding new input
            if (lastInputWasError) {
                screen.value = '';
                lastInputWasError = false;
            }

            if (value !== undefined) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
                lastInputWasError = true; // Set error flag
            }
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = "";
        lastInputWasError = false; // Reset error flag
    });
})();
