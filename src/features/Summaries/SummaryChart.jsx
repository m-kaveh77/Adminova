import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { generateChartData } from "../../utils/home";
import CardTitle from "../../components/common/Card/CardTitle";

const data = generateChartData({
  productsLength: 100,
  usersength: 1000,
  ticketsLength: 50,
  commentsLength: 500,
});

const SummaryChart = () => {
  return (
    <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-6">
        <CardTitle
          title="آمار کلی سیستم"
          subTitle="مقایسه تعداد محصولات، کاربران، تیکت‌ها و کامنت‌ها"
        />
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
            barCategoryGap="25%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f1f1"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6b7280",
                fontSize: 13,
                fontFamily: "inherit",
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9ca3af",
                fontSize: 12,
                fontFamily: "inherit",
              }}
              tickFormatter={(value) =>
                new Intl.NumberFormat("fa-IR").format(value)
              }
            />

            <Tooltip
              cursor={{
                fill: "#f9fafb",
              }}
              contentStyle={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                direction: "rtl",
              }}
              labelStyle={{
                color: "#374151",
                fontWeight: 600,
                marginBottom: "4px",
              }}
              formatter={(value) => [
                new Intl.NumberFormat("fa-IR").format(value),
                "تعداد",
              ]}
            />

            <Bar
              dataKey="value"
              fill="#9333ea"
              radius={[8, 8, 0, 0]}
              maxBarSize={55}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default SummaryChart;
