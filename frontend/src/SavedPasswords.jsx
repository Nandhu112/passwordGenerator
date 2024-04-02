const SavedPasswords = ({ savedPasswords }) => {
 

  if (savedPasswords.length === 0) {
    return null; 
  }

  return (
    <div>
      <h2>Saved Passwords</h2>
      <table style={{ margin: 'auto' }}>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Passwords</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center', verticalAlign: 'middle' }} >
          {savedPasswords.map((password) => (
            <tr key={password._id}>
              {/* <td>{password._id}</td> */}
              <td>{password.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedPasswords;
