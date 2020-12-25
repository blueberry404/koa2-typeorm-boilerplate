import config from '../../config';
import * as Router from 'koa-router';
import * as ctrl from '../controllers/auth';
import * as compose from 'koa-compose';

const router = new Router({
    prefix: `${config.api.baseURL}/auth`,
});

router.post('/login', ctrl.loginUser);

const routes = router.routes();
export default compose([routes]);
