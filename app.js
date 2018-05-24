var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sql = require('mssql');
var cors = require('cors');
var md5  = require('md5');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use(cors({origin: 'http://localhost:4200'}));


var config = {
    user: 'sa',
    password: '=KJ=y6x3ZqH',
    server: 'awardsgenie.caiwf8bpbl2w.us-west-2.rds.amazonaws.com',
    database: 'alerts'
};

app.post('/api/signup', function(req, res) {
    sql.close();
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
    sql.close();
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        console.log((req.body.email));
        request.query("select ID from Users where EmailAddress='" + req.body.email + "' and PasswordHash = '"+ md5(req.body.password) +"';", function (err, recordset) {
            if (err) console.log(err);
            if((recordset)){
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
            if((recordset)) {
                if ((recordset.recordset[0])) {
                    if (recordset.recordset[0].ID > 0) {
                        res.json({"status": "Ok", "data": recordset.recordset[0]});
                    }
                    else {
                        res.json({"status": "Error", "data": "User doesn't exists!"});
                    }
                }
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



        request.query("select ID from sendFrequency where name = '"+req.body.sendEvery+"';", function (err, recordset) {
            if (err) console.log(err);
            console.log(recordset);
            if(recordset) {
                if ((recordset.recordset[0])) {
                    var freq = recordset.recordset[0].ID;

                    var q1 = "INSERT INTO Alerts (userId, fromCode, toCode,departureDate, returnDate, oneWay, withMiles,exactDates,passengerCount,stops,duration,airlines,travelClass,isActive, sendFrequencyId) " +
                        "VALUES ('"+req.body.id+"','"+req.body.from+"','"+req.body.to+"','"+req.body.departureDate+"','"+req.body.returnDate+"','"+req.body.oneway+"','"+req.body.miles+"','"+req.body.exactDates+"','"+req.body.passengerCount+"','"+req.body.stops+"','"+req.body.duration+"','"+req.body.airlines+"','"+req.body.travelClass+"','"+req.body.isActive+"','"+freq+"');";
                    if(req.body.returnDate =='-'){
                        q1 = "INSERT INTO Alerts (userId, fromCode, toCode,departureDate, oneWay, withMiles,exactDates,passengerCount,stops,duration,airlines,travelClass,isActive, sendFrequencyId) " +
                            "VALUES ('"+req.body.id+"','"+req.body.from+"','"+req.body.to+"','"+req.body.departureDate+"','"+req.body.oneway+"','"+req.body.miles+"','"+req.body.exactDates+"','"+req.body.passengerCount+"','"+req.body.stops+"','"+req.body.duration+"','"+req.body.airlines+"','"+req.body.travelClass+"','"+req.body.isActive+"','"+freq+"');"
                    }

                    request.query(q1, function (err, recordset) {
                        if (err) console.log(err);
                        console.log(recordset);
                        if(recordset) {
                            if ((recordset.rowsAffected[0])) {
                                res.json(recordset.rowsAffected[0]);
                            }
                            else{
                                res.json({"status": "Error", "data": "Unable to save alert!"});
                            }
                        }
                        else{
                            res.json({"status": "Error", "data": "Unable to save alert!"});
                        }
                        sql.close();
                    });
                }
                else{
                    res.json({"status": "Error", "data": "Unable to save alert!"});
                }
            }
            else{
                res.json({"status": "Error", "data": "Unable to save alert!"});
            }

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

app.post('/api/get-alert-upcomming', function(req, res) {
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
                res.json({"status": "error", "details": "Not deleted"});
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
        var q1 = "UPDATE Alerts SET fromCode = '"+req.body.from+"', toCode = '"+req.body.to+"',departureDate = '"+req.body.departureDate+"', returnDate = '"+req.body.returnDate+"', oneWay= '"+req.body.oneway+"', withMiles = '"+req.body.miles+"',exactDates = '"+req.body.exactDates+"',passengerCount = '"+req.body.passengerCount+"',stops= '"+req.body.stops+"',duration= '"+req.body.duration+"',airlines= '"+req.body.airlines+"',travelClass= '"+req.body.travelClass+"',isActive= '"+req.body.isActive+"' WHERE alertId = " + req.body.alertId;
        if(req.body.returnDate =='-') {
            q1 = "UPDATE Alerts SET fromCode = '"+req.body.from+"', toCode = '"+req.body.to+"',departureDate = '"+req.body.departureDate+"', oneWay= '"+req.body.oneway+"', withMiles = '"+req.body.miles+"',exactDates = '"+req.body.exactDates+"',passengerCount = '"+req.body.passengerCount+"',stops= '"+req.body.stops+"',duration= '"+req.body.duration+"',airlines= '"+req.body.airlines+"',travelClass= '"+req.body.travelClass+"',isActive= '"+req.body.isActive+"' WHERE alertId = " + req.body.alertId;
        }
        request.query(q1, function (err, recordset) {
            if (err) console.log(err);
            if(recordset){
                res.json(recordset.rowsAffected[0]);
            }
            else{
                res.json({"status": "error" , "details": err});
            }
            sql.close();
        });
    });
});


app.post('/api/get-single-alert', function(req, res) {
    sql.close();
    sql.connect(config, function (err) {
        if (err) res.json({"status": "Error", "data": err});
        var request = new sql.Request();
        request.query("select * from Alerts where alertId = "+req.body.id, function (err, recordset) {
            if (err) console.log(err);
            if((recordset)) {
                if ((recordset.recordset[0])) {
                    if (recordset.recordset[0].alertId > 0) {
                        res.json({"status": "Ok", "data": recordset.recordset[0]});
                    }
                    else {
                        res.json({"status": "Error", "data": "User doesn't exists!"});
                    }
                }
            }
            sql.close();
        });


    });
});


app.use(express.static(path.join(__dirname, 'views')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
