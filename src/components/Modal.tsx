import React from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="relative bg-white rounded-lg w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-5/6 overflow-hidden shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
        >
          ✕
        </button>

        {/* Google Drive PDF Viewer */}
        <iframe
          src="https://drive.google.com/file/d/1lLC0ri7gc6k-r_biubdstB1vzM4g80yQ/preview"
          className="w-full h-full p-7"
          style={{ border: "none" }}
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
