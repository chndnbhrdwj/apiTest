global.expect = require('chai').expect;
global.request = require('sync-request');
global.users = null;

describe('Users', function() {
    it('should return the users', function() {
        let res = request('GET', 'https://jsonplaceholder.typicode.com/users')
        users = JSON.parse(res.body);
        expect(users).is.not.empty;
    });

    it('Users count should be correct', function() {
        expect(users).to.have.lengthOf(10);
    });

    it('All Users should have street parameter', function() {
        let streets = users.map(user => user.address.street);
        expect(streets).to.have.lengthOf(10);
    });
});