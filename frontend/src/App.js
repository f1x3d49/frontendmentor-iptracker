import React, { useState, useEffect, useCallback } from "react";
import FormInput from "./components/FormInput";
import "leaflet/dist/leaflet.css";
import LeafletMap from "./components/LeafletMap";
import axios from "axios";
import DisplayTab from "./components/DisplayTab";

function App() {
  const [IP, setIP] = useState("192.212.174.101");
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  //Geo API Call
  const fetchData = useCallback(() => {
    axios.get(`http://ip-api.com/json/${IP}`).then((res) => {
      setInfo(res.data);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      console.log(res.data);
    });
  }, [setInfo, IP]);

  return (
    <div className="w-full min-h-screen font-rubik">
      <div className="w-full h-[200px] bg-fixed bg-cover bg-no-repeat bg-mobile md:bg-desktop flex flex-col items-center justify-center gap-[24px] ">
        <h1 className="text-3xl text-white font-[500] md:mt-6">
          IP Adress Tracker
        </h1>
        <FormInput
          ip={IP}
          setIP={setIP}
          setInfo={setInfo}
          fetchData={fetchData}
        />
        {info && <DisplayTab info={info} loading={loading} />}
      </div>
      {info && <LeafletMap info={info} />}
    </div>
  );
}

export default App;
