import Image from "next/image";

type CoreValue = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

type CpCoreValueProps = {
  data: CoreValue[];
};

const CpCoreValue = ({ data }: CpCoreValueProps) => {
  return (
    <section className="cp-core-value">
      <div className="container">
        <div className="list">
          {data.map((value) => (
            <div className="item-wrap" key={value.id}>
              <div className="item">
                <div className={`icon ${value.icon}`}>
                  {/* <Image
                    src={value.icon}
                    alt={value.title}
                    width={50}
                    height={50}
                  /> */}
                </div>

                <h3 className="title">{value.title}</h3>

                <p className="desc">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CpCoreValue;
