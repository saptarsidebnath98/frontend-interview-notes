# JWT (JSON Web Token)

## What is JWT?

JWT stands for **JSON Web Token**.

JWT is a compact and secure way to transmit information between a client and a server. It is commonly used for **Authentication** and **Authorization**.

## Why JWT?

Without JWT, a user would need to send their username and password with every request.

With JWT:

1. User logs in once.
2. Backend verifies credentials.
3. Backend generates a JWT token.
4. Frontend stores the token.
5. Future requests use the token instead of username and password.

## JWT Flow

```text
Login
↓
Backend verifies credentials
↓
Backend creates JWT
↓
Frontend stores JWT in localStorage
↓
Frontend sends JWT with future requests
↓
Backend verifies JWT
↓
User is authenticated
```

## JWT Structure

A JWT consists of three parts:

```text
Header.Payload.Signature
```

* **Header**: Contains token type and algorithm.
* **Payload**: Contains user information.
* **Signature**: Created using a secret key to prevent tampering.

## Important Points

* JWT is not used to hide passwords.
* Passwords should be hashed before storing in the database.
* JWT is used to identify authenticated users after login.
* The backend signs and verifies the token using a secret key.

## Common Methods

```js
jwt.sign(payload, SECRET_KEY);
jwt.verify(token, SECRET_KEY);
```
