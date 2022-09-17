import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { RippleButton } from "../component";
import { useEffect, useState } from "react";

const ChildComponent = ({ item, onClickDelete }) => {
  return (
    <div
      onClick={(e) => {
        alert("delete button is clicked");
      }}
    >
      {item.name}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClickDelete();
        }}
      >
        delete
      </button>
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([
    { name: "bhrugu" },
    { name: "bhrugu2" },
    { name: "bhrugu3" },
    { name: "bhrugu4" },
    { name: "bhrugu5" },
  ]);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <input
        value={searchText}
        type={"text"}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((i, k) => {
          console.log("searchText", searchText, !i.name.includes(searchText));
          if (!i.name.includes(searchText)) {
            return null;
          }
          return (
            <ChildComponent
              item={i}
              key={k}
              onClickDelete={() => {
                setData(data.filter((i, index) => index != k));
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
