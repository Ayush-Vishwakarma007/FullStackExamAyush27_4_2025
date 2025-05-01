// src/app/component/Report.tsx
import { useEffect, useState } from 'react';
import { getReports } from '../services/reportService';

const Report = () => {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReports = async () => {
      const data = await getReports();
      setReports(data);
      setLoading(false);
    };

    fetchReports();
  }, []);

  if (loading) {
    return <p>Loading reports...</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Sales Report</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Order ID</th>
            <th className="px-4 py-2 border-b">Total</th>
            <th className="px-4 py-2 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td className="px-4 py-2 border-b">{report.id}</td>
              <td className="px-4 py-2 border-b">${report.total}</td>
              <td className="px-4 py-2 border-b">{new Date(report.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
