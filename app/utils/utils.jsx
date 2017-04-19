module.exports = {
    capitalizeFirstLetterEachWord: function (string) {
        return (string
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' '))
    }
}