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
        paid: True
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

let fortiesComedies;

/*
Use the native filter method to return a new array of only the films from the watchlist
that are streaming on a platform that doesn't require payment.
*/

let freeToStream;

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
*/

let mappedStrings;

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
*/

let mappedObjects;

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