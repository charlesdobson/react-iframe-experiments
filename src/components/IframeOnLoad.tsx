import { useState } from "react";

const IframeOnLoad = () => {
  const [isSameOriginLoaded, setIsSameOriginLoaded] = useState(false);
  const [sameOriginSrcDoc, setSameOriginSrcDoc] = useState<
    string | undefined
  >();

  const [isCrossOriginLoaded, setIsCrossOriginLoaded] = useState(false);
  const [crossOriginSrc, setCrossOriginSrc] = useState<string | undefined>();

  const onSameOriginLoad = () => {
    console.log("onSameOriginLoad");
    setIsSameOriginLoaded(true);
  };

  const onCrossOriginLoad = () => {
    console.log("onCrossOriginLoad");
    setIsCrossOriginLoaded(true);
  };

  const onSameOriginClear = () => {
    console.log("onSameOriginClear");
    setSameOriginSrcDoc(undefined);
    setIsSameOriginLoaded(false);
  };

  const onCrossOriginClear = () => {
    console.log("onCrossOriginClear");
    setCrossOriginSrc(undefined);
    setIsCrossOriginLoaded(false);
  };

  return (
    <div className="bg-slate-100 rounded-lg shadow-md p-10 grid grid-cols-2 auto-rows-auto gap-8">
      <iframe
        title="same-origin"
        className="bg-slate-200 rounded-lg w-full h-80"
        srcDoc={sameOriginSrcDoc ?? undefined}
        onLoad={onSameOriginLoad}
      />
      <iframe
        title="cross-origin"
        className="bg-slate-200 rounded-lg w-full h-80"
        src={crossOriginSrc}
        onLoad={onCrossOriginLoad}
      />
      <div>
        <button
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSameOriginSrcDoc("<div>inline html</div>")}
        >
          load same origin
        </button>
        <button
          className="ml-4 border-2 border-blue-400 hover:border-blue-600 text-blue-400 hover:text-blue-600 font-bold py-2 px-4 rounded"
          onClick={onSameOriginClear}
        >
          clear
        </button>
        {isSameOriginLoaded ? (
          <p className="mt-4 text-green-600 font-bold">same-origin loaded</p>
        ) : (
          <p className="mt-4 text-slate-400 font-bold">
            same-origin not loaded
          </p>
        )}
      </div>
      <div>
        <button
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCrossOriginSrc("https://www.example.com")}
        >
          load cross origin
        </button>
        <button
          className="ml-4 border-2 border-blue-400 hover:border-blue-600 text-blue-400 hover:text-blue-600 font-bold py-2 px-4 rounded"
          onClick={onCrossOriginClear}
        >
          clear
        </button>
        {isCrossOriginLoaded ? (
          <p className="mt-4 text-green-600 font-bold">cross-origin loaded</p>
        ) : (
          <p className="mt-4 text-slate-400 font-bold">
            cross-origin not loaded
          </p>
        )}
      </div>
    </div>
  );
};

export default IframeOnLoad;
