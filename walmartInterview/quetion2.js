function repetedWord(string) {

    var words = string.replace(/[.]/g, '').split(/\s/);

    var repetedMap = [];

    words.forEach(function(w) {

        if (!repetedMap[w]) {

            repetedMap[w] = 0;

        }

        repetedMap[w] += 1;

    });



    return repetedMap;

}



console.log(repetedWord("Fifty years ago Walmart started as one man's dream. Today, Walmart Canada is part of a global community"));

