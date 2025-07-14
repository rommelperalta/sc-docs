---
sidebar_position: 1
---

# Retrieving Employees

This section is for retrieving `employee` details.

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
    "employees": [
        "unique_custom_id_1",
        {
            "facility_id": "Streamline",
            "custom_id": "unique_custom_id_2"
        }
    ],
    "with_image": true,
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
    "employees": [
        "unique_custom_id_1",
        {
            "facility_id": "Streamline",
            "custom_id": "unique_custom_id_2"
        }
    ],
    "with_image": true,
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

### Include Fields


## Responses

### 200
```json
{
    "employees": [
        {
            "custom_id": "unique_custom_id_1",
            "facility_id": "Streamline",
            "employee": {
                "custom_id": "unique_custom_id_1",
                "facility_id": "Streamline",
                "first_name": "Cassandra",
                "last_name": "Smiley",
                "certification_number": "RCP-1728",
                "certification_state": "AR",
                "terminated": false,
                "date_last_checked": "2024-11-11 09:55:24 AM EST",
                "date_created": "2024-11-11 09:41:45 AM EST",
                "date_modified": "2024-11-11 09:55:18 AM EST",
                "exclusions": [
                    {
                        "exclusion_list_prefix": "ca1",
                        "exclusion_list_accr": "CA Medi-Cal",
                        "exclusion_list_description": "California Department of Health Care Services, Medi-cal",
                        "url": "https:\/\/files.medi-cal.ca.gov\/pubsdoco\/SandILanding.aspx",
                        "positive_match": false,
                        "date_created": "2022-01-31 15:52:20 PM EST",
                        "is_npi_match": false,
                        "is_canonical_name_match": false,
                        "is_diminutive_name_match": true,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "addresses": "444 North Frankwood Ave., Sanger, CA",
                            "last_name": "Brown",
                            "first_name": "James",
                            "middle_name": "R.",
                            "active_period": "Indefinitely effective",
                            "provider_type": "Registered Nurse",
                            "date_of_suspension": "1997-11-20"
                        },
                        "resolution": {
                            "note": "Resolved",
                            "created_at": "2022-01-31 16:21:41 AM EST"
                        }
                    },
                    {
                        "exclusion_list_prefix": "sam",
                        "exclusion_list_accr": "SAM.gov",
                        "exclusion_list_description": "System for Award Management",
                        "url": "https:\/\/sam.gov",
                        "positive_match": false,
                        "date_created": "2022-01-31 15:52:20 PM EST",
                        "is_npi_match": false,
                        "is_canonical_name_match": false,
                        "is_diminutive_name_match": true,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "Zip": "93657",
                            "City": "SANGER",
                            "Last": "BROWN",
                            "First": "JIMMIE",
                            "State": "CA",
                            "Middle": "RUSSELL",
                            "CT_Code": "R",
                            "Country": "USA",
                            "SAM_Number": "S4MR3NG10",
                            "Active_Date": "1998-03-16",
                            "Record_Status": 1,
                            "Classification": "Individual",
                            "Exclusion_Type": "Ineligible (Proceedings Completed)",
                            "Excluding_Agency": "OPM",
                            "Termination_Date": "Indefinite",
                            "Exclusion_Program": "Reciprocal"
                        }
                    }
                ],
                "credentials": [
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "1 HOSPITAL PLZ RADIOLOGY",
                            "city": "OLD BRIDGE",
                            "state": "NJ",
                            "zip_code": "08857-3012",
                            "county": "OUT OF STATE",
                            "telephone": "7324423700",
                            "latitude": "40.38594",
                            "longitude": "-74.32347",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "1 ROBERT WOOD JOHNSON PL RADIOLOGY",
                            "city": "NEW BRUNSWICK",
                            "state": "NJ",
                            "zip_code": "08901-1928",
                            "county": "OUT OF STATE",
                            "telephone": "7328283000",
                            "latitude": "40.49597",
                            "longitude": "-74.44861",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "110 REHILL AVE RADIOLOGY",
                            "city": "SOMERVILLE",
                            "state": "NJ",
                            "zip_code": "08876-2519",
                            "county": "OUT OF STATE",
                            "telephone": "9086852200",
                            "latitude": "40.56792",
                            "longitude": "-74.59589",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "111 CENTRAL AVE RADIOLOGY",
                            "city": "NEWARK",
                            "state": "NJ",
                            "zip_code": "07102-1909",
                            "county": "OUT OF STATE",
                            "telephone": "9738775000",
                            "latitude": "40.74356",
                            "longitude": "-74.17581",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "1945 RTE 33 RADIOLOGY",
                            "city": "NEPTUNE",
                            "state": "NJ",
                            "zip_code": "07753-4859",
                            "county": "OUT OF STATE",
                            "telephone": "7327755500",
                            "latitude": "40.20773",
                            "longitude": "-74.0396",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "225 WILLIAMSON ST RADIOLOGY",
                            "city": "ELIZABETH",
                            "state": "NJ",
                            "zip_code": "07202-3625",
                            "county": "OUT OF STATE",
                            "telephone": "9089945000",
                            "latitude": "40.65946",
                            "longitude": "-74.21449",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "254 EASTON AVE RADIOLOGY",
                            "city": "NEW BRUNSWICK",
                            "state": "NJ",
                            "zip_code": "08901-1766",
                            "county": "OUT OF STATE",
                            "telephone": "7327458600",
                            "latitude": "40.5018",
                            "longitude": "-74.45934",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "355 GRAND ST RADIOLOGY",
                            "city": "JERSEY CITY",
                            "state": "NJ",
                            "zip_code": "07302-4321",
                            "county": "OUT OF STATE",
                            "telephone": "2019152000",
                            "latitude": "40.71668",
                            "longitude": "-74.05079",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "NYEMED",
                        "registry_display_name": "NY Medicaid Managed Care Network",
                        "registry_url": "https://health.data.ny.gov/Health/Medicaid-Enrolled-Provider-Listing/keti-qx5t",
                        "match_summary_status": "Valid",
                        "match": {
                            "full_name": "JAMES HARVEY BROWN JR",
                            "first_name": "JAMES",
                            "last_name": "BROWN",
                            "middle_name": "HARVEY",
                            "suffix": "JR",
                            "as_of": "2024-11-10 07:00:00 PM EST",
                            "status": "Active",
                            "certificate_status": "Active",
                            "npi": "1689678039",
                            "medicaid_provider_id": "01636566",
                            "provider_or_facility_name": "BROWN JAMES HARVEY JR",
                            "medicaid_type": "FFS",
                            "profession": "PHYSICIAN",
                            "provider_specialty": "DIAGNOSTIC RADIOLOGY",
                            "service_address": "530 NEW BRUNSWICK AVE RADIOLOGY",
                            "city": "PERTH AMBOY",
                            "state": "NJ",
                            "zip_code": "08861-3654",
                            "county": "OUT OF STATE",
                            "telephone": "7324423700",
                            "latitude": "40.51831",
                            "longitude": "-74.28061",
                            "enrollment_begin_date": "2018-11-13",
                            "next_anticipated_revalidation_date": "2028-06-02",
                            "file_date": "2024-05-20",
                            "medically_fragile_children_directory": "N"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:50:58 AM EST"
                    },
                    {
                        "registry": "ARMB",
                        "registry_display_name": "Arkansas State Medical Board",
                        "registry_url": "https://www.armedicalboard.org/public/verify/default.aspx",
                        "match_is_valid": false,
                        "status": "Inactive",
                        "match_summary_status": "Invalid - Expired",
                        "match": {
                            "full_name": "CASSANDRA A. SMILEY, LRCP",
                            "first_name": "CASSANDRA",
                            "last_name": "SMILEY",
                            "middle_name": "A.",
                            "suffix": "LRCP",
                            "as_of": "2024-11-11 04:57:46 AM EST",
                            "capture_timestamp": "2024-11-11 09:57:46 AM EST",
                            "expiration_date": "2003-10-31",
                            "issue_date": "2000-01-14",
                            "license_number": "RCP-1728",
                            "message": "License match found",
                            "registry": "armb",
                            "registry_display_name": "Arkansas State Medical Board",
                            "response_code": 2,
                            "status": "Inactive",
                            "certificate_status": "Inactive",
                            "image": "<base64>"
                        },
                        "success": true,
                        "date_created": "2024-11-11 09:55:24 AM EST"
                    }
                ]
            },
            "success": true
        },
        {
            "custom_id": "unique_custom_id_2",
            "facility_id": "Streamline",
            "employee": {
                "custom_id": "unique_custom_id_2",
                "facility_id": "Streamline",
                "first_name": "Daniel",
                "last_name": "Cohen",
                "social_security_num": "***-**-6789",
                "certification_number": "2507",
                "certification_state": "TX",
                "terminated": false,
                "date_last_checked": "2022-01-20 06:32:57 AM EST",
                "date_created": "2022-01-20 06:32:56 AM EST",
                "date_modified": "2022-01-20 06:32:56 AM EST",
                "exclusions": [
                    {
                        "exclusion_list_prefix": "ny_opmc",
                        "exclusion_list_accr": "NY OPMC",
                        "exclusion_list_description": "New York Office of Professional Medical Conduct",
                        "url": "https://apps.health.ny.gov/pubdoh/professionals/doctors/conduct/factions/HomeAction.action",
                        "positive_match": false,
                        "date_created": "2022-01-20 06:32:57 AM EST",
                        "is_npi_match": false,
                        "is_canonical_name_match": true,
                        "is_diminutive_name_match": false,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "action": "Probation for thirty-six months with conditions.",
                            "address": "Address redacted",
                            "last_name": "Cohen",
                            "first_name": "Daniel",
                            "date_update": "2017-06-07",
                            "middle_name": "Alan",
                            "license_type": "MD",
                            "year_of_birth": "1970",
                            "effective_date": "2017-06-14",
                            "license_number": "227962",
                            "misconduct_description": "The physician did not contest the charges of having committed professional misconduct by practicing the profession of medicine with negligence on more than one occasion and failing to maintain accurate patient medical records. The physician failed to render or note appropriate care and treatment for several patients to whom he prescribed controlled substances."
                        }
                    },
                    {
                        "exclusion_list_prefix": "nyopmcba",
                        "exclusion_list_accr": "NY OPMCBA",
                        "exclusion_list_description": "NY Professional Misconduct and Professional Discipline",
                        "url": "https://apps.health.ny.gov/pubdoh/professionals/doctors/conduct/factions/HomeAction.action",
                        "positive_match": false,
                        "date_created": "2022-01-20 06:32:57 AM EST",
                        "is_npi_match": false,
                        "is_canonical_name_match": true,
                        "is_diminutive_name_match": false,
                        "is_aka_name_match": false,
                        "is_upin_match": false,
                        "is_ssn_match": false,
                        "is_license_number_match": false,
                        "is_historical": false,
                        "match": {
                            "registry_name": "NYOPMCBA",
                            "license_number": "227962",
                            "license_type": "MD",
                            "first_name": "DANIEL",
                            "middle_name": "ALAN",
                            "last_name": "COHEN",
                            "full_name": "Cohen, Daniel Alan",
                            "details": [
                                {
                                    "list_url": "https://apps.health.ny.gov/pubdoh/professionals/doctors/conduct/factions/SearchAction",
                                    "action_date": "2017-06-14",
                                    "board_action_urls": [
                                        {
                                            "document_url": "https://apps.health.ny.gov/pubdoh/professionals/doctors/conduct/factions/PhysicianDetailsAction.action?finalActionId=10331"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            },
            "success": true
        }
    ],
    "retrieval_datetime": "2024-11-12 08:45:19 AM EST",
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
    "message": "employees should not be more than 100",
    "code": 500
}
```
```json
{
    // `with_image` is set to `true`
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "employees should not be more than 10",
    "code": 500
}
```

```json
{
    "retrieval_datetime": "2022-10-03 10:40:48 AM EDT",
    "success": false,
    "message": "employees should be an array instance",
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
