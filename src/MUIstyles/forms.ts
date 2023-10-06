const modalBox = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#242424",
  border: "1px solid var(--primary)",
  borderRadius: "5px",
  boxShadow: "0px 0px 14px var(--primary)",
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
};

const modalHeader = { fontFamily: "var(--head-font)", color: "var(--primary)" };

const modalBtn = {
  color: "var(--secondary)",
  borderColor: "var(--secondary)",
  fontFamily: "var(--head-font)",
  "&:hover": { color: "var(--primary)" },
};

const modalAvatar = { m: 0, bgcolor: "var(--primary)", color: "#242424" };

const modalP = {
  margin: "-5px",
  color: "var(--secondary)",
  fontFamily: "var(--text-font)",
};
export { modalBox, modalHeader, modalBtn, modalAvatar, modalP };
