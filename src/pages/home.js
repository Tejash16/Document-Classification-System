import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-content bg-gray-100 text-black">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-4 border-r">
          <h2 className="font-semibold mb-2">Onedrive</h2>
          <ul className="space-y-1 text-gray-700">
            <li>Drive C:
              <ul className="pl-4 text-gray-500">
                <li>Users</li>
                <li>Documents</li>
                <li>Downloads</li>
                <li>Pictures</li>
                <li>Videos</li>
              </ul>
            </li>
            <li>Drive D:</li>
          </ul>
          <h2 className="font-semibold mt-4 mb-2">Local Drive</h2>
          <ul className="space-y-1 text-gray-700">
            <li>Drive C:
              <ul className="pl-4 text-gray-500">
                <li>Users</li>
                <li>Documents</li>
                <li>Downloads</li>
                <li>Pictures</li>
                <li>Videos</li>
              </ul>
            </li>
            <li>Drive D:
              <ul className="pl-4 text-gray-500">
                <li>Pictures</li>
                <li>Videos</li>
              </ul>
            </li>
          </ul>
        </aside>

        {/* File List Section */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center bg-white p-2 shadow rounded">
            <p className="text-sm">C / Users / Downloads</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Last Modified: 15/2/25</span>
              <input type="text" placeholder="Search" className="border px-2 py-1 rounded" />
            </div>
          </div>

          <table className="w-full mt-4 bg-white shadow rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Size</th>
                <th className="p-2 text-left">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">📁 Memorandums ↗</td>
                <td className="p-2">-</td>
                <td className="p-2">15/2/25</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">📁 Agreements ↗</td>
                <td className="p-2">-</td>
                <td className="p-2">15/2/25</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">📄 Form Template.pdf</td>
                <td className="p-2">-</td>
                <td className="p-2">15/2/25</td>
              </tr>
            </tbody>
          </table>

          <button className="mt-4 px-4 py-2 border rounded bg-white shadow">Filters</button>
        </main>
      </div>
    </div>
  )
};

export default Home;
