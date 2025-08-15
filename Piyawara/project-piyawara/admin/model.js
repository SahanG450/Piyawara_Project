import React, { useState } from "react";
import {
  Home,
  UtensilsCrossed,
  ShoppingCart,
  Wrench,
  Package,
  Users,
  BarChart3,
  DollarSign,
  Bell,
  ChevronDown,
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
  Star,
} from "lucide-react";

const PiyawaraAdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    {
      id: "food-meals",
      label: "Food & Meals",
      icon: UtensilsCrossed,
      submenu: [
        { id: "daily-rice", label: "Daily Rice Packets" },
        { id: "sweets-catering", label: "Sweets & Catering" },
        { id: "home-cooked", label: "Home-Cooked Foods" },
      ],
    },
    {
      id: "grocery",
      label: "Grocery & Essentials",
      icon: ShoppingCart,
    },
    {
      id: "rentals",
      label: "Rental Items",
      icon: Wrench,
    },
    {
      id: "marketplace",
      label: "Other Categories",
      icon: Package,
      submenu: [
        { id: "handmade", label: "Handmade Products" },
        { id: "local-products", label: "Local Products" },
      ],
    },
    {
      id: "users",
      label: "User Management",
      icon: Users,
    },
    {
      id: "payments",
      label: "Payment Holdings",
      icon: DollarSign,
    },
    {
      id: "analytics",
      label: "Analytics & Reports",
      icon: BarChart3,
    },
  ];

  const dashboardStats = [
    {
      title: "Total Revenue",
      value: "Rs. 234,567",
      change: "+12.5%",
      color: "bg-blue-500",
    },
    {
      title: "Active Orders",
      value: "1,247",
      change: "+8.2%",
      color: "bg-green-500",
    },
    {
      title: "Pending Approvals",
      value: "23",
      change: "-5.1%",
      color: "bg-yellow-500",
    },
    {
      title: "Total Users",
      value: "8,934",
      change: "+15.3%",
      color: "bg-purple-500",
    },
  ];

  const pendingPayments = [
    {
      id: "PAY001",
      buyer: "Kasun Silva",
      seller: "Fresh Foods Lanka",
      amount: "Rs. 2,450",
      timeLeft: "18h 30m",
      category: "Rice Packets",
    },
    {
      id: "PAY002",
      buyer: "Nimali Fernando",
      seller: "Spice Garden",
      amount: "Rs. 1,200",
      timeLeft: "22h 15m",
      category: "Spices",
    },
    {
      id: "PAY003",
      buyer: "Amal Perera",
      seller: "Tool Rental Pro",
      amount: "Rs. 850",
      timeLeft: "6h 45m",
      category: "Tools",
    },
  ];

  const recentActivities = [
    {
      type: "approval",
      message: 'New seller "Home Baker" pending approval',
      time: "2 hours ago",
      status: "pending",
    },
    {
      type: "payment",
      message: 'Payment released to "Fresh Vegetables Co"',
      time: "4 hours ago",
      status: "completed",
    },
    {
      type: "report",
      message: "Complaint filed against order #ORD789",
      time: "6 hours ago",
      status: "review",
    },
    {
      type: "user",
      message: "New user registration: Priya Wickramasinghe",
      time: "8 hours ago",
      status: "completed",
    },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p
                  className={`text-sm ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </div>
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Holdings */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Payment Holdings (24h)
            </h3>
            <span className="text-sm text-gray-500">
              Auto-release in progress
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Payment ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Buyer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Seller
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Time Left
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pendingPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {payment.buyer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {payment.seller}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-orange-600 font-medium">
                    {payment.timeLeft}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {payment.category}
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button className="text-green-600 hover:text-green-800">
                      Release Now
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Hold
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Activities
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === "completed"
                      ? "bg-green-500"
                      : activity.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <button className="p-4 border border-blue-200 rounded-lg text-center hover:bg-blue-50 transition-colors">
              <Bell className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <span className="text-sm text-gray-700">Send Announcement</span>
            </button>
            <button className="p-4 border border-green-200 rounded-lg text-center hover:bg-green-50 transition-colors">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <span className="text-sm text-gray-700">Bulk Approve</span>
            </button>
            <button className="p-4 border border-purple-200 rounded-lg text-center hover:bg-purple-50 transition-colors">
              <Download className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <span className="text-sm text-gray-700">Export Data</span>
            </button>
            <button className="p-4 border border-orange-200 rounded-lg text-center hover:bg-orange-50 transition-colors">
              <AlertTriangle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <span className="text-sm text-gray-700">View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard();
      case "daily-rice":
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                Daily Rice Packets Management
              </h2>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    Bulk Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    <XCircle className="w-4 h-4 inline mr-2" />
                    Bulk Reject
                  </button>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search ads..."
                      className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-center py-12 text-gray-500">
                <UtensilsCrossed className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>
                  Daily rice packet approval interface would be implemented here
                </p>
                <p className="text-sm mt-2">
                  Features: Approve/reject ads, monitor stock, set guidelines,
                  view reviews
                </p>
              </div>
            </div>
          </div>
        );
      case "payments":
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                Payment Holdings Management
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                All payments are held for 24 hours before automatic release to
                sellers
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Clock className="w-8 h-8 text-yellow-600 mr-3" />
                    <div>
                      <p className="font-semibold text-yellow-800">
                        Pending Release
                      </p>
                      <p className="text-2xl font-bold text-yellow-900">
                        Rs. 45,670
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-green-800">
                        Released Today
                      </p>
                      <p className="text-2xl font-bold text-green-900">
                        Rs. 128,940
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                    <div>
                      <p className="font-semibold text-red-800">On Hold</p>
                      <p className="text-2xl font-bold text-red-900">
                        Rs. 3,250
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Payment ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Order Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Time Remaining
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pendingPayments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {payment.id}
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Buyer: {payment.buyer}
                            </p>
                            <p className="text-sm text-gray-600">
                              Seller: {payment.seller}
                            </p>
                            <p className="text-xs text-gray-500">
                              {payment.category}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {payment.amount}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                            Holding
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-orange-600 font-medium">
                          {payment.timeLeft}
                        </td>
                        <td className="px-6 py-4 text-sm space-x-2">
                          <button className="text-green-600 hover:text-green-800 font-medium">
                            Release Now
                          </button>
                          <button className="text-red-600 hover:text-red-800 font-medium">
                            Extend Hold
                          </button>
                          <button className="text-blue-600 hover:text-blue-800 font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900 capitalize">
                {activeSection.replace("-", " ")}
              </h2>
            </div>
            <div className="p-6">
              <div className="text-center py-12 text-gray-500">
                <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>This section is under development</p>
                <p className="text-sm mt-2">
                  All the specified functionalities will be implemented here
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarCollapsed ? "w-16" : "w-64"
        } bg-white shadow-sm border-r transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            {!sidebarCollapsed && (
              <span className="font-bold text-xl text-gray-900">
                Piyawara Admin
              </span>
            )}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-gray-100 transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                    : "text-gray-700"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </button>

              {!sidebarCollapsed && item.submenu && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => setActiveSection(subItem.id)}
                      className={`w-full text-left px-3 py-1 rounded text-sm hover:bg-gray-100 transition-colors ${
                        activeSection === subItem.id
                          ? "text-blue-600 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <div className="w-4 h-4 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                </div>
              </button>
              <h1 className="text-xl font-semibold text-gray-900 capitalize">
                {activeSection === "dashboard"
                  ? "Dashboard Overview"
                  : activeSection.replace("-", " ")}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-gray-700">
                    Admin User
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default PiyawaraAdminPanel;
