import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-purple-soft flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>
        <p className="text-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="primary">
              <Home className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <Link href="/">
            <Button variant="secondary">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
