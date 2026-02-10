export type ButtonProps = {
  text: string;
  color?: 'green' | 'white';
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonWidth?: string;
  backgroundColor?: boolean;
  type?: 'button' | 'submit' | 'reset';
};
