import { generateSummaries } from "../../utils/home";
import SummaryCard from "./components/SummaryCard";

const Summaries = () => {
  const summaries = generateSummaries({
    productsLength: 100,
    usersength: 1000,
    ticketsLength: 50,
    commentsLength: 500,
  });

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {summaries.map((summary) => (
        <SummaryCard key={summary.id} {...summary} />
      ))}
    </div>
  );
};

export default Summaries;
