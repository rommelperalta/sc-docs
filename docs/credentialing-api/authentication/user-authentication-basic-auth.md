---
sidebar_position: 3
---

# User Authentication with Basic Auth
This section is for user authentication using Basic Auth.

## Endpoint

**Base URL:** `https://api.streamlineverify.net`  
**URI:** `/login`  
**Method:** `POST`  

## Request Headers

|Header  |Value  |
|---|---|
|**Authorization**  |Basic am9obi5zbWl0aDpQQVNTV09SRCBIRVJF  |
|**Content-Type**  |application/json  |
|**x-api-key**   |b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH   |
 

:::note
- This will override the request body **[Authentication](./user-authentication.md#request-body)**.
- Learn more about **[Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)** for Authorization.
- Please contact **support@streamlineverify.com** for the **`x-api-key`**.
:::

## Request Body

### curl
```bash
curl --location --request GET 'https://api.streamlineverify.net/login' \
--header 'x-api-key: b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH' \
--header 'Authorization: Basic am9obi5zbWl0aDpQQVNTV09SRCBIRVJF'
```

:::note Request Body Notes
- Please refer to **[JSON Request Schema](./json-request-schema.mdx)** for the field types and advance usage.
:::

## Responses

### 200
```json
{
    "success": true,
    "code": 200,
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "token_type": "bearer",
    "expires_in": "1800 seconds"
}
```

### 403
**Invalid Account**
```json
{
    "success": false,
    "code": 403,
    "message": "Access Denied."
}
```

**Invalid Password**
```json
{
    "success": false,
    "code": 403,
    "message": "Your Temporary Password is unauthorized. Please call the Help Desk."
}
```
### 503
```json
{
    "success": false,
    "code": 503,
    "message": "The app is in maintenance mode!"
}
```

:::note Responses Notes
- Learn more about the [**status codes**](./status-codes.md).
:::