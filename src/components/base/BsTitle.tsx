'use client';

interface Props {
  tag?: string;
  title: string;
  desc?: string;
  secTitleBoldTxt?: string;
  secTypeClass?: string;
}

const BsTitle = (prop: Props) => {
  return (
    <>
      {prop.secTypeClass === 'typ-capabilities' ? (
        <div className="title-wrap">
          {prop.tag && <span className="sec-tag">{prop.tag}</span>}
          {prop.title && (
            <h2 className="sec-title">
              {prop.title}{' '}
              <span className="sec-titleBold">
                {prop.secTitleBoldTxt}
              </span>
            </h2>
          )}
        </div>
      ) : (
        <>
          {prop.tag && <span className="sec-tag">{prop.tag}</span>}
          {prop.title && (
            <h2 className="sec-title">
              {prop.title}{' '}
              <span className="sec-titleBold">
                {prop.secTitleBoldTxt}
              </span>
            </h2>
          )}
        </>
      )}

      {prop.desc && <p className="sec-desc">{prop.desc}</p>}
    </>
  );
};

export default BsTitle;