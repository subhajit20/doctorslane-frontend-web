interface AppointmentStatsProps {
  appointments: any[];
}

const AppointmentStats = ({ appointments }: AppointmentStatsProps) => {
  const today = new Date().toISOString().split('T')[0];
  
  const stats = {
    total: appointments.length,
    today: appointments.filter(a => a.date === today).length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    pending: appointments.filter(a => a.status === 'scheduled').length,
    completed: appointments.filter(a => a.status === 'completed').length,
    cancelled: appointments.filter(a => a.status === 'cancelled').length,
    emergency: appointments.filter(a => a.type === 'emergency').length,
    consultation: appointments.filter(a => a.type === 'consultation').length,
    followUp: appointments.filter(a => a.type === 'follow-up').length,
    routine: appointments.filter(a => a.type === 'routine').length
  };

  const statCards = [
    {
      name: 'Total Appointments',
      value: stats.total,
      change: '+12%',
      changeType: 'increase',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Today's Appointments",
      value: stats.today,
      change: '+5%',
      changeType: 'increase',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Confirmed',
      value: stats.confirmed,
      change: '+8%',
      changeType: 'increase',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Pending',
      value: stats.pending,
      change: '-3%',
      changeType: 'decrease',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const typeStats = [
    { name: 'Emergency', value: stats.emergency, color: 'bg-red-500' },
    { name: 'Consultation', value: stats.consultation, color: 'bg-purple-500' },
    { name: 'Follow-up', value: stats.followUp, color: 'bg-indigo-500' },
    { name: 'Routine', value: stats.routine, color: 'bg-green-500' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-md bg-indigo-500 flex items-center justify-center">
                  <div className="text-white">{stat.icon}</div>
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="flex items-center">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Types Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Appointment Types</h3>
        <div className="space-y-4">
          {typeStats.map((type) => (
            <div key={type.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-4 w-4 rounded-full ${type.color} mr-3`}></div>
                <span className="text-sm font-medium text-gray-700">{type.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-semibold text-gray-900">{type.value}</span>
                <span className="text-sm text-gray-500 ml-2">
                  ({stats.total > 0 ? Math.round((type.value / stats.total) * 100) : 0}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Status Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.confirmed}</div>
            <div className="text-sm text-gray-500">Confirmed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.pending}</div>
            <div className="text-sm text-gray-500">Pending</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">{stats.completed}</div>
            <div className="text-sm text-gray-500">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
            <div className="text-sm text-gray-500">Cancelled</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentStats; 