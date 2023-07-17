# Nodejs Authentication
A complete authentication system using node js, express js, MongoDB, and passport.
This app provides login, logout, register, and forget password features.

# Installation
1. Clone the Repository<br>
  <code>git clone https://github.com/saritabagul/nodejs_authentication.git</code>
2. Into the project directory<br>
  <code>cd nodejs_authentication</code>
3. Installing NPM dependencies<br>
  <code>npm i</code>
4. Start your server<br>
   <code>npm start</code>  
5. Server running at:<br>
   <a href="http://localhost:8000/">http://localhost:8000/</a>

# How to use nodemailer to send mail?
In this app, mail sending is used to activate the user account. Here, the google smtp details are used to send the emails. 
<h3>Steps</h3>
<br>
1. create a Gmail account for the app<br>
2. Verify your Gmail account using 2 step verification method provided by Gmail<br>
3. Create an app password<br>
4. Use user as your email without @gmail.com and password as the app password<br>

# Google SignIn or SignUp
To use Google SignIn/SignUp<br>
1. create an account on Google <br>
2. Go to <code>Search google developer console</code><br>
3. Go to google developer console and create a project<br>
4. OAuth consent screen - Enter app info<br>
5. Create Credentials [Please change the credentials for live setup]<br>
   a. Add <strong>Authorized JavaScript origins as</strong><br>
   <code>http://localhost:8000</code><br>
   b. Add  <strong>Authorized redirect URIs</strong><br>
   <code>http://localhost:8000/auth/google/callback</code><br>   
 6. This creates a ClientID, Client secret<br>
 7. Use this information and change the credentials in the code,<br>
    use the callback URL: <code>http://localhost:8000/auth/google/callback</code><br>

 # Tech Stack
1. NodeJS
2. Express
3. MongoDB
4. PassportJS
5. JWT
6. Nodemailer
7. EJS 
   

   







   

