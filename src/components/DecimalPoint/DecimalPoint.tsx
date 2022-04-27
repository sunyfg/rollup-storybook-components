import React, { FC } from 'react';
import classnames from 'classnames';
import './styles.less';

export interface IDecimalPointProps {
  className?: string;
  visible?: boolean;
}

export const DecimalPoint: FC<IDecimalPointProps> = ({ className, visible = true }) => (
  <div className={classnames('gw_decimal-point', className)} style={{ display: visible ? 'flex' : 'none' }}>
    <div className="gw_decimal-point--icon">
      <div className="icon_point--bg">
        <img
          src={'https://ow-file.sensorsdata.cn/official-website/gw_components/gw_decimal-point/20220427_icon_point.png'}
        />
      </div>
      <div className="gw_decimal-point--content">
        <img
          src={'https://ow-file.sensorsdata.cn/official-website/gw_components/gw_decimal-point/small_point_code.png'}
        />
        <p>关注我们</p>
      </div>
    </div>
    <ul className="gw_decimal-point__counsel-list">
      <li className="gw_decimal-point__counsel-item phone">
        <div className="gw_decimal-point__counsel-item-content">
          <p>欢迎拨打电话咨询</p>
          <p>400-650-9827</p>
        </div>
      </li>
      <li className="gw_decimal-point__counsel-item wechat">
        <div className="gw_decimal-point__counsel-item-content">
          <img
            src="https://ow-file.sensorsdata.cn/official-website/gw_components/gw_decimal-point/wechat_code.png"
            alt=""
          />
          <span>微信扫码 在线咨询</span>
        </div>
      </li>
      <li className="gw_decimal-point__counsel-item email">
        <div className="gw_decimal-point__counsel-item-content">
          <p>欢迎邮件咨询</p>
          <p>contact@sensorsdata.cn</p>
        </div>
      </li>
    </ul>
  </div>
);
