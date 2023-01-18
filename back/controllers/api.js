const ADODB = require('node-adodb');

const source = "../../access-manager/back/utils/test1.mdb"
const connection = ADODB.open(`Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${source};Persist Security Info=False;`);
 
 
exports.test = async (req, res, next) => {
    try {
        const users = await connection.query('SELECT * FROM [user]')
        const data = JSON.stringify(users, null, 2)
        res.status(200).json({
            data: data
        })
    } catch (error) {
        console.error(error)
        res.status(200).json({
            data: 'error'
        })
    }
}