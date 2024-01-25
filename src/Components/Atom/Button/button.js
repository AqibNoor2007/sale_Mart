import "./button.css";

const Button = ({
  defaultClass = "button",
  icon,
  content,
  onClick,
  varient,
  ...props
}) => {
  return (
    <button
      className={`${varient} ${defaultClass} `}
      onClick={onClick}
      {...props}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {icon} {content}
      </div>
    </button>
  );
};

export default Button;
