const Employee = require('../lib/Employee.js');
test('makes an employee', () => {
  const employee = new Employee('Will',1,'gangster@gmail.com');

  expect(employee.name).toBe('Will');
  expect(employee.id).toBe('1');
  expect(employee.email).toBe('gangster@gmail.com');
});