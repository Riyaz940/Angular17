var express = require('express')
const bodyParser = require('body-parser');
var sql = require('mssql/msnodesqlv8');
const cors =require('cors')

var app = express();
app.use(cors({ origin: 'http://localhost:4200' }))
app.use(bodyParser.json());
app.use('/images', express.static('images'))


const dbConfig= {
 connectionString: 'Driver=SQL Server;Server=localhost\\sqlexpress;Database=angularonlinedb;Trusted_Connection=true;'
  };

  const pool = new sql.ConnectionPool(dbConfig);// sqlconnection

app.get("/show", async function(req,res){
 const request = new sql.Request(pool);//creates new sqlconnection
    const result = await request.query('SELECT * FROM products');//send query to db 
    res.json(result.recordset); //read output of query in json format
});


pool.connect().then(() => {
         app.listen(3000, () => {
         console.log(`Server is ready to communicate`);
          });
        });
		
app.post("/add",async function(req,res){
    const { uname,password,gender,DOB,email,nationality} = req.body;
    const request = new sql.Request(pool);
        await request.query(`INSERT INTO register  VALUES ('${uname}', '${password}','${gender}', '${DOB}','${email}','${nationality}')`);
        res.json({ message: 'new user created successfully' });

    });
	
app.post("/login",async function(req,res){
     const {uname,password} = req.body;
	 console.log(req.body);
     const request = new sql.Request(pool);
     const result =  await request.query(`select count(*) as cnt from register where uname = '${uname}' and password='${password}'`);
     res.json({message: result.recordset});
});

app.post("/buy",async function(req,res){
    const {username,pid,transdate,qty} = req.body;
	console.log(req.body);
    const request = new sql.Request(pool);
        await request.query(`INSERT INTO userorders  ( username,pid,transdate,qty) VALUES ('${username}', '${pid}', '${transdate}',${qty})`);
        res.json({ message: 'Order placed successfully' });

});


