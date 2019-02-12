const searchDatabase = require('./script');

databaseMock = [
	'harry.com',
	'snape.com',
	'ron.com',
	'hermione.com',
	'dog.com',
	'dogsLmao.com'
]

describe('searchDatabase', () => {
	it('is a hello test', () => {
		expect('hello').toBe('hello');
	})

	it('is searching database', () => {
		expect(searchDatabase('test', databaseMock)).toEqual([]);
		expect(searchDatabase('dog', databaseMock)).toEqual(['dog.com', 'dogsLmao.com']);
	})

	it('does not return more than 3 matches', () => {
		expect(searchDatabase('.com', databaseMock).length).toEqual(3);
	})

	it('works with undefined and null input', () => {
		expect(searchDatabase(undefined, databaseMock)).toEqual([]);
		expect(searchDatabase(null, databaseMock)).toEqual([]);
	})
})

