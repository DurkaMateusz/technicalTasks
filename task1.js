const employee = [
    {
      personalInfo: [
        { firstName: 'John' },
        { lastName: 'Doe' },
        { age: 30 },
        { address: [
          { city: 'Anytown' },
          { state: 'NY' },
          { postalCode: '12345' }
        ]}
      ]
    },
    {
      employmentDetails: [
        { position: 'Software Engineer' },
        { department: 'Engineering' },
        { startDate: '2022-01-01' },
        { endDate: null },
        { manager: [
          { firstName: 'Alice' },
          { lastName: 'Smith' },
          { email: 'alice@example.com' }
        ]}
      ]
    }
  ];
  
  function getEmployeeInfo(employee, key) {
    
    function searchKey(array, key) {
      for (let item of array) {
        if (item[key] !== undefined) {
          return item[key];
        }
        
        for (let value of Object.values(item)) {
          if (Array.isArray(value)) {
            let result = searchKey(value, key);
            if (result !== "Klucz nie istnieje") {
              return result;
            }
          }
        }
      }
      return "Klucz nie istnieje";
    }
  
    return searchKey(employee, key);
  }