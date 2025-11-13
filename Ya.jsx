import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Area, ComposedChart } from 'recharts';

const MathGraphs = () => {
  const [activeTab, setActiveTab] = useState('soal1');

  // Data untuk Soal 1 - Fungsi Permintaan P = 600 - Q
  const soal1Data = Array.from({ length: 61 }, (_, i) => {
    const Q = i * 10;
    return {
      Q: Q,
      P: 600 - Q
    };
  });

  // Data untuk Soal 2 - Fungsi Permintaan P = 500 - 6.25Q
  const soal2Data = Array.from({ length: 81 }, (_, i) => {
    const Q = i;
    return {
      Q: Q,
      P: Math.max(0, 500 - 6.25 * Q)
    };
  });

  // Data untuk Soal 3 - Fungsi Penawaran P = 200 + 0.05Q
  const soal3Data = Array.from({ length: 101 }, (_, i) => {
    const Q = i * 100;
    return {
      Q: Q,
      P: 200 + 0.05 * Q
    };
  });

  // Data untuk Soal 5 - Keseimbangan Pasar Game Online
  const soal5Data = Array.from({ length: 15 }, (_, i) => {
    const Q = i;
    return {
      Q: Q,
      Permintaan: Q <= 9 ? 81 - Q * Q : null,
      Penawaran: 7 * Q + 3
    };
  });

  // Data untuk Soal 6 - Keseimbangan dengan Harga Tetap
  const soal6Data = Array.from({ length: 100 }, (_, i) => {
    const Q = i * 1000;
    return {
      Q: Q,
      Permintaan: Math.max(0, 9000 - Q/3),
      Penawaran: 1000 + Q/4
    };
  });

  // Data untuk Soal 7 - Pajak Per Unit
  const soal7Data = Array.from({ length: 20 }, (_, i) => {
    const Q = i;
    return {
      Q: Q,
      Permintaan: 15 - Q,
      Penawaran_Awal: 3 + 0.5 * Q,
      Penawaran_Pajak: 6 + 0.5 * Q
    };
  });

  // Data untuk Soal 8 - Pajak Proporsional
  const soal8Data = Array.from({ length: 20 }, (_, i) => {
    const Q = i;
    return {
      Q: Q,
      Permintaan: 15 - Q,
      Penawaran_Awal: 3 + 0.5 * Q,
      Penawaran_Pajak: Q <= 15 ? (15 - Q) / 0.75 : null
    };
  });

  // Data untuk Soal 9 - Subsidi Konsumen
  const soal9Data = Array.from({ length: 200 }, (_, i) => {
    const P = i;
    return {
      P: P,
      Permintaan_Awal: 15 - 0.1 * P,
      Permintaan_Subsidi: 16.2 - 0.1 * P,
      Penawaran: -6 + 0.2 * P
    };
  });

  // Data untuk Soal 10 - Subsidi Proporsional
  const soal10Data = Array.from({ length: 200 }, (_, i) => {
    const P = i;
    return {
      P: P,
      Permintaan: 300 - 2 * P,
      Penawaran_Awal: 4 * P - 240,
      Penawaran_Subsidi: 5.5 * P - 240
    };
  });

  const tabs = [
    { id: 'soal1', label: 'Soal 1' },
    { id: 'soal2', label: 'Soal 2' },
    { id: 'soal3', label: 'Soal 3' },
    { id: 'soal5', label: 'Soal 5' },
    { id: 'soal6', label: 'Soal 6' },
    { id: 'soal7', label: 'Soal 7' },
    { id: 'soal8', label: 'Soal 8' },
    { id: 'soal9', label: 'Soal 9' },
    { id: 'soal10', label: 'Soal 10' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-2">
          📊 GRAFIK LATIHAN MATEMATIKA EKONOMI
        </h1>
        <p className="text-center text-gray-600 mb-8">Visualisasi Fungsi Permintaan, Penawaran, Pajak & Subsidi</p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white p-4 rounded-lg shadow-md">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Graph Container */}
        <div className="bg-white rounded-xl shadow-2xl p-8">
          
          {/* SOAL 1 */}
          {activeTab === 'soal1' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 1: Fungsi Permintaan Barang X</h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Fungsi: P = 600 - Q</p>
                <p className="text-sm text-gray-600 mt-2">
                  • Titik (500, 100): Saat Q = 500 unit, P = Rp 100<br/>
                  • Titik (450, 150): Saat Q = 450 unit, P = Rp 150<br/>
                  • Slope = -1 (semakin banyak barang, harga turun)
                </p>
              </div>
              <LineChart width={800} height={500} data={soal1Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Q" label={{ value: 'Jumlah (Q)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Harga (P)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="P" stroke="#3b82f6" strokeWidth={3} name="Permintaan (P = 600 - Q)" dot={false} />
                <ReferenceLine x={500} stroke="red" strokeDasharray="3 3" label="Q=500" />
                <ReferenceLine y={100} stroke="red" strokeDasharray="3 3" label="P=100" />
                <ReferenceLine x={450} stroke="green" strokeDasharray="3 3" label="Q=450" />
                <ReferenceLine y={150} stroke="green" strokeDasharray="3 3" label="P=150" />
              </LineChart>
            </div>
          )}

          {/* SOAL 2 */}
          {activeTab === 'soal2' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 2: Permintaan Buku</h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Fungsi: P = 500 - 6,25Q</p>
                <p className="text-sm text-gray-600 mt-2">
                  • Titik (0, 500): Harga Rp 500, tidak ada yang membeli<br/>
                  • Titik (80, 0): Gratis, 80 orang meminta<br/>
                  • 100% orang meminta saat diberikan cuma-cuma
                </p>
              </div>
              <LineChart width={800} height={500} data={soal2Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Q" label={{ value: 'Jumlah Pembeli (Q)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Harga (P)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="P" stroke="#8b5cf6" strokeWidth={3} name="Permintaan (P = 500 - 6.25Q)" dot={false} />
                <ReferenceLine x={0} stroke="red" strokeDasharray="3 3" label="Q=0" />
                <ReferenceLine y={500} stroke="red" strokeDasharray="3 3" label="P=500" />
                <ReferenceLine x={80} stroke="green" strokeDasharray="3 3" label="Q=80" />
                <ReferenceLine y={0} stroke="green" strokeDasharray="3 3" label="P=0 (Gratis)" />
              </LineChart>
            </div>
          )}

          {/* SOAL 3 */}
          {activeTab === 'soal3' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 3: Fungsi Penawaran Produk</h2>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Fungsi: P = 200 + 0,05Q</p>
                <p className="text-sm text-gray-600 mt-2">
                  • Titik (6000, 500): Saat Q = 6.000 unit, P = Rp 500<br/>
                  • Titik (10000, 700): Saat Q = 10.000 unit, P = Rp 700<br/>
                  • Slope = 0,05 (semakin banyak penawaran, harga naik)
                </p>
              </div>
              <LineChart width={800} height={500} data={soal3Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Q" label={{ value: 'Jumlah (Q)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Harga (P)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="P" stroke="#10b981" strokeWidth={3} name="Penawaran (P = 200 + 0.05Q)" dot={false} />
                <ReferenceLine x={6000} stroke="red" strokeDasharray="3 3" label="Q=6000" />
                <ReferenceLine y={500} stroke="red" strokeDasharray="3 3" label="P=500" />
                <ReferenceLine x={10000} stroke="green" strokeDasharray="3 3" label="Q=10000" />
                <ReferenceLine y={700} stroke="green" strokeDasharray="3 3" label="P=700" />
              </LineChart>
            </div>
          )}

          {/* SOAL 5 */}
          {activeTab === 'soal5' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 5: Keseimbangan Pasar Game Online</h2>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Permintaan: P = 81 - Q² | Penawaran: P = 7Q + 3</p>
                <p className="text-sm text-gray-600 mt-2">
                  • Titik Keseimbangan: (Q, P) = (6, 45)<br/>
                  • Saat Q = 6: Permintaan = 81 - 36 = 45 ✓<br/>
                  • Saat Q = 6: Penawaran = 7(6) + 3 = 45 ✓
                </p>
              </div>
              <LineChart width={800} height={500} data={soal5Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Q" label={{ value: 'Jumlah (Q)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Harga (P)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Permintaan" stroke="#ec4899" strokeWidth={3} name="Permintaan (P = 81 - Q²)" />
                <Line type="monotone" dataKey="Penawaran" stroke="#10b981" strokeWidth={3} name="Penawaran (P = 7Q + 3)" />
                <ReferenceLine x={6} stroke="red" strokeDasharray="5 5" label="Q* = 6" />
                <ReferenceLine y={45} stroke="red" strokeDasharray="5 5" label="P* = 45" />
              </LineChart>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="font-bold text-red-600">🎯 TITIK EQUILIBRIUM: Q = 6 unit, P = Rp 45</p>
              </div>
            </div>
          )}

          {/* SOAL 6 */}
          {activeTab === 'soal6' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 6: Keseimbangan dengan Harga Tetap P = 20.000</h2>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Permintaan: P = 9.000 - Q/3 | Penawaran: P = 1.000 + Q/4</p>
                <p className="text-sm text-gray-600 mt-2">
                  • Keseimbangan awal: Q = 13.500, P = 4.500<br/>
                  • Saat P = 20.000: Qd = 0 (tidak ada permintaan)<br/>
                  • Saat P = 20.000: Qs = 76.000 unit<br/>
                  • <strong className="text-red-600">SURPLUS = 76.000 unit!</strong>
                </p>
              </div>
              <LineChart width={800} height={500} data={soal6Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Q" label={{ value: 'Jumlah (Q)', position: 'insideBottom', offset: -5 }} />
                <YAxis domain={[0, 25000]} label={{ value: 'Harga (P)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Permintaan" stroke="#ef4444" strokeWidth={3} name="Permintaan" dot={false} />
                <Line type="monotone" dataKey="Penawaran" stroke="#10b981" strokeWidth={3} name="Penawaran" dot={false} />
                <ReferenceLine y={4500} stroke="blue" strokeDasharray="3 3" label="P* = 4.500 (Equilibrium)" />
                <ReferenceLine y={20000} stroke="red" strokeWidth={2} label="P = 20.000 (Harga Tetap)" />
                <ReferenceLine x={13500} stroke="blue" strokeDasharray="3 3" label="Q* = 13.500" />
              </LineChart>
              <div className="mt-4 p-4 bg-red-100 rounded-lg">
                <p className="font-bold text-red-700">⚠️ KELEBIHAN PENAWARAN (SURPLUS) = 76.000 unit</p>
                <p className="text-sm mt-2">Harga terlalu tinggi → Konsumen tidak mau membeli → Produsen kesulitan jual barang</p>
              </div>
            </div>
          )}

          {/* SOAL 7 */}
          {activeTab === 'soal7' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 7: Pajak Per Unit (Rp 3 per unit)</h2>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Permintaan: P = 15 - Q | Penawaran Awal: P = 3 + 0,5Q</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>SEBELUM PAJAK:</strong> Q₀ = 8, P₀ = 7<br/>
                  <strong>SETELAH PAJAK:</strong> Q₁ = 6, Pc = 9, Pp = 6<br/>
                  • Pajak Total = Rp 18<br/>
                  • Beban Konsumen = Rp 12 (67%)<br/>
                  • Beban Produsen = Rp 6 (33%)
                </p>
              </div>
              <LineChart width={800} height={500} data={soal7Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Q" label={{ value: 'Jumlah (Q)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Harga (P)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Permintaan" stroke="#3b82f6" strokeWidth={3} name="Permintaan (P = 15 - Q)" />
                <Line type="monotone" dataKey="Penawaran_Awal" stroke="#10b981" strokeWidth={3} name="Penawaran Awal (P = 3 + 0.5Q)" />
                <Line type="monotone" dataKey="Penawaran_Pajak" stroke="#ef4444" strokeWidth={3} strokeDasharray="5 5" name="Penawaran + Pajak (P = 6 + 0.5Q)" />
                <ReferenceLine x={8} stroke="green" strokeDasharray="3 3" label="Q₀ = 8" />
                <ReferenceLine y={7} stroke="green" strokeDasharray="3 3" label="P₀ = 7" />
                <ReferenceLine x={6} stroke="red" strokeDasharray="3 3" label="Q₁ = 6" />
                <ReferenceLine y={9} stroke="red" strokeDasharray="3 3" label="Pc = 9" />
                <ReferenceLine y={6} stroke="orange" strokeDasharray="3 3" label="Pp = 6" />
              </LineChart>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="font-bold text-green-800">Sebelum Pajak</p>
                  <p className="text-sm">Q = 8, P = 7</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="font-bold text-red-800">Setelah Pajak</p>
                  <p className="text-sm">Q = 6, Pc = 9, Pp = 6</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <p className="font-bold text-yellow-800">Pajak Total</p>
                  <p className="text-sm">Rp 18 (3 × 6)</p>
                </div>
              </div>
            </div>
          )}

          {/* SOAL 8 */}
          {activeTab === 'soal8' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 8: Pajak Proporsional (25%)</h2>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Permintaan: P = 15 - Q | Penawaran: P = 3 + 0,5Q</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>SEBELUM PAJAK:</strong> Q₀ = 8, P₀ = 7<br/>
                  <strong>SETELAH PAJAK 25%:</strong> Q₁ = 6,6, Pc = 8,4, Pp = 6,3<br/>
                  • Pajak Total = Rp 13,86<br/>
                  • Beban Konsumen = Rp 9,24 (67%)<br/>
                  • Beban Produsen = Rp 4,62 (33%)
                </p>
              </div>
              <LineChart width={800} height={500} data={soal8Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Q" label={{ value: 'Jumlah (Q)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Harga (P)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Permintaan" stroke="#3b82f6" strokeWidth={3} name="Permintaan" />
                <Line type="monotone" dataKey="Penawaran_Awal" stroke="#10b981" strokeWidth={3} name="Penawaran Awal" />
                <Line type="monotone" dataKey="Penawaran_Pajak" stroke="#ef4444" strokeWidth={3} strokeDasharray="5 5" name="Penawaran + Pajak 25%" />
                <ReferenceLine x={8} stroke="green" strokeDasharray="3 3" label="Q₀ = 8" />
                <ReferenceLine y={7} stroke="green" strokeDasharray="3 3" label="P₀ = 7" />
                <ReferenceLine x={6.6} stroke="red" strokeDasharray="3 3" label="Q₁ = 6.6" />
                <ReferenceLine y={8.4} stroke="red" strokeDasharray="3 3" label="Pc = 8.4" />
                <ReferenceLine y={6.3} stroke="orange" strokeDasharray="3 3" label="Pp = 6.3" />
              </LineChart>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="font-bold text-green-800">Sebelum Pajak</p>
                  <p className="text-sm">Q = 8, P = 7</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="font-bold text-red-800">Setelah Pajak 25%</p>
                  <p className="text-sm">Q = 6,6, Pc = 8,4, Pp = 6,3</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <p className="font-bold text-yellow-800">Pajak Total</p>
                  <p className="text-sm">Rp 13,86</p>
                </div>
              </div>
            </div>
          )}

          {/* SOAL 9 */}
          {activeTab === 'soal9' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 9: Subsidi Rp 12 per unit</h2>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Qd = 15 - 0,1P | Qs = -6 + 0,2P</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>SEBELUM SUBSIDI:</strong> Q₀ = 8, P₀ = 70<br/>
                  <strong>SETELAH SUBSIDI:</strong> Q₁ = 8,8, Pc = 62, Pp = 74<br/>
                  • Total Subsidi = Rp 105,6<br/>
                  • Subsidi dinikmati konsumen = Rp 10,56<br/>
                  • Subsidi dinikmati produsen = Rp 1,44
                </p>
              </div>
              <LineChart width={800} height={500} data={soal9Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="P" label={{ value: 'Harga (P)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Jumlah (Q)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Permintaan_Awal" stroke="#3b82f6" strokeWidth={3} name="Permintaan Awal" dot={false} />
                <Line type="monotone" dataKey="Permintaan_Subsidi" stroke="#8b5cf6" strokeWidth={3} strokeDasharray="5 5" name="Permintaan + Subsidi" dot={false} />
                <Line type="monotone" dataKey="Penawaran" stroke="#10b981" strokeWidth={3} name="Penawaran" dot={false} />
                <ReferenceLine y={8} stroke="green" strokeDasharray="3 3" label="Q₀ = 8" />
                <ReferenceLine x={70} stroke="green" strokeDasharray="3 3" label="P₀ = 70" />
                <ReferenceLine y={8.8} stroke="red" strokeDasharray="3 3" label="Q₁ = 8.8" />
              </LineChart>
              <div className="mt-4 p-4 bg-green-100 rounded-lg">
                <p className="font-bold text-green-700">✅ SUBSIDI meningkatkan konsumsi dari 8 → 8,8 unit</p>
                <p className="text-sm mt-2">Konsumen bayar lebih murah, produsen terima lebih tinggi</p>
              </div>
            </div>
          )}

          {/* SOAL 10 */}
          {activeTab === 'soal10' && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Soal 10: Subsidi Proporsional 37,5%</h2>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg">Qd = 300 - 2P | Qs = 4P - 240</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>SEBELUM SUBSIDI:</strong> Q₀ = 120, P₀ = 90<br/>
                  <strong>SETELAH SUBSIDI 37,5%:</strong> Q₁ = 156, Pc = 72, Pp = 99<br/>
                  • Beban konsumen = Rp 2.808<br/>
                  • Beban produsen = Rp 4.212<br/>
                  • Total Subsidi = Rp 7.020
                </p>
              </div>
              <LineChart width={800} height={500} data={soal10Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="P" label={{ value: 'Harga (P)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Jumlah (Q)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Permintaan" stroke="#3b82f6" strokeWidth={3} name="Permintaan" dot={false} />
                <Line type="monotone" dataKey="Penawaran_Awal" stroke="#10b981" strokeWidth={3} name="Penawaran Awal" dot={false} />
                <Line type="monotone" dataKey="Penawaran_Subsidi" stroke="#22c55e" strokeWidth={3} strokeDasharray="5 5" name="Penawaran + Subsidi 37.5%" dot={false} />
                <ReferenceLine y={120} stroke="green" strokeDasharray="3 3" label="Q₀ = 120" />
                <ReferenceLine x={90} stroke="green" strokeDasharray="3 3" label="P₀ = 90" />
                <ReferenceLine y={156} stroke="red" strokeDasharray="3 3" label="Q₁ = 156" />
                <ReferenceLine x={72} stroke="red" strokeDasharray="3 3" label="Pc = 72" />
              </LineChart>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="font-bold text-green-800">Sebelum Subsidi</p>
                  <p className="text-sm">Q = 120, P = 90</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="font-bold text-blue-800">Setelah Subsidi</p>
                  <p className="text-sm">Q = 156, Pc = 72</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <p className="font-bold text-yellow-800">Total Subsidi</p>
                  <p className="text-sm">Rp 7.020</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Info */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">📝 Ringkasan Rumus Penting</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-blue-800 mb-2">Fungsi Permintaan</p>
              <p>• P = a - bQ (slope negatif)</p>
              <p>• Semakin tinggi harga, semakin sedikit permintaan</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold text-green-800 mb-2">Fungsi Penawaran</p>
              <p>• P = c + dQ (slope positif)</p>
              <p>• Semakin tinggi harga, semakin banyak penawaran</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-800 mb-2">Keseimbangan Pasar</p>
              <p>• Qd = Qs dan Pd = Ps</p>
              <p>• Titik potong kurva permintaan & penawaran</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-bold text-orange-800 mb-2">Pajak & Subsidi</p>
              <p>• Pajak: Kurva penawaran naik</p>
              <p>• Subsidi: Kurva permintaan/penawaran turun</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MathGraphs;
