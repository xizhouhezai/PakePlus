const ENV = {
  TIMEOUT: 20000,
  BASE: {
    /**
     * @description api请求基础路径
     */
    API_DEV: {
      gateway: 'https://manager.lilishop.snmapp.com/api',
    },
    API_PROD: {
      gateway: 'https://manager.lilishop.snmapp.com/api',
    },
    /**
     * @description // 跳转买家端地址 pc端
     */
    PC_URL: 'https://buyer.lilishop.snmapp.com',
    /**
     * @description  // 跳转买家端地址 wap端
     */
    WAP_URL: 'https://buyer.lilishop.snmapp.com/h5',
    /**
     * @description  // 跳转卖家端地址
     */
    SELLER_URL: 'https://seller.lilishop.snmapp.com',
    /**
     *  @description api请求基础路径前缀
     */
    PREFIX: '',
  },
}

window.ENV = ENV
