import pureHttp from 'pure-http';

const app = pureHttp();

app.get('/ping', (req, res) => res.send('pong'));

app.listen(3030, () => console.log('...'));
