/**
 * Created by lijinchao(joshua) on 17/2/14.
 */

module.exports = app => {
    class HomeService extends app.Service {
        * session1(ctx, userInfo) {
            this.ctx.session = {session:"1"}
        }

        * session2(ctx, userInfo) {
            this.ctx.session = {session:"2"}
        }
    }
    return HomeService;
};