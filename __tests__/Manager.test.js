const Manager = require('../lib/Manager.js');

test('make a manager', () => {
    const manager = new Manager('Will','1','gangster@gmail.com', '42');
  
    expect(manager.name).toBe('Will');
    expect(manager.id).toBe('1');
    expect(manager.email ).toBe('gangster@gmail.com');
    expect(manager.officeNumber).toBe('42');
  });