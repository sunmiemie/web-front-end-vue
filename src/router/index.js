import Vue from 'vue'
import Router from 'vue-router'
import { verifyToken, returnToken, returnUsername } from '../api/nevt.js'
const Login = () => import('../view/login')
const Index = () => import('../view/index')
const Hydrogenation = () => import('../view/hydrogenation')
const Production = () => import('../view/production')
const TransportAll = () => import('../view/transport-all')
const TransportSimple = () => import('../view/transport-simple')
const Transport = () => import('../view/transport')
const ProductionAll = () => import('../view/production-all')
const ProductionSimple = () => import('../view/production-simple')
const StationSimple = () => import('../view/hydrogenation-simple')
const StationAll = () => import('../view/hydrogenation-all')
const MachineInfo = () => import('../view/machine-info')
const HCanAndCompressor = () => import('../view/h-can-and-compressor')
const FuelCellVehicle = () => import('../view/fuel-cell-vehicle')
const FuelCellVehicleAll = () => import('../view/fuel-cell-vehicle-all')
const FuelCellVehicleSimple = () => import('../view/fuel-cell-vehicle-simple')
const FuelCellVehicleSimpleFCInfo = () => import('../view/fuel-cell-vehicle-simple-fc-info')

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
Vue.use(Router)
const router = new Router({
    routes: [{
        path: '/',
        name: 'login redirect',
        redirect: '/login',
        component: Login
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
    },
    {
        path: '/hydrogenation',
        name: 'hydrogenation',
        redirect: '/hydrogenation/station-all',
        component: Hydrogenation,
        children: [{
            path: 'station-simple',
            name: 'station-simple',
            component: StationSimple
        }, {
            path: 'station-all',
            name: 'station-all',
            component: StationAll,
        }],
    },
    {
        path: '/h-production',
        name: 'h-production',
        redirect: '/h-production/production-all',
        component: Production,
        children: [{
            path: 'production-simple',
            name: 'production-simple',
            component: ProductionSimple
        }, {
            path: 'production-all',
            name: 'production-all',
            component: ProductionAll,
        }]
    },
    {
        path: '/h-transportation',
        name: 'h-transportation',
        redirect: "/h-transportation/transport-all",
        component: Transport,
        children: [{
            path: 'transport-simple',
            name: 'transport-simple',
            component: TransportSimple
        }, {
            path: 'transport-all',
            name: 'transport-all',
            component: TransportAll,
        }]
    },
    {
        path: '/hydrogenation/station-simple/h-machine',
        name: 'hydrogenation-machine',
        component: MachineInfo,
    },
    {
        path: '/hydrogenation/station-simple/h-can-compressor',
        name: 'h-can-compressor',
        component: HCanAndCompressor,
    },
    {
        path: '/fuel-cell-vehicle',
        name: 'fuel-cell-vehicle',
        redirect: '/fuel-cell-vehicle/fuel-cell-vehicle-all',
        component: FuelCellVehicle,
        children: [{
            path: 'fuel-cell-vehicle-simple',
            name: 'fuel-cell-vehicle-simple',
            component: FuelCellVehicleSimple
        }, {
            path: 'fuel-cell-vehicle-all',
            name: 'fuel-cell-vehicle-all',
            component: FuelCellVehicleAll
        }]
    },
    {
        path: '/fuel-cell-vehicle/fuel-cell-vehicle-simple/fc-info',
        name: "fuel-cell-vehicle-simple-fc-info",
        component: FuelCellVehicleSimpleFCInfo,
    }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = returnToken();
        if (token === null || token === '') {
            // console.log("无效Token");
            confirm("请先登录!");
            next('/login');
        } else {
            verifyToken({
                username: returnUsername(),
            });
            next();
        }
    }
});
export default router;