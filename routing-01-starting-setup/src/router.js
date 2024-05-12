
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFoundPage from './components/nav/NotFoundPage.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      {
        path: '/teams',
        name: 'teams',
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true,
          },
        ],
      }, // our-domain.com/teams => TeamsList //, alias : '/'
      { path: '/users', components: { default: UsersList, footer: UsersFooter },
          beforeEnter(to,from,next){
              console.log('users beforeEnter');
              console.log(to,from);
              next();
          }
      }, // our-domain.com/users => UsersList
  
      { path: '/:notFound(.*)', component: NotFoundPage },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
      console.log(to, from, savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    },
  });
  
  router.beforeEach(function (to, from, next) {
    console.log(to, from);
    // if(to.name === 'team-members'){
    //     next()
    // }else {
    //     next({name: 'team-members', params : {teamId : 't2'}});
    // }
    next();
  });
  
  router.afterEach(function(to,from){
      //sending analytics data
       console.log('global afterEach');
      console.log(to,from);
  })


  export default router