---
sidebar_position: 6
---

# Status Codes
This section is for status codes in **Retrieve Matches** endpoint response.

|     Codes    |     Status    |
|---|---|
|     200    |     Finished getting matches    |
|     RM-001    |     Custom ID or Facility ID   not found.    |
|     RM-002    |     Failed finding employee   record. No employee found.    |
|     RM-003    |     Failed finding employee   records. No employees with facility id found.    |
|     RM-004    |     Failed finding check   record. No checks found.    |
|     RM-005    |     We have   "PENDING". Please try retrieving it later.    |
|     RM-006    |     We have "Error   Retrieving Status". Please contact administrator.    |
|     RM-007    |     We have "Invalid - No   Cert # Match". Please review the input details and re-run the check   matches if needed.    |
|     RM-008    |     We have "Invalid - No   NPI Match". Please review the input details and re-run the check matches   if needed.    |
|     RM-009    |     We have "Invalid -   Incorrect License # Format". Please review the input details and re-run   the check matches if needed.    |
|     500    |     An error occurred while   getting matches    |