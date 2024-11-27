import { useTranslation } from "react-i18next";
import question from '../../assets/images/question.jpg'

export const ReportProblem = () => {
    const { t } = useTranslation();

    return (
        <div className="flex mt-5 flex-col sm:flex-row items-center justify-around border rounded-lg p-5 gap-5">
            <img src={question} alt="question" className="h-20 sm:h-28 object-contain" />
            <div className="flex flex-col items-center sm:items-start gap-2">
                <p className="font-extrabold">{t('PROBLEM')}</p>
                <button className="bg-primary text-white font-bold py-2 px-4 rounded-xl w-full">
                    {t('REPORT_PROBLEM')}
                </button>
            </div>
        </div>
    );
};
