import config from '../../config';
import * as Router from 'koa-router';
import * as ctrl from '../controllers/heroes';
import * as compose from 'koa-compose';
import { protectRoute } from '../middlewares/auth';

const router = new Router({
    prefix: `${config.api.baseURL}/heroes`,
});

router.use(protectRoute);

router.get('/', ctrl.getAll);
router.post('/', ctrl.save);
router.delete('/', ctrl.delHero);
router.post('/update', ctrl.updateHero);
router.get('/details', ctrl.heroDetails);

const routes = router.routes();
export default compose([routes]);
