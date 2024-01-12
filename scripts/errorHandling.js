//Error handling -> try, catch, finally, throw
//try ... catch handle run time errors(program which is)
//Error object
//The FInally statement -> execute code, after try and catch
//The throw statement -> create custom errors.

console.clear();
// try {
//     //code
//     alert('Hi everyone');
//     alert(x);
// } catch (err) {
//     //handle error
//     alert('Inside Catch block');
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// } finally {
//     alert('Bye Everyone');
// }

// alert('Hi everyone');
// alert(x);
// alert('Bye Everyone');

document.querySelector('#checkBtn').addEventListener('click', function () {
    // alert('button is clicked');
    let num = document.querySelector('#numTextFied').value;
    console.log(num);
    try {
        if (num < 5) {
            throw 'Input is too low';
        } else if (num > 10) {
            throw 'Input is too high';
        }
    } catch (err) {
        console.log(err);
    }
});
