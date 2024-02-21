const employee = [
  { id: '1', name: 'Mohamed Sayed' },
  { id: '2', name: 'osama Sayed' },

];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  console.log('Deleting employee with ID:', id); // Log the ID to the terminal

  const index = employee.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employee.splice(index, 1);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;
  if (!id || !name) {
    res.status(400).json({ message: 'ID and name are required' });
    return;
  }

  const existingEmployee = employee.find(emp => emp.id === id);
  if (existingEmployee) {
    res.status(409).json({ message: 'Employee ID already exists' });
    return;
  }

  employee.push({ id, name });
  res.status(201).json({ message: 'Employee created successfully' });
};