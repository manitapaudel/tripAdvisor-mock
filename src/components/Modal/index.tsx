import React from "react";

type Ref = HTMLDivElement | null;

type ModalProps = {
  children: JSX.Element | string;
};

const Modal = React.forwardRef<Ref, ModalProps>(({ children }, ref) => {
  return (
    <div className="absolute top-0 right-0 w-full h-full bg-gray-50 bg-opacity-75">
      <div
        className="bg-white border border-gray-300 w-1/3 mx-auto rounded-md p-2 my-40 min-h-card"
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
});

export default Modal;
