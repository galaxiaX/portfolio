import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className="h-screen w-full bg-[#02aeaf]">
      <div className="text-white flex flex-col gap-4 items-center justify-center h-full w-full">
        <h2 className="text-5xl font-bold">Project page</h2>
        <p className="text-xl font-medium mb-4">this page not available yet.</p>
        <Link
          to="/"
          className="bg-white hover:bg-slate-200 px-6 py-3 text-[#02aeaf] font-bold rounded-2xl"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
