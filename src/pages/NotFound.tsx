import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-lg">
        <div className="gold-line mx-auto mb-8" />
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl mb-4">Page Not Found</h2>
        <p className="font-body text-muted-foreground mb-10 text-lg">
          The page you're looking for doesn't exist or has been moved. Let us guide you back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-gold inline-flex items-center justify-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-navy inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
        <div className="gold-line mx-auto mt-12" />
      </div>
    </div>
  );
};

export default NotFound;
