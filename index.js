let tip;
//let feet;
//let city;
function scuberGreetingForFeet(feet){
  let repo;
  if (feet<=400){
    repo =`This one is on me!`
  }
  else if(feet>= 2001 && feet < 2500){
    repo = `I will gladly take your thirty bucks.`
  }
  else if(feet>=2500){
    repo = `No can do.`
  }
  return repo;
}
//scuberGreetingForFeet(199);

function ternaryCheckCity(city){
  // Write your code here!
  let response
  city === 'NYC' ? 
     (response = `Ok, sounds good.`) : (response ='No go.');
     return response;
}
ternaryCheckCity('Pitsburgh');

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charm;
  switch(tip){
    case 'generous':
    charm = 'Thank you so much.';
   break;
   case 'not as generous':
    charm = 'Thank you.';
   break;
  default :
    charm = 'Bye.';
    break;
  }
  return charm;
}
switchOnCharmFromTip('not as generous');
