function lostArtifacts(text) {

    const regEx = /([*^]+)([a-zA-Z\s]{6,})([*^]+)([^a-zA-Z0-9]+)(\+\+\+|[^a-zA-Z0-9])?(\d{1,3}(?:\.\d+)?)[,\s]+(-?\d{1,3}(?:\.\d+)?)(\+\+\+|[^a-zA-Z0-9])?/g;

    let match;
    let results = [];


    while ((match = regEx.exec(text)) !== null) {
        let artifactName = match[2].trim();
        let coordinates = `${match[6]},${match[7]}`;


        if (artifactName.length >= 6 && /^[a-zA-Z\s]+$/.test(artifactName) &&  /^-?\d{1,3}(?:\.\d+)?,[\s-]?\d{1,3}(?:\.\d+)?$/.test(coordinates)) {

            results.push(`Found ${artifactName} at coordinates ${coordinates}.`);
        }
    }


    if (results.length > 0) {
        results.forEach(result => console.log(result));
    } else {
        console.log("No valid artifacts found.");
    }
} lostArtifacts(['*Idol*++48.858,2.294++^Relic^48.853,-2.3498+*&Mysterious Relic*+++120,200+++'])