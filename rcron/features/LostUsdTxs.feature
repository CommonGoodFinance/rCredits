Feature: Lost USD Txs
AS a member
I WANT my inconsistent USD transaction data to be made consistent ASAP
SO I can depend on the accuracy of rCredits system records
# In particular, a USD transaction in an interrupted transaction atom must be rolled back by creating an opposite transfer.
# Dwolla's "reflector account" is: 812-713-9234

Setup:
  Given members:
  | id   | fullName   | dw | country | email | flags              |
  | %id1 | Abe One    |  1 | US      | a@    | dft,ok,person,bona |
  | %id2 | Bea Two    |  0 | US      | b@    | dft,ok,person,bona |
  And balances:
  | id   | dw/usd |
  | %id1 |      1 |
  And transactions: 
  | xid | created   | type     | amount | r  | from | to   | purpose |
  | 1   | %today-7m | signup   |     10 | 10 | ctty | %id1 | signup  |
  | 2   | %today-7m | signup   |     10 | 10 | ctty | %id2 | signup  |
  Then usd transfer count is 0

Scenario: a system crash leaves a transaction incomplete
  Given member "%id1" confirms form "pay" with values:
  | op  | who     | amount | goods | purpose |
  | pay | Bea Two | 10.20  | 1     | labor   |
  Then usd transfers:
  | payer | payee | amount |
  | %id1  |  %id2 |   0.20 |
  Given usd transfer count is 0
  When cron runs "usdTxsThere"
  Then usd transfers:
  | payer | payee | amount |
  | %id1  |  %id2 |   0.20 |