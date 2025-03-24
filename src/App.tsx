import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

type Employee = { id: number; name: string; department: string; salary: number };

export default function App() {
  const [employees] = useState<Employee[]>([
    { id: 1, name: "Alice Chen", department: "Engineering", salary: 95000 },
    { id: 2, name: "Bob Smith", department: "HR", salary: 75000 },
  ]);

  // Salary by department (for charts)
  const deptData = {
    labels: ['Engineering', 'HR'],
    datasets: [{ label: 'Salaries', data: [95000, 75000], backgroundColor: '#3b82f6' }]
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Payroll Dashboard</h1>
      <div style={{ height: '400px', width: '600px' }}>
        <Bar data={deptData} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>${emp.salary.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}