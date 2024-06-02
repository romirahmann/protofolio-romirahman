/* eslint-disable no-unused-vars */
export default function TechStack() {
  const grayscaleStyle = {
    filter: "grayscale(100%)",
    transition: "filter 0.3s ease-in-out",
  };
  const normalStyle = {
    filter: "none",
    transition: "filter 0.3s ease-in-out",
  };
  return (
    <>
      <div className="container p-0 overflow-x-hidden">
        <div className="techLogo p-4 md:p-8 rounded-[1em] bg-[#0C0C17] grid grid-cols-1 md:grid-cols-7 place-items-center">
          <img
            src="./../../public/img/html.png"
            className="w-10 m-2 md:m-0 max-w-full "
            alt=""
            style={grayscaleStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = normalStyle.filter)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = grayscaleStyle.filter)
            }
          />
          <img
            src="./../../public/img/css.png"
            className="w-10 m-2 md:m-0 max-w-full"
            alt=""
            style={grayscaleStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = normalStyle.filter)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = grayscaleStyle.filter)
            }
          />
          <img
            src="./../../public/img/js.png"
            className="w-10 m-2 md:m-0 max-w-full"
            alt=""
            style={grayscaleStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = normalStyle.filter)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = grayscaleStyle.filter)
            }
          />
          <img
            src="./../../public/img/tailwind.png"
            className="w-10 m-2 md:m-0 max-w-full"
            alt=""
            style={grayscaleStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = normalStyle.filter)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = grayscaleStyle.filter)
            }
          />
          <img
            src="./../../public/img/node.png"
            className="w-10 m-2 md:m-0 max-w-full"
            alt=""
            style={grayscaleStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = normalStyle.filter)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = grayscaleStyle.filter)
            }
          />
          <img
            src="./../../public/img/angular.png"
            className="w-10 m-2 md:m-0 max-w-full"
            alt=""
            style={grayscaleStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = normalStyle.filter)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = grayscaleStyle.filter)
            }
          />
          <img
            src="./../../public/img/react.png"
            className="w-10 m-2 md:m-0 max-w-full"
            alt=""
            style={grayscaleStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = normalStyle.filter)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = grayscaleStyle.filter)
            }
          />
        </div>
      </div>
    </>
  );
}
