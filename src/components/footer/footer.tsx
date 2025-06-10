import type { FC } from "react";
import { Link } from "react-router";

const footerLinks = [
  {
    title: "Features",
    items: [
      { label: "Data Processing", path: "/features/data-processing" },
      { label: "User Interface", path: "/features/user-interface" },
      { label: "Performance", path: "/features/performance" },
      { label: "Accessibility", path: "/features/accessibility" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", path: "/docs" },
      { label: "Examples", path: "/examples" },
      { label: "API Reference", path: "/api" },
      { label: "Tutorials", path: "/tutorials" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Community", path: "/community" },
      { label: "Issues", path: "/issues" },
      { label: "Contributing", path: "/contributing" },
      { label: "License", path: "/license" },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="mdi mdi-table text-blue-500 text-2xl" />
              <span className="text-xl font-bold">DataTable Pro</span>
            </div>
            <p className="text-slate-400 mb-4">
              Advanced datatable features and implementation guides for senior
              developers.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="mdi mdi-github-circle text-2xl" />
              </Link>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-slate-400">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>
            &copy; 2024 DataTable Pro. Crafted for experienced developers by
            expert developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
