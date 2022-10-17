import Koa from 'koa';

import { kofi } from '@ko-fi/koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

kofi(router, {
    endpoint: '/webhook',
    onData: (data, req) => {
        console.log('onData called');
    },
    onCommission: (data, req) => {
        console.log('onCommission called');
    },
    onDonation: (data, req) => {
        console.log('onDonation called');
    },
    onShopOrder: (data, req) => {
        console.log('onShopOrder called');
    },
    onSubscription: (data, req) => {
        console.log('onSubscription called');
    },
    onError: (err, req) => {
        console.error('onError called');
    },
    verificationToken: 'token',
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
