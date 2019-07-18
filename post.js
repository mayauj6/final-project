var button = $('button');
var t = $('p');
var alpha = ["do not look for healing at the feet of those who broke you ― Rupi Kaur, Milk and Honey","Happiness is a direction, not a place. — Sydney J. Harris","Folks are usually about as happy as they make their minds up to be. – Abraham Lincoln","Don't judge yourself by what others did to you. ― C. Kennedy, Ómorphi","A great obstacle to happiness is to expect too much happiness. – Bernard de Fontenelle", "“Survivors of abuse show us the strength of their personal spirit every time they smile.” ― Jeanne McElvaney, Healing Insights: Effects of Abuse for Adults Abused as Children", "“Toxic relationships are dangerous to your health; they will literally kill you. Stress shortens your lifespan. Even a broken heart can kill you. There is an undeniable mind-body connection. Your arguments and hateful talk can land you in the emergency room or in the morgue. You were not meant to live in a fever of anxiety; screaming yourself hoarse in a frenzy of dreadful, panicked fight-or-flight that leaves you exhausted and numb with grief. You were not meant to live like animals tearing one another to shreds. Don't turn your hair gray. Don't carve a roadmap of pain into the sweet wrinkles on your face. Don't lay in the quiet with your heart pounding like a trapped, frightened creature. For your own precious and beautiful life, and for those around you — seek help or get out before it is too late. This is your wake-up call!” ― Bryant McGill"];


button.on('click', printText);

function printText(){
  var randomDecimal = Math.random();
  var random = randomDecimal * 7;
  var rNum = Math.floor(random);

  var quote = alpha[rNum];
  t.text(quote);
  // console.log(randomDecimal);
  // console.log(random);
  // console.log(rNum);
  // console.log(quote);
}
