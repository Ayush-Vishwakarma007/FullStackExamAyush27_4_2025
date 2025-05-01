import { GetServerSideProps } from 'next';
import { getReportById } from '../services/reportService';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { reportId } = context.params!;
  
  const report = await getReportById(reportId as string);

  if (!report) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      report,
    },
  };
};

const ReportDetail = ({ report }: { report: any }) => {
  if (!report) {
    return <p>Report not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Report Details</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Order ID</th>
            <th className="px-4 py-2 border-b">Total</th>
            <th className="px-4 py-2 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {report.items.map((item:any) => (
            <tr key={item.id}>
              <td className="px-4 py-2 border-b">{item.id}</td>
              <td className="px-4 py-2 border-b">${item.total}</td>
              <td className="px-4 py-2 border-b">{new Date(item.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportDetail;
