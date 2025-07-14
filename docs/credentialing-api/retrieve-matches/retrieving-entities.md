---
sidebar_position: 2
---

# Retrieving Entities

This section is for retrieving `entity` details.

## Endpoint

**Domain:** `https://api.streamlineverify.net`  
**URI:** `/retrieveMatches`  
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
    "entities": [
        {
            "facility_id": "Streamline",
            "custom_id": "61f83c611d354"
        }
    ],
    "include_exclusions": true,
    "include_credentials": true,
    "include_fields": []
}
```

### curl
```bash
curl --location --request POST 'https://api.streamlineverify.net/retrieveMatches \
--header 'x-api-key: b6A9fXvP0qJ3Y8LdWZtNCEoKm5RG7sVQ42xFUBpH' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' \
--data '{
    "entities": [
        {
            "facility_id": "Streamline",
            "custom_id": "61f83c611d354"
        }
    ],
    "include_exclusions": true,
    "include_credentials": true,
    "include_fields": []
}'
```

:::note Request Body Notes
- The `with_image` parameter is `false` by default.
- The `include_exclusions` parameter is `true` by default.
- The `include_credentials` parameter is `true` by default.
- The `include_fields` parameter is `[]` by default. We can show the `id`, or `profile_id` in every `exclusions` if it exists.
- The `entities` and `employees` can be called in single request. 
- Please refer to **[JSON Request Schema](./json-request-schema.mdx)** for the field types and advance usage.
:::


## Responses

### 200
```json
{
    "entities": [
        {
            "custom_id": "633af45cd0d1c",
            "facility_id": "",
            "entity": {
                "custom_id": "633af45cd0d1c",
                "business": "Duffield, Cami R., RN",
                "npi": 1942476080,
                "terminated": false,
                "date_last_checked": "2022-10-03 10:40:45 AM EDT",
                "date_created": "2022-10-03 10:40:29 AM EDT",
                "date_modified": "2022-10-03 10:40:29 AM EDT",
                "exclusions": [
                    {
                        "exclusion_list_prefix": "nyomig",
                        "exclusion_list_accr": "NY OMIG",
                        "exclusion_list_description": "New York Office of the Medical Inspector General",
                        "url": "http://www.omig.ny.gov/data/component/option,com_physiciandirectory/",
                        "positive_match": false,
                        "date_created": "2022-10-03 10:40:45 AM EDT",
                        "is_npi_match": true,
                        "is_canonical_name_match": false,
                        "is_diminutive_name_match": false,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "npi": "1942476080",
                            "business": "A&Y MEDICAL SUPPLY INC",
                            "provtype": "DME Business",
                            "action_date": "2017/05/18"
                        }
                    },
                    {
                        "exclusion_list_prefix": "oig",
                        "exclusion_list_accr": "Federal OIG",
                        "exclusion_list_description": "Office of the Inspector General",
                        "url": "http://exclusions.oig.hhs.gov/",
                        "positive_match": false,
                        "date_created": "2022-10-03 10:40:45 AM EDT",
                        "is_npi_match": true,
                        "is_canonical_name_match": false,
                        "is_diminutive_name_match": false,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "npi": "1942476080",
                            "zip": "11375",
                            "city": "FOREST HILLS",
                            "state": "NY",
                            "address": "6310 108TH STREET, APT 6J",
                            "busname": "A & Y MEDICAL SUPPLY, INC",
                            "general": "DME COMPANY",
                            "excldate": "2017-05-18",
                            "excltype": "1128b8",
                            "specialty": "DME - GENERAL"
                        }
                    },
                    {
                        "exclusion_list_prefix": "oig",
                        "exclusion_list_accr": "Federal OIG",
                        "exclusion_list_description": "Office of the Inspector General",
                        "url": "http://exclusions.oig.hhs.gov/",
                        "positive_match": false,
                        "date_created": "2022-10-03 10:40:45 AM EDT",
                        "is_npi_match": false,
                        "is_canonical_name_match": true,
                        "is_diminutive_name_match": false,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "dob": "1970-08-27",
                            "zip": "08648",
                            "city": "LAWRENCEVILLE",
                            "state": "NJ",
                            "address": "119 GRAF AVENUE",
                            "general": "NURSING PROFESSION",
                            "midname": "R",
                            "excldate": "2000-12-20",
                            "excltype": "1128b4",
                            "lastname": "DUFFIELD",
                            "firstname": "CAMI",
                            "specialty": "NURSE/NURSES AIDE"
                        }
                    },
                    {
                        "exclusion_list_prefix": "njcdr",
                        "exclusion_list_accr": "NJ DCR",
                        "exclusion_list_description": "New Jersey Division of Civil Rights",
                        "exclusion_list_email": "Walter.Bodnar@osc.state.nj.us",
                        "url": "http://www.state.nj.us/treasury/debarred/debarsearch.htm",
                        "positive_match": false,
                        "date_created": "2022-10-03 10:40:46 AM EDT",
                        "is_npi_match": false,
                        "is_canonical_name_match": true,
                        "is_diminutive_name_match": false,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "zip": "08648",
                            "city": "LAWRENCEVILLE",
                            "name": "DUFFIELD, CAMI R. (RN)",
                            "state": "NJ",
                            "action": "SUSPENSION",
                            "reason": "K",
                            "street": "119 GRAF AVENUE",
                            "suffix": "RN",
                            "category": "MEDICAL",
                            "last_name": "DUFFIELD",
                            "first_name": "CAMI",
                            "middle_name": "R.",
                            "debarring_dept": "54",
                            "effective_date": "2000-12-20",
                            "debarring_agency": "7540"
                        }
                    },
                    {
                        "exclusion_list_prefix": "sam",
                        "exclusion_list_accr": "SAM.gov",
                        "exclusion_list_description": "System for Award Management",
                        "url": "https://www.sam.gov/portal/public/SAM/?portal:componentId=7d526634-bb8c-40f9-a579-7061ad3477ac&portal:type=action&navigationalstate=JBPNS_rO0ABXdcACJqYXZheC5mYWNlcy5wb3J0bGV0YnJpZGdlLlNUQVRFX0lEAAAAAQApdmlldzowYzM1MmVlZi03MmRjLTRhOGEtOTMwMy1mYjBlY2JhZTU2N",
                        "positive_match": false,
                        "date_created": "2022-10-03 10:40:46 AM EDT",
                        "is_npi_match": false,
                        "is_canonical_name_match": true,
                        "is_diminutive_name_match": false,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "Zip": "086484317",
                            "City": "LAWRENCEVILLE",
                            "Last": "DUFFIELD",
                            "First": "CAMI",
                            "State": "NJ",
                            "Middle": "R.",
                            "CT_Code": "R",
                            "Country": "USA",
                            "SAM_Number": "S4MR3NB05",
                            "Active_Date": "2001-03-05",
                            "Record_Status": 1,
                            "Classification": "Individual",
                            "Exclusion_Type": "Ineligible (Proceedings Completed)",
                            "Excluding_Agency": "OPM",
                            "Termination_Date": "Indefinite",
                            "Exclusion_Program": "Reciprocal",
                            "SAM_Creation_Date": "2001-05-01"
                        }
                    },
                    {
                        "exclusion_list_prefix": "sam2",
                        "exclusion_list_accr": "SAM.gov extras",
                        "exclusion_list_description": "System for Award Management",
                        "url": "https://sam.gov",
                        "positive_match": false,
                        "date_created": "2022-10-03 10:40:46 AM EDT",
                        "is_npi_match": false,
                        "is_canonical_name_match": true,
                        "is_diminutive_name_match": false,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "Zip": "086484317",
                            "City": "LAWRENCEVILLE",
                            "Last": "DUFFIELD",
                            "First": "CAMI",
                            "State": "NJ",
                            "Middle": "R.",
                            "CT_Code": "Z1",
                            "Country": "USA",
                            "SAM_Number": "S4MR3NB05",
                            "Active_Date": "2000-12-20",
                            "Record_Status": 1,
                            "Classification": "Individual",
                            "Exclusion_Type": "Prohibition/Restriction",
                            "Excluding_Agency": "HHS",
                            "Termination_Date": "Indefinite",
                            "Exclusion_Program": "Reciprocal",
                            "SAM_Creation_Date": "2001-03-07",
                            "Additional_Comments": "Excluded by the Department of Health and Human Services from participation in all Federal health care programs pursuant to 42 U.S.C. § 1320a-7 or other sections of the Social Security Act, as amended and codified in Chapter 7 of Title 42 of the United States Code (the scope and effect of Federal health care program exclusions is described in 42 C.F.R. § 1001.1901)."
                        }
                    }
                ],
                "credentials": [
                    {
                        "registry": "NPPES",
                        "date_created": "2022-10-03 10:40:48 AM EDT",
                        "status": "Name Mismatch",
                        "match_summary_status": "Invalid - Name Mismatch",
                        "match": {
                            "as_of": "2021-11-17 19:00:00 PM EST",
                            "npi": "1942476080",
                            "entity_type_code": "2",
                            "provider_enumeration_date": "05/07/2008",
                            "last_update_date": "05/04/2011",
                            "ein": "<UNAVAIL>",
                            "is_organization_subpart": "N",
                            "parent_organization": [],
                            "address": {
                                "practice": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                },
                                "mailing": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                }
                            },
                            "provider": {
                                "main": {
                                    "organization_name": "A&Y MEDICAL SUPPLY INC"
                                },
                                "other": []
                            },
                            "authorized_official": {
                                "last_name": "YAKHIEL",
                                "first_name": "YANIK",
                                "middle_name": "FIRGIYEV",
                                "title": "OWNER",
                                "phone_number": "5163790302"
                            },
                            "provider_taxonomies": [
                                {
                                    "primary": "Y",
                                    "code": "332B00000X",
                                    "value": "Durable Medical Equipment & Medical Supplies"
                                }
                            ],
                            "last_modified": "2021-11-18 16:48:34"
                        },
                        "success": true
                    },
                    {
                        "registry": "MOOA",
                        "date_created": "2022-10-03 10:40:48 AM EDT",
                        "status": "No",
                        "match_summary_status": "Invalid - Name Mismatch",
                        "match": {
                            "as_of": "2021-11-17 19:00:00 PM EST",
                            "npi": "1942476080",
                            "entity_type_code": "2",
                            "provider_enumeration_date": "05/07/2008",
                            "last_update_date": "05/04/2011",
                            "ein": "<UNAVAIL>",
                            "is_organization_subpart": "N",
                            "parent_organization": [],
                            "address": {
                                "practice": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                },
                                "mailing": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                }
                            },
                            "provider": {
                                "main": {
                                    "organization_name": "A&Y MEDICAL SUPPLY INC"
                                },
                                "other": []
                            },
                            "authorized_official": {
                                "last_name": "YAKHIEL",
                                "first_name": "YANIK",
                                "middle_name": "FIRGIYEV",
                                "title": "OWNER",
                                "phone_number": "5163790302"
                            },
                            "provider_taxonomies": [
                                {
                                    "primary": "Y",
                                    "code": "332B00000X",
                                    "value": "Durable Medical Equipment & Medical Supplies"
                                }
                            ],
                            "last_modified": "2021-11-18 16:48:34",
                            "optout_affidavits": [
                                []
                            ]
                        },
                        "success": true
                    },
                    {
                        "registry": "CMSOAR",
                        "date_created": "2022-10-03 10:40:48 AM EDT",
                        "status": "No",
                        "match_summary_status": "Invalid - Name Mismatch",
                        "match": {
                            "as_of": "2021-11-17 19:00:00 PM EST",
                            "npi": "1942476080",
                            "entity_type_code": "2",
                            "provider_enumeration_date": "05/07/2008",
                            "last_update_date": "05/04/2011",
                            "ein": "<UNAVAIL>",
                            "is_organization_subpart": "N",
                            "parent_organization": [],
                            "address": {
                                "practice": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                },
                                "mailing": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                }
                            },
                            "provider": {
                                "main": {
                                    "organization_name": "A&Y MEDICAL SUPPLY INC"
                                },
                                "other": []
                            },
                            "authorized_official": {
                                "last_name": "YAKHIEL",
                                "first_name": "YANIK",
                                "middle_name": "FIRGIYEV",
                                "title": "OWNER",
                                "phone_number": "5163790302"
                            },
                            "provider_taxonomies": [
                                {
                                    "primary": "Y",
                                    "code": "332B00000X",
                                    "value": "Durable Medical Equipment & Medical Supplies"
                                }
                            ],
                            "last_modified": "2021-11-18 16:48:34"
                        },
                        "success": true
                    },
                    {
                        "registry": "CAFFS",
                        "date_created": "2022-10-03 10:40:48 AM EDT",
                        "status": "Invalid - No NPI Match",
                        "match_summary_status": "Error Retrieving Status",
                        "success": true
                    },
                    {
                        "registry": "MPEF",
                        "date_created": "2022-10-03 10:40:48 AM EDT",
                        "status": "No",
                        "match": {
                            "as_of": "2021-11-17 19:00:00 PM EST",
                            "npi": "1942476080",
                            "entity_type_code": "2",
                            "provider_enumeration_date": "05/07/2008",
                            "last_update_date": "05/04/2011",
                            "ein": "<UNAVAIL>",
                            "is_organization_subpart": "N",
                            "parent_organization": [],
                            "address": {
                                "practice": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                },
                                "mailing": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                }
                            },
                            "provider": {
                                "main": {
                                    "organization_name": "A&Y MEDICAL SUPPLY INC"
                                },
                                "other": []
                            },
                            "authorized_official": {
                                "last_name": "YAKHIEL",
                                "first_name": "YANIK",
                                "middle_name": "FIRGIYEV",
                                "title": "OWNER",
                                "phone_number": "5163790302"
                            },
                            "provider_taxonomies": [
                                {
                                    "primary": "Y",
                                    "code": "332B00000X",
                                    "value": "Durable Medical Equipment & Medical Supplies"
                                }
                            ],
                            "last_modified": "2021-11-18 16:48:34",
                            "mpef": [
                                []
                            ]
                        },
                        "success": true
                    },
                    {
                        "registry": "NYMOOA",
                        "date_created": "2022-10-03 10:40:48 AM EDT",
                        "status": "No",
                        "match": {
                            "as_of": "2021-11-17 19:00:00 PM EST",
                            "npi": "1942476080",
                            "entity_type_code": "2",
                            "provider_enumeration_date": "05/07/2008",
                            "last_update_date": "05/04/2011",
                            "ein": "<UNAVAIL>",
                            "is_organization_subpart": "N",
                            "parent_organization": [],
                            "address": {
                                "practice": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                },
                                "mailing": {
                                    "city_name": "NORTH BALDWIN",
                                    "state_name": "NY",
                                    "postal_code": "115101418",
                                    "country_code": "US",
                                    "phone_number": "5163790302",
                                    "fax_number": "5163790535",
                                    "first_line": "1308 GRAND AVE"
                                }
                            },
                            "provider": {
                                "main": {
                                    "organization_name": "A&Y MEDICAL SUPPLY INC"
                                },
                                "other": []
                            },
                            "authorized_official": {
                                "last_name": "YAKHIEL",
                                "first_name": "YANIK",
                                "middle_name": "FIRGIYEV",
                                "title": "OWNER",
                                "phone_number": "5163790302"
                            },
                            "provider_taxonomies": [
                                {
                                    "primary": "Y",
                                    "code": "332B00000X",
                                    "value": "Durable Medical Equipment & Medical Supplies"
                                }
                            ],
                            "last_modified": "2021-11-18 16:48:34"
                        },
                        "success": true
                    },
                    {
                        "registry": "NYEMED",
                        "date_created": "2022-10-03 10:40:48 AM EDT",
                        "match_summary_status": "Error Retrieving Status",
                        "success": true
                    }
                ],
                "type_mismatch": 0
            },
            "success": true
        }
    ],
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": true,
    "code": 200,
    "message": "Finished getting matches"
}
```

### 401
```json
{
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "An error occurred while getting matches: Failed to decode the JWT token. Undefined offset: 1",
    "code": 401
}
```
```json
{
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "An error occurred while getting matches: Token is invalid.",
    "code": 401
}
```

### 500
```json
{
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "An error occurred while processing matches. Please contact system administrator.",
    "code": 500
}
```

```json
{
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "Couldn't find employees or entities from the request",
    "code": 500
}
```

```json
{
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "An error occurred while getting matches.",
    "code": 500
}
```

```json
{
    // `with_image` is set to `false`
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "entities should not be more than 100",
    "code": 500
}
```

```json
{
    // `with_image` is set to `true`
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "entities should not be more than 10",
    "code": 500
}
```

```json
{
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "entities should be an array instance",
    "code": 500
}
```

```json
{
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "employees and entities should be an array instance",
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
- The retrieved match response can be so bloated. The suggestion is to optimize your request and make use of the `with_image`, `include_credentials`, and `include_exclusions`.
- The `image` is in [**base64**](https://www.geeksforgeeks.org/how-to-display-base64-images-in-html) format.
- Learn more about the `match` details in [**exclusions**](./match-details-in-exclusions.mdx).
- Learn more about the `match_summary_status` in [**credentials**](./match-summary-status-in-credentials.md).
- Learn more about the [**status codes**](./status-codes.md).
- If there's no `match_summary_status` field, you can use `status` instead in `credentials`.
- The **Retrieve Matches** response is dynamic, and it changes from time to time if there's a `PENDING` value in `match_summary_status` field.
- Positive matches require the user to mark a match as positive in the **StrealineVerify** application, or via the use of a future API. Therefore, by default `positive_match` is `false`. We show the matches regardless of if it is confirmed or not.
:::
