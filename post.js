var button = $('button');
var container = $('.container')
var arr = [];

button.on("click", post);

//adds input to array and prints i of array
function post(){
  var count = 0;
  event.preventDefault();
  var x = document.getElementById("myText").value;
  console.log(x);

  arr.push(x);
  arr.pop;
  console.log(arr);

  container.append(`
    <p>I am ${x}</p>
  `)

  count++;
}
