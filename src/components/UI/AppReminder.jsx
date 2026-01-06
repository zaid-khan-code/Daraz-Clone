import React from "react";

const AppReminder = () => {
  return (
    <>
      <div
        className="w-48 p-1 h-86 flex flex-col gap-1"
        style={{
          background:
            "linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0)), linear-gradient(179.27deg, #ffedd6 0.83%, #ffc3e3 46.78%, #fff 99.57%), linear-gradient(0deg, #fff, #fff)",
        }}
      >
        <div className="flex flex-row items-center gap-1.5">
          <div className="inline-flex h-10 w-10">
            <picture
              className="inline-flex h-full max-h-full max-w-full w-full
"
            >
              <source
                srcSet="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg_.avif"
                type="image/avif"
              />
              <source
                srcSet="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg_.webp"
                type="image/webp"
              />
              <img
                src="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg"
                alt="Daraz App"
                className="inline-block h-auto max-h-full max-w-full object-cover w-auto
"
              />
            </picture>
          </div>
          <span className="text-[#6c1d00] text-sm font-medium leading-[18px] ml-[6px] max-w-[138px] line-clamp-2">
            TRY DARAZ APP
          </span>
        </div>

        {/* Content Section - Orange Background */}
        <div className="bg-[url('https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01tceZus1IewufOY1tZ_!!6000000000919-2-tps-364-316.png')] bg-no-repeat bg-size-[100%_auto] h-[158px] mt-[6px] overflow-hidden w-full">
          {/* Rating and Download Text */}

          <div className="score text-white ml-[8px] mt-[8px] flex flex-row flex-items-center">
            <div className="common-img star h-[11px] w-[10px] inline-flex">
              <picture className="inline-flex h-full max-h-full max-w-full w-full">
                <source
                  srcset="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01cAMOjU1zqQJZU8EbT_!!6000000006765-2-tps-19-18.png_80x80q80.png_.avif"
                  type="image/avif"
                />
                <source
                  srcset="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01cAMOjU1zqQJZU8EbT_!!6000000006765-2-tps-19-18.png_80x80q80.png_.webp"
                  type="image/webp"
                />
                <img
                  className="inline-block h-auto max-h-full max-w-full w-auto object-cover"
                  src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01cAMOjU1zqQJZU8EbT_!!6000000006765-2-tps-19-18.png_80x80q80.png"
                />
              </picture>
            </div>
            <span className="rated-txt text-[10px] font-medium leading-[7px] ml-[2px] max-w-[56px] overflow-hidden text-ellipsis whitespace-nowrap">
              4.8 Rated
            </span>
          </div>
          <div className="enjoy-tips-wrap flex justify-center mt-[6px] min-h-[30px]">
            <span className="enjoy-tips two-line-clamp text-white text-[12px] font-medium max-w-[164px] text-center line-clamp-2">
              Download the App now
            </span>
          </div>

          <div className="free-voucher mt-[6px] pl-[33px]">
            <div className="icon-item flex flex-row items-center mt-2">
              <div className="common-img badge inline-flex h-[36px] w-[36px]">
                <picture className="inline-flex h-full max-h-full max-w-full w-full">
                  <source
                    srcset="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png_.avif"
                    type="image/avif"
                  />
                  <source
                    srcset="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png_.webp"
                    type="image/webp"
                  />
                  <img
                    className="inline-block h-auto max-h-full max-w-full w-auto object-cover"
                    src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png"
                  />
                </picture>
              </div>
              <span className="txt two-line-clamp text-white text-[14px] font-medium leading-[15px] ml-[9px] max-w-[82px] line-clamp-2">
                Free Shipping
              </span>
            </div>
            <div className="icon-item flex flex-row items-center mt-2">
              <div className="common-img badge inline-flex h-[36px] w-[36px]">
                <picture className="inline-flex h-full max-h-full max-w-full w-full">
                  <source
                    srcset="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png_.avif"
                    type="image/avif"
                  />
                  <source
                    srcset="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png_.webp"
                    type="image/webp"
                  />
                  <img
                    className="inline-block h-auto max-h-full max-w-full w-auto object-cover"
                    src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png"
                  />
                </picture>
              </div>
              <span className="txt two-line-clamp text-white text-[14px] font-medium leading-[15px] ml-[9px] max-w-[82px] line-clamp-2">
                Exclusive Vouchers
              </span>
            </div>
          </div>
        </div>
        <div className="module-qr mt-1.5">
          <div className="content flex flex-row items-center">
            <div className="common-img qr-code-image inline-flex bg-white h-[90px] w-[90px] mr-[6px] overflow-hidden">
              <picture className="inline-flex h-full max-h-full max-w-full w-full">
                <source
                  srcset="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01jHjmpl1pxcRVgFrYS_!!6000000005427-0-tps-150-150.jpg_360x360q80.jpg_.avif"
                  type="image/avif"
                />
                <source
                  srcset="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01jHjmpl1pxcRVgFrYS_!!6000000005427-0-tps-150-150.jpg_360x360q80.jpg_.webp"
                  type="image/webp"
                />
                <img
                  className="inline-block h-auto max-h-full max-w-full w-auto object-cover border-0"
                  src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01jHjmpl1pxcRVgFrYS_!!6000000005427-0-tps-150-150.jpg_360x360q80.jpg"
                />
              </picture>
            </div>
            <div className="download-btn flex flex-col justify-between h-[60px] cursor-pointer">
              <a
                href="https://apps.apple.com/pk/app/daraz-online-shopping-app/id978058048"
                className="btn btn-1 bg-[url('https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01uAl8kB1wEv2DNjdhB_!!6000000006277-2-tps-125-36.png')] bg-[length:100%_auto]  h-[24px]  w-[83px]  bg-transparent "
              ></a>
              <a
                href="https://play.google.com/store/apps/details?id=com.daraz.android"
                className="btn btn-2 bg-[url('https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01QJGFfc1S0mKngu4rQ_!!6000000002185-2-tps-125-36.png')] bg-[length:100%_auto] h-[24px] w-[83px] bg-transparent"
              ></a>
            </div>
          </div>
          <span className="download-tips two-line-clamp text-[#2e3346] text-[10px] font-medium leading-[12px] ml-[4px] mt-[6px] line-clamp-2">
            Download the App Now!
          </span>
        </div>
      </div>
    </>
  );
};

export default AppReminder;
