function findFirst(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return array[i];  
    }
  }
  return undefined;
}
console.log(findFirst([1, 2, 3, 4], num => num % 2 === 0)); 
console.log(findFirst([1, 2, 3, 4], num => num === 3));


function frankenSplice(array, array1, index) {
let result = [...array1];
result.splice(index, 0, ...array) ;
return result;
};
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([2, 3, 6], [1, 3, 7], 2));

function pyramid(symbol, number, boo){
  let rows = [];
  for(let i =1; i<= number; i++){
    const space = ' '.repeat(number - i);
    const char = symbol.repeat(2 * i - 1);
    rows.push(space + char);
  };
  if(boo) rows.reverse();
  return '\n' + rows.join('\n') + '\n';
}
console.log(pyramid('*', 9, true));





function getAverage(array){
  let sum = 0;
  for(let i = 0; i< array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

function getGrade(scores){
if(scores === 100) {
  return "A+";
}else if(scores >= 90) {
  return "A";
} else if(scores >= 80) {
  return "B";
} else if(scores >= 70) {
  return "C";
} else if(scores >= 60) {
  return "D";
} else {
  return "F";
}
}
function hasPassingGrade(scores){
  if(getGrade(scores) !== "F" ){
    return true;
  } else{
    return false;
  }
}
function studentMsg(array, scores){
  if(hasPassingGrade(scores)){
return `Class average: ${getAverage(array)}. Your grade: ${getGrade(scores)}. You passed the course.`
} else{
  return `Class average: ${getAverage(array)}. Your grade: ${getGrade(scores)}. You failed the course.` 
}
}
console.log(studentMsg([90, 80, 70], 85));
console.log(getGrade(93));
console.log(getAverage([20,90,78]));
console.log(hasPassingGrade(90));





const inventory = [];

function findProductIndex(pname){
  const lower = pname.toLowerCase();

  for(let i = 0; i< inventory.length; i++){
    if(inventory[i].name.toLowerCase() === lower){
      return i;
    }
  } return -1;
}
function addProduct({name, quantity}){
  const lowern = name.toLowerCase();
  const index = findProductIndex(lowern);
if(index !== -1){
  inventory[index].quantity += quantity;
  console.log(`${inventory[index].name} quantity updated`)
} else {
  inventory.push({
    name: lowern, 
    quantity: quantity});
  console.log(`${lowern} added to inventory`);
};
};

function removeProduct(name, quantity){
  const lowern = name.toLowerCase();
  let index = -1;
  for(let i = 0; i< inventory.length;i ++) {
    if(inventory[i].name.toLowerCase() === lowern) {
      index = i;
      break;
    } 
  }
  if(index === -1) {
    console.log(`${lowern} not found`);
    return;
  } 
  if(quantity > inventory[index].quantity){
    console.log(`Not enough ${inventory[index].name} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }
  
    inventory[index].quantity -= quantity;
    console.log(`Remaining ${inventory[index].name} pieces: ${inventory[index].quantity}`);
  
  if(inventory[index].quantity === 0){
    inventory.splice(index, 1);
  }
}
console.log(inventory);
addProduct({name: 'Apple', quantity: 10});
console.log(findProductIndex('Banana'));
removeProduct('Apple', 5);



function uniteUnique(...arrays) {
   const seen = new Set();
   const result = [];
  for(const array of arrays){
    for (const value of array){
      if(!seen.has(value)){
        seen.add(value)
        result.push(value);
      }
    }
  } return result;
}
console.log(uniteUnique([1,3,5], [1,2,4], [5,4,6]));

function generatePassword(length){
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let password = "";
for(let i =0; i< length; i++){
  const randomIndex = Math.floor(Math.random() * chars.length);
   password += chars[randomIndex]
   } return password;
}
const password = generatePassword(8);

console.log(`Generated password: ${password}`);

function sumAll(array){
  let min = Math.min(array[0], array[1]);
  let max = Math.max(array[0], array[1]);
  let sum = 0;
for(let i = min; i <= max; i++) {
  sum += i;
} return sum;
}
console.log(sumAll([1, 4]));

function pairElement(str){
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  let result = [];
  for(let i=0; i< str.length;i++){
  let base = str[i];
  result.push([base, pairs[base]])
  
  }return result;
}
console.log(pairElement("ATG"));

function convertHTML (str) {
  return str
   .replace(/&/g , "&amp;")
   .replace(/</g , "&lt;")
  .replace(/>/g , "&gt;")
  .replace(/"/g , "&quot;")
  .replace(/'/g , "&apos;");
  }
  console.log(convertHTML("Dol & Gabb"));

  const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];
function flattenPlaylists(playlists){
 if(!Array.isArray(playlists))
  return  [];

const result = [];
for(let playlistIndex = 0; playlistIndex < playlists.length; playlistIndex++){
  const playlist = playlists[playlistIndex];

for(let trackIndex= 0; trackIndex < playlist.length; trackIndex++){
  const track = playlist[trackIndex];
 result.push({
  ...track,
  source: [playlistIndex, trackIndex]
})
} 
} return result;
}

function scoreTracks(tracks){
const result = [];
for(let i = 0; i< tracks.length; i++){
  const track = tracks[i];

result.push({
  ...track,
  score: track.votes * 10 - Math.abs(track.bpm - 120)

});
} return result;
}

function dedupeTracks(tracks){
  let result = [];

  for(let i=0; i< tracks.length; i++){
    const track = tracks[i];
let isDupli = false;
 
  for(let j = 0; j< result.length;j++){
    if(result[j].trackId === track.trackId){
      isDupli = true;
    }
  }
  if(!isDupli){
    result.push(track);
  }

  } return result;
}
function enforceArtistQuota(tracks, max){
const artistCount ={};
let result = [];
for(let i =0; i<tracks.length; i++){
const artist = tracks[i].artist;
  
  if(!artistCount[artist]){
artistCount[artist]= 0;
  }
  if(artistCount[artist] < max){
    result.push(tracks[i]);
    artistCount[artist]++;

  } return result;
}
}

function buildSchedule(tracks){
  let result = [];
  for (let i=0; i < tracks.length;i++){
result.push({
  slot: i +1,
  trackId:tracks[i].trackId
});
    }return result;
  }


function remixPlaylist(arr, max){
  const flatt = flattenPlaylists(arr);
  const score = scoreTracks(flatt);
  const dedupe = dedupeTracks(score);
  const enforce = enforceArtistQuota(dedupe, max);
  const schedule = buildSchedule(enforce);
  return schedule;
}

console.log(flattenPlaylists(playlists));
console.log(dedupeTracks(playlists));
remixPlaylist(playlists, 2)

function sumFibs(num){
  if(num < 0) 
  return 0;

  let sum = 0;
  let prev =0;
  let curr = 1;
  while(curr <=num){
    if(curr % 2 !== 0){
      sum+= curr;
    }
    let next = prev + curr;
    prev = curr;
    curr = next;
  } 
  return sum;
}
console.log(sumFibs(4));