import FormInput from "./components/FormInput";
import LeafletMap from "./components/LeafletMap";

function App() {
  return (
    <div className="w-full min-h-screen font-rubik">
      <div className="w-full h-[200px] bg-fixed bg-cover bg-no-repeat bg-mobile md:bg-desktop flex flex-col items-center justify-center gap-[24px]">
        <h1 className="text-3xl text-white font-[500] md:mt-6">
          IP Adress Tracker
        </h1>
        <FormInput />
      </div>
      <LeafletMap />
    </div>
  );
}

export default App;
