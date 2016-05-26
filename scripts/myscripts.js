var poet = function whosWho () {if ( "Ezra Pound" == ){
  document.getElementById("name").innerHTML = "Yup, good ol' Ez.";
  console.log("Ezra Pound");
  } else if ( "Peter Doherty" ){
  document.getElementById("name").innerHTML = "Nope.  Not in this tower.";
  console.log( "Nope.  Not in this tower." );
} else if ( "Wyndham Lewis"){
  document.getElementById("name").innerHTML = "Pals, not tower enemies.";
  console.log("Pals, not tower enemies.");
} else { document.getElementById("name").innerHTML = "Peter's buddy, not Thomas Stern Eliot's.";
      console.log ("Peter's buddy, not Thomas Stern Eliot's.");
}
}
whosWho();
