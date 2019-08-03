import React from 'react';

import './ErrorMsg.scss';

interface ErrorMsgProps {
    msg: string;
}

const ErrorMsg: React.FC<ErrorMsgProps> = (props: ErrorMsgProps) => {

  return (
      <span className="error-msg">There's an error with the request, type another number. ({ props.msg })</span>
  );
}

export default ErrorMsg;
