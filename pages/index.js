import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { RippleButton } from "../component";

export default function Home() {
  return (
    <div className="wrapper">
      <p>Ripple Buttons with Toast</p>
      <section style={{ display: "flex", flexDirection: "row" }}>
        <RippleButton
          style={{ backgroundColor: "grey" }}
          onclickButton={() => toast.info("Information Toast!")}
          title={"info"}
        />
        <RippleButton
          style={{ backgroundColor: "rgb(21, 160, 3" }}
          onclickButton={() => toast.success("Success Toast!")}
          title={"success"}
        />
        <RippleButton
          style={{ backgroundColor: "red" }}
          onclickButton={() => toast.error("Warning Toast!")}
          title={"error"}
        />
        <RippleButton
          style={{ backgroundColor: "rgb(131, 129, 2)" }}
          onclickButton={() => toast.warning("Warning Toast!")}
          title={"warning"}
        />
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
}
