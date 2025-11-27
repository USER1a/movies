import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

/**
 * Neon & Retro logo for ZANEFLIX navigation bar.
 * Features flickering neon text effect.
 */
const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      title="ZANEFLIX"
      onClick={() => navigate("/")}
      className="cursor-pointer font-mono text-5xl font-bold"
    >
      <span className={styles.flickerL + " text-white"}>Z</span>
      <span
        className={styles.flickerS + " text-white"}
        style={{ marginLeft: "-0.25em" }}
      >
        F
      </span>
    </div>
  );
};

export default Logo;
