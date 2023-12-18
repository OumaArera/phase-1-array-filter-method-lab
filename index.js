// Code your solution here
const findMatching = (driversName, string) => {
    let matchingDriver = driversName.filter(driversName => driversName.toLowerCase() === string.toLowerCase());
    return matchingDriver;
}

const fuzzyMatch = (driversName, string) => {
    let nameStartWith = driversName.filter(driversName => driversName.toLowerCase().startsWith(string.toLowerCase()));
    return nameStartWith;
}

const matchName = (driversName, string) => {
    let matchingDriver = driversName.filter(driversName => driversName.name.toLowerCase() === string.toLowerCase());
    return matchingDriver;
}