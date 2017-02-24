
// (function(module) {

$(document).ready(() => {
    addButtonListener();
});

var hexagrams = {
  "111111": {
    title: "1. Ch'ien / The Creative",
    text: "The creative works sublime success, Furthering through perseverance."
  },
  "000000": {
    title: "2. K'un / The Receptive",
    text: "The receptive brings about sublime success, Furthering through the perseverance of a mare. If the superior person undertakes something and tries to lead, they go astray; But if they follow, they find guidance. It is favorable to find friends in the west and south, To forego friends in the east and north. Quiet perseverance brings good fortune."
  },
  "100010": {
    title: "3. Chun / Difficulty at the Beginning",
    text: "Difficulty at the beginning works supreme success, Furthering through perseverance. Nothing should be undertaken. It furthers one to appoint helpers."
  },
  "010001": {
    title: "4. Mêng / Youthful Folly",
    text: "Youthful folly has success. It is not I who seek the young fool; The young fool seeks me. At the first oracle I inform them. If they ask two or three times, it is importunity. If they importune, I give them no information. Perseverance furthers."
  },
  "111010": {
    title: "5. Hsü / Waiting (Nourishment)",
    text: "Waiting. If you are sincere, You have light and success. Perseverance brings good fortune. It furthers one to cross the great water."
  },
  "010111": {
    title: "6. Sung / Conflict",
    text: "Conflict. You are sincere And are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune. It furthers one to see the great person. It does not further one to cross the great water."
  },
  "010000": {
    title: "7. Shih / The Army",
    text: "The Army. The army needs perseverance And a strong person. Good fortune without blame."
  },
  "000010": {
    title: "8. Pi / Holding Together [Union]",
    text: "Holding together brings great fortune. Inquire of the oracle once again Whether you possess sublimity, constancy, and perseverance; Then there is no blame. Those who are uncertain gradually join. Whoever comes too late Meets with misfortune."
  },
  "111011": {
    title: "9. Hsiao Ch'u / The Taming Power of the Small",
    text: "The taming power of the small Has success. Dense clouds, no rain from our western region."
  },
  "110111": {
    title: "10. Lü / Treading [Conduct]",
    text: "Treading. Treading upon the tail of the tiger. It does not bite the person. Success."
  },
  "111000": {
    title: "11. T'ai / Peace",
    text: "Peace. The small departs, The great approaches. Good fortune. Success."
  },
  "000111": {
    title: "12. P'i / Standstill [Stagnation]",
    text: "Standstill. Evil people do not further The perseverance of the superior person. The great departs; the small approaches."
  },
  "101111": {
    title: "13. T'ung Jên / Fellowship with People",
    text: "Fellowship with people in the open. Success. It furthers one to cross the great water. The perseverance of the superior person furthers."
  },
  "111101": {
    title: "14. Ta Yu / Possession in Great Measure",
    text: "Possession in great measure. Supreme success."
  },
  "001000": {
    title: "15. Ch'ien / Modesty",
    text: "Modesty creates success. The superior person carries things through."
  },
  "000100": {
    title: "16. Yü / Enthusiasm",
    text: "Enthusiasm. It furthers one to install helpers And to set armies marching."
  },
  "100110": {
    title: "17. Sui / Following",
    text: "Following has supreme success. Perseverance furthers. No blame."
  },
  "011001": {
    title: "18. Ku / Work on What Has Been Spoiled [Decay]",
    text: "Work on what has been spoiled Has supreme success. It furthers one to cross the great water. Before the starting point, three days. After the starting point, three days."
  },
  "110000": {
    title: "19. Lin / Approach",
    text: "Approach has supreme success. Perseverance furthers. When the eighth month comes, There will be misfortune."
  },
  "000011": {
    title: "20. Kuan / Contemplation (View)",
    text: "Contemplation. The ablution has been made, But not yet the offering. Full of trust they look up to the great one."
  },
  "100101": {
    title: "21. Shih Ho / Biting Through",
    text: "Biting through has success. It is favorable to let justice be administered."
  },
  "101001": {
    title: "22. Pi / Grace",
    text: "Grace has success. In small matters It is favorable to undertake something."
  },
  "000001": {
    title: "23. Po / Splitting Apart",
    text: "Splitting apart. It does not further one To go anywhere."
  },
  "100000": {
    title: "24. Fu / Return (The Turning Point)",
    text: "Return. Success. Going out and coming in without error. Friends come without blame. To and fro goes the way. On the seventh day comes return. It furthers one to have somewhere to go."
  },
  "100111": {
    title: "25. Wu Wang / Innocence (The Unexpected)",
    text: "Innocence. Supreme success. Perseverance furthers. If someone is not as they should be, They have misfortune, And it does not further them To undertake anything."
  },
  "111001": {
    title: "26. Ta Ch'u / The Taming Power of the Great",
    text: "The taming power of the great. Perseverance furthers. Not eating at home brings good fortune. It furthers one to cross the great water."
  },
  "100001": {
    title: "27. I / The Corners of the Mouth (Providing Nourishment)",
    text: "The corners of the mouth. Perseverance brings good fortune. Pay heed to the providing of nourishment And to what a person seeks To fill their own mouth with."
  },
  "011110": {
    title: "28. Ta Kuo / Preponderance of the Great",
    text: "Preponderance of the great. The ridgepole sags to the breaking point. It furthers one to have somewhere to go. Success."
  },
  "010010": {
    title: "29. K'an / The Abysmal (Water)",
    text: "The Abysmal repeated. If you are sincere, you have success in your heart, And whatever you do succeeds."
  },
  "101101": {
    title: "30. Li / The Clinging, Fire",
    text: "The clinging. Perseverance furthers. It brings success. Care of the cow brings good fortune."
  },
  "001110": {
    title: "31. Hsien / Influence (Wooing)",
    text: "Influence. Success. Perseverance furthers. To wed a young person brings good fortune."
  },
  "011100": {
    title: "32. Hêng / Duration",
    text: "Duration. Success. No blame. Perseverance furthers. It furthers one to have somewhere to go."
  },
  "001111": {
    title: "33. Tun / Retreat",
    text: "Retreat. Success. In what is small, perseverance furthers."
  },
  "111100": {
    title: "34.Ta Chuang / The Power of the Great",
    text: "The power of the great. Perseverance furthers."
  },
  "000101": {
    title: "35. Chin / Progress",
    text: "Progress. The powerful public servant Is honored with horses in large numbers. In a single day they are granted audience three times."
  },
  "101000": {
    title: "36. Ming I / Darkening of the Light",
    text: "Darkening of the light. In adversity It furthers one to be persevering."
  },
  "101011": {
    title: "37. Chia Jên / The Family [The Clan]",
    text: "The family. The perseverance of the woman furthers."
  },
  "110101": {
    title: "38. K'uei / Opposition",
    text: "Opposition. In small matters, good fortune."
  },
  "001010": {
    title: "39. Chien / Obstruction",
    text: "Obstruction. The southwest furthers. The northeast does not further. It furthers one to see the great leader. Perseverance brings good fortune."
  },
  "010100": {
    title: "40. Hsieh / Deliverance",
    text: "Deliverance. The southwest furthers. If there is no longer anything where one has to go, Return brings good fortune. If there is still something where one has to go, Hastening brings good fortune."
  },
  "110001": {
    title: "41. Sun / Decrease",
    text: "Decrease combined with sincerity Brings about supreme good fortune Without blame. One may be persevering in this. It furthers one to undertake something. How is this to be carried out? One may use two small bowls for the sacrifice."
  },
  "100011": {
    title: "42. I / Increase",
    text: "Increase. It furthers one To undertake something. It furthers one to cross the great water."
  },
  "111110": {
    title: "43. Kuai / Break-through (Resoluteness)",
    text: "Break-through. One must resolutely make the matter known At the court of the ruler. It must be announced truthfully. Danger. It is necessary to notify one's own city. It does not further to resort to arms. It furthers one to undertake something."
  },
  "011111": {
    title: "44. Kou / Coming to Meet",
    text: "Coming to meet. The maiden is powerful. One should not marry such a maiden.  <h5>*There's no good way to rewrite this one...</h5>"
  },
  "000110": {
    title: "45. Ts'ui / Gathering Together [Massing]",
    text: "Gathering together. Success. The ruler approaches the temple. It furthers one to see the great leader. This brings success. Perseverance furthers. To bring great offerings creates good fortune. It furthers one to undertake something."
  },
  "011000": {
    title: "46. Shêng / Pushing Upward",
    text: "Pushing upward has supreme success. One must see the great leader. Fear not. Departure toward the south Brings good fortune."
  },
  "010110": {
    title: "47. K'un / Oppression (Exhaustion)",
    text: "Oppression. Success. Perseverance. The great person brings about good fortune. No blame. .When one has something to say, It is not believed."
  },
  "011010": {
    title: "48. Ching / The Well",
    text: "The well. The town may be changed. But the well cannot be changed. It neither decreases nor increase. They come and go and draw from the well. If one gets down almost to the water And the rope does not go all the way, Or the jug breaks, it brings misfortune."
  },
  "101110": {
    title: "49. Ko / Revolution (Molting)",
    text: "Revolution. On your own day You are believed. Supreme success, Furthering through perseverance. Remorse disappears."
  },
  "011101": {
    title: "50. Ting / The Caldron",
    text: "The caldron. Supreme good fortune. Success."
  },
  "100100": {
    title: "51. Chên / The Arousing (Shock, Thunder)",
    text: "Shock brings success. Shock comes--oh, oh! Laughing words--ha, ha! The shock terrifies for a hundred miles, And he does not let fall the sacrificial spoon and chalice."
  },
  "001001": {
    title: "52. Kên / Keeping Still, Mountain",
    text: "Keeping still. Keeping one's back still So that one no longer feels one's body. One goes into one's courtyard And does not see one's people. No blame."
  },
  "001011": {
    title: "53. Chien / Development (Gradual Progress)",
    text: "Development. The young one Is given in marriage. Good fortune. Perseverance furthers."
  },
  "110100": {
    title: "54. Kuei Mei / The Marrying Maiden",
    text: "The marrying maiden. Undertakings bring misfortune. Nothing that would further."
  },
  "101100": {
    title: "55. Fêng / Abundance [Fullness]",
    text: "Abundance has success. The ruler attains abundance. Be not sad. Be like the sun at midday."
  },
  "001101": {
    title: "56. Lü / The Wanderer",
    text: "The wanderer. Success through smallness. Perseverance brings good fortune To the wanderer."
  },
  "011011": {
    title: "57. Sun / The Gentle (The Penetrating, Wind)",
    text: "The gentle. Success through what is small. It furthers one to have somewhere to go. It furthers one to see the great leader."
  },
  "110110": {
    title: "58. Tui / The Joyous, Lake",
    text: "The joyous. Success. Perseverance is favorable."
  },
  "010011": {
    title: "59. Huan / Dispersion [Dissolution]",
    text: "Dispersion. Success. The ruler approaches the temple. It furthers one to cross the great water. Perseverance furthers."
  },
  "110010": {
    title: "60. Chieh / Limitation",
    text: "Limitation. Success. Galling limitation must not be persevered in."
  },
  "110011": {
    title: "61. Chung Fu / Inner Truth",
    text: "Inner truth. Pigs and fishes. Good fortune. It furthers one to cross the great water. Perseverance furthers."
  },
  "001100": {
    title: "62. Hsiao Kuo / Preponderance of the Small",
    text: "Preponderance of the small. Success. Perseverance furthers. Small things may be done; great things should not be done. The flying bird brings the message: It is not well to strive upward, It is well to remain below. Great good fortune."
  },
  "101010": {
    title: "63. Chi Chi / After Completion",
    text: "After completion. Success in small matters. Perseverance furthers. At the beginning good fortune, At the end disorder."
  },
  "010101": {
    title: "64. Wei Chi / Before Completion",
    text: "Before completion. Success. But if the little fox, after nearly completing the crossing, Gets his tail in the water, There is nothing that would further."
  }
}

function addButtonListener() {
    $('#cast-button').on('click', pickHexagram);
}



function pickHexagram() {
    console.log('picking started dfsdf');
    // let hexChoice = (parseFloat(Math.random()) * 64).toFixed(0);
    let binaryArray = [];
    for (var i = 1; i < 7; i++) {
      let binaryRandomValue = Math.random().toFixed(0);
      binaryArray.push(binaryRandomValue)
    }
    let binaryString = binaryArray.join('')
    console.log(binaryString);
    return getHex(binaryString);
}

var hexCounter;

function getHex(value) {
    // for (var num in hexagrams) {
    //     hexCounter++;
    //     // skip loop if the property is from prototype
    //     if (!hexagrams.hasOwnProperty(num)) continue;
    //     if (hexCounter === value) {
    //
    //         var obj = validation_messages[num];
    //         for (var prop in obj) {
    //             // skip loop if the property is from prototype
    //             if (!obj.hasOwnProperty(prop)) continue;
    //
    //             // your code
    //             console.log(prop + " = " + obj[prop]);
    //         }
    //     }
    //
    // }
    $('#hexHeader').text(hexagrams[value].title);
    $('#hexText').text(hexagrams[value].text);
}






// init();
// })(window);
