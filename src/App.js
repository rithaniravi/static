import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Header'>
          <h1>facebook</h1>
          <h3 className='head'>Facebook helps you connect and share with the people in your life.</h3>

        
      <div class='container'>
        <input type='text' className='input1'placeholder='Email address or phone number'></input>
        <input type='text'className='input1' placeholder='password'></input>
      <div className='row'>
           <button type='button' id="btn1" class="btn btn-primary text-">Log in</button>
      </div>
      
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Forgotten password?</a>
        </li>
      </ul>

        <hr></hr>
        <button type="button" id="btn2" class="btn btn-success">Create new account</button>
        <h3><span>Create a Page</span> for a celebrity, brand or business.</h3>
      </div>
      
      </div>

     
      
      </div>   
    
    
  );
}

export default App;
