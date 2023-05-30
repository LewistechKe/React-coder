
import './index.css';
import Employee from './components/Employee'
import { useState } from "react";

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  
    return (
      <div className="App">
        {showEmployees ? (
    <>
          <input type="text" 
          onChange={(e) => {
            console.log (e.target.value);
            setRole(e.target.value);
          }} 
          />
          <div className="flex flex-wrap justify-center">
            <Employee name = 'Caleb' role = 'intern' img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg" />
            <Employee  name = 'Abby' role ={role} img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg"/>
            <Employee  name = 'John' img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg"/>
            <Employee name = 'Caleb' role = 'intern' img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg"/>
            <Employee  name = 'Abby' role ={role} img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg"/>
            <Employee  name = 'John' img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg"/>
            <Employee name = 'Caleb' role = 'intern' img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg"/>
            <Employee  name = 'Abby' role ={role} img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg"/>
            <Employee  name = 'John' img = "https://wallpapers.com/images/hd/instagram-profile-pictures-ut4t3clnp7r84i2x.jpg"/>
          </div>
    </>
        ) : (
          <p>You cannot see the employees</p>
        )}
      </div>
    );
}

export default App;
