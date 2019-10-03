Original 

To generate a code sample for us, we would like you to solve a simple programming assignment. The details follow.

API Integration Task

Create a quick account here: https://developer.deutschebahn.com/
Write a Node JS or Python program that can find and output the 5 center-most stations in
Berlin and 5 center-most in Hamburg.  Center-most means closest to the known
latitude/longitude center of the given city.  From those stations, find and
output 5 station pairs from Hamburg to Berlin and their travel distances with
the following criteria: The Hamburg station has to have parking. The Berlin
station has to have public transportation available.

This assignment should not take too long, so please scope it as such. Please send the assignment back to me by next week. If you are busy and need more time, please let me know. Also, please write your own code for the task (vs forking other repos, etc.).

If you have any questions, feel free to ask.



Notes

To generate a code sample for us, we would like you to solve a simple programming assignment. The details follow.
API Integration Task

Create a quick account here: https://developer.deutschebahn.com/
Write a Node JS or Python program that can 

Requirement: 
STEP 1: Find and output the 5 center-most stations in Berlin and 5 center-most in Hamburg. 
STEP 2: From those stations, find and output 5 station pairs from Hamburg to Berlin and their travel distances with the following 
criteria: The Hamburg station has to have parking. The Berlin station has to have public transportation available.

TODO:
1.	Solve the problem
2.	Modularize the code

Definition: Center-most means closest to the known latitude/longitude center of the given city.  

This assignment should not take too long, so please scope it as such. Please send the assignment back to me by next week. If you are busy and need more time, please let me know. Also, please write your own code for the task (vs forking other repos, etc.).

If you have any questions, feel free to ask.



STEP1: GET PROXIMITY
Get the 5 center most for Hamburg and Berlin
This is example for Berlin
https://api.deutschebahn.com/reisezentren/v1/reisezentren/loc/52.516667/13.388889/5

STEP2: GET CRITERIA
For Berlin
https://api.deutschebahn.com/stada/v2/stations?searchstring=*Ostbahnhof&federalstate=Berlin
    Add if hasParking:true
    For Hamburg
    Add if hasLocalPublicTransport:true
STEP3: MERGE


To start finding routes between the two cities first find the id of the city station
https://api.deutschebahn.com/freeplan/v1/location/berlin
search through the RESPONSE then get that id to find tickets 

To find tickets from origin to stop
https://api.deutschebahn.com/freeplan/v1/arrivalBoard/8011113?date=2019-10-04
Get the journey to get details and possibly calculate distance

More ticket info
https://api.deutschebahn.com/freeplan/v1/journeyDetails/275688%252F106348%252F981548%252F398878%252F80%253fstation_evaId%253D8011113
 

