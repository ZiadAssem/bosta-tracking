import { FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ShipmentStates = {
    TICKET_CREATED: "TICKET_CREATED",
    PACKAGE_RECEIVED: "PACKAGE_RECEIVED",
    IN_TRANSIT: "IN_TRANSIT",
    OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",
    DELIVERED: "DELIVERED",
    CANCELLED: "CANCELLED",
    DELIVERED_TO_SENDER: "DELIVERED_TO_SENDER",
};

const shipmentProgressMap = [
    // { state: ShipmentStates.TICKET_CREATED, label: "Ticket Created" },
    { state: ShipmentStates.IN_TRANSIT, label: "In Transit" },
    { state: ShipmentStates.OUT_FOR_DELIVERY, label: "Out for Delivery" },
    { state: ShipmentStates.DELIVERED, label: "Delivered" },
];
const shipmentIndicatorMap = [
    { state: ShipmentStates.TICKET_CREATED, label: "Ticket Created" },
    { state: ShipmentStates.IN_TRANSIT, label: "In Transit" },
    { state: ShipmentStates.OUT_FOR_DELIVERY, label: "Out for Delivery" },
    { state: ShipmentStates.DELIVERED, label: "Delivered" },
];

export const ShipmentProgressBar = () => {
    const { shipment } = useSelector((state: RootState) => state.shipment);

    // Get the current shipment state
    const currentState = shipment?.currentStatus?.state;

    // Determine the color based on state
    const getStepColor = (stepState: string) => {
        if (
            (currentState === ShipmentStates.CANCELLED ||
                currentState === ShipmentStates.DELIVERED_TO_SENDER) && stepState !== ShipmentStates.DELIVERED
        ) {
            console.log('step state', stepState)
            return "bg-primary"; // Cancelled states
        }
        if (
            shipmentProgressMap.findIndex((step) => step.state === stepState) <=
            shipmentProgressMap.findIndex((step) => step.state === currentState)
        ) {
            return "bg-green"; // Completed or current state
        }
        return "bg-gray-300"; // Pending states
    };

    return (
        <div className="flex items-center w-full mt-5 p-5 justify-between">

            {shipmentProgressMap.map((step, index) => (
                <div key={step.state} className="flex items-center justify flex-1">
                    {/* Step Icon */}
                    <div
                        className={`relative z-10 w-6 h-6 flex items-center justify-center rounded-full text-white ${getStepColor(
                            step.state + 1
                        )}`}
                    >
                        <FaCheck />
                    </div>

                    {/* Progress Line */}
                    {index < shipmentProgressMap.length && (
                        <div
                            className={`h-1.5 flex-grow ${getStepColor(
                                shipmentIndicatorMap[index + 1]?.state
                            )}`}
                            role="separator"
                        >
                        </div>
                    )}

                </div>
            ))}
            <div className={` ${getStepColor(ShipmentStates.DELIVERED)}  w-6 h-6 flex items-center justify-center rounded-full text-white `}
            >
                <FaCheck />
            </div>

        </div>
    );
};
