import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import body from './components/body.vue'
import koudai from './components/koudai.vue'
import job from './views/job.vue'
import hhm from './components/job/hhm.vue'
import hh from './components/job/hh.vue'
import jobFooter from '@/components/job/jobfooter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Home,children:[
      {path:"/",component:body},
      {path:"index",component:body},
      {path:"koudai",component:koudai},
    ]},
    {path:"/job",component:job,children:[
      {path:"/hh-m",component:hhm},
      {path:"/hh",component:hh},
    ]},
  ]
})
