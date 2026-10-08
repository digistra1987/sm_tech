import Image from 'next/image';
import Link from 'next/link';
import { footerData } from './CpFooter_mockdata';

const CpFooter = () => {
  return (
    <footer className="cp-footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="info-wrap">
            <Link
              href={footerData.logo.href}
              className="logo"
            >
              <Image
                src="/assets/images/footer-logo.png"
                alt="Company Logo"
                width={180}
                height={60}
              />
            </Link>
            <p className="desc">
              {footerData.description}
            </p>
            {/* Social Links */}
            <div className="social-link">
              {footerData.socialLink.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt="Social Media"
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="quick-link-wrap">
            <div className="quick-link">
              <h3 className="link-title">
                {footerData.quickLinksData.title}
              </h3>
              <ul className="link-list">
                {footerData.quickLinksData.links.map((item) => (
                  <li className="link-item" key={item.id}>
                    <Link className="link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
            <div className="quick-link">
              <h3 className="link-title">
                Our Services
              </h3>

              <ul className="link-list">
                {footerData.servicesLinksData.link.map((item) => (
                  <li className="link-item" key={item.id}>
                    <Link className="link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>
          {/* Contact Info */}
          <div className="contact-info-wrap">

            <h3 className="contact-title">
              {footerData.contactInfoData.title}
            </h3>

            {/* Address */}
            <div className="contact-item">

              <div className="contact-icon">
                <Image
                  src="/globe.svg"
                  alt="Address"
                  width={20}
                  height={20}
                />
              </div>

              <div className="contact-content">
                <span className="contact-label">
                  {footerData.contactInfoData.address.label}
                </span>

                <p className="contact-value">
                  {footerData.contactInfoData.address.value}
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="contact-item">

              <div className="contact-icon">
                <Image
                  src="/globe.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />
              </div>

              <div className="contact-content">

                <span className="contact-label">
                  {footerData.contactInfoData.phone.label}
                </span>
                <div className="contact-value">
                {footerData.contactInfoData.phone.value.map(
                  (phone, index) => (
                    <a className="contact-link"
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      key={index}
                    >
                      {phone}
                    </a>
                  )
                )}
</div>
              </div>

            </div>

            {/* Email */}
            <div className="contact-item">

              <div className="contact-icon">
                <Image
                  src="/globe.svg"
                  alt="Email"
                  width={20}
                  height={20}
                />
              </div>

              <div className="contact-content">

                <span className="contact-label">
                  {footerData.contactInfoData.email.label}
                </span>

                <a
                  href={`mailto:${footerData.contactInfoData.email.value}`}
                  className="contact-link"
                >
                  {footerData.contactInfoData.email.value}
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="bottom">
          <p className="copyright">
            {footerData.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default CpFooter;