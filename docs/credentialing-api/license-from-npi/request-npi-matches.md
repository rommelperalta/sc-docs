---
sidebar_position: 1
---

# Request NPI Matches

This section is for requesting `NPPES` details of `individual` or `organization` using `npi` only.

## Endpoint

**Domain:** `https://api.streamlineverify.net`  
**URI:** `/licenseFromNPI`  
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
    "npi": [
       "1376544700",
       "1871604462",
       "1073624847",
       "1144331026"
    ]
}
```

### curl
```bash
curl --location --request POST 'https://api.streamlineverify.net/licenseFromNPI \
--header 'x-api-key: b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' \
--data '{
    "npi": [
       "1376544700",
       "1871604462",
       "1073624847",
       "1144331026"
    ]
}'
```

:::note Request Body Notes
- Please refer to **[JSON Request Schema](./json-request-schema.mdx)** for the field types and advance usage.
:::


## Responses

### 200
```json
{
    "results": [
        {
            "npi": "1376544700",
            "first_name": "KELLY",
            "middle_name": "MARIE",
            "last_name": "ONEIL",
            "matches": [
                {
                    "raw_certification_number": "26331",
                    "certification_number": "26331",
                    "certification_state": "MA",
                    "primary_taxonomy": "N",
                    "taxonomy_code": "183500000X",
                    "taxonomy_description": "Pharmacist"
                },
                {
                    "raw_certification_number": "I-0521661",
                    "certification_number": "I-0521661",
                    "certification_state": "NY",
                    "primary_taxonomy": "Y",
                    "taxonomy_code": "1835P0018X",
                    "taxonomy_description": "Pharmacist Clinician (PhC)/ Clinical Pharmacy Specialist"
                }
            ]
        },
        {
            "npi": "1871604462",
            "first_name": "MARVIN",
            "middle_name": "",
            "last_name": "FEINSTEIN",
            "matches": [
                {
                    "raw_certification_number": "TUV002941-1",
                    "certification_number": "TUV002941-1",
                    "certification_state": "NY",
                    "primary_taxonomy": "Y",
                    "taxonomy_code": "152W00000X",
                    "taxonomy_description": "Optometrist"
                }
            ]
        },
        {
            "npi": "1073624847",
            "first_name": "JOHN",
            "middle_name": "H.",
            "last_name": "COURTNEY",
            "matches": [
                {
                    "raw_certification_number": "PR020310-1",
                    "certification_number": "PR020310-1",
                    "certification_state": "NY",
                    "primary_taxonomy": "Y",
                    "taxonomy_code": "1041C0700X",
                    "taxonomy_description": "Clinical Social Worker"
                }
            ]
        },
        {
            "npi": "1144331026",
            "first_name": "DEBORAH",
            "middle_name": "",
            "last_name": "RUBIN",
            "matches": [
                {
                    "raw_certification_number": "PR052127-1",
                    "certification_number": "PR052127-1",
                    "certification_state": "NY",
                    "primary_taxonomy": "Y",
                    "taxonomy_code": "1041C0700X",
                    "taxonomy_description": "Clinical Social Worker"
                }
            ]
        }
    ],
    "success": true,
    "code": 200,
    "message": "Finished getting matches"
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