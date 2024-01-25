const TestiCard = ({ className, children }) => {
  return (
    <>
      <div
        className={className}
        style={{
          backdropFilter: "blur(50px)",
          background: "hsla(0,0%,100%,.11)",
          borderRadius: " 20px",
          fontSize: "16px",
          lineHeight: " 22px",
          overflow: "hidden",
          padding: "50px 50px",
          position: "relative",
          width: " var(--card-width)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default TestiCard;
