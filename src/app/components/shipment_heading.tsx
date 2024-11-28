import { useLanguageContext } from "../context/language_context";
import { ShipmentInfo } from "../models/shipment_info_model";
import Divider from "./divider";
import { CANCELLED_STATES, COMPLETED_STATES } from "../constants/shipment_state";
import { ProgressBar } from "./shipment_progress_bar";

interface ShipmentHeadingProps {
  shipment: ShipmentInfo;
}

export const ShipmentHeading = ({ shipment }: ShipmentHeadingProps) => {
  const { language, t } = useLanguageContext();
  const textAlign = language === "en" ? "text-left" : "text-right";

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      day: date.toLocaleDateString("en-GB", { day: "numeric" }),
      month: t(date.toLocaleDateString("en-GB", { month: "short" })),
      year: date.toLocaleDateString("en-GB", { year: "numeric" }),
      time: date.toLocaleTimeString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).replace(" ", ""),
      weekday: t(date.toLocaleDateString("en-US", { weekday: "long" })),
      formattedDate: date.toLocaleDateString("en-GB"), // dd/mm/yyyy format
    };
  };

  const timestamp = formatTimestamp(shipment.currentStatus?.timestamp.toDateString());

  const getStatusClass = (state: string) => {
    if (COMPLETED_STATES.includes(state)) return "text-green";
    if (CANCELLED_STATES.includes(state)) return "text-primary";
    return "text-yellow-300";
  };

  const InfoSection = ({
    label,
    value,
    className = "font-bold text-lg sm:text-xl",
  }: {
    label: string;
    value: string;
    className?: string;
  }) => (
    <div className="flex flex-col gap-2 text-start">
      <p className="text-gray-600 font-semibold text-base sm:text-lg">{label}</p>
      <p className={className}>{value}</p>
    </div>
  );

  return (
    <div className="border rounded-md mt-10 p-3 md:p-5">
      {/* Shipment Information Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:mb-5">
      <div className="col-span-2 lg:col-span-1">
        <InfoSection
        label={`${t("shipment number")} ${shipment.trackingNumber}`}
        value={t(shipment.currentStatus.state)}
        className={`font-bold text-lg sm:text-xl ${getStatusClass(
          shipment.currentStatus.state
        )}`}
        />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <InfoSection
        label={t("LAST_UPDATE")}
        value={`${timestamp.weekday} at ${timestamp.time} ${timestamp.formattedDate}`}
        />
      </div>
      <div className="col-span-2 lg:col-span-1 lg:ml-10">
        <InfoSection label={t("PROVIDER")} value={t(shipment.provider)} />
      </div>
      <div className="col-span-2 lg:col-span-1 lg:ml-10">
        <InfoSection
        label={t("PROMISED_DATE")}
        value={`${timestamp.day} ${timestamp.month} ${timestamp.year}`}
        />
      </div>
    </div>

      <Divider />

      {/* ProgressBar Section */}
      <ProgressBar />

      <div className="flex flex-row  justify-between p-1 md:p-5">
        {[
          "TICKET_CREATED",
          "PACKAGE_RECEIVED",
          "PACKAGE_OUT_FOR_DELIVERY",
          "PACKAGE_DELIVERED",
        ].map((key) => (
          <p key={key} className="font-semibold text-xs md:text-lg">
            {t(key)}
          </p>
        ))}
      </div>
    </div>
  );
};
