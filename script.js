const signature = `
 _    ____      _____                ____           _        __       _   _ 
| |  / ___|    |  ___|__  _ __      / ___|_ __ __ _| |_ ___ / _|_   _| | | |
| | | |  _     | |_ / _ \\| '__|    | |  _| '__/ _\` | __/ _ \\ |_| | | | | | |
|_| | |_| |    |  _| (_) | |       | |_| | | | (_| | ||  __/  _| |_| | | |_|
(_)  \\____|    |_|  \\___/|_|        \\____|_|  \\__,_|\\__\\___|_|  \\__,_|_| (_)
                                    ♥
`;

console.log(signature);


/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
 // Deliverable 1: Your code here 👇
  let num = getRandomNumber(0, 2);
  if (num === 0){
    return "Drama"
  } else if (num === 1){
      return "Fantasy"
    } else {
        return "Comedy"
    };
 
  
};

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if ( genre === "random"){
    genre=chooseRandomGenre();
  }
  // our arrays contain 5 items so that is why i used min to be 0 and max to be 4. This provids a random index everytime it runs ensuring randomization
  let Index = getRandomNumber(0,4);

  // display a show
  if (genre === "drama"){
    displayShow(dramaShows[Index]);
  }else if (genre === "fantasy") {
    displayShow(fantasyShows[Index]);
  }
  else {
    displayShow(comedyShows[Index]);
  }
}

