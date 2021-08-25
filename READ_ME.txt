Database access is whitelisted on mongo atlas

Solution ran on chrome and brave browser

database name: exam_230
username: new_tester_13
password: 2TbR6EFo5rjLQ2Ke


Data Model

3 collections, somewhat normalizing the relationship between clients and physios

    -clients
        - personal details
            -embedded address
            -embedded additional info
    
    -physios
        -personal details
            -embedded address

    -sessions
        -session details
        -session references id of client and physio

This NoSql data model was chosen because the clients and physios are seperate entities that are only related through sessions
A client and a physio may have many sessions, but each session only contains 1 client and 1 physio, referenceing each of there
_id's within the session document reduces file size if the db were to grow, vs the denormalized option of embedding sessions in 
client or physio documents or embedding physio/client docs in sessions. 


The technologies used for this solution are listed below


DEPENDENCIES

-BACK SOLUTION // runs on port 5000
    -express
    -cors (without installing and requiring cors react was unable to access the api for consumption)
    -mongoose
    -nodemon -- dev-dependencies

-FRONT SOLUTION // runs on port 3000
    -react
    -bootstrap
    -axios


BACKEND SOLUTION 
tested with postman please find exported postman file in postman folder

server run on port 5000

cd app/src node ( or nodemon ) server

react run on port 3000

cd clients/clients npm start