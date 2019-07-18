var button = $('button');
var container = $('.container')
var arr = [4];

button.on("click", post);

//adds input to array and prints i of array
function post(){
  var count = 0;
  event.preventDefault();
  var x = document.getElementById("myText").value;
  console.log(x);

  arr.pop();
  arr.push(x);
  console.log(arr);

  container.append(`
    <p>I am ${x}</p>
    <p>$</p>
  `)

  count++;
}
