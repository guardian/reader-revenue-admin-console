import * as express from 'express';
import * as http from 'http';
import { homepage } from './server/html';
import { SimpleAppBar } from './components/SimpleAppBar';
import { renderToString } from 'react-dom/server';

const app = express();

// Value is set to 1 for everything
// This is mainly to test the clientside .hydrate() functionality
// whereby React code will run in the browser re-render what it needs to
const initialAmounts = JSON.parse('{"ONE_OFF":{"GBPCountries":[{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"}],"UnitedStates":[{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"}],"EURCountries":[{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"}],"AUDCountries":[{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"}],"International":[{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"}],"NZDCountries":[{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"}],"Canada":[{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"},{"value":"1","spoken":"fixme"}]},"MONTHLY":{"UnitedStates":[{"value":"1","spoken":"seven"},{"value":"1","spoken":"fifteen"},{"value":"1","spoken":"thirty"}],"AUDCountries":[{"value":"1","spoken":"ten"},{"value":"1","spoken":"twenty"},{"value":"1","spoken":"forty"}],"GBPCountries":[{"value":"1","spoken":"two"},{"value":"1","spoken":"five"},{"value":"1","spoken":"ten"}],"EURCountries":[{"value":"1","spoken":"six"},{"value":"1","spoken":"ten"},{"value":"1","spoken":"twenty"}],"International":[{"value":"1","spoken":"five"},{"value":"1","spoken":"ten"},{"value":"1","spoken":"twenty"}],"NZDCountries":[{"value":"1","spoken":"ten"},{"value":"1","spoken":"twenty"},{"value":"1","spoken":"fifty"}],"Canada":[{"value":"1","spoken":"five"},{"value":"1","spoken":"ten"},{"value":"1","spoken":"twenty"}]},"ANNUAL":{"GBPCountries":[{"value":"1","spoken":"twenty five"},{"value":"1","spoken":"fifty"},{"value":"1","spoken":"one hundred"},{"value":"1","spoken":"two hundred and fifty"}],"UnitedStates":[{"value":"1","spoken":"twenty five"},{"value":"1","spoken":"fifty"},{"value":"1","spoken":"one hundred"},{"value":"1","spoken":"two hundred and fifty"}],"AUDCountries":[{"value":"1","spoken":"fifty"},{"value":"1","spoken":"one hundred"},{"value":"1","spoken":"two hundred and fifty"},{"value":"1","spoken":"five hundred"}],"EURCountries":[{"value":"1","spoken":"twenty five"},{"value":"1","spoken":"fifty"},{"value":"1","spoken":"one hundred"},{"value":"1","spoken":"two hundred and fifty"}],"International":[{"value":"1","spoken":"twenty five"},{"value":"1","spoken":"fifty"},{"value":"1","spoken":"one hundred"},{"value":"1","spoken":"two hundred and fifty"}],"NZDCountries":[{"value":"1","spoken":"fifty"},{"value":"1","spoken":"one hundred"},{"value":"1","spoken":"two hundred and fifty"},{"value":"1","spoken":"five hundred"}],"Canada":[{"value":"1","spoken":"twenty five"},{"value":"1","spoken":"fifty"},{"value":"1","spoken":"one hundred"},{"value":"1","spoken":"two hundred and fifty"}]}}');

app.get('/', (req, res, next) => {
    // We'll fetch and "hydrate" the amounts on the client
    // But I guess we could do it on the server if we want
    // Do we want renderToStaticMarkup here?
    const body = renderToString(SimpleAppBar({amounts: initialAmounts}));
    res.send(homepage(body));
});

app.use(express.static('dist/public'));

http.createServer(app).listen(7000);