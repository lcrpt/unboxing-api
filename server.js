import express from 'express';
import routes from './server/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes(express.Router()));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`);
});
