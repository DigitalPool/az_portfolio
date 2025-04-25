export default function BackendShowcase() {
	return (
	  <section className="bg-black text-[#b7aa98] py-32 px-6">
		<div className="max-w-6xl mx-auto">
		  <h2 className="uppercase tracking-[0.3em] text-2xl mb-12 border-t border-neutral-800 pt-8">
			Backend Systems
		  </h2>
  
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{backendProjects.map((project, index) => (
			  <div key={index} className="border border-neutral-800 rounded-lg overflow-hidden group">
				<video controls className="w-full h-72 object-cover">
				  <source src={project.video} type="video/mp4" />
				  Your browser does not support the video tag.
				</video>
				<div className="p-4 flex justify-between items-center">
				  <div className="text-sm">{project.title}</div>
				  {project.link && (
					<a
					  href={project.link}
					  target="_blank"
					  rel="noopener noreferrer"
					  className="px-3 py-1.5 text-xs font-medium text-[#b7aa98] border border-[#b7aa98] rounded hover:bg-[#b7aa98] hover:text-black transition-colors duration-200 whitespace-nowrap"
					>
					  View Project
					</a>
				  )}
				</div>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  }
  
  const backendProjects = [
	{ 
	  title: "BankApp with React/Next/Node/Tailwind CSS", 
	  video: "/showcase/BankApp.mp4",
	  link: "https://banking-app-taupe.vercel.app/sign-in" 
	},
	{ 
	  title: "Link Manager extension with HTML, CSS & JS", 
	  video: "/showcase/SlinkMan_demo.mp4",
	  link: "https://github.com/DigitalPool/SlinkMan" 
	},
	{ 
	  title: "Integrated Terminal built with C", 
	  video: "/showcase/integrated_terminal.mp4",
	  link: "https://github.com/DigitalPool/42-Minishell" 
	},
	{ 
	  title: "Islamly Mobile App built with kotlin", 
	  video: "/showcase/Islamly_Mobile_App.mp4",
	  link: "https://play.google.com/store/apps/details?id=com.islamly.muslims_connected" 
	},
  ];