
const adjectives = ['Iron', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster', 'Challenger'];
const nouns = ['Thresh', 'Lux', 'Heimerdinger', 'Teemo', 'Sona', 'Rengar', 'Garen', 'Urgot', 'Syndra'];

export function getRandomName(){
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}  :`;
}