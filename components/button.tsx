import React from 'react';

import { cls } from '../libs/utils';

type ButtonProps = {
  large?: boolean;
  text: string;
  [key: string]: any;
};

export const Button: React.FC<ButtonProps> = ({
  large = false,
  onClick,
  text,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cls(
        'w-full bg-orange-500 hover:bg-orange-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none',
        large ? 'py-3 text-base' : 'py-2 text-sm ',
      )}
    >
      {text}
    </button>
  );
};
