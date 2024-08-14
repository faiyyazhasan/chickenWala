import React from 'react'

export default function Form() {
  return (
    <div class="container mt-3 d-flex flex-column p-5" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <h2>Sign Up</h2>
    <form action="/action_page.php" className='d-flex'>
    
    <div>
        <img src='https://img.freepik.com/premium-vector/registration-website-concept-entering-login-password-webpage-enter-profile-account_118813-27996.jpg?ga=GA1.1.1784806605.1718554634&semt=ais_hybrid'
        style={{height:"300px",width:"90%", borderRadius:"0"}}/>
    </div>
    <div>

      <div class="mb-3 mt-3">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
      </div>
      <div class="mb-3">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"/> Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
  </div>
  
  )
}
