export type ButtonProps = {
  text: string;
  color?: 'green' | 'white';
  to?: string;
  onClick?: () => void;
  buttonWidth?: string;
  backgroundColor?: boolean;
  type?: 'button' | 'submit' | 'reset';
};
