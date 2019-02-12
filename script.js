const database = [
	'cats.com',
	'dogs.com',
	'fish.com',
	'catClaws.com',
	'catBeans.com',
	'catsLmao.com'
];

const searchDatabase = (searchInput, db) => {
	const matches = db.filter(website => {
		return website.includes(searchInput);
	});
	return matches.length > 3 ? matches.slice(0, 3) : matches;
}

module.exports = searchDatabase;