import React from "react";
import FewWordsStyle from "./css/FewWords.module.css";
import Image from "next/image";

const FewWords = () => {
  return (
    <div className={FewWordsStyle["words-container"]}>
      <div className="mt-3 mb-5 p-3">
        <div className="row">
          {/* Content Section */}
          <div className="col-lg-6 d-block d-lg-flex align-items-stretch order-2 order-lg-1">
            <div>
              <div className="d-lg-block d-none">
                <h2 className={FewWordsStyle["heading"]}>
                  A Few Words About Our Club
                </h2>
              </div>
                <div className="mt-4"></div>
              <p className={FewWordsStyle["passage"]}>
                You will enjoy a premier journey for sports, leisure, and
                wellness in the heart of Fujairah. Established with a vision to
                promote an active and healthy lifestyle, our club offers a wide
                range of top-class facilities and services designed to cater to
                the needs of families, fitness enthusiasts, and professional
                athletes alike.
              </p>
              <p className={FewWordsStyle["passage"]}>
                At Tennis & Country Club Fujairah, our mission is to create a
                vibrant community where members and guests can enjoy top-tier
                sports facilities, engage in healthy activities, and build
                lasting relationships. We are committed to fostering a welcoming
                environment that encourages physical fitness, relaxation, and
                social interaction.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 d-block d-lg-flex align-items-stretch order-1 order-lg-2 mb-4 mb-lg-0">
            <div>
              <div className="d-lg-none d-block">
                <h2 className={FewWordsStyle["sml-heading"]}>
                  A Few Words About Our Club
                </h2>
              </div>
              <Image
                src="/images/home/Tennis-2.jpg"
                className="img-fluid w-100 h-100 mt-4 mt-lg-0"
                alt="Tennis Club"
                layout="responsive"
                width={16} height={9}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FewWords;
