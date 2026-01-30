import Controls from "@/components/ui/Controls";
import { tableHeadings } from "@/lib/constants/table-constants";

const Table = () => {
  return (
    <section className="mt-10 flex flex-col items-center gap-y-3">
      <Controls />
      <table className="w-full text-center">
        <thead>
          <tr className="bg-navbar-bg text-text-primary text-xl font-bold">
            {tableHeadings.map((h, i) => (
              <th className="py-2 px-1 border border-borders" key={i}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-navbar-bg text-text-primary text-xl font-medium">
            <td className="py-2 px-1 border border-borders">Apple Inc.</td>
            <td className="py-2 px-1 border border-borders">AAPL</td>
            <td className="py-2 px-1 border border-borders">Stock</td>
            <td className="py-2 px-1 border border-borders">172.8</td>
            <td className="py-2 px-1 border border-borders">Technology</td>
            <td className="py-2 px-1 border border-borders">980000</td>
            <td className="py-2 px-1 border border-borders">2026-01-20</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
