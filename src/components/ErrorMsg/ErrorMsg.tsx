import React from 'react';

import './ErrorMsg.scss';

interface ErrorMsgProps {
    msg: string;
}

const ErrorMsg: React.FC<ErrorMsgProps> = (props: ErrorMsgProps) => {

  return (
      <span className="error-msg">{ props.msg }</span>
  );
}

export default ErrorMsg;
