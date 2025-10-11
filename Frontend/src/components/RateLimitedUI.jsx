import { ZapOff, RefreshCw } from "lucide-react";

const RateLimitedUI = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="card w-96 bg-base-100 shadow-2xl border border-error/20">
        <div className="card-body items-center text-center p-8">
          {/* Animated Icon */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-error/10 rounded-full animate-ping"></div>
            <div className="relative bg-error/20 p-4 rounded-full">
              <ZapOff className="text-error" size={48} />
            </div>
          </div>

          {/* Content */}
          <h2 className="card-title text-2xl font-bold text-error mb-2">
            Too Many Requests
          </h2>
          
          <p className="text-base-content/70 mb-2 leading-relaxed">
            You've exceeded the rate limit. Please wait a moment before trying again.
          </p>
          
          <div className="text-sm text-base-content/50 mb-6">
            This helps us maintain service quality for all users.
          </div>

          {/* Action Buttons */}
          <div className="card-actions justify-center w-full">
            <button
              onClick={handleRetry}
              className="btn btn-primary btn-lg w-full gap-2"
            >
              <RefreshCw size={20} />
              Try Again
            </button>
            
            <button
              onClick={() => window.history.back()}
              className="btn btn-ghost btn-sm"
            >
              Go Back
            </button>
          </div>

          {/* Progress indicator */}
          <div className="w-full mt-4">
            <div className="flex justify-between text-xs text-base-content/50 mb-1">
              <span>Retry available in</span>
              <span>~30 seconds</span>
            </div>
            <progress 
              className="progress progress-error w-full" 
              value="60" 
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;