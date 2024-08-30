import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import './index.css';

class Dashboard extends Component {
  state = {
    salesData: [
      { name: '6/30/2024 - 7/6/2024', sales: 1404, orders: 4, avgOrderValue: 351.00 },
      { name: '7/7/2024 - 7/13/2024', sales: 1200, orders: 3, avgOrderValue: 400.00 },
      { name: '7/14/2024 - 7/20/2024', sales: 1000, orders: 2, avgOrderValue: 500.00 },
      { name: '7/21/2024 - 7/27/2024', sales: 900, orders: 2, avgOrderValue: 450.00 },
    ],
    pieData: [
      { name: 'WooCommerce Store', value: 44.2 },
      { name: 'Shopify Store', value: 55.8 }
    ]
  };

  render() {
    const COLORS = ['#2CDED5', '#FA7E7E'];

    return (
      <div className="container">
        <div className="dashboard-container">
          <div className="heading-container">
            <h3 className='heading'>Dashboard</h3>
          </div> 

          <div className="chart-row">
            <div className="chart-container">
              <h3>Sales vs Orders</h3>
              <div className="responsive-container">
                <ResponsiveContainer>
                  <LineChart data={this.state.salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="orders" stroke="#ff7300" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="sales" stroke="#387908" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart-container">
              <h3>Portion of Sales</h3>
              <div className="responsive-container">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={this.state.pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {this.state.pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
