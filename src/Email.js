global.emails = null;
describe('Users', function() {
    it('Email count should be correct', function() {
        let res = request('GET', 'https://jsonplaceholder.typicode.com/users')
        users = JSON.parse(res.body);

        emails = users.map(user => user.email);
        expect(emails).to.have.lengthOf(10);

    });

    it('Emails should contain email', function() {
        expect(emails).to.include('Rey.Padberg@karina.biz');
    });
});