---
sidebar_position: 1
---

# Resolve Exclusions

This section is for resolving `exclusions` from `employee` or `entity` matches. 
The `match_ids` is an array of exclusion `id` that can be found in every `exclusion` match. 

Add the `id` in `include_fields` to show the field, by default it's hidden.
Please see [**Retrieve Matches**](../retrieve-matches/retrieving-employees.md) section for more info.

## Endpoint

**Domain:** `https://api.streamlineverify.net`  
**URI:** `/resolveMatches`  
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
  "match_ids" : [314],
  "is_match" : false,
  "note" : "not mached"
}
```

### curl
```bash
curl --location --request POST 'https://api.streamlineverify.net/checkMatches \
--header 'x-api-key: b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' \
--data '{
  "match_ids" : [314],
  "is_match" : false,
  "note" : "not mached"
}'
```

:::note Request Body Notes
- Know more about `certification_state` and `alt_certification_state` usage **[here](../check-matches/certification-states.mdx)**.
- Know more about `certification_board` and `alt_certification_board` usage **[here](../check-matches/certification-board-registries.mdx)**.
- Know more about `license_type` usage **[here](../check-matches/license-types.mdx)**.
- This also supports `employees` and `entities` in one request.
- Please refer to **[JSON Request Schema](../check-matches/json-request-schema.mdx)** for the field types and advance usage.
  :::


## Responses

### 200
```json
{
  "num_duplicate_resolutions": 0,
  "success": true,
  "code": 200,
  "message": "Finished resolving matches."
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
  "code": 500,
  "message": "No matches retrieved from the given match ids."
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