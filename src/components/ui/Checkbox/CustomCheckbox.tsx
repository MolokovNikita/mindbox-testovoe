import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const handleCheckboxClick = () => {
    onChange();
  };

  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        border: !checked
          ? "2px solid #ddd"
          : "2px solid rgba(7, 175, 13, 0.36)",
        transition: "all 0.2s ease",
        position: "relative",
        marginRight: "10px",
        boxShadow: checked ? "inset 0 0 0 12px white" : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: checked ? "transparent" : "transparent",
          transition: "background-color 0.2s ease",
        }}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onClick={handleCheckboxClick}
        style={{
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      />

      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(7, 175, 13, 0.36)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            position: "relative",
            zIndex: 1,
            transition: "transform 0.2s ease",
            transform: checked ? "scale(1)" : "scale(0)",
          }}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
};

export default CustomCheckbox;
