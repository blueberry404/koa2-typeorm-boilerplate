import config from '../../config';
import * as Router from 'koa-router';
import * as ctrl from '../controllers/users';
import * as compose from 'koa-compose';
import { protectRoute } from '../middlewares/auth';

const router = new Router({
    prefix: `${config.api.baseURL}/users`,
});

router.get('/', protectRoute, ctrl.getAll);
router.post('/', ctrl.signup);

const routes = router.routes();
export default compose([routes]);
