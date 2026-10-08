import BsTitle from './BsTitle';

type props = {
  secTypeClass?: string;
  showHead?: boolean;
  secTag?: string;
  secTitle?: string;
  secTitleBoldTxt?: string;
  secDesc?: string;
  secCont?: React.ReactNode;
  id?: string;
};

const BsSec = (prop: props) => {
  return (
    <>
      <section className={`bs-sec ${prop.secTypeClass || ""}`} id={`${prop.id || ""}`}>
        {prop.showHead && (
          <div
            className={`sec-head`}
          >
            <div className="container">
              <BsTitle
                tag={prop.secTag ?? ""}
                title={prop.secTitle ?? ""}
                secTitleBoldTxt={prop.secTitleBoldTxt ?? ''}
                desc={prop.secDesc ?? ""}
                secTypeClass={prop.secTypeClass ?? ''}
              />
            </div>
          </div>
        )}
        <div className={`sec-cont`}>
          {prop.secCont}
        </div>
      </section>
    </>
  );
};

export default BsSec;
