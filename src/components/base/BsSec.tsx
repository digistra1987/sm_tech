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
  id?: string;
};

const BsSec = (prop: Props) => {
  return (
    <section
      className={`bs-sec ${prop.secTypeClass || ''}`}
      id={prop.id || ''}
    >
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
    </section>
  );
};

export default BsSec;