const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const geoIP = require('geoip-lite');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Heyooo' });
});

//TODO validate user input IP address before route handler
//is this async?
router.route('/ip/')
    .get((req, res) => {
        let ipAddr = req.param('ipAddr');
        
        res.send(geoIP.lookup(ipAddr));
    });


app.use('/api', router);

app.listen(port);

console.log('Listening on port ' + port);