import React from "react";

interface Props {
  message: string;
  [x: string]: any;
}

const FormError: React.FC<Props> = ({ message, style, ...props }) => {
  return (
    <div
      style={{ color: "red", fontWeight: "bold", letterSpacing: 1, ...style }}
      {...props}
    >
      {message}
    </div>
  );
};

export default FormError;
