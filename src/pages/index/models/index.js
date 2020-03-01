export default {
    namespace: 'index',
    state: {
       time: '初始化中',
       images: [
        'https://luckingus.oss-cn-hangzhou.aliyuncs.com/loving/WechatIMG17.jpeg',
        'https://luckingus.oss-cn-hangzhou.aliyuncs.com/loving/WechatIMG12.jpeg',
        'https://luckingus.oss-cn-hangzhou.aliyuncs.com/loving/WechatIMG13.jpeg',
        'https://luckingus.oss-cn-hangzhou.aliyuncs.com/loving/WechatIMG14.jpeg',   
        'https://luckingus.oss-cn-hangzhou.aliyuncs.com/loving/WechatIMG11.jpeg', 
        'https://luckingus.oss-cn-hangzhou.aliyuncs.com/loving/WechatIMG16.jpeg',
        'https://luckingus.oss-cn-hangzhou.aliyuncs.com/loving/WechatIMG18.jpeg',
        'https://luckingus.oss-cn-hangzhou.aliyuncs.com/loving/WechatIMG19.jpeg',
          ],
       //audio: 'https://gw.alipayobjects.com/mdn/rms_5a3769/afts/file/A*J8viRpimNkIAAAAAAAAAAABkARQnAQ'  
    },
    reducers: {
        setState(state, {payload}) {
            return {...state, ...payload};
        }
    },
    effects: {
        *init(action, { call, put }) {
            yield put({type: 'setState', payload: {time: calcTime()}});
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
          history.listen(({ pathname }) => {
            if (pathname === '/') {
              setInterval(()=>{
                dispatch({
                    type: 'init',
                  });
              }, 1000);
            }
          });
        },
      },
}


function calcTime(){
    const cur = new Date().getTime();
    const his = new Date('2015/09/18 00:00').getTime();
    const duration = cur - his;
    const days = Math.floor(duration / (24 * 3600 * 1000));
    const leave1 = duration % (24 * 3600 * 1000);
    const hours = Math.floor(leave1 / (3600 * 1000));
    const leave2 = leave1 % (3600 * 1000);
    const minutes = Math.floor(leave2 / (60 * 1000));
    const leave3 = leave2 % (60 * 1000);
    const seconds = Math.round(leave3 / 1000);
    return  "相爱 "+ days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒";
}

