import request from '@/request'

// 按VIN查询车辆实时数据
export const getCarDetails = (data) =>
  request({
    url: '/openapi/iov/business/deviceRealtime/getByVin.json',
    method: 'get',
    data: data,
    params: data
  })
// 全国车辆分布信息
export const getAllVehicles = (data) =>
  request({
    url: '/openapi/iov/business/device/getVehicleData.json',
    method: 'get',
    data: data,
    params: data
  })
// 车辆实时信息
export const getReatime = (data) =>
request({
  url: '/openapi/iov/business/device/getVehicleRealData.json',
  method: 'get',
  data: data,
  params: data
})
// 多车vin查询
export const getByVins = (data) =>
request({
  url: '/openapi/iov/business/location/getByVins.json	',
  method: 'post',
  data: data,
  params: data
})
// 每日运行数据
export const getRunDetail = (data) =>
request({
  url: '/openapi/iov/business/deviceDaily/getRunDetail.json',
  method: 'get',
  data: data,
  params: data
})
