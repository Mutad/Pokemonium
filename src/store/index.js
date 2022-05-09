
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

const database = new VuexORM.Database();

export default new Vuex.Store({
    plugins: [VuexORM.install(database)]
})
