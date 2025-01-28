import Image from "next/image";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/assets/imgs/template/loading.gif"
                alt="jobBox"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
