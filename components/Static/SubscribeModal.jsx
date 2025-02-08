"use client";
import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import ModalStyles from "./Navbar.module.css";
import commonStyles from "../services/css/CommonStyle.module.css";
import NewsletterForm from "./NewsletterForm";

const SubscribeModal = () => {
  const [ModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const STORAGE_KEY = "newsletter_subscription";
    const MODAL_KEY = "modal_shown_times";

    if (localStorage.getItem(STORAGE_KEY) === "subscribed") return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentDate = now.toDateString();

    const timeSlots = {
      morning: [6, 12],
      afternoon: [12, 16],
      evening: [16, 20],
      night: [20, 24],
    };

    let currentSlot = null;
    for (const slot in timeSlots) {
      const [start, end] = timeSlots[slot];
      if (currentHour >= start && currentHour < end) {
        currentSlot = slot;
        break;
      }
    }

    if (!currentSlot) return;

    let modalHistory = JSON.parse(localStorage.getItem(MODAL_KEY)) || {};
    if (modalHistory[currentDate]?.includes(currentSlot)) return;

    setModalVisible(true);

    modalHistory[currentDate] = modalHistory[currentDate] || [];
    modalHistory[currentDate].push(currentSlot);
    localStorage.setItem(MODAL_KEY, JSON.stringify(modalHistory));
  }, []);

  const handleSubscribe = () => {
    localStorage.setItem("newsletter_subscription", "subscribed");
    setModalVisible(false);
  };

  return (
    <div>
      <Dialog
        header={null} // Remove default header to use custom close button
        visible={ModalVisible}
        style={{ width: "75vw", position: "relative" }}
        onHide={() => setModalVisible(false)}
      >
        {/* Close Icon */}
        <button
          className={ModalStyles.closeButton}
          onClick={() => setModalVisible(false)}
        >
          <i className="bx bx-x"></i>
        </button>

        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-md-6 p-0 d-none d-md-block">
              <img
                src="/images/common/modal-banner.png"
                className={ModalStyles["modalImagePopup"]}
                alt="Subscribe For More Updates"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center p-0 col-12">
              <div className="p-3 p-md-5">
                <h3 className={commonStyles["heading"]}>
                  Subscribe for the updates!
                </h3>
                <NewsletterForm mode="modal" onSubscribe={handleSubscribe} />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SubscribeModal;
