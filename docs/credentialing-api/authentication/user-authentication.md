---
sidebar_position: 1
---

# User Authentication
This section is for user authentication using request body.

## Endpoint

**Base URL:** `https://api.streamlineverify.net`  
**URI:** `/login`  
**Method:** `POST`  

## Request Headers

|Header  |Value  |
|---|---|
|**Content-Type**  |application/json  |
|**x-api-key**   |b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH   |
 
:::note
- You can override the request body authentication using **[Authentication with Basic Auth](./user-authentication-basic-auth.md#request-header)**.
- Please contact **support@streamlineverify.com** for the **`x-api-key`**.
:::


## Request Body

### json
```json
{
  "username": "john.smith",
  "password": "PASSWORD HERE"
}
```

### curl
```bash
curl --location --request POST 'https://api.streamlineverify.net/login' \
--header 'x-api-key: b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH' \
--header 'Content-Type: application/json' \
--data '{
    "username": "john.smith",
    "password": "PASSWORD HERE"
}'
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