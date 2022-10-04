const Engineer = require('../lib/Engineer.js');

test('makes an engineer', () => {
  const engineer = new Engineer('Will',1,'gangster@gmail.com', 'willycoxy');

  expect(engineer.name).toBe('Will');
  expect(engineer.id).toBe('1');
  expect(engineer.email ).toBe('gangster@gmail.com');
  expect(engineer.github ).toBe('willycoxy');
});