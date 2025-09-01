const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Feed Report",
        "description": "Compile weekly feed usage and stock report",
        "date": "2025-09-01",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Update Stock",
        "description": "Update feed stock data in the system",
        "date": "2025-09-02",
        "category": "Inventory",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Check Poultry Health",
        "description": "Monitor poultry condition and record observations",
        "date": "2025-09-01",
        "category": "Monitoring",
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false
      },
      {
        "title": "Daily Cleaning",
        "description": "Ensure poultry farm cleaning is completed",
        "date": "2025-09-01",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Record Egg Production",
        "description": "Update egg production details for the batch",
        "date": "2025-09-01",
        "category": "Production",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Separate Damaged Eggs",
        "description": "Check and log damaged eggs separately",
        "date": "2025-09-02",
        "category": "Quality Control",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Payroll",
        "description": "Enter salary details for workers",
        "date": "2025-09-01",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Check Attendance",
        "description": "Verify attendance records for the current shift",
        "date": "2025-09-02",
        "category": "HR",
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Feed Distribution",
        "description": "Distribute feed to all poultry batches",
        "date": "2025-09-01",
        "category": "Feeding",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Check Water Supply",
        "description": "Ensure clean water is available for poultry",
        "date": "2025-09-02",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      }
    ]
  }
]

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]
 export const setLocalStorage =()=>{
 localStorage.setItem('employess', JSON.stringify(employees));
 localStorage.setItem('admin', JSON.stringify(admin));
 }

  export const getLocalStorage =()=>{
   const employees = JSON.parse(localStorage.getItem('employess'));
   const admin = JSON.parse(localStorage.getItem('admin'));
   console.log(employees,admin);
    
 }