function analyzeText(text) {
    function wordCount() {
        return text.trim().split(/\s+/).length;
    }

    function charCount() {
        return text.length;
    }

    function hasEmail() {
        return text.includes("@");
    }

    return {
        words: wordCount(),
        characters: charCount(),
        containsEmail: hasEmail()
    };
}

console.log(analyzeText("Hello world contact me@mail.com"));
