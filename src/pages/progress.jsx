function Progress() {
  return (
    <div className="p-10 text-white">

      <h1 className="text-3xl font-bold">Your Progress</h1>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-[#0f172a] p-6 rounded-xl">
          <h2>Accuracy</h2>
          <p className="text-gray-400">82%</p>
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl">
          <h2>Topics Completed</h2>
          <p className="text-gray-400">12</p>
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl">
          <h2>Study Streak</h2>
          <p className="text-gray-400">5 days</p>
        </div>

      </div>

    </div>
  );
}

export default Progress;