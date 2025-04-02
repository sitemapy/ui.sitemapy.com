interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-blue-500 cursor-pointer text-white p-2 px-4 rounded hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
};
