import Vue from 'vue'
import Home from '../App.vue'
import DashBoard from '../views/DashBoardPage.vue'
import KgManager from '../views/KgManager'
import KgEdit from '../views/KgEdit.vue'
import Vocabulary from '../views/Vocabulary.vue'
import AgentManager from '../views/AgentManager.vue'
import AgentTestManager from '../views/AgentTestManager.vue'
import DialogueStatistics from '../views/DialogueStatistics.vue'
import OperationLog from '../views/OperationLog.vue'
import AccountManage from "../views/AccountManage"
import SensitiveVocab from '../views/SensitiveVocab.vue'
import QAmanager from '../views/QAmanager.vue'
import CrawlerList from '../views/CrawlerList.vue'
import CrawlerNew from '../views/CrawlerNew.vue'
//import QAimport from '../views/QAimport.vue'
//import uploadExcel from '../views/uploadExcel.vue'


import test from '../views/test.vue';

import Left from '../views/Left'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import hello from '../views/hello'
const routes = [{
        path: '/',
        redirect: '/dashboard'
    }, {
        path: '/test',
        component: test
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard
    },
    {
        path: '/logs',
        name: 'logs',
        component: OperationLog
    },
    {
        path: '/userinfo',
        name: 'userinfo',
        component: AccountManage
    }, {
        path: '/KgManager',
        name: 'KgManager',
        component: KgManager
    }, {
        path: '/agent',
        name: 'AgentManager',
        component: AgentManager
    }, {
        path: '/agenttest',
        name: 'AgentTestManager',
        component: AgentTestManager
    }, {
        path: '/vocabulary',
        name: 'Vocabulary',
        component: Vocabulary
    }, {
        path: '/dialogue',
        name: 'dialogue',
        component: DialogueStatistics
    }, {
        path: '/hello',
        name: 'hello',
        component: hello
    }, {
        path: '/SensitiveVocab',
        name: 'SensitiveVocab',
        component: SensitiveVocab
    }, {
        path: '/QAmanager',
        name: 'QAmanager',
        component: QAmanager
    }, {
        path: '/KgEdit',
        name: 'KgEdit',
        component: KgEdit
    }, 
    {
        path: '/CrawlerList',
        name: 'CrawlerList',
        component: CrawlerList
    }, 
    {
        path: '/CrawlerNew',
        name: 'CrawlerNew',
        component: CrawlerNew
    }
]

const router = new VueRouter({
   // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router