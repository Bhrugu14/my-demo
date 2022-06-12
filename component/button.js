import { useRef } from "react";
export const RippleButton = (props) => {
  const { title, onclickButton } = props;
  const rippleButtonRef = useRef(null);

  const onClickCapture = (e) => {
    console.log("SAD", e);
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    e.target.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
    }, 600); // 1second = 1000ms
    onclickButton(e);
  };
  return (
    <div
      ref={rippleButtonRef}
      className="ripple-button"
      onClick={onClickCapture}
      {...props}
    >
      {/* <a
        onClick={rippleButtonRef.current.click(onClickCapture)}
        style={{ backgroundColor: "red", flex: 1 }}
      > */}
      {title}
      {/* </a> */}
    </div>
  );
};
