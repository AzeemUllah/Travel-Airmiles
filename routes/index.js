const express = require('express');
var path = require("path");
const sql = require('mssql');
var cors = require('cors');
var md5  = require('md5');
const app = express();

app.use(cors({origin: 'http://thethinkcity.com:3000/'}));
app.use(cors({origin: 'http://localhost:4200/'}));

var config = {
    user: 'sa',
    password: '=KJ=y6x3ZqH',
    server: 'awardsgenie.caiwf8bpbl2w.us-west-2.rds.amazonaws.com',
    database: 'alerts'
};



app.post('/api/delete-alert', function(req, res) {
    sql.close();
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        request.query("DELETE FROM Alerts where alertID = "+ req.body.id, function (err, recordset) {
            if (err) console.log(err);
            if(recordset){
                res.json(recordset.recordset);
            }
            else{
                res.json({});
            }
            sql.close();
        });
    });
});

app.post('/api/update', function(req, res) {
    sql.close();
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        request.query("UPDATE Alerts SET fromCode = '"+req.body.from+"', toCode = '"+req.body.to+"',departureDate = '"+req.body.departureDate+"', returnDate = '"+req.body.returnDate+"', oneWay= '"+req.body.oneway+"', withMiles = '"+req.body.miles+"',exactDates = '"+req.body.exactDates+"',passengerCount = '"+req.body.passengerCount+"',stops= '"+req.body.stops+"',duration= '"+req.body.duration+"',airlines= '"+req.body.airlines+"',travelClass= '"+req.body.travelClass+"',isActive= '"+req.body.isActive+"' WHERE alertId = " + req.body.id, function (err, recordset) {
            if (err) console.log(err);
            if(recordset){
                res.json(recordset.recordset);
            }
            else{
                res.json({});
            }
            sql.close();
        });
    });
});

app.post('/api/signup', function(req, res) {
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();

        request.query("select count(*) as count from Users where EmailAddress='" + req.body.email + "';", function (err, recordset) {
            if (err) res.json({"status": "Error", "data": err});
            if(recordset.recordset[0].count > 0){
                res.json({"status": "Error", "data": "Email already regestered!"});
                sql.close();
            }
            else {
                request.query("INSERT INTO Users (FirstName, LastName, UserName, EmailAddress,PasswordHash,profile_picture) VALUES ('" + req.body.firstName + "', '" + req.body.lastName + "', '" + req.body.username + "', '" + req.body.email + "', '" + md5(req.body.password) + "','" + req.body.profilePic + "');", function (err, recordset) {
                    if (err) res.json({"status": "Error", "data": err});
                    request.query("select max(ID) as lastId from Users", function (err, recordset) {
                        if (err) res.json({"status": "Error", "data": err});
                        sql.close();
                        res.json({"status": "Ok", "data": recordset.recordset[0].lastId});
                    });
                });
            }

        });
    });

});

app.post('/api/login', function(req, res) {
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        console.log((req.body.email));
        request.query("select ID from Users where EmailAddress='" + req.body.email + "' and PasswordHash = '"+ md5(req.body.password) +"';", function (err, recordset) {
            if (err) console.log(err);
            if((recordset.recordset[0])){
                if(recordset.recordset[0].ID > 0){
                    res.json({"status": "Ok", "data": recordset.recordset[0].ID});
                }
                else{
                    res.json({"status": "Error", "data": "Either email or password is invalid!"});
                }
            }
            else{
                res.json({"status": "Error", "data": "Either email or password is invalid!"});
            }
            sql.close();
        });


    });
});


app.post('/api/get-user', function(req, res) {
    sql.close();
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        request.query("select * from Users where ID='"+req.body.id+"';", function (err, recordset) {
            if (err) console.log(err);
            if(recordset.recordset[0].ID > 0){
                res.json({"status": "Ok", "data": recordset.recordset[0]});
            }
            else{
                res.json({"status": "Error", "data": "User doesn't exists!"});
            }
            sql.close();
        });


    });
});



app.post('/api/save-alert', function(req, res) {
    sql.close();
//     console.log("INSERT INTO Alerts (userId, fromCode, toCode,departureDate, returnDate, oneWay, withMiles,exactDates,passengerCount,stops,duration,airlines,travelClass,isActive) " +
// "VALUES ('"+req.body.id+"','"+req.body.from+"','"+req.body.to+"','"+req.body.departureDate+"','"+req.body.returnDate+"','"+req.body.oneway+"'," +
//             "'"+req.body.miles+"','"+req.body.exactDates+"','"+req.body.passengerCount+"','"+req.body.stops+"','"+req.body.duration+"','"+req.body.airlines+"'," +
//             "'"+req.body.travelClass+"','"+req.body.isActive+"');");
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        request.query(
            "INSERT INTO Alerts (userId, fromCode, toCode,departureDate, returnDate, oneWay, withMiles,exactDates,passengerCount,stops,duration,airlines,travelClass,isActive) " +
            "VALUES ('"+req.body.id+"','"+req.body.from+"','"+req.body.to+"','"+req.body.departureDate+"','"+req.body.returnDate+"','"+req.body.oneway+"','"+req.body.miles+"','"+req.body.exactDates+"','"+req.body.passengerCount+"','"+req.body.stops+"','"+req.body.duration+"','"+req.body.airlines+"','"+req.body.travelClass+"','"+req.body.isActive+"');", function (err, recordset) {

                if (err) console.log(err);
                res.json(recordset.rowsAffected[0]);
                sql.close();
            });


    });
});



app.post('/api/get-alert-all', function(req, res) {
    sql.close();
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        request.query("select * from Alerts where userId = '"+ req.body.id +"'", function (err, recordset) {
            if (err) console.log(err);
            if(recordset){
                res.json(recordset.recordset);
            }
            else{
                res.json({});
            }
            sql.close();
        });


    });
});



app.post('/api/get-alert-expired', function(req, res) {
    sql.close();
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        request.query("select * from Alerts where userId = '"+ req.body.id +"' and departureDate > GETDATE();", function (err, recordset) {
            if (err) console.log(err);
            if(recordset){
                res.json(recordset.recordset);
            }
            else{
                res.json({});
            }
            sql.close();
        });


    });
});


app.post('/api/get-alert-upcomming', function(req, res) {
    sql.close();
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        request.query("select * from Alerts where userId = '"+ req.body.id +"' and departureDate < GETDATE();", function (err, recordset) {
            if (err) console.log(err);
            if(recordset){
                res.json(recordset.recordset);
            }
            else{
                res.json({});
            }
            sql.close();
        });
    });
});


app.use(express.static(path.join(__dirname, 'views')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});


module.exports = app;
