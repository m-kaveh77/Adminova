import SectionTitle from "../../components/common/SectionTitle";
import LastProducts from "../../features/LastProducts/LastProducts";
import LastUsers from "../../features/LastUsers/LastUsers";
import ProductsTable from "../../features/ProductsTable/ProductsTable";
import Summaries from "../../features/Summaries/Summaries";
import SummaryChart from "../../features/Summaries/SummaryChart";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("ادمینوا - صفحه اصلی");

  return (
    <>
      <SectionTitle title="داشبورد" />

      <Summaries />
      <SummaryChart />
      <ProductsTable />

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <LastProducts />
        <LastUsers />
      </div>
    </>
  );
};

export default Home;
