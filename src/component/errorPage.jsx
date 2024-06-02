export default function ErrorPage() {
  return (
    <>
      <div
        className="container bg-[#10101E] w-screen h-screen grid
       justify-center content-center"
      >
        <img src="../../public/img/404.png" className="w-[40em]" />
        <h1 className="text-2xl mt-3 text-white text-center italic">
          Opps... Page Not Found !
        </h1>
      </div>
    </>
  );
}
