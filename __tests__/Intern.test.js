const Intern = require('../lib/Intern.js');

test('makes an intern', () => {
  const intern = new Intern('Will','1','gangster@gmail.com', 'Carleton');

  expect(intern.name).toBe('Will');
  expect(intern.id).toBe('1');
  expect(intern.email ).toBe('gangster@gmail.com');
  expect(intern.school).toBe('Carleton');
});