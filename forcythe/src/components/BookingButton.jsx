import React from 'react'
import { MdPlayArrow } from "react-icons/md";


function BookingButton() {
  return (
    <div className="relative w-fit group">
          <button
            data-cal-namespace=""
            data-cal-link="forcythe/discovery"
            data-cal-config='{"layout":"month_view"}'
            className="action-button custom-animate w-fit py-4 px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-lg font-bold relative z-10 group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"
          >
            Book a Call
            <MdPlayArrow className="text-lg" />
          </button>
          <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
        </div>
  )
}

export default BookingButton