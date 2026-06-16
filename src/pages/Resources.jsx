function Resources() {
  return (
    <div className="p-10 text-white">

      <h1 className="text-3xl font-bold">Resources</h1>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-[#0f172a] p-6 rounded-xl">
          Notes
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl">
          Quizzes
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl">
          PDFs
        </div>

      </div>

    </div>
  );
}

export default Resources;