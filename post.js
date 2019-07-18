var button = $('button');
var container = $('.container')
// var test = $('.test')
var arr = [];
var max = 10;
var count = 0;

button.on("click", post);


//adds input to array and prints i of array
function post(){
  event.preventDefault();


  var text = $("#myText").val();
  console.log(text);


  arr.push(`i am ${text}`);

  console.log(arr);


  if(arr.length >= max){
     // document.getElementById(arr).remove;
    arr.pop(0);
    console.log(arr.length)
  }
  container.append(`
    <p>${arr[count]}</p>
  `
  )
  count++;
  }
