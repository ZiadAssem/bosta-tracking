import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CANCELLED_STATES, COMPLETED_STATES, DELIVERING, PENDING, PENDING_STATES } from "../constants/shipment_state";
import { FaCheck } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

export const ProgressBar = () => {
    const { shipment } = useSelector((state: RootState) => state.shipment);
    const currentState = shipment?.currentStatus?.state;
    const isCancelled = CANCELLED_STATES.includes(currentState!) ? "bg-primary" : "";
    const isPending = PENDING.includes(currentState!) ? "bg-yellow-300" : "bg-gray-300";
    const isOutForDelivery = DELIVERING.includes(currentState!) ? "bg-yellow-300" : "bg-gray-300";
    const isCompleted = COMPLETED_STATES.includes(currentState!) ? "bg-green" : "bg-gray-300";

    const step_1 = isCompleted || isPending || isOutForDelivery;
    const step_2 = isCompleted || isOutForDelivery;
    const step_3 = isCompleted;

    return (
        <div className="flex items-center justify-between w-full mt-5 p-3 sm:p-5">
            <div
                className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-white ${step_1} ${isCancelled}`}
            >
                <FaCheck />
            </div>
            <div className={`h-1 sm:h-2 flex-grow ${step_1} ${isCancelled}`} role="separator"></div>
            <div
                className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-white ${step_1} ${isCancelled}`}
            >
                {step_2 ? <FaCheck /> : <LuPackageCheck />}
            </div>
            <div className={`h-1 sm:h-2 flex-grow ${step_2} ${isCancelled}`} role="separator"></div>
            <div
                className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-white ${step_2} ${isCancelled}`}
            >
                {!step_3 ? <FaCheck /> : <FaTruckFast />}
            </div>
            <div className={`h-1 sm:h-2 flex-grow ${step_3}`} role="separator"></div>
            <div
                className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-white ${step_3}`}
            >
                {!step_3 ? <FaCheck /> : <FaSave />}
            </div>
        </div>
    );
};
