import Carousel from 'react-instagram-carousel';
import { connect } from 'dva';
import styles from './index.less';

export default connect(state =>({...state.index}))(function(props) { 
  return (
    <div className={styles.main}>
      {props.audio ? <audio src="https://gw.alipayobjects.com/mdn/rms_5a3769/afts/file/A*J8viRpimNkIAAAAAAAAAAABkARQnAQ" autoPlay loop /> : null}
      <Carousel
        backgroundSize={'cover'}
        images={props.images}
      />
      <div className={styles.modal} >
        <div className={styles['modal-dialog']}>
          <div className={styles['modal-content']} >
            <div className={styles['modal-header']}>
              <h2>the times we together</h2>
              <p>小蚂蚁 & 小青橙</p>
              <p>一路相伴, 感谢有你</p>
            </div>
            <div className={styles['modal-body']}>
              <p className={styles.time}>
                {props.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
});
