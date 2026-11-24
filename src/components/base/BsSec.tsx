import BsTitle from './BsTitle';
import type { ReactNode } from 'react';

type Props = {
  secTypeClass?: string;
  showHead?: boolean;
  secTag?: string;
  secTitle?: string;
  secTitleBoldTxt?: string;
  secDesc?: string;
  secCont?: ReactNode;
};

const BsSec = (prop: Props) => {
  return (
    <div className={`bs-sec ${prop.secTypeClass || ''}`}>
      {prop.showHead && (
        <div className="sec-head">
          <div className="container">
            <BsTitle
              tag={prop.secTag ?? ''}
              title={prop.secTitle ?? ''}
              secTitleBoldTxt={prop.secTitleBoldTxt ?? ''}
              desc={prop.secDesc ?? ''}
              secTypeClass={prop.secTypeClass ?? ''}
            />
          </div>
        </div>
      )}

      <div className="sec-cont">
        {prop.secCont}
      </div>
    </div>
  );
};

export default BsSec;
