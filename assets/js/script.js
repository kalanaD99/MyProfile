let circularProgress = document.querySelector(".progress").
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 50,
    speed = 100;

let progress = setInterval(() =>{
    progressStartValue++;
    progressValue.textContent = ${progressStartValue}%

   /* progressValue.textContent = ${progressStartValue}%
*/
        if (progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    console.log(progressStartValue);

},speed);