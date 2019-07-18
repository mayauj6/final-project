var button = $('button');
var container = $('.container')
var arr = ["I am a victim","I am shocked","I am a survivor", "I am confident","I am amazing"];

button.on("click", post);


//adds input to array and prints i of array
function post(){
  var count = 0;
  event.preventDefault();
  var x = document.getElementById("myText").value;
  console.log(x);

  arr.pop();
  arr.push("i am ${x}");
  console.log(arr);

  container.append(`
    <p>I am ${x}</p>
    <p>${arr[0]}</p>
    <p>${arr[1]}</p>
    <p>${arr[2]}</p>
    <p>${arr[3]}</p>
    <p>${arr[4]}</p>
    <p>${arr[5]}</p>
    <p>${arr[6]}</p>
    <p>${arr[7]}</p>
    <p>${arr[8]}</p>
  `)

  count++;
}
