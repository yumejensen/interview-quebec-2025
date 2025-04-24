const watchList = [
  {
    title: 'Come and See',
    director: 'Elem Klimov',
    year: 1985,
    genreTags: ['Drama', 'World War 2'],
    streaming: [
      {
        platform: 'Criterion Channel',
        paid: true,
      }
    ]
  },
  {
    title: 'His Girl Friday',
    director: 'Howard Hawks',
    year: 1940,
    genreTags: ['Comedy'],
    streaming: [
      {
        platform: 'Tubi',
        paid: false,
      },
      {
        platform: 'Max',
        paid: true
      }
    ]
  },
  {
    title: 'Bringing Up Baby',
    director: 'Howard Hawks',
    year: 1938,
    genreTags: ['Comedy'],
    streaming: [
      {
        platform: 'Tubi',
        paid: false
      },
      {
        platform: 'Criterion Channel',
        paid: true
      }
    ]
  },
  {
    title: 'Shoah',
    director: 'Claude Lanzmann',
    year: 1985,
    genreTags: ['Documentary', 'World War 2'],
    streaming: [
      {
        platform: 'Max',
        paid: true
      },
      {
        platform: 'Mubi',
        paid: true
      }
    ]
  }
];

/*
Use the native filter method to return a new array of only the comedy films made in
the 1940s.
*/
/*
I: An array of movie objects
O: A new array of movie objects with genreTag comedy and year between 1940-1949
   *genreTags is an array of strings 
*/

let fortiesComedies = function(array){
  return array.filter((current) => {
    // year is 1940-49 + "Comedy" is in tags - includes method
    return current.year >= 1940 && current.year <= 1949 && current.genreTags.includes("Comedy");
  })
};

//console.log(fortiesComedies(watchList));

/*
Use the native filter method to return a new array of only the films from the watchlist
that are streaming on a platform that doesn't require payment.
*/
/*
I: An array of movie objects
O: Movie objects that are on a free platform
   streaming key has an array of streaming platform objects
   we want paid: false
*/
/*
Filter is a true false method
New array returns an array of true values
*/
let freeToStream = function(array){
  // filter method
  return array.filter((current) => {
    //current streaming array has object with paid: false
    // for loop for streaming array
    for (let i = 0; i < current.streaming.length; i++){
      // paid is false
      if (current.streaming[i].paid === false){
        return true;
      }
    }
  })
};

//console.log(freeToStream(watchList));


/*
Use the native map method to return a new array of strings of the film's title and the first
platform it is available to stream.

// example output
 [ 
  "Come and See - Available to stream on Criterion Channel",
  "His Girl Friday - Available to stream on Tubi",
  "Bringing Up Baby - Available to stream on Tubi",
  "Shoah - Available to stream on Max"
 ]

 I: An array of movie objects
 O: An array of strings with every movie's "<title> - Available to stream on <streaming platform>"
*/

let mappedStrings = function(array){
  return array.map((current) => {
    // variables for title and streaming platform
    let movieTitle = current.title;
    let streamPlatform = current.streaming[0].platform;
    return `${movieTitle} - Available to stream on ${streamPlatform}`;
  })

};

//console.log(mappedStrings(watchList));


/*
Use the native map method to return a new array of objects. Each object should have a key of the
film's streaming platform, and the value of "free" if the value at the platform's paid property is
false and "paid" if the value a the property is true.

// example ouutput
[
  {
    'Criterion Channel': 'paid'
  },
  {
    'Tubi': 'free',
    'Max': 'paid
  },
  {
    'Tubi': 'free',
    'Criterion Channel': 'paid'
  },
  {
    'Max': 'paid',
    'Mubi': 'paid'
  }
]

paid: false - > "free"
paid: true -> "paid"
*/

let mappedObjects = function(array){
  //return an array of objects
  return array.map((current) => {
    // holder object
    let streamingObj = {};
    // for loop over streaming platforms IN current
    for (let i = 0; i < current.streaming.length; i++){
      // key is platform name, value is paid/free
      // variables for key (platform name)
      let streamKey = current.streaming[i].platform;
      // variable for paid or free - if statement
      let streamValue;
      if (current.streaming[i].paid === true){
        streamValue = "paid"
      } else {
        streamValue = "free"
      }

      // object[key] = value
      streamingObj[streamKey] = streamValue;
    }
    return streamingObj;
  })
  
};

console.log(mappedObjects(watchList));

/*
Use the native reduce method to return an array of subarrays. Each subarray should contain the movie's title, 
year, and the last genreTag in its genreTags array.

// example output
[
  ['Come and See', 1985, 'World War 2' ],
  ['His Girl Friday', 1940, 'Comedy' ],
  ['Bringing Up Baby', 1938, 'Comedy' ],
  ['Shoah', 1985, 'World War 2']
]
*/

let subArrays;