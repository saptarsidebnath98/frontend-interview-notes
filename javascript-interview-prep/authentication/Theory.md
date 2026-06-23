# Authentication

## Authentication vs Authorization

Authentication:
Verifies who the User is.

Authorization:
Determines what the User can access.

### Example
Login -> Authentication
Access to own Jobs -> Authorization

---

## Password Hashing
```
Package:
bcrypt

Purpose:
store password securely.

Methods:
bcrypt.hash()
bcrypt.compare()
```
---

## JWT
```
Package:
jsonwebtoken

Purpose:
Identify User for future requests.

Methods:
jwt.sign()
jwt.verify()

Payload:
{
    userId: 1
}
```
---

## Login Flow
```
User Login
↓
bcrypt.compare()
↓
jwt.sign()
↓
accessToken
↓
localStorage
```
---

## Protected Route Flow
```
Frontend
↓
Authorization: Bearer token

Backend
↓
jwt.verify()

↓
userId

↓
fetch User's Jobs
```