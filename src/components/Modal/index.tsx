import React from "react";

type Ref = React.ForwardedRef<HTMLDivElement> | null;

type ModalProps = {
  children: React.ReactNode;
};

const Modal = React.forwardRef<Ref, ModalProps>(({ children }, divRef) => {
  return (
    <div className="absolute top-0 right-0 w-full h-full bg-gray-700 bg-opacity-25">
      <div
        className="bg-gray-50 w-1/3 mx-auto rounded-md p-2 my-40 min-h-card"
        ref={divRef}
      >
        {children}
      </div>
    </div>
  );
});

export default Modal;
