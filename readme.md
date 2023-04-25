**Air Ticket Booking**

**Users Registration & Logging in**
User schema has 3 information to be mentioned,
* name      - should be string type
* email     - should be string type
* password  - should be string type


APIs:
For posting/registering the USER
/api/register     - user has to provide name, email & password
STATUS CODE 201
It returns message as User added to Database.
else error

For logging in
/api/login        - user has to provide email & password
STATUS CODE 201
It returns message as User is Loggedin.
else error





**Flights information**
Flight Schema has
* airline:       should be String,
* flightNo:      should be String,
* departure:     should be String,
* arrival:       should be String,
* departureTime: should be Date,
* arrivalTime:   should be Date,
* seats:         should be Number,
* price:         should be Number


APIs:
To get All the flights information
/api/flights/ 
STATUS CODE 200

To get specific Flight information
/api/flights/:id   here id should be passed as Params ,(id is unique info given to each data)
STATUS CODE 200
It returns all the Flight information

To POST specific Flight information
/api/flights/    user has to provide airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price
STATUS CODE 201
It returns Flight Data added to Database.
else error

To edit/update specific Flight information
/api/flights/:id   here id should be passed as Params ,(id is unique info given to each data) & payload should be passed (payload has information which needs to be updated in DB)
STATUS CODE 204
It returns Specific Flight information is updated.
else error

To remove specific Flight information
/api/flights/:id   here id should be passed as Params ,(id is unique info given to each data)
STATUS CODE 202
It returns Specific Flight information is DELETED.
else error





**Bookings information**
Bookings Schema has
* user:          should be String
* flight:        should be String

APIs:
To get All the BOOKINGS information
/api/dashboard/ 
STATUS CODE 200
It returns all the BOOKINGS information
else error

To POST specific Booking information
/api/booking/    user has to id of that user and flight id to book
STATUS CODE 201
It returns New Bookings added to Database
else error