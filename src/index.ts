import { competitionRouter } from './Router/competitionRouter';
import { resultRouter } from './Router/resultRouter';
import app from './app';

app.use('/competition', competitionRouter)
app.use('/result', resultRouter)