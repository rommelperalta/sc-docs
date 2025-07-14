---
sidebar_position: 1
---

# Retrieving Employee Lists

This section is for retrieving `employee_lists` information from the Credentialing API. This endpoint provides a streamlined way to access employee lists and their associated metadata.

## Endpoint

**Domain:** `https://api.streamlineverify.net`  
**URI:** `/getEmployeeLists`  
**Method:** `POST`  


## Request Headers

|Header  |Value  |
|---|---|
|**Content-Type**  |application/json  |
|**Authorization**  |Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c  |
|**x-api-key**   |b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH   |
 
:::note Request Headers notes
- Get the `access_token` **[here](../authentication/user-authentication.md)**.
- Know more about **[Bearer Token](https://www.geeksforgeeks.org/difference-between-bearer-token-and-basic-authentication/#what-is-bearer-token)**.
- Please contact **support@streamlineverify.com** for the **`x-api-key`**.
:::

## Request Body

### json
```json
{
    "include_terminated": true
}
```

### curl
```bash
curl --location --request POST 'https://api.streamlineverify.net/getEmployeeLists \
--header 'x-api-key: b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' \
--data '{
    "include_terminated": true
}'
```

:::note Request Body Notes
- Be default, the `include_terminated` is `false`.
- Please refer to **[JSON Request Schema](./json-request-schema.mdx)** for the field types and advance usage.
:::

## Responses

### 200
```json
{
    "employee_lists": [
        {
            "id": 3,
            "name": "Integration Seeded List",
            "active_employees": 3,
            "total_employees": 3,
            "date_created": "2015-02-02 06:50:15 AM EST"
        },
        {
            "id": 4,
            "name": "SVbot Test List",
            "active_employees": 3,
            "total_employees": 3,
            "date_created": "2015-02-02 06:50:15 AM EST"
        },
        {
            "id": 16,
            "name": "J. David Raher Ad Hoc Individuals List",
            "active_employees": 1,
            "total_employees": 1,
            "date_created": "2025-05-27 08:34:10 PM EDT"
        },
        {
            "id": 17,
            "name": "J. David Raher API Individuals List",
            "active_employees": 2,
            "total_employees": 2,
            "date_created": "2025-05-27 09:02:30 PM EDT"
        }
    ],
    "success": true,
    "code": 200,
    "message": "Finished getting employee lists"
}
```

### 500
```json
{
    "success": false,
    "code": 500,
    "message": "An error occurred while processing request"
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