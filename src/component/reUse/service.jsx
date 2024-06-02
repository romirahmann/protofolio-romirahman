/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function ItemService(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <div
        ref={ref}
        className="service bg-bg-service bg-center bg-cover p-2 md:p-5 md:ms-auto md:me-auto flex rounded-3xl"
      >
        <img src={props.srcImg} className="w-14 md:w-24 rounded-3xl" />
        <div className="ket flex flex-col justify-center content-center ms-5 text-black">
          <h1 className="text-xl md:text-3xl font-bold">{props?.title}</h1>
          <h1 className="text-lg md:text-2xl font-medium">
            {inView ? (
              <CountUp end={props?.total} duration={2.75} />
            ) : (
              <span>0</span>
            )}{" "}
            Project
          </h1>
        </div>
      </div>
    </>
  );
}
