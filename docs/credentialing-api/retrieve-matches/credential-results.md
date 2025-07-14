---
sidebar_position: 3
---

# Credential Results

This section is for the reference based on the result of `credentials` from retrieving **[employees](./retrieving-employees.md)** and **[entities](./retrieving-entities.md)**.

## Ambiguous

There are results but it's not valid.

```json
{
    "employees": [
        {
            "custom_id": "626bd8aa0bb65",
            "facility_id": "",
            "employee": {
                "custom_id": "626bd8aa0bb65",
                "first_name": "Dax",
                "last_name": "Eckard",
                "certification_number": "644",
                "certification_state": "MS",
                "terminated": false,
                "date_last_checked": "2022-04-29 08:23:15 AM EDT",
                "date_created": "2022-04-29 08:23:06 AM EDT",
                "date_modified": "2022-04-29 08:23:06 AM EDT",
                "exclusions": [],
                "credentials": [
                    {
                        "registry": "MSNAR",
                        "date_created": "2022-04-29 08:26:11 AM EDT",
                        "match_is_valid": false,
                        "status": "Inactive",
                        "match_summary_status": "Invalid - Expired - Name Mismatch",
                        "match": {
                            "full_name": "LEWIS, JO ANN",
                            "first_name": "JO",
                            "last_name": "LEWIS",
                            "middle_name": "ANN",
                            "as_of": "2022-04-29 04:26:04 AM EDT",
                            "capture_timestamp": "2022-04-29 08:26:04 AM EDT",
                            "expiration_date": "2004-07-31",
                            "issue_date": "1989-07-21",
                            "license_number": "644",
                            "license_type": "Nurse Aide",
                            "board_action": "No",
                            "message": "License match found",
                            "registry": "msnar",
                            "response_code": 2,
                            "status": "Inactive",
                            "certificate_status": "Inactive"
                        },
                        "success": true
                    },
                    {
                        "registry": "MSBV",
                        "date_created": "2022-04-29 09:21:06 AM EDT",
                        "match_is_valid": false,
                        "status": "Lapsed",
                        "match_summary_status": "Invalid - Expired - Name Mismatch",
                        "match": {
                            "full_name": "JACKIE LEIGHTON BURKS, DVM",
                            "first_name": "JACKIE",
                            "last_name": "BURKS",
                            "middle_name": "LEIGHTON",
                            "suffix": "DVM",
                            "as_of": "2022-04-29 05:21:13 AM EDT",
                            "capture_timestamp": "2022-04-29 09:21:13 AM EDT",
                            "expiration_date": "2016-08-01",
                            "license_number": "644",
                            "message": "License match found",
                            "registry": "msbv",
                            "response_code": 2,
                            "status": "LAPSED",
                            "certificate_status": "LAPSED"
                        },
                        "success": true
                    }
                ]
            },
            "success": true
        }
    ]
}
```

## Unambiguous

There is one valid result.

```json
{
    "employees": [
        {
            "custom_id": "626bca436ec1d",
            "facility_id": "",
            "employee": {
                "custom_id": "626bca436ec1d",
                "first_name": "Marshall",
                "last_name": "Strickland",
                "certification_number": "16683",
                "certification_state": "MD",
                "terminated": false,
                "date_last_checked": "2022-04-29 07:21:48 AM EDT",
                "date_created": "2022-04-29 07:21:39 AM EDT",
                "date_modified": "2022-04-29 07:21:39 AM EDT",
                "exclusions": [],
                "credentials": [
                    {
                        "registry": "MDDB",
                        "date_created": "2022-04-29 07:32:19 AM EDT",
                        "match_is_valid": true,
                        "status": "Active",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "MARSHALL H STRICKLAND",
                            "first_name": "MARSHALL",
                            "last_name": "STRICKLAND",
                            "middle_name": "H",
                            "as_of": "2022-04-29 03:31:50 AM EDT",
                            "capture_timestamp": "2022-04-29 07:31:50 AM EDT",
                            "expiration_date": "2023-06-30",
                            "issue_date": "2017-12-20",
                            "license_number": "16683",
                            "license_type": "DENTIST",
                            "message": "License match found",
                            "registry": "mddb",
                            "response_code": 2,
                            "status": "Active",
                            "certificate_status": "Active"
                        },
                        "success": true
                    }
                ]
            },
            "success": true
        }
    ]
}
```

## No Cert & Error Retrieving Results

No results found.

```json
{
    "custom_id": "626bca436ec1d",
    "facility_id": "",
    "employee": {
        "custom_id": "626bca436ec1d",
        "first_name": "Marshall",
        "last_name": "Strickland",
        "certification_number": "16683",
        "certification_state": "MD",
        "terminated": false,
        "date_last_checked": "2024-11-12 12:57:02 PM EST",
        "date_created": "2024-11-12 12:56:57 PM EST",
        "date_modified": "2024-11-12 12:56:57 PM EST",
        "exclusions": [],
        "credentials": [
            {
                "registry": "MDABH",
                "registry_display_name": "MD Addiction & Behavioral Health Professional Certification Board",
                "registry_url": "https://www.mabpcb.com/",
                "status": "Error Retrieving Status",
                "match_summary_status": "Error Retrieving Status",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDBDP",
                "registry_display_name": "MD State Board of Dietetic Practice",
                "registry_url": "https://mdbnc.health.maryland.gov/dietVerification/Default.aspx",
                "status": "Invalid - Incorrect License # Format",
                "match_summary_status": "Invalid - Incorrect License # Format",
                "match": {
                    "as_of": "2024-11-12 07:57:15 AM EST",
                    "capture_timestamp": "2024-11-12 12:57:15 PM EST",
                    "message": "Please use the following license formats D01234, N00123, or DX1234",
                    "registry": "mdbdp",
                    "registry_display_name": "MD State Board of Dietetic Practice",
                    "response_code": 3
                },
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDBEO",
                "registry_display_name": "MD Board of Optometry",
                "registry_url": "https://mdbnc.health.maryland.gov/optverification/default.aspx",
                "status": "Invalid - Incorrect License # Format",
                "match_summary_status": "Invalid - Incorrect License # Format",
                "match": {
                    "as_of": "2024-11-12 07:57:16 AM EST",
                    "capture_timestamp": "2024-11-12 12:57:16 PM EST",
                    "message": "Please use the following license formats DA1234, TA1234, or 1234",
                    "registry": "mdbeo",
                    "registry_display_name": "MD Board of Optometry",
                    "response_code": 3
                },
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDBN",
                "registry_display_name": "Maryland Board of Nursing",
                "registry_url": "https://lookup.mbon.org/verification/Search.aspx",
                "status": "Error Retrieving Status",
                "match_summary_status": "Error Retrieving Status",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDBP",
                "registry_display_name": "Maryland Board of Physicians",
                "registry_url": "https://www.mbp.state.md.us/bpqapp/",
                "status": "Invalid - Incorrect License # Format",
                "match_summary_status": "Invalid - Incorrect License # Format",
                "match": {
                    "as_of": "2024-11-12 07:57:22 AM EST",
                    "capture_timestamp": "2024-11-12 12:57:22 PM EST",
                    "message": "Please use the following license formats D12345.",
                    "registry": "mdbp",
                    "registry_display_name": "Maryland Board of Physicians",
                    "response_code": 3
                },
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDBPCT",
                "registry_display_name": "MD State Board Of Professional Counselors & Therapists",
                "registry_url": "https://mdbnc.health.maryland.gov/pctVerification/Default.aspx",
                "status": "Invalid - No Cert # Match",
                "match_summary_status": "Invalid - No Cert # Match",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDBPCTSUP",
                "registry_display_name": "MD Maryland State Board of Professional Counselors & Therapists Supervisor",
                "registry_url": "https://mdbnc.health.maryland.gov/pctVerification/supervisionZip.aspx",
                "status": "Invalid - No Cert # Match",
                "match_summary_status": "Invalid - No Cert # Match",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDCE",
                "registry_display_name": "MD Chiropractic Examiners",
                "registry_url": "https://mdbnc.health.maryland.gov/chiroverification/Default.aspx",
                "status": "Invalid - No Cert # Match",
                "match_summary_status": "Invalid - No Cert # Match",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDDB",
                "registry_display_name": "Maryland State Board of Dental Examiners",
                "registry_url": "http://209.222.157.144/MDBODVerificationprod/Search.aspx",
                "status": "Error Retrieving Status",
                "match_summary_status": "PENDING",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDEMS",
                "registry_display_name": "MD Office of EMS Clinician Services",
                "registry_url": "https://www.miemsslicense.com/lms/public/portal#/lookup",
                "status": "Invalid - Incorrect License # Format",
                "match_summary_status": "Invalid - Incorrect License # Format",
                "match": {
                    "as_of": "2024-11-12 07:57:44 AM EST",
                    "capture_timestamp": "2024-11-12 12:57:44 PM EST",
                    "message": "Please use the following license formats 1112345 or 1111234.",
                    "registry": "mdems",
                    "registry_display_name": "MD Office of EMS Clinician Services",
                    "response_code": 3
                },
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDNHA",
                "registry_display_name": "MD Board of Examiners Of Nursing Home Administrators",
                "registry_url": "https://mdbnc.health.maryland.gov/nhaVerification/Default.aspx",
                "status": "Invalid - Incorrect License # Format",
                "match_summary_status": "Invalid - Incorrect License # Format",
                "match": {
                    "as_of": "2024-11-12 07:57:50 AM EST",
                    "capture_timestamp": "2024-11-12 12:57:50 PM EST",
                    "message": "Please use the following license format R0000",
                    "registry": "mdnha",
                    "registry_display_name": "MD Board of Examiners Of Nursing Home Administrators",
                    "response_code": 3
                },
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDOH",
                "registry_display_name": "MD Audiology, Hearing Aid Dispensers & SLPs",
                "registry_url": "https://mdbnc.dhmh.md.gov/audverification/Default.aspx",
                "status": "Invalid - No Cert # Match",
                "match_summary_status": "Invalid - No Cert # Match",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDOT",
                "registry_display_name": "Maryland Board of Occupational Therapy",
                "registry_url": "https://mdbot.mylicense.com/verification/",
                "status": "Error Retrieving Status",
                "match_summary_status": "PENDING",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDPB",
                "registry_display_name": "Maryland Board of Pharmacy",
                "registry_url": "https://mdbop.mylicense.com/Verification/",
                "status": "Error Retrieving Status",
                "match_summary_status": "PENDING",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDPCT",
                "registry_display_name": "MD Board of Professional Counselors and Therapists Trainee",
                "registry_url": "https://mdbnc.health.maryland.gov/pctVerification/Trainee.aspx",
                "status": "Invalid - No Cert # Match",
                "match_summary_status": "Invalid - No Cert # Match",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDPT",
                "registry_display_name": "Maryland State Board of Physical Therapy",
                "registry_url": "https://mdbnc.dhmh.md.gov/bptverification/default.aspx",
                "status": "Error Retrieving Status",
                "match_summary_status": "PENDING",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDSW",
                "registry_display_name": "Maryland Board of Social Worker",
                "registry_url": "https://mdbnc.health.maryland.gov/bsweverification/default.aspx",
                "status": "Error Retrieving Status",
                "match_summary_status": "PENDING",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDVM",
                "registry_display_name": "MD Board of Veterinary Medical Examiners",
                "registry_url": "https://onestop.md.gov/list_views/662fee43557f9400f4cdd80d?35f75b8b-2639-d36f-4342-dbe2c416f509=true",
                "status": "Error Retrieving Status",
                "match_summary_status": "PENDING",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            },
            {
                "registry": "MDVT",
                "registry_display_name": "MD Veterinary Technicians",
                "registry_url": "https://mda.maryland.gov/vetboard/Pages/default.aspx",
                "status": "Error Retrieving Status",
                "match_summary_status": "PENDING",
                "success": false,
                "date_created": "2024-11-12 12:57:02 PM EST"
            }
        ]
    },
    "messages": [
        {
            "code": "RM-005",
            "message": "We have \"PENDING\". Please try retrieving it later."
        },
        {
            "code": "RM-006",
            "message": "We have \"Error Retrieving Status\". Please contact administrator."
        },
        {
            "code": "RM-007",
            "message": "We have \"Invalid - No Cert # Match\". Please review the input details and re-run the check matches if needed."
        },
        {
            "code": "RM-009",
            "message": "We have \"Invalid - Incorrect License # Format\". Please review the input details and re-run the check matches if needed."
        }
    ],
    "success": false
}
```