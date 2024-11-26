import { useTranslation } from "react-i18next";
import question from '../../assets/images/question.jpg'

export const ReportProblem = () => {
    const { t } = useTranslation();


    return (
        <div className="flex-row flex items-center justify-around border rounded-lg mt-5 p-2">
            <img src={question} alt="question" className="h-28 object-contain" />
            <div className="flex-col flex gap-2">
            <p className="font-extrabold">{t('PROBLEM')}</p>
            <button className="bg-primary text-white font-bold py-2 px-4 rounded-xl">
                {t('REPORT_PROBLEM')}
            </button>
            </div>
        </div>
    )
}