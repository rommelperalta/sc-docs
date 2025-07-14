---
sidebar_position: 1
---

# Create Employees

This section is for creating `employees` that contains generated `custom_id` in response. The `custom_id` is use for retrieving `employees` and other details at [**Retrieve Matches**](../retrieve-matches/retrieving-employees.md) section.

## Endpoint

**Domain:** `https://api.streamlineverify.net`  
**URI:** `/checkMatches`  
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
    "employees": [
        {
            "first_name": "JAMES",
            "middle_name": "",
            "last_name": "BROWN",
            "maiden_name": "",
            "alt_last_name": "",
            "facility_id": "Streamline",
            "custom_id": "unique_custom_id_1",
            "date_of_birth": "",
            "upin": "",
            "npi": "",
            "social_security_num": "",
            "certification_board": "",
            "certification_number": "240",
            "certification_state": "AL",
            "license_type": "",
            "alt_certification_board": "",
            "alt_certification_number": "",
            "alt_certification_state": "",
            "address1": "",
            "address2": "",
            "city": "",
            "state": "",
            "zip": "",
            "job_title": "",
            "record_status": "",
            "date_hire": "",
            "notes": "",
            "dea_number": "",
            "csl_number": "",
            "csl_state": "",
            "mmis_number": "",
            "alt_csl_number": "",
            "alt_csl_state": ""
        }
    ]
}
```

### curl
```bash
curl --location --request POST 'https://api.streamlineverify.net/checkMatches \
--header 'x-api-key: b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' \
--data '{
    "employees": [
        {
            "first_name": "JAMES",
            "middle_name": "",
            "last_name": "BROWN",
            "maiden_name": "",
            "alt_last_name": "",
            "facility_id": "Streamline",
            "custom_id": "unique_custom_id_1",
            "date_of_birth": "",
            "upin": "",
            "npi": "",
            "social_security_num": "",
            "certification_board": "",
            "certification_number": "240",
            "certification_state": "AL",
            "license_type": "",
            "alt_certification_board": "",
            "alt_certification_number": "",
            "alt_certification_state": "",
            "address1": "",
            "address2": "",
            "city": "",
            "state": "",
            "zip": "",
            "job_title": "",
            "record_status": "",
            "date_hire": "",
            "notes": "",
            "dea_number": "",
            "csl_number": "",
            "csl_state": "",
            "mmis_number": "",
            "alt_csl_number": "",
            "alt_csl_state": ""
        }
    ]
}'
```

:::note Request Body Notes
- Know more about `certification_state` and `alt_certification_state` usage **[here](./certification-states.mdx)**.
- Know more about `certification_board` and `alt_certification_board` usage **[here](./certification-board-registries.mdx)**.
- Know more about `license_type` usage **[here](./license-types.mdx)**.
- This also supports `employees` and `entities` in one request.
- Please refer to **[JSON Request Schema](./json-request-schema.mdx)** for the field types and advance usage.
:::


## Responses

### 200
```json
{
    "employees": [
        {
            "employee": {
                "custom_id": "unique_custom_id_1",
                "facility_id": "Streamline",
                "first_name": "JAMES",
                "last_name": "BROWN",
                "certification_number": "240",
                "certification_state": "AL",
                "terminated": false,
                "date_last_checked": "2024-11-11 09:41:56 AM EST",
                "date_created": "2024-11-11 09:41:45 AM EST",
                "date_modified": "2024-11-11 09:41:45 AM EST"
            },
            "success": true
        }
    ],
    "success": true,
    "code": 200,
    "message": "Thank you! We're now processing matches."
}
```

### 401
```json
{
    "success": false,
    "message": "An error occurred while getting matches: Failed to decode the JWT token. Undefined offset: 1",
    "code": 401
}
```
```json
{
    "success": false,
    "message": "An error occurred while getting matches: Token is invalid.",
    "code": 401
}
```

### 500
```json
{
    "success": false,
    "message": "An error occurred while processing matches. Please contact system administrator.",
    "code": 500
}
```
```json
{
    "success": false,
    "message": "Couldn't find employees or entities from the request",
    "code": 500
}
```
```json
{
    "success": false,
    "message": "employees have invalid formats.",
    "code": 500
}
```
```json
{
    "success": false,
    "message": "employees and entities have invalid formats.",
    "code": 500
}
```
```json
{
    "success": false,
    "message": "employees should be an array instance",
    "code": 500
}
```
```json
{
    "success": false,
    "message": "employees and entities should not be more than 1000",
    "code": 500
}
```
```json
{
    "success": false,
    "message": "An error occurred while processing matches.",
    "code": 500
}
```
```json
{
    "success": false,
    "message": "Account already reached the <int> max certification numbers today.",
    "code": 500
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