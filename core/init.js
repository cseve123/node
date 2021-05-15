const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManger {
    static initCore (app) {
        InitManger.app = app
        InitManger.initLoadRouters()
    }

    static initLoadRouters () {
        // 绝对路径
        const dir = `${process.cwd()}/app/api`
        requireDirectory(module, dir, {
            visit: whenLoadMoule
        })
        function whenLoadMoule (obj) {
            if (obj instanceof Router) {
                InitManger.app.use(obj.routes())
            }
        }
    }
}

module.exports = InitManger