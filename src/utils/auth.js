// 提供: 用户信息的保存,获取,删除操作

// sessionStorage中setItem getItem removeItem 需要约定好一个key
const KEY = 'htmm-pc-user-key'

/**
 * 设置用户信息
 *  @param {Object} user - 用户信息 {token,name,photo}
 * */


const setUser = user => {
  window.sessionStorage.setItem(KEY, JSON.stringify(user))
}
// 获取用户信息
const getUser = () => {
  // 获取用户信息的时候还没有存储用户的信息,此时获取的结果就是null:===>{}
  // 得到的是用户对象,将来通过对象 对象.token 获取信息
  return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
}

//删除用户信息
const delUser = () => {
    window.sessionStorage.removeItem(KEY)
}

export default {getUser,setUser,delUser}
