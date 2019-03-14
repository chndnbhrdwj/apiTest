describe('Another Users Test', function() {
    it('should return the users', function() {
        let res = request('GET', 'https://reqres.in/api/users?page=2')
        users = JSON.parse(res.getBody('utf8')).data;
        expect(users).is.not.empty;
    });
    it('Users count should be correct', function() {
        expect(users).to.have.lengthOf(3);
    });

    it('All Users should have street parameter', function() {
        let firstNames = users.map(user => user.first_name);
        expect(firstNames).to.have.lengthOf(3);
        expect(firstNames).to.include('Charles');

    });
});