# food-plan-server
Food Plan Server
# food-plan-server
**Base URL**

http://localhost:3000


**MeCook Planer**
----
----
***Register***
----
  Register User.

* **URL**

  /user/register

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**
  ````
  email: STRING
  password: STRING

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
    "id": 2,
    "email": "mail1@mail.com"
    }
 
* **Error Response:**

  * **Code:** 400 <br />
  **Content:** 
  {
    "message": "Bad Request",
    "errors": [
        "Please input email",
        "Min. 6 characters"
    ]
  }

  OR

  * **Code:** 500 <br />


* **Sample Call:**

  ```javascript
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/register",
      data: { email, password }
    })
  ```

----
***SignIn***
----
  SignIn User.

* **URL**

  /user/login

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**
  ````
  email: STRING
  password: STRING

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTgzNDgyNjk0fQ.4-3CdFkScaEVbSnv3zWTNPcAW43hiODbJS8p0P9FpBQ"
 
* **Error Response:**

  * **Code:** 400 <br />
  **Content:** 
  {
    "message": "Bad Request",
    "errors": [
        "Invalid email or password"
    ]
  }

  OR

  * **Code:** 500 <br />


* **Sample Call:**

  ```javascript
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/login",
      data: { email, password }
    })
  ```

----
***SignIn***
----
  SignIn User.

* **URL**

  /user/login

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**
  ````
  email: STRING

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTgzNDgyNjk0fQ.4-3CdFkScaEVbSnv3zWTNPcAW43hiODbJS8p0P9FpBQ"
 
* **Error Response:**

  * **Code:** 400 <br />
  **Content:** 
  {
    "message": "Bad Request",
    "errors": [
        "Invalid email or password"
    ]
  }

  OR

  * **Code:** 500 <br />


* **Sample Call:**

  ```javascript
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/google",
      data: { email, password }
    })
  ```

----